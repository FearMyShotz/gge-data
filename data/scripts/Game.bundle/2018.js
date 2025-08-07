Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function CollectableRendererIcon() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererIcon, e);
  CollectableRendererIcon.prototype.reset = function () {
    if (this.clips.iconMc) {
      o.MovieClipHelper.clearMovieClip(this.clips.iconMc);
    }
  };
  CollectableRendererIcon.prototype.update = function () {
    if (this.clips.iconMc) {
      this.clips.iconMc.addChild(this.itemVE.iconContainer);
      this.itemVE.onIconDispLoaded = this.renderer.bindFunction(this.renderer.onIconLoaded);
      this.itemVE.iconUpdate();
    }
  };
  CollectableRendererIcon.prototype.setVisibility = function (e) {
    if (this.clips.iconMc) {
      this.clips.iconMc.visible = e;
    }
  };
  return CollectableRendererIcon;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererIcon = s;
a.classImplementsInterfaces(s, "ICollectableRendererList");