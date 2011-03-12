Gesticulate.Util = function() {
  return {
    extend: function (destination, source) {
      for (var property in source) {
        if (source.hasOwnProperty(property)) {
          destination[property] = source[property];
        }
      }
      return destination;
    }
  };
}();