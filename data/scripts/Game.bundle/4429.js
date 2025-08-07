Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function EquipmentMerchantEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(EquipmentMerchantEventVO, e);
  Object.defineProperty(EquipmentMerchantEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return EquipmentMerchantEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentMerchantEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_EquipmentMerchant";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentMerchantEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleEquipmentMerchantEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(EquipmentMerchantEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_EQUIPMENT_MERCHANT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentMerchantEventVO.__initialize_static_members = function () {
    EquipmentMerchantEventVO.EVENT_BUILDING_WOD = 277;
  };
  return EquipmentMerchantEventVO;
}(r.BuyPackagesEventVO);
exports.EquipmentMerchantEventVO = l;
var c = require("./4430.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();