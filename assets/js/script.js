particlesJS.load('particles-js', '/assets/particles.json', function () {
  console.log('callback - particles.js config loaded');
});
$(window).on('load', function (e) {
  $('.navbar').css({ 'background': 'transparent' });
  $('.nav-link').css({ 'color': 'white' });
  $("#ghLogo").attr("src","assets/images/GHLogoWhite.svg");

  $(".nav-link").hover(function () {
    $(this).css('color', 'rgb(41, 210, 216)');
  }, function () {
    $(this).css('color', 'white');
  });

  $('.nav-link, .navbar-brand').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(sectionTo).offset().top - 50)
    }, 1200);
  });

  $('#about').waypoint(function () {
    var delay = 300;
    $(".progress-bar").each(function (i) {
      $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);
    });
  },
    {
      offset: '25%'
    }
  );

});

$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  if (scroll < 300) {
    $('.navbar').css({ 'background': 'transparent','box-shadow': '','-moz-box-shadow': '','-webkit-box-shadow': '' });
    $('.nav-link').css({ 'color': 'white' });
    $('.navbar-toggler-icon').removeClass('inverse');

    $(".nav-link").hover(function () {
      $(this).css('color', 'rgb(41, 210, 216)');
    }, function () {
      $(this).css('color', 'white');
    });

    $("#ghLogo").attr("src", "assets/images/GHLogoWhite.svg");

  } else {
    $('.navbar').css({ 'background': 'rgba(255, 255, 255, 1)','box-shadow': '0 4px 6px -6px #999','-moz-box-shadow': '0 4px 6px -6px #999','-webkit-box-shadow': '0 4px 6px -6px #999' });
    $('.nav-link').css({ 'color': 'black' });
    $('.navbar-toggler-icon').addClass('inverse');

    $(".nav-link").hover(function () {
      $(this).css('color', 'rgb(41, 210, 216)');
    }, function () {
      $(this).css('color', 'black');
    });

    $("#ghLogo").attr("src","assets/images/GHLogo.svg");

  }
});
