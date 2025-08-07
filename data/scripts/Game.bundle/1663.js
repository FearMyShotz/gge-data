Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function RewardHubEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(RewardHubEvent, e);
  RewardHubEvent.__initialize_static_members = function () {
    RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED = "PENDING_REWARDS_AMOUNT_UPDATED";
  };
  return RewardHubEvent;
}(createjs.Event);
exports.RewardHubEvent = o;
o.__initialize_static_members();