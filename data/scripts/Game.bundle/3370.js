Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./24.js");
var c = require("./4.js");
var u = require("./240.js");
var d = createjs.MovieClip;
var p = function (e) {
  function CastleReturnSpeedBoosterPremiumShopVO() {
    return e.call(this, "dialog_marketReturnSpeed_title", "dialog_marketReturnSpeed_desc", 990, "returnSpeedGuy") || this;
  }
  n.__extends(CastleReturnSpeedBoosterPremiumShopVO, e);
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return c.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValueDifference", {
    get: function () {
      return this.bonusValueForNextLevel - this.bonusValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      return c.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level + 1);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusValueForNextLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleReturnSpeedBoosterPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new d();
    var t = new l.CastleGoodgameExternalClip("ReturnSpeedBoosterIcon", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ReturnSpeedBoosterIcon"), null, 0, false);
    e.addChild(t);
    t.doWhenLoaded(this.bindFunction(this.onLoadedIcon));
    return e;
  };
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 80;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 10;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "baseIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusToolTip", {
    get: function () {
      return "dialog_marketCurrentSpeed_tooltip";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return {
        t: "dialog_marketFutureSpeed_tooltip",
        p: [this.bonusValueDifference]
      };
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "nextBonusToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isMaxLevel", {
    get: function () {
      return c.CastleModel.boostData.getReturningSpeedBoosterMaxLevel() == this.level;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      return c.CastleModel.costsData.getFinalCostsC2(c.CastleModel.boostData.getCostsForNextReturningSpeedLevel(this.level), this.hasRebuyDiscount, c.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "baseCosts", {
    get: function () {
      return c.CastleModel.boostData.getCostsForNextReturningSpeedLevel(this.level);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "baseCosts").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isVisible", {
    get: function () {
      return c.CastleModel.boostData.getReturningSpeedBoosterMaxLevel() > this.level;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "id", {
    get: function () {
      return r.BoosterConst.RETURNING_SPEED;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleReturnSpeedBoosterPremiumShopVO.prototype.clickedBuyButton = function () {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleBuyReturnSpeedBoosterDialog);
  };
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [a.GenericTextIds.VALUE_PERCENTAGE, this.bonusValueForNextLevel];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "bonusTextForNextLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "returnSpeedForCurrentLevel", {
    get: function () {
      return c.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "returnSpeedForNextLevel", {
    get: function () {
      return c.CastleModel.boostData.getBoostForReturningSpeedLevel(this.level + 1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleReturnSpeedBoosterPremiumShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleReturnSpeedBoosterPremiumShopVO;
}(u.CastleHeroDefaultBoosterShopVO);
exports.CastleReturnSpeedBoosterPremiumShopVO = p;
var h = require("./9.js");
var g = require("./3371.js");
s.classImplementsInterfaces(p, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");