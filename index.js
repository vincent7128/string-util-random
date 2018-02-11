(function() {
  var NUMBER = '0123456789';
  var ALPHA = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var ALPHA_NUMBER = ALPHA + NUMBER;

  var random = function(length, tester) {
    var code = generator(ALPHA_NUMBER, length);
    if (typeof tester === 'function' && !tester(code)) {
      code = random(length, tester);
    }
    return code;
  };

  random.numeric = function(length, tester) {
    var code = generator(NUMBER, length);
    if (typeof tester === 'function' && !tester(code)) {
      code = random.numeric(length, tester);
    }
    return code;
  };

  random.alphabetic = function(length, tester) {
    var code = generator(ALPHA, length);
    if (typeof tester === 'function' && !tester(code)) {
      code = random.alphabetic(length, tester);
    }
    return code;
  };

  function generator(chars, length) {
    length = length || Math.floor(Math.random() * 8);
    var code = '';
    for (var i = 0; i < length; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = random;
  } else {
    window.random = random;
  }
})();
