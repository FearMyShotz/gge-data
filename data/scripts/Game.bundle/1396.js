Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetAlliancePerformanceVO(t, i) {
    var n = this;
    n.AID = 0;
    n.EID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).AID = t;
    n.EID = i;
    return n;
  }
  n.__extends(C2SAllianceBattleGroundGetAlliancePerformanceVO, e);
  C2SAllianceBattleGroundGetAlliancePerformanceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABG_GET_ALLIANCE_EVENT_STATISTICS;
  };
  return C2SAllianceBattleGroundGetAlliancePerformanceVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetAlliancePerformanceVO = s;