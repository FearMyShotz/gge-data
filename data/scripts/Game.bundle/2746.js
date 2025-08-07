Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleEilandUnitDealerEventScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleEilandUnitDealerEventScrollItem, e);
  Object.defineProperty(CastleEilandUnitDealerEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleEilandUnitDealerEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleEilandUnitDealerEventScrollItem;
}(a.AMerchantScrollItem);
exports.CastleEilandUnitDealerEventScrollItem = s;
var r = require("./2747.js");
o.classImplementsInterfaces(s, "MovieClip");