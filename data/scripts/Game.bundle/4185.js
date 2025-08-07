Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./36.js");
var p = function (e) {
  function CastleRerollAlienWarningDialog() {
    return e.call(this, CastleRerollAlienWarningDialog.NAME) || this;
  }
  n.__extends(CastleRerollAlienWarningDialog, e);
  CastleRerollAlienWarningDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_yes], d.ClickFeedbackButton, 1);
    c.ButtonHelper.initCheckBox(this.dialogDisp.btn_cbx);
    this.checkbox = c.ButtonHelper.getBasicButton(this.dialogDisp.btn_cbx);
  };
  CastleRerollAlienWarningDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_yes:
          this.onOk();
          break;
        case this.dialogDisp.btn_cbx:
          this.checkbox.toggleSelected();
      }
    }
  };
  CastleRerollAlienWarningDialog.prototype.onOk = function () {
    this.dialogProperties.functionYes(true);
    this.hide();
    if (this.checkbox.isSelected) {
      l.CastleModel.alienRerollData.showWarningPopup = false;
    }
  };
  CastleRerollAlienWarningDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_supportReplacementWarning_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cbx, new a.LocalizedTextVO("dialog_supportReplacementWarning_notShow"));
    this.checkbox.deselected();
  };
  Object.defineProperty(CastleRerollAlienWarningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienWarningDialog.NAME = "CastleRerollAlienWarning";
  return CastleRerollAlienWarningDialog;
}(u.CastleExternalDialog);
exports.CastleRerollAlienWarningDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");