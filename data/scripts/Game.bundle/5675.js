Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./51.js");
var u = require("./91.js");
var d = require("./37.js");
var p = require("./32.js");
var h = require("./1873.js");
var g = require("./92.js");
var C = require("./4.js");
var _ = require("./211.js");
var m = require("./1057.js");
var f = require("./264.js");
var O = require("./252.js");
var E = createjs.Point;
var y = function (e) {
  function TutorialAttackRobberBaronCommand() {
    var t = this;
    t._sideQuests = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TutorialAttackRobberBaronCommand, e);
  TutorialAttackRobberBaronCommand.prototype.internalExecute = function () {
    this.filter.allowNoDialogs();
    if (this._tutorialStepVO.attributes.hasOwnProperty(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS)) {
      this._sideQuests = this._tutorialStepVO.attributes.get(TutorialAttackRobberBaronCommand.SIDE_QUESTIDS).split(",");
    }
    this.layoutManager.dispatchEvent(new u.CastleLayoutManagerEvent(u.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
    this.goToWorldMap();
  };
  TutorialAttackRobberBaronCommand.prototype.goToWorldMap = function () {
    if (this.layoutManager.isOnMap) {
      this.arrivedAtWorldmap();
    } else {
      if (!this.layoutManager.isInState(I.CastleLayoutManager.STATE_ISO)) {
        this.layoutManager.state = I.CastleLayoutManager.STATE_ISO;
      }
      b.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(false);
      var e = this.getActionPanelButtonDisp(R.WorldmapPanelButton);
      this.arrows.replace(e, true, false, 1, O.TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET);
      this.replaceActionPanelButtonInBlocker(R.WorldmapPanelButton);
      this.spotlight.replace(e);
      this.tutorialController.registerComplexListener(this.controller, h.CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.arrivedAtWorldmap = function (e = null) {
    this.trackStep("s_080_070_worldmap_opened");
    this.tutorialController.removeComplexListener(this.controller, h.CastleWorldmapScreenEvent.WORLDMAP_LOADED, this.bindFunction(this.arrivedAtWorldmap));
    this.findValidRobberBaron();
  };
  TutorialAttackRobberBaronCommand.prototype.onPlayernameSelected = function (e = null) {
    this.tutorialController.removeComplexListener(this.controller, p.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
    if (this._sideQuests != null) {
      for (var t = 0, i = this._sideQuests; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          C.CastleModel.smartfoxClient.sendCommandVO(new m.C2SQuestStarterClickVO(n));
        }
      }
    }
    this.highlightDungeon();
  };
  TutorialAttackRobberBaronCommand.prototype.findValidRobberBaron = function () {
    this.tutorialController.registerComplexListener(this.controller, d.CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    C.CastleModel.smartfoxClient.sendCommandVO(new f.C2SFindNextMapObjectVO(l.WorldConst.AREA_TYPE_DUNGEON, r.WorldClassic.KINGDOM_ID, 1, 1));
  };
  TutorialAttackRobberBaronCommand.prototype.waitUntilFoundValidRobberBaronMapObject = function (e) {
    this.tutorialController.removeComplexListener(this.controller, d.CastleServerMessageArrivedEvent.FNM_ARRIVED, this.bindFunction(this.waitUntilFoundValidRobberBaronMapObject));
    this.showRobberBaron(new E(e.params[0], e.params[1]));
  };
  TutorialAttackRobberBaronCommand.prototype.showRobberBaron = function (e) {
    if (this.layoutManager.worldmapScreen.renderer) {
      this.layoutManager.dispatchEvent(new u.CastleLayoutManagerEvent(u.CastleLayoutManagerEvent.LOCK_CAMERA, [true]));
      this.layoutManager.worldmapScreen.camera.centerArea(e);
      this._dungeonVE = C.CastleModel.worldmapData.getAreaVEByXY(e, true);
      if (C.CastleModel.userData.isPlayerNameTemporary) {
        M.CastleTutorialDialogFilter.instance.add(A.CastleSelectUserName);
        this.tutorialController.waitForDialogShow(A.CastleSelectUserName, this.bindFunction(this.onShowSelectUsername));
        D.CastleDialogHandler.getInstance().registerDefaultDialogs(A.CastleSelectUserName);
      } else {
        this.highlightDungeon();
      }
    } else {
      o.debug("[AttackRobberBaron] No worldmapScreen renderer!");
      this.tutorialController.registerComplexListener(this.controller, d.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.onShowSelectUsername = function () {
    L.CastleTutorialArrowController.instance.clear();
    P.CastleTutorialClickBlocker.instance.clear();
    T.CastleTutorialSpotlight.instance.clear();
    this.tutorialController.registerComplexListener(this.controller, p.CastleUserDataEvent.CHANGE_USER_NAME, this.bindFunction(this.onPlayernameSelected));
  };
  TutorialAttackRobberBaronCommand.prototype.highlightDungeon = function (e = null) {
    this.tutorialController.removeComplexListener(this.controller, g.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    if (!this._dungeonVE) {
      a.error("No dungeon found! Releasing blockers!");
      a.error(new Error().stack);
      this.clearBlockers();
      return;
    }
    if (!this.layoutManager.isDialogVisibleByName(S.CastleStartAttackDialog)) {
      o.debug("[AttackRobberBaron] Dungeon found!");
      if (!e) {
        this.layoutManager.worldmapScreen.renderer.camera.centerArea(this._dungeonVE.dungeonMapObjectVO.absAreaPos);
      }
      this.arrows.replace(this._dungeonVE.disp, true, true, 1, O.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      this.blocker.replace(this._dungeonVE.disp);
      this.spotlight.replace(this._dungeonVE.disp, O.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
      if (this.layoutManager && this.layoutManager.tutorialPanel) {
        this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy_duplicate", c.ClientConstCharacter.CHAR_ID_GENERAL);
        this.tutorialController.registerComplexListener(this.controller, u.CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
        this.tutorialController.registerComplexListener(this.controller, d.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      } else {
        this.clearBlockers();
      }
    }
  };
  TutorialAttackRobberBaronCommand.prototype.updateSpotlight = function (e = null) {
    this.spotlight.replace(this._dungeonVE.disp, O.TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET);
  };
  TutorialAttackRobberBaronCommand.prototype.recheckRobberBaron = function (e) {
    this.tutorialController.removeComplexListener(this.controller, d.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.recheckRobberBaron));
    this.findValidRobberBaron();
  };
  TutorialAttackRobberBaronCommand.prototype.onRingMenu = function (e) {
    if (e && e.params && e.params.length == 2 && e.params[1] == this._dungeonVE) {
      this.trackStep("s_080_080_enemy_selected");
      this.tutorialController.removeComplexListener(this.controller, g.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
      this.tutorialController.removeComplexListener(this.controller, u.CastleLayoutManagerEvent.RING_MENU_SHOWN, this.bindFunction(this.onRingMenu));
      this.tutorialController.removeComplexListener(this.controller, d.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.updateSpotlight));
      var t = e.params[0].disp.btn_attack;
      this.arrows.replace(t);
      this.blocker.replace(t);
      this.spotlight.replace(t);
      this.layoutManager.tutorialPanel.showWithText("tut_dungeon_onWorldMap_copy2_duplicate", c.ClientConstCharacter.CHAR_ID_GENERAL);
      this.filter.replace(S.CastleStartAttackDialog);
      this.tutorialController.waitForExternalDialogShow(S.CastleStartAttackDialog, this.bindFunction(this.confirmAttack));
    }
  };
  TutorialAttackRobberBaronCommand.prototype.confirmAttack = function () {
    this.tutorialController.removeComplexListener(this.controller, g.IsoEvent.HIDE_PANEL_INFO, this.bindFunction(this.highlightDungeon));
    this.trackStep("s_080_090_attack_selected");
    var e = this.layoutManager.getDialog(S.CastleStartAttackDialog).dialogDisp.btn_yes;
    this.arrows.replace(e);
    this.blocker.replace(e);
    this.spotlight.replace(e);
    this.filter.add(_.AttackDialog);
    this.tutorialController.waitForExternalDialogShow(_.AttackDialog, this.bindFunction(this.fillAttack));
  };
  TutorialAttackRobberBaronCommand.prototype.fillAttack = function () {
    this.trackStep("s_080_100_pre_attack_confirmed");
    var e = this.layoutManager.getDialog(_.AttackDialog).dialogDisp.mc_autofill_filter.mc_open.mc_autoFillAndPreset.btn_fill_waves;
    this.tutorialController.onClick(e, this.bindFunction(this.onAutoFill));
    this.arrows.replace(e);
    this.blocker.replace(e);
    this.spotlight.replace(e);
    this.layoutManager.tutorialPanel.showWithText("tut_autoFillAll_copy", c.ClientConstCharacter.CHAR_ID_GENERAL);
  };
  TutorialAttackRobberBaronCommand.prototype.onAutoFill = function () {
    this.trackStep("s_080_110_autofill_selected");
    var e = this.layoutManager.getDialog(_.AttackDialog).attackButton;
    this.arrows.replace(e);
    this.blocker.replace(e);
    this.spotlight.replace(e);
    this.layoutManager.tutorialPanel.showWithText("tut_clickAttack_copy_duplicate", c.ClientConstCharacter.CHAR_ID_GENERAL);
    this.filter.add(v.CastlePostAttackDialog);
    this.tutorialController.waitForExternalDialogShow(v.CastlePostAttackDialog, this.bindFunction(this.onTravelPlanning));
  };
  TutorialAttackRobberBaronCommand.prototype.onTravelPlanning = function () {
    this.layoutManager.tutorialPanel.hide();
    var e = this.layoutManager.getDialog(v.CastlePostAttackDialog).dialogDisp.btn_ok;
    this.arrows.replace(e);
    this.blocker.replace(e);
    this.spotlight.replace(e);
    this.tutorialController.waitForExternalDialogHide(_.AttackDialog, this.bindFunction(this.onAttackSelected));
  };
  TutorialAttackRobberBaronCommand.prototype.onAttackSelected = function () {
    this.trackStep("s_080_120_attack_selected");
    this.finishStep();
  };
  TutorialAttackRobberBaronCommand.SIDE_QUESTIDS = "sideQuestIDs";
  return TutorialAttackRobberBaronCommand;
}(O.TutorialBasicActionCommand);
exports.TutorialAttackRobberBaronCommand = y;
var b = require("./33.js");
var D = require("./9.js");
var I = require("./17.js");
var T = require("./471.js");
var v = require("./1101.js");
var S = require("./395.js");
var A = require("./5676.js");
var L = require("./300.js");
var P = require("./433.js");
var M = require("./326.js");
var R = require("./1859.js");
s.classImplementsInterfaces(y, "ISimpleCommand");