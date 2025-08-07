Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemWoodVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemWoodVE, e);
  Object.defineProperty(CollectableItemWoodVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Wood_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemWoodVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemWoodVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");