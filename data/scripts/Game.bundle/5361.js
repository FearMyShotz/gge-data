Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetAllianceInfluenceVO(t) {
    var i = this;
    i.AID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SAllianceBattleGroundGetAllianceInfluenceVO, e);
  C2SAllianceBattleGroundGetAllianceInfluenceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABG_GET_ALLIANCE_INFLUENCE;
  };
  return C2SAllianceBattleGroundGetAllianceInfluenceVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetAllianceInfluenceVO = s;