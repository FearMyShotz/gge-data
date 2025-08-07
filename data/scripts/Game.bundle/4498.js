Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePrimeSaleDialogProperties(t) {
    var i = e.call(this) || this;
    i._eventVO = t;
    return i;
  }
  n.__extends(CastlePrimeSaleDialogProperties, e);
  Object.defineProperty(CastlePrimeSaleDialogProperties.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePrimeSaleDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastlePrimeSaleDialogProperties = o;