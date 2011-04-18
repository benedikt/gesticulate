Gesticulate.Language.LetterStrokeBuilder = function(letter) {
  var letters = {
    // 'A': [],
    // 'B': [],
    // 'C': [],
    // 'D': [],
    // 'E': [],
    // 'F': [],
    // 'G': [],
    // 'H': [],
    'I': [0.0, 0.0,  0.0, 2.0],
    // 'J': [],
    // 'K': [],
    'L': [0.0, 0.0,  0.0, 2.0,  1.5, 2.0],
    'M': [0.0, 0.0,  0.0, 2.0,  0.0, 0.0,  0.75, 1.0,  1.5, 0.0,  1.5, 2.0 ],
    'N': [0.0, 0.0,  0.0, 2.0,  0.0, 0.0,   1.5, 2.0,  1.5, 0.0],
    // 'O': [],
    // 'P': [],
    // 'Q': [],
    // 'R': [],
    // 'S': [],
    // 'T': [],
    'U': [0.0, 0.0,  0.0, 2.0,   1.5, 2.0,  1.5, 0.0],
    'V': [0.0, 0.0,  0.75, 2.0,  1.5, 0.0],
    // 'W': [],
    // 'X': [],
    // 'Y': [],
    'Z': [0.0, 0.0,  1.5, 0.0,   0.0, 2.0,  1.5, 2.0],
    // '1': [],
    // '2': [],
    // '3': [],
    // '4': [],
    // '5': [],
    // '6': [],
    // '7': [],
    // '8': [],
    // '9': [],
    '0': []
  };

  this.build = function() {
    return new Gesticulate.Geometry.Polyline(letters[letter.toUpperCase()]);
  };
};