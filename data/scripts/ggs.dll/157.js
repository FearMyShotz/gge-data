Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function LocalizationModuleError(t = "", n = "") {
    var i = e.call(this, t) || this;
    i._id = "";
    i._id = n;
    return i;
  }
  i.__extends(LocalizationModuleError, e);
  Object.defineProperty(LocalizationModuleError.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  return LocalizationModuleError;
}(Error);
exports.LocalizationModuleError = a;