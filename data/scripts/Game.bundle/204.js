Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./39.js");
var l = require("./41.js");
var c = require("./4.js");
var u = createjs.MovieClip;
var d = createjs.Point;
var p = function () {
  function CastlePremiumMarketShopVO(e, t, i, n) {
    this.MAX_PREMIUM_SHOP_OVERSEER_ICON_WIDTH = 211;
    this.MAX_PREMIUM_SHOP_OVERSEER_ICON_HEIGHT = 179;
    this._costs = 0;
    this.shopTypes = [];
    this._continuousPurchaseCount = 0;
    this._titleStringID = e;
    this._copyString = t;
    this.shopTypes = i;
    this._costs = n;
  }
  CastlePremiumMarketShopVO.prototype.reset = function () {
    this._continuousPurchaseCount = 0;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "title", {
    get: function () {
      return s.Localize.text(this._titleStringID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "copy", {
    get: function () {
      return s.Localize.text(this._copyString);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "costString", {
    get: function () {
      switch (this.payType) {
        case CastlePremiumMarketShopVO.PAYTYPE_C2:
          return String(this.finalCostsC2);
        case CastlePremiumMarketShopVO.PAYTYPE_C1:
          return String(this.finalCostsC1);
        case CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          return String(this.baseCosts);
        case CastlePremiumMarketShopVO.PAYTYPE_NONE:
          return "";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "costsToolTip", {
    get: function () {
      switch (this.payType) {
        case CastlePremiumMarketShopVO.PAYTYPE_C2:
          return r.ClientConstTextIds.C2;
        case CastlePremiumMarketShopVO.PAYTYPE_C1:
          return "cash";
        case CastlePremiumMarketShopVO.PAYTYPE_FOOD:
          return "food";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "finalCostsC1", {
    get: function () {
      return c.CastleModel.costsData.getFinalCostsC1(this.baseCosts);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "finalCostsC2", {
    get: function () {
      return c.CastleModel.costsData.getFinalCostsC2(this.baseCosts, this.hasRebuyDiscount);
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.isType = function (e) {
    for (var t = 0; t < this.shopTypes.length; t++) {
      if (this.shopTypes[t] == e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "listSortPriority", {
    get: function () {
      return 50;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isTeasered", {
    get: function () {
      return this.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "duration", {
    get: function () {
      return "-";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusText", {
    get: function () {
      return [n.GenericTextIds.VALUE_PERCENTAGE, this.bonusValue];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusValue", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusValueForNextLevel", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusTextForNextLevel", {
    get: function () {
      return [n.GenericTextIds.VALUE_NOMINAL_ADD, this.bonusValueForNextLevel];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualBonus", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenNotActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualTimeWhenActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasVisualEffectWhenActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.clickedBuyButton = function () {};
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "baseIconFrame", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "newVisualMovieClip", {
    get: function () {
      return this.createVisualMovieClip();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "visualMovieClip", {
    get: function () {
      this._iconMC ||= this.newVisualMovieClip;
      this.applyFilter();
      this.resizeMc(this._iconMC);
      return this._iconMC;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    return this.createVisualMovieClip();
  };
  CastlePremiumMarketShopVO.prototype.resizeMc = function (e) {
    if (e) {
      l.CastleMovieClipHelper.uncacheSafe(e);
      e.scaleX = e.scaleY = 1;
      var t = e.getBounds(null);
      var i = Math.min(1, CastlePremiumMarketShopVO.MAX_PREMIUM_SHOP_ICON_HEIGHT / t.height);
      var n = -(t.width * i / 2 + t.left * i);
      var o = -(t.height * i / 2 + t.top * i);
      l.CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(e, Math.min(1, i));
      e.x = n;
      e.y = o;
      e.y += this.offsetIcon.y;
      e.x += this.offsetIcon.x;
    }
  };
  CastlePremiumMarketShopVO.prototype.onLoadedIcon = function (e) {
    if (this._iconMC) {
      this._iconMC.visible = true;
      this.applyFilter();
      this.resizeMc(this._iconMC);
    }
  };
  CastlePremiumMarketShopVO.prototype.createVisualMovieClip = function () {
    return new u();
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "offsetIcon", {
    get: function () {
      return new d(0, 0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "timeStringTooltip", {
    get: function () {
      return s.Localize.text("runTime");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "bonusToolTip", {
    get: function () {
      return s.Localize.text("effect");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "nextBonusToolTip", {
    get: function () {
      return s.Localize.text("effect");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isLimited", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "canBeBought", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "payType", {
    get: function () {
      return CastlePremiumMarketShopVO.PAYTYPE_C2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "cantBeBoughtButtonToolTip", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.isInShopCategory = function (e) {
    if (this.shopTypes != null) {
      for (var t = 0, i = this.shopTypes; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n == e) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return this._continuousPurchaseCount >= a.BoosterConst.MIN_REBUY_FOR_DISCOUNT && this.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isExtendable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "buttonBuyToolTipEnabled", {
    get: function () {
      return r.ClientConstTextIds.BUY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "baseCosts", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePremiumMarketShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastlePremiumMarketShopVO.prototype.applyFilter = function () {};
  CastlePremiumMarketShopVO.PAYTYPE_NONE = 0;
  CastlePremiumMarketShopVO.PAYTYPE_C1 = 1;
  CastlePremiumMarketShopVO.PAYTYPE_C2 = 2;
  CastlePremiumMarketShopVO.PAYTYPE_FOOD = 3;
  CastlePremiumMarketShopVO.MAX_PREMIUM_SHOP_ICON_HEIGHT = 50;
  CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH = 256;
  CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT = 172;
  return CastlePremiumMarketShopVO;
}();
exports.CastlePremiumMarketShopVO = p;
var h = require("./17.js");
o.classImplementsInterfaces(p, "IPremiumMarketShopVO");