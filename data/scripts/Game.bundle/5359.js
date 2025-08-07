Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateAllianceTowerSupportMovementVO(t, i, n, o, s, r, l, c, u, d) {
    var p = this;
    p.SID = 0;
    p.TX = 0;
    p.TY = 0;
    p.LID = 0;
    p.WT = 0;
    p.HBW = 0;
    p.BPC = 0;
    p.PTT = 0;
    p.SD = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this) || this).SID = t;
    p.TX = i;
    p.TY = n;
    p.A = o;
    p.LID = c;
    p.WT = s;
    p.HBW = a.int(u ? -1 : r);
    p.BPC = l;
    p.PTT = a.int(u ? 1 : 0);
    p.SD = d;
    return p;
  }
  n.__extends(C2SCreateAllianceTowerSupportMovementVO, e);
  C2SCreateAllianceTowerSupportMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_ALLIANCE_TOWER_SUPPORT_MOVEMENT;
  };
  return C2SCreateAllianceTowerSupportMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateAllianceTowerSupportMovementVO = r;