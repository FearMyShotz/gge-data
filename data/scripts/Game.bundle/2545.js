Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAttackInfoBossDungeonVO(t, i, n) {
    var o = this;
    o.KID = 0;
    o.SX = 0;
    o.SY = 0;
    o.TX = 0;
    o.TY = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).KID = n;
    o.SX = a.int(t.x);
    o.SY = a.int(t.y);
    o.TX = a.int(i.x);
    o.TY = a.int(i.y);
    return o;
  }
  n.__extends(C2SAttackInfoBossDungeonVO, e);
  C2SAttackInfoBossDungeonVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ATTACK_INFO_BOSSDUNGEON;
  };
  return C2SAttackInfoBossDungeonVO;
}(o.BasicCommandVO);
exports.C2SAttackInfoBossDungeonVO = r;