/**
 * class Gesticulate.Recognizer.Stay < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stay = function (x, y) {
  var point = new Gesticulate.Geometry.Point(x, y),
  Gesticulate.Recognizer.Stroke.call(this, point);
};

Gesticulate.Recognizer.Point.prototype = new Gesticulate.Recognizer.Stroke();
