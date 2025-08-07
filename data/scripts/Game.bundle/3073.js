Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./457.js");
var s = function (e) {
  function OfficersSchoolBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OfficersSchoolBuildingVE, e);
  OfficersSchoolBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonOfficerSchool());
    return t;
  };
  Object.defineProperty(OfficersSchoolBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return OfficersSchoolBuildingVE;
}(a.AProductionBuildingVE);
exports.OfficersSchoolBuildingVE = s;
var r = require("./3074.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");