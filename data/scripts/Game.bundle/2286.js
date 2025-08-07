Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./11.js");
var r = require("./8.js");
var l = require("./13.js");
var c = require("./49.js");
var u = function (e) {
  function CastleDeleteAccountConfirmationDialog() {
    return e.call(this, CastleDeleteAccountConfirmationDialog.NAME) || this;
  }
  n.__extends(CastleDeleteAccountConfirmationDialog, e);
  CastleDeleteAccountConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], c.ClickFeedbackButtonHover);
    this.itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO(""));
    this.itxt_title.autoFitToBounds = true;
    this.itxt_copy = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO(""));
    this.itxt_copy.autoFitToBounds = true;
    this.itxt_title.textContentVO.textId = l.TextHelper.toUpperCaseLocaSafeTextId(this.standardDialogProperties.title);
    this.itxt_copy.textContentVO.textId = this.standardDialogProperties.copy;
    if (this.standardDialogProperties.copyTextReplacements) {
      this.itxt_copy.textContentVO.textReplacements = this.standardDialogProperties.copyTextReplacements;
    }
  };
  CastleDeleteAccountConfirmationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleDeleteAccountConfirmationDialog.prototype, "standardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDeleteAccountConfirmationDialog.NAME = "DarkOk_ABG2";
  return CastleDeleteAccountConfirmationDialog;
}(s.CastleExternalDialog);
exports.CastleDeleteAccountConfirmationDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");