Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDefenceMoatVO(t, i, n, o, s) {
    var r = this;
    r.CX = 0;
    r.CY = 0;
    r.AID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).CX = a.int(t.x);
    r.CY = a.int(t.y);
    r.AID = i;
    r.LS = n;
    r.MS = o;
    r.RS = s;
    return r;
  }
  n.__extends(C2SDefenceMoatVO, e);
  C2SDefenceMoatVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DEFENSE_MOAT;
  };
  return C2SDefenceMoatVO;
}(o.BasicCommandVO);
exports.C2SDefenceMoatVO = r;