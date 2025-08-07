Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./2279.js");
var c = require("./598.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./8.js");
var h = function (e) {
  function CastleChangePlayerEmailCancelDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangePlayerEmailCancelDialog.NAME) || this;
  }
  n.__extends(CastleChangePlayerEmailCancelDialog, e);
  CastleChangePlayerEmailCancelDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_support]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafe(s.Localize.text("dialog_options_newEmail_changeInProgress_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_copy, new s.LocalizedTextVO("dialog_options_newEmail_changeInProgress_previousEmail_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_cancel.txt_copy, new r.TextVO(u.TextHelper.toUpperCaseLocaSafe(s.Localize.text("cancelChange"))));
    this.dialogDisp.btn_support.toolTipText = "contactGoodGameSupport_tooltip";
  };
  CastleChangePlayerEmailCancelDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_current_mail, new r.TextVO(d.CastleModel.userData.email));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_new_mail, new r.TextVO(d.CastleModel.playerEmailData.newEmail));
    if (d.CastleModel.playerEmailData.isMailState_MailChangePending_ToOldMail) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_options_newEmail_changeInProgress_oldMailStep_desc", [d.CastleModel.playerEmailData.getDateForAutoEmailChange()]));
    }
    if (d.CastleModel.playerEmailData.isMailState_MailChangePending_ToNewMail) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_options_newEmail_changeInProgress_newMailStep_desc", [d.CastleModel.playerEmailData.getDateForAutoEmailChange()]));
    }
  };
  CastleChangePlayerEmailCancelDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_cancel:
          o.BasicModel.smartfoxClient.sendCommandVO(new l.C2SCancelEmailChangeProgress());
          this.hide();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_support:
          c.HelpshiftHelper.getInstance().showChatWidget();
      }
    }
  };
  CastleChangePlayerEmailCancelDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailCancelDialog.NAME = "CastleChangePlayerEmailCancel";
  };
  return CastleChangePlayerEmailCancelDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChangePlayerEmailCancelDialog = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();