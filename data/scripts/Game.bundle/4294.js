Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./5.js");
var a = require("./4.js");
var s = function () {
  function TreeNodeUnlockRequirementSpentPointsInPreviousTier(e, t) {
    this._treeID = e;
    this._tier = t;
  }
  TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype.isUnlocked = function () {
    return this._tier == 1 || o.LegendSkillConst.isTierUnlocked(this._tier, this.legendSkillData.getSpentPoints(this._treeID, this._tier - 1));
  };
  TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype.getUnlockRequirementText = function () {
    var e = Math.round(this.legendSkillData.pointsLeftToUnlockTier(this._treeID, this._tier));
    return n.Localize.text("dialog_legendTemple_tierLocked", [e]);
  };
  Object.defineProperty(TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype, "legendSkillData", {
    get: function () {
      return a.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementSpentPointsInPreviousTier.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementSpentPointsInPreviousTier;
}();
exports.TreeNodeUnlockRequirementSpentPointsInPreviousTier = s;