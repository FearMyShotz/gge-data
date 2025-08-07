Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./304.js");
var s = function (e) {
  function CollectableItemFoodVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemFoodVE, e);
  Object.defineProperty(CollectableItemFoodVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Food_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemResourceVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemFoodVE;
}(a.ACollectableItemResourceVE);
exports.CollectableItemFoodVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");