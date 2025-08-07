Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleUnitDealerEventScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleUnitDealerEventScrollItem, e);
  Object.defineProperty(CastleUnitDealerEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleUnitDealerEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleUnitDealerEventScrollItem;
}(a.AMerchantScrollItem);
exports.CastleUnitDealerEventScrollItem = s;
var r = require("./2750.js");
o.classImplementsInterfaces(s, "MovieClip");