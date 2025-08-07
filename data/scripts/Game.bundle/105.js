Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoGridOriginEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoGridOriginEnum, e);
  IsoGridOriginEnum.__initialize_static_members = function () {
    IsoGridOriginEnum.NORMAL = new IsoGridOriginEnum("normal");
    IsoGridOriginEnum.TOP_CORNER = new IsoGridOriginEnum("topCorner");
    IsoGridOriginEnum.BOTTOM_CORNER = new IsoGridOriginEnum("bottomCorner");
    IsoGridOriginEnum.LEFT_CORNER = new IsoGridOriginEnum("leftCorner");
    IsoGridOriginEnum.RIGHT_CORNER = new IsoGridOriginEnum("rightCorner");
  };
  return IsoGridOriginEnum;
}(require("./84.js").CastleEnum);
exports.IsoGridOriginEnum = a;
a.__initialize_static_members();