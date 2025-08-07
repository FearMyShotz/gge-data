Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SWishingWellCommandVO(t, i = -1, n = false) {
    var o = this;
    o.PWR = 0;
    o._PO = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).WOP = t;
    o.PWR = n == 1 ? 1 : 0;
    o._PO = i;
    return o;
  }
  n.__extends(C2SWishingWellCommandVO, e);
  C2SWishingWellCommandVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RUBY_WISHING_WELL;
  };
  return C2SWishingWellCommandVO;
}(o.BasicCommandVO);
exports.C2SWishingWellCommandVO = s;