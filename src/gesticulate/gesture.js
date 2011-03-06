Gesticulate.Gesture = function (recognizer) {
  var touchMapper = new Gesticulate.TouchMapper(recognizer, 'horizontal');
  this.recognizer = recognizer;

  this.update = function(touches) {
    for(var i = 0; i < touches.length; i++) {
      if(!touchMapper.hasTouch(touches[i])) touchMapper.addTouch(touches[i]);
      touchMapper.recognizerFor(touches[i]).update(touches[i].position);
    }
  };

  this.reset = function() {
    touchMapper.reset();
    for(var i = 0; i < this.recognizer.length; i++) {
      this.recognizer[i].reset();
    }
  };

  this.recognize = function() {
    for(var i = 0; i < this.recognizer.length; i++) {
      if(!this.recognizer[i].recognize()) {
        return false;
      } else if(this.recognizer.length == i + 1) {
        return true;
      }
    }
    return false;
  };
};
