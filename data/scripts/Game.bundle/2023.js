Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CollectableRendererTextBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererTextBackground, e);
  CollectableRendererTextBackground.prototype.reset = function () {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = false;
    }
  };
  CollectableRendererTextBackground.prototype.update = function () {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = this.itemVE.textfieldBackgroundVisible();
    }
  };
  CollectableRendererTextBackground.prototype.setVisibility = function (e) {
    if (this.clips.textBackgroundMc) {
      this.clips.textBackgroundMc.visible = e;
    }
  };
  return CollectableRendererTextBackground;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererTextBackground = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");