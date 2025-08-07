Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1905.js");
var s = function (e) {
  function FactionHunterMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(FactionHunterMerchantScrollItem, e);
  Object.defineProperty(FactionHunterMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleFactionHunterEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.FactionArmorerMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionHunterMerchantScrollItem;
}(a.FactionArmorerMerchantScrollItem);
exports.FactionHunterMerchantScrollItem = s;
var r = require("./4438.js");
o.classImplementsInterfaces(s, "MovieClip");