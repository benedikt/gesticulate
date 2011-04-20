Gesticulate.Language.RectangleBuilder = function() {
  var x, y, width, height;

  this.at = function(_x, _y) {
    x = _x;
    y = _y;
  };

  this.withWidthOf = function(_width) {
    width = _width;
  };

  this.withHeightOf = function(_height) {
    height = _height;
  };

  this.build = function() {
    return new Gesticulate.Geometry.Rectangle(x, y, width, height);
  };
};
