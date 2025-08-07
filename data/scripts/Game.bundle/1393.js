Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./5.js");
var d = require("./36.js");
var p = function (e) {
  function CastleTempServerConfirmationDialog(t = null) {
    return e.call(this, t || CastleTempServerConfirmationDialog.NAME) || this;
  }
  n.__extends(CastleTempServerConfirmationDialog, e);
  CastleTempServerConfirmationDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel], d.ClickFeedbackButton);
  };
  CastleTempServerConfirmationDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("attention")));
    if (this.dialogProps.globalServerID == u.GlobalServerConst.TEMP_SERVER) {
      if (this.dialogProps.preBuildCastle) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_tempServer_preBuiltCastle_buyConfirmationFree_desc"));
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_tempServer_preBuiltCastle_returnConfirmation_desc"));
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_chooseCastleConfirm_desc"));
    }
  };
  CastleTempServerConfirmationDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancel:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleTempServerConfirmationDialog.prototype.onOK = function () {
    if (this.dialogProps.onComplete) {
      this.dialogProps.onComplete();
    }
    this.hide();
  };
  Object.defineProperty(CastleTempServerConfirmationDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleTempServerConfirmationDialog.NAME = "CastleTempServerConfirmation";
  return CastleTempServerConfirmationDialog;
}(c.CastleExternalDialog);
exports.CastleTempServerConfirmationDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");