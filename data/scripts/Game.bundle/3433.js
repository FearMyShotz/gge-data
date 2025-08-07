Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1665.js");
var s = require("./9.js");
var r = require("./1703.js");
var l = require("./3537.js");
var c = require("./3.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function RewardHubMainDialogSeason(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(RewardHubMainDialogSeason, e);
  RewardHubMainDialogSeason.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_events.visible = false;
    this.subLayerDisp.mc_season.visible = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_season.btn_all.txt_copy, new c.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_button")));
    p.ButtonHelper.enableButton(this.subLayerDisp.mc_season.btn_all, d.CastleModel.rewardHubData.getAmountOfPendingRewards() > 0);
  };
  RewardHubMainDialogSeason.prototype.dataList = function () {
    p.ButtonHelper.enableButton(this.subLayerDisp.mc_season.btn_all, d.CastleModel.rewardHubData.getAmountOfPendingRewards() > 0);
    this.updateTabButton(d.CastleModel.rewardHubData.rewardHubVOs.length);
    return d.CastleModel.rewardHubData.rewardHubVOs;
  };
  RewardHubMainDialogSeason.prototype.updateTabButton = function (e) {
    this.parent.setSeasonAmount(e);
  };
  RewardHubMainDialogSeason.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target) && !this.isLoading) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.mc_season.btn_all:
          s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.RewardHubManageAllDialog, new l.RewardHubManageAllDialogProperties());
      }
    }
  };
  return RewardHubMainDialogSeason;
}(a.ARewardHubDialogSublayer);
exports.RewardHubMainDialogSeason = h;
o.classImplementsInterfaces(h, "ICollectableRendererList", "ISublayer");