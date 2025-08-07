Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./677.js");
var a = require("./4332.js");
var s = function (e) {
  function GeneralSkillTree(t) {
    var i = e.call(this, t) || this;
    i._isIncomplete = false;
    return i;
  }
  n.__extends(GeneralSkillTree, e);
  GeneralSkillTree.prototype.insertSkill = function (t) {
    if (t.isImplemented()) {
      e.prototype.insertSkill.call(this, t);
      this.childs.sort(function (e, t) {
        return e.id - t.id;
      });
    } else {
      this._isIncomplete = true;
    }
  };
  Object.defineProperty(GeneralSkillTree.prototype, "isIncomplete", {
    get: function () {
      return this._isIncomplete;
    },
    set: function (e) {
      this._isIncomplete = e;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillTree.prototype.childIDProperty = function (e) {
    return e.tier;
  };
  Object.defineProperty(GeneralSkillTree.prototype, "childNodeClass", {
    get: function () {
      return a.GeneralSkillTier;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTree;
}(o.AGeneralSkillTreeNode);
exports.GeneralSkillTree = s;