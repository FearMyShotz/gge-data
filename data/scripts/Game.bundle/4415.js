Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./1094.js");
var r = require("./1088.js");
var l = require("./4.js");
var c = require("./184.js");
var u = function (e) {
  function DaimyoShopEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DaimyoShopEventVO, e);
  Object.defineProperty(DaimyoShopEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return DaimyoShopEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoShopEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_samuraiInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoShopEventVO.prototype, "isVisible", {
    get: function () {
      var e = l.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION);
      return !e || !e.isActive;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BuyPackagesEventVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoShopEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, s.CastleAllianceSamuraiInvasionDialog, new r.CastleAllianceSamuraiInvasionEventDialogProperties(this, s.CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP));
  };
  DaimyoShopEventVO.EVENT_BUILDING_WOD = 635;
  return DaimyoShopEventVO;
}(c.BuyPackagesEventVO);
exports.DaimyoShopEventVO = u;
o.classImplementsInterfaces(u, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");