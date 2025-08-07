Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./240.js");
var r = function (e) {
  function CastlePointBoosterShopVO(t) {
    var i = this;
    i._bonusPercentage = 0;
    i._pointBoosterID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, "", "", 0, "") || this)._pointBoosterID = t;
    return i;
  }
  n.__extends(CastlePointBoosterShopVO, e);
  CastlePointBoosterShopVO.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._bonusPercentage = 0;
  };
  CastlePointBoosterShopVO.prototype.parseServerInfo = function (t) {
    e.prototype.parseServerInfo.call(this, t);
    this._bonusPercentage = a.int(t.B);
  };
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "id", {
    get: function () {
      return this._pointBoosterID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "canBeBought", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleHeroDefaultBoosterShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleHeroDefaultBoosterShopVO.prototype, "hasRebuyDiscount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePointBoosterShopVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePointBoosterShopVO;
}(s.CastleHeroDefaultBoosterShopVO);
exports.CastlePointBoosterShopVO = r;
o.classImplementsInterfaces(r, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");