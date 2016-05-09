# Example 


## haml

```
.form__group.float-label.js-float-label
  %label{'for': 'email2'} Email address
  %input{'type': 'text', 'id': 'email2', 'name': 'email2'}
```

## JS
```

(function($){
  'use strict';

  function init(){
    $('.js-float-label').floatLabel({
      //Defaults:
      activeClass: 'is-active',
      noTransitionClass: 'u-no-transition'
    });
  }

  $(document).on('ready', init);

})(jQuery);



```
