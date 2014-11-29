/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2014 OA Wu Design
 */

(function( factory ) {
    if ((typeof define === 'function') && define.amd) define (['jquery'], factory);
    else factory (jQuery);
}(function ($) {

  $.fn.extend ({
    OAtab: function (opt) {
      var d4Opt = {
        titleSelector: '.title',
        panelSelector: '.panel',
      }

      var init = function (opt) {
        var $title = $(this).find (opt.titleSelector).addClass ('oa-tab-title').clone (true, true);
        var $panel = $(this).find (opt.panelSelector).addClass ('oa-tab-panel').clone (true, true);
        $(this).addClass ('oa-tab').empty ();

        $('<div />').addClass ('oa-tab-titles').append (
            $('<div />').addClass ('oa-tab-titles-container').addClass ('clearfix').append ($title)
          ).appendTo ($(this));

        $('<div />').addClass ('oa-tab-shadow-line').appendTo ($(this));

        $('<div />').addClass ('oa-tab-panels').append (
            $('<div />').addClass ('oa-tab-panels-container').addClass ('clearfix').append ($panel)
          ).appendTo ($(this));

        $title.on ('mouseenter click', function () {
            var n = $(this).parent ().children ().removeClass ('active').index ($(this).addClass ('active')),
            $rn = $panel.eq (n);
            $panel.parent ().css ({'height': parseFloat ($rn.css ('height')) + parseFloat ($rn.css ('margin-top')) + parseFloat ($rn.css ('margin-bottom')) + 'px'});

            $panel.map (function (i) {
              $(this).css ({'left': (i - n) * (parseFloat ($rn.css ('width')) + parseFloat ($rn.css ('margin-left')) + parseFloat ($rn.css ('margin-right'))) + 'px'});
            })
          }).eq (0).click ()
      }

      opt = $.extend({}, d4Opt, opt);

      return $(this).each (function () {
        init.bind ($(this), opt).apply ();
      });
    }
  });
}));