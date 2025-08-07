Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemBeefVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemBeefVE, e);
  Object.defineProperty(CollectableItemBeefVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Beef_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemBeefVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemBeefVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");