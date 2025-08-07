Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./39.js");
var l = require("./2115.js");
var c = require("./2117.js");
var u = require("./4.js");
var d = require("./204.js");
var p = createjs.Point;
var h = function (e) {
  function CastleFestivalPremiumShopVO() {
    return e.call(this, "festival_title", "festival_decription_short", [_.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_REST], u.CastleModel.premiumData.getFestivalItemBySortorder(0).cost) || this;
  }
  n.__extends(CastleFestivalPremiumShopVO, e);
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isActive", {
    get: function () {
      return u.CastleModel.boostData.festivalVO.isActive;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return o.TimeStringHelper.getCommaTimeStringFromSeconds(u.CastleModel.boostData.festivalVO.remainingTimeInSeconds, s.Localize.text);
      } else {
        return s.Localize.text("variable");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "costString", {
    get: function () {
      if (this.isActive) {
        return s.Localize.number(u.CastleModel.boostData.festivalVO.activeFestivalVO.cost);
      } else {
        return "variable";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "costString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 530;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      if (this.isActive) {
        return u.CastleModel.boostData.festivalVO.activeFestivalVO.cost;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleFestivalPremiumShopVO.prototype.clickedBuyButton = function () {
    if (this.isActive) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(l.CastleExtendFestivalDialog);
    } else {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleFestivalDialog, new c.CastleFestivalDialogProperties());
    }
  };
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "canBeBought", {
    get: function () {
      return u.CastleModel.userData.level >= u.CastleModel.premiumData.getFestivalItemBySortorder(0).minLevel && !this.isActiveFeastOutdated;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      if (this.isActiveFeastOutdated) {
        return {
          t: "dialog_festival_extend_invalid_tooltip",
          p: []
        };
      } else {
        return {
          t: "expansion_higherLevelNeeded",
          p: [u.CastleModel.premiumData.getFestivalItemBySortorder(0).minLevel]
        };
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      if (this.isActive && this.isExtendable) {
        return "festival_extend_tooltip";
      } else {
        return r.ClientConstTextIds.BUY;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isActiveFeastOutdated", {
    get: function () {
      return this.isActive && (u.CastleModel.userData.level < u.CastleModel.boostData.festivalVO.activeFestivalVO.minLevel || u.CastleModel.userData.level > u.CastleModel.boostData.festivalVO.activeFestivalVO.maxLevel);
    },
    enumerable: true,
    configurable: true
  });
  CastleFestivalPremiumShopVO.prototype.createVisualMovieClip = function () {
    return new Library.CastleInterfaceElements_Icons.Icon_Festival();
  };
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "payType", {
    get: function () {
      if (this.isActive && u.CastleModel.boostData.festivalVO.activeFestivalVO.hasC2Costs()) {
        return d.CastlePremiumMarketShopVO.PAYTYPE_C2;
      } else {
        return d.CastlePremiumMarketShopVO.PAYTYPE_FOOD;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "payType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(5, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFestivalPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastlePremiumMarketShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleFestivalPremiumShopVO;
}(d.CastlePremiumMarketShopVO);
exports.CastleFestivalPremiumShopVO = h;
var g = require("./9.js");
var C = require("./2118.js");
var _ = require("./170.js");
a.classImplementsInterfaces(h, "IPremiumMarketShopVO");