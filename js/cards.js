$(function() {
  var johngamboa = $('#johngamboa > div.mdl-card__supporting-text > p'),
      fitkit     = $('#fitkit > div.mdl-card__supporting-text > p'),
      studybuddy = $('#studybuddy > div.mdl-card__supporting-text > p'),
      ucsdcki    = $('#ucsdcki > div.mdl-card__supporting-text > p');

  var cards = [johngamboa, fitkit, studybuddy, ucsdcki];

  var phoneWidth = 480;

  /* Adjust side-by-side card text height to be even */
  function adjustCardHeight() {
    (johngamboa.height() > fitkit.height()) ? fitkit.height(johngamboa.height())
                                            : johngamboa.height(fitkit.height());

    (studybuddy.height() > ucsdcki.height()) ? ucsdcki.height(studybuddy.height())
                                             : studybuddy.height(ucsdcki.height());
  }

  /*
   * When resizing to phone screen, reset default card heights since cards are not side-by-side anymore,
   * but above and below each other
   */
  function resetDefaultCardHeight() {
    for (var i in cards) cards[i].css('height', 'auto');
  }

  $(document).ready(function() {
    ($(window).width() >= phoneWidth) ? adjustCardHeight()
                                      : resetDefaultCardHeight();
  });

  $(window).resize(function() {
    ($(window).width() >= phoneWidth) ? adjustCardHeight()
                                      : resetDefaultCardHeight();
  });
});
