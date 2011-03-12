/**
 * class Gesticulate.Geometry.Polyline
 **/

/**
 * new Gesticulate.Geometry.Polyline(x1, y1 [, {...}])
 * - points (Array): An array of Gesticulate.Geometry.Points
 * - xn (number): At least one x coordinate
 * - xn (number): At least one y coordinate 
 **/
Gesticulate.Geometry.Polyline = function () {
  this.points = [];

  if(arguments.length == 1) {
    this.points = arguments[0];
  } else if((arguments.length % 2) !== 0) {
    throw({
      name: 'InvalidArguments',
      message: 'Only an argument count of multiples of two are allowed.'
    });
  } else {
    for(var i = 0; i < arguments.length; i += 2) {
      this.points.push(new Gesticulate.Geometry.Point(arguments[i], arguments[i+1]));
    }
  }

  this.interpolate = function(steps) {
    steps -= 1;

    var interpolation = [],
        interpolation_length = this.length() / steps,
        fragment = -1,
        fragment_length = interpolation_length,
        length = 0,
        direction;

    for (var i = 0; i < steps; i++) {
      length += interpolation_length;

      if(length >= fragment_length) {
        length = length - fragment_length;

        fragment += 1;

        direction = new Gesticulate.Geometry.Point(
          this.points[fragment + 1].x - this.points[fragment].x,
          this.points[fragment + 1].y - this.points[fragment].y
        );

        fragment_length = direction.magnitude();
        direction = direction.normalized();
      }

      interpolation.push(new Gesticulate.Geometry.Point(
        Math.round(this.points[fragment].x + (direction.x * length)),
        Math.round(this.points[fragment].y + (direction.y * length))
      ));
    }
    interpolation.push(this.points[this.points.length - 1]);

    return interpolation;
  };

  this.length = function() {
    var length = 0, delta_x, delta_y;

    for(var i = 0; i < (this.points.length - 1); i++) {
      delta_x = this.points[i + 1].x - this.points[i].x;
      delta_y = this.points[i + 1].y - this.points[i].y;
      length += Math.sqrt(delta_x * delta_x + delta_y * delta_y);
    }

    return length;
  };

  this.boundingBox = function() {
    return new Gesticulate.Geometry.boundingBox(this.points);
  };
};
