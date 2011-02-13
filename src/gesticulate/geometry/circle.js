Gesticulate.Geometry.Circle = Class.create(function () {
  return {
    initialize: function(x, y, r) {
      this.center = new Gesticulate.Geometry.Point(x, y);
      this.radius = r;
    },

    interpolate: function(steps) {
      steps -= 1;

      var points = [],
          frac = (2 * Math.PI) / steps,
          x, y;

      for(var i = 0; i <= steps; i++) {
        x = Math.sin(frac * i) * +this.radius + this.center.x;
        y = Math.cos(frac * i) * -this.radius + this.center.y;
        points.push(new Gesticulate.Geometry.Point(Math.round(x), Math.round(y)));
      }
      return points;
    },

    boundingBox: function() {
      return new Gesticulate.Geometry.Rectangle(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
    }
  }
}());
