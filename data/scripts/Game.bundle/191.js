Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ComboboxItemRenderer() {}
  ComboboxItemRenderer.prototype.renderItem = function (e, t, i, n, s) {
    var r = new this.itemMCClass();
    r.actLikeButton = true;
    r.mouseChildren = false;
    r.txt_item.defaultCacheScale = 2;
    r.itxt_item = o.GoodgameTextFieldManager.getInstance().registerTextField(r.txt_item, new s(e.itemLabel), new a.InternalGGSTextFieldConfigVO(true));
    r.mouseChildren = false;
    r.itxt_item.mouseEnabled = false;
    r.bg.gotoAndStop(1);
    if (i > 0) {
      r.bg.width = i;
      r.itxt_item.width = i;
    }
    r.bg.height = n;
    r.id = t;
    if (e.autoFitToBounds) {
      r.itxt_item.autoFitToBounds = e.autoFitToBounds;
    }
    return r;
  };
  Object.defineProperty(ComboboxItemRenderer.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleComboboxItem;
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRenderer;
}();
exports.ComboboxItemRenderer = n;
var o = require("./2.js");
var a = require("./2.js");