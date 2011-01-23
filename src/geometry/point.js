Gesticulate.Geometry.Point = Class.create(function () {
  return {
    initialize: function(x, y) {
      this.x = x;
      this.y = y;
    },

    interpolate: function(steps) {
      var points = [];
      for(var i = 0; i < steps; i++) {
        points.push(this);
      }
      return points;
    },

    distanceTo: function(point) {
      var dx = this.x - point.x,
          dy = this.y - point.y;
      return Math.sqrt(dx * dx + dy * dy);
    },

    boundingBox: function() {
      return new Gesticulate.Geometry.Rectangle(this.x, this.y, 0, 0);
    }
  }
}());
