Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleThornkingMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleThornkingMerchantScrollItem, e);
  Object.defineProperty(CastleThornkingMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleThornkingEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleThornkingMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.CastleThornkingMerchantScrollItem = s;
var r = require("./4547.js");
o.classImplementsInterfaces(s, "MovieClip");