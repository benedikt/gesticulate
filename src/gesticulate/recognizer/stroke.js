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

  var polyline = new Gesticulate.Geometry.Polyline(),
      template = _template,
      threshold = _threshold || 0.3;

  var distanceToTemplate = function () {
    return polyline.similarityDistanceTo(template);
  };

  var normalizePositions = function () {
    var templateBox = template.boundingBox();
    template.translate(-(templateBox.position.x + templateBox.width  / 2),
                       -(templateBox.position.y + templateBox.height / 2));

    var polylineBox = polyline.boundingBox();
    polyline.translate(-(polylineBox.position.x + polylineBox.width  / 2),
                       -(polylineBox.position.y + polylineBox.height / 2));

  };

  var normalizeScale = function () {
    var boundingBox = polyline.boundingBox();
    polyline.scale(template.boundingBox().diagonale() / boundingBox.diagonale());
  };

  var optimalRotation = function () {
    var original_polyline = polyline.clone(),
        minimum = Infinity,
        rotation = 0;

    for(var g = 0; g < 2 * Math.PI; g += 0.1) {
      polyline.rotateAroundCenter(0.1);

      if(distanceToTemplate() < minimum) {
        rotation = g;
        minimum = distanceToTemplate();
      }
    }

    polyline = original_polyline.rotateAroundCenter(rotation);
  };

  this.update = function(point) {
    polyline.addPoint(point);
  };

  this.recognize = function() {
      if(options.positionInvariant || options.rotationInvariant) { normalizePositions(); }
      if(options.scaleInvariant) { normalizeScale(); }
      if(options.rotationInvariant) { optimalRotation(); }

      return distanceToTemplate() < (threshold * template.boundingBox().diagonale());
  };

  this.reset = function() {
    polyline.removeAll();
  };
};

Gesticulate.Recognizer.Stroke.prototype = new Gesticulate.Recognizer.Base(); 