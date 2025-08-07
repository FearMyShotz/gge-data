Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./240.js");
var l = function (e) {
  function AllianceCoinBoosterShopVO() {
    var t = this;
    t._bonusPercentage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, "", "", 0, "") || this;
  }
  n.__extends(AllianceCoinBoosterShopVO, e);
  AllianceCoinBoosterShopVO.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._bonusPercentage = 0;
  };
  AllianceCoinBoosterShopVO.prototype.parseServerInfo = function (t) {
    e.prototype.parseServerInfo.call(this, t);
    this._bonusPercentage = s.int(t.B);
  };
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "id", {
    get: function () {
      return a.BoosterConst.ALLIANCE_COIN_BOOST_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "canBeBought", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "hasRebuyDiscount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceCoinBoosterShopVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceCoinBoosterShopVO;
}(r.CastleHeroDefaultBoosterShopVO);
exports.AllianceCoinBoosterShopVO = l;
o.classImplementsInterfaces(l, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");