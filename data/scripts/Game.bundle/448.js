Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./11.js");
var s = require("./278.js");
var r = require("./8.js");
var l = require("./20.js");
var c = require("./2665.js");
var u = require("./2677.js");
var d = require("./2681.js");
var p = function (e) {
  function CastleLegendSkillDialog() {
    return e.call(this, CastleLegendSkillDialog.NAME) || this;
  }
  n.__extends(CastleLegendSkillDialog, e);
  CastleLegendSkillDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = new c.CastleLegendSkillClassicSublayer(this.dialogDisp.sublayer_classic);
    var n = new u.CastleLegendSkillSceatSublayer(this.dialogDisp.sublayer_champion);
    this.sublayerSwitcher = new s.SublayerSwitcher(this.bindFunction(this.getSublayerProperties));
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_ATTACK, this.dialogDisp.tab_attack, i);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_DEFENSE, this.dialogDisp.tab_defense, i);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_BUILDINGS, this.dialogDisp.tab_buildings, n);
    this.sublayerSwitcher.add(CastleLegendSkillDialog.SUBLAYER_UNITS, this.dialogDisp.tab_units, n);
    this.dialogDisp.tab_attack.toolTipText = "dialog_legendTemple_tooltipAttack";
    this.dialogDisp.tab_defense.toolTipText = "dialog_legendTemple_tooltipDefence";
    this.dialogDisp.tab_buildings.toolTipText = "dialog_legendTemple_tooltipBuildings";
    this.dialogDisp.tab_units.toolTipText = "dialog_legendTemple_tooltipUnits";
    r.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], l.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  CastleLegendSkillDialog.prototype.getSublayerProperties = function (e) {
    return new d.CastleLegendSkillSublayerProperties(e);
  };
  CastleLegendSkillDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.tab_buildings.visible = !this.castleEnv.isCrossplay;
    this.dialogDisp.tab_units.visible = !this.castleEnv.isCrossplay;
    if (this.dialogProperties) {
      this.onJumpToSkill();
    } else {
      this.sublayerSwitcher.switchTo(CastleLegendSkillDialog.SUBLAYER_ATTACK);
      this.sublayerSwitcher.show();
    }
  };
  CastleLegendSkillDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
  };
  CastleLegendSkillDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.sublayerSwitcher.showHelp();
      }
    }
  };
  CastleLegendSkillDialog.prototype.onJumpToSkill = function () {
    var e = this.dialogProperties.jumpToTabId;
    var t = this.dialogProperties.jumpToSkillId;
    this.sublayerSwitcher.switchTo(e);
    this.sublayerSwitcher.show();
    var i = this.sublayerSwitcher.getSublayerByID(e);
    if (o.instanceOfClass(i, "CastleLegendSkillSceatSublayer")) {
      i.jumpToSkillTier(t);
    }
  };
  Object.defineProperty(CastleLegendSkillDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillDialog.NAME = "CastleLegendSkill4";
  CastleLegendSkillDialog.SUBLAYER_ATTACK = 0;
  CastleLegendSkillDialog.SUBLAYER_DEFENSE = 1;
  CastleLegendSkillDialog.SUBLAYER_BUILDINGS = 2;
  CastleLegendSkillDialog.SUBLAYER_UNITS = 3;
  return CastleLegendSkillDialog;
}(a.CastleExternalDialog);
exports.CastleLegendSkillDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");