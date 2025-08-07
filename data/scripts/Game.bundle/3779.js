Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateSpyMovementVO(t, i, n, o, s, r, l, c, u, d) {
    var p = this;
    p.SID = 0;
    p.TX = 0;
    p.TY = 0;
    p.SC = 0;
    p.ST = 0;
    p.SE = 0;
    p.HBW = 0;
    p.KID = 0;
    p.PTT = 0;
    p.SD = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this) || this).SID = t;
    p.TX = i;
    p.TY = n;
    p.SC = o;
    p.ST = s;
    p.SE = r;
    p.HBW = a.int(u ? -1 : l);
    p.KID = c;
    p.PTT = a.int(u ? 1 : 0);
    p.SD = d;
    return p;
  }
  n.__extends(C2SCreateSpyMovementVO, e);
  C2SCreateSpyMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_SPY_MOVEMENT;
  };
  return C2SCreateSpyMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateSpyMovementVO = r;