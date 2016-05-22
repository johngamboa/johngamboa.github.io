$(function() {

  var landing = $('#landing');

  $.stellar({
    horizontalScrolling : false,
    responsive          : true,
    verticalOffset      : 90
  });

  $(document).ready(function() {
    ($(window).width() > 1024) ? landing.attr('data-stellar-background-ratio', '0.35')
                               : landing.removeAttr('data-stellar-background-ratio');

    $.stellar('refresh');
  });

  $(window).resize(function() {
    if ($(window).width() > 1024) {
      landing.attr('data-stellar-background-ratio', '0.35');
    }
    else {
      landing.removeAttr('data-stellar-background-ratio');
    }

    $.stellar('refresh');
  });
});
