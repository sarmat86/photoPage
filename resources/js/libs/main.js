import {
    tns
} from "../../../node_modules/tiny-slider/src/tiny-slider";

let slider = null;

function rebuildSlider(view) {
    if (slider) {
        slider.destroy();
    }
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide) => {
        const newUrl = slide.getAttribute('src' + view);
        if (newUrl) {
            slide.setAttribute('data-src', newUrl);
        }
    })
    slider = tns({
        container: '.main-slider',
        slideBy: 'page',
        autoplay: true,
        nav: false,
        autoplayButtonOutput: false,
        controlsText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
        lazyload: true,
        lazyloadSelector: '.main-slider .slides'

    });
    slider.events.on('transitionStart', changeTextColor);
    changeTextColor();
}

function getView() {
    const viewNode = document.getElementById('viewType');
    let view = window.getComputedStyle(viewNode).width;
    view = parseInt(view.replace('px', ''), 10);
    return view;
}

function init() {
    const view = getView();
    rebuildSlider(view);
    return view;
}
const changeTextColor = function (info, eventName) {
    const elem = document.querySelector('.main-section .tns-slide-active');
    const color = elem.getAttribute('data-color');
    document.querySelector('.menu').style.color = color;
}


document.addEventListener("DOMContentLoaded", function () {

    let lastView = init();
    window.addEventListener('resize', function (event) {
        const newView = getView();
        if (lastView !== newView) {
            lastView = newView;
            rebuildSlider(newView);
        }
    });
});
