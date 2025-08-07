Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemExtinguishFireVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemExtinguishFireVE, e);
  Object.defineProperty(CollectableItemExtinguishFireVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_repairAll;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemExtinguishFireVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemExtinguishFireVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");