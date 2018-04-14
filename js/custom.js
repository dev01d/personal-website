// preloader
$(window).load(function () {
  $('.preloader').fadeOut(600); // set duration in brackets    
});
/* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
$(function () {
  // ------- WOW ANIMATED ------ //
  var wow = new WOW({
    mobile: false
  });
  wow.init();
  // HIDE MOBILE MENU AFTER CLIKING ON A LINK
  $('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
  });
  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
    effect: 'fadeScale',
  });
});