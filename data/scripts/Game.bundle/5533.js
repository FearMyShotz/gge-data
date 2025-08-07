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
var p = function (e) {
  function SubscriptionExpiredDialog() {
    return e.call(this, SubscriptionExpiredDialog.NAME) || this;
  }
  n.__extends(SubscriptionExpiredDialog, e);
  SubscriptionExpiredDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, g.ClickFeedbackButton);
    c.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, h.ClickFeedbackButtonBackground);
    C.registerUIComponentToCXF(this.dialogDisp.btn_ok, "btn_webshop", {
      page: "subscriptions",
      sourceId: _.CXFSourceTrackingConstants.CXF_SOURCE_SUBSCRIPTION_EXPIRED_DIALOG
    });
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionExpired_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_text, new s.LocalizedTextVO("dialog_subscriptionExpired_subscriptionButton_desc"));
  };
  SubscriptionExpiredDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateInfos();
  };
  SubscriptionExpiredDialog.prototype.updateInfos = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(this.getDescriptionTextId(), [a.Localize.text(this.dialogProperties.messageVO.getPackageType().nameTextId), this.dialogProperties.messageVO.allianceSubscribersAtThatTime]));
  };
  SubscriptionExpiredDialog.prototype.getDescriptionTextId = function () {
    switch (this.dialogProperties.messageVO.getPackageType()) {
      case d.SubscriptionPackageEnum.ALLIANCE:
        switch (this.dialogProperties.messageVO.allianceSubscribersAtThatTime) {
          case 0:
            return "dialog_subscriptionExpired_allianceNone_desc";
          case 1:
            return "dialog_subscriptionExpired_allianceSingular_desc";
          default:
            return "dialog_subscriptionExpired_alliance_desc";
        }
      default:
        return "dialog_subscriptionExpired_player_desc";
    }
  };
  SubscriptionExpiredDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SubscriptionExpiredDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionExpiredDialog.NAME = "SubscriptionExpired";
  return SubscriptionExpiredDialog;
}(u.CastleExternalDialog);
exports.SubscriptionExpiredDialog = p;
var h = require("./121.js");
var g = require("./36.js");
var C = require("./267.js");
var _ = require("./108.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");