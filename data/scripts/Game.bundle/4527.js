Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleSeaQueenMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSeaQueenMerchantScrollItem, e);
  Object.defineProperty(CastleSeaQueenMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleSeaQueenEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSeaQueenMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.CastleSeaQueenMerchantScrollItem = s;
var r = require("./4528.js");
o.classImplementsInterfaces(s, "MovieClip");