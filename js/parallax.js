$(function() {

  var desktopWidth = 1024,
      landing       = $('landing');

  $('.mdl-layout, .mdl-layout__content').stellar({
    horizontalScrolling : false,
    parallaxBackgrounds : true,
    responsive          : true
  });

  $(document).ready(function() {
    ($(window).width() > desktopWidth) ? landing.attr('data-stellar-background-ratio', '0.35')
                                       : landing.removeAttr('data-stellar-background-ratio');

    $.stellar('refresh');
  });

  $(window).resize(function() {
    if ($(window).width() > desktopWidth) {
      landing.attr('data-stellar-background-ratio', '0.35');
      landing.css('background-position', 'top, top');
    }
    else {
      landing.css('background-position', 'bottom, bottom');
      landing.removeAttr('data-stellar-background-ratio');
    }

    $.stellar('refresh');
  });
});
