Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AIsoCommandPackageObject(t) {
    var i = e.call(this) || this;
    i._vo = t;
    return i;
  }
  n.__extends(AIsoCommandPackageObject, e);
  Object.defineProperty(AIsoCommandPackageObject.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    set: function (e) {
      this._vo = e;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommandPackageObject;
}(require("./486.js").AIsoCommandPackage);
exports.AIsoCommandPackageObject = o;