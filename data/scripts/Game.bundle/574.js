Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./8.js");
var l = require("./11.js");
var c = require("./36.js");
var u = function (e) {
  function CastleDarkOkDialog(t = null) {
    return e.call(this, t || CastleDarkOkDialog.NAME) || this;
  }
  n.__extends(CastleDarkOkDialog, e);
  CastleDarkOkDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], c.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(this.standardDialogProperties.title));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(this.standardDialogProperties.copy)).autoFitToBounds = true;
  };
  CastleDarkOkDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        if (this.standardDialogProperties.functionCancel != null) {
          this.standardDialogProperties.functionCancel(null);
        }
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.hide();
        if (this.standardDialogProperties.functionOk != null) {
          this.standardDialogProperties.functionOk(null);
        }
    }
  };
  CastleDarkOkDialog.prototype.hide = function () {
    s.CastleModel.userData.blockDialogs = false;
    e.prototype.hide.call(this);
  };
  Object.defineProperty(CastleDarkOkDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDarkOkDialog.NAME = "CastleDarkOk";
  return CastleDarkOkDialog;
}(l.CastleExternalDialog);
exports.CastleDarkOkDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");