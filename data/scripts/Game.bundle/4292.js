Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./676.js");
var a = require("./4293.js");
var s = require("./627.js");
var r = function (e) {
  function CastleLegendSkillGroup(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleLegendSkillGroup, e);
  CastleLegendSkillGroup.prototype.insertSkill = function (t) {
    e.prototype.insertSkill.call(this, t);
    if (t instanceof s.CastleSceatSkillVO) {
      this._sortOrder = t.sortOrder;
    }
  };
  CastleLegendSkillGroup.prototype.childIDProperty = function (e) {
    return e.level;
  };
  Object.defineProperty(CastleLegendSkillGroup.prototype, "childNodeClass", {
    get: function () {
      return a.CastleLegendSkillLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillGroup.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillGroup;
}(o.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillGroup = r;