Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function ArmorerEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ArmorerEventVO, e);
  Object.defineProperty(ArmorerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ArmorerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmorerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Armorer";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ArmorerEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleArmorerEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(ArmorerEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ArmorerEventVO.__initialize_static_members = function () {
    ArmorerEventVO.EVENT_BUILDING_WOD = 220;
  };
  return ArmorerEventVO;
}(r.BuyPackagesEventVO);
exports.ArmorerEventVO = l;
var c = require("./4377.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();