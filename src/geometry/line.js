Gesticulate.Geometry.Line = Class.create(function () {
  return {
    initialize: function(from_x, from_y, to_x, to_y) {
      this.from = new Gesticulate.Geometry.Point(from_x, from_y);
      this.to = new Gesticulate.Geometry.Point(to_x, to_y);
    },
    interpolate: function(steps) {
      steps += 1;
      var points = [],
          frac_x = (Math.abs(this.from.x - this.to.x) / steps),
          frac_y = (Math.abs(this.from.y - this.to.y) / steps);
      for(var i = 0; i <= steps; i++) {
        points.push(new Gesticulate.Geometry.Point(frac_x * i, frac_y * i));
      }
      return points;
    }
  }
}());
