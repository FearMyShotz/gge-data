Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SeasonLeagueBuyPassConfirmDialogProperties(t, i, n, o, a, s, r = -1, l = 0) {
    var c = e.call(this) || this;
    c.source = 0;
    c.pass = t;
    c.price = i;
    c.discountPercent = n;
    c.eventID = a;
    c.instanceID = s;
    c.rankID = o;
    c.seasonID = r;
    c.source = l;
    return c;
  }
  n.__extends(SeasonLeagueBuyPassConfirmDialogProperties, e);
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL = 0;
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION = 1;
  SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END = 2;
  return SeasonLeagueBuyPassConfirmDialogProperties;
}(require("./2.js").BasicProperties);
exports.SeasonLeagueBuyPassConfirmDialogProperties = o;