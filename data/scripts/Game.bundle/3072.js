Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./32.js");
var s = require("./122.js");
var r = require("./62.js");
var l = function (e) {
  function OakOfWisdomBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OakOfWisdomBuildingVE, e);
  OakOfWisdomBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
  };
  OakOfWisdomBuildingVE.prototype.removeEventListener = function () {
    c.CastleComponent.controller.removeEventListener(a.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    e.prototype.removeEventListener.call(this);
  };
  Object.defineProperty(OakOfWisdomBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return u.OakOfWisdomBuildingVO.xpBoosterIconClass;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  OakOfWisdomBuildingVE.prototype.onLevelUp = function (e) {
    if (this.isoRenderer.strategies.currentStrategy.isActive(s.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW)) {
      this.updateDisp();
    }
  };
  return OakOfWisdomBuildingVE;
}(r.ABasicBuildingVE);
exports.OakOfWisdomBuildingVE = l;
var c = require("./14.js");
var u = require("./1547.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");