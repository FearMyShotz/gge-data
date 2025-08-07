Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./51.js");
var r = require("./87.js");
var l = require("./92.js");
var c = require("./4.js");
var u = require("./1974.js");
var d = createjs.Point;
var p = function (e) {
  function TutorialUpgradeBuildingActionCommand() {
    var t = this;
    t._startCommandWithSkipUpgrade = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._questGiverID = s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER;
    return t;
  }
  n.__extends(TutorialUpgradeBuildingActionCommand, e);
  TutorialUpgradeBuildingActionCommand.prototype.getBuilding = function () {
    for (var e = 0, t = g.Iso.renderer.objects.provider.getObjectsByGroupType(h.IsoObjectGroupEnum.INNER_BUILDINGS); e < t.length; e++) {
      var i = t[e];
      if (a.instanceOfClass(i, "ABasicBuildingVE")) {
        var n = i;
        if (n.buildingVO.wodId == this._tutorialStepVO.attributes.get(f.TutorialBasicActionCommand.WODID) && n.buildingVO.level < this._tutorialStepVO.attributes.get(TutorialUpgradeBuildingActionCommand.UPGRADE_LEVEL)) {
          return n;
        }
      }
    }
    return null;
  };
  TutorialUpgradeBuildingActionCommand.prototype.actionConditionValid = function () {
    this._startCommandWithSkipUpgrade = false;
    var e = this.getBuilding();
    return !!e && (e.buildingVO.buildingState == r.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS && (this._startCommandWithSkipUpgrade = true, this._buildingVE = e), true);
  };
  TutorialUpgradeBuildingActionCommand.prototype.internalExecute = function () {
    g.Iso.renderer.camera.isActive = false;
    if (this._startCommandWithSkipUpgrade) {
      this.clickOnBuilding();
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    } else {
      e.prototype.internalExecute.call(this);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    e.prototype.handleUntilPlayerClickedOnShowMe.call(this);
    this.tutorialController.waitForExternalDialogHide(C.CastleQuestDialog, this.bindFunction(this.clickOnBuilding));
  };
  TutorialUpgradeBuildingActionCommand.prototype.clickOnBuilding = function () {
    this.trackStep("020_040_woodcutter_shortcut_selected");
    this._buildingVE = this.getBuilding();
    if (this._buildingVE) {
      this.arrows.replace(this._buildingVE.elementContainer, true, true, 1, new d(50, 0));
      this.blocker.replace(this._buildingVE.elementContainer);
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnBuilding_copy", this._questGiverID, o.MobileHelper.isScreenTooSmall() && o.MobileHelper.isLandscape() ? m.CastleTutorialPanel.POS_TOP_RIGHT : m.CastleTutorialPanel.POS_BOTTOM_RIGHT);
      this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
    }
    this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
    this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
  };
  TutorialUpgradeBuildingActionCommand.prototype.clickedOnBuilding = function (e) {
    if (e.params && e.params[0] && e.params[0].vo.name == this.getBuildingName()) {
      this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
      this.trackStep("020_050_woodcutter_iso_selected");
      this.handleBuildingByBuildState(e);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleBuildingByBuildState = function (e) {
    if (this._buildingVE.buildingVO.buildingState == r.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS) {
      this.handleSkipBtn(e);
    } else {
      this.handleUpgradeBtn(e);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleUpgradeBtn = function (e = null) {
    this.layoutManager.tutorialPanel.showWithText("tut_clickOnUpgrade1_copy", this._questGiverID, m.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    var t = this.layoutManager.getIngameUIComponent(_.RingMenuBuilding).disp;
    this.arrows.replace(t.btn_upgradeBuilding, true, true);
    this.blocker.replace(t.btn_upgradeBuilding);
    this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
    this.tutorialController.registerComplexListener(this.controller, l.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.clickedOnBuilding));
  };
  TutorialUpgradeBuildingActionCommand.prototype.handleSkipBtn = function (e = null) {
    if (this.layoutManager.getIngameUIComponent(_.RingMenuBuilding)) {
      this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_BUILDING_UPGRADE_STARTED, this.bindFunction(this.onUpgradeBtnClicked));
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnFreeSkip_copy", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER, m.CastleTutorialPanel.POS_BOTTOM_RIGHT);
      var t = this.layoutManager.getIngameUIComponent(_.RingMenuBuilding).disp;
      this.arrows.replace(t.btn_instantBuild, true, true);
      this.blocker.replace(t.btn_instantBuild);
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.onUpgradeBtnClicked = function (e) {
    if (e.params[0].name == this.getBuildingName()) {
      this.trackStep("020_060_upgrade_selected");
      this.handleSkipBtn();
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.onBuildingUpgradeComplete = function (e) {
    if (e.params && e.params.length > 0 && a.instanceOfClass(e.params[0], "ABasicBuildingVO")) {
      if (this._buildingVE.buildingVO.buildingState == r.IsoBuildingStateEnum.UPGRADE_COMPLETED || this._buildingVE.buildingVO.buildingState == r.IsoBuildingStateEnum.BUILD_COMPLETED) {
        this.trackStep("020_080_woodcutter_upgrade_skipped");
        g.Iso.renderer.camera.scrollToCenter();
        this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_OBJECT_CHANGED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.tutorialController.removeComplexListener(this.controller, l.IsoEvent.ON_OBJECT_ADDED, this.bindFunction(this.onBuildingUpgradeComplete));
        this.finishStep();
      }
    }
  };
  TutorialUpgradeBuildingActionCommand.prototype.finishStep = function () {
    g.Iso.renderer.camera.isActive = true;
    e.prototype.finishStep.call(this);
  };
  TutorialUpgradeBuildingActionCommand.prototype.getBuildingName = function () {
    return c.CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(f.TutorialBasicActionCommand.WODID)).name;
  };
  TutorialUpgradeBuildingActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "020_030_quest_opened";
  };
  TutorialUpgradeBuildingActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "020_020_questbook_opened";
  };
  TutorialUpgradeBuildingActionCommand.UPGRADE_LEVEL = "upgradeLevel";
  return TutorialUpgradeBuildingActionCommand;
}(u.TutorialStartFromQuestBookActionCommand);
exports.TutorialUpgradeBuildingActionCommand = p;
var h = require("./143.js");
var g = require("./34.js");
var C = require("./654.js");
var _ = require("./369.js");
var m = require("./677.js");
var f = require("./252.js");
o.classImplementsInterfaces(p, "ISimpleCommand");