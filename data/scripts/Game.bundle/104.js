Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./6.js");
var a = function () {
  function CollectableRendererList() {
    this._collectableRenderList = [];
  }
  CollectableRendererList.prototype.destroyCollectableRenderList = function () {
    for (var e = o.int(this._collectableRenderList.length - 1); e >= 0; e--) {
      this._collectableRenderList[e].destroy();
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(CollectableRendererList.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableRendererList;
}();
exports.CollectableRendererList = a;
n.classImplementsInterfaces(a, "ICollectableRendererList");