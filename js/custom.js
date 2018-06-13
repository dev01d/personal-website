// Sentry init
Raven.config(
  'https://8fc9bb60a6d64dd68e99edde1b84582d@sentry.jasonbehnke.net/2'
).install()
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
