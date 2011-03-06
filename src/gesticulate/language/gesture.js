Gesticulate.Language.Gesture = function(name) {
  this.name = name;

  this.finger = function() {
    return new Gesticulate.Language.Movement();
  };
};
