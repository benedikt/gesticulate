Gesticulate.Language.Finger = function() {
  var recognizer;

  function moves(options) {
    recognizer = new Gesticulate.Recognizer.Line(0, 0, 100, 100);
  }
  this.moves = moves;
  this.move = moves;

  this.follows = function() {
    var points = [];
    for(var i = 1; i < arguments.length; i += 2) {
      points.push(new Gesticulate.Geometry.Point(arguments[i - 1], arguments[i]));
    }
    recognizer = new Gesticulate.Recognizer.Stroke(new Gesticulate.Geometry.Polyline(points));
  };

  this.circles = function() {
    recognizer = new Gesticulate.Recognizer.Stroke(new Gesticulate.Geometry.Circle(0, 0));
  };

  this.build = function() {
    return recognizer;
  };

};
