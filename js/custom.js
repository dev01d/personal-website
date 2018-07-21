// preloader
$(window).load(function() {
  $('.preloader').fadeOut(400) // set duration
})
// Wow animations
const wow = new WOW({
  // not on mobile
  mobile: false
})
wow.init()
// Hide mobile menu after clicking on a link
$('.navbar-collapse a').click(function() {
  $('.navbar-collapse').collapse('hide')
})
