Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./679.js");
var a = require("./4333.js");
var s = function (e) {
  function GeneralSkillTier(t) {
    var i = e.call(this, t) || this;
    i._isHidden = false;
    return i;
  }
  n.__extends(GeneralSkillTier, e);
  GeneralSkillTier.prototype.childIDProperty = function (e) {
    return e.skillGroupID;
  };
  Object.defineProperty(GeneralSkillTier.prototype, "childNodeClass", {
    get: function () {
      return a.GeneralSkillGroup;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.AGeneralSkillTreeNode.prototype, "childNodeClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillTier.prototype, "isHidden", {
    get: function () {
      return this._isHidden;
    },
    set: function (e) {
      this._isHidden = e;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillTier;
}(o.AGeneralSkillTreeNode);
exports.GeneralSkillTier = s;