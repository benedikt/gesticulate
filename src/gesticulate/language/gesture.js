Gesticulate.Language.Gesture = Class.create({

  initialize: function(name) {
    this.name = name;
  },

  finger: function() {
    return new Gesticulate.Language.Movement();
  }

});
