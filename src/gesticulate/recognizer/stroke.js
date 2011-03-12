/**
 * class Gesticulate.Recognizer.Stroke < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stroke = function (_template, _threshold, _options) {
  Gesticulate.Recognizer.Base.apply(this);

  var options = Gesticulate.Util.extend({
    positionInvariant: true,
    scaleInvariant: true
  }, _options || {});

  var points = [],
      template = _template,
      threshold = _threshold || 0.3;

  function distanceToTemplate() {
    var distance = 0,
        interpolated = template.interpolate(points.length);
    for(var i = 0; i < points.length; i++) {
      distance += points[i].distanceTo(interpolated[i]);
    }
    return distance / points.length;
  }

  function normalizePositions() {
    var boundingBox = Gesticulate.Geometry.boundingBox(points);
    for(var i = 0; i < points.length; i++) {
      points[i].x -= boundingBox.position.x;
      points[i].y -= boundingBox.position.y;
    }
  }

  function normalizeScale() {
    var boundingBox = Gesticulate.Geometry.boundingBox(points),
        scale = template.boundingBox().diagonale() / boundingBox.diagonale();

    for(var i = 0; i < points.length; i++) {
      points[i].x *= scale;
      points[i].y *= scale;
    }
  }

  this.update = function(point) {
    points.push(point);
  };

  this.recognize = function() {
      if(options.positionInvariant) { normalizePositions(); }
      if(options.scaleInvariant) { normalizeScale(); }

      return distanceToTemplate() < (threshold * template.boundingBox().diagonale());
  };

  this.reset = function() {
    points.splice(0, points.length);
  };
};

Gesticulate.Recognizer.Stroke.prototype = new Gesticulate.Recognizer.Base(); 