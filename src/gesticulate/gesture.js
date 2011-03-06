Gesticulate.Gesture = function (recognizer) {
  this.recognizer = recognizer;

  this.update = function(touches) {
    if(touches.length != this.recognizer.length) return;

    for(var i = 0; i < touches.length; i++) {
      this.recognizer[i].update(new Gesticulate.Geometry.Point(touches[i].x, touches[i].y));
    }
  };

  this.recognize = function() {
    for(var i = 0; i < this.recognizer.length; i++) {
      console.info("Checking: "+ i);
      if(!this.recognizer[i].recognize()) {
        //return false;
      } else if(this.recognizer.length == i+1) {
        return true;
      }
    }
    return false;
  };
};
