describe('Gesticulate.Geometry.Point', function() {
  var point;

  beforeEach(function() {
    point = new Gesticulate.Geometry.Point(30, 40);
  });

  describe('#initialize', function() {
     it('should expect a x and y as arguments', function() {
       expect(point.initialize.length).toBe(2);
     });
  });

  describe('#interpolate', function() {
    it('should expect a count as argument', function() {
      expect(point.interpolate.length).toBe(1);
    });

    it('should return the given amount of points', function() {
      expect(point.interpolate(10).length).toBe(10);
      expect(point.interpolate(33).length).toBe(33);
    });

    it('interpolate pointar on the point', function() {
      var points = [
        new Gesticulate.Geometry.Point(30, 40),
        new Gesticulate.Geometry.Point(30, 40),
        new Gesticulate.Geometry.Point(30, 40),
        new Gesticulate.Geometry.Point(30, 40),
        new Gesticulate.Geometry.Point(30, 40)
      ];
      expect(point.interpolate(5)).toEqual(points);
    });
  });

  describe('#boundingBox', function() {
    it('should return the points bounding box', function() {
      var boundingBox = new Gesticulate.Geometry.Rectangle(30, 40, 0, 0);
      expect(point.boundingBox()).toEqual(boundingBox);
    });
  });

  describe('#magnitude', function() {
    it('should return the magnitude of the point\'s vector', function() {
      expect(point.magnitude()).toEqual(50);
    });
  });

  describe('#normalized', function() {
    it('should return the normalized version of the point\'s vector', function() {
      expect(point.normalized()).toEqual(new Gesticulate.Geometry.Point(0.6, 0.8));
    });
  });
});
