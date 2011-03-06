Gesticulate.Language.Movement = function() {

  function validateOptions(options) {
    if(!options.from || !options.to) {
      throw({
        name: 'MissingOptionException',
        message: 'You have to provide a from and to option.'
      });
    }
  }

  function moves(options) {
    validateOptions(options);
    this.options = options;
  }

  this.moves = moves;
  this.move = moves;
};
