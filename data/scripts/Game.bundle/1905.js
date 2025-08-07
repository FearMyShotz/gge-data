Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function FactionArmorerMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(FactionArmorerMerchantScrollItem, e);
  Object.defineProperty(FactionArmorerMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleFactionArmorerEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionArmorerMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.FactionArmorerMerchantScrollItem = s;
var r = require("./1906.js");
o.classImplementsInterfaces(s, "MovieClip");