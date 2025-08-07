Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUserAchievedRanksVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SUserAchievedRanksVO, e);
  C2SUserAchievedRanksVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_USER_ACHIEVED_RANKS;
  };
  return C2SUserAchievedRanksVO;
}(o.BasicCommandVO);
exports.C2SUserAchievedRanksVO = s;