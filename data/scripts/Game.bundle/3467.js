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
  function CastleMailSendWithNewsletterDialog() {
    return e.call(this, CastleMailSendWithNewsletterDialog.NAME) || this;
  }
  n.__extends(CastleMailSendWithNewsletterDialog, e);
  CastleMailSendWithNewsletterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, d.ClickFeedbackButton);
    c.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, d.ClickFeedbackButton);
  };
  CastleMailSendWithNewsletterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_referFriend_successful_header"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO("dialog_mailVerticationSend_verification_copy1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy3, new s.LocalizedTextVO("dialog_mailVerticationSend_copy2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy4, new s.LocalizedTextVO("dialog_mailVerticationSend_newsletterSubscribed_copy1"));
  };
  CastleMailSendWithNewsletterDialog.prototype.onClick = function (e) {
    switch (e.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleMailSendWithNewsletterDialog.NAME = "CastleMailSendWithNewsletter";
  return CastleMailSendWithNewsletterDialog;
}(u.CastleExternalDialog);
exports.CastleMailSendWithNewsletterDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");