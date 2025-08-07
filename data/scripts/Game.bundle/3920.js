Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./191.js");
var a = function (e) {
  function ComboboxItemRendererWorldSelection() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererWorldSelection, e);
  Object.defineProperty(ComboboxItemRendererWorldSelection.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleWorldSelectionComboboxItem;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererWorldSelection;
}(o.ComboboxItemRenderer);
exports.ComboboxItemRendererWorldSelection = a;