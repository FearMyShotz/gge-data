Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function RelicEnchanterBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicEnchanterBuildingVE, e);
  Object.defineProperty(RelicEnchanterBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Relicus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicEnchanterBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonRelicus());
    return t;
  };
  return RelicEnchanterBuildingVE;
}(a.ABasicBuildingVE);
exports.RelicEnchanterBuildingVE = s;
var r = require("./3093.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");