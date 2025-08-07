Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./173.js");
var s = function (e) {
  function CastleSamuraiHunterEventScrollItem(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleSamuraiHunterEventScrollItem, e);
  Object.defineProperty(CastleSamuraiHunterEventScrollItem.prototype, "dialogKey", {
    get: function () {
      return r.CastleSamuraiHunterEventBuyDialog;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMerchantScrollItem.prototype, "dialogKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleSamuraiHunterEventScrollItem;
}(a.AMerchantScrollItem);
exports.CastleSamuraiHunterEventScrollItem = s;
var r = require("./4521.js");
o.classImplementsInterfaces(s, "MovieClip");