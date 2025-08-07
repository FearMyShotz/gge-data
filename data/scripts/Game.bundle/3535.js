Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = require("./11.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./49.js");
var c = require("./360.js");
var u = require("./4.js");
var d = require("./17.js");
var p = require("./1703.js");
var h = function (e) {
  function CastleRewardHubPickAllDialog() {
    return e.call(this, CastleRewardHubPickAllDialog.NAME) || this;
  }
  n.__extends(CastleRewardHubPickAllDialog, e);
  CastleRewardHubPickAllDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pickUpAll_header")));
    o.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_yes, this.dialogDisp.btn_no], l.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
  };
  CastleRewardHubPickAllDialog.prototype.applyProperties = function () {
    e.prototype.applyProperties.call(this);
    if (this.dialogProperties.hasLockedRewards) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_rewardHub_pickUpAll_notAllExtra_desc"));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_rewardHub_pickUpAll_allExtra_desc"));
    }
    this._currentRewardHubIds = u.CastleModel.rewardHubData.getCurrentRewardHubIds();
  };
  CastleRewardHubPickAllDialog.prototype.onClick = function (t) {
    if (o.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_no:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.grantRewards();
      }
    }
  };
  CastleRewardHubPickAllDialog.prototype.grantRewards = function () {
    c.CastleRewardHubMicroservice.Instance.pickRewardsSignal.dispatch(this._currentRewardHubIds);
    this.hide();
    d.CastleLayoutManager.getInstance().hideDialog(p.RewardHubManageAllDialog);
  };
  Object.defineProperty(CastleRewardHubPickAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardHubPickAllDialog.NAME = "CastleRewardHubPickAll";
  return CastleRewardHubPickAllDialog;
}(a.CastleExternalDialog);
exports.CastleRewardHubPickAllDialog = h;