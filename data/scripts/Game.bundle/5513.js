Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./137.js");
var c = require("./13.js");
var u = require("./8.js");
var d = function (e) {
  function CastleTempServerStartDialog() {
    return e.call(this, CastleTempServerStartDialog.NAME) || this;
  }
  n.__extends(CastleTempServerStartDialog, e);
  CastleTempServerStartDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    u.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], h.ClickFeedbackButton);
  };
  CastleTempServerStartDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_start_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new s.LocalizedTextVO("dialog_tempServer_start_openHelpInfo"));
    var i = this.getTextIds();
    for (var n = 0; n < 3; n++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + n], new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(i[n][0])));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + n], new s.LocalizedTextVO(i[n][1]));
      this.dialogDisp["mc_teaser" + n].gotoAndStop(l.TempServerHelper.getAssetFrame());
    }
  };
  CastleTempServerStartDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        p.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_tempServer_start"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  CastleTempServerStartDialog.prototype.onOK = function () {
    if (l.TempServerHelper.tmpServerEvent) {
      l.TempServerHelper.tmpServerEvent.openDialog();
    }
    this.hide();
  };
  CastleTempServerStartDialog.prototype.getTextIds = function () {
    if (l.TempServerHelper.tmpServerEvent.isCrossPlay) {
      return CastleTempServerStartDialog.TEXT_CROSSPLAY;
    } else {
      return CastleTempServerStartDialog.TEXT_DEFAULT;
    }
  };
  CastleTempServerStartDialog.TEXT_DEFAULT = [["dialog_tempServer_start_desc1_title", "dialog_tempServer_start_desc1_desc"], ["dialog_tempServer_start_desc2_title", "dialog_tempServer_start_desc2_desc"], ["dialog_tempServer_start_desc3_title", "dialog_tempServer_start_desc3_desc"]];
  CastleTempServerStartDialog.TEXT_CROSSPLAY = [["dialog_tempServer_start_desc1_title", "dialog_tempServer_start_desc1_desc_crossplay"], ["dialog_tempServer_start_desc2_title", "dialog_tempServer_start_desc2_desc_crossplay"], ["dialog_tempServer_start_desc3_title", "dialog_tempServer_start_desc3_desc"]];
  CastleTempServerStartDialog.NAME = "CastleTempServerStarter";
  return CastleTempServerStartDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleTempServerStartDialog = d;
var p = require("./9.js");
var h = require("./36.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");