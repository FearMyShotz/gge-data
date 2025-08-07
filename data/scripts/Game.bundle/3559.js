Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function CastleFactionScoreBarComponent(t, i) {
    return e.call(this, t, i) || this;
  }
  n.__extends(CastleFactionScoreBarComponent, e);
  CastleFactionScoreBarComponent.prototype.updateReward = function (t, i) {
    e.prototype.updateReward.call(this, t, i);
    var n;
    var o = a.int(this.factionScorebarProperties.currentPage());
    var s = a.int(this.factionScorebarProperties.maxPages());
    var r = 0;
    if (t == 0) {
      n = this.disp["bar" + t + "_short"];
      r = o == 1 ? i : 0;
    } else if (t == this.factionScorebarProperties.numThresholdRewards - 1) {
      n = this.disp["bar" + t + "_next"];
      r = o < s ? this.factionScorebarProperties.nextThresholdProgress(t, this.scoreBarProgress.pointThresholds, this.scoreBarProgress.ownPoints) : this.rankProgress(0);
    }
    if (n) {
      this.setProgressBar(n, r);
    }
  };
  Object.defineProperty(CastleFactionScoreBarComponent.prototype, "factionScorebarProperties", {
    get: function () {
      return this.scorebarProperties;
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionScoreBarComponent;
}(require("./331.js").CastleScoreBarComponent);
exports.CastleFactionScoreBarComponent = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");