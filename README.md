# Random String

Simple random string util for javascript

## Usage

NPM:

```
npm install string-util-format

var random = require('string-util-random');
```

CDN:

```
<script src="https://cdn.jsdelivr.net/npm/string-util-format/index.js"></script>
```

Code example:

```
var random = require('./index');

// Creates a random 6 length of (a-z A-Z 0-9) string.
random(6);

// Creates a random 6 length of numeric only(0-9) string.
random.numeric(6);

// Creates a random 6 length of alphabetic only(a-z A-Z) string.
random.alphabetic(6);

// Creates a random with tester
var c = 0;
random(6, function (code) {
  // just run 10 times, change to your tester.
  console.log(code);
  return c++ > 10;
});

```

## License

This project is licensed under the MIT License - see the

<license> file for details</license>
