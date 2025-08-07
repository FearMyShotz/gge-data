Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./51.js");
var r = require("./166.js");
var l = require("./184.js");
var c = function (e) {
  function UnitDealerEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(UnitDealerEventVO, e);
  UnitDealerEventVO.prototype.parseParamObject = function (e) {};
  Object.defineProperty(UnitDealerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return UnitDealerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitDealerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      if (this.eventId == a.EventConst.EVENTTYPE_UNITDEALER_ISLAND) {
        return "dialog_eiland_toolShop_tooltip";
      } else {
        return "eventBuilding_UnitDealer";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitDealerEventVO.prototype, "eventFullsizeCharacterName", {
    get: function () {
      return s.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MARAUDER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.BuyPackagesEventVO.prototype, "eventFullsizeCharacterName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitDealerEventVO.prototype.openMerchantDialog = function (e, t) {
    switch (this.eventId) {
      case a.EventConst.EVENTTYPE_UNITDEALER_ISLAND:
        this.executeOpenDialog(e, u.CastleEilandUnitDealerEventDialog, new r.CastleGenericMerchantDialogProperties(this, t));
        break;
      default:
        this.executeOpenDialog(e, d.CastleUnitDealerEventDialog, new r.CastleGenericMerchantDialogProperties(this, t));
    }
  };
  UnitDealerEventVO.__initialize_static_members = function () {
    UnitDealerEventVO.EVENT_BUILDING_WOD = 290;
  };
  return UnitDealerEventVO;
}(l.BuyPackagesEventVO);
exports.UnitDealerEventVO = c;
var u = require("./2746.js");
var d = require("./1485.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");
c.__initialize_static_members();