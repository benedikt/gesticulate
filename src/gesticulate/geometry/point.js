/**
 * class Gesticulate.Geometry.Point
 **/

/**
 * new Gesticulate.Geometry.Point(x, y)
 * - x (number): The point's x coordinate
 * - y (number): The point's y coordinate
 **/
Gesticulate.Geometry.Point = Gesticulate.Geometry.Vector = function (x, y) {
  var self = this;
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

  this.length = this.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  };

  this.translate = function(delta_x, delta_y) {
    this.x += delta_x;
    this.y += delta_y;
    return this;
  };

  this.rotate = function(angle) {
    var x = this.x * Math.cos(angle) - this.y * Math.sin(angle),
        y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    this.x = x;
    this.y = y;
    return this;
  };

  this.scale = function(scale) {
    this.x *= scale;
    this.y *= scale;
    return this;
  };

  this.toString = function() {
    return ['(', this.x, ', ', this.y, ')'].join('');
  };
};
