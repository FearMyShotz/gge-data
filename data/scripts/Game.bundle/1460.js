Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./191.js");
var c = function (e) {
  function ComboboxItemRendererBuildingGroundTypeSelector() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererBuildingGroundTypeSelector, e);
  ComboboxItemRendererBuildingGroundTypeSelector.prototype.renderItem = function (t, i, n, l, c) {
    var u = e.prototype.renderItem.call(this, t, i, n, l, c);
    if (u.itxt_item) {
      u.itxt_item.autoFitToBounds = true;
      u.itxt_item.textAlign = o.GGSTextAlign.LEFT;
    }
    var d;
    var p = t.data;
    var h = s.int(p.iconSize);
    switch (p.buildingGroundType) {
      case r.ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL:
        d = new Library.CastleInterfaceElements.Icon_Civil();
        break;
      case r.ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY:
        d = new Library.CastleInterfaceElements.Icon_Military();
        break;
      case r.ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE:
        d = new Library.CastleInterfaceElements_Icons.Icon_Defence();
    }
    if (d) {
      a.MovieClipHelper.scaleToFit(d, h, h);
      u.mc_icon.addChild(d);
      u.mc_icon.x = u.bg.x + u.bg.width - u.mc_icon.width / 2;
    }
    return u;
  };
  Object.defineProperty(ComboboxItemRendererBuildingGroundTypeSelector.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererBuildingGroundTypeSelector;
}(l.ComboboxItemRenderer);
exports.ComboboxItemRendererBuildingGroundTypeSelector = c;