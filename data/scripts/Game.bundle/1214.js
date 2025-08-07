Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./191.js");
var a = function (e) {
  function ComboboxItemRendererLong() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererLong, e);
  Object.defineProperty(ComboboxItemRendererLong.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleComboboxItem_Long;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererLong;
}(o.ComboboxItemRenderer);
exports.ComboboxItemRendererLong = a;