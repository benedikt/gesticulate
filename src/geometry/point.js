Gesticulate.Geometry.Point = Class.create(function () {
  return {
    initialize: function(x, y) {
      this.x = x;
      this.y = y;
    },
    interpolate: function(steps) {
      return this;
    }
  }
}());
