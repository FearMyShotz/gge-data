Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function MaterialBagTooltipHelper() {}
  MaterialBagTooltipHelper.hideToolTip = function () {
    MaterialBagTooltipHelper._materialBagToolTip.disp.visible = false;
  };
  MaterialBagTooltipHelper.showToolTip = function (e, t, i = 1) {
    MaterialBagTooltipHelper._materialBagToolTip.initToolTip(t, i);
    var o = e.localToGlobal(new n(0, 0));
    MaterialBagTooltipHelper._materialBagToolTip.disp.x = o.x;
    MaterialBagTooltipHelper._materialBagToolTip.disp.y = Math.max(MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height, o.y) - e.height / 2;
    if (MaterialBagTooltipHelper._materialBagToolTip.disp.y - MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height < 0) {
      MaterialBagTooltipHelper._materialBagToolTip.disp.y = o.y + e.height / 2 + MaterialBagTooltipHelper._materialBagToolTip.disp.bg.height;
    }
    MaterialBagTooltipHelper._materialBagToolTip.disp.visible = true;
  };
  Object.defineProperty(MaterialBagTooltipHelper, "disp", {
    get: function () {
      return MaterialBagTooltipHelper._materialBagToolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  MaterialBagTooltipHelper.__initialize_static_members = function () {
    MaterialBagTooltipHelper._materialBagToolTip = new a.MaterialBagTooltip();
  };
  return MaterialBagTooltipHelper;
}();
exports.MaterialBagTooltipHelper = o;
var a = require("./3292.js");
o.__initialize_static_members();