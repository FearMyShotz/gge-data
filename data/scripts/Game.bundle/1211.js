Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = require("./574.js");
var l = require("./20.js");
var c = function (e) {
  function CastleDarkOkLabeledDialog() {
    return e.call(this, CastleDarkOkLabeledDialog.NAME) || this;
  }
  n.__extends(CastleDarkOkLabeledDialog, e);
  CastleDarkOkLabeledDialog.prototype.showLoaded = function (t = null) {
    s.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], l.ClickFeedbackButtonHover);
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_label, new a.LocalizedTextVO(this.standardDialogProperties.buttonLabel_ok));
  };
  CastleDarkOkLabeledDialog.NAME = "CastleDarkOkLabled";
  return CastleDarkOkLabeledDialog;
}(r.CastleDarkOkDialog);
exports.CastleDarkOkLabeledDialog = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");