Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
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
  };
  EffectSourceEnum.getEffectSourceByServerKey = function (e) {
    switch (e) {
      case "EQ":
        return EffectSourceEnum.EQUIPMENT;
      case "BG":
        return EffectSourceEnum.BUILDING;
      case "CI":
        return EffectSourceEnum.CI;
      case "OTH":
        return EffectSourceEnum.EVENT;
      case "DE":
        return EffectSourceEnum.DECO;
    }
    return null;
  };
  return EffectSourceEnum;
}(require("./84.js").CastleEnum);
exports.EffectSourceEnum = a;
a.__initialize_static_members();