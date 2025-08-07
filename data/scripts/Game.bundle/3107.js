Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1584.js");
var s = function (e) {
  function RubymineBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RubymineBuildingVE, e);
  Object.defineProperty(RubymineBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_C2_Cluster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMineBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RubymineBuildingVE.prototype, "statusIconFull", {
    get: function () {
      return r.IsoStatusIconEnum.RUBYMINE_COLLECTABLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMineBuildingVE.prototype, "statusIconFull").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return RubymineBuildingVE;
}(a.AMineBuildingVE);
exports.RubymineBuildingVE = s;
var r = require("./177.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");