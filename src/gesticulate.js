var Gesticulate = function() {
  var mouseDown = false;

  return {
    __gestures: {},

    setup: function(options) {
      var events = ['touchstart', 'touchmove', 'touchend'];

      if(options) {
        if(options.simulate) {
          events = events.concat('mousedown', 'mousemove', 'mouseup');
        }
      }

      for(var i = 0; i < events.length; i++) {
        document.addEventListener(events[i], this, false);
      }
    },

    registerGesture: function(name, block) {
      var gesture = new Gesticulate.Language.Gesture();
      block.call(this, gesture);
      this.__gestures[name] = gesture;
    },

    observe: function(element, name, handler) {

    },

    fire: function(element, gesture) {

    },

    handleEvent: function(event) {
      var touches = null;

      if(/^mouse(up|down|move)$/(event.type)) {
        switch(event.type) {
          case 'mouseup':
            mouseDown = false;
            break;
          case 'mousedown':
            mouseDown = true;
          case 'mousemove':
            if(mouseDown) touches = [new Gesticulate.Touch(event.pageX, event.pageY, 'mouse')];
        }
      } else if(/^touch(start|move|end)$/(event.type)) {
        touches = [];
        for(var i = 0; i < event.touches.length; i++) {
          var touch = event.touches[i];
          touches.push(new Gesticulate.Touch(touch.pageX, touch.pageY, touch.identifier));
        }
      }


      if(touches) {
        for(var gesture in this.__gestures) {
          this.__gestures[gesture].update(touches);
        }
      }
    }
  };
}();


//= require "gesticulate/geometry"
//= require "gesticulate/recognizer"
//= require "gesticulate/touch"
//= require "gesticulate/touch_mapper"
//= require "gesticulate/gesture"
//= require "gesticulate/language"