Gesticulate.Recognizer.Stay = function (x, y) {
  var point = new Gesticulate.Geometry.Point(x, y),
      recognizer = new Gesticulate.Recognizer.Stroke(point);

  this.update = function(point) { return recognizer.update(point); };
  this.recognize = function() { return recognizer.recognize(); };
};
