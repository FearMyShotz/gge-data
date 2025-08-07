Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./37.js");
var u = require("./80.js");
var d = require("./33.js");
var p = require("./29.js");
var h = require("./260.js");
var g = require("./11.js");
var C = require("./8.js");
var _ = require("./20.js");
var m = require("./4.js");
var f = require("./13.js");
var O = require("./38.js");
var E = require("./1458.js");
var y = require("./9.js");
var b = require("./448.js");
var D = function (e) {
  function CastleMissingSceatSkillExpansionDialog() {
    return e.call(this, CastleMissingSceatSkillExpansionDialog.NAME) || this;
  }
  n.__extends(CastleMissingSceatSkillExpansionDialog, e);
  CastleMissingSceatSkillExpansionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], _.ClickFeedbackButtonHover);
  };
  CastleMissingSceatSkillExpansionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = m.CastleModel.legendSkillData.getSceatSkillByID(m.CastleModel.expansionCostsData.getSceatSkillLocked()).nameTextID;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("dialog_needLegendTemple_skill_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_needLegendTemple_skill_desc", [i])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_copy, new r.TextVO(f.TextHelper.toUpperCaseLocaSafeTextId("button_getSkill")));
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onClickOk();
          this.hide();
      }
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onClickOk = function () {
    if (this.layoutManager.isInMyCastle && m.CastleModel.areaData.activeArea && m.CastleModel.areaData.activeArea.isMyHomeCastle) {
      this.gotoSkill();
    } else {
      this.controller.addEventListener(c.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
      o.CommandController.instance.executeCommand(p.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.onJAAArrived = function (e) {
    this.controller.removeEventListener(c.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
    this.gotoSkill();
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoSkill = function () {
    if (d.Iso.data.objects.provider.hasFunctionalBuildingByType(u.IsoObjectEnum.LEGEND_TEMPLE)) {
      this.gotoSceatTree();
    } else {
      this.gotoBuildMenu();
    }
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoSceatTree = function () {
    var e = m.CastleModel.expansionCostsData.getSceatSkillLocked();
    var t = m.CastleModel.legendSkillData.getTabBySkillId(e);
    var i = new E.CastleLegendSkillDialogProperties(t, e);
    y.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleLegendSkillDialog, i);
  };
  CastleMissingSceatSkillExpansionDialog.prototype.gotoBuildMenu = function () {
    var e = a.castAs(d.Iso.renderer.objects.provider.getObjectByType(u.IsoObjectEnum.LEGEND_TEMPLE), "ABasicBuildingVE");
    if (e) {
      d.Iso.renderer.camera.scrollToGridPos(e.vo.pos);
      d.Iso.renderer.mouse.changeSelectedTarget(e);
    } else {
      d.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var t = this.layoutManager.getPanel(h.CastleDecoShopPanel);
      var i = m.CastleModel.wodData.getBuildingVOById(l.ClientConstCastle.LEGEND_TEMPLE_WOD_LEVEL1);
      if (!t.centerAndHighlightBuildingInShop(i)) {
        y.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("dialog_primeday_primesale_warningTitle"), s.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  CastleMissingSceatSkillExpansionDialog.NAME = "CastleMissingSceatSkillExpansion";
  return CastleMissingSceatSkillExpansionDialog;
}(g.CastleExternalDialog);
exports.CastleMissingSceatSkillExpansionDialog = D;