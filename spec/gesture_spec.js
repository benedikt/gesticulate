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

  describe('.update', function() {
    it('should be defined', function() {
      expect(gesture.update).toBeDefined();
    });

    it('should expect an event as argument', function() {
      expect(gesture.update.length).toBe(1);
    })
  });


})
