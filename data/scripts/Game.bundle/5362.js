Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetPlayerInfluenceVO(t) {
    var i = this;
    i.PID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PID = t;
    return i;
  }
  n.__extends(C2SAllianceBattleGroundGetPlayerInfluenceVO, e);
  C2SAllianceBattleGroundGetPlayerInfluenceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABG_GET_PLAYER_INFLUENCE;
  };
  return C2SAllianceBattleGroundGetPlayerInfluenceVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetPlayerInfluenceVO = s;