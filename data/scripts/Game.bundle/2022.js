Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./16.js");
var r = function (e) {
  function CollectableRendererStoragebar() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererStoragebar, e);
  CollectableRendererStoragebar.prototype.reset = function () {
    if (this.clips.storageBar) {
      this.clips.storageBar.visible = false;
    }
  };
  CollectableRendererStoragebar.prototype.update = function () {
    if (this.clips.storageBar) {
      var e = o.MathBase.clamp(this.itemVE.storageBarScale(), 0, 1);
      this.clips.storageBar.visible = e > 0;
      if (e > 0) {
        this.clips.storageBar.scaleX = e;
        var t = new a.ColorTransform();
        t.color = e == 1 ? s.ClientConstColor.GENERIC_BRIGHT_RED : e >= 0.8 ? s.ClientConstColor.GENERIC_BRIGHT_YELLOW : s.ClientConstColor.GENERIC_LIGHT_GREEN;
        this.clips.storageBar.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
      }
    }
  };
  CollectableRendererStoragebar.prototype.setVisibility = function (e) {
    if (this.clips.storageBar) {
      this.clips.storageBar.visible = e;
    }
  };
  return CollectableRendererStoragebar;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererStoragebar = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");