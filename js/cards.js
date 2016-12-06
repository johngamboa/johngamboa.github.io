$(function() {
  var cogs187a   = $('#cogs187a > div.mdl-card__supporting-text > p'),
      itzlit     = $('#itzlit > div.mdl-card__supporting-text > p'),
      youber     = $('#youber > div.mdl-card__supporting-text > p'),
      tritoned   = $('#tritoned > div.mdl-card__supporting-text > p'),
      johngamboa = $('#johngamboa > div.mdl-card__supporting-text > p'),
      fitkit     = $('#fitkit > div.mdl-card__supporting-text > p'),
      studybuddy = $('#studybuddy > div.mdl-card__supporting-text > p'),
      ucsdcki    = $('#ucsdcki > div.mdl-card__supporting-text > p');

  var cards = [johngamboa, fitkit, studybuddy, ucsdcki];

  var phoneWidth = 480;

  /* Adjust side-by-side card text height to be even */
  function adjustCardHeight() {

    resetDefaultCardHeight();

    (cogs187a.height() > itzlit.height()) ? itzlit.height(cogs187a.height())
                                            : cogs187a.height(itzlit.height());

    (youber.height() > tritoned.height()) ? tritoned.height(youber.height())
                                            : youber.height(tritoned.height());

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
