Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = function () {
  function TreeNodeUnlockRequirementUnlockPreviousTier(e, t) {
    this._treeID = e;
    this._tier = t;
  }
  TreeNodeUnlockRequirementUnlockPreviousTier.prototype.isUnlocked = function () {
    return this._tier == 1 || this.legendSkillData.isTierUnlocked(this._treeID, this._tier - 1);
  };
  TreeNodeUnlockRequirementUnlockPreviousTier.prototype.getUnlockRequirementText = function () {
    return n.Localize.text("dialog_legendTemple_prevTierLocked");
  };
  Object.defineProperty(TreeNodeUnlockRequirementUnlockPreviousTier.prototype, "legendSkillData", {
    get: function () {
      return o.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementUnlockPreviousTier.prototype, "showFollowingRequirements", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementUnlockPreviousTier;
}();
exports.TreeNodeUnlockRequirementUnlockPreviousTier = a;