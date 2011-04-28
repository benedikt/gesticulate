Gesticulate.Language.GestureBuilder = function() {
  var options = {}, recognizer_builders = [];

  this.isHorizontal = function() {
    options.mapping = 'horizontal';
  };

  this.isVertical = function() {
    options.mapping = 'vertical';
  };

  this.isTimed = function() {
    options.mapping = 'timing';
  };

  this.finger = this.touch = this.nose = function(name) {
    if(!name) { name = recognizer_builders.length; }
    var recognizer = new Gesticulate.Language.RecognizerBuilder(name);
    recognizer_builders.push(recognizer);
    return recognizer;
  };

  this.build = function() {
    var recognizers = [];
    for(var i = 0; i < recognizer_builders.length; i++) {
      recognizers.push(recognizer_builders[i].build());
    }
    return new Gesticulate.Gesture(recognizers, options);
  };
};
