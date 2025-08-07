Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./299.js");
var r = function (e) {
  function CollectableItemGloryBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemGloryBoosterVE, e);
  Object.defineProperty(CollectableItemGloryBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_GloryBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGloryBoosterVE.prototype.tooltipCreate = function () {
    var e = this.itemPercentageBoosterVO.percentageBoosterVO.duration / 3600;
    if (e > 1) {
      return {
        t: "fameBoost_package_hours_plural",
        p: [new a.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage), new a.LocalizedNumberVO(e)]
      };
    } else {
      return {
        t: "fameBoost_package_hours_singular",
        p: [new a.LocalizedNumberVO(this.itemPercentageBoosterVO.percentageBoosterVO.percentage)]
      };
    }
  };
  return CollectableItemGloryBoosterVE;
}(s.ACollectableItemPercentageBoosterVE);
exports.CollectableItemGloryBoosterVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");