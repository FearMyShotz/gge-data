Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function GeneralSkillLevel(t) {
    return e.call(this, t) || this;
  }
  n.__extends(GeneralSkillLevel, e);
  GeneralSkillLevel.prototype.insertSkill = function (e) {
    this._generalSkillVO = e;
  };
  Object.defineProperty(GeneralSkillLevel.prototype, "generalSkillVO", {
    get: function () {
      return this._generalSkillVO;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillLevel;
}(require("./677.js").AGeneralSkillTreeNode);
exports.GeneralSkillLevel = o;