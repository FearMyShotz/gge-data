Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function GeneralSkillTooltip() {
    this._isMaxLevel = false;
    this._isActive = false;
  }
  Object.defineProperty(GeneralSkillTooltip, "generalSkillToolTip", {
    get: function () {
      if (l.isUndefined(this._generalSkillToolTip)) {
        this._generalSkillToolTip = new Library.CastleInterfaceElements.GeneralSkill_ToolTip2();
      }
      return this._generalSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTooltip.prototype.initToolTip = function (e, t) {
    this._highlightAttack = t;
    this._generalVO = this.generalsData.playerGenerals.get(e.generalID);
    this._assignedLord = this._generalVO.assignedLord;
    this._currentGeneralSkillVO = e;
    this._itxt_name = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_name, new s.LocalizedTextVO(e.nameString));
    this._itxt_type = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_type, new s.LocalizedTextVO(e.typeString, [e.slotNumber]));
    this._isActive = this._generalVO.isSkillActive(this._currentGeneralSkillVO.id);
    this._isMaxLevel = this._isActive && this._currentGeneralSkillVO.isMaxLevel;
    this._isAbilitySkill = this._currentGeneralSkillVO.isAbilitySkill;
    this.setCurrentSkillText();
    this.setNextSkillText();
    this.setSkillCostText();
    this.resizeToolTip();
  };
  GeneralSkillTooltip.prototype.setCurrentSkillText = function () {
    this._itxt_current_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_attackHeader, new s.LocalizedTextVO("Attack"));
    this._itxt_current_attackHeader.color = this.getAbilityColor(true);
    this._itxt_current_attackHeader.visible = this._isAbilitySkill;
    this.disp.mc_commander.visible = this._isAbilitySkill;
    this._itxt_current_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_attack, new r.TextVO(this.getEffectText(this._currentGeneralSkillVO, true, false)));
    this._itxt_current_attack.color = this.getAbilityColor(true);
    this._itxt_current_attack.visible = true;
    this._itxt_current_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_defenseHeader, new s.LocalizedTextVO("Defense"));
    this._itxt_current_defenseHeader.color = this.getAbilityColor(false);
    this._itxt_current_defenseHeader.visible = this._isAbilitySkill;
    this.disp.mc_baron.visible = this._isAbilitySkill;
    this._itxt_current_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_current_defense, new r.TextVO(this.getEffectText(this._currentGeneralSkillVO, false, false)));
    this._itxt_current_defense.color = this.getAbilityColor(false);
    this._itxt_current_defense.visible = this._isAbilitySkill;
  };
  GeneralSkillTooltip.prototype.setNextSkillText = function () {
    if (!this._isMaxLevel && this._isActive) {
      var e = this._currentGeneralSkillVO.nextLevelSkill;
      this._itxt_next_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attackHeader, new s.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_attackHeader.color = this.getAbilityColor(true);
      this._itxt_next_attackHeader.visible = true;
      this._itxt_next_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attack, new r.TextVO(this.getEffectText(e, true, true)));
      this._itxt_next_attack.visible = true;
      this.disp.line2.visible = this._currentGeneralSkillVO.isAbilitySkill;
      this._itxt_next_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defenseHeader, new s.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_defenseHeader.color = this.getAbilityColor(false);
      this._itxt_next_defenseHeader.visible = this._isAbilitySkill;
      this._itxt_next_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defense, new r.TextVO(this.getEffectText(e, false, true)));
      this._itxt_next_defense.visible = this._isAbilitySkill;
    } else {
      this._itxt_next_attackHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attackHeader, new s.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_attackHeader.visible = false;
      this._itxt_next_attack = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_attack, new r.TextVO(""));
      this._itxt_next_attack.visible = false;
      this.disp.line2.visible = this._currentGeneralSkillVO.isAbilitySkill;
      this._itxt_next_defenseHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defenseHeader, new s.LocalizedTextVO("dialog_generals_skillTree_nextLevel_header_tooltip"));
      this._itxt_next_defenseHeader.visible = false;
      this._itxt_next_defense = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_next_defense, new r.TextVO(""));
      this._itxt_next_defense.visible = false;
    }
  };
  GeneralSkillTooltip.prototype.setSkillCostText = function () {
    var e = this.generalsData.getSkillTreeNode(this._currentGeneralSkillVO.generalID, this._currentGeneralSkillVO.tier);
    this._itxt_skillCostHeader = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCostHeader, new s.LocalizedTextVO("requirementsColon"));
    this._itxt_skillCost = GeneralSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new r.TextVO(""));
    if (e.isUnlocked()) {
      if (this._isMaxLevel) {
        this._itxt_skillCost.visible = false;
        this._itxt_skillCostHeader.visible = false;
        this.disp.line3.visible = false;
      } else {
        var t;
        var i = this._isActive ? this._currentGeneralSkillVO.nextLevelSkill : this._currentGeneralSkillVO;
        t = a.Localize.text("dialog_legendTemple_skillCost", [i.costSkillPoints]);
        this._itxt_skillCost.textContentVO.stringValue = t;
        var n = this._generalVO.getSkillPointsAvailable();
        this._itxt_skillCost.color = n >= i.costSkillPoints ? c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_LIGHTWHITE) : c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_RED);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = true;
        this.disp.line3.visible = true;
      }
    } else {
      var o = e.getUnlockText();
      this._itxt_skillCost.textContentVO.stringValue = o;
      this._itxt_skillCost.color = c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_RED);
      this._itxt_skillCost.visible = true;
      this._itxt_skillCostHeader.visible = true;
      this.disp.line3.visible = true;
    }
  };
  GeneralSkillTooltip.prototype.resizeToolTip = function () {
    var e = this.placeTextField(this._itxt_skillCost, null, 10);
    e = this.placeTextField(this._itxt_skillCostHeader, e, 5);
    e = this.placeLine(this.disp.line3, e, 5);
    e = this.placeTextField(this._itxt_next_defense, e, 5);
    e = this.placeTextField(this._itxt_next_defenseHeader, e, -3);
    e = this.placeTextField(this._itxt_current_defense, e, 5);
    this.placeLine(this.disp.mc_baron, e, -5);
    e = this.placeTextField(this._itxt_current_defenseHeader, e, 5);
    e = this.placeLine(this.disp.line2, e, 5);
    e = this.placeTextField(this._itxt_next_attack, e, 5);
    e = this.placeTextField(this._itxt_next_attackHeader, e, -3);
    e = this.placeTextField(this._itxt_current_attack, e, 5);
    this.placeLine(this.disp.mc_commander, e, -5);
    e = this.placeTextField(this._itxt_current_attackHeader, e, 5);
    e = this.placeLine(this.disp.line1, e, 5);
    e = this.placeTextField(this._itxt_type, e, 5);
    e = this.placeLine(this.disp.line0, e, 5);
    e = this.placeTextField(this._itxt_name, e, 5);
    this.disp.bg.height = Math.abs(e.y) + 5;
    this.disp.bg.x = -3;
    if (this._isAbilitySkill) {
      if (this._highlightAttack) {
        this.blackSquare(this.disp.line2.y + this.disp.line2.height, this._isMaxLevel ? -5 : this.disp.line3.y);
      } else {
        this.blackSquare(this.disp.line1.y + this.disp.line1.height, this.disp.line2.y);
      }
    } else {
      this.disp.mc_black.visible = false;
      this.disp.mc_black.height = 0;
      this.disp.mc_black.y = 0;
    }
  };
  GeneralSkillTooltip.prototype.blackSquare = function (e, t) {
    this.disp.mc_black.visible = true;
    this.disp.mc_black.height = t - e;
    this.disp.mc_black.y = e;
    this.disp.mc_black.x = -116;
  };
  GeneralSkillTooltip.prototype.placeTextField = function (e, t, i = 0) {
    if (e.visible) {
      e.y = (t && t.visible ? t.y : 0) - e.textHeight - i;
      return e;
    } else {
      return t;
    }
  };
  GeneralSkillTooltip.prototype.placeLine = function (e, t, i = 0) {
    if (e.visible) {
      e.y = (t && t.visible ? t.y : 0) - e.height - i;
      return e;
    } else {
      return t;
    }
  };
  GeneralSkillTooltip.prototype.getAbilityColor = function (e) {
    if (this._assignedLord && this._isAbilitySkill) {
      if (e) {
        if (this._assignedLord.isBaron) {
          return GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE;
        } else {
          return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
        }
      } else if (this._assignedLord.isBaron) {
        return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
      } else {
        return GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE;
      }
    } else {
      return GeneralSkillTooltip.SKILLCOLOR_ACTIVE;
    }
  };
  GeneralSkillTooltip.prototype.getEffectText = function (e, t, i) {
    if (this._isAbilitySkill) {
      var n = e.getEffectValueByType(d.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      return p.GeneralsHelper.getLocalizedCopyForAbility(n, t, i ? p.GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING : p.GeneralsHelper.ABILITY_TEXT_DEFAULT);
    }
    return e.getEffectText();
  };
  Object.defineProperty(GeneralSkillTooltip, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTooltip.prototype, "generalsData", {
    get: function () {
      return u.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTooltip.prototype, "disp", {
    get: function () {
      return GeneralSkillTooltip.generalSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTooltip.SKILLCOLOR_ACTIVE = 13421772;
  GeneralSkillTooltip.SKILLCOLOR_NOT_ACTIVE = 8750469;
  return GeneralSkillTooltip;
}();
exports.GeneralSkillTooltip = n;
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./229.js");
var c = require("./479.js");
var u = require("./4.js");
var d = require("./33.js");
var p = require("./164.js");