Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstLegendSkills() {}
  ClientConstLegendSkills.getGenericTextReplacementIDForEffectType = function (e) {
    if (ClientConstLegendSkills.GROUP_ABSOLUTE_SKILLS.indexOf(e) > -1) {
      return "";
    } else {
      return o.GenericTextIds.VALUE_PERCENTAGE;
    }
  };
  ClientConstLegendSkills.getBBColorCode = function (e) {
    return e.replace("0x", "#");
  };
  ClientConstLegendSkills.getHexColorValue = function (e) {
    return a.int(e);
  };
  ClientConstLegendSkills.__initialize_static_members = function () {
    ClientConstLegendSkills.GROUP_ABSOLUTE_SKILLS = [s.CastleLegendSkillEffectsEnum.ADDITIONAL_WAVE, s.CastleLegendSkillEffectsEnum.ADDITIONAL_ATTACK_TOOL_AMOUNT_FLANK, s.CastleLegendSkillEffectsEnum.LOOT_CAPACITY_BONUS, s.CastleLegendSkillEffectsEnum.SPY_AMOUNT_BONUS, s.CastleLegendSkillEffectsEnum.ADDITIONAL_DEFENSE_TOOL_SLOT_FLANK, s.CastleLegendSkillEffectsEnum.HIDEOUT_CAPACITY_BONUS];
  };
  ClientConstLegendSkills.COLORCODE_RED = "#F86D6D";
  ClientConstLegendSkills.COLORCODE_LIGHTWHITE = "#F2F2F2";
  ClientConstLegendSkills.COLORCODE_GREEN = "#A0CC3A";
  ClientConstLegendSkills.COLORCODE_YELLOW = "#F9BB23";
  ClientConstLegendSkills.COLORCODE_TEXT = "#CCCCCC";
  return ClientConstLegendSkills;
}();
exports.ClientConstLegendSkills = n;
var o = require("./2.js");
var a = require("./6.js");
var s = require("./214.js");
n.__initialize_static_members();