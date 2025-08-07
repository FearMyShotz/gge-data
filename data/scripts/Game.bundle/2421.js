Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetCentersOfPowerVO(t) {
    var i = this;
    i.AID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).AID = t;
    return i;
  }
  n.__extends(C2SAllianceBattleGroundGetCentersOfPowerVO, e);
  C2SAllianceBattleGroundGetCentersOfPowerVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ALLIANCE_CENTERS_OF_POWER;
  };
  return C2SAllianceBattleGroundGetCentersOfPowerVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetCentersOfPowerVO = s;