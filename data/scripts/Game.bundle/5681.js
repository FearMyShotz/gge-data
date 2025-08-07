Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialBuildSiegeToolsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBuildSiegeToolsCommand, e);
  TutorialBuildSiegeToolsCommand.prototype.getSelectUnitText = function () {
    return "tut_produceSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_addSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_addSiegeTools_copy";
  };
  TutorialBuildSiegeToolsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_produceSiegeTools_copy2";
  };
  TutorialBuildSiegeToolsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_siegeRecruitment_chatBubble";
  };
  TutorialBuildSiegeToolsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_080_020_military_menu_opened";
  };
  TutorialBuildSiegeToolsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_080_030_tools_menu_opened";
  };
  TutorialBuildSiegeToolsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_080_040_tool_confirmed";
  };
  return TutorialBuildSiegeToolsCommand;
}(require("./1971.js").TutorialBuildToolsCommand);
exports.TutorialBuildSiegeToolsCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");