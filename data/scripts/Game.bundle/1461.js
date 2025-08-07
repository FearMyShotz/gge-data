Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./191.js");
var c = function (e) {
  function ComboboxItemRendererBuildingTypeSelector() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ComboboxItemRendererBuildingTypeSelector, e);
  ComboboxItemRendererBuildingTypeSelector.prototype.renderItem = function (t, i, n, l, c) {
    var d = e.prototype.renderItem.call(this, t, i, n, l, c);
    if (d.itxt_item) {
      d.itxt_item.autoFitToBounds = true;
      d.itxt_item.textAlign = o.GGSTextAlign.LEFT;
    }
    var p = t.data;
    var h = s.castAs(p.buildingType, "ABasicBuildingVO");
    var g = r.int(p.iconSize);
    if (h) {
      var C = new Library.CastleInterfaceElements.BuildingGroundBg();
      a.MovieClipHelper.scaleToFit(C, g, g);
      d.mc_icon.addChild(C);
      var _ = new (u.IsoHelper.view.createIsoObjectVEFromVO(h).buildingGroundIconClass)();
      a.MovieClipHelper.scaleToFit(_, g * ComboboxItemRendererBuildingTypeSelector.ICON_SCALE, g * ComboboxItemRendererBuildingTypeSelector.ICON_SCALE);
      d.mc_icon.addChild(_);
      d.mc_icon.x = d.bg.x + d.bg.width - d.mc_icon.width / 2;
    }
    return d;
  };
  Object.defineProperty(ComboboxItemRendererBuildingTypeSelector.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ComboboxItemRendererBuildingTypeSelector.__initialize_static_members = function () {
    ComboboxItemRendererBuildingTypeSelector.ICON_SCALE = 0.7;
  };
  return ComboboxItemRendererBuildingTypeSelector;
}(l.ComboboxItemRenderer);
exports.ComboboxItemRendererBuildingTypeSelector = c;
var u = require("./46.js");
c.__initialize_static_members();