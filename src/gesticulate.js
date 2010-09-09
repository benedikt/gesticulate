var Gesticulate = {
  __gestures: {}
};

//= require "gesture"

Gesticulate.registerGesture = function(name, block) {
  var gesture = new Gesticulate.Gesture();
  block.call(this, gesture);
  this.__gestures[name] = gesture;
}

Gesticulate.observe = function(element, name, handler) {

}

Gesticulate.fire = function(element, gesture) {

}
