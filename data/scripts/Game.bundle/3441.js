Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./219.js");
var a = require("./405.js");
var s = require("./1065.js");
var r = function (e) {
  function GenericRewardDialogProperties(t) {
    var i = e.call(this) || this;
    i.rewards = a.CastlePopUpHelper.createRewardList(t);
    i.renderProperties = new s.DailyQuestScoreBarProperties(null);
    return i;
  }
  n.__extends(GenericRewardDialogProperties, e);
  return GenericRewardDialogProperties;
}(o.BasicProperties);
exports.GenericRewardDialogProperties = r;