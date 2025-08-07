Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DonationRankingRewardsDialogProperties(t, i) {
    var n = e.call(this) || this;
    n._rankingRewards = null;
    n._copy = null;
    n._rankingRewards = i;
    n._copy = t;
    return n;
  }
  n.__extends(DonationRankingRewardsDialogProperties, e);
  Object.defineProperty(DonationRankingRewardsDialogProperties.prototype, "rankingRewards", {
    get: function () {
      return this._rankingRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DonationRankingRewardsDialogProperties.prototype, "copy", {
    get: function () {
      return this._copy;
    },
    enumerable: true,
    configurable: true
  });
  return DonationRankingRewardsDialogProperties;
}(require("./219.js").BasicProperties);
exports.DonationRankingRewardsDialogProperties = o;