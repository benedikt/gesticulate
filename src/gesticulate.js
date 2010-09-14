//= require <prototype/prototype>

var Gesticulate = Class.create();
Object.extend(Gesticulate, {
  __gestures: {},

  setup: function() {
    var events = ['touchstart', 'touchmove', 'touchend'];
    for(var i = 0; i < events.length; i++) {
      document.addEventListener(events[i], this, false);
    }
  },

  registerGesture: function(name, block) {
    var gesture = new Gesticulate.Gesture();
    block.call(this, gesture);
    this.__gestures[name] = gesture;
  },

  observe: function(element, name, handler) {

  },

  fire: function(element, gesture) {

  },

  handleEvent: function(event) {
    console.info(event);
  }
});

//= require "gesture"
