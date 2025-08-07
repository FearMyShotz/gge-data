Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./51.js");
var r = require("./1438.js");
var l = require("./122.js");
var c = require("./92.js");
var u = require("./4.js");
var d = require("./252.js");
var p = createjs.Point;
var h = function (e) {
  function TutorialBuildBuildingActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBuildBuildingActionCommand, e);
  TutorialBuildBuildingActionCommand.prototype.internalExecute = function () {
    if (this.layoutManager.isInMyCastle) {
      this.highlightBuildMenuButtonOnPanel();
    } else {
      this.tutorialController.waitForLayoutStateChangeFinished(f.CastleLayoutManager.STATE_ISO, this.bindFunction(this.waitUntilPlayerSwitchToMainCastle));
    }
  };
  TutorialBuildBuildingActionCommand.prototype.actionConditionValid = function () {
    for (var e = 0, t = _.Iso.renderer.objects.provider.getObjectsByGroupType(g.IsoObjectGroupEnum.INNER_BUILDINGS); e < t.length; e++) {
      if (t[e].vo.wodId == this._tutorialStepVO.attributes.get(d.TutorialBasicActionCommand.WODID)) {
        return false;
      }
    }
    return true;
  };
  TutorialBuildBuildingActionCommand.prototype.waitUntilPlayerSwitchToMainCastle = function () {
    this.highlightBuildMenuButtonOnPanel();
  };
  TutorialBuildBuildingActionCommand.prototype.highlightBuildMenuButtonOnPanel = function () {
    this.filter.allowNoDialogs();
    var e = this.getActionPanelButtonDisp(E.BuildMenuPanelButton);
    this.arrows.replace(e, true, false, 1, new p(15, 5));
    this.replaceActionPanelButtonInBlocker(E.BuildMenuPanelButton);
    this.spotlight.replace(e);
    this.layoutManager.tutorialPanel.showWithText("tutorial_openBuildshop_copy_duplicate", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    this.tutorialController.waitForLayoutStateChangeFinished(f.CastleLayoutManager.STATE_ISO, this.bindFunction(this.onPlayerOpenedBuildMenu));
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerOpenedBuildMenu = function (e = null) {
    if (_.Iso.renderer.strategies.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILD_MODE)) {
      this.trackStep("010_030_build_menu_opened");
      this.layoutManager.tutorialPanel.hide();
      this.layoutManager.getPanel(O.CastleDecoShopPanel).changeCategory(this.getBuildingCategory());
      this.waitUntilPlayerDragBuilding();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onDecoShopPanelClose = function () {
    if (this.layoutManager.isInMyCastle) {
      this.removeTutorialMarker();
      this.tutorialController.removeListeners();
      this.highlightBuildMenuButtonOnPanel();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.waitUntilPlayerDragBuilding = function () {
    this.layoutManager.tutorialPanel.showWithText("tut_secondQuestBuildWoodcutter_copy_duplicate", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
    var e = this.layoutManager.getPanel(O.CastleDecoShopPanel);
    var t = TutorialBuildBuildingActionCommand.getMCByBuildingVO(m.WoodcutterBuildingVO, e.decoShopPanel);
    this.arrows.replace(t);
    this.blocker.replace(t);
    this.spotlight.replace(t);
    this.tutorialController.waitForLayoutStateChangeFinished(f.CastleLayoutManager.STATE_ISO, this.bindFunction(this.onDecoShopPanelClose));
    this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerSelectBuildingInBuildMenu = function (e) {
    if (e.params[0].wodId == this._tutorialStepVO.attributes.get(d.TutorialBasicActionCommand.WODID)) {
      this.showTutorialMarker();
      this.layoutManager.tutorialPanel.showWithText("tut_secondQuestConfirmPlacement_copy_duplicate", s.ClientConstCharacter.CHAR_ID_FEMALE_TUTORIAL_CHARACTER);
      this.trackStep("010_040_woodcutter_selected");
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_START, this.bindFunction(this.onPlayerSelectBuildingInBuildMenu));
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
      this.tutorialController.registerComplexListener(this.controller, r.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.clearBlockers();
      this.filter.allowNoDialogs();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onPlayerPlacedBuilding = function (e) {
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
  };
  TutorialBuildBuildingActionCommand.prototype.onCategoryChanged = function (e) {
    if (this.tutorialData().isInTutorial()) {
      if (e.newCategory != this.getBuildingCategory()) {
        this.removeTutorialMarker();
        this.layoutManager.tutorialPanel.hide();
        var t = this.getPanelDisp(O.CastleDecoShopPanel)["btn_" + this.getBuildingCategory().toLowerCase()];
        this.arrows.replace(t, true, false, 1, new p(18, 17));
        this.blocker.replace(t);
      } else {
        this.tutorialController.removeListeners();
        this.waitUntilPlayerDragBuilding();
      }
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingLost = function (e) {
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    if (e.params[0].vo.wodId == this._tutorialStepVO.attributes.get(d.TutorialBasicActionCommand.WODID)) {
      this.removeTutorialMarker();
      this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
      this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onPlayerPlacedBuilding));
      this.waitUntilPlayerDragBuilding();
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingPositionInvalid = function (e) {
    this.removeTutorialMarker();
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DRAG_INVALID, this.bindFunction(this.onBuildingPositionInvalid));
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DECO_SHOP_DRAG_STOP, this.bindFunction(this.onBuildingLost));
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE, this.bindFunction(this.onBuildingPlacedOnValidPosition));
    this.waitUntilPlayerDragBuilding();
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildingPlacedOnValidPosition = function (e) {
    if (e.params[0] == this._tutorialStepVO.attributes.get(d.TutorialBasicActionCommand.WODID)) {
      this.filter.allowNoDialogs();
      this.blocker.allowNoClicks();
      this.tutorialController.removeListeners();
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
      if (!this.layoutManager.isInState(f.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = f.CastleLayoutManager.STATE_ISO;
      }
      _.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      this.removeTutorialMarker();
      this.layoutManager.tutorialPanel.hide();
      this.tutorialController.registerComplexListener(this.controller, c.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onRingMenuOpen = function (e) {
    if (this.layoutManager) {
      C.IsoHelper.view.showRingMenu(false);
    }
  };
  TutorialBuildBuildingActionCommand.prototype.onBuildBuildingComplete = function (e) {
    this.onRingMenuOpen(null);
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_SHOW_RING_MENU, this.bindFunction(this.onRingMenuOpen));
    this.tutorialController.removeComplexListener(this.controller, c.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, this.bindFunction(this.onBuildBuildingComplete));
    this.tutorialController.removeComplexListener(this.controller, r.CastleDecoShopPanelEvent.CHANGE_CATEGORY, this.bindFunction(this.onCategoryChanged));
    this.trackStep("010_050_woodcutter_confirmed");
    this.finishStep();
  };
  TutorialBuildBuildingActionCommand.getMCByBuildingVO = function (e, t) {
    var i = e.toString();
    i = (i = i.substr("function ".length)).substr(0, i.indexOf("("));
    for (var n = 0; n < 4; ++n) {
      var o = t["i" + n];
      if (o.shopVO && a.instanceOfClass(o.shopVO, i)) {
        return o;
      }
    }
    return null;
  };
  TutorialBuildBuildingActionCommand.prototype.showTutorialMarker = function () {
    _.Iso.renderer.objects.floorMarks.tutorialMarkerVE.show(new p(205, 212), new p(5, 5));
  };
  TutorialBuildBuildingActionCommand.prototype.removeTutorialMarker = function () {
    _.Iso.renderer.objects.floorMarks.tutorialMarkerVE.hide();
  };
  TutorialBuildBuildingActionCommand.prototype.getBuildingCategory = function () {
    return u.CastleModel.wodData.getBuildingVOById(this._tutorialStepVO.attributes.get(d.TutorialBasicActionCommand.WODID)).shopCategory;
  };
  return TutorialBuildBuildingActionCommand;
}(d.TutorialBasicActionCommand);
exports.TutorialBuildBuildingActionCommand = h;
var g = require("./143.js");
var C = require("./46.js");
var _ = require("./34.js");
var m = require("./534.js");
var f = require("./17.js");
var O = require("./260.js");
var E = require("./1132.js");
o.classImplementsInterfaces(h, "ISimpleCommand");