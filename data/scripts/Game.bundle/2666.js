Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./100.js");
var o = require("./3.js");
var a = require("./1.js");
var s = createjs.MovieClip;
var r = function () {
  function CastleLegendSkillTierComponent(e, t) {
    this._height = 0;
    this._disp = new s();
    this._tierNode = e;
    this._treeID = t;
    this.createTier();
    this.updateTier();
  }
  CastleLegendSkillTierComponent.prototype.createTier = function () {
    var e;
    var t;
    this._skillItems = new Map();
    this._height = 0;
    var i = 0;
    var s = 0;
    for (var r = 0, c = this._tierNode.childs; r < c.length; r++) {
      var d = c[r];
      if (d !== undefined) {
        if ((e = this.legendSkillData.getCurrentSkillInGroup(this._treeID, this._tierNode.id, d.id)).isSpecialSkill()) {
          if (i != 0) {
            u.error("SPECIAL SKILL HAS TO BE ON TOP");
          }
          this._specialTierContainer = new (a.getDefinitionByName("LegendSkillTierContainer"))();
          this._specialTierContainer.mc_tier.visible = false;
          this._specialTierContainer.y = this._height;
          this._disp.addChild(this._specialTierContainer);
          (t = new l.CastleLegendSkillItem(e)).dispContainer.x = CastleLegendSkillTierComponent.FIRST_SKILL_X + CastleLegendSkillTierComponent.SKILL_SPACING_X * 2;
          t.dispContainer.y = CastleLegendSkillTierComponent.FIRST_SKILL_Y;
          this._skillItems.set(d.id, t);
          this._specialTierContainer.addChild(t.dispContainer);
          this._height = CastleLegendSkillTierComponent.SKILL_SPACING_Y + CastleLegendSkillTierComponent.TIER_SPACING_Y;
        } else {
          if (i == 0) {
            this._tierContainer = new (a.getDefinitionByName("LegendSkillTierContainer"))();
            this._tierContainer.y = this._height;
            this._disp.addChild(this._tierContainer);
            this.textFieldManager.registerTextField(this._tierContainer.mc_tier.txt_tier, new o.NumberVO(this._tierNode.id), new n.InternalGGSTextFieldConfigVO(true));
            s = this._specialTierContainer ? this._tierNode.childs.length - 1 : this._tierNode.childs.length;
          }
          var p = Math.floor(i / CastleLegendSkillTierComponent.SKILLS_PER_ROW);
          var h = Math.min(5, s - p * CastleLegendSkillTierComponent.SKILLS_PER_ROW);
          var g = (CastleLegendSkillTierComponent.SKILLS_PER_ROW - h) * (CastleLegendSkillTierComponent.SKILL_SPACING_X * 0.5);
          var C = e;
          var _ = !!C && (C.hasBuildingEffect || C.hasUnitEffect);
          (t = new l.CastleLegendSkillItem(e, false, _)).dispContainer.x = g + CastleLegendSkillTierComponent.FIRST_SKILL_X + i % CastleLegendSkillTierComponent.SKILLS_PER_ROW * CastleLegendSkillTierComponent.SKILL_SPACING_X;
          t.dispContainer.y = CastleLegendSkillTierComponent.FIRST_SKILL_Y + Math.floor(i / CastleLegendSkillTierComponent.SKILLS_PER_ROW) * CastleLegendSkillTierComponent.SKILL_SPACING_Y;
          this._skillItems.set(d.id, t);
          this._tierContainer.addChild(t.dispContainer);
          i++;
        }
      }
    }
    if (this._tierContainer) {
      var m = (Math.floor((i - 1) / 5) + 1) * CastleLegendSkillTierComponent.SKILL_SPACING_Y;
      this._tierContainer.mc_max.height = m;
      this._tierContainer.bg.height = m;
      this._tierContainer.mc_locked.height = m;
      this._height += m;
    }
  };
  CastleLegendSkillTierComponent.prototype.updateTier = function () {
    var e;
    var t = this.legendSkillData.isTierUnlockedBySkillsSelectable(this._treeID, this._tierNode.id);
    var i = this.legendSkillData.isTierUnlocked(this._treeID, this._tierNode.id) && !this._tierNode.isPreview && t;
    var n = this.legendSkillData.isTierUnlocked(this._treeID, this._tierNode.id + 1) && !this._tierNode.isPreview;
    console.log("treeID: " + this._treeID + ", id: " + this.tierNode.id + ", isTierUnlocked: " + i + " , isTierStartable: " + t + ", isNextUnlocked: " + n);
    if (this._specialTierContainer) {
      this._specialTierContainer.mc_locked.visible = !i;
      this._specialTierContainer.mc_max.visible = i;
    }
    if (this._tierContainer) {
      this._tierContainer.mc_locked.visible = !i;
      this._tierContainer.mc_tier.mc_lock.visible = !i;
      this._tierContainer.mc_max.visible = i && n;
      this._tierContainer.mc_tier.mc_active.visible = false;
    }
    for (var o = 0, a = this._tierNode.childs; o < a.length; o++) {
      var s = a[o];
      if (s !== undefined) {
        e = this.legendSkillData.getCurrentSkillInGroup(this._treeID, this._tierNode.id, s.id);
        this._skillItems.get(s.id).setSkillInfo(e);
        this._skillItems.get(s.id).show();
        this._skillItems.get(s.id).checkForTooltipUpdate();
        if (!e.isSpecialSkill()) {
          if (this._skillItems.get(s.id).isActive) {
            this._tierContainer.mc_tier.mc_active.visible = true;
          }
        }
      }
    }
  };
  CastleLegendSkillTierComponent.prototype.show = function () {
    this._disp.visible = true;
    for (var e = 0, t = Array.from(this._skillItems.values()); e < t.length; e++) {
      var i = t[e];
      if (i) {
        i.show();
      }
    }
  };
  CastleLegendSkillTierComponent.prototype.hide = function () {
    this._disp.visible = false;
    for (var e = 0, t = Array.from(this._skillItems.values()); e < t.length; e++) {
      var i = t[e];
      if (i) {
        i.hide();
      }
    }
  };
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "legendSkillData", {
    get: function () {
      return c.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "textFieldManager", {
    get: function () {
      return u.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTierComponent.prototype, "tierNode", {
    get: function () {
      return this._tierNode;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTierComponent.FIRST_SKILL_X = 206;
  CastleLegendSkillTierComponent.FIRST_SKILL_Y = 60;
  CastleLegendSkillTierComponent.SKILL_SPACING_X = 114;
  CastleLegendSkillTierComponent.SKILL_SPACING_Y = 120;
  CastleLegendSkillTierComponent.TIER_SPACING_Y = 4;
  CastleLegendSkillTierComponent.SKILLS_PER_ROW = 5;
  return CastleLegendSkillTierComponent;
}();
exports.CastleLegendSkillTierComponent = r;
var l = require("./994.js");
var c = require("./4.js");
var u = require("./2.js");