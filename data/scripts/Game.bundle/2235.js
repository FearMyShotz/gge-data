Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./20.js");
var c = require("./8.js");
var u = function (e) {
  function ModernYesNoLabeledDialog(t = null) {
    return e.call(this, t || ModernYesNoLabeledDialog.NAME) || this;
  }
  n.__extends(ModernYesNoLabeledDialog, e);
  ModernYesNoLabeledDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_no, this.dialogDisp.btn_yes], l.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO(""));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_title.textContentVO.textId = r.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_yes.txt_label, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.buttonLabel_yes)));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_no.txt_label, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.buttonLabel_no)));
  };
  ModernYesNoLabeledDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.hide();
        if (this.standardDialogProperties.functionYes != null) {
          this.standardDialogProperties.functionYes(this.getCallbackParams());
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionClose != null) {
          this.standardDialogProperties.functionClose(null);
        }
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        if (this.standardDialogProperties.functionNo != null) {
          this.standardDialogProperties.functionNo(null);
        }
    }
  };
  ModernYesNoLabeledDialog.prototype.getCallbackParams = function () {
    if (d.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(ModernYesNoLabeledDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernYesNoLabeledDialog.NAME = "ModernYesNoLabeled";
  return ModernYesNoLabeledDialog;
}(require("./11.js").CastleExternalDialog);
exports.ModernYesNoLabeledDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
var d = require("./1.js");