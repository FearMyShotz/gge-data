Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./242.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function CollectableRendererTooltip() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.onMobileClickCount = 0;
    return t;
  }
  n.__extends(CollectableRendererTooltip, e);
  CollectableRendererTooltip.prototype.reset = function () {
    var e = this.renderer.clips.getTooltipTargetMc();
    if (e) {
      e.toolTipText = null;
    }
  };
  CollectableRendererTooltip.prototype.addListener = function () {
    var e = this.renderer.clips.getTooltipTargetMc();
    if (e) {
      e.addEventListener(s.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      e.addEventListener(s.CLICK, this.bindFunction(this.onMobileClick));
    }
  };
  CollectableRendererTooltip.prototype.removeListener = function () {
    var e = this.renderer.clips.getTooltipTargetMc();
    if (e) {
      e.removeEventListener(s.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      e.removeEventListener(s.CLICK, this.bindFunction(this.onMobileClick));
    }
  };
  CollectableRendererTooltip.prototype.update = function () {
    this.itemVE.tooltipUpdate();
  };
  CollectableRendererTooltip.prototype.onMouseOver = function (e) {
    var t = this.renderer.clips.getTooltipTargetMc();
    if (this.itemVE && t && e.target == t && !this.renderer.options.tooltip.useSimpleTooltips) {
      this.itemVE.isTouch = o.currentBrowserInfo.isTouchEvent(e);
      this.itemVE.tooltipShowAdvanced();
    }
  };
  CollectableRendererTooltip.prototype.onMobileClick = function (e) {
    if (o.currentBrowserInfo.isTouchEvent(e)) {
      if (this.onMobileClickCount === 0) {
        this.onMouseOver(e);
        e.stopPropagation();
        this.onMobileClickCount = 1;
      } else {
        this.onMobileClickCount = 0;
      }
    }
  };
  return CollectableRendererTooltip;
}(a.ACollectableRenderComponent);
exports.CollectableRendererTooltip = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");