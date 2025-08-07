Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetOwnRanksVO(t) {
    var i = this;
    i.AID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SAllianceBattleGroundGetOwnRanksVO, e);
  C2SAllianceBattleGroundGetOwnRanksVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABG_GET_POINT_HIGHSCORE;
  };
  return C2SAllianceBattleGroundGetOwnRanksVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetOwnRanksVO = s;