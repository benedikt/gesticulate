/**
 * class Gesticulate.Recognizer.Line < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Line = function(from_x, from_y, to_x, to_y) {
  var line = new Gesticulate.Geometry.Line(from_x, from_y, to_x, to_y);
  Gesticulate.Recognizer.Stroke.call(this, line);
};

Gesticulate.Recognizer.Line.prototype = new Gesticulate.Recognizer.Stroke();
