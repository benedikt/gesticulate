describe('Gesticulate.Recognizer.Line', function() {
  var recognizer;

  beforeEach(function() {
    recognizer = new Gesticulate.Recognizer.Line();
  });

  describe('initializer', function() {
  });

  describe('#update', function() {
    it('should be defined', function() {
      expect(recognizer.update).toBeDefined();
    });

    it('should expect an event as argument', function() {
      expect(recognizer.update.length).toBe(1);
    });
  });
});
