Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemAquamarineVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAquamarineVE, e);
  Object.defineProperty(CollectableItemAquamarineVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Aquamarin_Centered;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemAquamarineVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemAquamarineVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");