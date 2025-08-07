Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./4.js");
var p = function (e) {
  function CastleStandardOkDialog(t = null) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t ?? new (a.getDefinitionByName("CastleStandardOk"))()) || this).itxt_title = i.textFieldManager.registerTextField(i.standardDialog.txt_title, new u.TextVO(""));
    i.itxt_copy = i.textFieldManager.registerTextField(i.standardDialog.txt_copy, new u.TextVO(""));
    i.itxt_copy.autoFitToBounds = true;
    i.standardDialog.btn_label.visible = false;
    return i;
  }
  n.__extends(CastleStandardOkDialog, e);
  CastleStandardOkDialog.prototype.applyProperties = function () {
    if (this.standardDialog && this.standardDialog.btn_ok && this.standardDialogProperties) {
      this.standardDialog.btn_ok.label = this.standardDialogProperties.buttonLabel_ok;
    }
    if (this.itxt_title && l.instanceOfClass(this.itxt_title.textContentVO, "TextVO") && this.standardDialogProperties) {
      this.itxt_title.textContentVO.stringValue = c.Localize.text(this.standardDialogProperties.title);
    }
    if (this.itxt_copy && l.instanceOfClass(this.itxt_copy.textContentVO, "TextVO")) {
      this.itxt_copy.textContentVO.stringValue = c.Localize.text(this.getDialogMessage());
    }
  };
  CastleStandardOkDialog.prototype.getDialogMessage = function () {
    if (this.standardDialogProperties) {
      return this.standardDialogProperties.copy;
    } else {
      return " ";
    }
  };
  CastleStandardOkDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.standardDialog.btn_close:
        if (this.standardDialogProperties && this.standardDialogProperties.functionCancel != null) {
          this.standardDialogProperties.functionCancel(null);
        }
        this.hide();
        break;
      case this.standardDialog.btn_ok:
        this.hide();
        if (this.standardDialogProperties && this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk(null);
        }
    }
  };
  CastleStandardOkDialog.prototype.onKeyUp = function (e) {
    if ((e.key == s.Keyboard.ENTER || e.key == s.Keyboard.ESCAPE) && !!this.standardDialogProperties && this.standardDialogProperties.title == "SERVER MESSAGE") {
      this.hide();
    }
  };
  CastleStandardOkDialog.prototype.hide = function () {
    d.CastleModel.userData.blockDialogs = false;
    e.prototype.hide.call(this);
  };
  Object.defineProperty(CastleStandardOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStandardOkDialog.prototype, "standardDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStandardOkDialog.__initialize_static_members = function () {
    CastleStandardOkDialog.NAME = o.CommonDialogNames.StandardOkDialog_NAME;
  };
  return CastleStandardOkDialog;
}(require("./229.js").CastleDialog);
exports.CastleStandardOkDialog = p;
r.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();