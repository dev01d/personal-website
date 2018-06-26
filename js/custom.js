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
// HIDE MOBILE MENU AFTER CLIKING ON A LINK
$('.navbar-collapse a').click(function() {
  $('.navbar-collapse').collapse('hide')
})
// Google Analytics
window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-113541043-1')
