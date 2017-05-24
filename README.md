# ie8-console

A `console` polyfill that actually lets you view the messages you're logging!  Necessitated by the not-yet-dead Internet Explorer 8.

## Getting Started
1. Include `ie8-consolejs` in your web page.
2. Add a call to `console.display()` to view the console output.  This is polyfilled, so if the `console` object exists, it's simply treated as a noop.
