describe('Gesticulate.Recognizer.Line', function() {

  beforeEach(function() {
    recognizer = new Gesticulate.Recognizer.Line();
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

})
