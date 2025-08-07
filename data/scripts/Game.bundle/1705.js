Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function RewardHubPanelNotificationEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(RewardHubPanelNotificationEvent, e);
  RewardHubPanelNotificationEvent.__initialize_static_members = function () {
    RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED = "NEW_REWARDS_ARRIVED";
  };
  return RewardHubPanelNotificationEvent;
}(createjs.Event);
exports.RewardHubPanelNotificationEvent = o;
o.__initialize_static_members();