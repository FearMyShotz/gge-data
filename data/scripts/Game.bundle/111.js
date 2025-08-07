Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoLayerEnum(t) {
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoLayerEnum, e);
  IsoLayerEnum.__initialize_static_members = function () {
    IsoLayerEnum.BACKGROUND = new IsoLayerEnum("background");
    IsoLayerEnum.GROUND = new IsoLayerEnum("ground");
    IsoLayerEnum.GROUND_FILLER = new IsoLayerEnum("groundFiller");
    IsoLayerEnum.MOAT = new IsoLayerEnum("moat");
    IsoLayerEnum.STATIC_SURROUNDINGS = new IsoLayerEnum("surroundings");
    IsoLayerEnum.RESOURCE_FIELDS = new IsoLayerEnum("resourceFields");
    IsoLayerEnum.EXPAND_ARROWS = new IsoLayerEnum("expandArrows");
    IsoLayerEnum.ISO_OBJECTS = new IsoLayerEnum("isoObjects");
    IsoLayerEnum.INTERACTION = new IsoLayerEnum("interaction");
    IsoLayerEnum.FOG = new IsoLayerEnum("fog");
    IsoLayerEnum.EFFECT = new IsoLayerEnum("effect");
    IsoLayerEnum.DEBUG_Z_SORT = new IsoLayerEnum("zSort");
    IsoLayerEnum.DEBUG = new IsoLayerEnum("debug");
    IsoLayerEnum.UNKNOWN = new IsoLayerEnum("unknown");
  };
  return IsoLayerEnum;
}(require("./84.js").CastleEnum);
exports.IsoLayerEnum = a;
a.__initialize_static_members();