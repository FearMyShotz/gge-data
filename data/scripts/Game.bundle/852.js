Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function DebugError() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DebugError, e);
  DebugError.handle = function (e, t = false) {
    o.error(e.stack);
    console.error(e.stack);
  };
  return DebugError;
}(Error);
exports.DebugError = s;
a.classImplementsInterfaces(s, "ErrorConstructor");