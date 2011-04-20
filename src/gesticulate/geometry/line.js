/**
 * class Gesticulate.Geometry.Line
 **/

/**
 * new Gesticulate.Geometry.Line(from_x, from_y, to_x, to_y)
 * - from_x (number): The line's start x coordinate
 * - from_y (number): The line's start y coordinate
 * - to_x (number): The line's end x coordinate
 * - to_y (number): The line's end y coordinate
 **/
Gesticulate.Geometry.Line = function(from_x, from_y, to_x, to_y) {
  this.from = new Gesticulate.Geometry.Point(from_x, from_y);
  this.to = new Gesticulate.Geometry.Point(to_x, to_y);

  this.interpolate = function(steps) {
    steps -= 1;

    var points = [],
        frac_x = (this.to.x - this.from.x) / steps,
        frac_y = (this.to.y - this.from.y) / steps;

    for(var i = 0; i <= steps; i++) {
      points.push(new Gesticulate.Geometry.Point(this.from.x + frac_x * i, this.from.y + frac_y * i));
    }

    return points;
  };

  this.length = function() {
    var delta_x = this.to.x - this.from.x,
        delta_y = this.to.y - this.from.y;
    return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
  };

  this.boundingBox = function() {
    return new Gesticulate.Geometry.Rectangle(this.from.x, this.from.y, this.to.x - this.from.x, this.to.y - this.from.y);
  };


  this.clone = function() {
    return new Gesticulate.Geometry.Line(this.from.x, this.from.y, this.to.x, this.to.y);
  };

  /**
   * Gesticulate.Geometry.Line#translate(delta_x, delta_y) -> this
   **/
  this.translate = function(delta_x, delta_y) {
    this.from.translate(delta_x, delta_y);
    this.to.translate(delta_x, delta_y);
    return this;
  };

  /**
   * Gesticulate.Geometry.Line#scale(scale) -> this
   **/
  this.scale = function(scale) {
    this.from.scale(scale);
    this.to.scale(scale);
    return this;
  };

  /**
   * Gesticulate.Geometry.Line#rotate(angle) -> this
   **/
  this.rotate = function(angle) {
    this.from.rotate(angle);
    this.to.rotate(angle);
    return this;
  };

};
