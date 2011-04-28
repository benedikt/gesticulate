Gesticulate.Language.StayRecognizerBuilder = function() {
  var x, y, tolerance;

  this.near = this.at = function(_x, _y) {
    x = _x;
    y = _y;
    return this;
  };

  this.withToleranceOf = function(_tolerance) {
    tolerance = _tolerance;
    return this;
  };

  this.build = function() {
    return new Gesticulate.Recognizer.Stay(tolerance, x, y);
  };
};
