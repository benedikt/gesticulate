describe('Gesticulate.Geometry.Polyline', function() {
  var polyline;


  beforeEach(function() {
    polyline = new Gesticulate.Geometry.Polyline(0, 0, 20, 10, 30, 30);
  });

  describe('#initialize', function() {
     it('should expect a multiple of 2', function() {
       expect(function() {
          new Gesticulate.Geometry.Polyline(1, 1, 2, 2, 3);
       }).toThrow({
         name: 'InvalidArguments',
         message: 'Only an argument count of multiples of two are allowed.'
       });
     });

     it('should accept an array of Gesticulate.Geometry.Points', function() {
       var points = [
         new Gesticulate.Geometry.Point(0, 0),
         new Gesticulate.Geometry.Point(20, 10),
         new Gesticulate.Geometry.Point(30, 30)
       ];
       new Gesticulate.Geometry.Polyline(points);
     });
  });

  describe('#interpolate', function() {
    it('should expect a count as argument', function() {
      expect(polyline.interpolate.length).toBe(1);
    });

    it('should return the given amount of points', function() {
      expect(polyline.interpolate(10).length).toBe(10);
      expect(polyline.interpolate(33).length).toBe(33);
    });

    it('interpolate linear on the polyline', function() {
      var points = [
        new Gesticulate.Geometry.Point(0, 0),
        new Gesticulate.Geometry.Point(10, 5),
        new Gesticulate.Geometry.Point(20, 10),
        new Gesticulate.Geometry.Point(25, 20),
        new Gesticulate.Geometry.Point(30, 30)
      ];
      expect(polyline.interpolate(5)).toEqual(points);
    });
  });

  describe('#length', function() {
    it('should return the polyline\'s length', function() {
      expect(polyline.length()).toBe(44.721359549995796);
    })
  });

  describe('#boundingBox', function() {
    it('should return the polylines bounding box', function() {
      var boundingBox = new Gesticulate.Geometry.Rectangle(0, 0, 30, 30);
      expect(polyline.boundingBox()).toEqual(boundingBox);
    });
  });
});

