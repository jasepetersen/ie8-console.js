# ie8-console-log

A `console` polyfill that actually lets you view the messages sent to `console`!

## Getting Started
1. Include `ie8-console-log.js` in your web page.
2. Add a call to `console.display()` to view the console output.  This is polyfilled, so if the `console` object exists, it's simply treated as a noop.
