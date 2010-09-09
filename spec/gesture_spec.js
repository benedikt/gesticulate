describe('Gesticulate.Gesture', function() {

  beforeEach(function() {
    gesture = new Gesticulate.Gesture('test');
  });

  describe('initializer', function() {
    it('should require a name', function() {
      expect(Gesticulate.Gesture.length).toBe(1);
    });

    it('should set the gestures name', function() {
      expect(gesture.name).toBe('test');
    });
  });

  describe('#_update', function() {
    it('should be defined', function() {
      expect(gesture._update).toBeDefined();
    });

    it('should expect an event as argument', function() {
      expect(gesture._update.length).toBe(1);
    })
  });

  describe('#finger', function() {
    it('should be defined', function() {
      expect(gesture.finger).toBeDefined();
    });

    it('should return an instance of Gesticulate.Movement', function() {
      expect(gesture.finger() instanceof Gesticulate.Movement).toBeTruthy();
    });
  });


})
