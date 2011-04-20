/**
 * class Gesticulate.Geometry.Rectangle
 **/
Gesticulate.Geometry.Rectangle = function (x, y, width, height) {
  this.position = new Gesticulate.Geometry.Point(x, y);
  this.width = width;
  this.height = height;

  this.interpolate = function(steps) {
    var polyline = new Gesticulate.Geometry.Polyline(
      this.position.x, this.position.y,
      this.position.x + this.width, this.position.y,
      this.position.x + this.width, this.position.y + this.height,
      this.position.x, this.position.y + this.height,
      this.position.x, this.position.y
    );
    return polyline.interpolate(steps);
  };

  this.diagonale = function() {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  };

  this.boundingBox = function() {
    return this;
  };

  /**
   * Gesticulate.Geometry.Rectangle#clone() -> Gesticulate.Geometry.Rectangle
   **/
  this.clone = function() {
    return new Gesticulate.Geometry.Rectangle(this.position.x, this.position.y, this.width, this.height);
  };

  /**
   * Gesticulate.Geometry.Rectangle#translate(delta_x, delta_y) -> this
   **/
  this.translate = function(delta_x, delta_y) {
    this.position.translate(delta_x, delta_y);
    return this;
  };

  /**
   * Gesticulate.Geometry.Rectangle#scale(scale) -> this
   **/
  this.scale = function(scale) {
    this.position.scale(scale);
    this.width  *= scale;
    this.height *= scale;
    return this;
  };

  /**
   * Gesticulate.Geometry.Rectangle#rotate(angle) -> this
   **/
  this.rotate = function(angle) {
    console.error("Rectangle rotation is not yet implemented.");
    return this;
  };
};
