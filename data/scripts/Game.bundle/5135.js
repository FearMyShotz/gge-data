Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SForwardBattleLogVO(t, i) {
    var n = this;
    n.MID = NaN;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SForwardBattleLogVO, e);
  C2SForwardBattleLogVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FORWARD_BATTLE_LOG;
  };
  return C2SForwardBattleLogVO;
}(o.BasicCommandVO);
exports.C2SForwardBattleLogVO = s;