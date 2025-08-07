Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleResourceMerchantEventScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleResourceMerchantEventScrollItem, e);
  Object.defineProperty(CastleResourceMerchantEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleResourceMerchantEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleResourceMerchantEventScrollItem;
}(a.AMerchantScrollItem);
exports.CastleResourceMerchantEventScrollItem = s;
var r = require("./879.js");
o.classImplementsInterfaces(s, "MovieClip");