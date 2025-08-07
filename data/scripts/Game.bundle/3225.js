Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemMeadVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemMeadVE, e);
  Object.defineProperty(CollectableItemMeadVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Mead_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemMeadVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemMeadVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");