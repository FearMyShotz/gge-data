Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./42.js");
var r = require("./8.js");
var l = function (e) {
  function CastleSlotRewardEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleSlotRewardEventDialog.NAME) || this;
  }
  n.__extends(CastleSlotRewardEventDialog, e);
  CastleSlotRewardEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.okBtn]);
  };
  CastleSlotRewardEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.rewardContainer.slotReward.mouseChildren = false;
    if (this.dialogProperties.isToolSlot) {
      this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new a.LocalizedTextVO("dialog_slotUnlock_headerTool")).verticalAlign = s.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new a.LocalizedTextVO("dialog_slotUnlock_tool"));
      this.dialogDisp.rewardContainer.slotReward.gotoAndStop(1);
      this.dialogDisp.rewardContainer.slotReward.toolTipText = "productionSlot_name";
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new a.LocalizedTextVO("dialog_slotUnlock_headerRecruitment")).verticalAlign = s.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new a.LocalizedTextVO("dialog_slotUnlock_recruitment"));
      this.dialogDisp.rewardContainer.slotReward.gotoAndStop(2);
      this.dialogDisp.rewardContainer.slotReward.toolTipText = "recruitmentSlot_name";
    }
  };
  CastleSlotRewardEventDialog.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.okBtn:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleSlotRewardEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSlotRewardEventDialog.__initialize_static_members = function () {
    CastleSlotRewardEventDialog.NAME = "CastleSlotRewardEventDialog";
  };
  return CastleSlotRewardEventDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleSlotRewardEventDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();