Gesticulate.Geometry.Rectangle = Class.create(function () {
  return {
    initialize: function(x, y, width, height) {
      this.position = new Gesticulate.Geometry.Point(x, y);
      this.width = width;
      this.height = height;
    },
    interpolate: function(steps) {
      throw({
        name: 'NotYetImplemented',
        message: 'The method you called is not net implemented.'
      });
    },
    diagonale: function() {
      return Math.sqrt(this.width * this.width + this.height * this.height);
    }
  }
}());
