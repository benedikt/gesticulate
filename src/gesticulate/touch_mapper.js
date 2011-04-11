/**
 * class Gesticulate.TouchMapper
 **/

/**
 * new Gesticulate.TouchMapper(recognizers [, mode])
 * - recognizers (Array): An array of recognizers
 * - mode (String): The mapping mode. Either 'horizontal', 'vertical'. Default is 'timing'.
 **/
Gesticulate.TouchMapper = function(recognizers, mode) {
  var touches = [],
      mapping = {},
      sortingMethod,
      nullRecognizer = new Gesticulate.Recognizer.Base();

  switch(mode) {
    case 'horizontal':
      sortingMethod = function(a, b) { return a.position.x - b.position.x; };
      break;
    case 'vertical':
      sortingMethod = function(a, b) { return a.position.y - b.position.y; };
      break;
    default:
      sortingMethod = function(a, b) { return 1; };
  }

  function setupMapping() {
    var sortedTouches = touches.sort(sortingMethod);

    for(var i = 0; i < sortedTouches.length; i++) {
      mapping[sortedTouches[i].identifier] = recognizers[i];
    }
  }

  /**
   * Gesticulate.TouchMapper#reset() -> null
   * Resets the TouchMapper by removing all mapped touches
   **/
  this.reset = function() {
    for(var i = 0; i < touches.length; i++) {
      delete mapping[touches[i].identifier];
    }
    touches.splice(0, touches.length);
  };

  /**
   * Gesticulate.TouchMapper#isSatisfied() -> boolean
   * Returns true if the number of touches matches the number of
   * recognizers given on initialization.
   **/
  this.isSatisfied = function() {
    return recognizers.length == touches.length;
  };

  /**
   * Gesticulate.TouchMapper#recognizerFor(touch) -> Gesticulate.Recognizer.Base | ...
   * Returns the mapped recognizer for the given touch. As long as the
   * mapper isn't satisfied or there is no recognizer for this touch
   * it returns Gesticulate.Recognizer.Base as a null recognizer (which always fails).
   **/
  this.recognizerFor = function(touch) {
    if(!this.isSatisfied()) return nullRecognizer;
    return mapping[touch.identifier] || nullRecognizer;
  };

  /**
   * Gesticulate.TouchMapper#hasTouch(touch) -> boolean
   * Returns true when the touch is already known by the TouchMapper.
   **/
  this.hasTouch = function(touch) {
    for(var i = 0; i < touches.length; i++) {
      if(touches[i].identifier == touch.identifier) {
        return true;
      }
    }
    return false;
  };

  /**
   * Gesticulate.TouchMapper#addTouch(touch) -> touch
   * Adds (or updates) the touch to the TouchMapper.
   **/
  this.addTouch = function(touch) {
    for(var i = 0; i <= touches.length; i++) {
      if(i == touches.length || touches[i].identifier == touch.identifier) {
        touches[i] = touch;
        break;
      }
    }

    if(this.isSatisfied()) { setupMapping(); }

    return touch;
  };

  /**
   * Gesticulate.TouchMapper#removeTouch(touch) -> touch | null
   * Removes the given touch from the TouchMapper.
   **/
  this.removeTouch = function(touch) {
    var index;

    delete mapping[touch.identifier];

    for(var i = 0; i < touches.length; i++) {
      if(touches[i].identifier == touch.identifier) {
        return touches.splice(i, 1);
      }
    }

    return null;
  };
};
