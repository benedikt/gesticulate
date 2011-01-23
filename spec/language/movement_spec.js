describe('Gesticulate.Language.Movement', function() {

  beforeEach(function() {
    movement = new Gesticulate.Language.Movement();
  });

  describe('#moves', function() {

    it('should be defined', function() {
      expect(movement.moves).toBeDefined();
    });

    it('should be aliased as #move', function() {
      expect(movement.move).toBe(movement.moves);
    });

    it('should accept an options hash', function() {
      expect(movement.moves.length).toBe(1);
    });

    it('should require from and to as options', function() {
      expect(function() { movement.moves({}) }).toThrow({
        name: 'MissingOptionException', message: 'You have to provide a from and to option.'
      });
    });

    it('should not raise an exception when the options are valid', function() {
      expect(function() { movement.moves({ from: 'left', to: 'right' }) }).not.toThrow({
        name: 'MissingOptionException', message: 'You have to provide a from and to option.'
      });
    });

  });

});
