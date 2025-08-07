Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./1972.js");
var r = function (e) {
  function TutorialRecruitUnitsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialRecruitUnitsCommand, e);
  TutorialRecruitUnitsCommand.prototype.getButtonClass = function () {
    return u.RecruitPanelButton;
  };
  TutorialRecruitUnitsCommand.prototype.goToMainCastle = function () {
    if (this.layoutManager.isInMyCastle) {
      this.showButton();
    } else {
      if (d.CastleModel.worldmapData) {
        d.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.showButton));
      d.CastleModel.smartfoxClient.sendCommandVO(new p.C2SJoinCastleVO(p.C2SJoinCastleVO.MY_CASTLE, h.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialRecruitUnitsCommand.prototype.waitForDialog = function () {
    this.layoutManager.getDialog(l.CastleRecruitDialog).changeCategoryWithParams(a.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, [a.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, c.CastleRecruitDialogUnits.FILTER_UNITS_ALL]);
    this.waitForSelectUnit();
  };
  Object.defineProperty(TutorialRecruitUnitsCommand.prototype, "selectUnitManual", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.TutorialAbstractMilitaryCommand.prototype, "selectUnitManual").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TutorialRecruitUnitsCommand.prototype.getSelectUnitText = function () {
    return "tut_recruit_SelectUnit_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getOpenMilitaryMenuText = function () {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getClickMilitarySubMenuText = function () {
    return "tut_recruit_OpenSubmenu_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "tut_recruit_running_copy_duplicate";
  };
  TutorialRecruitUnitsCommand.prototype.getConfirmUnitSelectionText = function () {
    return "tutorial_autoRecruitment_chatBubble";
  };
  TutorialRecruitUnitsCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "s_060_030_military_menu_opened";
  };
  TutorialRecruitUnitsCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "s_060_040_recruitment_menu_opened";
  };
  TutorialRecruitUnitsCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "s_060_050_unit_recruitment_confirmed";
  };
  return TutorialRecruitUnitsCommand;
}(s.TutorialAbstractMilitaryCommand);
exports.TutorialRecruitUnitsCommand = r;
var l = require("./225.js");
var c = require("./644.js");
var u = require("./846.js");
var d = require("./4.js");
var p = require("./159.js");
var h = require("./5.js");
o.classImplementsInterfaces(r, "ISimpleCommand");