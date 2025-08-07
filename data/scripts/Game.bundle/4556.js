Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function WishingWellCoinVendorEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(WishingWellCoinVendorEventVO, e);
  Object.defineProperty(WishingWellCoinVendorEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return WishingWellCoinVendorEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WishingWellCoinVendorEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_wishCoinTrader";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WishingWellCoinVendorEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleWishingWellCoinVendorEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(WishingWellCoinVendorEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WishingWellCoinVendorEventVO.prototype, "primaryCurrency", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "primaryCurrency").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WishingWellCoinVendorEventVO.__initialize_static_members = function () {
    WishingWellCoinVendorEventVO.EVENT_BUILDING_WOD = 1544;
  };
  return WishingWellCoinVendorEventVO;
}(r.BuyPackagesEventVO);
exports.WishingWellCoinVendorEventVO = l;
var c = require("./4557.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();