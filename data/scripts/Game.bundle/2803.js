Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./68.js");
var l = require("./191.js");
var c = function (e) {
  function ComboboxItemRendererCastleListVillages() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererCastleListVillages, e);
  ComboboxItemRendererCastleListVillages.prototype.renderItem = function (e, t, i, n, l) {
    var c = u.castAs(new this.itemMCClass(), "MovieClip");
    c.actLikeButton = true;
    c.mouseChildren = false;
    c.itxt_item = a.GoodgameTextFieldManager.getInstance().registerTextField(c.txt_item, new l(e.itemLabel), new s.InternalGGSTextFieldConfigVO(true));
    c.itxt_item.mouseEnabled = false;
    c.bg.gotoAndStop(1);
    if (i > 0) {
      c.bg.width = i;
      c.itxt_item.width = i;
    }
    c.bg.height = n;
    c.id = t;
    c.tooltip.x = i / 2;
    var d = u.castAs(e.data, "IWorldmapObjectVO");
    if (c && d) {
      c.mc_kingdomPoint.x = c.bg.x + c.bg.width - c.mc_kingdomPoint.width;
      c.mc_kingdomPoint.gotoAndStop(d.kingdomID + 1);
      c.itxt_item.autoFitToBounds = true;
      c.itxt_item.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    }
    if (!e.enabled) {
      c.filters = r.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX;
    }
    c.toolTipText = e.tooltipText;
    return c;
  };
  Object.defineProperty(ComboboxItemRendererCastleListVillages.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItemVillages;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererCastleListVillages;
}(l.ComboboxItemRenderer);
exports.ComboboxItemRendererCastleListVillages = c;
var u = require("./1.js");