Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function JudgementConditionEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._collectable = i;
    return n;
  }
  n.__extends(JudgementConditionEnum, e);
  JudgementConditionEnum.getConditionTypeFromString = function (e) {
    return this.getByProperty(JudgementConditionEnum, "name", e, JudgementConditionEnum.UNDEFINED);
  };
  Object.defineProperty(JudgementConditionEnum.prototype, "collectable", {
    get: function () {
      return this._collectable;
    },
    enumerable: true,
    configurable: true
  });
  JudgementConditionEnum.__initialize_static_members = function () {
    JudgementConditionEnum.UNDEFINED = new JudgementConditionEnum("UNDEFINED", null);
    JudgementConditionEnum.WOOD = new JudgementConditionEnum("wood", s.CollectableEnum.WOOD);
    JudgementConditionEnum.STONE = new JudgementConditionEnum("stone", s.CollectableEnum.STONE);
    JudgementConditionEnum.C1 = new JudgementConditionEnum("currency1", s.CollectableEnum.C1);
    JudgementConditionEnum.UNITS = new JudgementConditionEnum("units", s.CollectableEnum.UNITS);
  };
  return JudgementConditionEnum;
}(require("./84.js").CastleEnum);
exports.JudgementConditionEnum = a;
var s = require("./12.js");