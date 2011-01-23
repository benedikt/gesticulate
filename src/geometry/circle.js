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
    },

    boundingBox: function() {
      return new Gesticulate.Geometry.Rectangle(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
    }
  }
}());
