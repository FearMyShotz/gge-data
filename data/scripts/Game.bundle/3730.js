Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function EventDifficultyConfirmRewardsDialogProperties(t, i, n, o = false) {
    var a = e.call(this) || this;
    a.rewards = t;
    a.difficultyVO = i;
    a.eventID = n;
    a.c2Unlock = o;
    return a;
  }
  n.__extends(EventDifficultyConfirmRewardsDialogProperties, e);
  return EventDifficultyConfirmRewardsDialogProperties;
}(require("./2.js").BasicProperties);
exports.EventDifficultyConfirmRewardsDialogProperties = o;