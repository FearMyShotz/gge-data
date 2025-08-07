Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./51.js");
var u = require("./106.js");
var d = require("./4.js");
var p = require("./240.js");
var h = createjs.MovieClip;
var g = createjs.Point;
var C = function (e) {
  function CastleTaxCollectorPremiumShopVO() {
    var t = e.call(this, "bribe_taxcollector", "bribe_taxcollector_copy", r.BoosterConst.TAX_BRIBE_COSTS_C2, "taxcollector") || this;
    t.shopTypes.push(f.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_EVENT, f.CastlePremiumMarketCollectionData.PREMIUMMARKET_TYPE_HERO);
    return t;
  }
  n.__extends(CastleTaxCollectorPremiumShopVO, e);
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return a.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, l.Localize.text);
      } else {
        return a.TimeStringHelper.getCommaTimeStringFromSeconds(r.BoosterConst.TAX_BRIBE_DURATION, l.Localize.text);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return Math.round(r.BoosterConst.TAX_BRIBE_BOOST * 100);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusText", {
    get: function () {
      return [o.GenericTextIds.VALUE_PERCENTAGE, [this.bonusValue]];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "bonusText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 200;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxCollectorPremiumShopVO.prototype.clickedBuyButton = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleBribeDialog);
  };
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 6;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleTaxCollectorPremiumShopVO.prototype.createVisualMovieClip = function () {
    var e = new h();
    var t = u.CharacterHelper.createCharacterBig(c.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, e, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    t.recycleAsset = false;
    if (!t.isLoaded) {
      e.visible = false;
    }
    e.addChild(t);
    return e;
  };
  CastleTaxCollectorPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var e = new h();
    e.addChild(u.CharacterHelper.createCharacterBig(c.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, e, O.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, O.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return e;
  };
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new g(-5, -5);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "finalCostsC2", {
    get: function () {
      var e = Math.max(d.CastleModel.boostData.premiumAccountVO.isActive ? d.CastleModel.boostData.premiumAccountVO.bribe_C2_Factor : 0, d.CastleModel.boosterSaleData.getDiscount(this.id) * 0.01);
      return d.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount, e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "finalCostsC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTaxCollectorPremiumShopVO.prototype, "id", {
    get: function () {
      return r.BoosterConst.TAX;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleTaxCollectorPremiumShopVO;
}(p.CastleHeroDefaultBoosterShopVO);
exports.CastleTaxCollectorPremiumShopVO = C;
var _ = require("./9.js");
var m = require("./3375.js");
var f = require("./170.js");
var O = require("./204.js");
s.classImplementsInterfaces(C, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");