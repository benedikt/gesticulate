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

  this.reset = function() {
    for(var i = 0; i < touches.length; i++) {
      delete mapping[touches[i].identifier];
    }
    touches.splice(0, touches.length);
  };

  this.isSatisfied = function() {
    return recognizers.length == touches.length;
  };

  this.recognizerFor = function(touch) {
    return mapping[touch.identifier] || nullRecognizer;
  };

  this.hasTouch = function(touch) {
    for(var i = 0; i < touches.length; i++) {
      if(touches[i].identifier == touch.identifier) {
        return true;
      }
    }
    return false;
  };

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

  this.removeTouch = function(touch) {
    var index;

    delete mapping[touch.identifier];

    for(var i = 0; i < touches.length; i++) {
      if(touches[i].identifier == touch.identifier) {
        return touches.splice(i, 1);
      }
    }

    return false;
  };
};