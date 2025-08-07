Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function IsoStatusIconProgressBarMine() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoStatusIconProgressBarMine, e);
  IsoStatusIconProgressBarMine.prototype.getBarText = function () {
    return o.TimeStringHelper.getShortTimeStringBySeconds(this.mineBuildingVE.mineBuildingVO.getTimeLeftForCollect());
  };
  IsoStatusIconProgressBarMine.prototype.getBarFillFactor = function () {
    return this.mineBuildingVE.mineBuildingVO.getPercentRechargingCompletion();
  };
  IsoStatusIconProgressBarMine.prototype.getDispFrame = function () {
    return 5;
  };
  Object.defineProperty(IsoStatusIconProgressBarMine.prototype, "mineBuildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarMine;
}(require("./696.js").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarMine = s;
a.classImplementsInterfaces(s, "ICollectableRendererList");