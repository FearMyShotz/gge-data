Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./988.js");
var p = require("./2647.js");
var h = function (e) {
  function DecorationForgeQuickGuideDialog() {
    return e.call(this, DecorationForgeQuickGuideDialog.NAME) || this;
  }
  n.__extends(DecorationForgeQuickGuideDialog, e);
  DecorationForgeQuickGuideDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_ok], _.ClickFeedbackButton);
    this.initBasicButtons([this.dialogDisp.btn_info0, this.dialogDisp.btn_info1, this.dialogDisp.btn_info2, this.dialogDisp.btn_info3, this.dialogDisp.btn_info4, this.dialogDisp.btn_info5, this.dialogDisp.btn_buy_source, this.dialogDisp.btn_buy_dust]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title1, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_intro1_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title2, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_intro2_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy1, new s.LocalizedTextVO("dialog_decoForge_quickGuide_intro1_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy2, new s.LocalizedTextVO("dialog_decoForge_quickGuide_intro2_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new s.LocalizedTextVO("dialog_decoForge_quickGuide_moreInfo_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info0, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_target_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info1, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_source_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info2, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_catalyst_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info3, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_forge_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info4, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_energy_title"))));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info5, new r.TextVO(l.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_decoForge_quickGuide_dust_title"))));
  };
  DecorationForgeQuickGuideDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          u.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("dialog_decoForge_quickGuide_help"));
          break;
        case this.dialogDisp.btn_info0:
          this.openInfoDialog("target", "target", "InfoPicTarget");
          break;
        case this.dialogDisp.btn_info1:
          this.openInfoDialog("source", "source", "InfoPicSource");
          break;
        case this.dialogDisp.btn_info2:
          this.openInfoDialog("catalyst", "catalyst", "InfoPicCatalyst");
          break;
        case this.dialogDisp.btn_info3:
          this.openInfoDialog("forge", "forge", "InfoPicForge");
          break;
        case this.dialogDisp.btn_info4:
          this.openInfoDialog("energy", "energy", "InfoPicEnergy");
          break;
        case this.dialogDisp.btn_info5:
          this.openInfoDialog("dust", "dust", "InfoPicDust");
          break;
        case this.dialogDisp.btn_buy_source:
        case this.dialogDisp.btn_buy_dust:
          this.layoutManager.hideAllDialogsExcept([]);
          u.CastleExternalDialog.dialogHandler.registerDialogs(g.FusionForgeHubDialog, new d.FusionForgeHubDialogProperties(g.FusionForgeHubDialog.TAB_SHOP_HARD));
      }
    }
  };
  DecorationForgeQuickGuideDialog.prototype.openInfoDialog = function (e, t, i) {
    u.CastleExternalDialog.dialogHandler.registerDialogs(C.DecorationForgeQuickGuideInfoDialog, new p.DecorationForgeQuickGuideInfoDialogProperties(e, t, i));
  };
  DecorationForgeQuickGuideDialog.NAME = "DecorationForgeQuickGuide";
  return DecorationForgeQuickGuideDialog;
}(u.CastleExternalDialog);
exports.DecorationForgeQuickGuideDialog = h;
var g = require("./989.js");
var C = require("./2648.js");
var _ = require("./36.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");