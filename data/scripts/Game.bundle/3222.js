Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemGlassVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemGlassVE, e);
  Object.defineProperty(CollectableItemGlassVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Glass_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemGlassVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemGlassVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");