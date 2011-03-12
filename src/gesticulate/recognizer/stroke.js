/**
 * class Gesticulate.Recognizer.Stroke < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stroke = function (_template, _threshold, _options) {
  Gesticulate.Recognizer.Base.apply(this);

  var options = Gesticulate.Util.extend({
    positionInvariant: true,
    scaleInvariant: false,
    rotationInvariant: false
  }, _options || {});

  var points = [],
      template = _template,
      threshold = _threshold || 0.3;

  var distanceToTemplate = function () {
    var distance = 0,
        interpolated = template.interpolate(points.length);
    for(var i = 0; i < points.length; i++) {
      distance += points[i].distanceTo(interpolated[i]);
    }
    return distance / points.length;
  };

  var normalizePositions = function () {
    var boundingBox = Gesticulate.Geometry.boundingBox(points);
    for(var i = 0; i < points.length; i++) {
      points[i].x -= boundingBox.position.x;
      points[i].y -= boundingBox.position.y;
    }
  };

  var normalizeScale = function () {
    var boundingBox = Gesticulate.Geometry.boundingBox(points),
        scale = template.boundingBox().diagonale() / boundingBox.diagonale();

    for(var i = 0; i < points.length; i++) {
      points[i].x *= scale;
      points[i].y *= scale;
    }
  };

  var optimalRotation = function () {
    var original_points = [],
        minimum = Infinity,
        rotation = 0;

    for(var i = 0; i < points.length; i++) {
      original_points[i] = points[i];
      points[i] = new Gesticulate.Geometry.Point(points[i].x, points[i].y);
    }

    for(var g = 0; g < 2 * Math.PI; g += 0.1) {
      for(i = 0; i < points.length; i++) {
        points[i].x = points[i].x * Math.cos(0.1) - points[i].y * Math.sin(0.1);
        points[i].y = points[i].x * Math.sin(0.1) + points[i].y * Math.cos(0.1);
      }

      normalizePositions();

      if(distanceToTemplate() < minimum) {
        rotation = g;
        minimum = distanceToTemplate();
      }
    }

    for(i = 0; i < points.length; i++) {
      points[i].x = original_points[i].x * Math.cos(rotation) - original_points[i].y * Math.sin(rotation);
      points[i].y = original_points[i].x * Math.sin(rotation) + original_points[i].y * Math.cos(rotation);
    }

    normalizePositions();
  };

  this.update = function(point) {
    points.push(point);
  };

  this.recognize = function() {
      if(options.positionInvariant) { normalizePositions(); }
      if(options.scaleInvariant) { normalizeScale(); }
      if(options.rotationInvariant) { optimalRotation(); }

      return distanceToTemplate() < (threshold * template.boundingBox().diagonale());
  };

  this.reset = function() {
    points.splice(0, points.length);
  };
};

Gesticulate.Recognizer.Stroke.prototype = new Gesticulate.Recognizer.Base(); 