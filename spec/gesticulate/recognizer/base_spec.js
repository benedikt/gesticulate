describe('Gesticulate.Recognizer.Base', function() {
  var recognizer;

  beforeEach(function() {
    recognizer = new Gesticulate.Recognizer.Base();
  });

  describe('initializer', function() {
  });

  describe('#update', function() {
    it('should be defined', function() {
      expect(recognizer.update).toBeDefined();
    });

    it('should expect an event as argument', function() {
      expect(recognizer.update.length).toBe(1);
    })
  });
})
