Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyCampaignRewardVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SBuyCampaignRewardVO, e);
  C2SBuyCampaignRewardVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_CAMPAIGN_REWARD;
  };
  return C2SBuyCampaignRewardVO;
}(o.BasicCommandVO);
exports.C2SBuyCampaignRewardVO = s;