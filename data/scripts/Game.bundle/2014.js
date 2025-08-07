Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = function (e) {
  function CollectableRendererColorBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererColorBackground, e);
  CollectableRendererColorBackground.prototype.reset = function () {
    if (this.clips.colorBackgroundMc) {
      this.clips.colorBackgroundMc.gotoAndStop(5);
    }
  };
  CollectableRendererColorBackground.prototype.update = function () {
    if (this.clips.colorBackgroundMc) {
      var e = 5;
      if (a.instanceOfClass(this.itemVO, "ACollectableItemEquipmentVO")) {
        var t = s.int(this.itemVO.equipmentVO.visualRareID);
        if (t >= 1 && t <= 4) {
          e = t;
        }
      }
      this.clips.colorBackgroundMc.gotoAndStop(e);
    }
  };
  CollectableRendererColorBackground.prototype.setVisibility = function (e) {
    if (this.clips.colorBackgroundMc) {
      this.clips.colorBackgroundMc.visible = e;
    }
  };
  return CollectableRendererColorBackground;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererColorBackground = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");