describe('Gesticulate', function() {
	
	describe('.registerGesture', function() {
		
		it('should be defined', function() {
			expect(Gesticulate.registerGesture).toBeDefined();
		})
		
		it('should pass a gesture object to the given closure', function() {
			Gesticulate.registerGesture('example', function(gesture) {
				expect(gesture).toBeDefined();
			})
		})
		
		it('should store the gesture object with the given name', function() {
			var obj = null;
			Gesticulate.registerGesture('example', function(gesture) {
				obj = gesture;
			})
			expect(Gesticulate.__gestures['example']).toBe(obj);
		})
		
	})
	
	describe('.observe', function() {
		
		it('should be defined', function() {
			expect(Gesticulate.observe).toBeDefined();
		})
		
	})
			
})