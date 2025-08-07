Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./3.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./6.js");
var b = require("./58.js");
var D = require("./3966.js");
var I = require("./3967.js");
var T = require("./1416.js");
var v = require("./1417.js");
var S = require("./21.js");
var A = require("./32.js");
var L = require("./53.js");
var P = require("./44.js");
var M = require("./4.js");
var R = require("./27.js");
var V = require("./197.js");
var x = require("./8.js");
var w = require("./11.js");
var B = require("./630.js");
var F = require("./768.js");
var N = require("./1833.js");
var k = require("./973.js");
var U = require("./975.js");
var G = function (e) {
  function CastleManagementDialog() {
    return e.call(this, CastleManagementDialog.NAME) || this;
  }
  n.__extends(CastleManagementDialog, e);
  CastleManagementDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.disp.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new E.LocalizedTextVO("dialog_management_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new E.LocalizedTextVO("castleName"));
    this.dialogDisp.btn_peaceTime.toolTipText = "dialog_startPeaceMode_title";
    this.dialogDisp.btn_editName.toolTipText = "dialog_renameCastle_title";
    this.dialogDisp.btn_extend.toolTipText = "dialog_management_extendTime";
    this.dialogDisp.btn_show_me_up.toolTipText = "panel_action_jumpTo";
    this.dialogDisp.mc_holder0.mouseChildren = false;
    this.dialogDisp.btn_relocate.visible = false;
    this.dialogDisp.bg_peaceTime.visible = false;
    this.dialogDisp.bg_openGateTime.visible = false;
    this.itxt_castleName = this.textFieldManager.registerTextField(this.dialogDisp.txt_castleName, new f.TextVO(""));
    this.itxt_peaceStatus = this.textFieldManager.registerTextField(this.dialogDisp.txt_peaceStatus, new E.LocalizedTextVO(""));
    this.itxt_peaceTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_peaceTime, new f.TextVO(""));
    this.itxt_deleteOutpost = this.textFieldManager.registerTextField(this.dialogDisp.txt_deleteOutpost, new f.TextVO(""));
    this.itxt_openGateTime = this.textFieldManager.registerTextField(this.dialogDisp.txt_openGateTime, new f.TextVO(""));
    this.itxt_relocateStatus = this.textFieldManager.registerTextField(this.dialogDisp.txt_relocateStatus, new E.LocalizedTextVO(""));
    x.ButtonHelper.initBasicButtons([this.dialogDisp.btn_login_bonus, this.dialogDisp.btn_peaceTime, this.dialogDisp.btn_openGate, this.dialogDisp.btn_extend, this.dialogDisp.btn_relocate, this.dialogDisp.btn_editName, this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_deleteOutpost, this.dialogDisp.btn_ok, this.dialogDisp.btn_show_me_up]);
  };
  CastleManagementDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.btn_extend.visible = false;
    this.dialogDisp.btn_openGate.visible = true;
    this.setLoginBonusBtn();
    this.dialogDisp.btn_openGate.toolTipText = "dialog_startOpenGate_title";
    x.ButtonHelper.enableButton(this.dialogDisp.btn_editName, CastleManagementDialog.isRenameButtonEnabled());
    this.dialogDisp.btn_editName.visible = !this.env.isCrossplay;
    x.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, CastleManagementDialog.isPeaceTimeButtonEnabled());
    x.ButtonHelper.enableButton(this.dialogDisp.btn_relocate, CastleManagementDialog.isRelocateButtonEnabled());
    this.dialogDisp.btn_peaceTime.visible = !this.env.isOnSpecialServer;
    this.itxt_deleteOutpost.clearText();
    if (this.worldmapObjectVO.objectId == M.CastleModel.userData.castleList.getMainCastleByKingdomID(this.worldmapObjectVO.kingdomID).objectId) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = "dialog_management_NoAbandonOutpost";
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime >= 0) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
    } else if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime >= 0) {
      c.debug(" ----------------------------- disabling outpost abandon button");
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
    } else {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName);
    }
    this.itxt_castleName.textContentVO.stringValue = this.worldmapObjectVO.areaNameString;
    this.onPeaceModeUpdate();
    this.onOpenGateUpdate();
    this.setDeleteOutpostAndRelocateButton();
    this.fillUserCastle();
  };
  CastleManagementDialog.prototype.onUpdateTimer = function (e) {
    this.onPeaceModeUpdate();
    this.onOpenGateUpdate();
  };
  CastleManagementDialog.prototype.onPeaceModeUpdate = function (e = null) {
    x.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, true);
    switch (M.CastleModel.userData.peaceModeStatus) {
      case j.CastleUserData.PEACEMODE_STATUS_PRETIME:
        this.itxt_peaceStatus.textContentVO.textId = "dialog_management_startIn";
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_peaceModeCancel";
        break;
      case j.CastleUserData.PEACEMODE_STATUS_PEACETIME:
        this.itxt_peaceStatus.clearText();
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_peaceModeCancel";
        break;
      case j.CastleUserData.PEACEMODE_STATUS_POSTTIME:
        this.itxt_peaceStatus.textContentVO.textId = "dialog_management_reStartableIn";
        this.dialogDisp.btn_peaceTime.gotoAndStop(2);
        x.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, false);
        this.dialogDisp.btn_peaceTime.toolTipText = {
          t: "dialog_management_reStartableIn_tt",
          p: [R.CastleTimeStringHelper.getCantAttackTimeString(M.CastleModel.userData.getRemainingPeaceStatusTime())]
        };
        break;
      case j.CastleUserData.PEACEMODE_STATUS_OFF:
        this.itxt_peaceStatus.clearText();
        this.dialogDisp.btn_peaceTime.gotoAndStop(1);
        if (M.CastleModel.userData.noobProtected || M.CastleModel.userData.userLevel < b.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
          this.dialogDisp.btn_peaceTime.toolTipText = "dialog_management_openGateNotInNoobProtection";
          x.ButtonHelper.enableButton(this.dialogDisp.btn_peaceTime, false);
        } else {
          this.dialogDisp.btn_peaceTime.toolTipText = "dialog_startPeaceMode_title";
        }
    }
    if (M.CastleModel.userData.getRemainingPeaceStatusTime() > 0) {
      this.itxt_peaceTime.textContentVO.stringValue = R.CastleTimeStringHelper.getCantAttackTimeString(M.CastleModel.userData.getRemainingPeaceStatusTime());
      this.dialogDisp.bg_peaceTime.visible = true;
    } else {
      this.itxt_peaceStatus.clearText();
      this.dialogDisp.bg_peaceTime.visible = false;
    }
  };
  CastleManagementDialog.prototype.setLoginBonusBtn = function () {
    if (M.CastleModel.userData.userXP < W.CastleLoginBonusData.REQUIRED_XP && !M.CastleModel.loginBonusData.isActive) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_login_bonus, false);
      this.dialogDisp.btn_login_bonus.toolTipText = "panel_shop_needQuestProgress";
      return;
    }
    this.dialogDisp.btn_login_bonus.toolTipText = "dialog_loginBonus_title";
    x.ButtonHelper.enableButton(this.dialogDisp.btn_login_bonus, true);
  };
  CastleManagementDialog.prototype.setOpenGateButton = function () {
    this.dialogDisp.bg_openGateTime.visible = false;
    if (this.worldmapObjectVO.remainingOpenGateTime > 0) {
      this.dialogDisp.btn_openGate.gotoAndStop(2);
      this.dialogDisp.btn_extend.visible = true;
      this.itxt_openGateTime.textContentVO.stringValue = u.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingOpenGateTime, O.Localize.text);
      this.dialogDisp.bg_openGateTime.visible = true;
      x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, true);
      this.dialogDisp.btn_openGate.toolTipText = "dialog_management_openGateCancel";
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime > 0) {
      this.dialogDisp.btn_openGate.gotoAndStop(2);
      this.dialogDisp.btn_extend.visible = false;
      x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_openGate.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
      this.itxt_openGateTime.clearText();
    } else if (this.worldmapObjectVO.areaType == C.WorldConst.AREA_TYPE_CAPITAL) {
      this.dialogDisp.btn_openGate.gotoAndStop(1);
      x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_extend.visible = false;
      this.dialogDisp.btn_openGate.toolTipText = "not_possible_in_capital";
    } else if (M.CastleModel.areaData.activeAreaInfo.areaType == C.WorldConst.AREA_TYPE_METROPOL) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      this.dialogDisp.btn_openGate.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("not_possible_in_metropolis");
    } else {
      this.dialogDisp.btn_openGate.gotoAndStop(1);
      this.dialogDisp.btn_extend.visible = false;
      if (M.CastleModel.userData.userLevel < b.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT) {
        this.dialogDisp.btn_openGate.toolTipText = {
          t: "expansion_higherLevelNeeded",
          p: [b.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT]
        };
        x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
      } else if (M.CastleModel.userData.noobProtected) {
        x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, false);
        this.dialogDisp.btn_openGate.toolTipText = "dialog_management_openGateNotInNoobProtection";
      } else {
        x.ButtonHelper.enableButton(this.dialogDisp.btn_openGate, true);
        this.dialogDisp.btn_openGate.toolTipText = "dialog_startOpenGate_title";
      }
      this.itxt_openGateTime.clearText();
    }
  };
  CastleManagementDialog.prototype.onOpenGateUpdate = function (e = null) {
    if (this.worldmapObjectVO !== M.CastleModel.userData.castleList.getCastleVOByID(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID)) {
      this.dialogProperties.worldmapVO = M.CastleModel.userData.castleList.getCastleVOByID(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID);
    }
    if (this.dialogProperties.worldmapVO) {
      this.setOpenGateButton();
      this.setDeleteOutpostAndRelocateButton();
    } else {
      this.hide();
    }
  };
  CastleManagementDialog.prototype.setDeleteOutpostAndRelocateButton = function () {
    x.ButtonHelper.enableButton(this.dialogDisp.btn_relocate, CastleManagementDialog.isRelocateButtonEnabled());
    if (M.CastleModel.userData.castleList.getMainCastleByKingdomID(this.worldmapObjectVO.kingdomID).objectId == this.dialogProperties.worldmapVO.objectId) {
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = "dialog_management_NoAbandonOutpost";
      this.itxt_deleteOutpost.clearText();
      this.dialogDisp.bg_deleteOutpost.visible = false;
      this.dialogDisp.btn_deleteOutpost.visible = false;
      this.dialogDisp.btn_relocate.toolTipText = "panel_relocate_title";
      this.dialogDisp.btn_relocate.visible = this.worldmapObjectVO.kingdomID == _.WorldClassic.KINGDOM_ID;
      this.itxt_relocateStatus.visible = this.worldmapObjectVO.kingdomID == _.WorldClassic.KINGDOM_ID;
      this.itxt_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == _.WorldClassic.KINGDOM_ID;
      if (M.CastleModel.userData.remainingRelocationDuration > 0) {
        this.itxt_relocateStatus.textContentVO.textId = "dialog_management_inprogress";
        this.dialogDisp.bg_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == _.WorldClassic.KINGDOM_ID;
        this.itxt_deleteOutpost.textContentVO.stringValue = u.TimeStringHelper.getHoureMinuteSecondTimeString(M.CastleModel.userData.remainingRelocationDuration);
      } else if (M.CastleModel.userData.remainingRelocationCooldown > 0) {
        this.itxt_relocateStatus.textContentVO.textId = "dialog_management_reStartableIn";
        this.dialogDisp.bg_deleteOutpost.visible = this.worldmapObjectVO.kingdomID == _.WorldClassic.KINGDOM_ID;
        this.itxt_deleteOutpost.textContentVO.stringValue = u.TimeStringHelper.getHoureMinuteSecondTimeString(M.CastleModel.userData.remainingRelocationCooldown);
      } else if (M.CastleModel.userData.userLevel < m.RelocationConst.MIN_RELOCATION_LEVEL) {
        this.dialogDisp.btn_relocate.toolTipText = {
          t: "expansion_higherLevelNeeded",
          p: [m.RelocationConst.MIN_RELOCATION_LEVEL]
        };
        this.itxt_relocateStatus.clearText();
        this.itxt_deleteOutpost.clearText();
      } else {
        this.itxt_relocateStatus.clearText();
        this.itxt_deleteOutpost.clearText();
      }
    } else if (this.worldmapObjectVO.remainingCancelAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(2);
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = {
        t: P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_keep" + this.worldmapObjectTextIDName),
        p: [u.TimeStringHelper.getShortTimeStringBySeconds(this.worldmapObjectVO.remainingCancelAbandonOutpostTime, u.TimeStringHelper.HOURS_MINUTES_SECONDS_FORMAT)]
      };
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = u.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingAbandonOutpostTime, O.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else if (this.worldmapObjectVO.remainingAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName + "Running");
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = u.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingAbandonOutpostTime, O.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime > 0) {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, false);
      this.dialogDisp.btn_deleteOutpost.toolTipText = this.getAbandonCooldownText() + V.CastleToolTipManager.ID_PARAM_SEPERATOR + R.CastleTimeStringHelper.getCantAttackTimeString(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime);
      this.dialogDisp.bg_deleteOutpost.visible = true;
      this.itxt_deleteOutpost.textContentVO.stringValue = u.TimeStringHelper.getCommaTimeStringFromSeconds(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime, O.Localize.text);
      this.dialogDisp.btn_deleteOutpost.visible = true;
      this.dialogDisp.btn_relocate.visible = false;
    } else {
      this.dialogDisp.btn_deleteOutpost.gotoAndStop(1);
      this.dialogDisp.bg_deleteOutpost.visible = false;
      this.dialogDisp.btn_deleteOutpost.visible = !a.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO") || !L.ABGHelper.isOnABGServer;
      x.ButtonHelper.enableButton(this.dialogDisp.btn_deleteOutpost, true);
      this.dialogDisp.btn_deleteOutpost.toolTipText = P.SpecialServerHelper.checkTextIDForSkinText("dialog_management_abandon" + this.worldmapObjectTextIDName);
      this.itxt_deleteOutpost.clearText();
      this.dialogDisp.btn_relocate.visible = false;
      this.itxt_relocateStatus.visible = false;
    }
  };
  CastleManagementDialog.prototype.getAbandonCooldownText = function () {
    if (a.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO")) {
      return P.SpecialServerHelper.checkTextIDForSkinText("errorCode_310");
    } else if (a.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO")) {
      return P.SpecialServerHelper.checkTextIDForSkinText("errorCode_307");
    } else {
      return "errorCode_140";
    }
  };
  CastleManagementDialog.isRenameButtonEnabled = function () {
    return M.CastleModel.userData.userLevel >= b.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
  };
  CastleManagementDialog.isRelocateButtonEnabled = function () {
    return M.CastleModel.userData.remainingRelocationDuration <= 0 && M.CastleModel.userData.remainingRelocationCooldown <= 0 && M.CastleModel.userData.userLevel >= m.RelocationConst.MIN_RELOCATION_LEVEL;
  };
  CastleManagementDialog.isPeaceTimeButtonEnabled = function () {
    return M.CastleModel.areaData.activeArea && !M.CastleModel.areaData.activeArea.isCapital && !M.CastleModel.areaData.activeArea.isMetropol && !M.CastleModel.userData.noobProtected && M.CastleModel.userData.userLevel >= b.ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT;
  };
  CastleManagementDialog.prototype.onChangeCastleList = function (e) {
    this.dialogProperties.worldmapVO = M.CastleModel.userData.castleList.getCastleVOByID(this.dialogProperties.worldmapVO.objectId, this.dialogProperties.worldmapVO.kingdomID);
    if (this.worldmapObjectVO) {
      this.itxt_castleName.textContentVO.stringValue = this.worldmapObjectVO.areaNameString;
    } else {
      this.hide();
    }
  };
  CastleManagementDialog.prototype.fillUserCastle = function () {
    d.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_holder0);
    var e = this.worldmapObjectVO;
    var t = K.WorldmapObjectIconHelper.drawMapObjectIcon(e, null, true, true, false);
    t.scaleX = t.scaleY /= 1.5;
    if (e.areaType == C.WorldConst.AREA_TYPE_CAPITAL) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.5;
    } else if (e.kingdomID == g.WorldIsland.KINGDOM_ID) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.7;
    } else if (M.CastleModel.titleData.hasIslandTitleSelected() && a.instanceOfClass(e, "CastleMapobjectVO")) {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.7;
    } else {
      this.dialogDisp.mc_holder0.scaleX = this.dialogDisp.mc_holder0.scaleY = 0.85;
    }
    this.dialogDisp.mc_holder0.addChild(t);
  };
  CastleManagementDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(A.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.addEventListener(A.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.addEventListener(A.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    M.CastleModel.timerData.addEventListener(S.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    this.controller.addEventListener(A.CastleUserDataEvent.RELOCATE_INFO_UPDATED, this.bindFunction(this.onRelocateInfoUpdated));
  };
  CastleManagementDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(A.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onChangeCastleList));
    this.controller.removeEventListener(A.CastleUserDataEvent.PEACE_PROTECTION, this.bindFunction(this.onPeaceModeUpdate));
    this.controller.removeEventListener(A.CastleUserDataEvent.PEACETIME_FINISHED, this.bindFunction(this.onPeaceModeUpdate));
    M.CastleModel.timerData.removeEventListener(S.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateTimer));
    this.controller.removeEventListener(A.CastleUserDataEvent.RELOCATE_INFO_UPDATED, this.bindFunction(this.onRelocateInfoUpdated));
  };
  CastleManagementDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (x.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_peaceTime:
          if (M.CastleModel.userData.peaceModeStatus == j.CastleUserData.PEACEMODE_STATUS_OFF) {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs(ee.CastleStartPeaceModeDialog, new U.CastleStartPeaceModeDialogProperties());
          } else if (M.CastleModel.userData.isInPeaceMode) {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs(X.CastleStandardYesNoDialog, new r.BasicStandardYesNoDialogProperties(O.Localize.text("dialog_management_peaceModeCancel"), O.Localize.text("dialog_management_peaceModeCancelDescription"), this.bindFunction(this.cancelPeaceMode)));
          }
          break;
        case this.dialogDisp.btn_login_bonus:
          Y.CastleDialogHandler.getInstance().registerDefaultDialogs(J.CastleDailyLoginBonusDialog);
          this.hide();
          break;
        case this.dialogDisp.btn_openGate:
          if (this.worldmapObjectVO.remainingOpenGateTime <= 0) {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs($.CastleStartOpenGateDialog, new k.CastleStartOpenGateDialogProperties(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, false));
          } else {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs(X.CastleStandardYesNoDialog, new r.BasicStandardYesNoDialogProperties(O.Localize.text("dialog_management_openGateCancel"), O.Localize.text("dialog_management_openGateCancelDescription"), this.bindFunction(this.cancelOpenGateMode)));
          }
          break;
        case this.dialogDisp.btn_editName:
          if (t.target.enabled) {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs(Z.CastleRenameCastleDialog, new N.CastleRenameCastleDialogProperties(this.worldmapObjectVO.areaNameString, this.worldmapObjectVO));
          }
          break;
        case this.dialogDisp.btn_extend:
          if (this.worldmapObjectVO.remainingOpenGateTime > 0) {
            Y.CastleDialogHandler.getInstance().registerDefaultDialogs($.CastleStartOpenGateDialog, new k.CastleStartOpenGateDialogProperties(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, false));
          }
          break;
        case this.dialogDisp.btn_deleteOutpost:
          this.onDeleteOutpostClick();
          break;
        case this.dialogDisp.btn_relocate:
          l.CommandController.instance.executeCommand(H.IngameClientCommands.SWITCH_TO_RELOCATEWORLDMAP_COMMAND);
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_show_me_up:
          l.CommandController.instance.executeCommand(H.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [M.CastleModel.kingdomData.activeKingdomID, this.worldmapObjectVO.absAreaPosX, this.worldmapObjectVO.absAreaPosY]);
      }
    }
  };
  CastleManagementDialog.prototype.onRelocateInfoUpdated = function (e) {
    this.setDeleteOutpostAndRelocateButton();
  };
  CastleManagementDialog.prototype.onDeleteOutpostClick = function () {
    var e = y.int(this.worldmapObjectVO.remainingCancelAbandonOutpostTime);
    if (e > 0) {
      Y.CastleDialogHandler.getInstance().registerDefaultDialogs(Q.CastleTimedYesNoDialog, new F.CastleTimedYesNoDialogProperties(O.Localize.text(P.SpecialServerHelper.checkTextIDForSkinText("dialog_keep" + this.worldmapObjectTextIDName + "_title")), O.Localize.text(P.SpecialServerHelper.checkTextIDForSkinText("dialog_keep" + this.worldmapObjectTextIDName + "_copy")), "countdown_restTime", e, false, this.bindFunction(this.onCancelAbandoning)));
    } else {
      var t = u.TimeStringHelper.getTimeToString(p.OutpostConst.ABANDON_TIME, u.TimeStringHelper.ONE_TIME_FORMAT, O.Localize.text);
      var i = u.TimeStringHelper.getTimeToString(p.OutpostConst.ABANDON_CANCEL_TIME, u.TimeStringHelper.ONE_TIME_FORMAT, O.Localize.text);
      Y.CastleDialogHandler.getInstance().registerDefaultDialogs(z.CastleLargeYesNoDialog, new B.CastleLargeYesNoDialogProperties(O.Localize.text(P.SpecialServerHelper.checkTextIDForSkinText("dialog_abandon" + this.worldmapObjectTextIDName + "_title")), O.Localize.text(P.SpecialServerHelper.checkTextIDForSkinText("dialog_abandon" + this.worldmapObjectTextIDName + "_copy"), [t, i]), this.bindFunction(this.onAbandonOutpost)));
    }
  };
  CastleManagementDialog.prototype.onCancelAbandoning = function (e = null) {
    if (this.worldmapObjectVO) {
      M.CastleModel.smartfoxClient.sendCommandVO(new D.C2SAbandonOutpostCancelVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID));
    }
  };
  CastleManagementDialog.prototype.onAbandonOutpost = function (e = null) {
    if (this.worldmapObjectVO) {
      if (this.worldmapObjectVO.remainingCooldownAbandonOutpostTime > 0) {
        var t = y.int(a.instanceOfClass(this.worldmapObjectVO, "CapitalMapobjectVO") ? h.ERROR.CAPITAL_NOT_OWNED_LONG_ENOUGH : a.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO") ? h.ERROR.METROPOL_NOT_OWNED_LONG_ENOUGH : h.ERROR.NOT_OWNED_LONG_ENOUGH);
        Y.CastleDialogHandler.getInstance().registerDefaultDialogs(q.CastleStandardOkDialog, new s.BasicStandardOkDialogProperties(O.Localize.text("generic_alert_information"), O.Localize.text("errorCode_" + t, [u.TimeStringHelper.getTimeToString(this.worldmapObjectVO.remainingCooldownAbandonOutpostTime, u.TimeStringHelper.ONE_TIME_FORMAT, O.Localize.text)])));
      } else {
        M.CastleModel.smartfoxClient.sendCommandVO(new I.C2SAbandonOutpostStartVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID));
      }
    }
  };
  CastleManagementDialog.prototype.cancelPeaceMode = function (e = null) {
    M.CastleModel.smartfoxClient.sendCommandVO(new v.C2SPeaceModeStartVO(-1));
  };
  CastleManagementDialog.prototype.cancelOpenGateMode = function (e = null) {
    M.CastleModel.smartfoxClient.sendCommandVO(new T.C2SOpenGateStartVO(this.worldmapObjectVO.objectId, this.worldmapObjectVO.kingdomID, -1));
  };
  Object.defineProperty(CastleManagementDialog.prototype, "worldmapObjectTextIDName", {
    get: function () {
      var e = this.worldmapObjectVO.name;
      if (a.instanceOfClass(this.worldmapObjectVO, "MetropolMapobjectVO")) {
        e += "is";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleManagementDialog.prototype, "worldmapObjectVO", {
    get: function () {
      return this.dialogProperties.worldmapVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleManagementDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleManagementDialog.NAME = "CastleManagementRework";
  return CastleManagementDialog;
}(w.CastleExternalDialog);
exports.CastleManagementDialog = G;
var H = require("./29.js");
var j = require("./283.js");
var W = require("./1122.js");
var Y = require("./9.js");
var K = require("./70.js");
var z = require("./449.js");
var q = require("./38.js");
var X = require("./151.js");
var Q = require("./767.js");
var J = require("./1124.js");
var Z = require("./1835.js");
var $ = require("./974.js");
var ee = require("./976.js");
o.classImplementsInterfaces(G, "ICollectableRendererList");