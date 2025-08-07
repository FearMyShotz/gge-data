Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./17.js");
var o = require("./3313.js");
var a = function () {
  function CollectableListTooltipHelper() {}
  CollectableListTooltipHelper.hideToolTip = function () {
    this.tooltip.hide();
  };
  CollectableListTooltipHelper.showToolTip = function (e, t, i) {
    n.CastleLayoutManager.getInstance().addInteractiveToolTip(CollectableListTooltipHelper.disp);
    this.tooltip.show(e, [t], [i]);
  };
  CollectableListTooltipHelper.showToolTipMultiple = function (e, t, i) {
    n.CastleLayoutManager.getInstance().addInteractiveToolTip(CollectableListTooltipHelper.disp);
    this.tooltip.show(e, t, i);
  };
  Object.defineProperty(CollectableListTooltipHelper, "disp", {
    get: function () {
      return CollectableListTooltipHelper.tooltip.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableListTooltipHelper, "tooltip", {
    get: function () {
      CollectableListTooltipHelper._tooltip ||= new o.CollectableListTooltip();
      return CollectableListTooltipHelper._tooltip;
    },
    enumerable: true,
    configurable: true
  });
  CollectableListTooltipHelper.destroy = function () {
    CollectableListTooltipHelper._tooltip.destroy();
    CollectableListTooltipHelper._tooltip = null;
  };
  return CollectableListTooltipHelper;
}();
exports.CollectableListTooltipHelper = a;