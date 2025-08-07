Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./55.js");
var s = function (e) {
  function JudgementSpotEnum(t, i = null) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._veClass = i;
    return n;
  }
  n.__extends(JudgementSpotEnum, e);
  JudgementSpotEnum.getTypeFromName = function (e) {
    return this.getByProperty(JudgementSpotEnum, "name", e, JudgementSpotEnum.UNKNOWN);
  };
  JudgementSpotEnum.getTypeFromVEClass = function (e) {
    return this.getByProperty(JudgementSpotEnum, "veClass", e, JudgementSpotEnum.UNKNOWN);
  };
  Object.defineProperty(JudgementSpotEnum.prototype, "spawnType", {
    get: function () {
      return a.ClientConstUtils.capitalizeFirstLetter(this.name, false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(JudgementSpotEnum.prototype, "veClass", {
    get: function () {
      return this._veClass;
    },
    enumerable: true,
    configurable: true
  });
  JudgementSpotEnum.__initialize_static_members = function () {
    JudgementSpotEnum.UNKNOWN = new JudgementSpotEnum("unknown");
    JudgementSpotEnum.RESOURCE_FOOD = new JudgementSpotEnum("resourceFood", l.ResourceFieldSpotJudgementVE);
    JudgementSpotEnum.KEEP_BUILDING = new JudgementSpotEnum("keep", r.KeepSpotJudgementVE);
  };
  return JudgementSpotEnum;
}(require("./84.js").CastleEnum);
exports.JudgementSpotEnum = s;
var r = require("./2759.js");
var l = require("./2760.js");
s.__initialize_static_members();