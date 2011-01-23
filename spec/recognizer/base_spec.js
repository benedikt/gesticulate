describe('Gesticulate.Recognizer.Base', function() {

  beforeEach(function() {
    recognizer = new Gesticulate.Recognizer.Base();
  });

  describe('initializer', function() {
  });

  describe('#_update', function() {
    it('should be defined', function() {
      expect(recognizer._update).toBeDefined();
    });

    it('should expect an event as argument', function() {
      expect(recognizer._update.length).toBe(1);
    })
  });

  describe('#isCompleted', function() {
    it('should be defined', function() {
      expect(recognizer.isCompleted).toBeDefined();
    });

    it('should return false by default', function() {
      expect(recognizer.isCompleted()).toBe(false);
    });
  });
})
