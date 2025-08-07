Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./166.js");
var s = require("./1905.js");
var r = require("./774.js");
var l = function (e) {
  function FactionArmorerEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FactionArmorerEventVO, e);
  Object.defineProperty(FactionArmorerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FactionArmorerEventVO.EVENT_BUILDING_WOD_0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.UnitDealerEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionArmorerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FactionArmorer";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.UnitDealerEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionArmorerEventVO.prototype, "primesaleDescriptionTextID", {
    get: function () {
      return "dialog_primeday_primesale_berimond_description";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.UnitDealerEventVO.prototype, "primesaleDescriptionTextID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionArmorerEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, s.CastleFactionArmorerEventDialog, new a.CastleGenericMerchantDialogProperties(this, t));
  };
  FactionArmorerEventVO.__initialize_static_members = function () {
    FactionArmorerEventVO.EVENT_BUILDING_WOD_0 = 634;
  };
  return FactionArmorerEventVO;
}(r.UnitDealerEventVO);
exports.FactionArmorerEventVO = l;
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();