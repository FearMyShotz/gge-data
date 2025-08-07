Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleUnderworldMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleUnderworldMerchantScrollItem, e);
  Object.defineProperty(CastleUnderworldMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleUnderworldEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleUnderworldMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.CastleUnderworldMerchantScrollItem = s;
var r = require("./1486.js");
o.classImplementsInterfaces(s, "MovieClip");