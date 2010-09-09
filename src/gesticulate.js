var Gesticulate = {
  __gestures: {}
};

//= require "gesture"

Gesticulate.setup = function() {
  var events = ['touchstart', 'touchmove', 'touchend'];
  for(var i = 0; i < events.length; i++) {
    document.addEventListener(events[i], Gesticulate, false);
  }
}

Gesticulate.registerGesture = function(name, block) {
  var gesture = new Gesticulate.Gesture();
  block.call(this, gesture);
  this.__gestures[name] = gesture;
}

Gesticulate.observe = function(element, name, handler) {

}

Gesticulate.fire = function(element, gesture) {

}

Gesticulate.handleEvent = function(event) {
  console.info(event);
}
