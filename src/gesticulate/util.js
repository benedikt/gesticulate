/**
 * Gesticulate.Util
 * This package includes several utility methods used in Gesticulate
 **/
Gesticulate.Util = function() {
  return {
    /**
     * Gesticulate.Util.extend(destination, source) -> Object
     * Extends the given object with the properties defined on the source.
     **/
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
