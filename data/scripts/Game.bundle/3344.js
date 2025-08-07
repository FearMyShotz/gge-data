Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyCampaignQuestVO(t) {
    var i = this;
    i.CQID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CQID = t;
    return i;
  }
  n.__extends(C2SBuyCampaignQuestVO, e);
  C2SBuyCampaignQuestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_CAMPAIGN_QUEST;
  };
  return C2SBuyCampaignQuestVO;
}(o.BasicCommandVO);
exports.C2SBuyCampaignQuestVO = s;