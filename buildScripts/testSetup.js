// Transpile before our tests run.
require("babel-register")();

// Disable webpack features Mocha does not understand.
require.extensions[".css"] = function() {};
