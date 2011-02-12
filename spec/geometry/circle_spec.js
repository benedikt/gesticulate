describe('Gesticulate.Geometry.Circle', function() {
  var circle;

  beforeEach(function() {
    circle = new Gesticulate.Geometry.Circle(100, 100, 50);
  });

  describe('#initialize', function() {
     it('should expect x, y and radius as arguments', function() {
       expect(circle.initialize.length).toBe(3);
     });
  });

  describe('#interpolate', function() {
    it('should expect a count as argument', function() {
      expect(circle.interpolate.length).toBe(1);
    });

    it('should return the given amount of points', function() {
      expect(circle.interpolate(10).length).toBe(10);
      expect(circle.interpolate(33).length).toBe(33);
    });

    it('interpolate linear on the circle', function() {
      var points = [
        new Gesticulate.Geometry.Point(100, 50),
        new Gesticulate.Geometry.Point(150, 100),
        new Gesticulate.Geometry.Point(100, 150),
        new Gesticulate.Geometry.Point(50, 100),
        new Gesticulate.Geometry.Point(100, 50)
      ];
      expect(circle.interpolate(5)).toEqual(points);
    });
  });

  describe('#boundingBox', function() {
    it('should return the circles bounding box', function() {
      var boundingBox = new Gesticulate.Geometry.Rectangle(50, 50, 100, 100);
      expect(circle.boundingBox()).toEqual(boundingBox);
    });
  });
});
