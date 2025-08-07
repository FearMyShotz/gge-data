Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IsoStatusIconProgressBarTax() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoStatusIconProgressBarTax, e);
  IsoStatusIconProgressBarTax.prototype.getDispFrame = function () {
    return 5;
  };
  IsoStatusIconProgressBarTax.prototype.getBarText = function () {
    return this.keepBuildingVE.keepBuildingVO.taxInfoVO.taxAmountString;
  };
  IsoStatusIconProgressBarTax.prototype.getBarFillFactor = function () {
    return this.keepBuildingVE.keepBuildingVO.taxCollectProgressAsFactor;
  };
  Object.defineProperty(IsoStatusIconProgressBarTax.prototype, "keepBuildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarTax;
}(require("./694.js").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarTax = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");