Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDismissUnitPackageVO(t, i, n) {
    var o = this;
    o.WID = 0;
    o.A = 0;
    o.S = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).WID = t;
    o.A = i;
    o.S = n ? 1 : 0;
    return o;
  }
  n.__extends(C2SDismissUnitPackageVO, e);
  C2SDismissUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DISMISS_UNIT_PACKAGE;
  };
  return C2SDismissUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SDismissUnitPackageVO = s;