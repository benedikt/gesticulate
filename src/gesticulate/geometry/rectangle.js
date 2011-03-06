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
};
