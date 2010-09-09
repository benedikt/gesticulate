//= require "movement"

Gesticulate.Gesture = function(name) {
  this.name = name;

  this._update = function(event) {}

  this.finger = function() {
    return new Gesticulate.Movement();
  }
}
