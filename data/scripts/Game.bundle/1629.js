Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./17.js");
var o = require("./1630.js");
var a = function () {
  function GachaMilestoneTooltipHelper() {}
  GachaMilestoneTooltipHelper.hideToolTip = function () {
    this.tooltip.hide();
  };
  GachaMilestoneTooltipHelper.showToolTip = function (e, t, i, a = o.GachaMilestoneTooltip.TARGET_DOWN) {
    n.CastleLayoutManager.getInstance().addInteractiveToolTip(GachaMilestoneTooltipHelper.disp);
    this.tooltip.show(e, t, i, a);
  };
  Object.defineProperty(GachaMilestoneTooltipHelper, "disp", {
    get: function () {
      return GachaMilestoneTooltipHelper.tooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaMilestoneTooltipHelper, "tooltip", {
    get: function () {
      GachaMilestoneTooltipHelper._tooltip ||= new o.GachaMilestoneTooltip();
      return GachaMilestoneTooltipHelper._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  GachaMilestoneTooltipHelper.destroy = function () {
    GachaMilestoneTooltipHelper._tooltip.destroy();
    GachaMilestoneTooltipHelper._tooltip = null;
  };
  return GachaMilestoneTooltipHelper;
}();
exports.GachaMilestoneTooltipHelper = a;