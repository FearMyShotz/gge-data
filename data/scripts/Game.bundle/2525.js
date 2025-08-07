Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundJoinedPlayerVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceBattleGroundJoinedPlayerVO, e);
  C2SAllianceBattleGroundJoinedPlayerVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABG_JOINED_PLAYER;
  };
  return C2SAllianceBattleGroundJoinedPlayerVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundJoinedPlayerVO = s;