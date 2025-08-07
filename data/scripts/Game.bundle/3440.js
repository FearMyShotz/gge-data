Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = function (e) {
  function GenericRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, GenericRewardDialog.NAME) || this;
  }
  n.__extends(GenericRewardDialog, e);
  GenericRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_dailyQuests_gotReward_title"));
  };
  GenericRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("milestone_reward"));
    for (var i = 1; i <= GenericRewardDialog.MAX_REWARDS; i++) {
      this.dialogDisp.mc_rewardContainer["rewards" + i].visible = i == this.dialogProperties.rewards.length;
    }
    u.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.dialogDisp.mc_rewardContainer["rewards" + this.dialogProperties.rewards.length], "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewards, new r.CollectableRenderOptions(this.dialogProperties.renderProperties.collectableRenderOption, this.dialogProperties.renderProperties.rewardIconDimension), this.dialogProperties.renderProperties.preRenderFunc);
  };
  GenericRewardDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(GenericRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GenericRewardDialog.__initialize_static_members = function () {
    GenericRewardDialog.NAME = "CastleDailyQuestThresholdReward";
    GenericRewardDialog.MAX_REWARDS = 4;
  };
  return GenericRewardDialog;
}(require("./11.js").CastleExternalDialog);
exports.GenericRewardDialog = l;
var c = require("./8.js");
var u = require("./25.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();