Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./51.js");
var l = require("./106.js");
var c = require("./4.js");
var u = require("./240.js");
var d = createjs.MovieClip;
var p = createjs.Point;
var h = function (e) {
  function CastleCaravanOverloaderPremiumShopVO() {
    return e.call(this, "dialog_marketCaravanCapacity_title", "dialog_marketCaravanCapacity_copy", 1, "caravanGuy") || this;
  }
  n.__extends(CastleCaravanOverloaderPremiumShopVO, e);
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return c.CastleModel.boostData.caravanBoostAndCosts.get(this.level)[0];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValueDifference", {
    get: function () {
      return this.bonusValueForNextLevel - this.bonusValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      if (c.CastleModel.boostData.getCaravanBoosterMaxLevel() >= this.level + 1) {
        return c.CastleModel.boostData.caravanBoostAndCosts.get(this.level + 1)[0];
      } else {
        return -1;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValueForNextLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "singleCarriageCapacityForCurrentLevel", {
    get: function () {
      return c.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(c.CastleModel.boostData.caravanOverloaderVO.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "singleCarriageCapacityForNextLevel", {
    get: function () {
      if (c.CastleModel.boostData.getCaravanBoosterMaxLevel() >= c.CastleModel.boostData.caravanOverloaderVO.level + 1) {
        return c.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(c.CastleModel.boostData.caravanOverloaderVO.level + 1);
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusText", {
    get: function () {
      return [c.CastleModel.boostData.getResourcesTransportablePerCarriageIgnoringResearch(c.CastleModel.boostData.caravanOverloaderVO.level).toString(), null];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [o.GenericTextIds.VALUE_NOMINAL_ADD, [this.bonusValueDifference]];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusTextForNextLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 10;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleCaravanOverloaderPremiumShopVO.prototype.clickedBuyButton = function () {
    g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleBuyCaravanOverloaderDialog);
  };
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 9;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 1;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "baseIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new p(-3, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleCaravanOverloaderPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new d();
    var t = l.CharacterHelper.createCharacterBig(r.ClientConstCharacter.CHAR_ID_MERCHANT, e, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.addChild(t);
    return e;
  };
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "bonusToolTip", {
    get: function () {
      return "dialog_currentCapacity_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return {
        t: "dialog_marketCapacityIncrease_tooltip",
        p: [this.bonusValueDifference]
      };
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "nextBonusToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isMaxLevel", {
    get: function () {
      return c.CastleModel.boostData.getCaravanBoosterMaxLevel() == this.level;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return c.CastleModel.costsData.getFinalCostsC2(c.CastleModel.boostData.getCostsForNextCaravanLevel(this.level), this.hasRebuyDiscount, c.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return c.CastleModel.boostData.getCaravanBoosterMaxLevel() > this.level;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "id", {
    get: function () {
      return s.BoosterConst.CARAVAN_OVERLOADER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      return c.CastleModel.boostData.getCostsForNextCaravanLevel(this.level);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "baseCosts").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCaravanOverloaderPremiumShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleCaravanOverloaderPremiumShopVO;
}(u.CastleHeroDefaultBoosterShopVO);
exports.CastleCaravanOverloaderPremiumShopVO = h;
var g = require("./9.js");
var C = require("./1348.js");
a.classImplementsInterfaces(h, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");