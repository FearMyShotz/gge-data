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
var d = require("./36.js");
var p = function (e) {
  function SubscriptionLoyaltyBonusGainDialog() {
    return e.call(this, SubscriptionLoyaltyBonusGainDialog.NAME) || this;
  }
  n.__extends(SubscriptionLoyaltyBonusGainDialog, e);
  SubscriptionLoyaltyBonusGainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], d.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_loyaltyGift_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_loyaltyGift_desc"));
    this.dialogDisp.mc_icon.toolTipText = "gold";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new a.LocalizedNumberVO(this.dialogProperties.amount));
  };
  SubscriptionLoyaltyBonusGainDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SubscriptionLoyaltyBonusGainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionLoyaltyBonusGainDialog.NAME = "SubscriptionLoyaltyBonusGain";
  return SubscriptionLoyaltyBonusGainDialog;
}(u.CastleExternalDialog);
exports.SubscriptionLoyaltyBonusGainDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");