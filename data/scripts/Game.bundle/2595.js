Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./622.js");
var u = require("./760.js");
var d = require("./4.js");
var p = require("./204.js");
var h = createjs.Point;
var g = function (e) {
  function CastleToolSlotPremiumShopVO() {
    return e.call(this, "toolslot_title", "toolslot_copy_short", [m.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], s.UnitProductionConst.UNLOCK_C2) || this;
  }
  n.__extends(CastleToolSlotPremiumShopVO, e);
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "title", {
    get: function () {
      var e = l.int(d.CastleModel.boostData.boughtToolSlots + 1 + d.CastleModel.boostData.permanentToolSlots);
      return r.Localize.text(this._titleStringID, [e, s.UnitProductionConst.MAX_SLOTS]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "title").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 50;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return d.CastleModel.boostData.boughtToolSlots + d.CastleModel.boostData.permanentToolSlots < s.UnitProductionConst.MAX_SLOTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "duration", {
    get: function () {
      return o.TimeStringHelper.getTimeToString(s.UnitProductionConst.UNLOCK_DURATION, o.TimeStringHelper.ONE_TIME_FORMAT, r.Localize.text);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleToolSlotPremiumShopVO.prototype.clickedBuyButton = function () {
    var e = l.int(s.UnitProductionConst.UNLOCK_DURATION);
    var t = o.TimeStringHelper.getTimeToString(e, o.TimeStringHelper.TWO_TIME_FORMAT, r.Localize.text);
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleBuySlotDialog, new u.CastleCostInfoDialogProperties(d.CastleModel.costsData.getFinalCostsC2(s.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.buySlot), r.Localize.text("dialog_buyslotTool_copy"), t, r.Localize.text("help_recuit_slot")));
  };
  CastleToolSlotPremiumShopVO.prototype.buySlot = function (e = null) {
    d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SUnlockPackageSlotVO(1));
  };
  CastleToolSlotPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_AddToolSlot();
  };
  Object.defineProperty(CastleToolSlotPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new h(5, -3);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleToolSlotPremiumShopVO;
}(p.CastlePremiumMarketShopVO);
exports.CastleToolSlotPremiumShopVO = g;
var C = require("./9.js");
var _ = require("./977.js");
var m = require("./170.js");
a.classImplementsInterfaces(g, "IPremiumMarketShopVO");