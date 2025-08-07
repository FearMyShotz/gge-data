Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./676.js");
var a = require("./4290.js");
var s = function (e) {
  function CastleLegendSkillTreeRoot(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleLegendSkillTreeRoot, e);
  CastleLegendSkillTreeRoot.prototype.childIDProperty = function (e) {
    return e.skillTreeID;
  };
  Object.defineProperty(CastleLegendSkillTreeRoot.prototype, "childNodeClass", {
    get: function () {
      return a.CastleLegendSkillTree;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.ACastleLegendSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillTreeRoot;
}(o.ACastleLegendSkillTreeNode);
exports.CastleLegendSkillTreeRoot = s;