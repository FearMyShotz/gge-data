Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ACollectableItemSimpleIconVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemSimpleIconVE, e);
  ACollectableItemSimpleIconVE.prototype.iconCreate = function () {
    if (this.iconClass) {
      this.dispCreator.addDisp(new this.iconClass());
    }
  };
  Object.defineProperty(ACollectableItemSimpleIconVE.prototype, "iconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemSimpleIconVE;
}(require("./158.js").ACollectableItemVE);
exports.ACollectableItemSimpleIconVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");