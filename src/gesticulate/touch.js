/**
 * class Gesticulate.Touch
 **/
Gesticulate.Touch = function (x, y, identifier, event) {
  this.position = new Gesticulate.Geometry.Point(x, y);
  this.identifier = identifier;
  this.event = event;
};
