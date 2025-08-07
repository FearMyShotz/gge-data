Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = function (e) {
  function CastleStandardYesNoDialog(t = null) {
    var i = e.call(this, t ?? new Library.CastleInterfaceElements.CastleStandardYesNo()) || this;
    i.itxt_title = i.textFieldManager.registerTextField(i.standardDialog.txt_title, new l.TextVO(""));
    i.itxt_title.autoFitToBounds = true;
    i.itxt_copy = i.textFieldManager.registerTextField(i.standardDialog.txt_copy, new l.TextVO(""));
    i.itxt_copy.autoFitToBounds = true;
    return i;
  }
  n.__extends(CastleStandardYesNoDialog, e);
  CastleStandardYesNoDialog.prototype.applyProperties = function () {
    this.standardDialog.btn_yes.label = this.standardDialogProperties.buttonLabel_yes;
    this.standardDialog.btn_no.label = this.standardDialogProperties.buttonLabel_no;
    this.itxt_title.textContentVO.stringValue = this.standardDialogProperties.title;
    this.itxt_copy.textContentVO.stringValue = this.standardDialogProperties.copy;
    this.itxt_title.verticalAlign = a.GGSVerticalAlign.MIDDLE;
  };
  CastleStandardYesNoDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.standardDialog.btn_yes:
        this.hide();
        if (this.standardDialogProperties.functionYes != null) {
          this.standardDialogProperties.functionYes(this.getCallbackParams());
        }
        break;
      case this.standardDialog.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionClose != null) {
          this.standardDialogProperties.functionClose(null);
        }
        break;
      case this.standardDialog.btn_no:
        this.hide();
        if (this.standardDialogProperties.functionNo != null) {
          this.standardDialogProperties.functionNo(null);
        }
    }
  };
  CastleStandardYesNoDialog.prototype.getCallbackParams = function () {
    if (r.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(CastleStandardYesNoDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardYesNoDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardYesNoDialog.__initialize_static_members = function () {
    CastleStandardYesNoDialog.NAME = o.CommonDialogNames.StandardYesNoDialog_NAME;
  };
  return CastleStandardYesNoDialog;
}(require("./229.js").CastleDialog);
exports.CastleStandardYesNoDialog = c;
s.classImplementsInterfaces(c, "ICollectableRendererList");
c.__initialize_static_members();