Gesticulate.Language.LineBuilder = function() {
  var line = new Gesticulate.Geometry.Line();

  this.from = function(point) {
    line.from = point;
    return this;
  };

  this.to = function(point) {
    line.to = point;
    return this;
  };

  this.right = function() {
    line.from = new Gesticulate.Geometry.Point(0, 0);
    line.to   = new Gesticulate.Geometry.Point(1, 0);
    return this;
  };

  this.down = function() {
    line.from = new Gesticulate.Geometry.Point(0, 0);
    line.to   = new Gesticulate.Geometry.Point(0, 1);
    return this;
  };

  this.left = function() {
    line.from = new Gesticulate.Geometry.Point(0, 0);
    line.to   = new Gesticulate.Geometry.Point(-1, 0);
    return this;
  };

  this.up = function() {
    line.from = new Gesticulate.Geometry.Point(0, 0);
    line.to   = new Gesticulate.Geometry.Point(0, -1);
    return this;
  };

  this.build = function() {
    return line;
  };
};
