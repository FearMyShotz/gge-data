Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemAlienProtectionVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAlienProtectionVE, e);
  CollectableItemAlienProtectionVE.prototype.tooltipCreate = function () {
    return "alienProtection";
  };
  Object.defineProperty(CollectableItemAlienProtectionVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements.AlienProtection;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemAlienProtectionVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemAlienProtectionVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");