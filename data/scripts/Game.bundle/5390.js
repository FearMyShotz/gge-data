Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBattleLogDetailVO(t) {
    var i = this;
    i.LID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LID = t;
    return i;
  }
  n.__extends(C2SBattleLogDetailVO, e);
  C2SBattleLogDetailVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BATTLE_LOG_DETAIL;
  };
  return C2SBattleLogDetailVO;
}(o.BasicCommandVO);
exports.C2SBattleLogDetailVO = s;