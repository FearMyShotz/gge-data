Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TooltipManagerFacade() {}
  TooltipManagerFacade.hideAllTooltips = function () {
    o.CastleLayoutManager.getInstance().tooltipManager.hide();
    h.EquipmentIconHelper.hideEquipmentToolTip();
    h.EquipmentIconHelper.hideRelicEquipmentToolTip();
    _.DecoBuildingToolTipManager.hideToolTip();
    d.ResourcePanelToolTipManager.hideAllToolTips();
    r.ConstructionItemTooltipHelper.hideToolTip();
    c.MaterialBagTooltipHelper.hideToolTip();
    p.LordEffectHelper.hideToolTip();
    u.QuestMapTooltipHelper.hideToolTip();
    C.CastleFusionCompareToolTip.hideToolTip();
    m.LegendSkillIconHelper.hideToolTip();
    a.GeneralsSkillTooltipHelper.hideToolTip();
    s.CollectableListTooltipHelper.hideToolTip();
    g.TextDarkTooltip.getInstance().hideTooltip();
    l.GachaMilestoneTooltipHelper.hideToolTip();
  };
  return TooltipManagerFacade;
}();
exports.TooltipManagerFacade = n;
var o = require("./17.js");
var a = require("./854.js");
var s = require("./1627.js");
var r = require("./356.js");
var l = require("./1629.js");
var c = require("./1054.js");
var u = require("./1056.js");
var d = require("./152.js");
var p = require("./133.js");
var h = require("./73.js");
var g = require("./853.js");
var C = require("./680.js");
var _ = require("./307.js");
var m = require("./994.js");