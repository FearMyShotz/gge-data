Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO(t, i, n, o, s, r, l, c, u, d, p, h, g, C, _, m, f, O) {
    var E = this;
    E.SX = 0;
    E.SY = 0;
    E.TX = 0;
    E.TY = 0;
    E.KID = 0;
    E.LID = 0;
    E.WT = 0;
    E.HBW = 0;
    E.BPC = 0;
    E.ATT = 0;
    E.AV = 0;
    E.LP = 0;
    E.FC = 0;
    E.PTT = 0;
    E.SD = 0;
    E.ICA = 0;
    E.TCK = 0;
    E.CD = 0;
    CONSTRUCTOR_HACK;
    (E = e.call(this) || this).KID = h;
    E.SX = a.int(t.x);
    E.SY = a.int(t.y);
    E.TX = a.int(i.x);
    E.TY = a.int(i.y);
    E.A = n;
    E.LID = d;
    E.WT = o;
    E.HBW = a.int(g ? -1 : s);
    E.BPC = r;
    E.ATT = l;
    E.AV = a.int(c ? 1 : 0);
    E.LP = u;
    E.FC = a.int(p ? 1 : 0);
    E.PTT = a.int(g ? 1 : 0);
    E.SD = C;
    E.ICA = _;
    E.BKS = m;
    E.CD = 99;
    E.AST = f;
    E.RW = O;
    return E;
  }
  n.__extends(C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO, e);
  C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_ARMY_ATTACK_MOVEMENT_ALLIANCE_BATTLE_GROUND;
  };
  return C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateAllianceBattleGroundCollectorArmyAttackMovementVO = r;