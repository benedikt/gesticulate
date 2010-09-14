//= require "movement"

Gesticulate.Gesture = Class.create({

  initialize: function(name) {
    this.name = name;
  },

  _update: function(event) {},

  finger: function() {
    return new Gesticulate.Movement();
  }

});
