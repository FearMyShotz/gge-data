Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AAreaDataComponent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AAreaDataComponent, e);
  AAreaDataComponent.prototype.init = function (e) {
    this._areaData = e;
  };
  Object.defineProperty(AAreaDataComponent.prototype, "areaData", {
    get: function () {
      return this._areaData;
    },
    enumerable: true,
    configurable: true
  });
  return AAreaDataComponent;
}(require("./14.js").CastleComponent);
exports.AAreaDataComponent = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IAreaDataComponent");