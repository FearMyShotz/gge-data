Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDailyQuestThresholdRewardDialogProperties(t) {
    var i = this;
    i.threshold = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).rewardList = a.CollectableManager.parser.s2cParamList.createList(t.R);
    i.threshold = t.RS;
    i.renderProperties = new s.DailyQuestScoreBarProperties(null);
    return i;
  }
  n.__extends(CastleDailyQuestThresholdRewardDialogProperties, e);
  return CastleDailyQuestThresholdRewardDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleDailyQuestThresholdRewardDialogProperties = o;
var a = require("./50.js");
var s = require("./1065.js");