Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = function (e) {
  function CollectableRendererAllianceRewardBackground() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererAllianceRewardBackground, e);
  CollectableRendererAllianceRewardBackground.prototype.reset = function () {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = false;
    }
  };
  CollectableRendererAllianceRewardBackground.prototype.update = function () {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = this.itemVO.grantType == a.RewardConst.ALLIANCE;
    }
  };
  CollectableRendererAllianceRewardBackground.prototype.setVisibility = function (e) {
    if (this.clips.allianceRewardBackgroundMc) {
      this.clips.allianceRewardBackgroundMc.visible = e;
    }
  };
  return CollectableRendererAllianceRewardBackground;
}(require("./242.js").ACollectableRenderComponent);
exports.CollectableRendererAllianceRewardBackground = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");