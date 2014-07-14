;(function ($) {
  'use strict';
  $(function () {
    var wrap = $('.portfolio_middle')
      , elements = $('body, .box-graph')
      , counter = 0
      , timestamp = 0;

    wrap.bind('DOMMouseScroll mousewheel', function (e) {
      var target;

      if (e.timeStamp - timestamp < 1000) {
        timestamp = e.timeStamp - timestamp;
        return false;
      }

      timestamp = e.timeStamp - timestamp;
      
      if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
        counter++;
      } else {
        counter--;
      }

      if (counter < 0) {
        counter = 0;
      }

      if (counter >= elements.length) {
        counter = elements.length - 1;
      }

      target = elements.eq(counter);
      target.ScrollTo({
        callback: function () {
          target.stop();
        }
      }); 
      return false;
    });

  });
})(jQuery);