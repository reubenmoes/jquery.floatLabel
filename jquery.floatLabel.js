
//https://github.com/reubenmoes/jquery.floatLabel
(function($){
  'use strict';

  var floatLabel = {

    defaultOptions: {
      activeClass: 'is-active',
      noTransitionClass: 'u-no-transition'
    },

    init: function(element, options){

      options = $.extend({}, floatLabel.defaultOptions, options);

      $(element).data('floatLabel', options);

      floatLabel.bindEvents(element, options);
    },


    bindEvents: function(element, options){

      var $input = $(element).find('input, textarea');
      $input.on('focus', function() {
        $(element).addClass(options.activeClass);
      });

      $input.on('blur', function() {
        if (!$(this).val().length) {
          $(element).removeClass(options.activeClass);
        }
      });

    },


    methods: {
      //Check to see if a float label class needs to be changed
      //Note: we try disable any transitions by adding a class
      refresh: function(element){

        var $input = $(element).find('input, textarea');
        var $label = $(element).find('label');
        var options = $(element).data('floatLabel');

        $(element).addClass(options.noTransitionClass);

        if ($input.is(':focus')) {
          $(element).addClass(options.activeClass);
        }

        if ($input.val() !== '') {
          $(element).addClass(options.activeClass);
        }
        else {
          $(element).removeClass(options.activeClass);
        }

        setTimeout(function(){
          $(element).removeClass(options.noTransitionClass);
        });

      }//refresh()
    }//methods{}

  };


  //Make it a jQuery plugin
  $.fn.floatLabel = function(options) {
    // Check if we are calling the plugin with a method
    // ex $(element).floatLabel('restore');
    if ( floatLabel.methods[options] ) {
      return this.each(function() {
        floatLabel.methods[options](this);
      });
    }
    //Regular plugin init
    //$(element).floatLabel()
    else {
      return this.each(function(index) {
        if(!$.data(this, 'floatLabel')){
          floatLabel.init(this, options);
        }
      });
    }
  };


})(jQuery);

