Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./1.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./5.js");
var E = require("./5.js");
var y = require("./5.js");
var b = require("./5.js");
var D = require("./5.js");
var I = require("./5.js");
var T = require("./5.js");
var v = require("./3.js");
var S = require("./3.js");
var A = require("./3.js");
var L = require("./3.js");
var P = require("./6.js");
var M = require("./18.js");
var R = require("./51.js");
var V = require("./16.js");
var x = require("./148.js");
var w = require("./39.js");
var B = require("./159.js");
var F = require("./37.js");
var N = require("./21.js");
var k = require("./561.js");
var U = require("./221.js");
var G = require("./31.js");
var H = require("./19.js");
var j = require("./44.js");
var W = require("./272.js");
var Y = require("./4.js");
var K = require("./52.js");
var z = require("./33.js");
var q = require("./27.js");
var X = require("./5422.js");
var Q = require("./43.js");
var J = require("./24.js");
var Z = require("./20.js");
var $ = require("./215.js");
var ee = require("./235.js");
var te = require("./187.js");
var ie = require("./8.js");
var ne = require("./1627.js");
var oe = require("./119.js");
var ae = require("./185.js");
var se = require("./149.js");
var re = require("./136.js");
var le = require("./11.js");
var ce = require("./247.js");
var ue = require("./93.js");
var de = require("./263.js");
var pe = require("./5423.js");
var he = createjs.Point;
var ge = function (e) {
  function CastleBattleLogMessageAdvanced() {
    var t = this;
    t._hospitalLocationAreaID = 0;
    t._hospitalLocationKingdomID = 0;
    t._isMessageCentered = false;
    t.battlelogloaded = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleBattleLogMessageAdvanced.NAME) || this)._isMessageCentered = true;
    return t;
  }
  n.__extends(CastleBattleLogMessageAdvanced, e);
  Object.defineProperty(CastleBattleLogMessageAdvanced.prototype, "isMessageCentered", {
    get: function () {
      return this._isMessageCentered;
    },
    set: function (e) {
      if (e != this.isMessageCentered) {
        var t = this.messageTextID;
        this._isMessageCentered = e;
        this.messageTextID = t;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogMessageAdvanced.prototype, "messageTextID", {
    get: function () {
      return (this.isMessageCentered ? this.itxt_messageLong : this.itxt_messageLeft).textContentVO.textId;
    },
    set: function (e) {
      this.itxt_messageLong.textContentVO.textId = e;
      this.itxt_messageLeft.textContentVO.textId = e;
      this.itxt_messageLong.visible = this.isMessageCentered;
      this.itxt_messageLeft.visible = !this.isMessageCentered;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogMessageAdvanced.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_headline.gotoAndStop(1);
    this.dialogDisp.mc_honor.toolTipText = "honor";
    this.dialogDisp.mc_xp.toolTipText = Y.CastleModel.userData.isLegend ? w.ClientConstTextIds.LEGEND_XP : w.ClientConstTextIds.XP;
    this.dialogDisp.mc_fame.toolTipText = "dialog_fame_fame";
    this.dialogDisp.mc_factionpoints.factionCoatOfArms.gotoAndStop(1);
    this.dialogDisp.mc_def_tooltip.toolTipText = "dialog_battleLog_defender_tooltip";
    this.dialogDisp.mc_def_dead.toolTipText = "dialog_battleLogDetail_defenderLost";
    this.dialogDisp.mc_att_tooltip.toolTipText = "dialog_battleLog_attacker_tooltip";
    this.dialogDisp.mc_att_dead.toolTipText = "dialog_battleLogDetail_attackerLost";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_honor.mouseChildren = false;
    this.dialogDisp.mc_xp.mouseChildren = false;
    this.dialogDisp.mc_fame.mouseChildren = false;
    this.dialogDisp.mc_factionpoints.mouseChildren = false;
    this.dialogDisp.mc_ragePoints.mouseChildren = false;
    this.dialogDisp.mc_loot.mc_bigLoot.mouseChildren = false;
    this.dialogDisp.mc_loot.mc_smallLoot.mouseChildren = false;
    this.dialogDisp.mc_loot.mc_smallLootTop.mouseChildren = false;
    this.dialogDisp.reputationMC.visible = false;
    this.dialogDisp.mc_tokens.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_detail.txt_label, new L.LocalizedTextVO("dialog_moveOverview_details"));
    this.itxt_noLoot = this.textFieldManager.registerTextField(this.dialogDisp.mc_loot.txt_noLoot, new L.LocalizedTextVO("dialog_battleLog_noLoot"));
    this.itxt_messageLeft = this.textFieldManager.registerTextField(this.dialogDisp.txt_message, new L.LocalizedTextVO(""));
    this.itxt_messageLong = this.textFieldManager.registerTextField(this.dialogDisp.txt_messageLost, new L.LocalizedTextVO(""));
    this.itxt_headline = this.textFieldManager.registerTextField(this.dialogDisp.mc_headline.txt_headline, new L.LocalizedTextVO(""));
    this.itxt_smallLootValue = this.textFieldManager.registerTextField(this.dialogDisp.mc_loot.mc_smallLoot.txt_value, new A.LocalizedNumberVO(0));
    this.itxt_bigLootValue = this.textFieldManager.registerTextField(this.dialogDisp.mc_loot.mc_bigLoot.txt_value, new A.LocalizedNumberVO(0));
    this.itxt_smallLootTopValue = this.textFieldManager.registerTextField(this.dialogDisp.mc_loot.mc_smallLootTop.txt_value, new A.LocalizedNumberVO(0));
    this.itxt_lootLabel = this.textFieldManager.registerTextField(this.dialogDisp.mc_loot.txt_loot_label, new L.LocalizedTextVO(""));
    this.itxt_headlineTarget = this.textFieldManager.registerTextField(this.dialogDisp.mc_headline.txt_target, new v.TextVO(""));
    this.itxt_headlineTarget.autoFitToBounds = true;
    this.itxt_redFactionValue = this.textFieldManager.registerTextField(this.dialogDisp.reputationMC.counterBerimondInvasion.txt_redFaction, new A.LocalizedNumberVO(0));
    this.itxt_blueFactionValue = this.textFieldManager.registerTextField(this.dialogDisp.reputationMC.counterBerimondInvasion.txt_blueFaction, new A.LocalizedNumberVO(0));
    this.itxt_date = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeAndPlace.txt_date, new v.TextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeAndPlace.txt_time, new v.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_autoskip.txt_text, new L.LocalizedTextVO("autoCooldownSkip"));
    this.dialogDisp.mc_autoskip.mouseChildren = false;
    this.castleComponent = new Le.BattleLogCastleComponent(this.dialogDisp.mc_timeAndPlace, new he(52, 47));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.mc_player.btn_playerinfo, this.dialogDisp.mc_opponent.btn_playerinfo, this.dialogDisp.btn_detail, this.dialogDisp.btn_lootmaster, this.dialogDisp.btn_help, this.dialogDisp.mc_loot.mc_itemContainer.btn_up, this.dialogDisp.mc_loot.mc_itemContainer.btn_down, this.dialogDisp.mc_hospital.btn_hospitalLink]);
    ie.ButtonHelper.initButton(this.dialogDisp.btn_deleteLog, 1, Z.ClickFeedbackButtonHover);
    this.dialogDisp.btn_deleteLog.toolTipText = "dialog_inbox_deleteMessage";
  };
  CastleBattleLogMessageAdvanced.prototype.showLoaded = function (e = null) {
    this.dialogDisp.visible = false;
    this.clearLoot();
    this.battlelogloaded = false;
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_animation);
    this.controller.addEventListener(k.CastleLogDataEvent.NEW_LOG, this.bindFunction(this.onNewLog));
    this.controller.addEventListener(k.CastleLogDataEvent.NEW_LOG_ANIMATION, this.bindFunction(this.onNewLog));
    this.controller.addEventListener(k.CastleLogDataEvent.LOG_DOES_NOT_EXISTS, this.bindFunction(this.onLogDoesNotExists));
    Y.CastleModel.messageData.getBattleLogShort(this.dialogProperties.messageID);
    Y.CastleModel.boostData.addEventListener(U.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.refreshBooster));
    Y.CastleModel.boosterSaleData.addEventListener(Oe.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.refreshBooster));
    Y.CastleModel.timerData.addEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateBoosterTime));
    if (this.isOutOfTutorial()) {
      ie.ButtonHelper.enableButton(this.dialogDisp.btn_detail, true);
      ie.ButtonHelper.enableButton(this.dialogDisp.btn_help, true);
    } else {
      ie.ButtonHelper.enableButton(this.dialogDisp.btn_detail, false);
      ie.ButtonHelper.enableButton(this.dialogDisp.btn_help, false);
    }
    ie.ButtonHelper.delayEnableButton(this.dialogDisp.btn_deleteLog, true, 3000);
  };
  CastleBattleLogMessageAdvanced.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.controller.removeEventListener(k.CastleLogDataEvent.NEW_LOG, this.bindFunction(this.onNewLog));
    this.controller.removeEventListener(k.CastleLogDataEvent.NEW_LOG_ANIMATION, this.bindFunction(this.onNewLog));
    this.controller.removeEventListener(k.CastleLogDataEvent.LOG_DOES_NOT_EXISTS, this.bindFunction(this.onLogDoesNotExists));
    Y.CastleModel.timerData.removeEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateBoosterTime));
    Y.CastleModel.boostData.removeEventListener(U.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.refreshBooster));
    Y.CastleModel.boosterSaleData.removeEventListener(Oe.CastleBoosterSaleData.BOOSTER_SALE_UPDATE, this.bindFunction(this.refreshBooster));
    this.stopAndRemoveAnimation();
  };
  CastleBattleLogMessageAdvanced.prototype.onClick = function (t) {
    var i = this;
    e.prototype.onClick.call(this, t);
    if (ie.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_deleteLog:
          Y.CastleModel.messageData.deleteMessage(Y.CastleModel.messageData.getMessageVOById(this.dialogProperties.messageID));
          this.hide();
          break;
        case this.dialogDisp.btn_detail:
          Ee.CastleDialogHandler.getInstance().registerDefaultDialogs(Pe.CastleBattleLogDetailAdvancedDialog, new pe.CastleBattleLogDetailAdvancedDialogProperties(Y.CastleModel.messageData.getLogByMessageId(this.dialogProperties.messageID), this.dialogProperties.messageID, this.dialogProperties.isForwarded, this.dialogProperties.forwardSender, function () {
            ie.ButtonHelper.delayEnableButton(i.dialogDisp.btn_deleteLog, true, 3000);
          }));
          break;
        case this.dialogDisp.mc_player.btn_playerinfo:
        case this.dialogDisp.mc_opponent.btn_playerinfo:
          if (t.target.playerID) {
            Ee.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(Se.CastlePlayerInfoDialog, new ue.CastlePlayerInfoDialogProperties(t.target.playerID), Q.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          } else if (t.target.allianceID) {
            if (t.target.allianceID == Y.CastleModel.userData.allianceID) {
              Ee.CastleDialogHandler.getInstance().registerDefaultDialogs(Te.CastleAllianceDialog, new re.CastleAllianceDialogProperties());
            } else {
              Ee.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(Ie.CastleAllianceInfoDialog, new se.CastleAllianceInfoDialogProperties(t.target.allianceID), Q.CastleDialogConsts.DIALOG_TYPE_SINGLE);
            }
          }
          break;
        case this.dialogDisp.btn_lootmaster:
          if (this.dialogDisp.btn_lootmaster.enabled) {
            Y.CastleModel.boostData.marauderVO.clickedBuyButton();
          }
          break;
        case this.dialogDisp.mc_booster.txt_booster:
          Y.CastleModel.boostData.marauderVO.clickedBuyButton();
          break;
        case this.dialogDisp.mc_hospital.btn_hospitalLink:
          if (fe.FlashBlockHelper.checkFlashBlock(this._hospitalLocationKingdomID)) {
            return;
          }
          if (this.layoutManager.isInMyCastle && Y.CastleModel.areaData.activeArea.areaId == this._hospitalLocationAreaID && Y.CastleModel.areaData.activeArea.spaceId == this._hospitalLocationKingdomID) {
            this.layoutManager.hideAllDialogs();
            Ee.CastleDialogHandler.getInstance().registerDefaultDialogs(Ae.CastleRecruitDialog, new de.CastleRecruitDialogProperties(M.ClientConstCastle.CATEGORY_HOSPITAL));
          } else {
            Y.CastleModel.smartfoxClient.sendCommandVO(new B.C2SJoinCastleVO(this._hospitalLocationAreaID, this._hospitalLocationKingdomID));
            this.controller.addEventListener(F.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
          }
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          Ee.CastleDialogHandler.getInstance().showHelper("", S.Localize.text("help_message_read_combat"));
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.onSwitchedToHospitalLocation = function (e) {
    this.controller.removeEventListener(F.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchedToHospitalLocation));
    Ee.CastleDialogHandler.getInstance().registerDefaultDialogs(Ae.CastleRecruitDialog, new de.CastleRecruitDialogProperties(M.ClientConstCastle.CATEGORY_HOSPITAL));
  };
  CastleBattleLogMessageAdvanced.prototype.onNewLog = function (t) {
    this.controller.removeEventListener(k.CastleLogDataEvent.NEW_LOG, this.bindFunction(this.onNewLog));
    this.controller.removeEventListener(k.CastleLogDataEvent.NEW_LOG_ANIMATION, this.bindFunction(this.onNewLog));
    this.updatePosition();
    e.prototype.showLoaded.call(this);
    this.dialogDisp.visible = true;
    this.showCurrentLog();
  };
  CastleBattleLogMessageAdvanced.prototype.onLogDoesNotExists = function (e) {
    a.debug("BattleLog does not exist!");
    this.hide();
  };
  CastleBattleLogMessageAdvanced.prototype.showCurrentLog = function () {
    var e = Y.CastleModel.messageData.getLogByMessageId(this.dialogProperties.messageID);
    this.dialogDisp.mc_loot.visible = true;
    if (e) {
      this.battlelogloaded = true;
      var t = e.getOwnBattleInfo();
      var i = e.getOpponentInfo();
      var n = e.hasWonState(t);
      var o = e.isDefender(t);
      this.dialogDisp.mc_def_tooltip.toolTipText = o ? "dialog_battleLog_defender_tooltip" : "dialog_battleLog_attacker_tooltip";
      this.dialogDisp.mc_def_dead.toolTipText = o ? "dialog_battleLogDetail_defenderLost" : "dialog_battleLogDetail_attackerLost";
      this.dialogDisp.mc_att_tooltip.toolTipText = o ? "dialog_battleLog_attacker_tooltip" : "dialog_battleLog_defender_tooltip";
      this.dialogDisp.mc_att_dead.toolTipText = o ? "dialog_battleLogDetail_attackerLost" : "dialog_battleLogDetail_defenderLost";
      var a = P.int(CastleBattleLogMessageAdvanced.getCrestFrameFromLog(e));
      this.setCrestFrame(a, false);
      this.setLoot(t.lootGoods.clone(), n, e, e.isDefender(t));
      this.setStats(e, o, n);
      this.setInstantHealInfoIcons(e);
      this.setAnimation(n, o, t.ownerInfoVO.crest, i.ownerInfoVO.crest, e);
      this.setTimeAndPlace(e);
      this.dialogDisp.mc_headline.gotoAndStop(n ? 1 : 2);
      this.itxt_headline.textContentVO.textId = this.getHeadlineTextFromLog(e);
      this.itxt_headlineTarget.textContentVO.stringValue = S.Localize.text("dialog_battleLog_result") + " " + e.mapobjectVO.areaNameString;
      this.itxt_headline.autoFitToBounds = true;
      this.fillPlayerInfo(this.dialogDisp.mc_player, t, e.isDefender(t), e.isFactionBattleLog);
      this.fillPlayerInfo(this.dialogDisp.mc_opponent, i, e.isDefender(i), e.isFactionBattleLog);
      if (e.isFactionInvasionBattleLog) {
        this.dialogDisp.reputationMC.visible = true;
        this.dialogDisp.mc_factionpoints.factionCoatOfArms.gotoAndStop(2);
        this.textFieldManager.registerTextField(this.dialogDisp.reputationMC.mc_reputation.txt_reputation_title, new L.LocalizedTextVO("reputation"));
        this.itxt_redFactionValue.textContentVO.numberValue = t.reputationPointsRed;
        this.itxt_blueFactionValue.textContentVO.numberValue = t.reputationPointsBlue;
        this.dialogDisp.reputationMC.counterBerimondInvasion.mc_redFactionTooltip.toolTipText = "dialog_berimondInvasion_reputation_red";
        this.dialogDisp.reputationMC.counterBerimondInvasion.mc_blueFactionTooltip.toolTipText = "dialog_berimondInvasion_reputation_blue";
        this.itxt_redFactionValue.color = V.ClientConstColor.GENERIC_RED;
        this.itxt_blueFactionValue.color = V.ClientConstColor.GENERIC_RED;
        if (t.reputationPointsRed > 0) {
          this.itxt_redFactionValue.color = V.ClientConstColor.GENERIC_GREEN;
        } else if (t.reputationPointsRed == 0) {
          this.itxt_redFactionValue.color = V.ClientConstColor.GENERIC_BROWN;
        }
        if (t.reputationPointsBlue > 0) {
          this.itxt_blueFactionValue.color = V.ClientConstColor.GENERIC_GREEN;
        } else if (t.reputationPointsBlue == 0) {
          this.itxt_blueFactionValue.color = V.ClientConstColor.GENERIC_BROWN;
        }
      } else {
        this.dialogDisp.reputationMC.visible = false;
        this.dialogDisp.mc_factionpoints.factionCoatOfArms.gotoAndStop(1);
      }
      var s = e.metaData_AttackType;
      if (n) {
        if (e.isDefender(t)) {
          this.messageTextID = "dialog_battleLog_victoryDefenceText";
          if (e.metaData_areaType == D.WorldConst.AREA_TYPE_ISLE_RESOURCE || e.metaData_areaType == D.WorldConst.AREA_TYPE_CAPITAL || e.metaData_areaType == D.WorldConst.AREA_TYPE_METROPOL || e.metaData_areaType == D.WorldConst.AREA_TYPE_KINGS_TOWER || e.metaData_areaType == D.WorldConst.AREA_TYPE_MONUMENT || e.metaData_areaType == D.WorldConst.AREA_TYPE_LABORATORY) {
            this.setBooster(CastleBattleLogMessageAdvanced.TYPE_MARAUDER);
          } else {
            this.setBooster(CastleBattleLogMessageAdvanced.TYPE_NONE);
          }
        } else {
          this.messageTextID = "dialog_battleLog_victoryAttackText";
          if (s == _.MessageConst.SUBTYPE_ATTACK_CONQUER || s == _.MessageConst.SUBTYPE_ATTACK_OCCUPY || e.isOutpostSiegeLog) {
            this.setBooster(CastleBattleLogMessageAdvanced.TYPE_NONE);
          } else {
            this.setBooster(CastleBattleLogMessageAdvanced.TYPE_MARAUDER);
          }
        }
      } else if (e.isDefender(t)) {
        this.messageTextID = "dialog_battleLog_defeatDefenceText";
        this.setBooster(CastleBattleLogMessageAdvanced.TYPE_NONE);
        this.dialogDisp.mc_loot.visible = true;
      } else {
        this.messageTextID = "dialog_battleLog_defeatAttackText";
        this.setBooster(CastleBattleLogMessageAdvanced.TYPE_NONE);
      }
      this.setAdditionalTexts(e);
      this.initChargePointChange(e);
      this.setGeneral(e);
      this.setAutoskip(e);
      this.setAdvisor(e);
    }
  };
  CastleBattleLogMessageAdvanced.prototype.initChargePointChange = function (e) {
    this.dialogDisp.mc_tempCharge.visible = false;
  };
  CastleBattleLogMessageAdvanced.prototype.setTimeAndPlace = function (e) {
    var t = e.battleTimestamp;
    if (t) {
      this.itxt_date.textContentVO.stringValue = q.CastleTimeStringHelper.getDateStringFromDate(t);
      this.itxt_time.textContentVO.stringValue = d.TimeStringHelper.getTimeStringFromDate(t, Y.CastleModel.languageData.getTextById);
      this.castleComponent.drawCastle(e);
    } else {
      this.dialogDisp.mc_timeAndPlace.visible = false;
    }
  };
  CastleBattleLogMessageAdvanced.prototype.getHeadlineTextFromLog = function (e) {
    var t;
    var i = e.metaData_AttackType;
    var n = e.metaData_battleResultSubtype;
    if (i == _.MessageConst.SUBTYPE_ATTACK_CONQUER) {
      switch (n) {
        case _.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          t = "dialog_battleLog_conquerVictory";
          break;
        case _.MessageConst.SUBTYPE_ATTACKER_FAILED:
          t = "dialog_battleLog_conquerLost";
          break;
        case _.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          t = "dialog_battleLog_conquerVictimVictory";
          break;
        case _.MessageConst.SUBTYPE_DEFENDER_FAILED:
          t = "dialog_battleLog_conquerVictimLost";
          break;
        default:
          t = "";
      }
    } else {
      t = e.getOwnBattleResultTitle();
    }
    return t;
  };
  CastleBattleLogMessageAdvanced.prototype.getTextIDConquerAttackerSuccess = function (e) {
    return "dialog_battleLog_conquerVictory";
  };
  CastleBattleLogMessageAdvanced.prototype.setCrestFrame = function (e, t) {
    this.dialogDisp.mc_kingdomIndicator.gotoAndStop(e);
    this.dialogDisp.mc_kingdomIndicator2.gotoAndStop(e);
    this.dialogDisp.mc_kingdomIndicator.visible = !t;
    this.dialogDisp.mc_kingdomIndicator2.visible = !t;
  };
  CastleBattleLogMessageAdvanced.getCrestFrameFromLog = function (e) {
    if (e.isFactionBattleLog) {
      return CastleBattleLogMessageAdvanced.FRAME_CREST_FACTION;
    }
    if (W.TMapHelper.isSeaQueenMap(e.mapobjectVO.mapID)) {
      return CastleBattleLogMessageAdvanced.FRAME_CREST_SEAQUEEN;
    }
    if (W.TMapHelper.isThornKingMap(e.mapobjectVO.mapID)) {
      return CastleBattleLogMessageAdvanced.FRAME_CREST_THORNKING;
    }
    if (W.TMapHelper.isUnderworldMap(e.mapobjectVO.mapID)) {
      return CastleBattleLogMessageAdvanced.FRAME_CREST_UNDERWORLD;
    }
    switch (e.mapobjectVO.kingdomID) {
      case I.WorldClassic.KINGDOM_ID:
        return CastleBattleLogMessageAdvanced.FRAME_CREST_DEFAULT;
      case b.WorldDessert.KINGDOM_ID:
        return CastleBattleLogMessageAdvanced.FRAME_CREST_DESERT;
      case y.WorldIce.KINGDOM_ID:
        return CastleBattleLogMessageAdvanced.FRAME_CREST_ICE;
      case O.WorldVolcano.KINGDOM_ID:
        return CastleBattleLogMessageAdvanced.FRAME_CREST_VOLCANO;
      case E.WorldIsland.KINGDOM_ID:
        return CastleBattleLogMessageAdvanced.FRAME_CREST_ISLAND;
    }
    return P.int(I.WorldClassic.KINGDOM_ID);
  };
  CastleBattleLogMessageAdvanced.prototype.setLoot = function (e, t, i, n) {
    this.itxt_noLoot.visible = e.length <= 0;
    this.itxt_lootLabel.visible = !this.itxt_noLoot.visible;
    if (t) {
      this.itxt_noLoot.textContentVO.textId = n ? "dialog_battleLog_defeatNoLoot" : "dialog_battleLog_noLoot";
      this.itxt_lootLabel.textContentVO.textId = "dialog_battleLog_loot";
    } else if (n) {
      this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_defeatNoLoot";
      this.itxt_lootLabel.textContentVO.textId = "dialog_battleLog_loss";
    } else {
      this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
      this.itxt_lootLabel.textContentVO.textId = "dialog_battleLog_loot";
    }
    this.extractAndShowPointCurrency(e);
    var o = s.ArrayHelper.cloneArray(CastleBattleLogMessageAdvanced.GOODS_FILTER_TYPES);
    if (!t && o.indexOf(Ce.CollectableEnum.C1) > -1) {
      o.splice(o.indexOf(Ce.CollectableEnum.C1), 1);
    }
    var a = new _e.CollectableList();
    for (var r = 0; r < o.length; ++r) {
      var l;
      var c = o[r];
      l = typeof c == "number" ? e.getItemByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, c)) : e.getItemByType(c);
      new _e.CollectableList().addItem(l);
      if (!this.isSpecialCurrencyForLogVO(l, i)) {
        a.addItem(l);
      }
    }
    this.updateNormalLootSection(a);
    var u = CastleBattleLogMessageAdvanced.getSpecialCurrencyLootInfo(e, i);
    var d = CastleBattleLogMessageAdvanced.getTopSpecialCurrencyLootInfo(e, i);
    var p = 0;
    if (i.playerBattleWinnerInfo.length > 0) {
      switch (i.playerBattleWinnerInfo[0].playerID) {
        case x.ClientConstNPCs.NPC_ID_USER_INVASION:
          p = 1;
          break;
        case x.ClientConstNPCs.NPC_ID_RED_ALIEN_INVASION:
          p = 2;
          break;
        default:
          p = 0;
      }
    }
    var h = e.length >= 5;
    this.updateSpecialLootSection(u, d, i.equipmentVO, i.gemVO, i.minuteSkipVO, p, h, i.getOwnBattleInfo().factionPoints);
  };
  CastleBattleLogMessageAdvanced.prototype.extractAndShowPointCurrency = function (e) {
    this.dialogDisp.mc_pointCurrencies.visible = false;
    if (CastleBattleLogMessageAdvanced.POINT_CURRENCIES != null) {
      for (var t = 0, i = CastleBattleLogMessageAdvanced.POINT_CURRENCIES; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = e.getItemByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, n));
          if (o) {
            e.removeByItem(o);
            this.dialogDisp.mc_pointCurrencies.visible = true;
            var a = new H.CollectableRenderOptions(H.CollectableRenderOptions.SET_ICON, new he(25, 25));
            a.tooltip.useAmount = false;
            ye.CollectableRenderHelper.displaySingleItem(new G.CollectableRenderClips(this.dialogDisp.mc_pointCurrencies), o, a, null, function (e) {
              e.onIconLoadedSignal.add(function () {
                e.destroy();
              });
            });
            if (n == K.ClientConstCurrency.ID_STATUETTE_MALUS) {
              this.textFieldManager.registerTextField(this.dialogDisp.mc_pointCurrencies.txt_text, new L.LocalizedTextVO(c.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [o.amount])).color = V.ClientConstColor.MODERN_RED2;
              this.dialogDisp.mc_pointCurrencies.toolTipText = o.amount == 0 ? "dialog_battleLog_StatuetteMalus_maximum" : "dialog_battleLog_StatuetteMalus";
            } else {
              this.textFieldManager.registerTextField(this.dialogDisp.mc_pointCurrencies.txt_text, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [o.amount])).color = V.ClientConstColor.FONT_DEFAULT_COLOR;
            }
            break;
          }
        }
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.isSpecialCurrencyForLogVO = function (e, t) {
    if (e == null) {
      return false;
    }
    var i = P.int(t.mapobjectVO.areaType);
    var n = [Ce.CollectableEnum.AQUAMARINE, Ce.CollectableEnum.C2, K.ClientConstCurrency.ID_SKULL_RELIC, K.ClientConstCurrency.ID_GREEN_SKULL_RELIC, K.ClientConstCurrency.ID_PEARL_RELIC, K.ClientConstCurrency.ID_KHAN_TABLET, K.ClientConstCurrency.ID_KHAN_MEDAL, K.ClientConstCurrency.ID_SAMURAI_TOKEN, K.ClientConstCurrency.ID_SAMURAI_MEDAL, K.ClientConstCurrency.ID_ROYAL_CAPITAL_TOKEN, K.ClientConstCurrency.ID_SILVER_RUNE, K.ClientConstCurrency.ID_GOLD_RUNE];
    if (e.itemType == Ce.CollectableEnum.C2) {
      return i == D.WorldConst.AREA_TYPE_DUNGEON || i == D.WorldConst.AREA_TYPE_EVENT_DUNGEON || i == D.WorldConst.AREA_TYPE_TREASURE_DUNGEON;
    }
    for (var o = 0; o < n.length; o++) {
      if (typeof n[o] == "number" && Ve.instanceOfClass(e, "CollectableItemGenericCurrencyVO") && e.xmlCurrencyVO.id == n[o]) {
        return true;
      }
      if (n[o] instanceof Ce.CollectableEnum && e.itemType == n[o]) {
        return true;
      }
    }
    return false;
  };
  CastleBattleLogMessageAdvanced.prototype.clearLoot = function () {
    this.clearSpecialLootSection();
    this.clearNormalLootSection();
    this.itxt_lootLabel.visible = false;
    this.itxt_noLoot.visible = false;
  };
  CastleBattleLogMessageAdvanced.prototype.updateNormalLootSection = function (e) {
    var t = Y.CastleModel.messageData.getLogByMessageId(this.dialogProperties.messageID);
    var i = Y.CastleModel.subscriptionData.getSubscriptionBuffByEffectType(z.EffectTypeEnum.EFFECT_TYPE_COIN_LOOT_BOOST);
    var n = (t.attackerAllianceSubscribers >= i.requiredMembers && t.attackerBattleInfo.playerID == Y.CastleModel.userData.playerID || t.defenderAllianceSubscribers >= i.requiredMembers && t.defenderBattleInfo.playerID == Y.CastleModel.userData.playerID) && (oe.PlayerHelper.isNomadPlayer(t.attackerBattleInfo.playerID) || oe.PlayerHelper.isSamuraiPlayer(t.attackerBattleInfo.playerID) || oe.PlayerHelper.isNomadPlayer(t.defenderBattleInfo.playerID) || oe.PlayerHelper.isSamuraiPlayer(t.defenderBattleInfo.playerID));
    for (var o = 0; o < e.length; o++) {
      var a = new X.CastleBattleLogLootItemVO(e.getItemByIndex(o));
      a.showSubscriptionBuffed = n && Ve.instanceOfClass(e.getItemByIndex(o), "CollectableItemC1VO");
      this._lootScrollList.pushContent(a);
    }
    this._lootScrollList.initList(0, true);
  };
  CastleBattleLogMessageAdvanced.prototype.updateSpecialLootSection = function (e, t, i, n, o, a, s, r) {
    var l = !!e && e.amount != 0;
    var c = !!i || !!n;
    var u = l || !!i || !!n || !!o || r > -1;
    if (l) {
      if (!!i || !!n || !!o || this.canShowTopSpecialCurrency(t)) {
        this.setSpecialCurrencyLootSmall(e);
        if (this.canShowTopSpecialCurrency(t)) {
          this.setTopSpecialCurrencyLootSmall(t);
        }
      } else {
        this.setSpecialCurrencyLootBig(e);
      }
    }
    if (o) {
      if (c) {
        this.setLootMinuteSkipSmall(o);
      } else {
        this.setLootMinuteSkipBig(o);
      }
    }
    if (i) {
      this.setLootEquipment(i);
    } else if (n) {
      this.setLootGem(n);
    }
    if (!u) {
      this.setNoSpecialLootGained(a, s);
    }
  };
  CastleBattleLogMessageAdvanced.prototype.canShowTopSpecialCurrency = function (e) {
    return !!e && e.amount > 0;
  };
  CastleBattleLogMessageAdvanced.prototype.setNoSpecialLootGained = function (e, t) {
    if (e != 0) {
      this.dialogDisp.mc_loot.mc_alienReducedDamage.visible = true;
      this.dialogDisp.mc_loot.mc_alienReducedDamage.gotoAndStop(e);
      this.dialogDisp.mc_loot.mc_alienReducedDamage.toolTipText = e == 2 ? "dialog_battleLog_redAlienInvasion_lootDamage_tooltip" : "dialog_battleLog_alienInvasion_lootDamage_tooltip";
    } else if (t) {
      this.dialogDisp.mc_loot.mc_dragon.visible = true;
    } else {
      this.dialogDisp.mc_loot.mc_lootbag.visible = true;
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setTopSpecialCurrencyLootSmall = function (e) {
    this.dialogDisp.mc_loot.mc_smallLootTop.mc_smallGfx.gotoAndStop(e.iconFrame);
    this.dialogDisp.mc_loot.mc_smallLootTop.toolTipText = e.toolTipText;
    this.dialogDisp.mc_loot.mc_smallLootTop.visible = true;
    this.itxt_smallLootTopValue.visible = true;
    this.itxt_smallLootTopValue.textContentVO.numberValue = e.amount;
  };
  CastleBattleLogMessageAdvanced.prototype.setSpecialCurrencyLootSmall = function (e) {
    this.dialogDisp.mc_loot.mc_smallLoot.mc_smallGfx.gotoAndStop(e.iconFrame);
    this.dialogDisp.mc_loot.mc_smallLoot.toolTipText = e.toolTipText;
    this.dialogDisp.mc_loot.mc_smallLoot.visible = true;
    this.itxt_smallLootValue.visible = true;
    this.itxt_smallLootValue.textContentVO.numberValue = e.amount;
  };
  CastleBattleLogMessageAdvanced.prototype.setSpecialCurrencyLootBig = function (e) {
    this.dialogDisp.mc_loot.mc_bigLoot.mc_bigGfx.gotoAndStop(e.iconFrame);
    this.dialogDisp.mc_loot.mc_bigLoot.toolTipText = e.toolTipText;
    this.dialogDisp.mc_loot.mc_bigLoot.visible = true;
    this.itxt_bigLootValue.visible = true;
    this.itxt_bigLootValue.textContentVO.numberValue = e.amount;
  };
  CastleBattleLogMessageAdvanced.prototype.setLootMinuteSkipSmall = function (e) {
    this.dialogDisp.mc_loot.mc_other_loot.visible = true;
    this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderSmall.visible = true;
    ye.CollectableRenderHelper.displaySingleItem(new G.CollectableRenderClips(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderSmall), e, new H.CollectableRenderOptions(H.CollectableRenderOptions.SET_ICON | H.CollectableRenderOptions.MINUTESKIP_BACKGROUND, new he(27, 27)));
  };
  CastleBattleLogMessageAdvanced.prototype.setLootMinuteSkipBig = function (e) {
    this.dialogDisp.mc_loot.mc_other_loot.visible = true;
    this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderBig.visible = true;
    ye.CollectableRenderHelper.displaySingleItem(new G.CollectableRenderClips(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderBig), e, new H.CollectableRenderOptions(H.CollectableRenderOptions.SET_ICON | H.CollectableRenderOptions.MINUTESKIP_BACKGROUND, new he(38, 38)));
  };
  CastleBattleLogMessageAdvanced.prototype.setLootGem = function (e) {
    this.dialogDisp.mc_loot.mc_other_loot.visible = true;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.mc_icon.addChild(ve.CastleGemRenderer.renderAsset(e, null, new he(50, 50)));
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.equipmentVO = e;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.mouseChildren = false;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.visible = true;
  };
  CastleBattleLogMessageAdvanced.prototype.setLootEquipment = function (e) {
    this.dialogDisp.mc_loot.mc_other_loot.visible = true;
    De.EquipmentIconHelper.addEquipmentIcon(e, this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.mc_icon, 40, 40);
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.equipmentVO = e;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.mouseChildren = false;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.visible = true;
  };
  CastleBattleLogMessageAdvanced.prototype.clearNormalLootSection = function () {
    if (!this._lootScrollList) {
      this._lootScrollList = new h.ItemScrollList(this.dialogDisp.mc_loot.mc_itemContainer);
      this._lootScrollList.scrollItemClass = Me.CastleBattleLogLootItem;
      this._lootScrollList.scrollStep = 4;
    }
    this._lootScrollList.clear();
  };
  CastleBattleLogMessageAdvanced.prototype.clearSpecialLootSection = function () {
    this.dialogDisp.mc_loot.mc_bigLoot.visible = false;
    this.dialogDisp.mc_loot.mc_bigLoot.toolTipText = "";
    this.itxt_bigLootValue.visible = false;
    this.dialogDisp.mc_loot.mc_smallLoot.visible = false;
    this.dialogDisp.mc_loot.mc_smallLoot.toolTipText = "";
    this.itxt_smallLootValue.visible = false;
    this.dialogDisp.mc_loot.mc_other_loot.visible = false;
    this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.visible = false;
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder.mc_icon);
    this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderBig.visible = false;
    this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderSmall.visible = false;
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderBig.mc_icon);
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderSmall.mc_icon);
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderBig.mc_minuteSkipBackground);
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_loot.mc_other_loot.mc_MinuteSkipHolderSmall.mc_minuteSkipBackground);
    this.dialogDisp.mc_loot.mc_lootbag.visible = false;
    this.dialogDisp.mc_loot.mc_dragon.visible = false;
    this.dialogDisp.mc_loot.mc_alienReducedDamage.visible = false;
    this.itxt_bigLootValue.autoFitToBounds = true;
    this.dialogDisp.mc_loot.mc_smallLootTop.visible = false;
    this.dialogDisp.mc_loot.mc_smallLootTop.toolTipText = "";
    this.itxt_smallLootTopValue.visible = false;
    this.dialogDisp.mc_ragePoints.visible = false;
    this.dialogDisp.mc_pointCurrencies.visible = false;
  };
  CastleBattleLogMessageAdvanced.getTopSpecialCurrencyLootInfo = function (e, t) {
    var i = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_KHAN_MEDAL)));
    if (i > 0) {
      return new Re(10, "khanMedals", i);
    } else {
      return null;
    }
  };
  CastleBattleLogMessageAdvanced.getSpecialCurrencyLootInfo = function (e, t) {
    var i = P.int(t.mapobjectVO.areaType);
    var n = P.int(t.mapobjectVO.mapID);
    var o = P.int(e.getAmountOrDefaultByType(Ce.CollectableEnum.AQUAMARINE));
    var a = P.int(e.getAmountOrDefaultByType(Ce.CollectableEnum.C2));
    var s = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_SKULL_RELIC)));
    var r = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_GREEN_SKULL_RELIC)));
    var l = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_PEARL_RELIC)));
    var c = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_KHAN_TABLET)));
    var u = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_KHAN_MEDAL)));
    var d = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_SAMURAI_TOKEN)));
    var p = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_SILVER_RUNE)));
    var h = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_GOLD_RUNE)));
    var g = P.int(e.getAmountOrDefaultByTypeVO(new me.CollectableTypeVO(Ce.CollectableEnum.GENERIC_CURRENCY, K.ClientConstCurrency.ID_SAMURAI_MEDAL)));
    var C = a >= 1 || i == D.WorldConst.AREA_TYPE_DUNGEON || i == D.WorldConst.AREA_TYPE_EVENT_DUNGEON || i == D.WorldConst.AREA_TYPE_TREASURE_DUNGEON;
    var _ = CastleBattleLogMessageAdvanced.canEarnKhanTablets(t) || u > 0;
    var m = CastleBattleLogMessageAdvanced.canEarnSamuraiTokens(t);
    var f = g > 0;
    var O = o != 0;
    if (CastleBattleLogMessageAdvanced.isSeasonMap(n) && i == D.WorldConst.AREA_TYPE_TREASURE_DUNGEON) {
      switch (t.metaData_optionalTMapID) {
        case T.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY:
        case T.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD:
        case T.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD:
          return new Re(4, "dialog_battleLogDetail_SeaqueenReward", l);
        case T.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY:
          return new Re(6, "dialog_battleLogDetail_UnderworldReward", p);
        case T.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD:
          return new Re(7, "underworldRelicts_Hard", h);
        case T.TreasureMapsConst.MAP_ID_THORNKING_EASY:
          return new Re(3, "dialog_battleLogDetail_ThornkingReward", s);
        case T.TreasureMapsConst.MAP_ID_THORNKING_HARD:
          return new Re(8, "dialog_battleLogDetail_ThornkingReward", r);
      }
    } else {
      if (_) {
        return new Re(2, "dialog_battleLogDetail_NomadReward", c);
      }
      if (m) {
        return new Re(9, "dialog_battleLogDetail_samuraiRewardShop", d);
      }
      if (f) {
        return new Re(11, "currency_name_SamuraiMedal", g);
      }
      if (O) {
        return new Re(5, "aquamarin_tooltip", o);
      }
      if (C) {
        return new Re(1, j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLogDetail_c2Reward"), a);
      }
    }
    return null;
  };
  CastleBattleLogMessageAdvanced.canEarnKhanMedal = function (e) {
    return Ve.instanceOfClass(e.mapobjectVO, "NomadKhanCampMapObjectVO");
  };
  CastleBattleLogMessageAdvanced.canEarnKhanTablets = function (e) {
    return Ve.instanceOfClass(e.mapobjectVO, "NomadCampMapObjectVO") || Ve.instanceOfClass(e.mapobjectVO, "NomadKhanCampMapObjectVO");
  };
  CastleBattleLogMessageAdvanced.canEarnSamuraiTokens = function (e) {
    return Ve.instanceOfClass(e.mapobjectVO, "SamuraiCampMapObjectVO");
  };
  CastleBattleLogMessageAdvanced.isSeasonMap = function (e) {
    return T.TreasureMapsConst.CRUSADE_MAP_IDS.indexOf(e) > -1;
  };
  CastleBattleLogMessageAdvanced.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target && t.target.equipmentVO) {
      De.EquipmentIconHelper.showToolTip(this.dialogDisp.mc_loot.mc_other_loot.mc_equipmentHolder, t.target.equipmentVO);
    }
    if (t.target == this.dialogDisp.mc_autoskip && this.dialogDisp.mc_autoskip.autoSkipCosts) {
      ne.CollectableListTooltipHelper.showToolTipMultiple(this.dialogDisp.mc_autoskip, ["dialog_battleLog_autoSkipPaid_tooltip", "dialog_battleLog_autoSkipPaid_refund_tooltip"], this.dialogDisp.mc_autoskip.autoSkipCosts);
    }
  };
  CastleBattleLogMessageAdvanced.prototype.fillPlayerInfo = function (e, t, i, n) {
    ie.ButtonHelper.enableButton(e.btn_playerinfo, true);
    this.textFieldManager.registerTextField(e.txt_roll, i ? new L.LocalizedTextVO("dialog_battleLog_defender") : new L.LocalizedTextVO("dialog_battleLog_attacker"));
    this.textFieldManager.registerTextField(e.txt_unitCount, new A.LocalizedNumberVO(t.startArmySize));
    var o;
    var a = this.textFieldManager.registerTextField(e.txt_unitLost, new A.LocalizedNumberVO(t.lostUnits));
    if (t.lostUnits < 0) {
      a.color = V.ClientConstColor.GENERIC_RED;
    } else {
      a.color = V.ClientConstColor.GENERIC_BROWN;
    }
    e.mc_crest.visible = false;
    e.mc_crest_alliance.visible = false;
    e.btn_playerinfo.playerID = null;
    e.btn_playerinfo.allianceID = null;
    if (t.ownerIsAlliance) {
      this.textFieldManager.registerTextField(e.btn_playerinfo.txt_label, new v.TextVO(t.ownerInfoVO.allianceName)).autoFitToBounds = true;
      e.btn_playerinfo.allianceID = t.ownerInfoVO.allianceID;
      ie.ButtonHelper.enableButton(e.btn_playerinfo, true);
      e.mc_crest_alliance.visible = true;
      te.CastleAllianceCrestHelper.setCrestGraphics(e.mc_crest_alliance, t.ownerInfoVO.allianceCrestVO, ee.AllianceCrestSizeEnum.XS, $.AllianceCrestEnum.DEFAULT_CREST_SIMPLE);
    } else {
      if (t.ownerInfoVO.playerName == "") {
        this.textFieldManager.registerTextField(e.btn_playerinfo.txt_label, new L.LocalizedTextVO("deleted_Player"));
        ie.ButtonHelper.enableButton(e.btn_playerinfo, false);
      } else {
        this.textFieldManager.registerTextField(e.btn_playerinfo.txt_label, new v.TextVO(t.ownerInfoVO.playerName)).autoFitToBounds = true;
        e.btn_playerinfo.playerID = t.ownerInfoVO.playerID;
        ie.ButtonHelper.enableButton(e.btn_playerinfo, e.btn_playerinfo.mouseEnabled = e.btn_playerinfo.enabled && !oe.PlayerHelper.isNPCPlayer(t.ownerInfoVO.playerID));
      }
      o = n ? be.CrestHelper.getPlayerOrFactionCrest(t.ownerInfoVO) : t.ownerInfoVO.crest;
      e.mc_crest.visible = true;
      be.CrestHelper.setCrestGraphics(e.mc_crest, o, [[0, 0], [22, 22], [12, 18], [18, 10], [8, 8]]);
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setStats = function (e, t, i) {
    var n;
    var o = e.getOwnBattleInfo();
    var a = e.honor;
    var s = P.int(o.xp);
    var r = P.int(o.famePoints);
    var l = P.int(o.factionPoints);
    P.int(o.capitalTokens);
    var u = e.ragePoints;
    if (t) {
      if (a < 0) {
        a = 0;
      }
      if (!i && a >= 0) {
        a = P.int(a * -1);
      }
    }
    if (e.isOutpostSiegeLog || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_DUNGEON) {
      a = 0;
    }
    n = a >= 0 ? this.textFieldManager.registerTextField(this.dialogDisp.mc_honor.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [a], true)) : this.textFieldManager.registerTextField(this.dialogDisp.mc_honor.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_SUBTRACT, [Math.abs(a)], true));
    var d = Y.CastleModel.subscriptionData.getSubscriptionBuffByEffectType(z.EffectTypeEnum.EFFECT_TYPE_HONOR_BONUS);
    var p = (e.attackerAllianceSubscribers >= d.requiredMembers && e.attackerBattleInfo.playerID == Y.CastleModel.userData.playerID || e.defenderAllianceSubscribers >= d.requiredMembers && e.defenderBattleInfo.playerID == Y.CastleModel.userData.playerID) && a > 0;
    ae.SubscriptionHelper.showSubscriptionStarToTextField(n, p, 15, new he(-3, 0));
    this.dialogDisp.mc_xp.toolTipText = o.ownerInfoVO.isLegend ? w.ClientConstTextIds.LEGEND_XP : w.ClientConstTextIds.XP;
    this.dialogDisp.mc_xp.gotoAndStop(o.ownerInfoVO.isLegend ? 2 : 1);
    var h = this.textFieldManager.registerTextField(this.dialogDisp.mc_xp.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [s], true));
    var g = (e.attackerHadPlayerSubscription && e.attackerBattleInfo.playerID == Y.CastleModel.userData.playerID || e.defenderHadPlayerSubscription && e.defenderBattleInfo.playerID == Y.CastleModel.userData.playerID) && s > 0;
    ae.SubscriptionHelper.showSubscriptionStarToTextField(h, g, 15, new he(-3, 0));
    var C = this.textFieldManager.registerTextField(this.dialogDisp.mc_fame.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [r], true));
    var _ = Y.CastleModel.subscriptionData.getSubscriptionBuffByEffectType(z.EffectTypeEnum.EFFECT_TYPE_FAME_OFFENSE_BONUS);
    var m = Y.CastleModel.subscriptionData.getSubscriptionBuffByEffectType(z.EffectTypeEnum.EFFECT_TYPE_FAME_DEFENSE_BONUS);
    var f = e.attackerAllianceSubscribers >= _.requiredMembers && e.attackerBattleInfo.playerID == Y.CastleModel.userData.playerID || e.defenderAllianceSubscribers >= m.requiredMembers && e.defenderBattleInfo.playerID == Y.CastleModel.userData.playerID;
    ae.SubscriptionHelper.showSubscriptionStarToTextField(C, f, 15, new he(-3, 0));
    this.dialogDisp.mc_fame.visible = e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_CASTLE || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_OUTPOST || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_KINGDOM_CASTLE || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_FACTION_CAMP || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_CAPITAL || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_METROPOL || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_VILLAGE || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_KINGS_TOWER || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_MONUMENT || e.mapobjectVO.areaType == D.WorldConst.AREA_TYPE_LABORATORY || Ve.instanceOfClass(e.mapobjectVO, "AAlienInvasionMapobjectVO");
    this.dialogDisp.mc_tokens.visible = false;
    this.dialogDisp.mc_factionpoints.visible = false;
    this.dialogDisp.mc_ragePoints.visible = false;
    var O = !e.isForwardedBattleLog && e.mapobjectVO.kingdomID != -1;
    this.dialogDisp.mc_hospital.visible = O;
    if (O) {
      this.updateHospitalInformation(e);
    }
    if (l >= 0) {
      this.dialogDisp.mc_factionpoints.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_factionpoints.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [l], true));
      this.dialogDisp.mc_factionpoints.toolTipText = "factionHighscore_points";
    }
    if (u >= 0) {
      this.dialogDisp.mc_ragePoints.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_ragePoints.txt_value, new L.LocalizedTextVO(c.GenericTextIds.VALUE_NOMINAL_ADD, [u], true));
      this.dialogDisp.mc_ragePoints.toolTipText = "dialog_nomadInvasion_khanContest_ragePoints_tooltip";
    }
  };
  CastleBattleLogMessageAdvanced.prototype.updateHospitalInformation = function (e) {
    this.dialogDisp.mc_hospital.visible = true;
    this.dialogDisp.mc_hospital.icon_hospital.toolTipText = "dialog_battleLog_hospital";
    var t = e.supporterWoundedUnitCount;
    if (t == -1) {
      t = P.int(e.getOwnBattleInfo().woundedUnits);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_hospital.btn_hospitalLink.txt_label, new A.LocalizedNumberVO(t));
    var i = this.getHospitalLinkDisabledTooltip(e);
    if (i) {
      this.dialogDisp.mc_hospital.btn_hospitalLink.toolTipText = i;
      ie.ButtonHelper.enableButton(this.dialogDisp.mc_hospital.btn_hospitalLink, false);
      this._hospitalLocationAreaID = -1;
      this._hospitalLocationKingdomID = -1;
    } else {
      var n = e.isSupportLog ? "dialog_battleLog_hospitalButton_tooltip_support" : "dialog_battleLog_hospitalButton_tooltip";
      this.dialogDisp.mc_hospital.btn_hospitalLink.toolTipText = n;
      if (Ve.instanceOfClass(e.mapobjectVO, "TreasureDungeonMapObjectVO")) {
        this._hospitalLocationAreaID = P.int(Y.CastleModel.userData.castleList.getHomeCastle().objectId);
        this._hospitalLocationKingdomID = P.int(I.WorldClassic.KINGDOM_ID);
      } else if (e.isLandmarkBattleLog) {
        var o = Y.CastleModel.userData.castleList.getMainCastleByKingdomID(e.mapobjectVO.kingdomID);
        this._hospitalLocationAreaID = o.objectId;
        this._hospitalLocationKingdomID = o.kingdomID;
      } else {
        this._hospitalLocationAreaID = P.int(e.isDefender(e.getOwnBattleInfo()) ? e.defenderHomeCastleId : e.attackerHomeCastleId);
        this._hospitalLocationKingdomID = P.int(e.mapobjectVO.kingdomID);
      }
      if (Y.CastleModel.userData.castleList.getCastleVOByID(this._hospitalLocationAreaID, this._hospitalLocationKingdomID) != null) {
        ie.ButtonHelper.enableButton(this.dialogDisp.mc_hospital.btn_hospitalLink, true);
      } else {
        ie.ButtonHelper.enableButton(this.dialogDisp.mc_hospital.btn_hospitalLink, false);
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.getHospitalLinkDisabledTooltip = function (e) {
    var t = e.getOwnBattleInfo();
    if (e.isSupportLog) {
      if (t.woundedUnits == 0 && e.mapobjectVO.kingdomID == m.FactionConst.KINGDOM_ID) {
        return "dialog_battleLog_hospitalButton_tooltip_auxiliaries";
      } else if (t.lostUnits == 0 && t.woundedUnits) {
        return "dialog_battleLog_hospitalButton_tooltip_supportNoWounded";
      } else if (P.int(e.supporterWoundedUnitCount == -1 ? e.getOwnBattleInfo().woundedUnits : e.supporterWoundedUnitCount) == 0 && t.woundedUnits == 0) {
        return "dialog_battleLog_hospitalButton_tooltip_supportNoWounded";
      } else {
        return null;
      }
    }
    if (t.lostUnits == 0) {
      if (e.getOpponentInfo().lostUnits == 0 && e.isDefender(t)) {
        return "dialog_battleLog_hospitalButton_tooltip_noFight";
      } else {
        return "dialog_battleLog_hospitalButton_tooltip_noLoss";
      }
    }
    var i = this.getHomeCastleName(e);
    if (i) {
      if (t.woundedUnits == 0) {
        if (e.hadHospital(t)) {
          if (e.isHospitalFull(t)) {
            return {
              t: "dialog_battleLog_hospitalButton_tooltip_hospitalFull",
              p: [new v.TextVO(i)]
            };
          } else if (e.mapobjectVO.kingdomID == m.FactionConst.KINGDOM_ID) {
            return "dialog_battleLog_hospitalButton_tooltip_auxiliaries";
          } else if (e.isDefender(t)) {
            return "dialog_battleLog_hospitalButton_tooltip_citizen";
          } else {
            return "dialog_battleLog_hospitalButton_tooltip_suicideUnits";
          }
        } else {
          return {
            t: "dialog_battleLog_hospitalButton_tooltip_noHospital",
            p: [new v.TextVO(i)]
          };
        }
      } else {
        return null;
      }
    } else {
      return "target_not_owned";
    }
  };
  CastleBattleLogMessageAdvanced.prototype.getHomeCastleName = function (e) {
    var t = P.int(e.isDefender(e.getOwnBattleInfo()) ? e.defenderHomeCastleId : e.attackerHomeCastleId);
    if (e.isLandmarkBattleLog) {
      var i = Y.CastleModel.userData.castleList.getMainCastleByKingdomID(e.mapobjectVO.kingdomID);
      if (i) {
        return i.areaNameString;
      } else {
        return null;
      }
    }
    var n = Y.CastleModel.userData.getCastleList(false);
    if (n != null) {
      for (var o = 0, a = n; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.objectId == t && !s.isUnderConquerControl) {
          return s.areaNameString;
        }
      }
    }
    return null;
  };
  CastleBattleLogMessageAdvanced.prototype.setInstantHealInfoIcons = function (e) {
    this.dialogDisp.icon_ownPlayerWounded.visible = e.isDefender(e.getOwnBattleInfo()) && (!e.isLandmarkBattleLog && !e.isOutpostSiegeLog || e.defenderWon) && !e.isSupportLog && e.getOwnBattleInfo().lostUnits != 0;
    this.dialogDisp.icon_enemyPlayerWounded.visible = !e.isDefender(e.getOwnBattleInfo()) && (!e.isLandmarkBattleLog && !e.isOutpostSiegeLog || e.defenderWon) && e.getOpponentInfo().lostUnits != 0 && (e.getOpponentInfo().playerID > 0 || oe.PlayerHelper.isAlienInvasion(e.getOpponentInfo().playerID));
    this.dialogDisp.icon_ownPlayerWounded.toolTipText = {
      t: "dialog_battleLog_wounded",
      p: [e.survivalRate]
    };
    this.dialogDisp.icon_enemyPlayerWounded.toolTipText = {
      t: "dialog_battleLog_wounded",
      p: [e.survivalRate]
    };
  };
  CastleBattleLogMessageAdvanced.prototype.setBooster = function (e) {
    this.dialogDisp.mc_booster.visible = false;
    this.dialogDisp.mc_booster.mc_discount.visible = Y.CastleModel.boosterSaleData.hideDiscount();
    this.dialogDisp.mc_booster.mouseChildren = true;
    this.dialogDisp.btn_lootmaster.visible = false;
    ie.ButtonHelper.enableButton(this.dialogDisp.btn_lootmaster, false);
    Y.CastleModel.timerData.addEventListener(N.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateBoosterTime));
    switch (e) {
      case CastleBattleLogMessageAdvanced.TYPE_MARAUDER:
        this.changeBoosterIcon("SmallChar_LootMaster");
        this.dialogDisp.btn_lootmaster.visible = true;
        this.dialogDisp.mc_booster.visible = true;
        ie.ButtonHelper.enableButton(this.dialogDisp.btn_lootmaster, this.isOutOfTutorial());
        this.updateMarauderText();
        this.dialogDisp.setChildIndex(this.dialogDisp.btn_lootmaster, this.dialogDisp.numChildren - 1);
        this.isMessageCentered = false;
        Y.CastleModel.boosterSaleData.handleMc(this.dialogDisp.mc_booster.mc_discount, f.BoosterConst.MARAUDER);
        break;
      default:
        this.isMessageCentered = true;
    }
  };
  CastleBattleLogMessageAdvanced.prototype.updateMarauderText = function () {
    if (this.dialogDisp.btn_lootmaster.visible && this.battlelogloaded) {
      var e = Y.CastleModel.messageData.getLogByMessageId(this.dialogProperties.messageID);
      var t = !oe.PlayerHelper.isNPCPlayer(e.getOpponentInfo().ownerInfoVO.playerID) && !oe.PlayerHelper.isNPCPlayer(e.getOwnBattleInfo().ownerInfoVO.playerID);
      t ||= oe.PlayerHelper.isNpcPvpPlayer(e.getOpponentInfo().ownerInfoVO.playerID) || oe.PlayerHelper.isNpcPvpPlayer(e.getOwnBattleInfo().ownerInfoVO.playerID);
      if (Y.CastleModel.boostData.marauderVO.isActive) {
        var i = d.TimeStringHelper.getCommaTimeStringFromSeconds(Y.CastleModel.boostData.marauderVO.remainingTimeInSeconds, S.Localize.text);
        if (t) {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.txt_booster, new L.LocalizedTextVO("dialog_battleLog_marauderIsActive_pvp", [i])).mouseEnabled = false;
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.txt_booster, new L.LocalizedTextVO("dialog_battleLog_boosterIsActive", [S.Localize.text("dialog_recuit_marauder"), i])).mouseEnabled = false;
        }
        this.dialogDisp.btn_lootmaster.toolTipText = "rise";
      } else {
        if (t) {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.txt_booster, new L.LocalizedTextVO("dialog_battleLog_marauderIsInactive_pvp")).mouseEnabled = false;
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.mc_booster.txt_booster, new L.LocalizedTextVO("dialog_battleLog_marauder")).mouseEnabled = false;
        }
        this.dialogDisp.btn_lootmaster.toolTipText = "dialog_recuit_hireMarauder";
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.changeBoosterIcon = function (e) {
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_booster.mc_boosterChar);
    var t = new J.CastleGoodgameExternalClip(e + "_Icon", u.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false, g.getDefinitionByName("QuestGiverSmall_" + R.ClientConstCharacter.CHAR_ID_UNKNOWN + "_Icon"));
    t.clipSizeComponent = new l.ClipSizeComponent(65, 65);
    this.dialogDisp.mc_booster.mc_boosterChar.addChild(t.asDisplayObject());
  };
  CastleBattleLogMessageAdvanced.prototype.updateBoosterTime = function (e) {
    if (this.dialogDisp.btn_lootmaster.visible) {
      this.updateMarauderText();
    }
  };
  CastleBattleLogMessageAdvanced.prototype.refreshBooster = function (e) {
    if (this.dialogDisp.btn_lootmaster.visible) {
      this.updateMarauderText();
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setAdditionalTexts = function (e) {
    if (e.logType == _.MessageConst.MESSAGE_TYPE_BATTLE_LOG) {
      switch (e.metaData_AttackType) {
        case _.MessageConst.SUBTYPE_ATTACK_CONQUER:
          this.setAdditionalConquerAttackTexts(e);
          break;
        case _.MessageConst.SUBTYPE_ATTACK_OCCUPY:
          this.setAdditionalOccupyAttackTexts();
          break;
        case _.MessageConst.SUBTYPE_ATTACK_NORMAL:
        case _.MessageConst.SUBTYPE_ATTACK_NPC:
          this.setAdditionalNormalAttackTexts(e.metaData_areaType, e.metaData_battleResultSubtype, e.metaData_optionalTMapID);
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setAdditionalNormalAttackTexts = function (e, t, i) {
    if (e == D.WorldConst.AREA_TYPE_TREASURE_DUNGEON && i == 0) {
      if (t == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
        this.messageTextID = "dialog_treasureMap_towerDefeated_copy";
      } else if (t == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        this.messageTextID = "dialog_battleLog_defeatAttackText";
      }
    } else if (e == D.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      if (t == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
        this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youInstantTakeover";
        this.messageTextID = "dialog_battleLog_resourceIslandVictoryAttackText";
      } else if (t == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
        this.messageTextID = "dialog_battleLog_resourceIslandDefeatAttackText";
      } else if (t == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
        this.messageTextID = "dialog_battleLog_resourceIslandVictoryDefenceText";
      } else if (t == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
        this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youLostResourceIsland";
        this.messageTextID = "dialog_battleLog_resourceIslandDefeatDefenceText";
      }
    } else if (e == D.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      if (t == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
        this.messageTextID = "dialog_battleLog_allianceTowerVictoryAttackText_Maya";
      } else if (t == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        this.messageTextID = "dialog_battleLog_allianceTowerDefeatAttackText_Maya";
      } else if (t == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
        this.messageTextID = "dialog_battleLog_allianceTowerVictoryDefenceText_Maya";
      } else if (t == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
        this.messageTextID = "dialog_battleLog_allianceTowerDefeatDefenceText_Maya";
      }
    } else if (e == D.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER) {
      if (t == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
        this.messageTextID = "dialog_battleLog_resourceTowerVictoryAttackText_Maya";
      } else if (t == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
        this.messageTextID = "dialog_battleLog_resourceTowerDefeatAttackText_Maya";
      }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setAdditionalOccupyAttackTexts = function () {
    this.messageTextID = "dialog_siegeMessage_yourFriendWasConquered";
    this.dialogDisp.mc_booster.visible = false;
    this.dialogDisp.btn_lootmaster.visible = false;
  };
  CastleBattleLogMessageAdvanced.prototype.setAdditionalConquerAttackTexts = function (e) {
    var t = e.metaData_areaType;
    var i = e.metaData_battleResultSubtype;
    this.dialogDisp.mc_booster.visible = false;
    this.dialogDisp.btn_lootmaster.visible = false;
    switch (t) {
      case D.WorldConst.AREA_TYPE_LABORATORY:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youInstantTakeover";
          if (e.mapobjectVO.kingdomID == y.WorldIce.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryVictoryAttackText_coal";
          } else if (e.mapobjectVO.kingdomID == b.WorldDessert.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryVictoryAttackText_oil";
          } else if (e.mapobjectVO.kingdomID == O.WorldVolcano.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryVictoryAttackText_glass";
          } else if (e.mapobjectVO.kingdomID == I.WorldClassic.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryVictoryAttackText_iron";
          }
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
          this.messageTextID = "dialog_battleLog_laboratoryDefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.isMessageCentered = true;
          this.messageTextID = "dialog_battleLog_laboratoryVictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youLostLaboratory";
          if (e.mapobjectVO.kingdomID == y.WorldIce.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryDefeatDefenceText_coal";
          } else if (e.mapobjectVO.kingdomID == b.WorldDessert.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryDefeatDefenceText_oil";
          } else if (e.mapobjectVO.kingdomID == O.WorldVolcano.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryDefeatDefenceText_glass";
          } else if (e.mapobjectVO.kingdomID == I.WorldClassic.KINGDOM_ID) {
            this.messageTextID = "dialog_battleLog_laboratoryDefeatDefenceText_iron";
          }
        }
        break;
      case D.WorldConst.AREA_TYPE_MONUMENT:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youInstantTakeover";
          this.messageTextID = "dialog_battleLog_monumentVictoryAttackText";
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
          this.messageTextID = "dialog_battleLog_monumentDefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.isMessageCentered = true;
          this.messageTextID = "dialog_battleLog_monumentVictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youLostMonument";
          this.messageTextID = "dialog_battleLog_monumentDefeatDefenceText";
        }
        break;
      case D.WorldConst.AREA_TYPE_ISLE_RESOURCE:
        if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youLostResourceIsland";
          this.messageTextID = "dialog_battleLog_resourceIslandDefeatDefenceText";
        }
        break;
      case D.WorldConst.AREA_TYPE_KINGS_TOWER:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youInstantTakeover";
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_kingtowerVictoryAttackText");
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_kingtowerDefeatAttackText");
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.isMessageCentered = true;
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_kingtowerVictoryDefenceText");
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_youLostKingstower");
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_kingtowerDefeatDefenceText");
        }
        break;
      case D.WorldConst.AREA_TYPE_METROPOL:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          if (oe.PlayerHelper.isNPCPlayer(e.getOpponentInfo().ownerInfoVO.playerID)) {
            this.itxt_noLoot.textContentVO.textId = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_noSiege_metropolis");
          } else {
            this.itxt_noLoot.textContentVO.textId = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_youSiege24h_metropolis");
            this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
          }
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_metropolisVictoryAttackText");
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_metropolisDefeatAttackText");
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_metropolisVictoryDefenceText");
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_youLostMetropolis");
          this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
          this.messageTextID = j.SpecialServerHelper.checkTextIDForSkinText("dialog_battleLog_metropolisDefeatDefenceText");
        }
        break;
      case D.WorldConst.AREA_TYPE_CAPITAL:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          if (oe.PlayerHelper.isNPCPlayer(e.getOpponentInfo().ownerInfoVO.playerID)) {
            this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_noSiege_capital";
          } else {
            this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youSiege24h_capital";
            this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
          }
          this.messageTextID = "dialog_battleLog_capitalVictoryAttackText";
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_attackNoLoot";
          this.messageTextID = "dialog_battleLog_capitalDefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_capitalVictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youLostCapital";
          this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
          this.messageTextID = "dialog_battleLog_capitalDefeatDefenceText";
        }
        break;
      case D.WorldConst.AREA_TYPE_OUTPOST:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_conquerVictoryAttackText";
          this.itxt_lootLabel.textContentVO.textId = "dialog_battleLog_victory";
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youSiege24h";
          this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.messageTextID = "dialog_battleLog_conquerDefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_conquerVictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.messageTextID = "dialog_battleLog_conquerDefeatDefenceText";
          this.itxt_noLoot.textContentVO.textId = "dialog_battleLog_youBeenSieged";
          this.itxt_noLoot.textContentVO.textReplacements = [d.TimeStringHelper.getTimeToString(C.OutpostConst.SIEGE_TIME, d.TimeStringHelper.ONE_TIME_FORMAT, S.Localize.text)];
        }
        break;
      case D.WorldConst.AREA_TYPE_VILLAGE:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_villageVictoryAttackText";
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.messageTextID = "dialog_battleLog_villageDefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_villageVictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.messageTextID = "dialog_battleLog_villageDefeatDefenceText";
        }
        break;
      default:
        if (i == _.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_VictoryAttackText";
        } else if (i == _.MessageConst.SUBTYPE_ATTACKER_FAILED) {
          this.messageTextID = "dialog_battleLog_DefeatAttackText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
          this.messageTextID = "dialog_battleLog_VictoryDefenceText";
        } else if (i == _.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          this.messageTextID = "dialog_battleLog_DefeatDefenceText";
        }
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setAnimation = function (e, t, i, n, o) {
    var a = this;
    this.stopAndRemoveAnimation();
    var s = t ? n.colorsTwo : i.colorsTwo;
    var l = t ? i.colorsTwo : n.colorsTwo;
    var c = [];
    c.push(new r.ClipColor("flagAttacker", s));
    c.push(new r.ClipColor("flagDefender", l));
    if (e && !t || !e && t) {
      this._winAnimationClip ||= new J.CastleGoodgameExternalClip("BattleLogAdvancedWinAnimation", u.BasicModel.basicLoaderData.getVersionedItemAssetUrl("BattleLogAdvancedWinAnimation"), null, 24, false, g.getDefinitionByName("BattleAnimationLoadingWin"), true, 1, true, true);
      this._animationClip = this._winAnimationClip;
    } else {
      this._lostAnimationClip ||= new J.CastleGoodgameExternalClip("BattleLogAdvancedLostAnimation", u.BasicModel.basicLoaderData.getVersionedItemAssetUrl("BattleLogAdvancedLostAnimation"), null, 24, false, g.getDefinitionByName("BattleAnimationLoadingLost"), true, 1, true, true);
      this._animationClip = this._lostAnimationClip;
    }
    this._animationClip.colorData = c;
    this._animationClip.doWhenLoaded(this.bindFunction(function (e) {
      if (a._animationClip) {
        if (Y.CastleModel.gfxData.animationActive) {
          a._animationClip.gotoAndPlay(1);
        } else {
          a._animationClip.gotoAndStop(1);
        }
      }
    }));
    this.dialogDisp.mc_animation.addChild(this._animationClip.asDisplayObject());
  };
  CastleBattleLogMessageAdvanced.prototype.stopAndRemoveAnimation = function () {
    if (this._animationClip) {
      this._animationClip.gotoAndStop(1);
      xe.CastleMovieClipHelper.stopAllMovies(this._animationClip);
      this.dialogDisp.mc_animation.removeChild(this._animationClip);
    }
    p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_animation);
    this._animationClip = null;
  };
  CastleBattleLogMessageAdvanced.prototype.setGeneral = function (e) {
    var t = e.commanderVO;
    if (!e.isDefender(e.getOwnBattleInfo()) && t.assignedGeneralVO) {
      p.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_general);
      new ce.GeneralSelectionItem(t.assignedGeneralVO, this.dialogDisp.mc_general, false, true, false);
      this.dialogDisp.mc_general.toolTipText = S.Localize.text("dialog_battleLog_generalParticipation_tooltip", [t.assignedGeneralVO.nameTextShort]);
      var i = t.assignedGeneralVO.levelsGained;
      var n = i > 1 ? "dialog_battleLog_generalXP_levelProgress_plural_desc" : "dialog_battleLog_generalXP_levelProgress_desc";
      this.textFieldManager.registerTextField(this.dialogDisp.mc_generalXP.txt_levelUP, new L.LocalizedTextVO(n, [i])).visible = i > 0;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_generalXP.txt_xpGained, new L.LocalizedTextVO("dialog_battleLog_generalXP_gained_desc", [t.assignedGeneralVO.xpGained]));
      if (t.assignedGeneralVO.nextLevelXP < 0) {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_generalXP.mc_progress.txt_xp, new L.LocalizedTextVO("maximumabbrevation", [t.assignedGeneralVO.currentLevelXP, t.assignedGeneralVO.nextLevelXP]));
        this.dialogDisp.mc_generalXP.mc_progress.mc_max.visible = true;
      } else {
        this.textFieldManager.registerTextField(this.dialogDisp.mc_generalXP.mc_progress.txt_xp, new L.LocalizedTextVO(c.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [t.assignedGeneralVO.currentLevelXP, t.assignedGeneralVO.nextLevelXP]));
        this.dialogDisp.mc_generalXP.mc_progress.mc_max.visible = false;
      }
      this.dialogDisp.mc_generalXP.mc_progress.progressbar.scaleX = t.assignedGeneralVO.getXPProgressFactor();
      this.dialogDisp.mc_generalXP.visible = true;
      this.dialogDisp.mc_general.visible = true;
    } else {
      this.dialogDisp.mc_generalXP.visible = false;
      this.dialogDisp.mc_general.visible = false;
    }
  };
  CastleBattleLogMessageAdvanced.prototype.setAutoskip = function (e) {
    this.dialogDisp.mc_autoskip.autoSkipCosts = e.autoSkipCosts[0].length > 0 ? e.autoSkipCosts : null;
    this.dialogDisp.mc_autoskip.visible = e.autoSkipType > 0;
    var t = e.autoSkipType > 0 && e.autoSkipCosts[0].length == 0;
    this.dialogDisp.mc_autoskip.icon_inactive.visible = t;
    this.dialogDisp.mc_autoskip.icon_active.visible = !t;
    this.dialogDisp.mc_autoskip.toolTipText = t ? "dialog_battleLog_autoSkipNotPaid_tooltip" : null;
  };
  CastleBattleLogMessageAdvanced.prototype.setAdvisor = function (e) {
    this.dialogDisp.mc_advisor.visible = e.advisorType > 0;
    this.dialogDisp.mc_advisor.mc_icon.gotoAndStop(e.advisorType);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_advisor.txt_advisor, new L.LocalizedTextVO("advisor_AttackNumber", [e.advisorMovementNumber, e.advisorMovementCount]));
  };
  Object.defineProperty(CastleBattleLogMessageAdvanced.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogMessageAdvanced.__initialize_static_members = function () {
    CastleBattleLogMessageAdvanced.POINT_CURRENCIES = [K.ClientConstCurrency.ID_SHOGUN_POINT, K.ClientConstCurrency.ID_STATUETTE_MALUS, K.ClientConstCurrency.ID_CARGO_POINTS];
    CastleBattleLogMessageAdvanced.GOODS_FILTER_TYPES = [Ce.CollectableEnum.WOOD, Ce.CollectableEnum.STONE, Ce.CollectableEnum.FOOD, Ce.CollectableEnum.C1, Ce.CollectableEnum.COAL, Ce.CollectableEnum.OIL, Ce.CollectableEnum.GLASS, Ce.CollectableEnum.IRON, Ce.CollectableEnum.HONEY, Ce.CollectableEnum.MEAD, Ce.CollectableEnum.BEEF, Ce.CollectableEnum.GENERIC_CURRENCY];
  };
  CastleBattleLogMessageAdvanced.NAME = "CastleBattleLogMessageAdvanced_APR25";
  CastleBattleLogMessageAdvanced.FRAME_CREST_DEFAULT = 1;
  CastleBattleLogMessageAdvanced.FRAME_CREST_DESERT = 2;
  CastleBattleLogMessageAdvanced.FRAME_CREST_ICE = 3;
  CastleBattleLogMessageAdvanced.FRAME_CREST_VOLCANO = 4;
  CastleBattleLogMessageAdvanced.FRAME_CREST_FACTION = 5;
  CastleBattleLogMessageAdvanced.FRAME_CREST_ISLAND = 8;
  CastleBattleLogMessageAdvanced.FRAME_CREST_SEAQUEEN = 6;
  CastleBattleLogMessageAdvanced.FRAME_CREST_THORNKING = 7;
  CastleBattleLogMessageAdvanced.FRAME_CREST_UNDERWORLD = 9;
  CastleBattleLogMessageAdvanced.TYPE_MARAUDER = "type_marauder";
  CastleBattleLogMessageAdvanced.TYPE_NONE = "type_none";
  return CastleBattleLogMessageAdvanced;
}(le.CastleExternalDialog);
exports.CastleBattleLogMessageAdvanced = ge;
o.classImplementsInterfaces(ge, "ICollectableRendererList");
var Ce = require("./12.js");
var _e = require("./48.js");
var me = require("./74.js");
var fe = require("./160.js");
var Oe = require("./269.js");
var Ee = require("./9.js");
var ye = require("./25.js");
var be = require("./61.js");
var De = require("./73.js");
var Ie = require("./132.js");
var Te = require("./125.js");
var ve = require("./248.js");
var Se = require("./94.js");
var Ae = require("./225.js");
var Le = require("./1955.js");
var Pe = require("./5424.js");
var Me = require("./5430.js");
var Re = function () {
  return function SpecialCurrencyInfoVO(e, t, i) {
    this.amount = 0;
    this.iconFrame = 0;
    this.iconFrame = e;
    this.toolTipText = t;
    this.amount = i;
  };
}();
var Ve = require("./1.js");
var xe = require("./41.js");
ge.__initialize_static_members();