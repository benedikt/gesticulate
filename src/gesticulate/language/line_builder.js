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

  this.horizontal = function() {
    line.to   = new Gesticulate.Geometry.Point(1, 0);
  };

  this.vertical = function() {
    line.to   = new Gesticulate.Geometry.Point(0, 1);
  };

  this.diagonal = function() {
    line.from = new Gesticulate.Geometry.Point(1, 1);
  };

  this.build = function() {
    return line;
  };
};
