Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./407.js");
var r = function (e) {
  function SpyMapmovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SpyMapmovement, e);
  Object.defineProperty(SpyMapmovement.prototype, "arrowColor", {
    get: function () {
      switch (this.spyMapmovementVO.kingdomID) {
        case a.WorldVolcano.KINGDOM_ID:
          return 12961221;
        default:
          return 4473924;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ArmyMapmovement.prototype, "arrowColor").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Spy_Mapmovement";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ArmyMapmovement.prototype, "baseClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpyMapmovement.prototype, "spyMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return SpyMapmovement;
}(s.ArmyMapmovement);
exports.SpyMapmovement = r;
o.classImplementsInterfaces(r, "IIngameUICapable", "IWorldmapTooltipData");