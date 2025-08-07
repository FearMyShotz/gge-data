Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1622.js");
var s = function (e) {
  function CollectableItemPermanentUnitSlotVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemPermanentUnitSlotVE, e);
  Object.defineProperty(CollectableItemPermanentUnitSlotVE.prototype, "iconMcFrame", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPermanentSlotVE.prototype, "iconMcFrame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemPermanentUnitSlotVE;
}(a.ACollectableItemPermanentSlotVE);
exports.CollectableItemPermanentUnitSlotVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");