Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./191.js");
var a = function (e) {
  function ComboboxItemRendererAutoRecruitment() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ComboboxItemRendererAutoRecruitment, e);
  Object.defineProperty(ComboboxItemRendererAutoRecruitment.prototype, "itemMCClass", {
    get: function () {
      return Library.CastleInterfaceElements.CastleComboboxItem_AutoRecruit;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ComboboxItemRenderer.prototype, "itemMCClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ComboboxItemRendererAutoRecruitment;
}(o.ComboboxItemRenderer);
exports.ComboboxItemRendererAutoRecruitment = a;