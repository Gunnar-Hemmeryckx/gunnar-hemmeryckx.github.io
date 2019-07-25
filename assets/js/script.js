particlesJS.load('particles-js', 'assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});
$(window).on('load', function (e) {
  $('.navbar').css({ 'background': 'transparent' });
    $('.navbar-brand').css({ 'color': 'white' });
    $('.nav-link').css({ 'color': 'white' });
    $('.ghLogo').css({ 'color': 'white' });
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
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll < 300) {
    $('.navbar').css({ 'background': 'transparent' });
    $('.nav-link').css({ 'color': 'white' });
    $('.navbar-brand').css({ 'color': 'white' });
    $('.navbar-toggler-icon').removeClass('inverse');
  } else {
    $('.navbar').css({ 'background': 'rgba(255, 255, 255, 1)'});
    $('.nav-link').css({ 'color': 'black' });
    $('.navbar-brand').css({ 'color': 'black' });
    $('.navbar-toggler-icon').addClass('inverse');
  }
});