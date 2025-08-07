Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./24.js");
var c = require("./33.js");
var u = require("./1965.js");
var d = function (e) {
  function ResearchVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ResearchVO, e);
  ResearchVO.prototype.getBonusText = function (e) {
    switch (this.groupID) {
      case 21:
      case 31:
      case 43:
      case 45:
      case 46:
      case 47:
      case 50:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
        return s.Localize.text(a.GenericTextIds.VALUE_NOMINAL_ADD, e);
      case 22:
      case 23:
      case 44:
      case 36:
      case 34:
      case 104:
      case 105:
      case 106:
      case 107:
      case 108:
      case 109:
      case 110:
      case 111:
      case 112:
      case 113:
      case 114:
      case 115:
      case 116:
        return s.Localize.text(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, e);
      case 41:
      case 42:
      case 49:
        return s.Localize.text(a.GenericTextIds.VALUE_SIMPLE_COMP, [new r.LocalizedTextVO(a.GenericTextIds.VALUE_NOMINAL_SUBTRACT, e), a.GenericTextIds.COMMON_SECOND_SHORT]);
      default:
        return s.Localize.text(a.GenericTextIds.VALUE_PERCENTAGE_ADD, e);
    }
  };
  Object.defineProperty(ResearchVO.prototype, "effectText", {
    get: function () {
      if (this.boni[0].effectValue.strength != 0 && this.showEffectValue) {
        return s.Localize.text(this.descriptionTextId) + "\n" + this.getBonusText(this.boni[0].effectValue.textReplacements);
      } else {
        return s.Localize.text(this.descriptionTextId);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "effectText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_" + this.groupID + "_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "descriptionTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "nameTextId", {
    get: function () {
      return "research_" + this.groupID + "_title";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "nameTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "fullNameText", {
    get: function () {
      return s.Localize.text(a.GenericTextIds.VALUE_SIMPLE_COMP, [s.Localize.text(this.nameTextId), s.Localize.text("building_level", [this.level])]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "fullNameText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResearchVO.prototype.icon = function () {
    return new l.CastleGoodgameExternalClip(ResearchVO.ICON_PREFIX_CLASSNAME + this.groupID, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(ResearchVO.ICON_PREFIX_CLASSNAME + this.groupID), null, 0, false);
  };
  Object.defineProperty(ResearchVO.prototype, "showEffectValue", {
    get: function () {
      return !this.hasOneOrMoreEffectTypes([c.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, c.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT, c.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_NO_RUBIES, c.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "showEffectValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchVO.prototype, "showInfoBtn", {
    get: function () {
      return this.hasOneOrMoreEffectTypes([c.EffectTypeEnum.EFFECT_TYPE_ENABLE_UNITS, c.EffectTypeEnum.EFFECT_TYPE_STRONGER_PEASANT, c.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "showInfoBtn").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResearchVO.__initialize_static_members = function () {
    ResearchVO.ICON_PREFIX_CLASSNAME = "Icon_Research_";
  };
  return ResearchVO;
}(u.AResearchVO);
exports.ResearchVO = d;
d.__initialize_static_members();