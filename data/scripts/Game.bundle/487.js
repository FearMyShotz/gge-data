Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AIsoViewComponent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIsoViewComponent, e);
  AIsoViewComponent.prototype.init = function (e) {
    this._isoRenderer = e;
  };
  AIsoViewComponent.prototype.reset = function () {};
  AIsoViewComponent.prototype.setup = function () {};
  Object.defineProperty(AIsoViewComponent.prototype, "isoRenderer", {
    get: function () {
      return this._isoRenderer;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoViewComponent;
}(require("./14.js").CastleComponent);
exports.AIsoViewComponent = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");