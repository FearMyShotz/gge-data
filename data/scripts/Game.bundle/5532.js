Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./221.js");
var p = require("./36.js");
var h = function (e) {
  function SubscriptionConfirmationDialog() {
    return e.call(this, SubscriptionConfirmationDialog.NAME) || this;
  }
  n.__extends(SubscriptionConfirmationDialog, e);
  SubscriptionConfirmationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], p.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionConfirmation_header")));
  };
  SubscriptionConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateInfos();
  };
  SubscriptionConfirmationDialog.prototype.updateInfos = function () {
    var e = this.dialogProperties.messageVO.getPackageType();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new s.LocalizedTextVO(e.nameTextId));
    this.dialogDisp.mc_teaser.gotoAndStop(this.getTeaserFrame());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(this.getDescriptionTextId(), [a.Localize.text(e.nameTextId), this.dialogProperties.messageVO.allianceSubscribersAtThatTime]));
  };
  SubscriptionConfirmationDialog.prototype.getTeaserFrame = function () {
    switch (this.dialogProperties.messageVO.getPackageType()) {
      case d.SubscriptionPackageEnum.PLAYER:
        return 1;
      case d.SubscriptionPackageEnum.PREMIUM:
        return 2;
      case d.SubscriptionPackageEnum.ALLIANCE:
        return 3;
      default:
        return 1;
    }
  };
  SubscriptionConfirmationDialog.prototype.getDescriptionTextId = function () {
    switch (this.dialogProperties.messageVO.getPackageType()) {
      case d.SubscriptionPackageEnum.ALLIANCE:
        if (this.dialogProperties.messageVO.allianceSubscribersAtThatTime == 1) {
          return "dialog_subscriptionConfirmation_allianceSingular_desc";
        } else {
          return "dialog_subscriptionConfirmation_alliance_desc";
        }
      default:
        return "dialog_subscriptionConfirmation_player_desc";
    }
  };
  SubscriptionConfirmationDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SubscriptionConfirmationDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionConfirmationDialog.NAME = "SubscriptionConfirmation";
  return SubscriptionConfirmationDialog;
}(u.CastleExternalDialog);
exports.SubscriptionConfirmationDialog = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");