describe('Gesticulate.Language.Gesture', function() {

  beforeEach(function() {
    gesture = new Gesticulate.Language.Gesture('test');
  });

  describe('initializer', function() {
    it('should set the gestures name', function() {
      expect(gesture.name).toBe('test');
    });
  });

  describe('#finger', function() {
    it('should be defined', function() {
      expect(gesture.finger).toBeDefined();
    });

    it('should return an instance of Gesticulate.Movement', function() {
      expect(gesture.finger() instanceof Gesticulate.Language.Movement).toBeTruthy();
    });
  });


})
