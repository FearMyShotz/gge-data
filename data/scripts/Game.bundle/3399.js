Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SEventAnnouncementClaimRewardVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SEventAnnouncementClaimRewardVO, e);
  C2SEventAnnouncementClaimRewardVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLLECT_ANNOUNCEMENT_REWARD_EVENT;
  };
  return C2SEventAnnouncementClaimRewardVO;
}(o.BasicCommandVO);
exports.C2SEventAnnouncementClaimRewardVO = s;