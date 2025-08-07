Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = function (e) {
  function IsoRenderStrategyEnum(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, o.BasicEnum.instantiationKey) || this;
  }
  n.__extends(IsoRenderStrategyEnum, e);
  Object.defineProperty(IsoRenderStrategyEnum, "set_defaultBuildMode", {
    get: function () {
      return [IsoRenderStrategyEnum.BUILD_MODE, IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW];
    },
    enumerable: true,
    configurable: true
  });
  IsoRenderStrategyEnum.__initialize_static_members = function () {
    IsoRenderStrategyEnum.BUILD_MODE = new IsoRenderStrategyEnum("buildMode");
    IsoRenderStrategyEnum.BUILDING_GROUND_VIEW = new IsoRenderStrategyEnum("buildingGroundView");
    IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW = new IsoRenderStrategyEnum("transparentDefenceView");
    IsoRenderStrategyEnum.UPGRADE_VIEW = new IsoRenderStrategyEnum("upgradeView");
  };
  return IsoRenderStrategyEnum;
}(require("./84.js").CastleEnum);
exports.IsoRenderStrategyEnum = a;
a.__initialize_static_members();