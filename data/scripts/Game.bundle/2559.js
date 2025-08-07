Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./191.js");
var a = function (e) {
  function ComboboxItemRendererShort() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererShort, e);
  Object.defineProperty(ComboboxItemRendererShort.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_Short;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererShort;
}(o.ComboboxItemRenderer);
exports.ComboboxItemRendererShort = a;