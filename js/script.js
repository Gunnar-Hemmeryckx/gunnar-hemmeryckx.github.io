$('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(sectionTo).offset().top - 50)
    }, 1200);
});