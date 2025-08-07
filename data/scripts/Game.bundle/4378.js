Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function ArmorerMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ArmorerMerchantScrollItem, e);
  Object.defineProperty(ArmorerMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleArmorerEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ArmorerMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.ArmorerMerchantScrollItem = s;
var r = require("./4379.js");
o.classImplementsInterfaces(s, "MovieClip");