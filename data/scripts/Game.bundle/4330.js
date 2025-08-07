Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./677.js");
var a = require("./4331.js");
var s = function (e) {
  function GeneralSkillTreeRoot(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GeneralSkillTreeRoot, e);
  GeneralSkillTreeRoot.prototype.childIDProperty = function (e) {
    return e.generalID;
  };
  Object.defineProperty(GeneralSkillTreeRoot.prototype, "childNodeClass", {
    get: function () {
      return a.GeneralSkillTree;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTreeRoot;
}(o.AGeneralSkillTreeNode);
exports.GeneralSkillTreeRoot = s;