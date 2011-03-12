/**
 * class Gesticulate.Recognizer.Base
 * This is an abstract Recognizer. Doesn't actually recognize anything.
 * See the subclasses for the real recognizers.
 **/
Gesticulate.Recognizer.Base = function () {
  /**
   * Gesticulate.Recognizer.Base#update(point) -> null
   * - point (Gesticulate.Geometry.Point): The point that should be added to the recognition process
   **/
  this.update = function(point) {};

  /**
   * Gesticulate.Recognizer.Base#recognize() -> boolean
   * Triggers the recogntion and returns true if the recognition was successful.
   * Otherwise it returns false.
   **/
  this.recognize = function() { return false; };

  /**
   * Gesticulate.Recognizer.Base#reset() -> null
   * Resets the internally stored values so the recognition can start all over again.
   **/
  this.reset = function() {};
};
