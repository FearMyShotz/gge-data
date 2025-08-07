Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./13.js");
var s = require("./4.js");
var r = require("./20.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./222.js");
var d = function (e) {
  function AccountDeletionActiveSubscribtionDialog() {
    return e.call(this, AccountDeletionActiveSubscribtionDialog.NAME) || this;
  }
  n.__extends(AccountDeletionActiveSubscribtionDialog, e);
  AccountDeletionActiveSubscribtionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], r.ClickFeedbackButtonHover);
  };
  AccountDeletionActiveSubscribtionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.TextVO(a.TextHelper.toUpperCaseLocaSafeTextId("dialog_deleteAccount_initiated_popup_title")));
    this.dialogDisp.btn_close.visible = false;
    var i = o.Localize.text("dialog_options_deleteAccount_subscriptionActive_desc");
    if (s.CastleModel.subscriptionData.isPackageActive(u.SubscriptionPackageEnum.PLAYER)) {
      i += "\n" + o.Localize.text(u.SubscriptionPackageEnum.PLAYER.nameTextId);
    }
    if (s.CastleModel.subscriptionData.isPackageActive(u.SubscriptionPackageEnum.PREMIUM)) {
      i += "\n" + o.Localize.text(u.SubscriptionPackageEnum.PREMIUM.nameTextId);
    }
    if (s.CastleModel.subscriptionData.isPackageActive(u.SubscriptionPackageEnum.ALLIANCE)) {
      i += "\n" + o.Localize.text(u.SubscriptionPackageEnum.ALLIANCE.nameTextId);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new o.TextVO(i));
  };
  AccountDeletionActiveSubscribtionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  AccountDeletionActiveSubscribtionDialog.__initialize_static_members = function () {
    AccountDeletionActiveSubscribtionDialog.NAME = "AccountDeletionActiveSubscribtion";
  };
  return AccountDeletionActiveSubscribtionDialog;
}(c.CastleExternalDialog);
exports.AccountDeletionActiveSubscribtionDialog = d;
d.__initialize_static_members();