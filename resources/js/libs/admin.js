require('trumbowyg');
require('trumbowyg/plugins/upload/trumbowyg.upload');
require('trumbowyg/plugins/emoji/trumbowyg.emoji');



$(document).ready(function () {

    $('.sidebar-toggle-wrapper button').on('click', function () {
        $(this).toggleClass('is-active');
        $('.sidebar').toggleClass('toggled');

    });

    $('.nav li a:not(:only-child)').on('click', function () {
        $(this).next().slideToggle();
    });

    $('.user-options').on('click', function () {
        $(this).find('.dropdown-user').slideToggle();
    });

    var secondLevel = $('.nav-second-lvl').find('.active');
    if (secondLevel) {
        secondLevel.parent().addClass('active');
    }

    $.trumbowyg.svgPath = '/fonts/trumbowyg/icons.svg';

    $('textarea').trumbowyg({
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

    document.addEventListener('click', function (event) {
        if (!event.target.matches('#selectAll')) return;
        isChecked = event.target.checked;
        let inputs = document.querySelectorAll('input[name="deleteMedia[]"]');
        inputs.forEach((elem, i) => {
            elem.checked = isChecked;
        });
    })
});
