/**
 * class Gesticulate.Geometry.Point
 **/

/**
 * new Gesticulate.Geometry.Point(x, y)
 * - x (number): The point's x coordinate
 * - y (number): The point's y coordinate
 **/
Gesticulate.Geometry.Point = function (x, y) {
  this.x = x;
  this.y = y;

  this.interpolate = function(steps) {
    var points = [];
    for(var i = 0; i < steps; i++) {
      points.push(this);
    }
    return points;
  };

  this.distanceTo = function(point) {
    var dx = this.x - point.x,
        dy = this.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  this.boundingBox = function() {
    return new Gesticulate.Geometry.Rectangle(this.x, this.y, 0, 0);
  };

  this.normalized = function() {
    var magnitude = this.magnitude();
    return new Gesticulate.Geometry.Point(this.x / magnitude, this.y / magnitude);
  };

  this.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };
};
