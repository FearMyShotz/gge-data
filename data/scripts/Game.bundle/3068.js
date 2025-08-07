Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function MilitarycampBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MilitarycampBuildingVE, e);
  Object.defineProperty(MilitarycampBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Knights;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MilitarycampBuildingVE;
}(a.ABasicBuildingVE);
exports.MilitarycampBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");