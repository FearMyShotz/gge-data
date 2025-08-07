Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBattleLogMiddleVO(t) {
    var i = this;
    i.LID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LID = t;
    return i;
  }
  n.__extends(C2SBattleLogMiddleVO, e);
  C2SBattleLogMiddleVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BATTLE_LOG_MIDDLE;
  };
  return C2SBattleLogMiddleVO;
}(o.BasicCommandVO);
exports.C2SBattleLogMiddleVO = s;