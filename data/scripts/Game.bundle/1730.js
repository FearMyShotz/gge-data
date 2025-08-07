Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./56.js");
var l = function () {
  function SupportToolTooltipHelper() {}
  SupportToolTooltipHelper.getToolTipByInventory = function (e, t) {
    if (e.getToolCount() > 0) {
      var i = t;
      e.getTools().forEach(function (e) {
        i += "\n";
        i += SupportToolTooltipHelper.getTextForTool(e, e.inventoryAmount, undefined);
      });
      return i;
    }
    return null;
  };
  SupportToolTooltipHelper.getToolTipByLogUnitVOs = function (e, t) {
    if (e.length > 0) {
      var i = t;
      e.forEach(function (e) {
        var t = o.castAs(s.CastleModel.wodData.createVObyWOD(e.wodID, r.CastleWodData.TYPE_UNIT), "BasicUnitVO");
        if (t) {
          i += "\n";
          i += SupportToolTooltipHelper.getTextForTool(t, e.count, e.lost);
        }
      });
      return i;
    }
    return null;
  };
  SupportToolTooltipHelper.getTextForTool = function (e, t, i = undefined) {
    var o = i === undefined ? "dialog_shortArmy_attackSupportTools_tooltip_entries" : "dialog_battleLogDetail_defenseSupportTools_tooltip_entries";
    var s = [a.Localize.text(e.getNameString()), t, i];
    var r = a.Localize.text(o, s) + "\n";
    var l = "";
    e.getTooltipString(t).split("\n").forEach(function (e) {
      if (l != "") {
        l += "\n";
      }
      l += a.Localize.text(n.GenericTextIds.VALUE_SIMPLE_COMP, ["•", e]);
    });
    return r += l;
  };
  return SupportToolTooltipHelper;
}();
exports.SupportToolTooltipHelper = l;