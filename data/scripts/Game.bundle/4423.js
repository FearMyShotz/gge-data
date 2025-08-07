Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./79.js");
var s = function (e) {
  function EquipmentEnhancerEventVO() {
    return e.call(this) || this;
  }
  n.__extends(EquipmentEnhancerEventVO, e);
  Object.defineProperty(EquipmentEnhancerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return EquipmentEnhancerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentEnhancerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Enchanter";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentEnhancerEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, r.CastleEquipmentEnchanterDialog);
  };
  EquipmentEnhancerEventVO.__initialize_static_members = function () {
    EquipmentEnhancerEventVO.EVENT_BUILDING_WOD = 296;
  };
  return EquipmentEnhancerEventVO;
}(a.ASpecialEventVO);
exports.EquipmentEnhancerEventVO = s;
var r = require("./1903.js");
o.classImplementsInterfaces(s, "IEventOverviewable");
s.__initialize_static_members();