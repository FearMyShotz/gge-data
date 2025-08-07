Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialBuildDefenseToolsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBuildDefenseToolsCommand, e);
  TutorialBuildDefenseToolsCommand.prototype.getSelectUnitText = function () {
    return "tut_produceTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_addTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_addTools_copy_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_produceTools_copy2_duplicate";
  };
  TutorialBuildDefenseToolsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_defensRecruitment_chatBubble";
  };
  TutorialBuildDefenseToolsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_090_030_military_menu_opened";
  };
  TutorialBuildDefenseToolsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_090_040_tools_menu_opened";
  };
  TutorialBuildDefenseToolsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_090_060_defensetools_production_confirmed";
  };
  return TutorialBuildDefenseToolsCommand;
}(require("./1971.js").TutorialBuildToolsCommand);
exports.TutorialBuildDefenseToolsCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");