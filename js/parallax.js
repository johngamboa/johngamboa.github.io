$(function() {

  $(document).ready(function() {

    $('.mdl-layout, .mdl-layout__content').stellar({
      horizontalScrolling: false,
      parallaxBackgrounds: true,
      positionProperty: 'transform',
      responsive: true
    });

    ($(window).width() > 1024) ? $('#landing').attr('data-stellar-background-ratio', '1.5')
                               : $('#landing').removeAttr('data-stellar-background-ratio');
  });

  $(window).resize(function() {
    ($(window).width() > 1024) ? $('#landing').attr('data-stellar-background-ratio', '1.5')
                               : $('#landing').removeAttr('data-stellar-background-ratio');

    $.stellar('refresh');
  });
});
