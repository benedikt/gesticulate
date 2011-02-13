Gesticulate.Recognizer.Line = Class.create(Gesticulate.Recognizer.Base, function () {
  var recognizer;

  return {
    initialize: function(from_x, from_y, to_x, to_y) {
      var line = new Gesticulate.Geometry.Line(from_x, from_y, to_x, to_y);
      recognizer = new Gesticulate.Recognizer.Stroke(line);
    },

    update: function(point) { return recognizer.update(point); },
    recognize: function() { return recognizer.recognize(); }
  }
}());
