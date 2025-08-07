Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function ConstructionItemTooltipHelper() {}
  ConstructionItemTooltipHelper.hideToolTip = function () {
    if (ConstructionItemTooltipHelper.toolTip.disp) {
      ConstructionItemTooltipHelper.toolTip.disp.visible = false;
    }
  };
  ConstructionItemTooltipHelper.showConstructionItemToolTip = function (e, t) {
    ConstructionItemTooltipHelper.toolTip.initToolTipByConstructionItem(t);
    ConstructionItemTooltipHelper.setPosition(e);
  };
  ConstructionItemTooltipHelper.showBlueprintToolTip = function (e, t, i = null) {
    ConstructionItemTooltipHelper.toolTip.initToolTipByBlueprint(t, i);
    ConstructionItemTooltipHelper.setPosition(e);
  };
  ConstructionItemTooltipHelper.setPosition = function (e) {
    var t = e.localToGlobal(new n(0, 0));
    if (t.y - ConstructionItemTooltipHelper.toolTip.disp.bg.height - e.height / 2 > 0) {
      ConstructionItemTooltipHelper.toolTip.disp.x = t.x;
      ConstructionItemTooltipHelper.toolTip.disp.y = Math.max(ConstructionItemTooltipHelper.toolTip.disp.bg.height, t.y) - e.height / 2;
    } else if (t.y + ConstructionItemTooltipHelper.toolTip.disp.bg.height + e.height / 2 < ConstructionItemTooltipHelper.toolTip.disp.stage.stageHeight) {
      ConstructionItemTooltipHelper.toolTip.disp.x = t.x;
      ConstructionItemTooltipHelper.toolTip.disp.y = t.y + ConstructionItemTooltipHelper.toolTip.disp.bg.height + e.height / 2;
    } else if (t.x - ConstructionItemTooltipHelper.toolTip.disp.bg.width - e.width / 2 > 0) {
      ConstructionItemTooltipHelper.toolTip.disp.x = t.x - ConstructionItemTooltipHelper.toolTip.disp.bg.width / 2 - e.width / 2;
      ConstructionItemTooltipHelper.toolTip.disp.y = ConstructionItemTooltipHelper.toolTip.disp.bg.height;
    } else if (t.x + ConstructionItemTooltipHelper.toolTip.disp.bg.width + e.width / 2 < e.stage.stageWidth) {
      ConstructionItemTooltipHelper.toolTip.disp.x = t.x + ConstructionItemTooltipHelper.toolTip.disp.bg.width / 2 + e.width / 2;
      ConstructionItemTooltipHelper.toolTip.disp.y = ConstructionItemTooltipHelper.toolTip.disp.bg.height;
    }
    ConstructionItemTooltipHelper.toolTip.disp.visible = true;
  };
  Object.defineProperty(ConstructionItemTooltipHelper, "disp", {
    get: function () {
      if (s.isUndefined(ConstructionItemTooltipHelper.toolTip)) {
        ConstructionItemTooltipHelper.toolTip = new a.ConstructionItemToolTip();
      }
      return ConstructionItemTooltipHelper.toolTip.disp;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemTooltipHelper.__initialize_static_members = function () {
    ConstructionItemTooltipHelper.toolTip = new a.ConstructionItemToolTip();
  };
  return ConstructionItemTooltipHelper;
}();
exports.ConstructionItemTooltipHelper = o;
var a = require("./2694.js");
var s = require("./229.js");
o.__initialize_static_members();