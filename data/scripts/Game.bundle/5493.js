Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./8.js");
var u = function (e) {
  function CastleResetLandmarkMessageDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleResetLandmarkMessageDialog.NAME) || this;
  }
  n.__extends(CastleResetLandmarkMessageDialog, e);
  CastleResetLandmarkMessageDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_monument.visible = false;
    this.dialogDisp.mc_laboratory.visible = false;
  };
  CastleResetLandmarkMessageDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_monument.visible = this.dialogProperties.areaType == s.WorldConst.AREA_TYPE_MONUMENT;
    this.dialogDisp.mc_laboratory.visible = this.dialogProperties.areaType == s.WorldConst.AREA_TYPE_LABORATORY;
  };
  CastleResetLandmarkMessageDialog.prototype.setCopyTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO(this.dialogProperties.titleTextID));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO(this.dialogProperties.copyTextID)).verticalAlign = o.GGSVerticalAlign.MIDDLE;
  };
  CastleResetLandmarkMessageDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_help:
          d.CastleDialogHandler.getInstance().showHelper("", r.Localize.text(this.dialogProperties.helpTextID));
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleResetLandmarkMessageDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResetLandmarkMessageDialog.__initialize_static_members = function () {
    CastleResetLandmarkMessageDialog.NAME = "CastleResetLandmarkMessage";
  };
  return CastleResetLandmarkMessageDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleResetLandmarkMessageDialog = u;
var d = require("./9.js");
a.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();