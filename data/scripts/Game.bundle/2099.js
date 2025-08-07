Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEventPackagePrimeSaleDialogProperties(t) {
    var i = e.call(this) || this;
    i._eventVO = t;
    return i;
  }
  n.__extends(CastleEventPackagePrimeSaleDialogProperties, e);
  Object.defineProperty(CastleEventPackagePrimeSaleDialogProperties.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEventPackagePrimeSaleDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleEventPackagePrimeSaleDialogProperties = o;