Gesticulate.Geometry = {};

//= require "geometry/point"
//= require "geometry/line"
//= require "geometry/polyline"
//= require "geometry/rectangle"
//= require "geometry/circle"

Gesticulate.Geometry.boundingBox = function(points) {
  var min_x = +Infinity,
      min_y = +Infinity,
      max_x = -Infinity,
      max_y = -Infinity;
  
  var point = null;
  for(var i = 0; i < points.length; i++) {
    point = points[i];
    if(point.x < min_x) min_x = point.x;
    if(point.y < min_y) min_y = point.y;
    if(point.x > max_x) max_x = point.x;
    if(point.y > max_y) max_y = point.y;
  }
  
  return new Gesticulate.Geometry.Rectangle(min_x, min_y, max_x - min_x, max_y - min_y);
};
