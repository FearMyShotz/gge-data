Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./8.js");
var c = function (e) {
  function CastleChangePlayerEmailCancelDoneDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleChangePlayerEmailCancelDoneDialog.NAME) || this;
  }
  n.__extends(CastleChangePlayerEmailCancelDoneDialog, e);
  CastleChangePlayerEmailCancelDoneDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_options_newEmail_changeCancelConfirmed_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_options_newEmail_changeCancelConfirmed_desc"));
  };
  CastleChangePlayerEmailCancelDoneDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  CastleChangePlayerEmailCancelDoneDialog.__initialize_static_members = function () {
    CastleChangePlayerEmailCancelDoneDialog.NAME = "CastleChangePlayerEmailCancelConfirmDone";
  };
  return CastleChangePlayerEmailCancelDoneDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleChangePlayerEmailCancelDoneDialog = c;
o.classImplementsInterfaces(c, "CastleChangePlayerEmailCancelConfirmDone");
c.__initialize_static_members();