Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function JudgementEventEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(JudgementEventEnum, e);
  JudgementEventEnum.getByName = function (e) {
    return this.getByProperty(JudgementEventEnum, "name", e, JudgementEventEnum.NONE);
  };
  JudgementEventEnum.__initialize_static_members = function () {
    JudgementEventEnum.NONE = new JudgementEventEnum("none");
    JudgementEventEnum.WOLFS = new JudgementEventEnum("wolfs");
    JudgementEventEnum.ROAMERS = new JudgementEventEnum("roamers");
    JudgementEventEnum.PEASANT_REFUGEES = new JudgementEventEnum("peasantRefugees");
    JudgementEventEnum.SQUABBLERS = new JudgementEventEnum("squabblers");
    JudgementEventEnum.THIEF = new JudgementEventEnum("thief");
  };
  return JudgementEventEnum;
}(require("./84.js").CastleEnum);
exports.JudgementEventEnum = a;
a.__initialize_static_members();