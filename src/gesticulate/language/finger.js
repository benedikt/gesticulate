Gesticulate.Language.Finger = function() {
  var recognizer;

  function moves(options) {
    recognizer = new Gesticulate.Recognizer.Line(0, 0, 100, 100);
  }

  function follows() {
    var points = [];
    for(var i = 1; i < arguments.length; i += 2) {
      points.push(new Gesticulate.Geometry.Point(arguments[i - 1], arguments[i]));
    }
    recognizer = new Gesticulate.Recognizer.Stroke(new Gesticulate.Geometry.Polyline(points));
  }

  this.build = function() {
    return recognizer;
  };

  this.moves = moves;
  this.move = moves;
};
