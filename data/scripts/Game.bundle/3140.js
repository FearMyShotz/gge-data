Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function WatchtowerBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WatchtowerBuildingVE, e);
  Object.defineProperty(WatchtowerBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_google;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return WatchtowerBuildingVE;
}(a.ABasicBuildingVE);
exports.WatchtowerBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");