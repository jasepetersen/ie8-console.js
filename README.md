# ie8-console.js

A `console` polyfill that actually lets you view the messages you're logging!  Necessitated by the not-yet-dead Internet Explorer 8.

## Getting Started
1. Include `ie8-console.js` in your web page.  Optionally include `ie8-console.css` to make things pretty.
2. Add a call to `console.display()` to view the console output.  This is polyfilled, so if the `console` object exists, it's simply treated as a noop.
