describe('Gesticulate.Geometry.Line', function() {
  var line;

  beforeEach(function() {
    line = new Gesticulate.Geometry.Line(0, 0, 100, 40);
  });

  describe('constructor', function() {
     it('should expect a start x, start y, end x and end y as an arguments', function() {
       expect(Gesticulate.Geometry.Line.length).toBe(4);
     });
  });

  describe('#interpolate', function() {
    it('should expect a count as argument', function() {
      expect(line.interpolate.length).toBe(1);
    });

    it('should return the given amount of points', function() {
      expect(line.interpolate(10).length).toBe(10);
      expect(line.interpolate(33).length).toBe(33);
    });

    it('interpolate linear on the line', function() {
      var points = [
        new Gesticulate.Geometry.Point(0, 0),
        new Gesticulate.Geometry.Point(25, 10),
        new Gesticulate.Geometry.Point(50, 20),
        new Gesticulate.Geometry.Point(75, 30),
        new Gesticulate.Geometry.Point(100, 40)
      ];
      expect(line.interpolate(5)).toEqual(points);
    });
  });

  describe('#length', function() {
    it('should return the line\'s length', function() {
      expect(line.length()).toBe(107.70329614269008);
    })
  });

  describe('#boundingBox', function() {
    it('should return the lines bounding box', function() {
      var boundingBox = new Gesticulate.Geometry.Rectangle(0, 0, 100, 40);
      expect(line.boundingBox()).toEqual(boundingBox);
    });
  });
});
