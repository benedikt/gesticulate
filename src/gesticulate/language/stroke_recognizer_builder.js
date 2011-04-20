Gesticulate.Language.StrokeRecognizerBuilder = function(stroke) {
  var threshold;

  var options = {};

  var checkOption = function(option, message) {
    if(options[option]) {
      throw 'The object is already set to ' + ((options[option] === false) ? '' : 'not') + ' ' + message;
    }
  };

  this.and = function() {
    return this;
  };

  this.doesRespectScale = function() {
    checkOption('scaleInvariant', 'respect scale');
    options.scaleInvariant = false;
  };

  this.doesNotRespectScale = function() {
    checkOption('scaleInvariant', 'respect scale');
    options.scaleInvariant = true;
  };

  this.doesRespectRotation = function() {
    checkOption('rotationInvariant', 'respect rotation');
    options.rotationInvariant = false;
  };

  this.doesNotRespectRotation = function() {
    checkOption('rotationInvariant', 'respect rotation');
    options.rotationInvariant = true;
  };

  this.doesRespectPosition = function() {
    checkOption('positionInvariant', 'respect position');
    options.positionInvariant = false;
  };

  this.doesNotRespectPosition = function() {
    checkOption('positionInvariant', 'respect position');
    options.positionInvariant = true;
  };

  this.withThresholdOf = function(_threshold) {
    threshold = _threshold;
  };

  this.build = function() {
    if(stroke && stroke.build instanceof Function) {
      stroke = stroke.build();
    }

    return new Gesticulate.Recognizer.Stroke(stroke, threshold, options);
  };
};
