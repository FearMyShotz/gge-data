Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./118.js");
var d = require("./129.js");
var p = require("./13.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./9.js");
var _ = require("./20.js");
var m = require("./250.js");
var f = require("./8.js");
var O = require("./41.js");
var E = require("./930.js");
var y = require("./11.js");
var b = require("./216.js");
var D = require("./247.js");
var I = require("./3834.js");
var T = require("./115.js");
var v = require("./3853.js");
var S = require("./3854.js");
var A = require("./3855.js");
var L = require("./3859.js");
var P = require("./3860.js");
var M = require("./1798.js");
var R = require("./344.js");
var V = require("./3861.js");
var x = require("./3868.js");
var w = require("./1796.js");
var B = function (e) {
  function AttackDialog() {
    var t = this;
    t.resizer = new L.AttackDialogResizer();
    t.player_left = new A.AttackDialogPlayerInfo();
    t.player_right = new A.AttackDialogPlayerInfo();
    t.spyInfo = new P.AttackDialogSpyInfo();
    t.detailView = new v.AttackDialogDetailView();
    t.autoFill = new I.AttackDialogAutoFill();
    t.waveHandler = new x.AttackDialogWaveHandler();
    t._generalSelection = new S.AttackDialogGeneralSelection();
    t.generalSelectionVisible = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, AttackDialog.NAME) || this;
  }
  n.__extends(AttackDialog, e);
  AttackDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    f.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_back, this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack, this.dialogDisp.mc_bottom_800.btn_attack, this.dialogDisp.pickerLists.btn_confirm], _.ClickFeedbackButtonHover);
    this.resizer.initWithDialogDisp(this.dialogDisp);
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.btn_back.toolTipText = "back";
  };
  AttackDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    R.AttackDialogTrackingHelper.getInstance().startAndResetSession();
    T.AttackDialogController.getInstance().initAttackVO(this.dialogProperties.attackInfoVO);
    this.resizer.onShow();
    this._generalSelection.init(this.dialogDisp.mc_general_selection);
    this.player_left.init(this.dialogDisp.mc_playerInfo, A.AttackDialogPlayerInfo.TYPE_SOURCE);
    this.player_right.init(this.dialogDisp.mc_targetInfo, A.AttackDialogPlayerInfo.TYPE_TARGET, this.dialogDisp.mc_generalInfoTooltip_target);
    this.updateGeneralIconLeft();
    this.updateGeneralIconRight();
    this.spyInfo.init(this.dialogDisp.mc_spyInfo);
    this.detailView.init(this.dialogDisp.mc_detailViewBG, this.dialogDisp.mc_detailViewCastle);
    this.autoFill.init(this.dialogDisp.mc_autofill_filter.mc_open, this.dialogDisp.mc_autofill_filter.mc_closed);
    if (!T.AttackDialogController.getInstance().selectedLord) {
      this.hide();
      C.CastleDialogHandler.getInstance().registerDefaultDialogs(b.DarkOkDialog, new o.BasicStandardOkDialogProperties("attention", "errorCode_404"));
      return;
    }
    this.waveHandler.init(this.dialogDisp.mc_waveList, this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom);
    if (this.unitPicker) {
      this.unitPicker.onParentDialogShow();
    } else {
      this.unitPicker = new V.AttackDialogUnitPicker(this.dialogDisp.pickerLists);
    }
    this.dialogDisp.mc_general_selection.visible = false;
    T.AttackDialogController.getInstance().hideDialog.add(this.bindFunction(this.hide));
    T.AttackDialogController.getInstance().openGeneralSelection.add(this.bindFunction(this.openGeneralSelection));
    T.AttackDialogController.getInstance().closeGeneralSelection.add(this.bindFunction(this.closeGeneralSelection));
    T.AttackDialogController.getInstance().onLordChanged.add(this.bindFunction(this.onLordChanged));
    T.AttackDialogController.getInstance().showPlayerInfos.add(this.bindFunction(this.onShowPlayerInfo));
    T.AttackDialogController.getInstance().showTargetInfos.add(this.bindFunction(this.onShowTargetInfo));
    T.AttackDialogController.getInstance().hidePlayerInfos.add(this.bindFunction(this.onHidePlayerInfo));
    T.AttackDialogController.getInstance().hideTargetInfos.add(this.bindFunction(this.onHideTargetInfo));
    h.CastleBasicController.getInstance().addEventListener(u.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack.txt_copy, new l.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("attack")));
    this.dialogDisp.mc_bottom_800.btn_attack.toolTipText = "launchAttack";
    T.AttackDialogController.getInstance().onResizeDialog.dispatch(true);
    if (!g.CastleModel.tutorialData.isTutorialActive) {
      T.AttackDialogController.getInstance().onShowAutoFillOptions.dispatch();
    }
    this.updateBackground();
    if (this.dialogDisp.mc_hornHolder) {
      this.attackHorn = new E.StatusIconAttackWarnings();
      this.attackHorn.addToContainer(this.dialogDisp.mc_hornHolder);
    }
    T.AttackDialogController.getInstance().applySavedFilterOptions();
    h.CastleBasicController.getInstance().addEventListener(d.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
  };
  AttackDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!t.target.dragSource && !t.target.dragTarget && !(t.target.dragTarget instanceof w.AttackDialogDragTarget)) {
      T.AttackDialogController.getInstance().stopDrag();
    }
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        C.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_attack"));
        break;
      case this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack:
      case this.dialogDisp.mc_bottom_800.btn_attack:
        T.AttackDialogController.getInstance().attackVO.setAdvisor(0, false);
        M.AttackDialogStartAttackCheck.onAttack();
        break;
      case this.dialogDisp.btn_back:
        this.hide();
        m.AttackHelper.executeAttackCommand(this.dialogProperties.attackInfoVO.targetArea, this.dialogProperties.attackInfoVO.targetArea.attackType, null);
        break;
      case this.dialogDisp.pickerLists.btn_confirm:
        T.AttackDialogController.getInstance().setSelectedWaveInfoSlotMC(null, null, -1);
    }
    if (!O.CastleMovieClipHelper.isDOPartOfDO(t.target, this.dialogDisp.pickerLists) && !O.CastleMovieClipHelper.isDOPartOfDO(t.target, this.dialogDisp.mc_waveList)) {
      T.AttackDialogController.getInstance().setSelectedWaveInfoSlotMC(null, null, T.AttackDialogController.getInstance().selectedWaveIndex);
    }
    if (!O.CastleMovieClipHelper.isDOPartOfDO(t.target, this.dialogDisp.mc_playerInfo.mc_lord)) {
      this.player_left.setLordSelectionVisibility(false);
    }
    if (t.target != this.dialogDisp.mc_playerInfo.mc_player.btn_details) {
      this.dialogDisp.mc_playerInfo.mc_playerTooltip.visible = false;
    }
    if (t.target != this.dialogDisp.mc_targetInfo.mc_player.btn_details) {
      this.dialogDisp.mc_targetInfo.mc_playerTooltip.visible = false;
    }
  };
  AttackDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this.autoFill.saveToggle) {
      T.AttackDialogController.getInstance().saveAttackFilterOptions(!this.autoFill.saveToggle.value);
    }
    this.resizer.onHide();
    this.player_left.destroy();
    this.player_right.destroy();
    this.spyInfo.destroy();
    this.detailView.destroy();
    this.autoFill.destroy();
    this.waveHandler.destroy();
    if (this.unitPicker) {
      this.unitPicker.destroy();
    }
    this._generalSelection.destroy();
    T.AttackDialogController.getInstance().hideDialog.remove(this.bindFunction(this.hide));
    T.AttackDialogController.getInstance().openGeneralSelection.remove(this.bindFunction(this.openGeneralSelection));
    T.AttackDialogController.getInstance().closeGeneralSelection.remove(this.bindFunction(this.closeGeneralSelection));
    T.AttackDialogController.getInstance().onLordChanged.remove(this.bindFunction(this.onLordChanged));
    h.CastleBasicController.getInstance().removeEventListener(u.CastleEquipmentEvent.GENERAL_ASSIGNED, this.bindFunction(this.onGeneralAssigned));
    T.AttackDialogController.getInstance().showPlayerInfos.remove(this.bindFunction(this.onShowPlayerInfo));
    T.AttackDialogController.getInstance().showTargetInfos.remove(this.bindFunction(this.onShowTargetInfo));
    T.AttackDialogController.getInstance().hidePlayerInfos.remove(this.bindFunction(this.onHidePlayerInfo));
    T.AttackDialogController.getInstance().hideTargetInfos.remove(this.bindFunction(this.onHideTargetInfo));
    this._generalIconLeft.onHide();
    this._generalIconRight.onHide();
    if (this.attackHorn) {
      this.attackHorn.dispose();
    }
    R.AttackDialogTrackingHelper.getInstance().endSessionAndTrack(false);
    h.CastleBasicController.getInstance().removeEventListener(d.CastleMilitaryDataEvent.UNIT_UPDATED, this.bindFunction(this.onUnitUpdated));
  };
  AttackDialog.prototype.openGeneralSelection = function () {
    this.generalSelectionVisible = true;
  };
  AttackDialog.prototype.closeGeneralSelection = function () {
    this.generalSelectionVisible = false;
  };
  AttackDialog.prototype.updateGeneralIconLeft = function () {
    var e = true;
    if (this._generalIconLeft) {
      e = this._generalIconLeft.isVisible;
    }
    var t = T.AttackDialogController.getInstance().selectedLord;
    var i = t && t.assignedGeneralVO ? t.assignedGeneralVO : null;
    if (this._generalIconLeft) {
      this._generalIconLeft.onHide();
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_player_left);
    this._generalIconLeft = new D.GeneralSelectionItem(i, this.dialogDisp.btn_player_left, false);
    this._generalIconLeft.onShow();
    this._generalIconLeft.onClickSignal.add(this.bindFunction(this.onClickPlayer));
    this._generalIconLeft.disp.toolTipText = i ? {
      t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_assigned_tooltip",
      p: [i.nameText]
    } : "dialog_attack_rework2022_generals_foldInGeneralsInterface_attacker_unassigned_tooltip";
    this._generalIconLeft.setVisibility(e);
  };
  AttackDialog.prototype.updateGeneralIconRight = function () {
    var e = this.dialogProperties.attackInfoVO.spyInfo.defendingLord;
    var t = e ? e.assignedGeneralVO : null;
    t = this.dialogProperties.attackInfoVO.spyInfo.remainingSpyInfoTime <= 0 ? undefined : t || null;
    if (this._generalIconRight) {
      this._generalIconRight.onHide();
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.btn_player_right);
    this._generalIconRight = new D.GeneralSelectionItem(t, this.dialogDisp.btn_player_right, false, true, true, false, null, true, T.AttackDialogController.getInstance().attackVO.targetOwner.playerID == g.CastleModel.userData.playerID);
    this._generalIconRight.onShow();
    this._generalIconRight.onClickSignal.add(this.bindFunction(this.onClickTarget));
    this._generalIconRight.disp.toolTipText = t ? {
      t: "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_assigned_tooltip",
      p: [t.nameText]
    } : t === null ? "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unassigned_tooltip" : "dialog_attack_rework2022_generals_foldInGeneralsInterface_defender_unknown_tooltip";
  };
  AttackDialog.prototype.onShowPlayerInfo = function () {
    this._generalIconLeft.setVisibility(false);
  };
  AttackDialog.prototype.onShowTargetInfo = function () {
    this._generalIconRight.setVisibility(false);
  };
  AttackDialog.prototype.onHidePlayerInfo = function () {
    this._generalIconLeft.setVisibility(true);
  };
  AttackDialog.prototype.onHideTargetInfo = function () {
    this._generalIconRight.setVisibility(true);
  };
  AttackDialog.prototype.onLordChanged = function () {
    this.updateGeneralIconLeft();
  };
  AttackDialog.prototype.onGeneralAssigned = function (e) {
    this.updateGeneralIconLeft();
  };
  AttackDialog.prototype.onClickPlayer = function () {
    T.AttackDialogController.getInstance().showPlayerInfos.dispatch();
  };
  AttackDialog.prototype.onClickTarget = function () {
    T.AttackDialogController.getInstance().showTargetInfos.dispatch();
  };
  AttackDialog.prototype.onUnitUpdated = function (e) {
    var t = c.int(e.params[0].AID);
    var i = c.int(e.params[0].SID);
    if (t == T.AttackDialogController.getInstance().attackVO.sourceArea.objectId && i == T.AttackDialogController.getInstance().attackVO.sourceArea.spaceID) {
      var n = c.int(e.params[0].WID);
      var o = c.int(e.params[0].NUA);
      T.AttackDialogController.getInstance().attackVO.unitInventory.addUnit(n, o);
    }
  };
  Object.defineProperty(AttackDialog.prototype, "generalSelection", {
    get: function () {
      return this._generalSelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialog.prototype.updatePosition = function () {
    T.AttackDialogController.getInstance().onResizeDialog.dispatch();
  };
  Object.defineProperty(AttackDialog.prototype, "attackButton", {
    get: function () {
      if (this.dialogDisp.mc_autofill_filter.mc_open.visible) {
        return this.dialogDisp.mc_autofill_filter.mc_open.mc_bottom.btn_attack;
      } else {
        return this.dialogDisp.mc_bottom_800.btn_attack;
      }
    },
    enumerable: true,
    configurable: true
  });
  AttackDialog.__initialize_static_members = function () {};
  AttackDialog.NAME = "AttackScreen_APR25";
  return AttackDialog;
}(y.CastleExternalDialog);
exports.AttackDialog = B;
r.classImplementsInterfaces(B, "ICollectableRendererList");
B.__initialize_static_members();