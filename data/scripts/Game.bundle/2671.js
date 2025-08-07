Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = function () {
  function TreeNodeUnlockRequirementSkills() {
    this._skillIDs = [];
  }
  TreeNodeUnlockRequirementSkills.prototype.addSingleSkillRequirement = function (e) {
    this._skillIDs.push(e);
  };
  TreeNodeUnlockRequirementSkills.prototype.addMultipleSkillRequirements = function (e) {
    for (var t = 0; t < e.length; t++) {
      this._skillIDs.push(e[t]);
    }
  };
  TreeNodeUnlockRequirementSkills.prototype.isUnlocked = function () {
    var e = this;
    return this._skillIDs.every(function (t) {
      return e.legendSkillData.isSkillActive(e.legendSkillData.getSceatSkillByID(t));
    });
  };
  TreeNodeUnlockRequirementSkills.prototype.getUnlockRequirementText = function () {
    var e = this;
    var t = "";
    this._skillIDs.forEach(function (i) {
      var o = e.legendSkillData.getSceatSkillByID(i);
      var a = n.Localize.text(o.nameTextID);
      var s = o.level;
      if (t != "") {
        t += "\n";
      }
      t += n.Localize.text("upgrade_buildingLevel", [a, s]);
    });
    return t;
  };
  Object.defineProperty(TreeNodeUnlockRequirementSkills.prototype, "legendSkillData", {
    get: function () {
      return o.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementSkills.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementSkills;
}();
exports.TreeNodeUnlockRequirementSkills = a;