Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./4.js");
var c = require("./2229.js");
var u = function () {
  function GeneralsSkillTierComponent(e, t, i) {
    this._height = 0;
    this._attackHighlight = false;
    this._attackHighlight = i;
    this._disp = new (a.getDefinitionByName("GeneralSkillTreeDialogExt_SkillTier"))();
    this._tierNode = e;
    this._generalID = t;
    this.createTier();
    this.updateTier();
  }
  GeneralsSkillTierComponent.prototype.createTier = function () {
    this._skillItems = new Map();
    this._itxt_tierNumber = this.textFieldManager.registerTextField(this._disp.txt_tier, new s.LocalizedNumberVO(this._tierNode.id), new o.InternalGGSTextFieldConfigVO(true));
    var e = 0;
    var t = 0;
    for (var i = 0; i < this.tierNode.childs.length; i++) {
      var n = this.tierNode.childs[i];
      var a = new c.GeneralsSkillItem(this._generalID, n, this._attackHighlight);
      this._disp.mc_skills.addChild(a.disp);
      e = Math.floor(i / GeneralsSkillTierComponent.SKILLS_PER_ROW);
      t = i % GeneralsSkillTierComponent.SKILLS_PER_ROW;
      a.disp.x = t * GeneralsSkillTierComponent.SKILL_SPACING_X;
      a.disp.y = e * GeneralsSkillTierComponent.SKILL_SPACING_Y;
      this._skillItems.set(n.id, a);
    }
    this.disp.bg_default.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + e * GeneralsSkillTierComponent.SKILL_SPACING_Y;
    this.disp.bg_completed.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + e * GeneralsSkillTierComponent.SKILL_SPACING_Y;
    this.disp.mc_locked.height = GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT + e * GeneralsSkillTierComponent.SKILL_SPACING_Y;
  };
  GeneralsSkillTierComponent.prototype.updateTier = function () {
    var e = this._tierNode.isUnlocked();
    var t = this.generalsData.isTierCompleted(this._generalID, this.tierNode.id);
    var i = this.generalsData.isTierInProgress(this._generalID, this.tierNode.id);
    this._disp.mc_locked.visible = !e;
    this._disp.bg_completed.visible = t;
    this._disp.bg_default.visible = !t;
    this._itxt_tierNumber.color = t ? r.ClientConstColor.MODERN_DEFAULT : i ? c.GeneralsSkillItem.COLOR_PROGRESS : r.ClientConstColor.MODERN_DEFAULT_BRIGHT;
    Array.from(this._skillItems.values()).forEach(function (t) {
      return t.updateItem(e);
    });
  };
  GeneralsSkillTierComponent.prototype.show = function () {
    this._disp.visible = true;
    for (var e = 0, t = Array.from(this._skillItems.values()); e < t.length; e++) {
      var i = t[e];
      if (i) {
        i.show();
      }
    }
  };
  GeneralsSkillTierComponent.prototype.hide = function () {
    this._disp.visible = false;
    for (var e = 0, t = Array.from(this._skillItems.values()); e < t.length; e++) {
      var i = t[e];
      if (i) {
        i.hide();
      }
    }
  };
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "generalsData", {
    get: function () {
      return l.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "tierNode", {
    get: function () {
      return this._tierNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTierComponent.prototype, "skillItems", {
    get: function () {
      return this._skillItems;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTierComponent.SKILL_SPACING_X = 115;
  GeneralsSkillTierComponent.SKILL_SPACING_Y = 110;
  GeneralsSkillTierComponent.SKILLS_PER_ROW = 6;
  GeneralsSkillTierComponent.TIER_HEIGHT_DEFAULT = 46;
  return GeneralsSkillTierComponent;
}();
exports.GeneralsSkillTierComponent = u;