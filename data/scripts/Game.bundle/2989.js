Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1584.js");
var s = function (e) {
  function CoinmineBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CoinmineBuildingVE, e);
  Object.defineProperty(CoinmineBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Coins_Cluster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMineBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoinmineBuildingVE.prototype, "statusIconFull", {
    get: function () {
      return r.IsoStatusIconEnum.COINMINE_COLLECTABLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMineBuildingVE.prototype, "statusIconFull").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CoinmineBuildingVE;
}(a.AMineBuildingVE);
exports.CoinmineBuildingVE = s;
var r = require("./177.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");