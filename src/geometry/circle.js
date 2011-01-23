Gesticulate.Geometry.Circle = Class.create(function () {
  return {
    initialize: function(x, y, r) {
      this.center = new Gesticulate.Geometry.Point(x, y);
      this.radius = r;
    },
    interpolate: function(steps) {
      var points = [],
          frac = (2 * Math.PI) / steps;
      for(var i = 0; i < steps; i++) {
        points.push(new Gesticulate.Geometry.Point(Math.sin(frac * i) * this.radius, Math.cos(frac * i) * this.radius));
      }
      return points;
    }
  }
}());
