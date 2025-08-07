Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./13.js");
var r = require("./8.js");
var l = function (e) {
  function DarkOkDialog() {
    return e.call(this, DarkOkDialog.NAME) || this;
  }
  n.__extends(DarkOkDialog, e);
  DarkOkDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], u.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(""));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_title.textContentVO.textId = s.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
  };
  DarkOkDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk(this.getCallbackParams());
        }
        break;
      case this.dialogDisp.btn_close:
        this.hide();
        if (this.standardDialogProperties.functionCancel != null) {
          this.standardDialogProperties.functionCancel(null);
        }
    }
  };
  DarkOkDialog.prototype.getCallbackParams = function () {
    if (c.instanceOfClass(this.properties, "CastleStandardYesNoDialogProperties")) {
      return this.properties.params;
    } else {
      return null;
    }
  };
  Object.defineProperty(DarkOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  DarkOkDialog.NAME = "DarkOk_ABG2";
  return DarkOkDialog;
}(require("./11.js").CastleExternalDialog);
exports.DarkOkDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");
var c = require("./1.js");
var u = require("./20.js");