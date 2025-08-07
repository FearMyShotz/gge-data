Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TradeDistrictBuildingVE() {
    return e.call(this) || this;
  }
  n.__extends(TradeDistrictBuildingVE, e);
  Object.defineProperty(TradeDistrictBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_TradingDistrict;
    },
    enumerable: true,
    configurable: true
  });
  return TradeDistrictBuildingVE;
}(require("./541.js").ADistrictBuildingVE);
exports.TradeDistrictBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");