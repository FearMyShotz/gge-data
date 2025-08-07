Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAttackInfoTreasureDungeonVO(t, i) {
    var n = this;
    n.MID = 0;
    n.NID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).MID = t;
    n.NID = i;
    return n;
  }
  n.__extends(C2SAttackInfoTreasureDungeonVO, e);
  C2SAttackInfoTreasureDungeonVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ATTACK_INFO_TREASUREDUNGEON;
  };
  return C2SAttackInfoTreasureDungeonVO;
}(o.BasicCommandVO);
exports.C2SAttackInfoTreasureDungeonVO = s;