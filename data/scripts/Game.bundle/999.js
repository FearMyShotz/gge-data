Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./166.js");
var r = require("./4.js");
var l = require("./774.js");
var c = function (e) {
  function PrivateUnitDealerEventVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PrivateUnitDealerEventVO, e);
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "eventPackages", {
    get: function () {
      return this.treasureMapVO.eventPackages;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "treasureMapVO", {
    get: function () {
      return r.CastleModel.treasureMapData.getTreasureMapByID(this._mapIDs[0]);
    },
    enumerable: true,
    configurable: true
  });
  PrivateUnitDealerEventVO.prototype.openMerchantDialog = function (e, t) {
    this.executeOpenDialog(e, u.CastlePrivateUnitDealerEventDialog, new s.CastleGenericMerchantDialogProperties(this, t));
  };
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      return this.treasureMapVO.remainingMapTimeInSeconds;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.UnitDealerEventVO.prototype, "remainingEventTimeInSeconds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateUnitDealerEventVO.prototype, "buyType", {
    get: function () {
      return a.PackageConst.BUY_TYPE_CRUSADEMAP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.UnitDealerEventVO.prototype, "buyType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PrivateUnitDealerEventVO;
}(l.UnitDealerEventVO);
exports.PrivateUnitDealerEventVO = c;
var u = require("./2751.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IDiscountableEventPackagesVO", "IEventPackagesVO");