Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetTowerCastlesInfoVO(t, i) {
    var n = this;
    n.XPOS = 0;
    n.YPOS = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).XPOS = t;
    n.YPOS = i;
    return n;
  }
  n.__extends(C2SAllianceBattleGroundGetTowerCastlesInfoVO, e);
  C2SAllianceBattleGroundGetTowerCastlesInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_TOWER_CASTLES_INFO;
  };
  return C2SAllianceBattleGroundGetTowerCastlesInfoVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetTowerCastlesInfoVO = s;