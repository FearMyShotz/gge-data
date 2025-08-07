Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./123.js");
var s = require("./173.js");
var r = createjs.Point;
var l = function (e) {
  function PlayerGiftMerchantScrollItem(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(PlayerGiftMerchantScrollItem, e);
  Object.defineProperty(PlayerGiftMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return c.CastlePlayerGiftMerchantBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftMerchantScrollItem.prototype, "rewardIconSize", {
    get: function () {
      return PlayerGiftMerchantScrollItem.ICON_SIZE_GIFT_REWARD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMerchantScrollItem.prototype, "rewardIconSize").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftMerchantScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    if (this.packageScrollItemVO) {
      var t = this.packageVO.packageType == a.ClientConstPackages.PACKAGE_TYPE_ITEM || this.packageVO.packageType == a.ClientConstPackages.PACKAGE_TYPE_GEM || this.packageVO.packageType == a.ClientConstPackages.PACKAGE_TYPE_HERO;
      this.disp.mc_ring.visible = !t;
    }
  };
  PlayerGiftMerchantScrollItem.__initialize_static_members = function () {
    PlayerGiftMerchantScrollItem.ICON_SIZE_GIFT_REWARD = new r(46, 46);
  };
  return PlayerGiftMerchantScrollItem;
}(s.AMerchantScrollItem);
exports.PlayerGiftMerchantScrollItem = l;
var c = require("./1342.js");
o.classImplementsInterfaces(l, "MovieClip");
l.__initialize_static_members();