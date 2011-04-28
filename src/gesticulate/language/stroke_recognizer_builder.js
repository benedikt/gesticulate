Gesticulate.Language.StrokeRecognizerBuilder = function(stroke) {
  var options = {};

  var checkOption = function(option, message) {
    if(options[option] !== undefined) {
      throw 'The object is already set to ' + ((options[option] === false) ? '' : 'not') + ' ' + message;
    }
  };

  this.and = this.it = this;

  this.doesRespectScale = function() {
    checkOption('scaleInvariant', 'respect scale');
    options.scaleInvariant = false;
    return this;
  };

  this.doesNotRespectScale = function() {
    checkOption('scaleInvariant', 'respect scale');
    options.scaleInvariant = true;
    return this;
  };

  this.doesRespectRotation = function() {
    checkOption('rotationInvariant', 'respect rotation');
    options.rotationInvariant = false;
    return this;
  };

  this.doesNotRespectRotation = function() {
    checkOption('rotationInvariant', 'respect rotation');
    options.rotationInvariant = true;
    return this;
  };

  this.doesRespectPosition = function() {
    checkOption('positionInvariant', 'respect position');
    options.positionInvariant = false;
    return this;
  };

  this.doesNotRespectPosition = function() {
    checkOption('positionInvariant', 'respect position');
    options.positionInvariant = true;
    return this;
  };

  this.withThresholdOf = function(threshold) {
    options.threshold = threshold;
    return this;
  };

  this.build = function() {
    if(stroke && stroke.build instanceof Function) {
      stroke = stroke.build();
    }

    return new Gesticulate.Recognizer.Stroke(stroke, options);
  };
};
