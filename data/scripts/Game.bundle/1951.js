Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateArmyAttackMovementVO(t, i, n, o, s, r, l, c, u, d, p, h, g, C, _, m, f, O, E) {
    var y = this;
    y.SX = 0;
    y.SY = 0;
    y.TX = 0;
    y.TY = 0;
    y.KID = 0;
    y.LID = 0;
    y.WT = 0;
    y.HBW = 0;
    y.BPC = 0;
    y.ATT = 0;
    y.AV = 0;
    y.LP = 0;
    y.FC = 0;
    y.PTT = 0;
    y.SD = 0;
    y.ICA = 0;
    y.CD = 0;
    CONSTRUCTOR_HACK;
    (y = e.call(this) || this).KID = h;
    y.SX = a.int(t.x);
    y.SY = a.int(t.y);
    y.TX = a.int(i.x);
    y.TY = a.int(i.y);
    y.A = n;
    y.LID = d;
    y.WT = o;
    y.HBW = a.int(g ? -1 : s);
    y.BPC = r;
    y.ATT = l;
    y.AV = a.int(c ? 1 : 0);
    y.LP = u;
    y.FC = a.int(p ? 1 : 0);
    y.PTT = a.int(g ? 1 : 0);
    y.SD = C;
    y.ICA = _;
    y.BKS = m;
    y.AST = f;
    y.CD = 99;
    y.RW = O;
    y.ASCT = E;
    return y;
  }
  n.__extends(C2SCreateArmyAttackMovementVO, e);
  C2SCreateArmyAttackMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_ARMY_ATTACK_MOVEMENT;
  };
  return C2SCreateArmyAttackMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateArmyAttackMovementVO = r;