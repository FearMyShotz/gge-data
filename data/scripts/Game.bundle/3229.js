Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1049.js");
var s = function (e) {
  function CollectableItemC2VE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemC2VE, e);
  Object.defineProperty(CollectableItemC2VE.prototype, "iconClass", {
    get: function () {
      if (!!this.options && this.options.icon.useDropShadowIcon) {
        return Library.CastleInterfaceElements_Icons.Icon_C2_Big_DropShadow;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_C2_Big;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemCurrencyVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemC2VE;
}(a.ACollectableItemCurrencyVE);
exports.CollectableItemC2VE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");