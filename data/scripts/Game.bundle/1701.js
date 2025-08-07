Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceBattleGroundGetTimersVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceBattleGroundGetTimersVO, e);
  C2SAllianceBattleGroundGetTimersVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_ABG_TIMERS;
  };
  return C2SAllianceBattleGroundGetTimersVO;
}(o.BasicCommandVO);
exports.C2SAllianceBattleGroundGetTimersVO = s;