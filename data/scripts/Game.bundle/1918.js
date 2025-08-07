Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STemporaryServerHighscoreVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2STemporaryServerHighscoreVO, e);
  C2STemporaryServerHighscoreVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TEMPORARY_SERVER_HIGHSCORE;
  };
  return C2STemporaryServerHighscoreVO;
}(o.BasicCommandVO);
exports.C2STemporaryServerHighscoreVO = s;