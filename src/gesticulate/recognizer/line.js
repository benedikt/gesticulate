Gesticulate.Recognizer.Line = function (from_x, from_y, to_x, to_y) {
  var line = new Gesticulate.Geometry.Line(from_x, from_y, to_x, to_y),
      recognizer = new Gesticulate.Recognizer.Stroke(line);

  this.update = function(point) { return recognizer.update(point); };
  this.recognize = function() { return recognizer.recognize(); };
};
