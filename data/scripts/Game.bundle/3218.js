Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemStoneVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemStoneVE, e);
  Object.defineProperty(CollectableItemStoneVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Stone_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemStoneVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemStoneVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");