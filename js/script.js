particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});
$(document).ready(function () {
  $('.nav-link, .navbar-brand').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(sectionTo).offset().top - 50)
    }, 1200);
  });
  
  var delay = 250;
  $(".progress-bar").each(function (i) {
    $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);
  });
});