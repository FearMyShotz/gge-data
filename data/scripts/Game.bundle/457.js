Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./220.js");
var s = require("./4.js");
var r = function (e) {
  function AProductionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AProductionBuildingVE, e);
  AProductionBuildingVE.prototype.addEventListener = function () {
    if (this.productionBuildingVO.isBoostableBuilding) {
      s.CastleModel.boostData.addEventListener(a.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterUpdate));
    }
    e.prototype.addEventListener.call(this);
  };
  AProductionBuildingVE.prototype.removeEventListener = function () {
    if (this.productionBuildingVO.isBoostableBuilding) {
      s.CastleModel.boostData.removeEventListener(a.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterUpdate));
    }
    e.prototype.removeEventListener.call(this);
  };
  AProductionBuildingVE.prototype.onBoosterUpdate = function (e) {
    this.updateStatusIcon();
  };
  Object.defineProperty(AProductionBuildingVE.prototype, "productionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AProductionBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.AProductionBuildingVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");