Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./57.js");
var c = require("./4.js");
var u = require("./35.js");
var d = require("./237.js");
var p = require("./164.js");
var h = require("./854.js");
var g = createjs.MouseEvent;
var C = function () {
  function GeneralsSkillItem(e, t, i) {
    this._attackHighlight = false;
    this._attackHighlight = i;
    this._skillGroup = t;
    this._generalID = e;
    this._disp = new (s.getDefinitionByName("GeneralSkillTreeDialogExt_SkillContainer"))();
    this._disp.mouseChildren = false;
    this._clickFeedback = new d.ClickFeedbackHoverBehaviour(this.disp);
    this._itxt_level = o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_level.txt_level, new r.LocalizedTextVO(n.GenericTextIds.VALUE_PROPORTIONAL_VALUE), new a.InternalGGSTextFieldConfigVO(true));
    this._clickSignal = new l.Signal();
    this.loadIcon();
  }
  GeneralsSkillItem.prototype.loadIcon = function () {
    var e = this._skillGroup.childs[0].generalSkillVO;
    if (e.isAbilitySkill) {
      var t = e.getEffectValueByType(u.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      var i = this.generalsData.getAbilityByID(t);
      if (i) {
        var n = i.abilityAttackEffectID > 0;
        var o = i.abilityDefenseEffectID > 0;
        this.disp.mc_icon.addChild(p.GeneralsHelper.getGeneralAbilityClip(i.abilityGroupID, 80, -1, n, n && o));
      }
      this._disp.mc_genericSkillIcon.visible = false;
    } else {
      this._disp.mc_genericSkillIcon.visible = true;
      n = false;
      var a = false;
      for (var s = 0, r = e.boni; s < r.length; s++) {
        var l = r[s];
        if (c.CastleModel.effectsData.isAttackEffect(l.effect.effectType.type)) {
          n = true;
        }
        if (c.CastleModel.effectsData.isDefenseEffect(l.effect.effectType.type)) {
          a = true;
        }
      }
      var d = n == a;
      this._disp.mc_genericSkillIcon.gotoAndStop(d ? 1 : n ? 2 : 3);
    }
  };
  GeneralsSkillItem.prototype.updateItem = function (e) {
    this._disp.mc_downState.visible = !e;
    this._disp.mc_level.mc_locked.visible = !e;
    var t = this.generalsData.playerGenerals.get(this._generalID);
    this._currentSkillVO = t.getActiveSkillInGroup(this._skillGroup);
    var i = this._currentSkillVO ? this._currentSkillVO.level : 0;
    var n = this._skillGroup.childs[this._skillGroup.childs.length - 1].id;
    var o = this._currentSkillVO && this._currentSkillVO.isMaxLevel;
    this._itxt_level.textContentVO.textReplacements = [i, n];
    this._itxt_level.color = o ? GeneralsSkillItem.COLOR_MAX : i > 0 ? GeneralsSkillItem.COLOR_PROGRESS : GeneralsSkillItem.COLOR_DEFAULT;
    this.disp.mc_bg.gotoAndStop(o ? 2 : 1);
    this.disp.mc_edge.gotoAndStop(o ? 2 : 1);
    this.disp.mc_level.gotoAndStop(o ? 2 : 1);
    this._nextSkillVO = this._currentSkillVO ? this._currentSkillVO.nextLevelSkill : this._skillGroup.childs[0].generalSkillVO;
    var a = t.getSkillPointsAvailable();
    if (e && !o && a >= this._nextSkillVO.costSkillPoints) {
      this._clickFeedback.addEventListener();
      this._canUpgrade = true;
    } else {
      this._clickFeedback.removeEventListener();
      this._canUpgrade = false;
    }
  };
  GeneralsSkillItem.prototype.show = function () {
    this.disp.visible = true;
    this.disp.addEventListener(g.CLICK, this.bindFunction(this.onClick));
    this.disp.addEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
  };
  GeneralsSkillItem.prototype.hide = function () {
    this.disp.visible = false;
    this.disp.removeEventListener(g.CLICK, this.bindFunction(this.onClick));
    this.disp.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(g.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    if (this._clickFeedback) {
      this._clickFeedback.removeEventListener();
    }
    if (this._clickSignal) {
      this._clickSignal.removeAll();
    }
  };
  GeneralsSkillItem.prototype.onClick = function (e) {
    if (this._canUpgrade) {
      this.clickSignal.dispatch(this._nextSkillVO);
    }
  };
  GeneralsSkillItem.prototype.onMouseOver = function (e) {
    h.GeneralsSkillTooltipHelper.showToolTip(this.disp, this._currentSkillVO || this._nextSkillVO, this._attackHighlight);
  };
  GeneralsSkillItem.prototype.onMouseOut = function (e) {
    h.GeneralsSkillTooltipHelper.hideToolTip();
  };
  Object.defineProperty(GeneralsSkillItem.prototype, "generalsData", {
    get: function () {
      return c.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillItem.prototype, "clickSignal", {
    get: function () {
      return this._clickSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillItem.COLOR_MAX = 15974986;
  GeneralsSkillItem.COLOR_PROGRESS = 10538042;
  GeneralsSkillItem.COLOR_DEFAULT = 15921906;
  return GeneralsSkillItem;
}();
exports.GeneralsSkillItem = C;