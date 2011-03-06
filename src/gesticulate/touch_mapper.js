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

  this.isSatisfied = function() {
    return recognizers.length == touches.length;
  };

  this.recognizerFor = function(touch) {
    return mapping[touch.identifier] || nullRecognizer;
  };

  this.hasTouch = function(touch) {
    return !!mapping[touch.identifier];
  };

  this.addTouch = function(touch) {
    if(this.hasTouch(touch)) {
      for(var i = 0; i < touches.length; i++) {
        if(touches[i].identifier == touch.identifier) {
          touches[i] = touch;
        }
      }
    } else {
      touches.push(touch);
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