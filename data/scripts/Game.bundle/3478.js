Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./8.js");
var c = function (e) {
  function CastleDailyQuestThresholdRewardDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleDailyQuestThresholdRewardDialog.NAME) || this;
  }
  n.__extends(CastleDailyQuestThresholdRewardDialog, e);
  CastleDailyQuestThresholdRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_dailyQuests_gotReward_title"));
  };
  CastleDailyQuestThresholdRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_dailyQuests_gotReward_copy", [this.dialogProperties.threshold]));
    for (var i = 1; i <= CastleDailyQuestThresholdRewardDialog.MAX_REWARDS; i++) {
      this.dialogDisp.mc_rewardContainer["rewards" + i].visible = i == this.dialogProperties.rewardList.length;
    }
    u.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.dialogDisp.mc_rewardContainer["rewards" + this.dialogProperties.rewardList.length], "item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewardList, new r.CollectableRenderOptions(this.dialogProperties.renderProperties.collectableRenderOption, this.dialogProperties.renderProperties.rewardIconDimension), this.dialogProperties.renderProperties.preRenderFunc);
  };
  CastleDailyQuestThresholdRewardDialog.prototype.onClick = function (e) {
    if (l.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_ok:
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleDailyQuestThresholdRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDailyQuestThresholdRewardDialog.__initialize_static_members = function () {
    CastleDailyQuestThresholdRewardDialog.NAME = "CastleDailyQuestThresholdReward";
    CastleDailyQuestThresholdRewardDialog.MAX_REWARDS = 4;
  };
  return CastleDailyQuestThresholdRewardDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleDailyQuestThresholdRewardDialog = c;
var u = require("./25.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();