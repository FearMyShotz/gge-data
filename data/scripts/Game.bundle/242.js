Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ACollectableRenderComponent() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableRenderComponent, e);
  ACollectableRenderComponent.prototype.init = function (e) {
    this._renderer = e;
  };
  ACollectableRenderComponent.prototype.addListener = function () {};
  ACollectableRenderComponent.prototype.removeListener = function () {};
  ACollectableRenderComponent.prototype.reset = function () {};
  ACollectableRenderComponent.prototype.update = function () {};
  ACollectableRenderComponent.prototype.setVisibility = function (e) {};
  ACollectableRenderComponent.prototype.onLoadedIcon = function () {};
  Object.defineProperty(ACollectableRenderComponent.prototype, "renderer", {
    get: function () {
      return this._renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "clips", {
    get: function () {
      return this._renderer.clips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "itemVO", {
    get: function () {
      return this._renderer.itemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableRenderComponent.prototype, "itemVE", {
    get: function () {
      return this._renderer.itemVE;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableRenderComponent;
}(require("./14.js").CastleComponent);
exports.ACollectableRenderComponent = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");