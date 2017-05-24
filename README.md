# ie8-console.js

A `console` polyfill that actually lets you view the messages you're logging!  Necessitated by the not-yet-dead Internet Explorer 8.

## Demo
https://jasepetersen.github.io/ie8-console.js/

## Getting Started
1. Include `ie8-console.js` in your web page.  Optionally include `ie8-console.css` to make things pretty.
2. Add a call to `console.display()` to view the console output.  This is polyfilled, so if the `console` object exists, it's simply treated as a noop.

## Functions

### Full Support

  * `assert`
  * `clear`
  * `time`
  * `timeEnd`

### Limited Support

  * `count` - Unable to determine if it's the same place in code.  Dependent on using the same label.
  * `error` - Only supports logging strings.
  * `info` - Only supports logging strings.
  * `log` - Only supports logging strings.
  * `warn` - Only supports logging strings.

### Future Support

  * `group`
  * `groupCollapsed`
  * `groupEnd`

### Unsupported

  * `debug`
  * `dir`
  * `dirxml`
  * `exception`
  * `msIsIndependentlyComposed`
  * `profile`
  * `profileEnd`
  * `select`
  * `table`
  * `timeStamp`
  * `trace`