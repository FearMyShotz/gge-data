Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDefenceKeepVO(t, i, n, o, s = 0, r = 50) {
    var l = this;
    l.CX = 0;
    l.CY = 0;
    l.AID = 0;
    l.MAUCT = 0;
    l.UC = 0;
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this).CX = a.int(t.x);
    l.CY = a.int(t.y);
    l.AID = i;
    l.S = n;
    l.STS = o;
    l.UC = r;
    l.MAUCT = s;
    return l;
  }
  n.__extends(C2SDefenceKeepVO, e);
  C2SDefenceKeepVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DEFENSE_KEEP;
  };
  return C2SDefenceKeepVO;
}(o.BasicCommandVO);
exports.C2SDefenceKeepVO = r;