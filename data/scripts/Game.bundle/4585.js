Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./407.js");
var r = function (e) {
  function PlaguemonkMapmovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PlaguemonkMapmovement, e);
  PlaguemonkMapmovement.prototype.initVisualRep = function () {
    e.prototype.initVisualRep.call(this);
    var t = this.mapMovementVO.sourceArea.getDisplayObjectClipContainer(false, null);
    this.baseCampLayer.addChild(t.asDisplayObject());
  };
  Object.defineProperty(PlaguemonkMapmovement.prototype, "arrowColor", {
    get: function () {
      switch (this.plaguemonkMapmovementVO.kingdomID) {
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
  Object.defineProperty(PlaguemonkMapmovement.prototype, "baseClipName", {
    get: function () {
      return "Plaguemonk_Mapmovement";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ArmyMapmovement.prototype, "baseClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlaguemonkMapmovement.prototype, "plaguemonkMapmovementVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return PlaguemonkMapmovement;
}(s.ArmyMapmovement);
exports.PlaguemonkMapmovement = r;
o.classImplementsInterfaces(r, "IIngameUICapable", "IWorldmapTooltipData");