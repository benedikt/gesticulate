Gesticulate.Language.CircleBuilder = function() {
  var x, y, radius;

  this.around = this.at = function(_x, _y) {
    x = _x;
    y = _y;
  };

  this.withRadiusOf = function(_radius) {
    radius = _radius;
  };

  this.build = function() {
    return new Gesticulate.Geometry.Circle(x, y, radius);
  };
};
