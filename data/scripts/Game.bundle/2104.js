Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function EventOverviewDetailsPointEventNextRewardList() {
    var t = e.call(this) || this;
    t.dispClassName = "list_rewards_long_term";
    t.init();
    return t;
  }
  n.__extends(EventOverviewDetailsPointEventNextRewardList, e);
  EventOverviewDetailsPointEventNextRewardList.prototype.updateRewards = function (e, t) {
    var i;
    var n = e.getRewards(t);
    for (var o = 0; o < 4; o++) {
      i = n[o];
      this.fillList(i, o);
    }
  };
  return EventOverviewDetailsPointEventNextRewardList;
}(require("./571.js").EventOverviewDetailedEventView);
exports.EventOverviewDetailsPointEventNextRewardList = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");