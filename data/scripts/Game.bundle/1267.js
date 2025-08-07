Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function C2SSpinCharacterTombolaVO(t, i = -1, n, o) {
    var a = e.call(this) || this;
    a.CID = t;
    a.OID = i;
    a.IF = n;
    a.AMT = o;
    s.CastleModel.generalsData.lastPayedQuestCurrencyAmount = o;
    return a;
  }
  n.__extends(C2SSpinCharacterTombolaVO, e);
  C2SSpinCharacterTombolaVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SPIN_CHARACTER_TOMBOLA;
  };
  return C2SSpinCharacterTombolaVO;
}(o.BasicCommandVO);
exports.C2SSpinCharacterTombolaVO = r;