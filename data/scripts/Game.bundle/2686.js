Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function ComboboxItemRendererConstructionItemEffectAmount() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererConstructionItemEffectAmount, e);
  ComboboxItemRendererConstructionItemEffectAmount.prototype.renderItem = function (t, i, n, s, r) {
    var l = e.prototype.renderItem.call(this, t, i, n, s, r);
    if (l.itxt_item) {
      l.itxt_item.autoFitToBounds = true;
      l.itxt_item.textAlign = o.GGSTextAlign.CENTER;
      l.itxt_item.y = 2;
    }
    var c = t.data + 1;
    var u = new (a.getDefinitionByName("Icon_ComboboxEffectCount"))();
    if (u) {
      u.gotoAndStop(c);
      l.mc_icon.addChild(u);
      l.mc_icon.x = n - u.width;
    }
    return l;
  };
  Object.defineProperty(ComboboxItemRendererConstructionItemEffectAmount.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_PlaceHolder;
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererConstructionItemEffectAmount;
}(require("./191.js").ComboboxItemRenderer);
exports.ComboboxItemRendererConstructionItemEffectAmount = s;