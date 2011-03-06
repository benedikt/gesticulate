Gesticulate.Geometry.Line = function(from_x, from_y, to_x, to_y) {
  this.from = new Gesticulate.Geometry.Point(from_x, from_y);
  this.to = new Gesticulate.Geometry.Point(to_x, to_y);

  this.interpolate = function(steps) {
    steps -= 1;

    var points = [],
        frac_x = (this.to.x - this.from.x) / steps,
        frac_y = (this.to.y - this.from.y) / steps;

    for(var i = 0; i <= steps; i++) {
      points.push(new Gesticulate.Geometry.Point(frac_x * i, frac_y * i));
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
};
