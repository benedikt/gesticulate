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

      var eventType = 'move';

      switch(event.type) {
        case 'touchstart':
          activeTouches += event.changedTouches.length;
          eventType = 'start';
          break;
        case 'touchend':
          eventType = 'end';
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
        document.addEventListener(events[i], handleEvent, false);
      }
    },

    /**
     * Gesticulate.registerGesture(name, gesture) -> null
     **/
    registerGesture: function(name, gesture) {
      gestures[name] = gesture;
    },

    /**
     * Gesticulate.buildGesture(name, block) -> null
     **/
    buildGesture: function(name, block) {
      if(block instanceof Function) {
        gesture = new Gesticulate.Language.GestureBuilder();
        block.call(this, gesture);
        gestures[name] = gesture.build();
      }
    },

    /**
     * Gesticulate.observe(element, name, handler [, alwaysCallHandler]) -> null
     **/
    observe: function(element, name, handler, alwaysCallHandler) {
      var gesture = gestures[name];
      element.addEventListener('touchend', function(event) {
        if(event.touches.length === 0) {
          if (alwaysCallHandler) {
            handler(gesture.recognize());
          } else if(gesture.recognize()) {
            handler(true);
          }
        }
      });
    },

    /**
     * Gesticulate.fire(element, gesture) -> null
     **/
    fire: function(element, gesture, recognized) {
    }
  };
}();

//= require "gesticulate/util"
//= require "gesticulate/geometry"
//= require "gesticulate/recognizer"
//= require "gesticulate/touch"
//= require "gesticulate/touch_mapper"
//= require "gesticulate/gesture"
//= require "gesticulate/language"
