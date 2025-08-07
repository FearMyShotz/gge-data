Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = createjs.Point;
var r = function (e) {
  function CastleWishingWellCoinVendorScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleWishingWellCoinVendorScrollItem, e);
  Object.defineProperty(CastleWishingWellCoinVendorScrollItem.prototype, "dialogKey", {
    get: function () {
      return l.CastleWishingWellCoinVendorEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWishingWellCoinVendorScrollItem.prototype, "costIconDimension", {
    get: function () {
      return new s(20, 20);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "costIconDimension").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleWishingWellCoinVendorScrollItem;
}(a.AMerchantScrollItem);
exports.CastleWishingWellCoinVendorScrollItem = r;
var l = require("./4561.js");
o.classImplementsInterfaces(r, "MovieClip");