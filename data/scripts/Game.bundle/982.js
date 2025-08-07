Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SBuyUnitPackageVO(t, i, n, o, s, r = -1, l = false, c = 73) {
    var u = this;
    u.LID = 0;
    u.WID = 0;
    u.AMT = 0;
    u.PO = 0;
    u.PWR = 0;
    u.SK = 0;
    u.SID = 0;
    u.AID = 0;
    CONSTRUCTOR_HACK;
    (u = e.call(this) || this).LID = t;
    u.WID = i;
    u.AMT = n;
    u.PO = r;
    u.PWR = a.int(l == 1 ? 1 : 0);
    u.SK = c;
    u.SID = o;
    u.AID = s;
    return u;
  }
  n.__extends(C2SBuyUnitPackageVO, e);
  C2SBuyUnitPackageVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_BUY_UNIT_PACKAGE;
  };
  return C2SBuyUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SBuyUnitPackageVO = r;