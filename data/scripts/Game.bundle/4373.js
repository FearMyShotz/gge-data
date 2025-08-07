Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = require("./4374.js");
var r = function (e) {
  function ApprenticeSmithScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(ApprenticeSmithScrollItem, e);
  Object.defineProperty(ApprenticeSmithScrollItem.prototype, "dialogKey", {
    get: function () {
      return s.CastleApprenticeSmithEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ApprenticeSmithScrollItem;
}(a.AMerchantScrollItem);
exports.ApprenticeSmithScrollItem = r;
o.classImplementsInterfaces(r, "MovieClip");