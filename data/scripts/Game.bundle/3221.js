Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemOilVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemOilVE, e);
  Object.defineProperty(CollectableItemOilVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Oliveoil_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemOilVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemOilVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");