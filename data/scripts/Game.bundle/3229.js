Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1050.js");
var s = function (e) {
  function CollectableItemC1VE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemC1VE, e);
  Object.defineProperty(CollectableItemC1VE.prototype, "iconClass", {
    get: function () {
      if (this.options.icon.useDropShadowIcon) {
        return Library.CastleInterfaceElements_Icons.Icon_Currency_Big_DropShadow;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_Currency_Big;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemCurrencyVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemC1VE;
}(a.ACollectableItemCurrencyVE);
exports.CollectableItemC1VE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");