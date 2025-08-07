Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = function () {
  function TreeNodeUnlockRequirementActivateAllPreviousSkills(e, t) {
    this._treeID = e;
    this._tier = t;
  }
  TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype.isUnlocked = function () {
    if (this._tier == 1) {
      return true;
    }
    for (var e = this.legendSkillData.getSkillTreeNode(this._treeID, this._tier - 1), t = 0; t < e.childs.length; t++) {
      var i = e.childs[t];
      var n = i.childs[i.childs.length - 1];
      if (!this.legendSkillData.isSkillActive(n.legendSkillVO)) {
        return false;
      }
    }
    return true;
  };
  TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype.getUnlockRequirementText = function () {
    return n.Localize.text("dialog_legendTemple_unlockTier");
  };
  Object.defineProperty(TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype, "legendSkillData", {
    get: function () {
      return o.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementActivateAllPreviousSkills.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementActivateAllPreviousSkills;
}();
exports.TreeNodeUnlockRequirementActivateAllPreviousSkills = a;