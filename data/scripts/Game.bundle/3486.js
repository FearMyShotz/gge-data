Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./174.js");
var l = require("./8.js");
var c = require("./35.js");
var u = require("./3487.js");
var d = function (e) {
  function SeasonLeagueEndDialogRewards(t) {
    var i = this;
    i._hasBoughtSeasonPassInThisDialog = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SeasonLeagueEndDialogRewards, e);
  SeasonLeagueEndDialogRewards.prototype.init = function () {
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_noRewards.txt_text, new s.LocalizedTextVO("dialog_seasonLeague_seasonEnd_rewards_notQualified_text")).autoFitToBounds = true;
    this._promotionRewards = new u.SeasonLeaguePromotionRewardsComponent(this.subLayerDisp);
  };
  SeasonLeagueEndDialogRewards.prototype.reset = function () {
    this._hasBoughtSeasonPassInThisDialog = false;
  };
  SeasonLeagueEndDialogRewards.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(r.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.addEventListener(r.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    this._promotionRewards.onShow();
    l.ButtonHelper.enableButton(this.subLayerDisp.btn_locked, true);
    this.subLayerDisp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this._promotionRewards.updateWithNewData(this.dialogProperties.getPromotionRewardsVO(), this.dialogProperties.promotionVO.id, this.dialogProperties.seasonID);
    this.updateInfo();
    this.updateRewardPassButton();
  };
  SeasonLeagueEndDialogRewards.prototype.hide = function () {
    this.controller.removeEventListener(r.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT, this.bindFunction(this.onPassPurchased));
    this.controller.removeEventListener(r.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onPassPurchased));
    this._promotionRewards.onHide();
    e.prototype.hide.call(this);
  };
  SeasonLeagueEndDialogRewards.prototype.updateInfo = function () {
    var e = a.Localize.text(this.dialogProperties.isSeasonPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var t = a.Localize.text(this.dialogProperties.isEventPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var i = a.Localize.text(this.dialogProperties.isPromotionPassEnabled || this._hasBoughtSeasonPassInThisDialog ? "status_active" : "status_inactive");
    var n = this.dialogProperties.isSeasonEventEndDialog ? "dialog_seasonLeague_promotionRanks_evenEndReward_tooltip" : "dialog_seasonLeague_seasonRanking_seasonRewards_tooltip";
    var o = this.dialogProperties.isSeasonEventEndDialog ? [e, t] : [e, i];
    this.subLayerDisp.mc_info.toolTipText = a.Localize.text(n, o);
    this.subLayerDisp.mc_noRewards.visible = this._promotionRewards.vo.getNumberOfRewards() <= 0;
  };
  SeasonLeagueEndDialogRewards.prototype.updateRewardPassButton = function () {
    var e;
    this.subLayerDisp.btn_locked.toolTipText = "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
    this.subLayerDisp.btn_locked.visible = this.subLayerDisp.btn_locked.visible && !this._hasBoughtSeasonPassInThisDialog;
    for (var t = 0; e = this.subLayerDisp.getChildByName("mc_item" + t); ++t) {
      e.mc_overlay.toolTipText = this._hasBoughtSeasonPassInThisDialog ? "dialog_seasonLeague_seasonPass_inactiveState_eventEnd_tooltip" : "dialog_seasonLeague_seasonPass_lockedState_eventEnd_tooltip";
      e.mc_overlay.mouseChildren = false;
    }
  };
  SeasonLeagueEndDialogRewards.prototype.onPassPurchased = function (e) {
    this._hasBoughtSeasonPassInThisDialog = true;
    this.updateRewardPassButton();
  };
  Object.defineProperty(SeasonLeagueEndDialogRewards.prototype, "dialogProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueEndDialogRewards.prototype, "hasBoughtSeasonPassInThisDialog", {
    get: function () {
      return this._hasBoughtSeasonPassInThisDialog;
    },
    set: function (e) {
      this._hasBoughtSeasonPassInThisDialog = e;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEndDialogRewards;
}(c.CastleDialogSubLayer);
exports.SeasonLeagueEndDialogRewards = d;
o.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");