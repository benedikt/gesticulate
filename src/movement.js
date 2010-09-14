Gesticulate.Movement = Class.create((function(){

  function validateOptions(options) {
    if(!options['from'] || !options['to']) {
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

  function isCompleted() {
    return false;
  }

  function _update(event) {

  }

  return {
    moves: moves,
    move: moves,
    isCompleted: isCompleted,
    _update: _update
  }

})());
