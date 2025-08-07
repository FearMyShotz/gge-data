Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./129.js");
var s = require("./4.js");
var r = require("./62.js");
var l = function (e) {
  function HospitalBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HospitalBuildingVE, e);
  HospitalBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    c.CastleComponent.controller.addEventListener(a.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
  };
  HospitalBuildingVE.prototype.removeEventListener = function () {
    c.CastleComponent.controller.removeEventListener(a.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    e.prototype.removeEventListener.call(this);
  };
  HospitalBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (this.statusIcons.iconList.length <= 0) {
      if (s.CastleModel.militaryData.doWoundedSoldiersExist && this.hospitalVO.hasFreeSlots()) {
        this.statusIcons.addIcon(d.IsoStatusIconEnum.HOSPITAL);
      } else if (!this.hospitalVO.hasFreeSlots() || this.hospitalVO.isReviving() && !s.CastleModel.militaryData.doWoundedSoldiersExist) {
        this.statusIcons.addIcon(d.IsoStatusIconEnum.PRODUCTIVE);
      }
    }
  };
  Object.defineProperty(HospitalBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SurviveBoost;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HospitalBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new u.RingMenuButtonHospital());
    return t;
  };
  HospitalBuildingVE.prototype.onInventoryUpdated = function (e) {
    this.updateStatusIcon();
  };
  Object.defineProperty(HospitalBuildingVE.prototype, "hospitalVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return HospitalBuildingVE;
}(r.ABasicBuildingVE);
exports.HospitalBuildingVE = l;
var c = require("./14.js");
var u = require("./3021.js");
var d = require("./177.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");