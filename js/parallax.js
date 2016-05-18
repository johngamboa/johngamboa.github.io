$(function() {

  $('.mdl-layout, .mdl-layout__content').stellar({
    horizontalScrolling: false,
    parallaxBackgrounds: true,
    positionProperty   : 'transform',
    responsive         : true
  });

  $(document).ready(function() {
    ($(window).width() > 1024) ? $('#landing').attr('data-stellar-background-ratio', '1.25')
                               : $('#landing').removeAttr('data-stellar-background-ratio');

    $.stellar('refresh');
  });

  $(window).resize(function() {
    if ($(window).width() > 1024) {
      $('#landing').attr('data-stellar-background-ratio', '1.5');
      $('#landing').css('background-position', 'top, top');
    }
    else {
      $('#landing').css('background-position', 'bottom, bottom');
      $('#landing').removeAttr('data-stellar-background-ratio');
    }

    $.stellar('refresh');
  });
});
