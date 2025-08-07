Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./9.js");
var c = require("./20.js");
var u = require("./76.js");
var d = require("./78.js");
var p = require("./77.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./1784.js");
var _ = require("./550.js");
var m = require("./404.js");
var f = function (e) {
  function GlobalLeaderboardRankingRankingRewardsDialog() {
    return e.call(this, GlobalLeaderboardRankingRankingRewardsDialog.NAME) || this;
  }
  n.__extends(GlobalLeaderboardRankingRankingRewardsDialog, e);
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rewardHub], c.ClickFeedbackButtonHover, 1);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("event_rewards_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("ranking_description_DonationEvent"));
    var i = new p.InfiniteScrollListOptions(C.GachaRankingRewardsDialogListItem, "DonationRankingRewards_Item", GlobalLeaderboardRankingRankingRewardsDialog.NAME);
    i.itemPaddingY = 0;
    i.useSmoothScroll = true;
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this._list = new d.InfiniteScrollListComponent(new u.InfiniteScrollListClips(this.dialogDisp.mc_list).addSliderMc(this.dialogDisp.mc_list.mc_slider).addMaskMc(this.dialogDisp.mc_list.maskMc), i);
    this._list.onShow();
    this.updateAllInfos(true);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    e.prototype.hide.call(this);
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.updateAllInfos = function (e = false) {
    var t = this.dialogProperties.rankingRewards;
    this._list.updateWithNewData(t, e);
    this._list.onShow();
  };
  GlobalLeaderboardRankingRankingRewardsDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_rewardHub:
          l.CastleDialogHandler.getInstance().registerDefaultDialogs(m.RewardHubMainDialog, new _.RewardHubDialogProperties(false));
          break;
        case this.dialogDisp.btn_help:
          l.CastleDialogHandler.getInstance().showHelper(s.Localize.text(" "), s.Localize.text("dialog_mainDonationEvent_helpPopup"));
      }
    }
  };
  Object.defineProperty(GlobalLeaderboardRankingRankingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GlobalLeaderboardRankingRankingRewardsDialog.NAME = "DonationRankingRewards";
  return GlobalLeaderboardRankingRankingRewardsDialog;
}(g.CastleExternalDialog);
exports.GlobalLeaderboardRankingRankingRewardsDialog = f;
a.classImplementsInterfaces(f, "ICollectableRendererList");