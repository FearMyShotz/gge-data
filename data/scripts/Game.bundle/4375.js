Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./51.js");
var r = require("./166.js");
var l = require("./1783.js");
var c = require("./4.js");
var u = require("./184.js");
var d = function (e) {
  function ApprenticeTokenVendorEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ApprenticeTokenVendorEventVO, e);
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ApprenticeTokenVendorEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_apprenticeSmith";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, l.ApprenticeSmithEventDialog, new r.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return s.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.prototype.getEventPackagesByCurrencyType = function (e) {
    var t = this.getVisiblePackages(c.CastleModel.userData.userLevel, c.CastleModel.userData.userLegendLevel, a.WorldConst.AREA_TYPE_CASTLE);
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined && s.getXmlCosts().containsTypeVO(e)) {
          i.push(s);
        }
      }
    }
    return i;
  };
  Object.defineProperty(ApprenticeTokenVendorEventVO.prototype, "isVisible", {
    get: function () {
      return this.getVisiblePackages(c.CastleModel.userData.userLevel, c.CastleModel.userData.userLegendLevel, c.CastleModel.areaData.activeAreaInfo.areaType).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeTokenVendorEventVO.EVENT_BUILDING_WOD = 1531;
  return ApprenticeTokenVendorEventVO;
}(u.BuyPackagesEventVO);
exports.ApprenticeTokenVendorEventVO = d;
o.classImplementsInterfaces(d, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");