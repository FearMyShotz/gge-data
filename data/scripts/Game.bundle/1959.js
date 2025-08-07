Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./3.js");
var E = require("./3.js");
var y = require("./3.js");
var b = require("./3.js");
var D = require("./6.js");
var I = require("./18.js");
var T = require("./28.js");
var v = require("./618.js");
var S = require("./26.js");
var A = require("./396.js");
var L = require("./4.js");
var P = require("./27.js");
var M = require("./43.js");
var R = require("./713.js");
var V = require("./42.js");
var x = require("./8.js");
var w = require("./73.js");
var B = require("./119.js");
var F = require("./574.js");
var N = require("./11.js");
var k = require("./93.js");
var U = require("./526.js");
var G = require("./1941.js");
var H = function (e) {
  function CastleSpyLogDialog() {
    var t = this;
    t.normalBackgroundHeight = 0;
    t.normalButtonY = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleSpyLogDialog.NAME) || this;
  }
  n.__extends(CastleSpyLogDialog, e);
  CastleSpyLogDialog.prototype.initLoaded = function (t = null) {
    this.dialogDisp.mc_accuracy.toolTipText = "spy_dialog_spyAccuracy";
    this.dialogDisp.mc_risk.toolTipText = "spy_dialog_spyRisk";
    this.dialogDisp.mc_damage.toolTipText = "spy_dialog_sabotageDamage";
    this.dialogDisp.btn_log.toolTipText = "dialog_moveOverview_details";
    this.dialogDisp.mc_spySoldiers.toolTipText = "dialog_spyLog_amountMilitary";
    this.dialogDisp.mc_spyTools.toolTipText = "dialog_spyLog_amountDefenceTools";
    this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountPesants";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.txt_castlename.actLikeButton = true;
    this.dialogDisp.txt_castlename.basicButton = new o.BasicButton(this.dialogDisp.txt_castlename, true);
    this.dialogDisp.txt_castlename.toolTipText = "dialog_jumpto_castleSelected";
    this.dialogDisp.txt_castlename.mouseChildren = false;
    this.itxt_title ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new y.LocalizedTextVO("dialog_spyLog_title"));
    this.itxt_result ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_result, new y.LocalizedTextVO(r.GenericTextIds.VALUE_COLON, [0]));
    this.itxt_result.autoFitToBounds = true;
    this.itxt_description ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new y.LocalizedTextVO(""));
    this.i_risk_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_risk.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_damage_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_damage.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_accuracy_txt_value ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_accuracy.txt_value, new y.LocalizedTextVO(r.GenericTextIds.VALUE_PERCENTAGE, [0]));
    if (!this.i_spySoldier_txt_loot) {
      this.i_spySoldier_txt_loot = this.textFieldManager.registerTextField(this.dialogDisp.mc_spySoldiers.txt_loot, new E.LocalizedNumberVO(0));
      this.i_spySoldier_txt_loot.autoFitToBounds = true;
      this.i_spySoldier_txt_loot.verticalAlign = V.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    this.i_txt_player_burgname ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_castlename.txt_player_burgname, new b.TextVO(""));
    this.i_txt_player_burgname.autoFitToBounds = true;
    this.i_spyTools_txt_loot ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_spyTools.txt_loot, new E.LocalizedNumberVO(0));
    this.i_spyPeasant_txt_loot ||= this.textFieldManager.registerTextField(this.dialogDisp.mc_spyCitizens.txt_loot, new E.LocalizedNumberVO(0));
    this.resourceListComponent ||= new X.CastleResourceListComponent(this.dialogDisp.mc_resourceList, Library.CastleInterfaceElements.CastleComponent_Info_LootItem, CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW, 2);
    this.resourceListComponent.useKiloAbbreviationForAmount = true;
    this.normalBackgroundHeight = this.dialogDisp.background.height;
    this.normalButtonY = this.dialogDisp.btn_return.y;
    this.lordTooltipTrigger ||= new J.LordEffectTooltipTrigger(this.dialogDisp.mc_lordHolder);
    this.initBasicButtons([this.dialogDisp.btn_log, this.dialogDisp.aux_button, this.dialogDisp.btn_attack, this.dialogDisp.btn_close, this.dialogDisp.btn_return, this.dialogDisp.btn_help, this.dialogDisp.txt_castlename, this.dialogDisp.mc_playerlog1.btn_player, this.dialogDisp.mc_playerlog2.btn_player]);
    e.prototype.initLoaded.call(this, t);
  };
  CastleSpyLogDialog.prototype.showLoaded = function (t = null) {
    this.clear();
    this.controller.addEventListener(A.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    L.CastleModel.specialEventData.addEventListener(S.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    L.CastleModel.spyData.getSpyLog(this.messageVO.messageID);
    this.dialogDisp.mc_resourceList.visible = this.dialogDisp.mc_spySoldiers.visible = this.dialogDisp.mc_spyTools.visible = this.dialogDisp.mc_spyCitizens.visible = this.dialogDisp.mc_lordHolder.visible = false;
    this.dialogDisp.btn_help.visible = !this.messageVO.isPlagueLog;
    this.dialogDisp.btn_log.visible = this.messageVO.hasDetailedSpyLog();
    this.dialogDisp.aux_button.visible = false;
    if (this.messageVO.isSabotageLog) {
      this.itxt_title.textContentVO.textId = "dialog_spy_titleSabotage_suffix";
      this.itxt_title.textContentVO.textReplacements = [this.getResultTitleSuffix()];
      this.dialogDisp.mc_damage.visible = true;
      this.dialogDisp.mc_accuracy.visible = false;
      this.itxt_result.textContentVO.textId = r.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [O.Localize.text("dialog_spyLog_Sabotage_resultFrom")];
      this.dialogDisp.mc_damage.toolTipText = this.messageVO.subtypeResult == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS ? "spy_dialog_sabotageDamage" : "spy_dialog_sabotageDamage_expected";
    } else if (this.messageVO.isPlagueLog) {
      this.dialogDisp.txt_title.text = O.Localize.text("dialog_spy_titlePlague") + " - " + this.getResultTitleSuffix();
      this.dialogDisp.mc_damage.visible = true;
      this.dialogDisp.mc_accuracy.visible = false;
      this.itxt_result.textContentVO.textId = r.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [O.Localize.text("dialog_spyLog_Plague_resultFrom")];
      this.dialogDisp.mc_damage.toolTipText = this.messageVO.subtypeResult == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS ? "spy_dialog_sabotageDamage" : "spy_dialog_sabotageDamage_expected";
    } else {
      this.dialogDisp.mc_damage.visible = false;
      this.dialogDisp.mc_accuracy.visible = true;
      this.itxt_title.textContentVO.textId = "dialog_spyLog_title";
      this.itxt_result.textContentVO.textId = r.GenericTextIds.VALUE_COLON;
      this.itxt_result.textContentVO.textReplacements = [O.Localize.text("dialog_spyLog_resultFrom")];
      var i = "spyWarning_attackNow";
      i = this.messageVO.hasDetailedSpyLog() ? "spyWarning_attackNow" : (this.messageVO.isEcoSpyLog() && this.messageVO.isFailedSpyLog(), "spyWarning_tryAgain");
      this.textFieldManager.registerTextField(this.dialogDisp.aux_button.txt_field, new y.LocalizedTextVO(i));
    }
    this.dialogDisp.kingdomIndicator1.gotoAndStop(1);
    this.dialogDisp.kingdomIndicator1.visible = false;
    this.dialogDisp.kingdomIndicator2.gotoAndStop(1);
    this.dialogDisp.kingdomIndicator2.visible = false;
    this.lordTooltipTrigger.show();
    e.prototype.showLoaded.call(this, t);
    this.disp.visible = false;
  };
  CastleSpyLogDialog.prototype.clear = function () {
    this.itxt_description.textContentVO.textId = "";
    this.i_txt_player_burgname.textContentVO.stringValue = "";
    this.i_risk_txt_value.textContentVO.textReplacements = [""];
    this.i_damage_txt_value.textContentVO.textReplacements = [""];
    this.i_accuracy_txt_value.textContentVO.textReplacements = [""];
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog1.txt_player_full, new E.LocalizedNumberVO(0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog1.btn_player.txt_player_name, new b.TextVO("")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog2.txt_player_full, new E.LocalizedNumberVO(0)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_playerlog2.btn_player.txt_player_name, new b.TextVO("")).autoFitToBounds = true;
    this.dialogDisp.mc_legendIcon.visible = false;
    this.dialogDisp.mc_legendIcon_bg.visible = false;
  };
  Object.defineProperty(CastleSpyLogDialog.prototype, "messageVO", {
    get: function () {
      return this.dialogProperties.messageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyLogDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyLogDialog.prototype.repositionButton = function () {
    this.dialogDisp.aux_button.y = this.dialogDisp.mc_resourceList.y + this.dialogDisp.mc_resourceList.height;
  };
  CastleSpyLogDialog.prototype.resizeBackground = function () {
    var e = this.dialogDisp.aux_button.y + this.dialogDisp.aux_button.height;
    this.dialogDisp.background.height = e;
    this.dialogDisp.background.y = this.dialogDisp.background.height / 2;
  };
  CastleSpyLogDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(A.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    L.CastleModel.specialEventData.removeEventListener(S.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventRemoved));
    this.lordTooltipTrigger.hide();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleSpyLogDialog.prototype.getResultTitleSuffix = function () {
    if (this.messageVO.messageType == _.MessageConst.MESSAGE_TYPE_SPY_PLAYER || this.messageVO.messageType == _.MessageConst.MESSAGE_TYPE_SPY_NPC) {
      switch (this.messageVO.subtypeResult) {
        case _.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          return O.Localize.text("dialog_spyLog_success");
        case _.MessageConst.SUBTYPE_ATTACKER_FAILED:
          return O.Localize.text("dialog_spyLog_failure");
        case _.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return O.Localize.text("dialog_spyLog_keptAway");
      }
    }
    return "";
  };
  CastleSpyLogDialog.prototype.getDescriptionText = function () {
    if (this.messageVO.messageType == _.MessageConst.MESSAGE_TYPE_SPY_PLAYER) {
      if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_ECO) {
        switch (this.messageVO.subtypeResult) {
          case _.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
            return O.Localize.text("dialog_spyLog_spyResultsEco");
          case _.MessageConst.SUBTYPE_ATTACKER_FAILED:
            return O.Localize.text("dialog_spyLog_spyResultsFailed");
          case _.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
            return O.Localize.text("dialog_spyLog_spyResultsKept");
        }
      } else {
        switch (this.messageVO.subtypeResult) {
          case _.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
            if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_DEFENCE) {
              return O.Localize.text("dialog_spyLog_spyResultsMilitay");
            }
            if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return O.Localize.text("dialog_plagueMessage_success");
            }
            if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return O.Localize.text("dialog_sabotageMessage_success");
            }
            break;
          case _.MessageConst.SUBTYPE_ATTACKER_FAILED:
            if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return O.Localize.text("dialog_sabotageMessage_failed");
            } else if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return O.Localize.text("dialog_plagueMessage_failed");
            } else {
              return O.Localize.text("dialog_spyLog_spyResultsFailed");
            }
          case _.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
            if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_SABOTAGE) {
              return O.Localize.text("dialog_sabotageMessage_keptAway");
            } else if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
              return O.Localize.text("dialog_plagueMessage_keptAway");
            } else {
              return O.Localize.text("dialog_spyLog_spyResultsKept");
            }
        }
      }
    } else if (this.messageVO.messageType == _.MessageConst.MESSAGE_TYPE_SPY_NPC) {
      switch (this.messageVO.subtypeResult) {
        case _.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_DEFENCE) {
            return O.Localize.text("dialog_spyLog_spyResultsMilitay");
          }
          break;
        case _.MessageConst.SUBTYPE_ATTACKER_FAILED:
          if (this.messageVO.subtypeSpy == _.MessageConst.SUBTYPE_SPY_SABOTAGE) {
            return O.Localize.text("dialog_sabotageMessage_failed");
          } else if (B.PlayerHelper.isAlienInvasion(this.spyLogVO.enemyOwnerInfo.playerID)) {
            return O.Localize.text("dialog_spyLog_spyResultsFailed_alienInvasion");
          } else {
            return O.Localize.text("dialog_spyLog_spyResultsFailed");
          }
        case _.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return O.Localize.text("dialog_spyLog_spyResultsKept");
      }
    }
    return "";
  };
  CastleSpyLogDialog.prototype.fillPlayerLogInfo = function (e, t, i, n) {
    this.textFieldManager.registerTextField(e.txt_player_full, new E.LocalizedNumberVO(n)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(e.btn_player.txt_player_name, new b.TextVO(i.playerName)).autoFitToBounds = true;
    e.btn_player.properties = i.playerID;
    x.ButtonHelper.enableButton(e.btn_player, !B.PlayerHelper.isNPCPlayer(i.playerID));
    if (this.spyLogVO.isFactionSpyLog) {
      $.CrestHelper.setCrestGraphics(e.mc_playercrest, $.CrestHelper.getPlayerOrFactionCrest(i));
    } else {
      $.CrestHelper.setCrestGraphics(e.mc_playercrest, i.crest, null, true);
      e.mc_playercrest.mouseChildren = false;
    }
    if (t) {
      e.mc_icon.gotoAndStop(1);
      e.mc_icon.toolTipText = "guards";
    } else if (this.spyLogVO.spyOwnerInfo.playerID == f.SpyConst.PLAGUEMONK_OWNER_ID) {
      e.mc_icon.gotoAndStop(3);
      e.mc_icon.toolTipText = "plaguemonks";
    } else {
      e.mc_icon.gotoAndStop(2);
      e.mc_icon.toolTipText = "spies";
    }
    e.mc_icon.mouseChildren = false;
  };
  CastleSpyLogDialog.prototype.onClick = function (t) {
    if (x.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_log:
          q.CastleDialogHandler.getInstance().registerDefaultDialogs(ne.CastleSpyinfoDetailsDialog, new G.CastleSpyinfoDetailsDialogProperties(this.spyLogVO, this.messageVO, this.bindFunction(this.hide)));
          break;
        case this.dialogDisp.aux_button:
          if (!this.messageVO.hasDetailedSpyLog()) {
            q.CastleDialogHandler.getInstance().registerDefaultDialogs(ie.CastleSpyDialog, new U.CastleSpyDialogProperties(this.spyLogVO.mapobjectVO, ie.CastleSpyDialog.TAB_SPY, true, this.messageVO.isEcoSpyLog()));
            L.CastleModel.smartfoxClient.sendCommandVO(new v.C2SGetSpyInfo(this.spyLogVO.mapobjectVO.absAreaPosX, this.spyLogVO.mapobjectVO.absAreaPosY, this.spyLogVO.mapobjectVO.kingdomID));
            this.hide();
            break;
          }
        case this.dialogDisp.btn_attack:
          if (this.isValidAttackTarget(this.spyLogVO.mapobjectVO)) {
            if (this.spyLogVO.mapobjectVO.isNpcCapital) {
              Z.AttackHelper.executeAttackCommand(this.spyLogVO.mapobjectVO, I.ClientConstCastle.ACTION_TYPE_CONQUER, null);
            } else {
              Z.AttackHelper.executeAttackCommand(this.spyLogVO.mapobjectVO, this.spyLogVO.mapobjectVO.attackType, this.bindFunction(this.hide));
            }
            this.hide();
          } else {
            q.CastleDialogHandler.getInstance().registerDefaultDialogs(ee.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(O.Localize.text("generic_alert_information"), O.Localize.text("alert_noSpyData")));
            this.hide();
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_return:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          q.CastleDialogHandler.getInstance().showHelper("", O.Localize.text("help_spyLog"));
          break;
        case this.dialogDisp.txt_castlename:
          if (this.spyLogVO) {
            s.CommandController.instance.executeCommand(j.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.spyLogVO.mapobjectVO);
            this.hide();
          }
          break;
        case this.dialogDisp.mc_playerlog1.btn_player:
        case this.dialogDisp.mc_playerlog2.btn_player:
          q.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(te.CastlePlayerInfoDialog, new k.CastlePlayerInfoDialogProperties(t.target.properties), M.CastleDialogConsts.DIALOG_TYPE_SINGLE);
      }
    }
  };
  CastleSpyLogDialog.prototype.isValidAttackTarget = function (e) {
    var t = d.getDefinitionByName(p.getQualifiedClassName(e));
    var i = [W.FactionCampMapobjectVO, Y.FactionCapitalMapobjectVO, K.FactionTowerMapobjectVO, z.FactionVillageMapobjectVO];
    var n = D.int(i.indexOf(t)) != -1;
    var o = n && L.CastleModel.specialEventData.getActiveEventByEventId(g.EventConst.EVENTTYPE_FACTION) != null;
    return !n || o;
  };
  CastleSpyLogDialog.prototype.showCurrentLog = function (t) {
    e.prototype.showLoaded.call(this, null);
    this.controller.removeEventListener(A.CastleSpyDataEvent.NEW_SPY_LOG, this.bindFunction(this.showCurrentLog));
    this.spyLogVO = t.params[0];
    if (this.spyLogVO) {
      this.disp.visible = true;
      if (!this.spyLogVO.mapobjectVO.isOwnMapobject && this.spyLogVO.enemyOwnerInfo.playerID != L.CastleModel.userData.playerID) {
        this.controller.addEventListener(A.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
        L.CastleModel.smartfoxClient.sendCommandVO(new v.C2SGetSpyInfo(this.spyLogVO.mapobjectVO.absAreaPosX, this.spyLogVO.mapobjectVO.absAreaPosY, this.spyLogVO.mapobjectVO.kingdomID));
      }
      this.itxt_description.textContentVO.textId = this.getDescriptionText();
      this.dialogDisp.kingdomIndicator1.visible = true;
      this.dialogDisp.kingdomIndicator2.visible = true;
      var i = D.int(Math.min(this.spyLogVO.mapobjectVO.kingdomID + 1, this.dialogDisp.kingdomIndicator1.totalFrames));
      this.dialogDisp.kingdomIndicator1.gotoAndStop(i);
      this.dialogDisp.kingdomIndicator2.gotoAndStop(i);
      this.i_txt_player_burgname.textContentVO.stringValue = this.spyLogVO.getCastleName(this.messageVO.messageType);
      this.i_risk_txt_value.textContentVO.textId = r.GenericTextIds.VALUE_PERCENTAGE;
      this.i_risk_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyRisk];
      if (this.messageVO.isSabotageLog || this.messageVO.isPlagueLog) {
        this.i_damage_txt_value.textContentVO.textId = r.GenericTextIds.VALUE_PERCENTAGE;
        this.i_damage_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyAccuracy];
      } else {
        this.i_accuracy_txt_value.textContentVO.textId = r.GenericTextIds.VALUE_PERCENTAGE;
        this.i_accuracy_txt_value.textContentVO.textReplacements = [this.spyLogVO.spyAccuracy];
      }
      this.updatePlayerLogSection();
      this.updateLootSection();
      this.updateLord();
      this.updateJumpToButton();
      this.updateLegendIcon();
      this.repositionButton();
      this.resizeBackground();
    } else {
      this.hide();
    }
  };
  CastleSpyLogDialog.prototype.updateAttackButton = function () {
    var e;
    this.dialogDisp.btn_attack.visible = this.messageVO.isDefenceSpyLog() && !this.messageVO.isFailedSpyLog() && !this.messageVO.forwarded && this.spyLogVO && this.spyLogVO.mapobjectVO.canBeAttacked() && !h.instanceOfClass(this.spyLogVO.mapobjectVO, "WolfkingCastleMapObjectVO");
    if (this.spyLogVO != null && this.spyLogVO.mapobjectVO.remainingCooldownTimeInSeconds > 0) {
      var t = c.TimeStringHelper.getShortTimeString(this.spyLogVO.mapobjectVO.remainingCooldownTimeInSeconds * T.ClientConstTime.SEC_2_MILLISEC, c.TimeStringHelper.ONE_TIME_FORMAT);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "castleHasCooldown",
        p: [t]
      };
      x.ButtonHelper.enableButton(this.dialogDisp.btn_attack, this.spyLogVO.mapobjectVO.cooldownCanBeSkipped);
    } else if (this.spyLogVO.mapobjectVO.kingdomID == C.FactionConst.KINGDOM_ID && this.spyLogVO.enemyOwnerInfo.isFactionProtected) {
      e = P.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingFactionProtectionTimeInSeconds);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [e]
      };
      x.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.mapobjectVO.kingdomID != C.FactionConst.KINGDOM_ID && this.spyLogVO.enemyOwnerInfo.isPeaceProtected && !this.spyLogVO.mapobjectVO.ignoresPeaceMode) {
      e = P.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingPeaceTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [e]
      };
      x.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.enemyOwnerInfo.isNoobProtected && !this.spyLogVO.mapobjectVO.ignoresPeaceMode) {
      e = P.CastleTimeStringHelper.getCantAttackTimeString(this.spyLogVO.mapobjectVO.ownerInfo.remainingNoobTime);
      this.dialogDisp.btn_attack.toolTipText = {
        t: "playerHasNoobProtection",
        p: [e]
      };
      x.ButtonHelper.enableButton(this.dialogDisp.btn_attack, false);
    } else if (this.spyLogVO.isFactionSpyLog && (h.instanceOfClass(this.spyLogVO.mapobjectVO, "FactionTowerMapobjectVO") || h.instanceOfClass(this.spyLogVO.mapobjectVO, "FactionCapitalMapobjectVO"))) {
      this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
    } else {
      if (this.spyLogVO && (h.instanceOfClass(this.spyLogVO.mapobjectVO, "VillageMapobjectVO") || this.spyLogVO.mapobjectVO.isNpcCapital || this.spyLogVO.isFactionSpyLog)) {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_village";
      } else {
        this.dialogDisp.btn_attack.toolTipText = "ringmenu_military_menu_attack";
      }
      x.ButtonHelper.enableButton(this.dialogDisp.btn_attack, true);
    }
  };
  CastleSpyLogDialog.prototype.onPreSpyInfoUpdate = function (e) {
    this.controller.removeEventListener(A.CastleSpyDataEvent.PRE_SPYINFO_UPDATED, this.bindFunction(this.onPreSpyInfoUpdate));
    var t = e.params[0];
    this.dialogDisp.aux_button.visible = this.isAttackNowTryAgainButtonVisible();
    this.dialogDisp.aux_button.toolTipText = null;
    if (this.messageVO.hasDetailedSpyLog()) {
      x.ButtonHelper.enableButton(this.dialogDisp.aux_button, this.spyLogVO && this.spyLogVO.mapobjectVO && this.spyLogVO.mapobjectVO.canBeAttacked());
    } else {
      x.ButtonHelper.enableButton(this.dialogDisp.aux_button, t && t.availableSpies > 0);
      if (!this.dialogDisp.aux_button.enabled) {
        this.dialogDisp.aux_button.toolTipText = "ringmenu_toolTip_noFreeAgents";
      }
    }
    this.updateAttackButton();
  };
  CastleSpyLogDialog.prototype.isAttackNowTryAgainButtonVisible = function () {
    return !this.messageVO.isSabotageLog && !this.messageVO.isPlagueLog && !this.messageVO.forwarded && this.spyLogVO.enemyOwnerInfo.playerID != L.CastleModel.userData.playerID && (!this.messageVO.isEcoSpyLog() || !!this.messageVO.isFailedSpyLog()) && !h.instanceOfClass(this.spyLogVO.mapobjectVO, "WolfkingCastleMapObjectVO");
  };
  CastleSpyLogDialog.prototype.updatePlayerLogSection = function () {
    if (!this.spyLogVO.spyOwnerInfo || !this.spyLogVO.enemyOwnerInfo) {
      q.CastleDialogHandler.getInstance().registerDefaultDialogs(F.CastleDarkOkDialog, new a.BasicStandardOkDialogProperties("dialog_referFriend_failure_header", "dialog_attack_noSpyinfos_short"));
      this.hide();
      return;
    }
    this.fillPlayerLogInfo(this.dialogDisp.mc_playerlog1, false, this.spyLogVO.spyOwnerInfo, this.spyLogVO.spyCount);
    this.fillPlayerLogInfo(this.dialogDisp.mc_playerlog2, true, this.spyLogVO.enemyOwnerInfo, this.spyLogVO.guardCount);
  };
  CastleSpyLogDialog.prototype.updateLootSection = function () {
    this.resourceListComponent.destroy();
    var e = this.messageVO.isDefenceSpyLog();
    var t = this.messageVO.isEcoSpyLog();
    var i = this.messageVO.isFailedSpyLog();
    this.dialogDisp.mc_resourceList.visible = e || t && !i;
    this.dialogDisp.mc_spySoldiers.visible = this.dialogDisp.mc_spyTools.visible = this.dialogDisp.mc_spyCitizens.visible = e;
    this.dialogDisp.background.height = this.normalBackgroundHeight;
    this.dialogDisp.btn_return.y = this.normalButtonY;
    this.dialogDisp.mc_resourceList.mc_background.scaleY = 1;
    if (this.messageVO.isEcoSpyLog()) {
      if (this.spyLogVO.spyResources.length > CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW) {
        this.dialogDisp.background.height = this.normalBackgroundHeight + CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET;
        this.dialogDisp.btn_return.y = this.normalButtonY + CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET;
        this.dialogDisp.mc_resourceList.mc_background.scaleY = 1.59;
      }
      this.resourceListComponent.updateComponent(this.spyLogVO.spyResources, O.Localize.text(r.GenericTextIds.VALUE_COLON, [O.Localize.text("dialog_spyLog_result")]));
    }
    if (this.messageVO.isDefenceSpyLog()) {
      this.i_spySoldier_txt_loot.textContentVO.numberValue = this.spyLogVO.armyInfoVO.totalMilitarySoldierCount;
      this.i_spyTools_txt_loot.textContentVO.numberValue = this.spyLogVO.armyInfoVO.totalMilitaryDefenceToolCount;
      this.dialogDisp.mc_spySoldiers.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_SOLDIERS);
      this.dialogDisp.mc_spyTools.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_TOOLS);
      var n = D.int(this.spyLogVO.armyInfoVO.getTotalCountByWOD(I.ClientConstCastle.UNIT_PEASANT_WOD));
      var o = D.int(this.spyLogVO.armyInfoVO.getTotalCountByWOD(I.ClientConstCastle.UNIT_MILITIA_WOD));
      if (o > n) {
        this.dialogDisp.mc_spyCitizens.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_MILITIA);
        this.i_spyPeasant_txt_loot.textContentVO.numberValue = o;
        this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountMilitia";
      } else {
        this.dialogDisp.mc_spyCitizens.mc_icon.gotoAndStop(CastleSpyLogDialog.FRAME_PEASANTS);
        this.i_spyPeasant_txt_loot.textContentVO.numberValue = n;
        this.dialogDisp.mc_spyCitizens.toolTipText = "dialog_spyLog_amountPesants";
      }
    }
  };
  CastleSpyLogDialog.prototype.updateJumpToButton = function () {
    if (L.CastleModel.kingdomData.isKingdomUnlocked(this.spyLogVO.mapobjectVO.kingdomID)) {
      x.ButtonHelper.enableButton(this.dialogDisp.txt_castlename, true);
      this.dialogDisp.txt_castlename.toolTipText = "panel_action_jumpTo";
    } else {
      x.ButtonHelper.enableButton(this.dialogDisp.txt_castlename, false);
      this.dialogDisp.txt_castlename.toolTipText = "not_unlocked";
    }
  };
  CastleSpyLogDialog.prototype.updateLord = function () {
    this.dialogDisp.mc_lordHolder.visible = this.messageVO.isDefenceSpyLog();
    l.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_lordHolder);
    this.dialogDisp.mc_lordHolder.mouseChildren = false;
    if (this.spyLogVO.lordVO) {
      var e = this.spyLogVO.lordVO;
      w.EquipmentIconHelper.addLordIcon(e, this.dialogDisp.mc_lordHolder, 50);
      this.lordTooltipTrigger.setProperties(e, this.spyLogVO.mapobjectVO, this.spyLogVO.mapobjectVO, Q.LordEffectHelper.STRATEGY_FULL_ACTIVE, false);
    }
    this.updateAttackButton();
  };
  CastleSpyLogDialog.prototype.updateLegendIcon = function () {
    if ((this.spyLogVO.enemyOwnerInfo.isLegend || B.PlayerHelper.isNpcPvpPlayer(this.spyLogVO.enemyOwnerInfo.playerID) && this.spyLogVO.enemyOwnerInfo.playerLevel >= m.PlayerConst.LEVEL_CAP) && this.messageVO.subtypeResult == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS && !this.messageVO.isPlagueLog && this.messageVO.subtypeSpy != _.MessageConst.SUBTYPE_SPY_SABOTAGE) {
      if (this.spyLogVO.spyOwnerInfo.isLegend) {
        this.dialogDisp.mc_legendIcon.gotoAndStop(1);
        var e = R.CastleLegendEffectTextComposer.getLegendBonusText(this.spyLogVO.legendSkills);
        if (e.length == 0) {
          e = O.Localize.text("dialog_battleLog_legendTemple_tooltip_header") + "\n" + O.Localize.text("equip_effect_no_effect");
        }
        this.dialogDisp.mc_legendIcon.toolTipText = e;
      } else {
        this.dialogDisp.mc_legendIcon.gotoAndStop(2);
        this.dialogDisp.mc_legendIcon.toolTipText = "legendTemple_espionage_false";
      }
      this.dialogDisp.mc_legendIcon.visible = true;
      this.dialogDisp.mc_legendIcon_bg.visible = true;
      this.dialogDisp.mc_legendIcon.mouseChildren = false;
    } else {
      this.dialogDisp.mc_legendIcon.visible = false;
      this.dialogDisp.mc_legendIcon_bg.visible = false;
    }
  };
  CastleSpyLogDialog.prototype.onSpecialEventRemoved = function (e) {
    if (this.spyLogVO) {
      var t = this.spyLogVO.mapobjectVO;
      if (h.instanceOfClass(t, "AInvasionEventMapObjectVO") && e.specialEventVO.eventId == t.eventType) {
        this.hide();
      }
    }
  };
  CastleSpyLogDialog.NAME = "CastleSpyLog";
  CastleSpyLogDialog.FRAME_SOLDIERS = 13;
  CastleSpyLogDialog.FRAME_TOOLS = 15;
  CastleSpyLogDialog.FRAME_PEASANTS = 14;
  CastleSpyLogDialog.FRAME_MILITIA = 16;
  CastleSpyLogDialog.RESOURCE_ICONS_PER_ROW = 4;
  CastleSpyLogDialog.RESOURCE_OVERFLOW_OFFSET = 50;
  return CastleSpyLogDialog;
}(N.CastleExternalDialog);
exports.CastleSpyLogDialog = H;
var j = require("./29.js");
var W = require("./597.js");
var Y = require("./620.js");
var K = require("./621.js");
var z = require("./759.js");
var q = require("./9.js");
var X = require("./320.js");
var Q = require("./133.js");
var J = require("./298.js");
var Z = require("./250.js");
var $ = require("./61.js");
var ee = require("./38.js");
var te = require("./94.js");
var ie = require("./443.js");
var ne = require("./1943.js");
u.classImplementsInterfaces(H, "ICollectableRendererList");