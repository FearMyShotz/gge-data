Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function MerchantEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(MerchantEventVO, e);
  Object.defineProperty(MerchantEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return MerchantEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MerchantEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Merchant";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MerchantEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MerchantEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleResourceMerchantEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  MerchantEventVO.__initialize_static_members = function () {
    MerchantEventVO.EVENT_BUILDING_WOD = 281;
  };
  return MerchantEventVO;
}(r.BuyPackagesEventVO);
exports.MerchantEventVO = l;
var c = require("./697.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();