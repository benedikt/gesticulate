describe('Gesticulate.Movement', function() {

  beforeEach(function() {
    movement = new Gesticulate.Movement();
  });

  describe('#moves', function() {

    it('should be defined', function() {
      expect(movement.moves).toBeDefined();
    });

    it('should be aliased as #move', function() {
      expect(movement.move).toBe(movement.moves);
    });

  });

  describe('#isCompleted', function() {
    it('should be defined', function() {
      expect(movement.isCompleted).toBeDefined();
    });

    it('should return false by default', function() {
      expect(movement.isCompleted()).toBe(false);
    });
  });

  describe('#_update', function() {
    it('should be defined', function() {
      expect(movement._update).toBeDefined();
    })
  })

});
