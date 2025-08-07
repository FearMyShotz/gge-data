Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoMovementActionEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoMovementActionEnum, e);
  IsoMovementActionEnum.__initialize_static_members = function () {
    IsoMovementActionEnum.STAND = new IsoMovementActionEnum("standing");
    IsoMovementActionEnum.WALK = new IsoMovementActionEnum("walking");
    IsoMovementActionEnum.WORK = new IsoMovementActionEnum("work");
  };
  return IsoMovementActionEnum;
}(require("./84.js").CastleEnum);
exports.IsoMovementActionEnum = a;
a.__initialize_static_members();