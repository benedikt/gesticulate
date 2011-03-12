Gesticulate.Language.Gesture = function() {
  var fingers = [];

  this.finger = function() {
    var finger = new Gesticulate.Language.Finger();
    fingers.push(finger);
    return finger;
  };

  this.build = function() {
    var recognizers = [];
    for(var i = 0; i < fingers.length; i++) {
      recognizers.push(fingers[i].build());
    }
    return new Gesticulate.Gesture(recognizers);
  };
};
