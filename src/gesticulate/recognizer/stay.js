Gesticulate.Recognizer.Stay = Class.create(Gesticulate.Recognizer.Base, function () {
  var recognizer;

  return {
    initialize: function(x, y) {
      var point = new Gesticulate.Geometry.Point(x, y);
      recognizer = new Gesticulate.Recognizer.Stroke(point);
    },

    update: function(point) { return recognizer.update(point); },
    recognize: function() { return recognizer.recognize(); }
  }
}());
