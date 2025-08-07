Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = function () {
  function GeneralUnlockRequirementSpentPointsInTier(e, t, i, n) {
    this._generalID = e;
    this._tier = t;
    this._pointsNeeded = i;
    this._starLevelNeeded = n;
  }
  GeneralUnlockRequirementSpentPointsInTier.prototype.getUnlockRequirementText = function () {
    var e = o.CastleModel.generalsData.getSkillPointsSpent(this._generalID);
    var t = Math.max(this._pointsNeeded - e);
    if (o.CastleModel.generalsData.playerGenerals.get(this._generalID).currentStarLevel < this._starLevelNeeded) {
      return n.Localize.text("dialog_generals_skillTree_starRatingNeeded_tooltip", [this._starLevelNeeded]);
    } else if (t == 1) {
      return n.Localize.text("dialog_generals_skillTree_skillPointsNeeded_allTiers_singular_tooltip", [t]);
    } else {
      return n.Localize.text("dialog_generals_skillTree_skillPointsNeeded_allTiers_tooltip", [t]);
    }
  };
  GeneralUnlockRequirementSpentPointsInTier.prototype.isUnlocked = function () {
    return o.CastleModel.generalsData.getSkillPointsSpent(this._generalID) >= this._pointsNeeded && o.CastleModel.generalsData.playerGenerals.get(this._generalID).currentStarLevel >= this._starLevelNeeded;
  };
  Object.defineProperty(GeneralUnlockRequirementSpentPointsInTier.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralUnlockRequirementSpentPointsInTier;
}();
exports.GeneralUnlockRequirementSpentPointsInTier = a;