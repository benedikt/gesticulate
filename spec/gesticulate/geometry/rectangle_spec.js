describe('Gesticulate.Geometry.Rectangle', function() {
  var rectangle;

  beforeEach(function() {
    rectangle = new Gesticulate.Geometry.Rectangle(100, 100, 40, 30);
  });

  describe('#initialize', function() {
     it('should expect x, y, width and height as arguments', function() {
       expect(rectangle.initialize.length).toBe(4);
     });
  });

  describe('#interpolate', function() {
    it('should expect a count as argument', function() {
      expect(rectangle.interpolate.length).toBe(1);
    });

    it('should return the given amount of points', function() {
      expect(rectangle.interpolate(10).length).toBe(10);
      expect(rectangle.interpolate(33).length).toBe(33);
    });

    it('interpolate linear on the rectangle', function() {
      var points = [
        new Gesticulate.Geometry.Point(100, 100),
        new Gesticulate.Geometry.Point(110, 100),
        new Gesticulate.Geometry.Point(120, 100),
        new Gesticulate.Geometry.Point(130, 100),
        new Gesticulate.Geometry.Point(140, 100),
        new Gesticulate.Geometry.Point(140, 110),
        new Gesticulate.Geometry.Point(140, 120),
        new Gesticulate.Geometry.Point(140, 130),
        new Gesticulate.Geometry.Point(130, 130),
        new Gesticulate.Geometry.Point(120, 130),
        new Gesticulate.Geometry.Point(110, 130),
        new Gesticulate.Geometry.Point(100, 130),
        new Gesticulate.Geometry.Point(100, 120),
        new Gesticulate.Geometry.Point(100, 110),
        new Gesticulate.Geometry.Point(100, 100)
      ];
      expect(rectangle.interpolate(15)).toEqual(points);
    });

    it('interpolate linear on the rectangle when the points cannot be distrubuted equaly', function() {
      rectangle = new Gesticulate.Geometry.Rectangle(0, 0, 30, 30);
      var points = [
        new Gesticulate.Geometry.Point( 0,  0),
        new Gesticulate.Geometry.Point(20,  0),
        new Gesticulate.Geometry.Point(30, 10),
        new Gesticulate.Geometry.Point(30, 30),
        new Gesticulate.Geometry.Point(10, 30),
        new Gesticulate.Geometry.Point( 0, 20),
        new Gesticulate.Geometry.Point( 0,  0)
      ];
      expect(rectangle.interpolate(7)).toEqual(points);
    });
  });

  describe('#diagonale', function() {
    it('should return the rectangles diagonale', function() {
      expect(rectangle.diagonale()).toEqual(50);
    });
  });

  describe('#boundingBox', function() {
    it('should return the rectangles bounding box (itself)', function() {
      expect(rectangle.boundingBox()).toEqual(rectangle);
    });
  });
});
