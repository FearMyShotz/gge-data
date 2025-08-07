Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./240.js");
var l = function (e) {
  function LongTermPointEventShopVO() {
    var t = this;
    t._bonusPercentage = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, "", "", 0, "") || this;
  }
  n.__extends(LongTermPointEventShopVO, e);
  LongTermPointEventShopVO.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._bonusPercentage = 0;
  };
  LongTermPointEventShopVO.prototype.parseServerInfo = function (t) {
    e.prototype.parseServerInfo.call(this, t);
    this._bonusPercentage = s.int(t.B);
  };
  Object.defineProperty(LongTermPointEventShopVO.prototype, "id", {
    get: function () {
      return a.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "isVisible", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "canBeBought", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "canBeBought").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "hasRebuyDiscount", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "hasRebuyDiscount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "isExtendable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleHeroDefaultBoosterShopVO.prototype, "isExtendable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventShopVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventShopVO;
}(r.CastleHeroDefaultBoosterShopVO);
exports.LongTermPointEventShopVO = l;
o.classImplementsInterfaces(l, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");