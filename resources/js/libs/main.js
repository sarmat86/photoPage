import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
import  Instafeed  from  "../../../node_modules/instafeed.js/instafeed.js";
import  blazy   from  "../../../node_modules/blazy/blazy.js";



let slider = null;
const app = {};
 
function rebuildSlider(view) {
    console.log('rebuild')
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
        lazyloadSelector: '.main-slider .slides',

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

function initMain() {
    let view = getView();
    if (document.querySelector('.main-slider .slides')) {
        rebuildSlider(view);  
    }
    
    window.addEventListener('resize', function (event) {
        const newView = getView();
        if (view !== newView) {
            view = newView;
            rebuildSlider(newView);
        }
    });
    document.querySelector('#arrow-down').addEventListener('click', (e) => {
        e.preventDefault();
        const  sliderHeight = document.querySelector('.main-section').offsetHeight;
        window.scroll(0, sliderHeight + 50);
      });

    if (view === 1) {
        window.addEventListener('scroll', function() {
            const  sliderHeight = document.querySelector('.main-section').offsetHeight;
            const humb = document.querySelector('#humb-btn');
            if(window.pageYOffset > sliderHeight){
                humb.classList.add('color');
            }
            else{
                if(humb.classList.contains('color')){
                    humb.classList.remove('color');
                }
            }
    });
    }
    
    initInstaPlugin();

    return view;

}

const changeTextColor = function (info, eventName) {
    const elem = document.querySelector('.main-section .tns-slide-active');
    const color = elem.getAttribute('data-color');
    document.querySelector('.menu').style.color = color;
    document.querySelector('.main-section').style.color = color;
}


document.addEventListener("DOMContentLoaded", function () {
   
    if(document.querySelector("#home_page")){
        initMain();
        
    }else{
        subPageInit();
    }

    document.addEventListener('click', (event)=>{
        if (event.target.matches('#humb-btn')) {
           event.target.classList.toggle('animate-btn');
            document.querySelector('.page-container').classList.toggle('active');
            document.querySelector('body').classList.toggle('scroll-stop');  
        }
    });
    app.bLazy = new blazy({
        src: 'blazySrc'
    });
    setTimeout(()=>{
        app.bLazy.revalidate();
        console.log('bLazy revalidate');       
    }, 2000);
    disableLoader();
});

// function setSliderHeight(){
//     const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//     const elem = document.querySelector('#home_page .main-section');
//     elem.style.height = windowHeight+'px';
//     return windowHeight;
// }

function disableLoader() {
    const loader = document.querySelector('#overlay');
    loader.style.display = 'none';
}

function initInstaPlugin(){
   
}

function subPageInit(){

    const customerItem = document.querySelector('#customerZone .customerZone-item');
    if (customerItem) {
        document.addEventListener('click', (e)=> {
            
            if (e.target.closest('.closeForm')) {
                e.preventDefault();
                e.target.closest('.customerZone-item').classList.remove('active');
            }else if(e.target.matches('.custZoneForm button')){
                e.target.closest('form').submit();
            }
            else if (e.target.closest('.customerZone-item')) {
                e.preventDefault();
                e.target.closest('.customerZone-item').classList.add('active');
            }   
        });
    }
}



  