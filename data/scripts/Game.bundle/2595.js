Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./621.js");
var u = require("./758.js");
var d = require("./4.js");
var p = require("./204.js");
var h = createjs.Point;
var g = function (e) {
  function CastleUnitSlotPremiumShopVO() {
    return e.call(this, "unitslot_title", "unitslot_copy_short", [m.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], s.UnitProductionConst.UNLOCK_C2) || this;
  }
  n.__extends(CastleUnitSlotPremiumShopVO, e);
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "title", {
    get: function () {
      var e = l.int(d.CastleModel.boostData.boughtUnitSlots + 1 + d.CastleModel.boostData.permanentUnitSlots);
      return r.Localize.text(this._titleStringID, [e, s.UnitProductionConst.MAX_SLOTS]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "title").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 40;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return d.CastleModel.boostData.boughtUnitSlots + d.CastleModel.boostData.permanentUnitSlots < s.UnitProductionConst.MAX_SLOTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "duration", {
    get: function () {
      return o.TimeStringHelper.getTimeToString(s.UnitProductionConst.UNLOCK_DURATION, o.TimeStringHelper.ONE_TIME_FORMAT, r.Localize.text);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitSlotPremiumShopVO.prototype.clickedBuyButton = function () {
    var e = l.int(s.UnitProductionConst.UNLOCK_DURATION);
    var t = o.TimeStringHelper.getTimeToString(e, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text);
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleBuySlotDialog, new u.CastleCostInfoDialogProperties(d.CastleModel.costsData.getFinalCostsC2(s.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.buySlot), r.Localize.text("dialog_buyslotUnit_copy"), t, r.Localize.text("help_recuit_slot")));
  };
  CastleUnitSlotPremiumShopVO.prototype.buySlot = function (e = null) {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SUnlockPackageSlotVO(0));
  };
  CastleUnitSlotPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_AddUnitSlot();
  };
  Object.defineProperty(CastleUnitSlotPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new h(4, -3);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleUnitSlotPremiumShopVO;
}(p.CastlePremiumMarketShopVO);
exports.CastleUnitSlotPremiumShopVO = g;
var C = require("./9.js");
var _ = require("./976.js");
var m = require("./170.js");
a.classImplementsInterfaces(g, "IPremiumMarketShopVO");