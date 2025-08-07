Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoObjectLayerEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoObjectLayerEnum, e);
  IsoObjectLayerEnum.__initialize_static_members = function () {
    IsoObjectLayerEnum.FLOOR = new IsoObjectLayerEnum("floor");
    IsoObjectLayerEnum.BUILDING_GROUND = new IsoObjectLayerEnum("buildingGround");
    IsoObjectLayerEnum.DISP = new IsoObjectLayerEnum("disp");
    IsoObjectLayerEnum.ADDITIONAL_CLIPS = new IsoObjectLayerEnum("additionalClips");
    IsoObjectLayerEnum.STATUS_ICONS = new IsoObjectLayerEnum("statusIcons");
    IsoObjectLayerEnum.RESOURCES = new IsoObjectLayerEnum("resources");
    IsoObjectLayerEnum.DEBUG_CROSS = new IsoObjectLayerEnum("debugCross");
  };
  return IsoObjectLayerEnum;
}(require("./84.js").CastleEnum);
exports.IsoObjectLayerEnum = a;
a.__initialize_static_members();