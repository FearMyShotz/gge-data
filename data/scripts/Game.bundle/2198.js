Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./169.js");
var c = require("./179.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./9.js");
var h = require("./20.js");
var g = require("./718.js");
var C = require("./133.js");
var _ = require("./2199.js");
var m = require("./8.js");
var f = require("./34.js");
var O = require("./719.js");
var E = require("./720.js");
var y = require("./164.js");
var b = require("./1257.js");
var D = require("./1259.js");
var I = require("./2210.js");
var T = require("./2229.js");
var v = createjs.Point;
var S = function (e) {
  function GeneralsOverviewDialogInfo(t, i) {
    var n = e.call(this, t) || this;
    n.parent = i;
    m.ButtonHelper.initButtons([n.subLayerDisp.btn_starLevel, n.subLayerDisp.btn_level, n.subLayerDisp.btn_skills, n.subLayerDisp.btn_abilities, n.subLayerDisp.btn_info, n.subLayerDisp.btn_info_selected], h.ClickFeedbackButtonHover);
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_skills.txt_label, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_skills_button"))).autoFitToBounds = true;
    n.textFieldManager.registerTextField(n.subLayerDisp.btn_abilities.txt_label, new s.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_overview_abilities_button"))).autoFitToBounds = true;
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_abilitiesTitle, new r.LocalizedTextVO("dialog_generals_overview_generalAbilities_header"));
    n.textFieldManager.registerTextField(n.subLayerDisp.mc_tooltip.txt_desc, new r.LocalizedTextVO("TODO: Capacity tooltip"));
    n.textFieldManager.registerTextField(n.subLayerDisp.mc_generalInfoTooltip.txt_header, new r.LocalizedTextVO("dialog_attack_rework2022_generals_passiveEffectsList_header"));
    n.textFieldManager.registerTextField(n.subLayerDisp.txt_effectsTitle, new r.LocalizedTextVO("dialog_generals_overview_strongestEffects"));
    n._itxt_name = n.textFieldManager.registerTextField(n.subLayerDisp.txt_name, new s.TextVO(""));
    n._itxt_name.autoFitToBounds = true;
    n._itxt_level = n.textFieldManager.registerTextField(n.subLayerDisp.txt_level, new r.LocalizedTextVO("dialog_generals_level_current_max"));
    n._itxt_lord = n.textFieldManager.registerTextField(n.subLayerDisp.txt_lord, new r.LocalizedTextVO(""));
    n._itxt_xp = n.textFieldManager.registerTextField(n.subLayerDisp.mc_xp.txt_xp, new s.TextVO(""));
    n._xpProgressWidth = n.subLayerDisp.mc_xp.mc_progressbar.width;
    n.subLayerDisp.btn_starLevel.toolTipText = "dialog_generals_overview_ratingUp_button_tooltip";
    n.subLayerDisp.btn_level.toolTipText = "dialog_generals_overview_levelUp_button_tooltip";
    n.subLayerDisp.btn_info.toolTipText = "dialog_attack_rework2022_generals_passiveEffectsList_tooltip";
    n.subLayerDisp.btn_info_selected.toolTipText = "dialog_attack_rework2022_generals_passiveEffectsList_tooltip";
    n.subLayerDisp.mc_generalInfoTooltip.visible = false;
    n._lordToggleButton = new g.ToggleSwitchButton(n.subLayerDisp.btn_toggleLord);
    n._lordPicker = new _.GeneralOverviewLordPicker(n.subLayerDisp.mc_lordPicker);
    return n;
  }
  n.__extends(GeneralsOverviewDialogInfo, e);
  GeneralsOverviewDialogInfo.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.mc_tooltip.visible = false;
    this.subLayerDisp.btn_info_selected.visible = false;
    this.subLayerDisp.mc_generalInfoTooltip.visible = false;
    this.updateElements();
    this.updateLordToggleButton();
    this.updateLordPicker();
    this.updateLordEffects();
    this.updateAbilities();
    d.CastleModel.generalsData.addEventListener(c.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this._lordToggleButton.changeSignal.add(this.bindFunction(this.onToggleLord));
  };
  GeneralsOverviewDialogInfo.prototype.hide = function () {
    e.prototype.hide.call(this);
    d.CastleModel.generalsData.removeEventListener(c.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
    this._lordToggleButton.changeSignal.remove(this.bindFunction(this.onToggleLord));
    if (this._lordPicker) {
      this._lordPicker.removeEventListener(l.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
      this._lordPicker.hide();
    }
    this.subLayerDisp.btn_info_selected.visible = false;
    this.subLayerDisp.mc_generalInfoTooltip.visible = false;
  };
  GeneralsOverviewDialogInfo.prototype.updateElements = function () {
    this._itxt_name.textContentVO.stringValue = this.sublayerProperties.generalVO.nameText;
    y.GeneralsHelper.updateStarLevel(this.subLayerDisp, this.sublayerProperties.generalVO);
    this._itxt_level.textContentVO.textReplacements = [this.sublayerProperties.generalVO.currentLevel, this.sublayerProperties.generalVO.maxLevel];
    if (this.sublayerProperties.generalVO.nextLevelXP < 0) {
      this._itxt_xp.textContentVO.stringValue = s.Localize.text("maximumabbrevation");
    } else {
      this._itxt_xp.textContentVO.stringValue = s.Localize.text(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.sublayerProperties.generalVO.currentLevelXP, this.sublayerProperties.generalVO.nextLevelXP]);
    }
    this.subLayerDisp.mc_xp.mc_progressbar_full.visible = this.sublayerProperties.generalVO.currentLevel >= this.sublayerProperties.generalVO.maxLevel;
    this.subLayerDisp.mc_xp.mc_progressbar.scaleX = this.sublayerProperties.generalVO.getXPProgressFactor();
    this._itxt_lord.textContentVO.textId = this.isBaron ? "equipment_itemType_baron" : "equipment_itemType_general";
    this.subLayerDisp.btn_starLevel.visible = this.sublayerProperties.generalVO.isStarLevelUpgradeable;
    this.subLayerDisp.btn_level.visible = this.sublayerProperties.generalVO.isXpUpgradeable;
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.subLayerDisp.mc_generalInfoTooltip.txt_effects, new s.TextVO(this.sublayerProperties.generalVO.getPassiveEffectsText())).autoFitToBounds = true;
  };
  GeneralsOverviewDialogInfo.prototype.onGeneralsUpdated = function (e) {
    this.updateElements();
    this.updateLordEffects();
    this.updateAbilities();
    this.parent.onGeneralsUpdated();
  };
  GeneralsOverviewDialogInfo.prototype.onToggleLord = function () {
    this.updateLordPicker(true);
    this.updateLordEffects();
    this.updateAbilities();
  };
  GeneralsOverviewDialogInfo.prototype.updateLordPicker = function (e = false) {
    var t = this.isBaron ? d.CastleModel.lordData.barons : d.CastleModel.lordData.commanders;
    this._lordPicker.removeEventListener(l.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
    this._lordPicker.show(t, this.sublayerProperties.generalVO);
    this._lordPicker.addEventListener(l.BasicPickerEvent.PICKER_CHANGE_VALUE, this.bindFunction(this.onLordChanged));
    this.onLordChanged(e);
  };
  GeneralsOverviewDialogInfo.prototype.updateLordToggleButton = function () {
    var e = this.sublayerProperties.generalVO.assignedLord;
    var t = e && e.isBaron;
    this._lordToggleButton.setValue(!t, false);
    this._lordToggleButton.enableComponent(!e || e && e.isAvailableForGeneralAssignement);
    this._lordToggleButton.disp.toolTipText = this._lordToggleButton.isEnabled ? null : {
      t: "dialog_generals_generalTravelling_tooltip",
      p: [this.sublayerProperties.generalVO.nameTextShort]
    };
    this._itxt_lord.textContentVO.textId = this.isBaron ? "equipment_itemType_baron" : "equipment_itemType_general";
    var i = !e || e.isAvailableForGeneralAssignement;
    m.ButtonHelper.enableButton(this.subLayerDisp.btn_skills, i);
    m.ButtonHelper.enableButton(this.subLayerDisp.btn_abilities, i);
    this.subLayerDisp.btn_skills.toolTipText = i ? null : "dialog_generals_skills_generalTravelling_tooltip";
    this.subLayerDisp.btn_abilities.toolTipText = i ? null : "dialog_generals_abilities_generalTravelling_tooltip";
  };
  GeneralsOverviewDialogInfo.prototype.onLordChanged = function (e = true) {
    if (this._lordPicker.selectedLord) {
      if (e) {
        d.CastleModel.lordData.assignGeneral(this._lordPicker.selectedLord, this.sublayerProperties.generalVO);
      }
      if (this._lordPicker.selectedLord.isBaron) {
        var t = this._lordPicker.selectedLord;
        this._lordPicker.lordTooltipTrigger.setProperties(this._lordPicker.selectedLord, d.CastleModel.userData.castleList.getCastleVOByID(t.lockedInCastleID), null, C.LordEffectHelper.STRATEGY_FULL_PASSIVE);
      } else {
        this._lordPicker.lordTooltipTrigger.setProperties(this._lordPicker.selectedLord, null, null, C.LordEffectHelper.STRATEGY_FULL_PASSIVE);
      }
    } else {
      var i = this.sublayerProperties.generalVO.assignedLord;
      if (e && i) {
        d.CastleModel.lordData.assignGeneral(i, null);
      }
      this._lordPicker.lordTooltipTrigger.setProperties(null);
    }
  };
  GeneralsOverviewDialogInfo.prototype.updateLordEffects = function () {
    var e = this._lordPicker.selectedLord ? this._lordPicker.selectedLord.getUniqueBoni(false, null, -1, null, true) : [];
    var t = !!this._lordPicker.selectedLord && this._lordPicker.selectedLord.isBaron;
    y.GeneralsHelper.showLordMainEffects(this.subLayerDisp, e, new v(40, 40), t);
  };
  GeneralsOverviewDialogInfo.prototype.updateAbilities = function () {
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_abilities);
    var e = this.sublayerProperties.generalVO.getSelectedAbilities(!this.isBaron);
    for (var t = 0; t < 5 && (!this.isBaron || !(this.sublayerProperties.generalVO.defenseSlots.length <= t)) && (this.isBaron || !(this.sublayerProperties.generalVO.attackSlots.length <= t)); t++) {
      var i = y.GeneralsHelper.getGeneralAbilityClip(e[t] ? e[t].abilityGroupID : -1, 80, e[t] ? e[t].abilityID : -1, !this.isBaron);
      i.x = t * 94;
      this.subLayerDisp.mc_abilities.addChild(i);
    }
  };
  Object.defineProperty(GeneralsOverviewDialogInfo.prototype, "isBaron", {
    get: function () {
      return !this._lordToggleButton.value;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsOverviewDialogInfo.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_starLevel:
        case this.subLayerDisp.btn_level:
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(b.GeneralsLevelUPDialog, new D.GeneralsLevelUPDialogProperties(this.sublayerProperties.generalVO.generalID));
          break;
        case this.subLayerDisp.btn_skills:
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(I.GeneralsSkillTreeDialog, new T.GeneralsSkillTreeDialogProperties(this.sublayerProperties.generalVO, !this.isBaron));
          break;
        case this.subLayerDisp.btn_abilities:
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(O.GeneralsAbilityDialog, new E.GeneralsAbilityDialogProperties(this.sublayerProperties.generalVO, !this.isBaron));
          break;
        case this.subLayerDisp.btn_info:
        case this.subLayerDisp.btn_info_selected:
          this.subLayerDisp.btn_info_selected.visible = this.subLayerDisp.mc_generalInfoTooltip.visible = !this.subLayerDisp.mc_generalInfoTooltip.visible;
      }
    }
  };
  Object.defineProperty(GeneralsOverviewDialogInfo.prototype, "sublayerProperties", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralsOverviewDialogInfo;
}(f.CastleDialogSubLayer);
exports.GeneralsOverviewDialogInfo = S;