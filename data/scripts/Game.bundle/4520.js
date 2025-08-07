Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./51.js");
var s = require("./166.js");
var r = require("./184.js");
var l = function (e) {
  function SamuraiHunterEventVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).eventOverviewConfig.showRemainingEventDuration = true;
    return t;
  }
  n.__extends(SamuraiHunterEventVO, e);
  Object.defineProperty(SamuraiHunterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return SamuraiHunterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiHunterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_samuraiToolVendor";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiHunterEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, c.CastleSamuraiHunterEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(SamuraiHunterEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return a.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SAMURAI_HUNTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SamuraiHunterEventVO.__initialize_static_members = function () {
    SamuraiHunterEventVO.EVENT_BUILDING_WOD = 636;
  };
  return SamuraiHunterEventVO;
}(r.BuyPackagesEventVO);
exports.SamuraiHunterEventVO = l;
var c = require("./4521.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
l.__initialize_static_members();