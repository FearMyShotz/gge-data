Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLegendSkillLevel(t) {
    return e.call(this, t) || this;
  }
  n.__extends(CastleLegendSkillLevel, e);
  CastleLegendSkillLevel.prototype.insertSkill = function (e) {
    this._legendSkillVO = e;
  };
  Object.defineProperty(CastleLegendSkillLevel.prototype, "legendSkillVO", {
    get: function () {
      return this._legendSkillVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLegendSkillLevel;
}(require("./676.js").ACastleLegendSkillTreeNode);
exports.CastleLegendSkillLevel = o;