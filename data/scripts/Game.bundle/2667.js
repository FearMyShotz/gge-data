Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleLegendSkillTooltip() {
    this._isMaxLevel = false;
    this._isActive = false;
  }
  Object.defineProperty(CastleLegendSkillTooltip, "legendSkillToolTip", {
    get: function () {
      if (l.isUndefined(this._legendSkillToolTip)) {
        this._legendSkillToolTip = new Library.CastleInterfaceElements.CastleLegendSkill_ToolTip_R();
      }
      return this._legendSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTooltip.prototype.initToolTip = function (e) {
    this._currentLegendSkillVO = e;
    this._itxt_name = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_name, new s.LocalizedTextVO(e.nameTextID));
    this._isActive = this.legendSkillData.isSkillActive(this._currentLegendSkillVO);
    this._isMaxLevel = this._isActive && this._currentLegendSkillVO.level == this.legendSkillData.getMaxSkillLevelInGroup(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier, this._currentLegendSkillVO.skillGroupID);
    this.setSpecialText();
    this.setCurrentSkillText();
    this.setStateText();
    this.setNextSkillText();
    this.setSkillCostText();
    this.resizeToolTip();
  };
  CastleLegendSkillTooltip.prototype.setSpecialText = function () {
    if (this._currentLegendSkillVO.isSpecialSkill()) {
      this._itxt_special = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_special, new s.LocalizedTextVO("dialog_legendTemple_superSkill"));
      this._itxt_special.visible = true;
      this.disp.line1.visible = true;
    } else {
      this._itxt_special = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_special, new s.LocalizedTextVO(""));
      this._itxt_special.visible = false;
      this.disp.line1.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setCurrentSkillText = function () {
    var e = this._isMaxLevel ? c.ClientConstLegendSkills.COLORCODE_YELLOW : c.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
    this._itxt_currentLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_currentSkill, this.composeSkillTextVO(this._currentLegendSkillVO, e));
  };
  CastleLegendSkillTooltip.prototype.setStateText = function () {
    if (!this._isMaxLevel && this._isActive) {
      this._itxt_skillState = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillState, new s.LocalizedTextVO("dialog_legendTemple_nextLevel"));
      this._itxt_skillState.color = c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_LIGHTWHITE);
      this._itxt_skillState.visible = true;
    } else {
      this._itxt_skillState = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillState, new r.TextVO(""));
      this._itxt_skillState.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setNextSkillText = function () {
    if (!this._isMaxLevel && this._isActive) {
      var e = this.composeSkillTextVO(this.legendSkillData.getNextLevel(this._currentLegendSkillVO), c.ClientConstLegendSkills.COLORCODE_GREEN);
      this._itxt_nextLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_nextSkill, e);
      this._itxt_nextLevel.visible = true;
    } else {
      this._itxt_nextLevel = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_nextSkill, new r.TextVO(""));
      this._itxt_nextLevel.visible = false;
    }
  };
  CastleLegendSkillTooltip.prototype.setSkillCostText = function () {
    this._itxt_skillCostHeader = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCostHeader, new s.LocalizedTextVO("requirementsColon"));
    if (this.legendSkillData.isTierUnlocked(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier)) {
      if (this._isMaxLevel || this._currentLegendSkillVO.isSpecialSkill()) {
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new r.TextVO(""));
        this._itxt_skillCost.visible = false;
        this._itxt_skillCostHeader.visible = false;
      } else if (this.legendSkillData.isSceatSkillInProgress(this._currentLegendSkillVO)) {
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new s.LocalizedTextVO("dialog_legendTemple_upgrading"));
        this._itxt_skillCost.color = c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_YELLOW);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = false;
      } else {
        var e = undefined;
        var t = this._isActive ? this.legendSkillData.getNextLevel(this._currentLegendSkillVO) : this._currentLegendSkillVO;
        e = a.Localize.text(t.costTextID, [t.cost]);
        var i = t.isUnlocked();
        if (!i) {
          e += "\n" + t.getUnlockText();
        }
        this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new r.TextVO(e));
        this._itxt_skillCost.color = this.legendSkillData.canAffordNextLevel(t) && i ? c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_LIGHTWHITE) : c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_RED);
        this._itxt_skillCost.visible = true;
        this._itxt_skillCostHeader.visible = true;
      }
    } else {
      var n = this.legendSkillData.getNodeUnlockText(this._currentLegendSkillVO.skillTreeID, this._currentLegendSkillVO.tier);
      this._itxt_skillCost = CastleLegendSkillTooltip.textFieldManager.registerTextField(this.disp.txt_skillCost, new r.TextVO(n));
      this._itxt_skillCost.color = c.ClientConstLegendSkills.getHexColorValue(c.ClientConstLegendSkills.COLORCODE_RED);
      this._itxt_skillCost.visible = true;
      this._itxt_skillCostHeader.visible = true;
    }
  };
  CastleLegendSkillTooltip.prototype.composeSkillTextVO = function (e, t) {
    var i = d.instanceOfClass(e, "CastleSceatSkillVO") ? e.getUnlockLevel() : -1;
    return e.composeSkillTextVO(t, i);
  };
  CastleLegendSkillTooltip.prototype.resizeToolTip = function () {
    var e = this.placeTextField(this._itxt_skillCost, null, 10);
    e = this.placeTextField(this._itxt_skillCostHeader, e, 10);
    e = this.placeTextField(this._itxt_nextLevel, e, 10);
    e = this.placeTextField(this._itxt_skillState, e, 10);
    e = this.placeTextField(this._itxt_currentLevel, e, 10);
    e = this.placeLine(this.disp.line1, e, 5);
    e = this.placeTextField(this._itxt_special, e, 5);
    e = this.placeLine(this.disp.line0, e, this._itxt_special.visible ? 0 : 5);
    e = this.placeTextField(this._itxt_name, e, 5);
    this.disp.bg.height = Math.abs(e.y) + 5;
    this.disp.bg.x = -4;
  };
  CastleLegendSkillTooltip.prototype.placeTextField = function (e, t, i) {
    if (e.visible) {
      e.y = (t && t.visible ? t.y : 0) - e.textHeight - i;
      return e;
    } else {
      return t;
    }
  };
  CastleLegendSkillTooltip.prototype.placeLine = function (e, t, i) {
    if (e.visible) {
      e.y = t.y - e.height - i;
      return e;
    } else {
      return t;
    }
  };
  Object.defineProperty(CastleLegendSkillTooltip, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTooltip.prototype, "legendSkillData", {
    get: function () {
      return u.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTooltip.prototype, "disp", {
    get: function () {
      return CastleLegendSkillTooltip.legendSkillToolTip;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTooltip;
}();
exports.CastleLegendSkillTooltip = n;
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./229.js");
var c = require("./479.js");
var u = require("./4.js");
var d = require("./1.js");