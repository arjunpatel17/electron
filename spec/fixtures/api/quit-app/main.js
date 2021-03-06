const { app } = require('electron');

app.on('ready', function () {
  // This setImmediate call gets the spec passing on Linux
  setImmediate(function () {
    app.exit(123);
  });
});

process.on('exit', function (code) {
  console.log('Exit event with code: ' + code);
});
