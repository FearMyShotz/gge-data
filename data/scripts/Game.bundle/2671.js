Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = function () {
  function TreeNodeUnlockRequirementLegendLevel(e) {
    this._legendLevel = e;
  }
  TreeNodeUnlockRequirementLegendLevel.prototype.isUnlocked = function () {
    return o.CastleModel.userData.userLegendLevel >= this._legendLevel;
  };
  TreeNodeUnlockRequirementLegendLevel.prototype.getUnlockRequirementText = function () {
    return n.Localize.text("dialog_legendTemple_unlockLegendLevel", [this._legendLevel]);
  };
  Object.defineProperty(TreeNodeUnlockRequirementLegendLevel.prototype, "legendSkillData", {
    get: function () {
      return o.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementLegendLevel.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementLegendLevel;
}();
exports.TreeNodeUnlockRequirementLegendLevel = a;