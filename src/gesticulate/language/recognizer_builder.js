Gesticulate.Language.RecognizerBuilder = function(name) {
  var recognizer;

  this.name = name;

  this.move = this.moves = function () {
    var stroke = new Gesticulate.Language.LineBuilder();
    recognizer = new Gesticulate.Language.StrokeRecognizerBuilder(stroke);
    stroke.__proto__ = recognizer;
    return stroke;
  };

  this.follows = function() {
    var points = [];
    for(var i = 1; i < arguments.length; i += 2) {
      points.push(new Gesticulate.Geometry.Point(arguments[i - 1], arguments[i]));
    }

    var stroke = new Gesticulate.Geometry.Polyline(points);
    recognizer = new Gesticulate.Language.StrokeRecognizerBuilder(stroke);
    return recognizer;
  };

  this.describesA = this.describesAn = this.describes = function(letter) {
    var stroke = new Gesticulate.Language.LetterStrokeBuilder(letter);
    recognizer = new Gesticulate.Language.StrokeRecognizerBuilder(stroke);
    stroke.__proto__ = recognizer;
    return stroke;
  };

  this.stays = function() {
    recognizer = new Gesticulate.Language.StayRecognizerBuilder();
    return recognizer;
  };

  this.circles = function() {
    var stroke = new Gesticulate.Language.CircleBuilder();
    recognizer = new Gesticulate.Language.StrokeRecognizerBuilder(stroke);
    stroke.__proto__ = recognizer;
    return stroke;
  };

  this.build = function() {
    return recognizer.build();
  };
};
