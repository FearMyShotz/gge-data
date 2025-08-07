Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleNomadHunterEventScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleNomadHunterEventScrollItem, e);
  Object.defineProperty(CastleNomadHunterEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleNomadHunterEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleNomadHunterEventScrollItem;
}(a.AMerchantScrollItem);
exports.CastleNomadHunterEventScrollItem = s;
var r = require("./4483.js");
o.classImplementsInterfaces(s, "MovieClip");