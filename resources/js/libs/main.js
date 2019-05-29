$(document).ready(function() {
  
$('.sidebar-toggle-wrapper button').on('click', function(){
  $(this).toggleClass('is-active');
  $('.sidebar').toggleClass('toggled');

});

$('.nav li a:not(:only-child)').on('click', function() {
  //  $(this).parent().toggleClass('active');
  $(this).next().slideToggle();
});

$('.user-options').on('click', function() {
  $(this).find('.dropdown-user').slideToggle();
});

});