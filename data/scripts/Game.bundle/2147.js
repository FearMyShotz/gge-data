Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDefenceInstantBuyToolVO(t, i, n, o, s, r = -1) {
    var l = this;
    l.W = 0;
    l.A = 0;
    l.CX = 0;
    l.CY = 0;
    l.MID = 0;
    l.KID = 0;
    l.PID = 0;
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this).W = t;
    l.A = i;
    l.CX = a.int(n.x);
    l.CY = a.int(n.y);
    l.KID = o;
    l.MID = s;
    l.PID = r;
    return l;
  }
  n.__extends(C2SDefenceInstantBuyToolVO, e);
  C2SDefenceInstantBuyToolVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_INSTANT_BUY_TOOL;
  };
  return C2SDefenceInstantBuyToolVO;
}(o.BasicCommandVO);
exports.C2SDefenceInstantBuyToolVO = r;