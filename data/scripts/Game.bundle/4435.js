Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./166.js");
var s = require("./772.js");
var r = function (e) {
  function FactionHunterEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FactionHunterEventVO, e);
  Object.defineProperty(FactionHunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionHunterEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.UnitDealerEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FactionInvasionHunter";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.UnitDealerEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionHunterEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_berimond_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.UnitDealerEventVO.prototype, "primesaleDescriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionHunterEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, l.FactionHunterEventDialog, new a.CastleGenericMerchantDialogProperties(this, t));
  };
  FactionHunterEventVO.__initialize_static_members = function () {
    FactionHunterEventVO.EVENT_BUILDING_WOD_0 = 761;
  };
  return FactionHunterEventVO;
}(s.UnitDealerEventVO);
exports.FactionHunterEventVO = r;
var l = require("./4436.js");
o.classImplementsInterfaces(r, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
r.__initialize_static_members();