Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./4.js");
var a = require("./33.js");
var s = require("./80.js");
var r = function () {
  function TreeNodeUnlockRequirementBuilding() {
    this._wodIDs = [];
    this._buildingVOs = [];
  }
  TreeNodeUnlockRequirementBuilding.prototype.addSingleBuildingRequirement = function (e) {
    this._buildingVOs.push(o.CastleModel.wodData.getBuildingVOById(e));
  };
  TreeNodeUnlockRequirementBuilding.prototype.addMultipleBuildingRequirements = function (e) {
    for (var t = 0; t < e.length; t++) {
      this._buildingVOs.push(o.CastleModel.wodData.getBuildingVOById(e[t]));
    }
  };
  TreeNodeUnlockRequirementBuilding.prototype.isUnlocked = function () {
    var e;
    for (var t = 0; t < this._buildingVOs.length; t++) {
      e = a.Iso.data.objects.provider.getObjectsByType(this._buildingVOs[t].objectType);
      for (var i = 0; i < e.length; i++) {
        if (e[i] && e[i].buildingState.isFunctionally && e[i].level >= this._buildingVOs[t].level) {
          return true;
        }
      }
    }
    return false;
  };
  TreeNodeUnlockRequirementBuilding.prototype.getUnlockRequirementText = function () {
    var e;
    var t;
    if (this._buildingVOs.length > 1) {
      var i = "";
      for (var o = 0; o < this._buildingVOs.length; o++) {
        if (o > 0) {
          i += "; ";
        }
        e = this._buildingVOs[o].getNameString();
        t = this._buildingVOs[o].level;
        i += n.Localize.text("dialog_legendTemple_unlockBuilding", [e, t]);
      }
      return n.Localize.text("dialog_legendTemple_unlockBuilding_conditionmultipleBuildingss", [i]);
    }
    e = this._buildingVOs[0].getNameString();
    t = this._buildingVOs[0].level;
    if (this._buildingVOs[0].objectType == s.IsoObjectEnum.KEEP) {
      return n.Localize.text("dialog_legendTemple_unlockKeepLevel", [t]);
    } else {
      return n.Localize.text("dialog_legendTemple_unlockBuilding", [e, t]);
    }
  };
  Object.defineProperty(TreeNodeUnlockRequirementBuilding.prototype, "showFollowingRequirements", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreeNodeUnlockRequirementBuilding.prototype, "buildingVO", {
    get: function () {
      return this._buildingVOs[0];
    },
    enumerable: true,
    configurable: true
  });
  return TreeNodeUnlockRequirementBuilding;
}();
exports.TreeNodeUnlockRequirementBuilding = r;