Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./303.js");
var s = function (e) {
  function FactionDecoBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionDecoBuildingVE, e);
  Object.defineProperty(FactionDecoBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionDecoBuildingVE;
}(a.AFactionBuildingVE);
exports.FactionDecoBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");