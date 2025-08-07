Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SGetHighscoreVO(t, i, n = -1) {
    var o = this;
    o.LT = 0;
    o.LID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).SV = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    o.LT = i;
    o.LID = n;
    return o;
  }
  n.__extends(C2SGetHighscoreVO, e);
  C2SGetHighscoreVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_GET_HIGHSCORE;
  };
  return C2SGetHighscoreVO;
}(o.BasicCommandVO);
exports.C2SGetHighscoreVO = r;