/**
 * Gesticulate
 **/
var Gesticulate = function() {
  var self = {},
      mouseDown = false,
      activeTouches = 0,
      gestures = [];

  var handleEvent = function(event) {
    var touches = null, gesture;

    if(/^(touchstart|mousedown)$/.match(event.type) && activeTouches === 0) {
      for(gesture in gestures) {
        if(gestures.hasOwnProperty(gesture)) {
          gestures[gesture].reset();
        }
      }
    }

    if(/^mouse(up|down|move)$/.match(event.type)) {
      switch(event.type) {
        case 'mouseup':
          activeTouches -= 1;
          mouseDown = false;
          break;
        case 'mousedown':
          activeTouches += 1;
          mouseDown = true;
        case 'mousemove':
          if(mouseDown) touches = [new Gesticulate.Touch(event.pageX, event.pageY, 'mouse')];
      }
    } else if(/^touch(start|move|end)$/.match(event.type)) {
      touches = [];

      switch(event.type) {
        case 'touchstart':
          activeTouches += event.changedTouches.length;
          break;
        case 'touchend':
          activeTouches -= event.changedTouches.length;
          break;
      }

      for(var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        touches.push(new Gesticulate.Touch(touch.pageX, touch.pageY, touch.identifier));
      }
    }

    for(gesture in gestures) {
      if(gestures.hasOwnProperty(gesture)) {
        gestures[gesture].update(touches);
      }
    }
  };

  return {
    /**
     * Gesticulate.setup([options]) -> null
     **/
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

    /**
     * Gesticulate.registerGesture(name, block) -> null
     **/
    registerGesture: function(name, block) {
      var gesture = new Gesticulate.Language.Gesture();
      block.call(this, gesture);
      gestures[name] = gesture;
    },

    /**
     * Gesticulate.observe(element, name, handler) -> null
     **/
    observe: function(element, name, handler) {

    },

    /**
     * Gesticulate.fire(element, gesture) -> null
     **/
    fire: function(element, gesture) {

    }
  };
}();


//= require "gesticulate/geometry"
//= require "gesticulate/recognizer"
//= require "gesticulate/touch"
//= require "gesticulate/touch_mapper"
//= require "gesticulate/gesture"
//= require "gesticulate/language"