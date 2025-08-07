Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = function () {
  function AbstractProxy() {}
  Object.defineProperty(AbstractProxy.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractProxy;
}();
exports.AbstractProxy = a;