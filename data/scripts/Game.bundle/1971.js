Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./51.js");
var c = require("./91.js");
var u = require("./129.js");
var d = require("./122.js");
var p = require("./4.js");
var h = require("./1573.js");
var g = require("./8.js");
var C = require("./159.js");
var _ = require("./252.js");
var m = createjs.MouseEvent;
var f = function (e) {
  function TutorialAbstractMilitaryCommand() {
    var t = this;
    t._amountBeforeRecruitment = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TutorialAbstractMilitaryCommand, e);
  TutorialAbstractMilitaryCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    y.CastleUnitAmountComponent.isLimitedByTutorial = true;
    this._amountBeforeRecruitment = r.int(p.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.WODID)));
    this.tutorialController.registerComplexListener(this.controller, u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
    this.goToMainCastle();
  };
  TutorialAbstractMilitaryCommand.prototype.goToMainCastle = function () {
    if (this.layoutManager.isInMyCastle) {
      this.hintTowardsMilitaryMenu();
    } else {
      if (p.CastleModel.worldmapData) {
        p.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.hintTowardsMilitaryMenu));
      p.CastleModel.smartfoxClient.sendCommandVO(new C.C2SJoinCastleVO(C.C2SJoinCastleVO.MY_CASTLE, s.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialAbstractMilitaryCommand.prototype.hintTowardsMilitaryMenu = function () {
    if (!this.layoutManager.isInState(E.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = E.CastleLayoutManager.STATE_ISO;
    }
    if (O.Iso.renderer.strategies.currentStrategy.isActive(d.IsoRenderStrategyEnum.BUILD_MODE)) {
      O.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.filter.allowNoDialogs();
    this.layoutManager.tutorialPanel.showWithText(this.getOpenMilitaryMenuText(), l.ClientConstCharacter.CHAR_ID_GENERAL);
    var e = this.getActionPanelButtonDisp(I.RecruitPanelButton);
    this.arrows.replace(e, true, false, 1, _.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
    this.replaceActionPanelButtonInBlocker(I.RecruitPanelButton);
    this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(I.RecruitPanelButton), this.bindFunction(this.showButton));
  };
  TutorialAbstractMilitaryCommand.prototype.showButton = function () {
    if (!this.layoutManager.isInState(E.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = E.CastleLayoutManager.STATE_ISO;
    }
    if (O.Iso.renderer.strategies.currentStrategy.isActive(d.IsoRenderStrategyEnum.BUILD_MODE)) {
      O.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.trackStep(this.getOpenMilitaryMenuTrackingID());
    this.tutorialController.registerComplexListener(this.controller, c.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
    var e = this.getActionPanelButtonDisp(this.getButtonClass());
    this.arrows.replace(e, true, false, 1, _.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
    this.replaceActionPanelButtonInBlocker(this.getButtonClass());
    this.layoutManager.tutorialPanel.showWithText(this.getClickMilitarySubMenuText(), l.ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.replace(b.CastleRecruitDialog);
    this.tutorialController.waitForExternalDialogShow(b.CastleRecruitDialog, this.bindFunction(this.waitForDialog));
  };
  TutorialAbstractMilitaryCommand.prototype.waitForDialog = function () {};
  TutorialAbstractMilitaryCommand.prototype.checkInternalDialogOpened = function (e) {
    if (this.tutorialController && this.layoutManager) {
      this.tutorialController.removeComplexListener(this.controller, c.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.bindFunction(this.checkInternalDialogOpened));
      var t = o.castAs(this.layoutManager.getDialog(b.CastleRecruitDialog), "CastleRecruitDialog");
      if (!t || !t.isVisible()) {
        this.hintTowardsMilitaryMenu();
      }
    }
  };
  TutorialAbstractMilitaryCommand.prototype.waitForSelectUnit = function () {
    this.trackStep(this.getRecruitDialogOpenedTrackingID());
    if (this.selectUnitManual) {
      var e = this.layoutManager.getDialog(b.CastleRecruitDialog);
      e.currentSublayer.forceToManualSelection();
      this.layoutManager.tutorialPanel.showWithText(this.getSelectUnitText(), l.ClientConstCharacter.CHAR_ID_GENERAL);
      var t = r.int(this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.WODID));
      var i = e.getClipContainerForUnit(t, p.CastleModel.wodData.getUnitVOByWodId(t).unitCategory);
      if (i) {
        this.arrows.replace(i);
        this.blocker.replace(i);
      }
      this.tutorialController.registerComplexListener(this.controller, h.CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    } else {
      this.tutorialController.registerComplexListener(this.controller, u.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    }
  };
  TutorialAbstractMilitaryCommand.prototype.onUnitSelected = function (e = null) {
    var t = this.layoutManager.getDialog(b.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.tutorialController.removeComplexListener(this.controller, h.CastleRecruitSelectUnitEvent.SHOW_UNIT_SELECTION, this.bindFunction(this.onUnitSelected));
    this.tutorialController.removeComplexListener(this.controller, u.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED, this.bindFunction(this.onUnitSelected));
    this.trackStep(this.getUnitRecruitmentConfirmedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    if (parseInt(this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.AMOUNT)) != t.selectedUnitAmount) {
      t.selectedUnitAmount = this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.AMOUNT);
    }
    this.waitForUnitSelectOK();
  };
  TutorialAbstractMilitaryCommand.prototype.waitForUnitSelectOK = function () {
    var e = this.layoutManager.getDialog(b.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
    this.arrows.replace(e.disp.recruitmentBtn, false);
    this.blocker.replace(e.disp.recruitmentBtn);
    this.tutorialController.registerComplexListener(e.disp.recruitmentBtn, m.CLICK, this.bindFunction(this.onRecruitmentStarted));
    this.layoutManager.tutorialPanel.showWithText(this.getConfirmUnitSelectionText(), l.ClientConstCharacter.CHAR_ID_GENERAL, D.CastleTutorialPanel.POS_TOP_RIGHT, [80]);
  };
  TutorialAbstractMilitaryCommand.prototype.onRecruitmentStarted = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      var t = this.layoutManager.getDialog(b.CastleRecruitDialog).currentSublayer.recruitSelectedUnitComponent;
      this.tutorialController.removeComplexListener(t.disp.recruitmentBtn, m.CLICK, this.bindFunction(this.onRecruitmentStarted));
      this.arrows.clear();
      this.blocker.clear();
      this.blocker.allowNoClicks();
      this.layoutManager.tutorialPanel.showWithText(this.getClickOnRecruitDialogCloseText(), l.ClientConstCharacter.CHAR_ID_GENERAL, D.CastleTutorialPanel.POS_BOTTOM_RIGHT);
    }
  };
  TutorialAbstractMilitaryCommand.prototype.onRecruitmentFinished = function (e) {
    if (this._amountBeforeRecruitment + this._tutorialStepVO.getIntAttribute(_.TutorialBasicActionCommand.AMOUNT, 0) <= p.CastleModel.militaryData.unitInventory.getUnitCountByWodId(this._tutorialStepVO.getIntAttribute(_.TutorialBasicActionCommand.WODID, 0))) {
      this.tutorialController.removeComplexListener(this.controller, u.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onRecruitmentFinished));
      this.layoutManager.hideAllDialogs();
      this.finishStep();
    }
  };
  TutorialAbstractMilitaryCommand.prototype.actionConditionValid = function () {
    var e = r.int(this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.WODID));
    var t = r.int(this._tutorialStepVO.attributes.get(_.TutorialBasicActionCommand.AMOUNT));
    return r.int(p.CastleModel.militaryData.unitInventory.getUnitCountByWodId(e)) < t;
  };
  TutorialAbstractMilitaryCommand.prototype.finishStep = function () {
    y.CastleUnitAmountComponent.isLimitedByTutorial = false;
    e.prototype.finishStep.call(this);
  };
  Object.defineProperty(TutorialAbstractMilitaryCommand.prototype, "selectUnitManual", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  TutorialAbstractMilitaryCommand.prototype.getButtonClass = function () {
    return null;
  };
  TutorialAbstractMilitaryCommand.prototype.getSelectUnitText = function () {
    return "please override the getSelectUnitText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getOpenMilitaryMenuText = function () {
    return "please override the getOpenMilitaryMenuText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getClickMilitarySubMenuText = function () {
    return "please override the getClickMilitarySubMenuText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getClickOnRecruitDialogCloseText = function () {
    return "please override the getClickOnDialogCloseText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getConfirmUnitSelectionText = function () {
    return "please override the getConfirmUnitSelectionText method";
  };
  TutorialAbstractMilitaryCommand.prototype.getOpenMilitaryMenuTrackingID = function () {
    return "please override the getOpenMilitaryMenuTrackingID method";
  };
  TutorialAbstractMilitaryCommand.prototype.getRecruitDialogOpenedTrackingID = function () {
    return "please override the getRecruitMenuOpenedTrackingID method";
  };
  TutorialAbstractMilitaryCommand.prototype.getUnitRecruitmentConfirmedTrackingID = function () {
    return "please override the getUnitRecruitmentConfirmedTrackingID method";
  };
  return TutorialAbstractMilitaryCommand;
}(_.TutorialBasicActionCommand);
exports.TutorialAbstractMilitaryCommand = f;
var O = require("./33.js");
var E = require("./17.js");
var y = require("./297.js");
var b = require("./224.js");
var D = require("./675.js");
var I = require("./845.js");
a.classImplementsInterfaces(f, "ISimpleCommand");