require('trumbowyg');
require('trumbowyg/plugins/upload/trumbowyg.upload');
require('trumbowyg/plugins/emoji/trumbowyg.emoji');



$(document).ready(function() {
  
$('.sidebar-toggle-wrapper button').on('click', function(){
  $(this).toggleClass('is-active');
  $('.sidebar').toggleClass('toggled');

});

$('.nav li a:not(:only-child)').on('click', function() {
  $(this).next().slideToggle();
});

$('.user-options').on('click', function() {
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
  plugins:{
    upload: {
      serverPath: '',
    }
  }
});

});