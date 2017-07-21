Parrot generator
=========

With this module you can generate emoji text.
![Alt text](Inloop.png "Optional title")

## Installation

  npm install parrot-generator --save

## Usage
```javascript
  var scapegoat = require('scapegoat')
      escape = scapegoat.escape,
      unescape = scapegoat.unescape;

  var html = '<h1>Hello World</h1>',
      escaped = escape(html),
      unescaped = unescape(escaped);

  console.log('html', html, 'escaped', escaped, 'unescaped', unescaped);
```
## Contributing

If you want to contribute then write me at kolimar@inloop.eu

## Release History

* 1.0.1 Added readme
* 1.0.0 Initial release

## Known issues

* Text is sometimes generated in bad order.