Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SBuyEventPackageVO(t, i, n, o, s, r = -1, l = -1, c = false, u = -1, d = false) {
    var p = this;
    p.PID = 0;
    p.BT = 0;
    p.TID = 0;
    p.AMT = 0;
    p.KID = 0;
    p.AID = 0;
    p.PC2 = 0;
    p.BA = 0;
    p.PWR = 0;
    p._PO = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this) || this).PID = t;
    p.BT = i;
    p.TID = n;
    p.AMT = o;
    p.KID = s;
    p.AID = r;
    p.PC2 = a.int(l);
    p.BA = a.int(c ? 1 : 0);
    p.PWR = d == 1 ? 1 : 0;
    p._PO = u;
    return p;
  }
  n.__extends(C2SBuyEventPackageVO, e);
  C2SBuyEventPackageVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_BUY_EVENTPACKAGE;
  };
  return C2SBuyEventPackageVO;
}(o.BasicCommandVO);
exports.C2SBuyEventPackageVO = r;