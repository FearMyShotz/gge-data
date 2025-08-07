Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function NomadHunterEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(NomadHunterEventVO, e);
  Object.defineProperty(NomadHunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return NomadHunterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadHunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_NomadHunter";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NomadHunterEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleNomadHunterEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(NomadHunterEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NomadHunterEventVO.__initialize_static_members = function () {
    NomadHunterEventVO.EVENT_BUILDING_WOD = 298;
  };
  return NomadHunterEventVO;
}(r.BuyPackagesEventVO);
exports.NomadHunterEventVO = l;
var c = require("./4479.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();