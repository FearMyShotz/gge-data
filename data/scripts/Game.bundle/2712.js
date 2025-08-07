Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./191.js");
var r = function (e) {
  function ComboboxItemRendererConstructionItemSlotGray() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererConstructionItemSlotGray, e);
  ComboboxItemRendererConstructionItemSlotGray.prototype.renderItem = function (t, i, n, s, r) {
    var l;
    var c = e.prototype.renderItem.call(this, t, i, n, s, r);
    if (c.itxt_item) {
      c.itxt_item.autoFitToBounds = true;
    }
    switch (t.data.slotVO.slotType) {
      case a.ConstructionItemConst.APPEARANCE_SLOT_TYPE:
        l = new Library.CastleInterfaceElements.SmallSlotAppearanceItem();
        break;
      case a.ConstructionItemConst.PRIMARY_SLOT_TYPE:
        l = new Library.CastleInterfaceElements.SmallSlotPrimaryItem();
        break;
      case a.ConstructionItemConst.SECONDARY_SLOT_TYPE:
        l = new Library.CastleInterfaceElements.SmallSlotSecondaryItem();
    }
    if (l) {
      o.MovieClipHelper.scaleToFit(l, 17, 17);
      c.mc_icon.addChild(l);
    }
    return c;
  };
  Object.defineProperty(ComboboxItemRendererConstructionItemSlotGray.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder_grey;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererConstructionItemSlotGray;
}(s.ComboboxItemRenderer);
exports.ComboboxItemRendererConstructionItemSlotGray = r;