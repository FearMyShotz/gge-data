Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./20.js");
var _ = require("./285.js");
var m = require("./8.js");
var f = function (e) {
  function CastleLostPasswordDialog() {
    var t = this;
    t._inputBehaviours = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this, new (c.getDefinitionByName("CastleLostPassword_M"))()) || this;
  }
  n.__extends(CastleLostPasswordDialog, e);
  CastleLostPasswordDialog.prototype.onKeyUp = function (t) {
    e.prototype.onKeyUp.call(this, t);
    if (t.key == u.Keyboard.ENTER) {
      this.onButtonOK();
    }
  };
  CastleLostPasswordDialog.prototype.applyProperties = function () {
    m.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle, this.dialogDisp.btn_close], C.ClickFeedbackButtonHover);
    this.dialogDisp.btn_ok.label = this.dialogProperties.buttonLabel_yes;
    this.dialogDisp.btn_cancle.label = this.dialogProperties.buttonLabel_no;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.TextVO(this.dialogProperties.title));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new g.TextVO(this.dialogProperties.copy));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_mail, new p.LocalizedTextVO("dialog_options_forgotPassword_desc")).verticalAlign = o.GGSVerticalAlign.BOTTOM;
    this.i_input = this.textFieldManager.registerTextField(this.dialogDisp.input_email.inputField, new g.TextVO(""));
    this._inputBehaviours = [];
    this._inputBehaviours.push(new _.HighlightAndClearInputTextBehaviour(this.dialogDisp.input_email, this.i_input, false));
    this._inputBehaviours.forEach(function (e) {
      return e.onShow();
    });
    this.i_input.textContentVO.stringValue = this.dialogProperties.email;
  };
  CastleLostPasswordDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this._inputBehaviours.forEach(function (e) {
      return e.onHide();
    });
  };
  CastleLostPasswordDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.onButtonOK();
        break;
      case this.dialogDisp.btn_cancle:
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.dialogProperties.functionNo != null) {
          this.dialogProperties.functionNo(null);
        }
    }
  };
  CastleLostPasswordDialog.prototype.onButtonOK = function () {
    if (r.TextValide.isEmailString(this.i_input.text)) {
      if (this.i_input.text.length > 0 && r.TextValide.isSmartFoxValide(this.i_input.text)) {
        this.sendLostPassword();
        this.hide();
      } else {
        O.CastleDialogHandler.getInstance().registerDialogs(E.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(h.Localize.text("generic_alert_warning"), h.Localize.text("generic_register_email_copy")));
      }
    } else {
      l.info(this.i_input.text);
      O.CastleDialogHandler.getInstance().registerDialogs(E.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(h.Localize.text("generic_alert_warning"), h.Localize.text("generic_register_error_invalidemail")));
    }
  };
  CastleLostPasswordDialog.prototype.sendLostPassword = function () {
    a.BasicLostPasswordCommand.sendMessage(this.i_input.text);
  };
  Object.defineProperty(CastleLostPasswordDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLostPasswordDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLostPasswordDialog.__initialize_static_members = function () {
    CastleLostPasswordDialog.NAME = "CastleLostPasswordDialog";
  };
  return CastleLostPasswordDialog;
}(require("./229.js").CastleDialog);
exports.CastleLostPasswordDialog = f;
var O = require("./9.js");
var E = require("./38.js");
d.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();