Gesticulate.Recognizer.Stroke = function (_template, _threshold) {
  var points = [],
      template = _template,
      threshold = _threshold || 0.2;

  function distanceToTemplate() {
    var distance = 0,
        interpolated = template.interpolate(points.length);
    for(var i = 0; i < points.length; i++) {
      distance += points[i].distanceTo(interpolated[i]);
    }
    return distance / points.length;
  }

  function normalizePoints() {
    var boundingBox = Gesticulate.Geometry.boundingBox(points);
    for(var i = 0; i < points.length; i++) {
      points[i].x -= boundingBox.position.x;
      points[i].y -= boundingBox.position.y;
    }
  }

  this.update = function(point) {
    points.push(point);
  };

  this.recognize = function() {
      normalizePoints();
      return distanceToTemplate() < (threshold * template.boundingBox().diagonale());
  };
};
