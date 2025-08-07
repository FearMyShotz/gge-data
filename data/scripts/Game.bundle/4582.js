Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./407.js");
var s = function (e) {
  function MarketMapmovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MarketMapmovement, e);
  Object.defineProperty(MarketMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Market_Mapmovement";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ArmyMapmovement.prototype, "baseClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MarketMapmovement.prototype, "arrowColor", {
    get: function () {
      return 15785476;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MarketMapmovement;
}(a.ArmyMapmovement);
exports.MarketMapmovement = s;
o.classImplementsInterfaces(s, "IIngameUICapable", "IWorldmapTooltipData");