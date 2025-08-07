Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./51.js");
var l = require("./37.js");
var c = require("./199.js");
var u = require("./707.js");
var d = require("./122.js");
var p = require("./4.js");
var h = require("./892.js");
var g = require("./159.js");
var C = require("./252.js");
var _ = createjs.MouseEvent;
var m = createjs.Point;
var f = function (e) {
  function TutorialEquipDefenseCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialEquipDefenseCommand, e);
  TutorialEquipDefenseCommand.prototype.internalExecute = function () {
    if (this.layoutManager.isInMyCastle) {
      this.checkDefenceData();
    } else {
      if (p.CastleModel.worldmapData) {
        p.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.tutorialController.waitForJoinCastle(this.bindFunction(this.checkDefenceData));
      p.CastleModel.smartfoxClient.sendCommandVO(new g.C2SJoinCastleVO(g.C2SJoinCastleVO.MY_CASTLE, a.WorldClassic.KINGDOM_ID));
    }
  };
  TutorialEquipDefenseCommand.prototype.checkDefenceData = function (e = null) {
    if (p.CastleModel.defenceData.itemsKeep) {
      this.readyToExecute();
    } else {
      var t = p.CastleModel.areaData.activeAreaInfo;
      this.tutorialController.registerComplexListener(this.controller, u.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
      p.CastleModel.smartfoxClient.sendCommandVO(new h.C2SDefenceCompleteVO(t.absAreaPos, t.objectId));
    }
  };
  TutorialEquipDefenseCommand.prototype.onGetDefenceInfos = function (e) {
    this.tutorialController.removeComplexListener(this.controller, u.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    this.readyToExecute();
  };
  TutorialEquipDefenseCommand.prototype.readyToExecute = function () {
    if (this.uniqueActionConditionValid()) {
      this.filter.replace(b.CastleDefenceDialog);
      this.filter.add(y.CastleDefenceAddUnitsDialog);
      this.hintTowardsMilitaryMenu();
    }
  };
  TutorialEquipDefenseCommand.prototype.hintTowardsMilitaryMenu = function () {
    this.controller.removeEventListener(l.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.hintTowardsMilitaryMenu));
    if (!this.layoutManager.isInState(E.CastleLayoutManager.STATE_ISO)) {
      this.layoutManager.state = E.CastleLayoutManager.STATE_ISO;
    }
    if (O.Iso.renderer.strategies.currentStrategy.isActive(d.IsoRenderStrategyEnum.BUILD_MODE)) {
      O.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
    }
    this.layoutManager.tutorialPanel.showWithText("tut_defence_openDefenceScreen_copy_duplicate", r.ClientConstCharacter.CHAR_ID_GENERAL);
    var e = this.getActionPanelButtonDisp(D.RecruitPanelButton);
    this.arrows.replace(e, true, false, 1, new m(15, 5));
    this.replaceActionPanelButtonInBlocker(D.RecruitPanelButton);
    this.spotlight.replace(e);
    this.tutorialController.waitForExternalDialogShow(b.CastleDefenceDialog, this.bindFunction(this.waitForToolsInDefenseDialog));
    this.tutorialController.waitForSublayerPanelShow(this.getActionPanelButton(D.RecruitPanelButton), this.bindFunction(this.showButton));
  };
  TutorialEquipDefenseCommand.prototype.showButton = function () {
    var e = this.getActionPanelButtonDisp(I.DefencePanelButton);
    this.trackStep("s_090_080_military_menu_opened");
    this.arrows.replace(e, true, false, 1, new m(15, 5));
    this.replaceActionPanelButtonInBlocker(I.DefencePanelButton);
    this.spotlight.replace(e);
    this.tutorialController.waitForSublayerPanelHide(this.getActionPanelButton(D.RecruitPanelButton), this.bindFunction(this.onMilitarySublayerHide));
  };
  TutorialEquipDefenseCommand.prototype.onMilitarySublayerHide = function () {
    this.tutorialController.removeListeners();
    this.hintTowardsMilitaryMenu();
  };
  TutorialEquipDefenseCommand.prototype.waitForToolsInDefenseDialog = function () {
    this.tutorialController.removeListeners();
    this.trackStep("s_090_090_defense_menu_opened");
    this.blocker.clear();
    this.spotlight.clear();
    this.tutorialController.registerComplexListener(this.controller, c.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
  };
  TutorialEquipDefenseCommand.prototype.checkWodWithCurrentDefenseCategory = function (e) {
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    var t = parseInt(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.WODID));
    var i = this.layoutManager.getDialog(b.CastleDefenceDialog);
    if (p.CastleModel.wodData.getUnitVOByWodId(t).isToolForSlotType(i.curentShopCategory)) {
      this.showToolsInDefenseDialog();
    } else {
      this.waitForShopCategory();
    }
  };
  TutorialEquipDefenseCommand.prototype.waitForShopCategory = function () {
    var e = parseInt(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.WODID));
    var t = this.layoutManager.getDialog(b.CastleDefenceDialog).getCategoryButtonForUnit(e);
    if (t) {
      this.arrows.replace(t);
      this.blocker.replace(t);
      this.tutorialController.registerComplexListener(this.controller, c.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.checkWodWithCurrentDefenseCategory));
    }
  };
  TutorialEquipDefenseCommand.prototype.showToolsInDefenseDialog = function () {
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.FIGHT_SCREEN_SHOP_FILLED, this.bindFunction(this.showToolsInDefenseDialog));
    var e = this.layoutManager.getDialog(b.CastleDefenceDialog);
    var t = parseInt(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.WODID));
    var i = e.getShopItemHolderByUnit(t);
    if (i) {
      this.arrows.replace(i);
      this.blocker.replace(i);
      this.layoutManager.tutorialPanel.showWithText("tut_defence_selectWall_copy_duplicate", r.ClientConstCharacter.CHAR_ID_GENERAL);
      this.tutorialController.registerComplexListener(i, _.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    }
  };
  TutorialEquipDefenseCommand.prototype.onToolSelected = function (e) {
    this.tutorialController.removeComplexListener(e.target, _.MOUSE_DOWN, this.bindFunction(this.onToolSelected));
    var t = parseInt(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.WODID));
    var i = this.layoutManager.getDialog(b.CastleDefenceDialog);
    this.targetSlot = i.getFittingDefenseSlotForTutorial(t);
    if (this.targetSlot) {
      this.arrows.replace(this.targetSlot.parent);
      this.blocker.replace(this.targetSlot.parent);
      this.blocker.ignoreMouseMove = true;
      this.tutorialController.registerComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
      this.tutorialController.registerComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
      this.tutorialController.waitForExternalDialogShow(y.CastleDefenceAddUnitsDialog, this.bindFunction(this.waitForAmountConfirm));
    }
  };
  TutorialEquipDefenseCommand.prototype.onToolsMisplaced = function (e) {
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.showToolsInDefenseDialog();
  };
  TutorialEquipDefenseCommand.prototype.onToolPlaced = function (e) {
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_ITEMS_UPDATED, this.bindFunction(this.onToolsMisplaced));
    this.tutorialController.removeComplexListener(this.controller, c.CastleDialogEvent.DEFENCE_SCREEN_TOOLS_PLACED, this.bindFunction(this.onToolPlaced));
    this.trackStep("s_090_100_slot_selected");
  };
  TutorialEquipDefenseCommand.prototype.waitForAmountConfirm = function () {
    this.trackStep("s_090_110_slider_locked");
    var e = this.layoutManager.getDialog(y.CastleDefenceAddUnitsDialog).dialogDisp.btn_ok;
    this.layoutManager.tutorialPanel.hide();
    this.arrows.replace(e);
    this.blocker.replace(e);
    this.spotlight.replace(e);
    this.tutorialController.waitForDialogHide(y.CastleDefenceAddUnitsDialog, this.bindFunction(this.onToolPlacementConfirmed));
  };
  TutorialEquipDefenseCommand.prototype.onToolPlacementConfirmed = function () {
    this.trackStep("s_090_120_defensetools_confirmed");
    var e = this.layoutManager.getDialog(b.CastleDefenceDialog);
    this.arrows.replace(e.disp.bottomMenu.btn_close);
    this.blocker.replace(e.disp.bottomMenu.btn_close);
    this.spotlight.clear();
    this.tutorialController.onClick(e.disp.bottomMenu.btn_close, this.bindFunction(this.onConfirmDefenceBtnClicked));
  };
  TutorialEquipDefenseCommand.prototype.onConfirmDefenceBtnClicked = function () {
    this.trackStep("s_090_130_defense_closed");
    this.finishStep();
  };
  TutorialEquipDefenseCommand.prototype.uniqueActionConditionValid = function () {
    var e = s.int(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.WODID));
    var t = s.int(this._tutorialStepVO.attributes.get(C.TutorialBasicActionCommand.AMOUNT));
    if (p.CastleModel.defenceData.itemsKeep && s.int(p.CastleModel.defenceData.getAmountOfEquippedUnits(e)) >= t) {
      return false;
    }
    return true;
  };
  return TutorialEquipDefenseCommand;
}(C.TutorialBasicActionCommand);
exports.TutorialEquipDefenseCommand = f;
var O = require("./33.js");
var E = require("./17.js");
var y = require("./1401.js");
var b = require("./426.js");
var D = require("./845.js");
var I = require("./1856.js");
o.classImplementsInterfaces(f, "ISimpleCommand");