Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function SeasonLeaguePassGained() {
    return e.call(this, SeasonLeaguePassGained.NAME) || this;
  }
  n.__extends(SeasonLeaguePassGained, e);
  SeasonLeaguePassGained.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_des1, new a.LocalizedTextVO("dialog_seasonLeague_bonusRewards_desc")).autoFitToBounds = true;
    this.dialogDisp.mc_seasonPass.visible = this.dialogProps.additionalInfo.isSeason;
    this.dialogDisp.mc_eventPass.visible = this.dialogProps.additionalInfo.isEvent;
    this.dialogDisp.mc_promotionPass.visible = this.dialogProps.additionalInfo.isPromotion;
  };
  SeasonLeaguePassGained.NAME = "SeasonLeaguePassActivated";
  return SeasonLeaguePassGained;
}(require("./1065.js").ModernGenericRewardDialog);
exports.SeasonLeaguePassGained = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");