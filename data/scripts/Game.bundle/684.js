Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = function (e) {
  function EffectSourceEnum(t, i) {
    var n = e.call(this, t, o.BasicEnum.instantiationKey) || this;
    n._order = i;
    return n;
  }
  n.__extends(EffectSourceEnum, e);
  Object.defineProperty(EffectSourceEnum.prototype, "order", {
    get: function () {
      return this._order;
    },
    enumerable: true,
    configurable: true
  });
  EffectSourceEnum.__initialize_static_members = function () {
    EffectSourceEnum.EQUIPMENT = new EffectSourceEnum("Equipment", 1);
    EffectSourceEnum.CI = new EffectSourceEnum("CI", 2);
    EffectSourceEnum.BUILDING = new EffectSourceEnum("Building", 3);
    EffectSourceEnum.DECO = new EffectSourceEnum("Deco", 4);
    EffectSourceEnum.EVENT = new EffectSourceEnum("Event", 5);
    EffectSourceEnum.RESEARCH = new EffectSourceEnum("Research", 6);
    EffectSourceEnum.ALLIANCE = new EffectSourceEnum("Alliance", 7);
    EffectSourceEnum.SUBSCRIPTION = new EffectSourceEnum("Subscription", 8);
    EffectSourceEnum.LEGEND = new EffectSourceEnum("Legend", 9);
    EffectSourceEnum.TITLES = new EffectSourceEnum("Titles", 10);
    EffectSourceEnum.GLOBAL_EFFECT = new EffectSourceEnum("Global", 11);
    EffectSourceEnum.CREST = new EffectSourceEnum("Crest", 12);
    EffectSourceEnum.VILLAGES = new EffectSourceEnum("Villages", 13);
    EffectSourceEnum.COA = new EffectSourceEnum("CoA", 13);
  };
  EffectSourceEnum.getEffectSourceByServerKey = function (e) {
    switch (e) {
      case a.CommKeys.EFFECT_SOURCE_EQUIPMENT:
      case a.CommKeys.EFFECT_SOURCE_GENERAL:
        return EffectSourceEnum.EQUIPMENT;
      case a.CommKeys.EFFECT_SOURCE_BUILDING:
      case a.CommKeys.EFFECT_SOURCE_TRAINING:
        return EffectSourceEnum.BUILDING;
      case a.CommKeys.EFFECT_SOURCE_CONSTRUCTION_ITEM:
        return EffectSourceEnum.CI;
      case a.CommKeys.EFFECT_SOURCE_OTHER:
        return EffectSourceEnum.EVENT;
      case a.CommKeys.EFFECT_SOURCE_DECORATION:
        return EffectSourceEnum.DECO;
      case a.CommKeys.EFFECT_SOURCE_RESEARCH:
        return EffectSourceEnum.RESEARCH;
      case a.CommKeys.EFFECT_SOURCE_ALLIANCE_BUFF:
        return EffectSourceEnum.ALLIANCE;
      case a.CommKeys.EFFECT_SOURCE_ALLIANCE_COAT:
        return EffectSourceEnum.COA;
      case a.CommKeys.EFFECT_SOURCE_ALLIANCE_SUBSCRIPTION:
      case a.CommKeys.EFFECT_SOURCE_PLAYER_SUBSCRIPTION:
        return EffectSourceEnum.SUBSCRIPTION;
      case a.CommKeys.EFFECT_SOURCE_HIGH_LEVEL_HOL:
        return EffectSourceEnum.LEGEND;
      case a.CommKeys.EFFECT_SOURCE_TITLE:
        return EffectSourceEnum.TITLES;
      case a.CommKeys.EFFECT_SOURCE_GLOBAL_EFFECT:
        return EffectSourceEnum.GLOBAL_EFFECT;
      case a.CommKeys.EFFECT_SOURCE_CREST_SYMBOL:
        return EffectSourceEnum.CREST;
      case a.CommKeys.EFFECT_SOURCE_PRIVATE_VILLAGE:
        return EffectSourceEnum.VILLAGES;
    }
    return null;
  };
  return EffectSourceEnum;
}(require("./84.js").CastleEnum);
exports.EffectSourceEnum = s;
s.__initialize_static_members();