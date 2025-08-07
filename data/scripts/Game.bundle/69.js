Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AbstractMethodError() {
    return e.call(this, "Abstract Method not overwritten.") || this;
  }
  n.__extends(AbstractMethodError, e);
  return AbstractMethodError;
}(Error);
exports.AbstractMethodError = a;
o.classImplementsInterfaces(a, "ErrorConstructor");