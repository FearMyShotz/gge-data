Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetIgnoredPlayersVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetIgnoredPlayersVO, e);
  C2SGetIgnoredPlayersVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_IGNORED_PLAYERS;
  };
  return C2SGetIgnoredPlayersVO;
}(o.BasicCommandVO);
exports.C2SGetIgnoredPlayersVO = s;