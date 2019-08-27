require('trumbowyg');
require('trumbowyg/plugins/upload/trumbowyg.upload');
require('trumbowyg/plugins/emoji/trumbowyg.emoji');

const imgTemplate = `<div data-id="" data-position="" class="photo-tile">
<div class="move_handle"><i class="icon-move"></i></div>
<div class="photo_tile_img_wrapper"><img src=""></div>
<div class="photo_tile_btns__wrapper">
        <a href="#" class="btn btn-danger galPhoto__del"><i class="icon-trash-empty"></i></a>
      </div>
        <div class="photo_tile_input_wrapper">
          <input type="text" name="alt" placeholder="photo description" value="">
          </div>
</div>`;

document.addEventListener("DOMContentLoaded", function () {

    console.log('admin-panel');
    Dropzone.autoDiscover = false;
    let galleryDropZone = null;
    if (document.getElementsByClassName('dropzone').length) {
        const id = document.querySelector('.dropzone').getAttribute('data-id');
        const type = document.querySelector('.dropzone').getAttribute('data-type');
        Dropzone.autoDiscover = false;
        galleryDropZone = new Dropzone("#galleryPhotosDropZone", {
            url: "/admin/galleryPhoto",
            method: 'POST',
            paramName: 'galleryPhoto',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            acceptedFiles: 'image/*',
            createImageThumbnails: false,
            previewTemplate: imgTemplate,
            previewsContainer: '.gallery_photos_wrapper',
            params: {
                gallery_id: id,
                galleryphotoable_type: type
            },
        });
        galleryDropZone.on("success", function (file, response) {
            let elem = file.previewElement;
            elem.setAttribute('data-id', response.id);
            elem.querySelector('img').setAttribute('src', response.url)
            file.previewElement.id = response.id;
        });
    }

    $.trumbowyg.svgPath = '/fonts/trumbowyg/icons.svg';

    $('.trumbArea').trumbowyg({
        btns: [
            ['viewHTML'],
            ['formatting'],
            ['strong', 'em', 'del'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['horizontalRule'],
            ['removeformat'],
            ['fullscreen'],
            ['upload'],
            ['emoji'],
        ],
        plugins: {
            upload: {
                serverPath: '/admin/media',
                fileFieldName: 'file',
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                urlPropertyName: 'url',

                success: function (data, trumbowyg, $modal, values) {
                    $('.media_upload').append('<input type="hidden" name="mediaID[]" value="' + data.photo.id + '"/>')

                    var url = data.url;
                    trumbowyg.execCmd('insertImage', url, false, true);
                    var $img = $('img[src="' + url + '"]:not([alt])', trumbowyg.$box);
                    $img.attr('alt', values.alt);
                    if (trumbowyg.o.imageWidthModalEdit && parseInt(values.width) > 0) {
                        $img.attr({
                            width: values.width
                        });
                    }
                    setTimeout(function () {
                        trumbowyg.closeModal();
                    }, 250);
                    trumbowyg.$c.trigger('tbwuploadsuccess', [trumbowyg, data, url]);
                }
            }
        }
    });

    $(".gallery_photos_wrapper").sortable({
            items: '.photo-tile',
            handle: '.move_handle',
            cancel: '.photo_tile_btns__wrapper',
            cursor: 'move',
            opacity: 0.5,
            containment: '.gallery_photos_wrapper',
            distance: 20,
            tolerance: 'pointer',
        }).disableSelection()
        .on("click", ".galPhoto__del", function (event) {
            event.preventDefault();
            deletePhotoRequest(event.target.closest('.photo-tile').getAttribute('data-id'));

        });
    $(".gallery_list_wrapper").sortable({
        items: '.gallery_item',
        handle: '.move_handle',
        cancel: '.gallery_item_btns__wrapper',
        cursor: 'move',
        opacity: 0.5,
        containment: '.gallery_list_wrapper',
        distance: 20,
        tolerance: 'pointer',
    });

    const secondLevel = document.querySelector('.nav-second-lvl .active');
    if (secondLevel) {
        secondLevel.parentNode.classList.add('active');
    }

    document.addEventListener('click', function (event) {
        if (event.target.closest('#sidebar_switcher')) {
            event.target.closest('#sidebar_switcher').classList.toggle('is-active');
            document.querySelector('.sidebar').classList.toggle('toggled');
        } else if (event.target.matches('.nav li a:not(:only-child)')) {
            event.target.nextElementSibling.classList.toggle('open');
        } else if (event.target.matches('.user-options')) {
            event.target.querySelector('.dropdown-user').classList.toggle('open');
        } else if (event.target.matches('#selectAll')) {
            isChecked = event.target.checked;
            let inputs = document.querySelectorAll('input[name="deleteMedia[]"]');
            inputs.forEach((elem, i) => {
                elem.checked = isChecked;
            });
        } else if (event.target.matches('.del-submit')) {
            event.preventDefault();
            var form = document.querySelector('.delete-form');
            form.submit();
        } else if (event.target.matches('.galPhoto__save')) {
            event.preventDefault();
            saveGalleryPhoto(getGalleryData('.photo-tile', 1));
        } else if (event.target.matches('.gallery__publish')) {
            event.preventDefault();
            publishGallery(event.target);
        } else if (event.target.matches('.galPosition__update')) {
            event.preventDefault();
            updateGalleryPosition(getGalleryData('.gallery_item'));
        } else {
            return false;
        }
    });

    document.addEventListener('change', function (event) {
        if ( event.target.matches('#file')) {
            onLoadFile(event);
        }
        else if ( event.target.matches('.file_thumnail')) {
            onLoadThumbnail(event);
        }else{
            return false;
        }
    });
});


function updateGalleryButton(target, confirmed) {
    if (confirmed) {
        target.classList.remove('btn-info');
        target.classList.add('btn-secondary');
        target.innerHTML = 'unpublish';
    } else {
        target.classList.remove('btn-secondary');
        target.classList.add('btn-info');
        target.innerHTML = 'publish';
    }
}

function publishGallery(target) {
    const id = target.closest('.gallery_item').getAttribute('data-id');
    const galleryType = document.querySelector('.gallery_list_wrapper').getAttribute('data-type');
    loader(true);
    $.ajax({
        type: 'POST',
        url: '/admin/publish',
        dataType: 'JSON',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: {
            id: id,
            galleryType: galleryType
        },
        success: function (response) {
            loader(false);
            let published = '';
            if (response.confirmed) {
                published = 'Gallery has been published!';
            } else {
                published = 'Gallery has been unpublished!';
            }
            alertify.alert('Success', published);
            updateGalleryButton(target, response.confirmed);

        },
        error: function (xhr) {
            console.log(xhr.responseText);
            loader(false);
            alertify.alert('Error', 'An error occurred while publishing the gallery. Try again later');
        }
    });
}

function updateGalleryPosition(data) {
    loader(true);
    $.ajax({
        type: 'POST',
        url: '/admin/updatePosition',
        dataType: 'JSON',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: data,
        success: function (response) {
            loader(false);
            alertify.alert('Success', 'Gallery position has been saved!');
        },
        error: function (xhr) {
            console.log(xhr.responseText);
            loader(false);
            alertify.alert('Error', 'An error occurred while saving the gallery. Try again later');
        }
    });
}

function getGalleryData(selector, alt = 0) {
    const elems = document.querySelectorAll(selector);
    let galleryType = document.querySelector('.gallery_list_wrapper');
    if (galleryType) {
        galleryType = galleryType.getAttribute('data-type');  
    }
    elems.forEach((elem, i) => {
        elem.setAttribute('data-position', i + 1);
    });
    let resultData = {
        galleryData: [],
        galleryType: galleryType
    };
    elems.forEach((elem, i) => {
        let obj = {};

        obj.id = elem.getAttribute('data-id');
        obj.position = elem.getAttribute('data-position');
        if (alt) {
            obj.alt = elem.getElementsByTagName('input').alt.value;
        }
        resultData.galleryData.push(obj);
    });
    console.log(resultData);
    
    return resultData;
}

function updateGallery() {
    const form = document.querySelector('.gallery_create_form');
    form.submit();
}

function saveGalleryPhoto(data) {
    if (!data.galleryData.length) {
        alertify.alert('Error', 'You have not added any photos!'); 
        return false;
    }
    loader(true);
    $.ajax({
        type: 'POST',
        url: '/admin/galleryPhoto/updateAll',
        dataType: 'JSON',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: data,
        success: function (response) {
            loader(false);
            updateGallery();
        },
        error: function (xhr) {
            console.log(xhr.responseText);
            loader(false);
            alertify.alert('Error', 'An error occurred while saving the gallery. Try again later');
        }
    });
}

function deletePhotoRequest(id) {
    loader(true);
    $.ajax({
        type: 'DELETE',
        url: '/admin/galleryPhoto/' + id,
        dataType: 'JSON',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function (response) {
            loader(false);
            alertify.alert('Success', 'Photo has been deleted!');
            deletePhotoFromGallery(response.deleted);
        },
        error: function (xhr) {
            loader(false);
            alertify.alert('Error', 'An error has occurred. Try again later');
            console.log(xhr.responseText);
        }
    });
}

function deletePhotoFromGallery(id) {
    let photo = document.querySelector('div[data-id="' + id + '"]');
    photo.remove();
}

function loader(flag) {
    let loader = document.createElement('div');
    let cover = document.createElement('div');
    cover.className = 'body-cover';
    loader.className = "loader-wrapper";
    loader.innerHTML = `<div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
  </div>`;

    const body = document.querySelector('body');
    if (flag) {
        body.append(loader);
        body.append(cover);
    } else {
        document.querySelector('.loader-wrapper').remove();
        document.querySelector('.body-cover').remove();
    }
}

let onLoadFile = function(event) {
    const output = document.querySelector('.thumbnail_preview');
    const thumDesc = document.querySelector('.thumbnail_description');
    if (thumDesc) {
        thumDesc.classList.add('active');
    }
    output.src = URL.createObjectURL(event.target.files[0]);
};

let onLoadThumbnail = function(event) {
    const wrapper = event.target.closest('.slide-add-section'); 
     let output = wrapper.querySelector('.slide_thumbnail');
    wrapper.querySelector('.thumbnail_description').classList.add('active');
     output.src = URL.createObjectURL(event.target.files[0]);
};