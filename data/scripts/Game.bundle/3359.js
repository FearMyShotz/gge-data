Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./204.js");
var c = function (e) {
  function CastleHeroBoosterShopVO(t, i, n, o) {
    var a = this;
    a._level = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, i, [u.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO], n) || this)._heroName = o;
    a._level = 0;
    return a;
  }
  n.__extends(CastleHeroBoosterShopVO, e);
  CastleHeroBoosterShopVO.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._level = 0;
  };
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (e) {
      this._level = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "costString", {
    get: function () {
      if (this.isActive) {
        return String(Math.ceil(this.finalCostsC2));
      } else {
        return Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "costString").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "costString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "finalCostsC2", {
    get: function () {
      return r.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount, r.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "finalCostsC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "rebuyDiscount", {
    get: function () {
      return a.BoosterConst.DISCOUNT_FACTOR * 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "rebuyDiscountString", {
    get: function () {
      return String(this.rebuyDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "hasVisualBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "noAvailableOffer";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "id", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "heroName", {
    get: function () {
      return s.Localize.text(this._heroName);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroBoosterShopVO.prototype, "nonLocalizedHeroName", {
    get: function () {
      return this._heroName;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroBoosterShopVO;
}(l.CastlePremiumMarketShopVO);
exports.CastleHeroBoosterShopVO = c;
var u = require("./170.js");
o.classImplementsInterfaces(c, "IPremiumMarketShopVO");