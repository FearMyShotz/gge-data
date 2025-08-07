Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function AHunterBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AHunterBuildingVE, e);
  Object.defineProperty(AHunterBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Hunter;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AHunterBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonHunter());
    return t;
  };
  return AHunterBuildingVE;
}(a.ABasicBuildingVE);
exports.AHunterBuildingVE = s;
var r = require("./3041.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");