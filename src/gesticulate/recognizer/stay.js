/**
 * class Gesticulate.Recognizer.Stay < Gesticulate.Recognizer.Base
 **/
Gesticulate.Recognizer.Stay = function (tolerance, x, y) {
  var point = new Gesticulate.Geometry.Point(x, y),
      polyline = new Gesticulate.Geometry.Polyline();

  if(!tolerance) tolerance = 30;

  this.update = function(point) {
    polyline.addPoint(point);
  };

  this.recognize = function() {
    if(polyline.points.length < 1) return false;

    if(!x || !y) {
      var box = polyline.boundingBox();
      if(box.width > tolerance || box.height > tolerance) {
           return false;
      }
      point = box.center();
    }

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
