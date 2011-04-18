Gesticulate.Language.RecognizerBuilder = function(name) {
  var stroke;

  this.name = name;

  this.move = this.moves = function () {
    stroke = new Gesticulate.Language.LineBuilder();
    return stroke;
  };

  this.follows = function() {
    var points = [];
    for(var i = 1; i < arguments.length; i += 2) {
      points.push(new Gesticulate.Geometry.Point(arguments[i - 1], arguments[i]));
    }
    stroke = new Gesticulate.Geometry.Polyline(points);
  };

  this.describes = function(letter) {
    stroke = new Gesticulate.Language.LetterStrokeBuilder(letter);
  };

  this.circles = function() {
    stroke = new Gesticulate.Recognizer.Stroke(new Gesticulate.Geometry.Circle(0, 0));
  };

  this.build = function() {
    if(stroke && stroke.build instanceof Function) {
      stroke = stroke.build();
    }

    return new Gesticulate.Recognizer.Stroke(stroke);
  };
};
