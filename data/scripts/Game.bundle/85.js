Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = function (e) {
  function CastleLocalizedNumberVO(t, i = null, n = 2) {
    var o = e.call(this, t, false, n) || this;
    o.compactThreshold = 10000000;
    o.compactFractionalDigits = 2;
    o.trailingZeros = false;
    if (i) {
      Object.assign(o, i);
    }
    o.compact = Math.abs(o.numberValue) >= o.compactThreshold;
    return o;
  }
  n.__extends(CastleLocalizedNumberVO, e);
  Object.defineProperty(CastleLocalizedNumberVO.prototype, "numberValue", {
    get: function () {
      return Object.getOwnPropertyDescriptor(o.LocalizedNumberVO.prototype, "numberValue").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.LocalizedNumberVO.prototype, "numberValue").set.call(this, e);
      var t = this.compactThreshold && Math.abs(e) >= this.compactThreshold;
      if (t !== this.compact) {
        this.compact = t;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleLocalizedNumberVO;
}(o.LocalizedNumberVO);
exports.CastleLocalizedNumberVO = a;