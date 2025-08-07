Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemCoalVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemCoalVE, e);
  Object.defineProperty(CollectableItemCoalVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Coal_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemCoalVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemCoalVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");