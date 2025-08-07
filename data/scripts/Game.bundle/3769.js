Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateArmyTravelMovementVO(t, i, n, o, s, r, l, c, u, d) {
    var p = this;
    p.SX = 0;
    p.SY = 0;
    p.TX = 0;
    p.TY = 0;
    p.KID = 0;
    p.LID = 0;
    p.WT = 0;
    p.HBW = 0;
    p.BPC = 0;
    p.PTT = 0;
    p.SD = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this) || this).SX = a.int(t.x);
    p.SY = a.int(t.y);
    p.TX = a.int(i.x);
    p.TY = a.int(i.y);
    p.KID = c;
    p.A = n;
    p.LID = l;
    p.WT = o;
    p.HBW = a.int(u ? -1 : s);
    p.BPC = r;
    p.PTT = a.int(u ? 1 : 0);
    p.SD = d;
    return p;
  }
  n.__extends(C2SCreateArmyTravelMovementVO, e);
  C2SCreateArmyTravelMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_ARMY_TRAVEL_MOVEMENT;
  };
  return C2SCreateArmyTravelMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateArmyTravelMovementVO = r;