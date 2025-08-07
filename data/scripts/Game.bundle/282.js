Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./13.js");
var r = require("./8.js");
var l = function (e) {
  function ModernYesNoDialog(t = null) {
    return e.call(this, t || ModernYesNoDialog.NAME) || this;
  }
  n.__extends(ModernYesNoDialog, e);
  ModernYesNoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_no, this.dialogDisp.btn_yes], u.ClickFeedbackButton);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    var i = new a.HTMLTextCustomVO();
    i.addLocalizedTextVO(new a.LocalizedTextVO(this.standardDialogProperties.copy));
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, i);
    this.itxt_copy.autoFitToBounds = true;
    this.dialogDisp.btn_yes.label = this.standardDialogProperties.buttonLabel_yes;
    this.dialogDisp.btn_no.label = this.standardDialogProperties.buttonLabel_no;
    this.itxt_title.textContentVO.textId = s.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
  };
  ModernYesNoDialog.prototype.onClick = function (t) {
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
  ModernYesNoDialog.prototype.getCallbackParams = function () {
    if (c.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(ModernYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  ModernYesNoDialog.NAME = "ModernYesNo";
  return ModernYesNoDialog;
}(require("./11.js").CastleExternalDialog);
exports.ModernYesNoDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
var c = require("./1.js");
var u = require("./36.js");