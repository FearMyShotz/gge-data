Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SBattleLogShortVO(t, i) {
    var n = this;
    n.MID = 0;
    n.IM = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).MID = t;
    n.IM = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SBattleLogShortVO, e);
  C2SBattleLogShortVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_BATTLE_LOG_SHORT;
  };
  return C2SBattleLogShortVO;
}(o.BasicCommandVO);
exports.C2SBattleLogShortVO = r;