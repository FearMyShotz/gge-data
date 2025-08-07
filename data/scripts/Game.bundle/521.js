Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUnlockEventVO(t, i, n, o, a, s, r, l) {
    var c = this;
    c.SCID = 0;
    c.SKID = 0;
    c.W = 0;
    c.S = 0;
    c.F = 0;
    c.C1 = 0;
    c.IID = 0;
    c.SC = 0;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).SCID = t;
    c.SKID = i;
    c.W = n;
    c.S = o;
    c.F = a;
    c.C1 = s;
    c.IID = r;
    c.SC = l;
    return c;
  }
  n.__extends(C2SUnlockEventVO, e);
  C2SUnlockEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UNLOCK_EVENT;
  };
  return C2SUnlockEventVO;
}(o.BasicCommandVO);
exports.C2SUnlockEventVO = s;