Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./20.js");
var r = require("./8.js");
var l = function (e) {
  function OptionsDialogAccountInfoItemEmail(t, i, n = null, l = null, c = null) {
    var u = e.call(this, t, i, n, new (o.getDefinitionByName("CastleOptions_AccountDetailItemEmail"))()) || this;
    u._onButton2 = l;
    u._onGoto = c;
    u._headerMC.btn_button2.visible = !!u._onButton2;
    u._headerMC.mc_ex1.visible = a.CastleModel.playerEmailData.isMailState_MailChangePending;
    u._headerMC.mc_ex1.toolTipText = "dialog_options_accountDetails_changeEmail_inProgress_tooltip";
    u._headerMC.btn_goto.visible = !!u._onGoto;
    r.ButtonHelper.initButtons([u._headerMC.btn_button2, u._headerMC.btn_goto], s.ClickFeedbackButtonHover);
    return u;
  }
  n.__extends(OptionsDialogAccountInfoItemEmail, e);
  OptionsDialogAccountInfoItemEmail.prototype.showExclamation1 = function (e) {
    this._headerMC.mc_ex1.visible = e;
  };
  OptionsDialogAccountInfoItemEmail.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this._headerMC.btn_button2:
          if (this._onButton2) {
            this._onButton2();
          }
          break;
        case this._headerMC.btn_goto:
          if (this._onGoto) {
            this._onGoto();
          }
      }
    }
  };
  OptionsDialogAccountInfoItemEmail.prototype.enableButtons = function (e) {
    r.ButtonHelper.enableButton(this._headerMC.btn_goto, e);
    r.ButtonHelper.enableButton(this._headerMC.btn_button2, e);
    r.ButtonHelper.enableButton(this._headerMC.btn_action, e);
    if (!e) {
      this._headerMC.btn_goto.toolTipText = this._headerMC.btn_button2.toolTipText = this._headerMC.btn_action.toolTipText = "dialog_options_accountDetails_changeEmail_inProgress_tooltip";
    }
  };
  OptionsDialogAccountInfoItemEmail.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._onButton2 = null;
    this._onGoto = null;
  };
  OptionsDialogAccountInfoItemEmail.prototype.showButton2 = function (e, t = 1, i = null) {
    this.showButton(this._headerMC.btn_button2, e, t, i);
  };
  OptionsDialogAccountInfoItemEmail.prototype.showButtonGoto = function (e, t = 1, i = null) {
    this.showButton(this._headerMC.btn_goto, e, t, i);
  };
  return OptionsDialogAccountInfoItemEmail;
}(require("./915.js").OptionsDialogAccountInfoItem);
exports.OptionsDialogAccountInfoItemEmail = l;