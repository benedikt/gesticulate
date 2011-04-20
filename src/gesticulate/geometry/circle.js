/**
 * class Gesticulate.Geometry.Circle
 **/

/**
 * new Gesticulate.Geometry.Circle(x, y, r)
 * - x (number): The center's x coordinate
 * - y (number): The center's y coordinate
 * - r (number): The circle's radius
 **/
Gesticulate.Geometry.Circle = function(x, y, r) {
  this.center = new Gesticulate.Geometry.Point(x, y);
  this.radius = r;

  var rotation = 0;

  this.interpolate = function(steps) {
    steps -= 1;

    var points = [],
        frac = (2 * Math.PI) / steps,
        x, y;

    for(var i = 0; i <= steps; i++) {
      x = Math.sin(rotation + frac * i) * +this.radius + this.center.x;
      y = Math.cos(rotation + frac * i) * -this.radius + this.center.y;
      points.push(new Gesticulate.Geometry.Point(Math.round(x), Math.round(y)));
    }
    return points;
  };

  this.boundingBox = function() {
    return new Gesticulate.Geometry.Rectangle(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
  };

  this.clone = function() {
    return new Gesticulate.Geometry.Circle(this.center.x, this.center.y, this.radius);
  };

  /**
   * Gesticulate.Geometry.Circle#translate(delta_x, delta_y) -> this
   **/
  this.translate = function(delta_x, delta_y) {
    this.center.translate(delta_x, delta_y);
    return this;
  };

  /**
   * Gesticulate.Geometry.Circle#scale(scale) -> this
   **/
  this.scale = function(scale) {
    this.center.scale(scale);
    this.radius *= scale;
    return this;
  };

  /**
   * Gesticulate.Geometry.Cirlce#rotate(angle) -> this
   **/
  this.rotate = function(angle) {
    this.center.rotate(angle);
    rotation += angle;
    return this;
  };
};
