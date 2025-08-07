Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./220.js");
var a = require("./5.js");
var s = require("./405.js");
var r = function (e) {
  function GachaEventEndDialogProperties(t) {
    var i = e.call(this) || this;
    i.rewards = s.CastlePopUpHelper.createRewardList(t);
    if (t[a.CommKeys.CURRENT_SCORE]) {
      i.currentScore = t[a.CommKeys.CURRENT_SCORE];
    } else {
      i.currentScore = 0;
    }
    if (t[a.CommKeys.CURRENT_RANK]) {
      i.rank = t[a.CommKeys.CURRENT_RANK];
    } else {
      i.rank = 0;
    }
    i.eventID = t[a.CommKeys.EVENT_ID];
    return i;
  }
  n.__extends(GachaEventEndDialogProperties, e);
  return GachaEventEndDialogProperties;
}(o.BasicProperties);
exports.GachaEventEndDialogProperties = r;