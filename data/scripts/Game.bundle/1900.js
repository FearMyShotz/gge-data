Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SColossusGetHighscoreVO(t = C2SColossusGetHighscoreVO.RANK_SELF) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).SV = t;
    return i;
  }
  n.__extends(C2SColossusGetHighscoreVO, e);
  C2SColossusGetHighscoreVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLOSSUS_GET_HIGHSCORE;
  };
  C2SColossusGetHighscoreVO.__initialize_static_members = function () {
    C2SColossusGetHighscoreVO.RANK_SELF = "-1";
  };
  return C2SColossusGetHighscoreVO;
}(o.BasicCommandVO);
exports.C2SColossusGetHighscoreVO = s;
s.__initialize_static_members();