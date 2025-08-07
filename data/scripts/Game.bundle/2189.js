Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./163.js");
var s = require("./1251.js");
var r = require("./590.js");
var l = function (e) {
  function TooltipLordEffectItemCreator() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(TooltipLordEffectItemCreator, e);
  TooltipLordEffectItemCreator.prototype.getTotalEffectMC = function (e = null) {
    if (e && e.length > 1) {
      return new Library.CastleInterfaceElements.LordEffectTotalItemBold_Tooltip();
    } else {
      return new Library.CastleInterfaceElements.LordEffectTotalItemWithSource_Tooltip();
    }
  };
  TooltipLordEffectItemCreator.prototype.getDetailEffectMC = function () {
    return new Library.CastleInterfaceElements.LordEffectDetailItemWithSources_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getSeperatorLineMC = function () {
    return new Library.CastleInterfaceElements.LordEffectSeperator_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getCapGroupMC = function () {
    return new Library.CastleInterfaceElements.LordEffectCapItem_Tooltip();
  };
  TooltipLordEffectItemCreator.prototype.getMargin = function () {
    return TooltipLordEffectItemCreator.MARGIN;
  };
  TooltipLordEffectItemCreator.prototype.createCategoryItem = function (e) {
    var t = new r.LordEffectItem(new Library.CastleInterfaceElements.LordEffectCategoryItem_Tooltip(), this.getMargin());
    t.disp.mc_textBackground.gotoAndStop(e);
    t.applyText(o.Localize.text("effect_category_" + e), false, 3);
    return t;
  };
  TooltipLordEffectItemCreator.__initialize_static_members = function () {
    TooltipLordEffectItemCreator.MARGIN = new a.LayoutMargin(0, 3, 0, 0);
  };
  return TooltipLordEffectItemCreator;
}(s.ALordEffectItemCreator);
exports.TooltipLordEffectItemCreator = l;
l.__initialize_static_members();