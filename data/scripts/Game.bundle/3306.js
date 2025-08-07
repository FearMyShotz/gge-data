Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemUnlockAllPassVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemUnlockAllPassVE, e);
  Object.defineProperty(CollectableItemUnlockAllPassVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_UnlockAllPass;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemUnlockAllPassVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemUnlockAllPassVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");