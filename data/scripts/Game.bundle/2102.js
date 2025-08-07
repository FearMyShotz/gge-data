Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function EventOverviewDetailsFactionInvasion() {
    var t = e.call(this) || this;
    t.dispClassName = "list_rewards_berimond_invasion";
    t.init();
    return t;
  }
  n.__extends(EventOverviewDetailsFactionInvasion, e);
  EventOverviewDetailsFactionInvasion.prototype.updateRewards = function (e, t) {
    var i = e.singleEventVO(false).rewardLists;
    var n = e.singleEventVO(true).rewardLists;
    for (var o = 0; o < 3; o++) {
      this.fillList(i[o], o);
    }
    for (; o < 6; o++) {
      this.fillList(n[o - 3], o);
    }
  };
  return EventOverviewDetailsFactionInvasion;
}(require("./572.js").EventOverviewDetailedEventView);
exports.EventOverviewDetailsFactionInvasion = a;
o.classImplementsInterfaces(a, "ICollectableRendererList");