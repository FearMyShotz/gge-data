Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemIronVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemIronVE, e);
  Object.defineProperty(CollectableItemIronVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Iron_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemIronVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemIronVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");