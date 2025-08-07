Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./8.js");
var l = function (e) {
  function CastleLargeYesNoDialog(t = null) {
    CONSTRUCTOR_HACK;
    return e.call(this, t || CastleLargeYesNoDialog.NAME) || this;
  }
  n.__extends(CastleLargeYesNoDialog, e);
  CastleLargeYesNoDialog.prototype.initLoaded = function (t = null) {
    this.titleField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(""));
    this.titleField.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.copyField ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.TextVO(""));
    this.initBasicButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_close, this.dialogDisp.btn_no]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleLargeYesNoDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.dialogDisp.btn_yes.label = this.standardDialogProperties.buttonLabel_yes;
    this.dialogDisp.btn_no.label = this.standardDialogProperties.buttonLabel_no;
    if (this.standardDialogProperties.hasNoButton) {
      this.dialogDisp.btn_no.visible = true;
      this.dialogDisp.btn_no_shadow.visible = true;
    } else {
      this.dialogDisp.btn_no.visible = false;
      this.dialogDisp.btn_no_shadow.visible = false;
    }
    this.titleField.textContentVO.stringValue = this.standardDialogProperties.title;
    this.copyField.textContentVO.stringValue = this.standardDialogProperties.copy;
  };
  CastleLargeYesNoDialog.prototype.onClick = function (e) {
    if (r.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_yes:
          this.hide();
          if (this.standardDialogProperties.functionYes != null) {
            this.standardDialogProperties.functionYes(null);
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
    }
  };
  Object.defineProperty(CastleLargeYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLargeYesNoDialog.__initialize_static_members = function () {
    CastleLargeYesNoDialog.NAME = "CastleLargeYesNoEx";
  };
  return CastleLargeYesNoDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleLargeYesNoDialog = l;
a.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();