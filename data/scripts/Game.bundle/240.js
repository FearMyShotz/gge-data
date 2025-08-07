Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./30.js");
var c = require("./3359.js");
var u = function (e) {
  function CastleHeroDefaultBoosterShopVO(t, i, n, o) {
    var a = this;
    a._endTime = NaN;
    a._isPermanentBooster = false;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(CastleHeroDefaultBoosterShopVO, e);
  CastleHeroDefaultBoosterShopVO.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._endTime = 0;
    this._isPermanentBooster = false;
  };
  CastleHeroDefaultBoosterShopVO.prototype.parseServerInfo = function (e) {
    var t = s.int(e.RT);
    if (t == a.BoosterConst.PERMANENT_BOOSTER_DURATION) {
      this._isPermanentBooster = true;
    } else {
      this._endTime = Math.max(0, l.CachedTimer.getCachedTimer() + t * r.ClientConstTime.SEC_2_MILLISEC);
    }
    this.level = e.L;
    if (typeof e.PC == "number") {
      this._continuousPurchaseCount = e.PC;
    }
  };
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      return Math.max(-1, (this._endTime - l.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "endTime", {
    get: function () {
      return this._endTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isActive", {
    get: function () {
      if (this.isPermanentBooster) {
        return this.level > 0;
      } else {
        return this.remainingTimeInSeconds >= 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleHeroBoosterShopVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isPermanentBooster", {
    get: function () {
      return this._isPermanentBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleHeroBoosterShopVO.prototype, "isPermanentBooster").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHeroDefaultBoosterShopVO.prototype, "isMaxLevel", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return CastleHeroDefaultBoosterShopVO;
}(c.CastleHeroBoosterShopVO);
exports.CastleHeroDefaultBoosterShopVO = u;
o.classImplementsInterfaces(u, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");