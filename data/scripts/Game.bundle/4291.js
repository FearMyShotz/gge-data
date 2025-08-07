Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./676.js");
var a = require("./4292.js");
var s = require("./627.js");
var r = require("./1887.js");
var l = require("./4294.js");
var c = function (e) {
  function CastleLegendSkillTier(t) {
    var i = e.call(this, t) || this;
    i._isPreview = true;
    return i;
  }
  n.__extends(CastleLegendSkillTier, e);
  CastleLegendSkillTier.prototype.insertSkill = function (t) {
    e.prototype.insertSkill.call(this, t);
    if (this._unlockRequirements.length == 0 && t.skillTreeID <= 2) {
      this.addUnlockRequirement(new r.TreeNodeUnlockRequirementUnlockPreviousTier(t.skillTreeID, t.tier));
      this.addUnlockRequirement(new l.TreeNodeUnlockRequirementSpentPointsInPreviousTier(t.skillTreeID, t.tier));
    }
    if (t instanceof s.CastleSceatSkillVO && t.sortOrder > 0) {
      this._childs = this._childs.sort(function (e, t) {
        return e.sortOrder - t.sortOrder;
      });
    }
    this._isPreview &&= t.isPreview;
  };
  CastleLegendSkillTier.prototype.childIDProperty = function (e) {
    return e.skillGroupID;
  };
  Object.defineProperty(CastleLegendSkillTier.prototype, "childNodeClass", {
    get: function () {
      return a.CastleLegendSkillGroup;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTier.prototype, "isPreview", {
    get: function () {
      return this._isPreview;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTier;
}(o.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillTier = c;