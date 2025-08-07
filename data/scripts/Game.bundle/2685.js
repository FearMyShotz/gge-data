Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1346.js");
var a = function (e) {
  function ComboboxItemRendererCastleListCI() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererCastleListCI, e);
  Object.defineProperty(ComboboxItemRendererCastleListCI.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleScrollableComboboxItem_CI;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ComboboxItemRendererCastleList.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererCastleListCI;
}(o.ComboboxItemRendererCastleList);
exports.ComboboxItemRendererCastleListCI = a;