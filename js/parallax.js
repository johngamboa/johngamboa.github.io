$(function() {

  var landing = $('#landing');

  $('.mdl-layout, .mdl-layout__content').stellar({
    horizontalScrolling : false,
    responsive          : true
  });

  $(document).ready(function() {
    ($(window).width() > 1024) ? landing.attr('data-stellar-background-ratio', '0.5')
                               : landing.removeAttr('data-stellar-background-ratio');

    $.stellar('refresh');
  });

  $(window).resize(function() {
    console.log($(window).width());
    if ($(window).width() > 1024) {
      landing.attr('data-stellar-background-ratio', '0.5');
    }
    else {
      landing.removeAttr('data-stellar-background-ratio');
    }

    $.stellar('refresh');
  });
});
