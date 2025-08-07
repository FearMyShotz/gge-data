Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./677.js");
var a = require("./4334.js");
var s = function (e) {
  function GeneralSkillGroup(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GeneralSkillGroup, e);
  GeneralSkillGroup.prototype.insertSkill = function (t) {
    e.prototype.insertSkill.call(this, t);
  };
  GeneralSkillGroup.prototype.childIDProperty = function (e) {
    return e.level;
  };
  Object.defineProperty(GeneralSkillGroup.prototype, "childNodeClass", {
    get: function () {
      return a.GeneralSkillLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillGroup;
}(o.AGeneralSkillTreeNode);
exports.GeneralSkillGroup = s;