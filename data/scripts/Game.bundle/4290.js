Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./678.js");
var a = require("./4291.js");
var s = function (e) {
  function CastleLegendSkillTree(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleLegendSkillTree, e);
  CastleLegendSkillTree.prototype.childIDProperty = function (e) {
    return e.tier;
  };
  Object.defineProperty(CastleLegendSkillTree.prototype, "childNodeClass", {
    get: function () {
      return a.CastleLegendSkillTier;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTree;
}(o.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillTree = s;