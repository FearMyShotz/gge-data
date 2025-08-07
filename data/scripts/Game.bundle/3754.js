Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleSamuraiInvasionMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSamuraiInvasionMerchantScrollItem, e);
  Object.defineProperty(CastleSamuraiInvasionMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleSamuraiInvasionEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSamuraiInvasionMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.CastleSamuraiInvasionMerchantScrollItem = s;
var r = require("./3755.js");
o.classImplementsInterfaces(s, "MovieClip");