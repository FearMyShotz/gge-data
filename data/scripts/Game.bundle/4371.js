Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./4372.js");
var l = require("./184.js");
var c = function (e) {
  function ApprenticeSmithEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ApprenticeSmithEventVO, e);
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ApprenticeSmithEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_apprenticeSmith";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, r.CastleApprenticeSmithEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(ApprenticeSmithEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARMORER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ApprenticeSmithEventVO.EVENT_BUILDING_WOD = 1531;
  return ApprenticeSmithEventVO;
}(l.BuyPackagesEventVO);
exports.ApprenticeSmithEventVO = c;
o.classImplementsInterfaces(c, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");