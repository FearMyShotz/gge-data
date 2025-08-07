Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./360.js");
var l = require("./13.js");
var c = require("./523.js");
var u = require("./8.js");
var d = require("./11.js");
var p = require("./301.js");
var h = require("./36.js");
var g = function (e) {
  function ModernGenericRewardDialog(t = null) {
    return e.call(this, t || ModernGenericRewardDialog.NAME) || this;
  }
  n.__extends(ModernGenericRewardDialog, e);
  ModernGenericRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], h.ClickFeedbackButton);
    this._rewards = new p.SeasonLeagueSimpleRewardsComponent(this.dialogDisp.mc_items, true, true, 7);
    this._rewardAlign = new c.ItemCenterAlignComponent(this.dialogDisp.mc_items, "mc_item", true);
  };
  ModernGenericRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._rewards.onShow();
    this.updateRewards();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new a.LocalizedTextVO(this.dialogProps.copy)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProps.title))).autoFitToBounds = true;
  };
  ModernGenericRewardDialog.prototype.hide = function () {
    this._rewards.onHide();
    e.prototype.hide.call(this);
  };
  ModernGenericRewardDialog.prototype.updateRewards = function () {
    this._rewardAlign.align(this.dialogProps.rewardList.length);
    this._rewards.updateWithNewData(this.dialogProps.rewardList);
  };
  ModernGenericRewardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogProps.additionalInfo && o.instanceOfClass(this.dialogProps.additionalInfo, "RewardHubVO")) {
          r.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch([this.dialogProps.additionalInfo.hubRewardID]);
        }
        this.hide();
    }
  };
  Object.defineProperty(ModernGenericRewardDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernGenericRewardDialog.NAME = "SeasonLeaguePassGained";
  return ModernGenericRewardDialog;
}(d.CastleExternalDialog);
exports.ModernGenericRewardDialog = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");