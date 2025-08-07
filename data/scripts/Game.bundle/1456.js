Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./2670.js");
var a = require("./2671.js");
var s = require("./2672.js");
var r = function () {
  function TreeNodeUnlockRequirementsCreator() {}
  TreeNodeUnlockRequirementsCreator.createUnlockRequirements = function (e) {
    var t = [];
    var i = n.CastleXMLUtils.getStringAttribute("requiredBuildingsCondition", e, "");
    var r = n.CastleXMLUtils.createIntListFromAttribute("requiredBuildings", e);
    if (i == TreeNodeUnlockRequirementsCreator.REQUIREMENTS_SEPARATOR) {
      var l = [];
      for (var c = 0; c < r.length; c++) {
        if ((u = r[c]) && u > 0) {
          l.push(u);
        }
      }
      (d = new o.TreeNodeUnlockRequirementBuilding()).addMultipleBuildingRequirements(l);
      t.push(d);
    } else {
      for (c = 0; c < r.length; c++) {
        var u;
        var d;
        if ((u = r[c]) && u > 0) {
          (d = new o.TreeNodeUnlockRequirementBuilding()).addSingleBuildingRequirement(u);
          t.push(d);
        }
      }
    }
    var p = n.CastleXMLUtils.createIntListFromAttribute("requiredSkillIDs", e);
    if (p.length > 0) {
      p.forEach(function (e) {
        var i = new s.TreeNodeUnlockRequirementSkills();
        i.addSingleSkillRequirement(e);
        t.push(i);
      });
    }
    var h = n.CastleXMLUtils.getIntAttribute("requiredLegendLevel", e);
    if (h > 0) {
      t.push(new a.TreeNodeUnlockRequirementLegendLevel(h));
    }
    return t;
  };
  TreeNodeUnlockRequirementsCreator.REQUIREMENTS_SEPARATOR = "or";
  return TreeNodeUnlockRequirementsCreator;
}();
exports.TreeNodeUnlockRequirementsCreator = r;