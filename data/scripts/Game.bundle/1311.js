Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AAutoSellDialogSublayer(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AAutoSellDialogSublayer, e);
  Object.defineProperty(AAutoSellDialogSublayer.prototype, "autoSellVO", {
    get: function () {
      return this._autoSellVO;
    },
    set: function (e) {
      this._autoSellVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return AAutoSellDialogSublayer;
}(require("./34.js").CastleDialogSubLayer);
exports.AAutoSellDialogSublayer = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "ISublayer");