Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function LegendSkillsDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(LegendSkillsDataEvent, e);
  LegendSkillsDataEvent.__initialize_static_members = function () {
    LegendSkillsDataEvent.LEGEND_SKILLS_RESET = "legendSkillsReset";
    LegendSkillsDataEvent.LEGEND_SKILL_ADDED = "legendSkillAdded";
    LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED = "legendSkillsUpdated";
  };
  return LegendSkillsDataEvent;
}(createjs.Event);
exports.LegendSkillsDataEvent = o;
o.__initialize_static_members();