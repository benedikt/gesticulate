/**
 * Gesticulate.Geometry
 * The package includes several Geometry types as well as geometry utility methods.
 **/
Gesticulate.Geometry = function() {
  return {
    /**
     * Gesticulate.Geometry.boundingBox(points) -> Gesticulate.Geometry.Rectangle
     * - points (Array): An array of Gesticulate.Geometry.Points
     *
     * Calculates the bounding box that includes all of the given points.
     **/
    boundingBox: function(points) {
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
    },

    point: function() {
      if(arguments.length == 2) {
        return new Gesticulate.Geometry.Point(arguments[0], arguments[1]);
      } else if(arguments[0] instanceof Gesticulate.Geometry.Point) {
        return arguments[0];
      } else {
        return null;
      }
    }
  };
}();

//= require "geometry/point"
//= require "geometry/line"
//= require "geometry/polyline"
//= require "geometry/rectangle"
//= require "geometry/circle"
