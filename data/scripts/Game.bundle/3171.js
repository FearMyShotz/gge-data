Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function AquamarineShopScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AquamarineShopScrollItem, e);
  Object.defineProperty(AquamarineShopScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleAquamarineShopBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AquamarineShopScrollItem;
}(a.AMerchantScrollItem);
exports.AquamarineShopScrollItem = s;
var r = require("./3172.js");
o.classImplementsInterfaces(s, "MovieClip");