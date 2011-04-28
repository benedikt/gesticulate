/**
 * class Gesticulate.Recognizer.Stroke < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stroke = function (_template, _options) {
  Gesticulate.Recognizer.Base.call(this);

  var options = Gesticulate.Util.extend({
    positionInvariant: true,
    scaleInvariant: false,
    rotationInvariant: false,
    threshold: 0.3
  }, _options || {});

  var polyline = new Gesticulate.Geometry.Polyline(),
      template = _template;

  var distanceToTemplate = function () {
    return polyline.similarityDistanceTo(template);
  };

  var normalizePositions = function () {
    var templateCenter = template.boundingBox().center();
    template.translate(-templateCenter.x, -templateCenter.y);

    var polylineCenter = polyline.boundingBox().center();
    polyline.translate(-polylineCenter.x, -polylineCenter.y);
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
    if(options.positionInvariant) { normalizePositions(); }
    if(options.scaleInvariant) { normalizeScale(); }
    if(options.rotationInvariant) { optimalRotation(); }

    return distanceToTemplate() < (options.threshold * template.boundingBox().diagonale());
  };

  this.reset = function() {
    polyline.removeAll();
  };
};

Gesticulate.Recognizer.Stroke.prototype = new Gesticulate.Recognizer.Base();
