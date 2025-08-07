Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./14.js");
var l = require("./8.js");
var c = require("./2284.js");
var u = require("./382.js");
var d = require("./9.js");
var p = require("./1295.js");
var h = require("./2.js");
var g = require("./16.js");
var C = require("./4.js");
var _ = require("./918.js");
var m = require("./21.js");
var f = function (e) {
  function OptionsDialogDeleteAccountItem(t) {
    var i = e.call(this, new (a.getDefinitionByName("CastleOptions_DeleteAccountItem"))(), t) || this;
    r.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new s.LocalizedTextVO("dialog_options_deleteAccount_title"), new o.InternalGGSTextFieldConfigVO(true));
    r.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new s.LocalizedTextVO("dialog_options_deleteAccount_title"), new o.InternalGGSTextFieldConfigVO(true));
    l.ButtonHelper.initBasicButton(i.contentMC.mcDeleteAccount, 1);
    return i;
  }
  n.__extends(OptionsDialogDeleteAccountItem, e);
  OptionsDialogDeleteAccountItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.updateTexts();
    _.CastleDeleteAccountMicroservice.Instance.onDeleteAccountSignal.add(this.bindFunction(this.updateTexts));
    _.CastleDeleteAccountMicroservice.Instance.onAbortDeleteSignal.add(this.bindFunction(this.updateTexts));
  };
  OptionsDialogDeleteAccountItem.prototype.updateTexts = function () {
    var e = new s.LocalizedTextVO("dialog_options_deleteAccount_desc");
    var t = "dialog_options_deleteAccount_button";
    if (C.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      t = "dialog_options_cancelDeletion_button";
      C.CastleModel.timerData.addEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
      e = new s.LocalizedTextVO("dialog_options_deleteAccount_initiated_desc", [C.CastleModel.deleteAccountData.getDateForDelete()]);
    }
    r.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, e, new o.InternalGGSTextFieldConfigVO(true));
    var i = new s.HTMLTextCustomVO();
    i.addLocalizedTextVO(new s.LocalizedTextVO(t));
    var n = new s.HTMLLinkFormatVO(g.ClientConstColor.DEFAULT_SUBSCRIPTION, h.GGSTextDecoration.UNDERLINE);
    var a = new s.HTMLLinkFormatVO(g.ClientConstColor.DEFAULT_SUBSCRIPTION, h.GGSTextDecoration.UNDERLINE);
    var l = new s.HTMLLinkFormatVO(g.ClientConstColor.DEFAULT_SUBSCRIPTION, h.GGSTextDecoration.UNDERLINE);
    i.linkFormats = new s.HTMLLinkFormatsVO(n, a, l);
    r.CastleComponent.textFieldManager.registerTextField(this.contentMC.mcDeleteAccount.txt_copy, i, new o.InternalGGSTextFieldConfigVO(true));
  };
  OptionsDialogDeleteAccountItem.prototype.onTimeUpdate = function (e = null) {
    if (C.CastleModel.deleteAccountData.isAccountDeletionStarted) {
      this.updateRemainingTime();
    } else {
      C.CastleModel.timerData.removeEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  OptionsDialogDeleteAccountItem.prototype.updateRemainingTime = function () {
    var e = new s.LocalizedTextVO("dialog_options_deleteAccount_initiated_desc", [C.CastleModel.deleteAccountData.getDateForDelete()]);
    r.CastleComponent.textFieldManager.registerTextField(this.contentMC.txt_description, e, new o.InternalGGSTextFieldConfigVO(true));
  };
  OptionsDialogDeleteAccountItem.prototype.onDeleteClick = function () {
    if (C.CastleModel.subscriptionData.isAnyPackageActive()) {
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(c.AccountDeletionActiveSubscribtionDialog);
    } else {
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleDeleteAccountDialog);
    }
  };
  OptionsDialogDeleteAccountItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.mcDeleteAccount:
          this.onDeleteClick();
      }
    }
  };
  OptionsDialogDeleteAccountItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    _.CastleDeleteAccountMicroservice.Instance.onDeleteAccountSignal.remove(this.bindFunction(this.updateTexts));
    _.CastleDeleteAccountMicroservice.Instance.onAbortDeleteSignal.remove(this.bindFunction(this.updateTexts));
    C.CastleModel.timerData.removeEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
  };
  return OptionsDialogDeleteAccountItem;
}(u.AOptionsDialogCollapsibleItem);
exports.OptionsDialogDeleteAccountItem = f;
a.classImplementsInterfaces(f, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");