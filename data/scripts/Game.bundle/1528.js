Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoMoatPartEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoMoatPartEnum, e);
  IsoMoatPartEnum.__initialize_static_members = function () {
    IsoMoatPartEnum.WALL = new IsoMoatPartEnum("wall");
    IsoMoatPartEnum.GATE = new IsoMoatPartEnum("gate");
    IsoMoatPartEnum.INNER_CORNER = new IsoMoatPartEnum("innerCorner");
    IsoMoatPartEnum.OUTER_CORNER = new IsoMoatPartEnum("outerCorner");
  };
  return IsoMoatPartEnum;
}(require("./84.js").CastleEnum);
exports.IsoMoatPartEnum = a;
a.__initialize_static_members();