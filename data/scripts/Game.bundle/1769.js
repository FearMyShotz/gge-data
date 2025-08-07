Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleNomadInvasionMerchantScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleNomadInvasionMerchantScrollItem, e);
  Object.defineProperty(CastleNomadInvasionMerchantScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleNomadInvasionEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleNomadInvasionMerchantScrollItem;
}(a.AMerchantScrollItem);
exports.CastleNomadInvasionMerchantScrollItem = s;
var r = require("./3716.js");
o.classImplementsInterfaces(s, "MovieClip");