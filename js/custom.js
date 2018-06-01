// preloader
$(window).load(function() {
  $('.preloader').fadeOut(500) // set duration
})
// Wow animations

const wow = new WOW({
  // not on mobile
  mobile: false
})
wow.init()

// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function() {
  $('.navbar-collapse').collapse('hide')
})
// Lightbox
;(function($) {
  $('.swipebox').swipebox()
})(jQuery)
