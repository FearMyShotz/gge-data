Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./68.js");
var c = require("./191.js");
var u = function (e) {
  function ComboboxItemRendererCastleList() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererCastleList, e);
  ComboboxItemRendererCastleList.prototype.renderItem = function (e, t, i, n, c) {
    var u = r.castAs(new this.itemMCClass(), "MovieClip");
    u.actLikeButton = true;
    u.mouseChildren = false;
    u.itxt_item = a.GoodgameTextFieldManager.getInstance().registerTextField(u.txt_item, new c(e.itemLabel), new s.InternalGGSTextFieldConfigVO(true));
    u.itxt_item.mouseEnabled = false;
    u.bg.gotoAndStop(1);
    if (i > 0) {
      u.bg.width = i;
      u.itxt_item.width = i;
    }
    u.bg.height = n;
    u.id = t;
    var d = r.castAs(e.data, "IWorldmapObjectVO");
    if (u && d) {
      u.mc_kingdomPoint.x = u.bg.x + u.bg.width - u.mc_kingdomPoint.width * 1.5;
      u.mc_kingdomPoint.gotoAndStop(Math.min(d.kingdomID + 1, 6));
      u.itxt_item.height = n;
      u.itxt_item.autoFitToBounds = true;
      u.itxt_item.verticalAlign = o.GGSVerticalAlign.MIDDLE;
    }
    if (!e.enabled) {
      u.useFilters(l.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    }
    u.toolTipText = e.tooltipText;
    return u;
  };
  Object.defineProperty(ComboboxItemRendererCastleList.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererCastleList;
}(c.ComboboxItemRenderer);
exports.ComboboxItemRendererCastleList = u;