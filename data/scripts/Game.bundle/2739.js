Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./84.js");
var s = require("./2740.js");
var r = require("./2741.js");
var l = require("./2742.js");
var c = require("./2743.js");
var u = function (e) {
  function IsoGeneratorDefenceEnum(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, o.BasicEnum.instantiationKey) || this)._clazz = i;
    return n;
  }
  n.__extends(IsoGeneratorDefenceEnum, e);
  Object.defineProperty(IsoGeneratorDefenceEnum.prototype, "clazz", {
    get: function () {
      return this._clazz;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorDefenceEnum.__initialize_static_members = function () {
    IsoGeneratorDefenceEnum.COMMON = new IsoGeneratorDefenceEnum("", d.IsoGeneratorDefenceCommon);
    IsoGeneratorDefenceEnum.GATE = new IsoGeneratorDefenceEnum("", s.IsoGeneratorDefenceGate);
    IsoGeneratorDefenceEnum.TOWER = new IsoGeneratorDefenceEnum("", l.IsoGeneratorDefenceTower);
    IsoGeneratorDefenceEnum.WALL = new IsoGeneratorDefenceEnum("", c.IsoGeneratorDefenceWall);
    IsoGeneratorDefenceEnum.MOAT = new IsoGeneratorDefenceEnum("", r.IsoGeneratorDefenceMoat);
  };
  return IsoGeneratorDefenceEnum;
}(a.CastleEnum);
exports.IsoGeneratorDefenceEnum = u;
var d = require("./2744.js");
u.__initialize_static_members();