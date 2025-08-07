Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function StorehouseBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StorehouseBuildingVE, e);
  Object.defineProperty(StorehouseBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Storage;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StorehouseBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonOverview());
    return t;
  };
  return StorehouseBuildingVE;
}(a.ABasicBuildingVE);
exports.StorehouseBuildingVE = s;
var r = require("./3112.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");