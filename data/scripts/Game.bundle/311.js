Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function AIsoCommandView() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIsoCommandView, e);
  Object.defineProperty(AIsoCommandView.prototype, "isoRenderer", {
    get: function () {
      return s.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandView.prototype, "viewObjects", {
    get: function () {
      return this.isoRenderer.objects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoCommandView.prototype, "mouseHandler", {
    get: function () {
      return this.isoRenderer.mouse;
    },
    enumerable: true,
    configurable: true
  });
  return AIsoCommandView;
}(require("./1181.js").AIsoCommand);
exports.AIsoCommandView = a;
var s = require("./34.js");
o.classImplementsInterfaces(a, "ICollectableRendererList");