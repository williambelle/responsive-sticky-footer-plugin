(function($, window) {
  'use strict';

  // Plugin definition
  $.fn.responsiveStickyFooter = function(opts) {

    // Extend default options with those provided
    var options = $.extend({}, $.fn.responsiveStickyFooter.defaults, opts);

    $.fn.responsiveStickyFooter.setFooterPosition(this, options);
    var self = this;
    $(window).scroll(function() {
      $.fn.responsiveStickyFooter.setFooterPosition(self, options);
    }).resize(function() {
      $.fn.responsiveStickyFooter.setFooterPosition(self, options);
    });

    // Chain
    return this;
  };

  // Plugin defaults
  $.fn.responsiveStickyFooter.defaults = {
  };

  // Set footer position
  $.fn.responsiveStickyFooter.setFooterPosition = function(element, options) {
    var footerHeight = $(element).height();
    var htmlHeight = $(document.body).height() + footerHeight + 50;
    if (htmlHeight < $(window).height()) {
      $(element).css({position: 'absolute'});
    } else {
      $(element).css({position: 'static'});
    }
  };

})(jQuery, window);
