/**
 * class Gesticulate.Recognizer.Stay < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stay = function (x, y, tolerance) {
  var point = new Gesticulate.Geometry.Point(x, y),
      polyline = new Gesticulate.Geometry.Polyline();

  if(!tolerance) tolerance = 20;

  this.update = function(point) {
    polyline.addPoint(point);
  };

  this.recognize = function() {
    if(polyline.points.length < 1) return false;

    for(var i = 0; i < polyline.points.length; i++) {
      var distance = polyline.points[i].distanceTo(point);
      if(distance > tolerance) {
        return false;
      }
    }

    return true;
  };

  this.reset = function() {
    polyline.removeAll();
  };
};

Gesticulate.Recognizer.Stay.prototype = new Gesticulate.Recognizer.Base();
