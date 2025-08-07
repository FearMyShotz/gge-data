Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./191.js");
var s = function (e) {
  function ComboboxItemRendererServerSelection() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererServerSelection, e);
  Object.defineProperty(ComboboxItemRendererServerSelection.prototype, "itemMCClass", {
    get: function () {
      return o.getDefinitionByName("CastleComboboxItemNew_Toaster");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererServerSelection;
}(a.ComboboxItemRenderer);
exports.ComboboxItemRendererServerSelection = s;