Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = function (e) {
  function SeasonLeagueMainDialogPromotionTooltip(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogPromotionTooltip, e);
  SeasonLeagueMainDialogPromotionTooltip.prototype.init = function () {
    l.CastleComponent.textFieldManager.registerTextField(this.disp.mc_info.txt_text, new a.LocalizedTextVO("dialog_seasonLeague_promotionRanks_progressBar_text")).autoFitToBounds = true;
    this._promotionBar = new c.SeasonLeaguePromotionProgressBarComponent(this.disp.mc_info.mc_progress);
  };
  SeasonLeagueMainDialogPromotionTooltip.prototype.update = function () {
    this._promotionBar.update(s.CastleModel.seasonLeagueData.getActiveSeasonEventVO() != null, s.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
  };
  SeasonLeagueMainDialogPromotionTooltip.prototype.setPosition = function (e, t) {
    this.disp.x = e;
    switch (t) {
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT:
        this.disp.mc_info.x = 76;
        break;
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER:
        this.disp.mc_info.x = 0;
        break;
      case SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT:
        this.disp.mc_info.x = -76;
    }
  };
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_LEFT = "aLeft";
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_CENTER = "aCenter";
  SeasonLeagueMainDialogPromotionTooltip.ALIGN_RIGHT = "aRight";
  return SeasonLeagueMainDialogPromotionTooltip;
}(require("./40.js").CastleItemRenderer);
exports.SeasonLeagueMainDialogPromotionTooltip = r;
var l = require("./14.js");
var c = require("./1656.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");