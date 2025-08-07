Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./100.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./18.js");
var m = require("./16.js");
var f = require("./561.js");
var O = require("./44.js");
var E = require("./4.js");
var y = require("./27.js");
var b = require("./197.js");
var D = require("./36.js");
var I = require("./20.js");
var T = require("./497.js");
var v = require("./419.js");
var S = require("./420.js");
var A = require("./713.js");
var L = require("./8.js");
var P = require("./1730.js");
var M = require("./11.js");
var R = require("./247.js");
var V = require("./164.js");
var x = require("./1944.js");
var w = require("./5425.js");
var B = createjs.Point;
var F = function (e) {
  function CastleBattleLogDetailAdvancedDialog() {
    var t = this;
    t._currentWave = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this, CastleBattleLogDetailAdvancedDialog.NAME) || this).backgroundAlpha = 0.1;
    return t;
  }
  n.__extends(CastleBattleLogDetailAdvancedDialog, e);
  CastleBattleLogDetailAdvancedDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_forwarding, this.dialogDisp.mc_flank1.btn_left1, this.dialogDisp.mc_flank1.btn_left2, this.dialogDisp.mc_flank1.btn_right1, this.dialogDisp.mc_flank1.btn_right2, this.dialogDisp.mc_flank2.btn_left1, this.dialogDisp.mc_flank2.btn_left2, this.dialogDisp.mc_flank2.btn_right1, this.dialogDisp.mc_flank2.btn_right2, this.dialogDisp.mc_flank3.btn_left1, this.dialogDisp.mc_flank3.btn_left2, this.dialogDisp.mc_flank3.btn_right1, this.dialogDisp.mc_flank3.btn_right2, this.dialogDisp.mc_finalWave.btn_left2, this.dialogDisp.mc_yard.btn_left1, this.dialogDisp.mc_yard.btn_right1]);
    L.ButtonHelper.initButtons([this.dialogDisp.mc_selector_wave.mc_selector], I.ClickFeedbackButtonHover, 1);
    this.dialogDisp.mc_selector_wave.mc_items = this.dialogDisp.mc_selector_wave.mc_list;
    this._itxt_wave = this.textFieldManager.registerTextField(this.dialogDisp.mc_selector_wave.mc_selector.txt_label, new g.LocalizedTextVO(""));
    this._waveSelector = new v.SimpleComboboxComponent(this.dialogDisp.mc_selector_wave, new S.SimpleComboboxComponentConfig(-2, 1));
    this.i_txt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new g.LocalizedTextVO("dialog_battleLogDetail_title"));
    this.i_txt_win = this.textFieldManager.registerTextField(this.dialogDisp.txt_win, new g.LocalizedTextVO("dialog_battleLog_Victory01"));
    this.i_bonus_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_bonus.txt_value, new g.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_yard_left_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.txt_left.txt_label, new d.TextVO(""));
    this.i_yard_left1_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.btn_left1.txt_label, new d.TextVO(""));
    this.i_yard_right_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.txt_right.txt_label, new d.TextVO(""));
    this.i_yard_right1_txt_label = this.textFieldManager.registerTextField(this.dialogDisp.mc_yard.btn_right1.txt_label, new d.TextVO(""));
    this.i_yard_left_txt_label.autoFitToBounds = true;
    this.i_yard_left1_txt_label.autoFitToBounds = true;
    this.i_yard_right_txt_label.autoFitToBounds = true;
    this.i_yard_right1_txt_label.autoFitToBounds = true;
    this.itxt_date = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeData.mc_date.txt_date, new d.TextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeData.mc_time.txt_time, new d.TextVO(""));
    this.itxt_time.autoFitToBounds = true;
    this.castleComponent = new Y.BattleLogCastleComponent(this.dialogDisp.mc_castleIcon, new B(1000, 70));
    this.dialogDisp.mc_timeData.mc_date.toolTipText = "generic_date";
    this.dialogDisp.mc_timeData.mc_date.mouseChildren = false;
    this.dialogDisp.mc_timeData.mc_time.toolTipText = "time";
    this.dialogDisp.mc_timeData.mc_time.mouseChildren = false;
    this.baronToolipTrigger = new U.LordEffectTooltipTrigger(this.dialogDisp.mc_baron);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.applyPropertiesLoaded = function (e = null) {
    if (!this.isWaitingForServerMessage) {
      this.dialogDisp.btn_forwarding.toolTipText = "dialog_forwardlog_tootlipp";
      this.dialogDisp.btn_help.toolTipText = "generic_help";
      this.dialogDisp.btn_forwarding.visible = !this.dialogProperties.forwarded && E.CastleModel.userData.isInAlliance && this.dialogProperties.logVO && !this.dialogProperties.logVO.isFactionBattleLog;
      var t;
      var i = E.CastleModel.allianceData.myAllianceVO;
      L.ButtonHelper.enableButton(this.dialogDisp.btn_forwarding, i && i.memberList.length > 1);
      if (i && i.memberList.length == 1) {
        this.dialogDisp.btn_forwarding.toolTipText = "dialog_forwardLog_noMember_tooltip";
      }
      this.dialogDisp.icon_forward.visible = this.dialogProperties.forwarded;
      this.dialogDisp.icon_forward.toolTipText = "dialog_forwardlog_owner" + b.CastleToolTipManager.ID_PARAM_SEPERATOR + this.dialogProperties.forwardSender;
      this._currentWave = -1;
      this.logVO = this.dialogProperties.logVO;
      this.resetDialog();
      this.i_txt_title.textContentVO.textId = "dialog_battleLogDetail_title";
      if (this.dialogProperties.logVO.hasWonState(this.dialogProperties.logVO.getOwnBattleInfo())) {
        this.i_txt_win.textContentVO.textId = "dialog_battleLog_Victory01";
        this.dialogDisp.btn_winDeco1.gotoAndStop(2);
      } else {
        this.i_txt_win.textContentVO.textId = s.GenericTextIds.VALUE_SIMPLE_COMP;
        t = p.Localize.text("dialog_battleLog_defeat");
        t += "!";
        this.i_txt_win.textContentVO.textReplacements = [t, ""];
        this.dialogDisp.btn_winDeco1.gotoAndStop(1);
      }
      this.controller.addEventListener(f.CastleLogDataEvent.NEW_DETAILED_LOG, this.bindFunction(this.onNewDetailedLog));
      this.dialogDisp.support_source.visible = false;
      this.dialogDisp.support_target.visible = false;
      if (this.dialogProperties.logVO.hasMiddleInfo) {
        this.updateWaveSelector();
        this.displayLog();
      } else {
        E.CastleModel.messageData.getBattleLogMiddle(this.dialogProperties.logVO.logID);
        this.isWaitingForServerMessage = true;
      }
      this.dialogDisp.mc_icon1.toolTipText = "dialog_battleLogDetail_round1";
      this.dialogDisp.mc_icon2.toolTipText = "dialog_battleLogDetail_round2";
      this.dialogDisp.mc_yardLine.mc_icon3.toolTipText = "dialog_battleLogDetail_round3";
      this.dialogDisp.mc_bonus.toolTipText = "dialog_battleLogDetail_bonus";
      this.dialogDisp.mc_bonus.mouseChildren = false;
      this.dialogDisp.mc_yard.btn_left2.visible = false;
      this.dialogDisp.mc_yard.btn_right2.visible = false;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.showLoaded = function (t = null) {
    if (this.isWaitingForServerMessage) {
      this.dialogDisp.visible = false;
    } else {
      e.prototype.showLoaded.call(this, t);
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.hideLoaded = function (t = null) {
    this.isWaitingForServerMessage = false;
    e.prototype.hideLoaded.call(this);
    if (this._waveSelector) {
      this._waveSelector.onHide();
      this._waveSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    this.resetDialog();
    this.controller.removeEventListener(f.CastleLogDataEvent.NEW_DETAILED_LOG, this.bindFunction(this.onNewDetailedLog));
    if (this.dialogProperties.onClose) {
      this.dialogProperties.onClose();
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.updateWaveSelector = function () {
    r.MovieClipHelper.clearMovieClip(this._waveSelector.disp.mc_item);
    var e = [];
    for (var t = -1; t <= this.dialogProperties.logVO.lastWaveIndex; t++) {
      var i = new T.ModernComboboxComponentItem("CastleBattleLogDetailedAdvanced_DropdownElement", CastleBattleLogDetailAdvancedDialog.NAME, this.bindFunction(this.fillWaveItem), t);
      e.push(i);
    }
    this._waveSelector.updateWithNewValues(e);
    this._waveSelector.onShow();
    this._waveSelector.selectIndex(0);
    this._waveSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onNewDetailedLog = function (e = null) {
    var t = false;
    if (this.isWaitingForServerMessage) {
      t = true;
    }
    this.isWaitingForServerMessage = false;
    if (t) {
      this.showLoaded();
      this.dialogDisp.visible = true;
    }
    this.updateWaveSelector();
    this.displayLog();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.displayLog = function () {
    this.resetDialog();
    if (this.dialogProperties.logVO.mediumBattleWaves && this._currentWave == this.dialogProperties.logVO.reinforcementWaveIndex) {
      this.fillReinforcementWave(this.dialogProperties.logVO, _.ClientConstCastle.FLANK_REINFORCEMENT);
      this._itxt_wave.textContentVO.textId = "dialog_battleLogDetail_finalWave";
      this.dialogDisp.mc_yardLine.visible = false;
    } else if (this._currentWave == -1) {
      this.fillBattleLog(this.dialogProperties.logVO, this._currentWave);
      if (this.dialogProperties.logVO.hasReinforcementWave()) {
        this.fillReinforcementWave(this.dialogProperties.logVO, _.ClientConstCastle.FLANK_REINFORCEMENT_SUMMARY);
      }
      this._itxt_wave.textContentVO.textId = "dialog_battleLogDetail_summary";
      this.dialogDisp.mc_yardLine.visible = true;
    } else {
      this.fillBattleLog(this.dialogProperties.logVO, this._currentWave);
      this._itxt_wave.textContentVO.textId = s.GenericTextIds.VALUE_ASSIGN_COLON;
      this._itxt_wave.textContentVO.textReplacements = [p.Localize.text("dialog_battleLogDetail_wave"), String(this._currentWave + 1)];
      this.dialogDisp.mc_yardLine.visible = false;
    }
    this.setTimeData();
    this.castleComponent.drawCastle(this.logVO);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setTimeData = function () {
    var e = this.dialogProperties.logVO.battleTimestamp;
    this.itxt_date.textContentVO.stringValue = y.CastleTimeStringHelper.getDateStringFromDate(e);
    this.itxt_time.textContentVO.stringValue = l.TimeStringHelper.getTimeStringFromDate(e, E.CastleModel.languageData.getTextById);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillBattleLog = function (e, t) {
    var i;
    var n;
    var o;
    if (t == -1) {
      i = e.mediumSummaryWave;
      n = e.attackerTroopcountInKeep;
      o = e.defenderTroopcountInKeep;
    } else {
      n = (i = e.mediumBattleWaves[t]).attacker.soldierAmountSurvived;
      o = i.defender.soldierAmountSurvived;
    }
    var a;
    var r;
    var l = i.attacker.flankLeft.soldierAmountSurvived > 0;
    var c = i.attacker.flankMiddle.soldierAmountSurvived > 0;
    var d = i.attacker.flankRight.soldierAmountSurvived > 0;
    if (e.isFactionBattleLog) {
      a = H.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO);
      r = H.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO);
    } else {
      a = this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO.crest;
      r = this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO.crest;
    }
    this.dialogDisp.mc_yard.mc_bg.gotoAndStop(3);
    this.dialogDisp.mc_flank2.mc_bg.gotoAndStop(2);
    this.fillFlankAttacker(this.dialogDisp.mc_flank1, i.attacker.flankLeft, l, a, _.ClientConstCastle.FLANK_LEFT);
    this.fillFlankAttacker(this.dialogDisp.mc_flank2, i.attacker.flankMiddle, c, a, _.ClientConstCastle.FLANK_MIDDLE);
    this.fillFlankAttacker(this.dialogDisp.mc_flank3, i.attacker.flankRight, d, a, _.ClientConstCastle.FLANK_RIGHT);
    this.fillYardAttacker(n, t, a);
    this.dialogDisp.mc_flank1.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_flank2.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_flank3.mc_crests.gotoAndStop(2);
    this.dialogDisp.mc_bonus.visible = (l || c || d) && t == -1;
    if (this.dialogDisp.mc_bonus.visible) {
      var p = u.CombatConst.getFlankBonus(l, c, d);
      if ((p = C.int(-(1 - p) * 100)) >= 0) {
        this.i_bonus_txt_value.textContentVO.textId = s.GenericTextIds.VALUE_PERCENTAGE_ADD;
        this.i_bonus_txt_value.textContentVO.textReplacements = [p];
      } else {
        this.i_bonus_txt_value.textContentVO.textId = s.GenericTextIds.VALUE_PERCENTAGE;
        this.i_bonus_txt_value.textContentVO.textReplacements = [p];
      }
    }
    if (e.hasDefenderInfos) {
      this.fillFlankDefender(this.dialogDisp.mc_flank1, i.defender.flankLeft, l, r);
      this.fillFlankDefender(this.dialogDisp.mc_flank2, i.defender.flankMiddle, c, r);
      this.fillFlankDefender(this.dialogDisp.mc_flank3, i.defender.flankRight, d, r);
      this.fillYardDefender(o, t, r);
    } else {
      H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank1.mc_crests.mc_crest2, r, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank2.mc_crests.mc_crest2, r, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_flank3.mc_crests.mc_crest2, r, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, r, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
    }
    this.setLords();
    this.setSupportTools();
    this.setGenerals();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillReinforcementWave = function (e, t) {
    var i;
    var n;
    var o = t == _.ClientConstCastle.FLANK_REINFORCEMENT ? this.dialogDisp.mc_finalWave : this.dialogDisp.mc_finalWaveSummary;
    var a = e.reinforcementWaveInfo;
    var s = e.attackerGotThroughWall;
    if (e.isFactionBattleLog) {
      i = H.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO);
      n = H.CrestHelper.getPlayerOrFactionCrest(this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO);
    } else {
      i = this.dialogProperties.logVO.attackerBattleInfo.ownerInfoVO.crest;
      n = this.dialogProperties.logVO.defenderBattleInfo.ownerInfoVO.crest;
    }
    this.dialogDisp.mc_yard.mc_bg.gotoAndStop(3);
    this.fillFlankReinforcement(o, a, s, i, t);
    if (t == _.ClientConstCastle.FLANK_REINFORCEMENT) {
      this.fillYardAttacker(e.attackerTroopcountInKeep, e.mediumBattleWaves.length, i);
      this.dialogDisp.mc_bonus.visible = false;
      if (e.hasDefenderInfos) {
        this.fillYardDefender(0, e.mediumBattleWaves.length, n);
      } else {
        H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, n, CastleBattleLogDetailAdvancedDialog.CREST_SIZE);
      }
    }
    this.setLords();
    this.setSupportTools();
    this.setGenerals();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setLords = function () {
    var e = C.int(this.dialogProperties.logVO.attackerBattleInfo.highestFameTitleBonus);
    var t = e > 0;
    var i = C.int(this.dialogProperties.logVO.attackerBattleInfo.kingstowerBonus);
    var n = i > 0;
    var o = this.dialogProperties.logVO.attackerBattleInfo.playerID < 0 || this.dialogProperties.logVO.defenderBattleInfo.playerID < 0;
    if (!n && !t || o) {
      this.dialogDisp.mc_general.gotoAndStop(1);
    } else {
      this.dialogDisp.mc_general.gotoAndStop(2);
      this.dialogDisp.mc_general.mc_attackBoost.mouseChildren = false;
    }
    if (!n || t || o) {
      if (n || !t || o) {
        if (n && t && !o) {
          this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(3);
          this.dialogDisp.mc_general.mc_attackBoost.toolTipText = p.Localize.text(O.SpecialServerHelper.checkTextIDForSkinText("fameTitleAndKingstower_battlelog_tooltip"), [e + i]);
        }
      } else {
        this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(2);
        this.dialogDisp.mc_general.mc_attackBoost.toolTipText = p.Localize.text("fameTitle_battlelog_tooltip", [e]);
      }
    } else {
      this.dialogDisp.mc_general.mc_attackBoost.gotoAndStop(1);
      this.dialogDisp.mc_general.mc_attackBoost.toolTipText = p.Localize.text(O.SpecialServerHelper.checkTextIDForSkinText("kingstower_battlelog_tooltip"), [i]);
    }
    if (this.commanderToolipTrigger) {
      this.commanderToolipTrigger.hide();
    }
    var a = "";
    var s = "";
    var l = this.dialogDisp.mc_general.getChildByName("mc_icon");
    r.MovieClipHelper.clearMovieClip(l);
    this.commanderToolipTrigger = new U.LordEffectTooltipTrigger(l);
    this.commanderToolipTrigger.show();
    if (this.dialogProperties.logVO.commanderVO) {
      j.EquipmentIconHelper.addLordIcon(this.dialogProperties.logVO.commanderVO, l, 30);
      this.commanderToolipTrigger.setProperties(this.dialogProperties.logVO.commanderVO, null, this.dialogProperties.logVO.mapobjectVO, k.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.defenderBattleInfo.playerID, false));
      l.mouseChildren = false;
      a = G.CastleGemEffectTextComposer.getGemBonusText(this.logVO.attackerTriggeredGems, k.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.defenderBattleInfo.playerID, false));
      this.dialogDisp.gem_source.toolTipText = a;
      this.dialogDisp.gem_source.visible = a.length > 0;
      s = A.CastleLegendEffectTextComposer.getLegendBonusText(this.logVO.attackerLegendSkillIds);
      this.dialogDisp.legend_source.toolTipText = s;
      this.dialogDisp.legend_source.visible = s.length > 0;
      this.dialogDisp.legend_source.mouseChildren = false;
    }
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_baron);
    if (this.dialogProperties.logVO.baronVO) {
      var c = this.dialogProperties.logVO.baronVO;
      j.EquipmentIconHelper.addLordIcon(c, this.dialogDisp.mc_baron, 30);
      this.dialogDisp.mc_baron.mouseChildren = false;
      this.baronToolipTrigger.setProperties(c, this.dialogProperties.logVO.mapobjectVO, this.dialogProperties.logVO.mapobjectVO, k.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.attackerBattleInfo.playerID, false));
      a = G.CastleGemEffectTextComposer.getGemBonusText(this.logVO.defenderTriggeredGems, k.LordEffectHelper.getFilterStrategyAttackOrDefence(this.logVO.attackerBattleInfo.playerID, false));
      this.dialogDisp.gem_target.toolTipText = a;
      this.dialogDisp.gem_target.visible = a.length > 0;
      s = A.CastleLegendEffectTextComposer.getLegendBonusText(this.logVO.defenderLegendSkillIds);
      this.dialogDisp.legend_target.toolTipText = s;
      this.dialogDisp.legend_target.visible = s.length > 0;
      this.dialogDisp.legend_target.mouseChildren = false;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setGenerals = function () {
    this.dialogDisp.mc_general_source.visible = false;
    this.dialogDisp.mc_general_target.visible = false;
    this.dialogDisp.mc_general_abilities_source.visible = false;
    this.dialogDisp.mc_general_abilities_target.visible = false;
    if (this.logVO.commanderVO && this.logVO.commanderVO.assignedGeneralVO) {
      this.showGeneral(this.dialogDisp.mc_general_source, this.dialogDisp.mc_general_abilities_source, this.logVO.commanderVO.assignedGeneralVO, true, this.logVO.attackerBattleInfo.playerID == E.CastleModel.userData.playerID);
    }
    if (this.logVO.baronVO && this.logVO.baronVO.assignedGeneralVO) {
      this.showGeneral(this.dialogDisp.mc_general_target, this.dialogDisp.mc_general_abilities_target, this.logVO.baronVO.assignedGeneralVO, false, this.logVO.defenderBattleInfo.playerID == E.CastleModel.userData.playerID);
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.showGeneral = function (e, t, i, n, o) {
    r.MovieClipHelper.clearMovieClip(e);
    new R.GeneralSelectionItem(i, e, false, false, false, false, null, true, o);
    var a = "";
    if (i && i.isNPCGeneral) {
      a = i.nameTextShort;
    } else {
      a = p.Localize.text("dialog_attack_rework2022_generals_passiveEffectsList_header") + "\n";
      a += i.getPassiveEffectsText();
    }
    e.toolTipText = a;
    e.mouseChildren = false;
    e.visible = true;
    t.visible = true;
    var s = n ? this.logVO.attackerAbilities : this.logVO.defenderAbilities;
    var l = s.length > 0 ? s.map(function (e) {
      return e.abilityXmlVO;
    }) : [];
    for (var c = 0; c < 5; c++) {
      var u = t["mc_ability" + c];
      u.scaleX = u.scaleY = 1;
      r.MovieClipHelper.clearMovieClip(u);
      if ((!!n || !(i.defenseSlots.length <= c)) && (!n || !(i.attackSlots.length <= c))) {
        if (l[c]) {
          u.addChild(V.GeneralsHelper.getGeneralAbilityClip(l[c].abilityGroupID, 30, l[c].abilityID, n));
        } else {
          u.addChild(V.GeneralsHelper.getGeneralAbilityClip(-1, 30, -1, n));
        }
      }
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankAttacker = function (e, t, i, n, o) {
    var a = this.textFieldManager.registerTextField(e.btn_left2.txt_label, new h.LocalizedNumberVO(t.soldierAmountLost));
    if (!i) {
      a.color = m.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.setFlankArrow(o, i);
    H.CrestHelper.setCrestGraphics(e.mc_crests.mc_crest1, n, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    this.textFieldManager.registerTextField(e.txt_left.txt_label, new h.LocalizedNumberVO(t.soldierAmount));
    this.textFieldManager.registerTextField(e.btn_left1.txt_label, new h.LocalizedNumberVO(t.toolsAmountUsed));
    e.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankDefender = function (e, t, i, n) {
    var o = this.textFieldManager.registerTextField(e.btn_right2.txt_label, new h.LocalizedNumberVO(t.soldierAmountLost));
    if (i) {
      o.color = m.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    H.CrestHelper.setCrestGraphics(e.mc_crests.mc_crest2, n, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    this.textFieldManager.registerTextField(e.txt_right.txt_label, new h.LocalizedNumberVO(t.soldierAmount));
    this.textFieldManager.registerTextField(e.btn_right1.txt_label, new h.LocalizedNumberVO(t.toolsAmountUsed));
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillYardAttacker = function (e, t, i) {
    this.i_yard_left_txt_label.textContentVO = new h.LocalizedNumberVO(e);
    H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest1, i, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (t >= 0) {
      this.i_yard_left1_txt_label.textContentVO = new d.TextVO("-");
      this.dialogDisp.mc_yard.btn_left1.visible = false;
    } else {
      this.i_yard_left1_txt_label.textContentVO = new h.LocalizedNumberVO(this.logVO.attackerTroopLostInKeep);
      this.dialogDisp.mc_yard.btn_left1.visible = true;
    }
    if (this.logVO.attackerTroopcountInKeep == -this.logVO.attackerTroopLostInKeep || this.logVO.attackerTroopcountInKeep == 0) {
      this.i_yard_left1_txt_label.color = m.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.dialogDisp.mc_yard.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillYardDefender = function (e, t, i) {
    if (t >= 0 && t != this.dialogProperties.logVO.reinforcementWaveIndex) {
      this.i_yard_right_txt_label.textContentVO = new h.LocalizedNumberVO(e);
    } else {
      this.i_yard_right_txt_label.textContentVO = new h.LocalizedNumberVO(this.logVO.defenderTroopcountInKeep);
    }
    H.CrestHelper.setCrestGraphics(this.dialogDisp.mc_yard.mc_crests.mc_crest2, i, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (t >= 0) {
      this.i_yard_right1_txt_label.textContentVO = new d.TextVO("-");
      this.dialogDisp.mc_yard.btn_right1.visible = false;
    } else {
      this.i_yard_right1_txt_label.textContentVO = new h.LocalizedNumberVO(this.logVO.defenderTroopLostInKeep);
      if (this.logVO.defenderTroopcountInKeep == -this.logVO.defenderTroopLostInKeep && this.logVO.attackerTroopcountInKeep != 0) {
        this.i_yard_right1_txt_label.color = m.ClientConstColor.FONT_INSUFFICIENT_COLOR;
      }
      this.dialogDisp.mc_yard.btn_right1.visible = true;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillFlankReinforcement = function (e, t, i, n, o) {
    var a = this.textFieldManager.registerTextField(e.btn_left2.txt_label, new h.LocalizedNumberVO(t.soldierAmountLost));
    if (!i) {
      a.color = m.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.setFlankArrow(o, this.logVO.mediumSummaryWave.attacker.soldierAmountSurvived > 0);
    H.CrestHelper.setCrestGraphics(e.mc_crest1, n, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    if (e.mc_crest2) {
      H.CrestHelper.setCrestGraphics(e.mc_crest2, n, CastleBattleLogDetailAdvancedDialog.CREST_SIZE, true);
    }
    this.textFieldManager.registerTextField(e.txt_left.txt_label, new h.LocalizedNumberVO(t.soldierAmount));
    e.visible = true;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setFlankArrow = function (e, t) {
    var i = 2;
    if (!t) {
      i = 1;
    }
    switch (e) {
      case _.ClientConstCastle.FLANK_LEFT:
        this.dialogDisp.mc_arrowLeft.gotoAndStop(i);
        this.dialogDisp.mc_arrowLeft.visible = true;
        break;
      case _.ClientConstCastle.FLANK_MIDDLE:
        this.dialogDisp.mc_arrowFrontal.gotoAndStop(i);
        this.dialogDisp.mc_arrowFrontal.visible = true;
        break;
      case _.ClientConstCastle.FLANK_RIGHT:
        this.dialogDisp.mc_arrowRight.gotoAndStop(i);
        this.dialogDisp.mc_arrowRight.visible = true;
        break;
      case _.ClientConstCastle.FLANK_REINFORCEMENT:
        this.dialogDisp.mc_finalWave.mc_arrowFinal.gotoAndStop(i);
        this.dialogDisp.mc_finalWave.mc_arrowFinal.visible = true;
        break;
      case _.ClientConstCastle.FLANK_REINFORCEMENT_SUMMARY:
        this.dialogDisp.mc_finalWaveSummary.mc_arrowFinal.gotoAndStop(i);
        this.dialogDisp.mc_finalWaveSummary.mc_arrowFinal.visible = true;
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.setSupportTools = function () {
    this.updateSupportToolIcon(this.dialogDisp.support_source, this.logVO.supportToolsAttacker, "dialog_battleLogDetail_attackSupportTools_tooltip_header");
    this.updateSupportToolIcon(this.dialogDisp.support_target, this.logVO.supportToolsDefender, "dialog_battleLogDetail_defenseSupportTools_tooltip_header", true);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.updateSupportToolIcon = function (e, t, i, n = false) {
    e.visible = false;
    if (t.length > 0) {
      t.forEach(function (t) {
        e.visible = e.visible || t.lost != 0 || n;
      });
    }
    if (e.visible) {
      e.toolTipText = P.SupportToolTooltipHelper.getToolTipByLogUnitVOs(t, p.Localize.text(i));
    } else if (this.logVO.defenderUsedSupportTools && n) {
      e.visible = true;
      e.toolTipText = "dialog_battleLog_attackDefeated_noDefenseInfoAvailable_tt";
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetDialog = function () {
    this.resetFlankComponent(this.dialogDisp.mc_flank1, 0);
    this.resetFlankComponent(this.dialogDisp.mc_flank2, 1);
    this.resetFlankComponent(this.dialogDisp.mc_flank3, 0);
    this.resetFlankComponent(this.dialogDisp.mc_yard, 2);
    this.resetFlankComponent(this.dialogDisp.mc_finalWave, 3);
    this.resetFlankComponent(this.dialogDisp.mc_finalWaveSummary, 3);
    this.resetLegendSkills();
    this.resetGems();
    this.dialogDisp.mc_arrowLeft.visible = false;
    this.dialogDisp.mc_arrowRight.visible = false;
    this.dialogDisp.mc_arrowFrontal.visible = false;
    this.dialogDisp.mc_bonus.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetLegendSkills = function () {
    this.dialogDisp.legend_source.visible = false;
    this.dialogDisp.legend_target.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetGems = function () {
    this.dialogDisp.gem_source.visible = false;
    this.dialogDisp.gem_target.visible = false;
  };
  CastleBattleLogDetailAdvancedDialog.prototype.resetFlankComponent = function (e, t) {
    e.txt_left.mouseChildren = false;
    e.visible = false;
    this.textFieldManager.registerTextField(e.txt_left.txt_label || e.txt_left, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
    this.textFieldManager.registerTextField(e.btn_left2.txt_label, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
    if (t != 3) {
      e.txt_right.mouseChildren = false;
      this.textFieldManager.registerTextField(e.btn_left1.txt_label, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(e.txt_right.txt_label, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(e.btn_right1.txt_label, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
      this.textFieldManager.registerTextField(e.btn_right2.txt_label, new d.TextVO("???")).color = m.ClientConstColor.FONT_DEFAULT_COLOR;
    }
    switch (t) {
      case 0:
        this.textFieldManager.registerTextField(e.txt_flanke, new g.LocalizedTextVO("dialog_battleLogDetail_flank")).autoFitToBounds = true;
        e.txt_left.toolTipText = "dialog_battleLogDetail_attackerCount";
        e.txt_right.toolTipText = "dialog_battleLogDetail_defenderCount";
        e.btn_left1.toolTipText = "dialog_battleLogDetail_toolCount";
        e.btn_right1.toolTipText = "dialog_battleLogDetail_toolCount";
        e.btn_left2.toolTipText = "dialog_battleLogDetail_attackerLost";
        e.btn_right2.toolTipText = "dialog_battleLogDetail_defenderLost";
        break;
      case 1:
        this.textFieldManager.registerTextField(e.txt_flanke, new g.LocalizedTextVO("dialog_battleLogDetail_frontal")).autoFitToBounds = true;
        e.txt_left.toolTipText = "dialog_battleLogDetail_attackerCount";
        e.txt_right.toolTipText = "dialog_battleLogDetail_defenderCount";
        e.btn_left1.toolTipText = "dialog_battleLogDetail_toolCount_front";
        e.btn_right1.toolTipText = "dialog_battleLogDetail_toolCount_front";
        e.btn_left2.toolTipText = "dialog_battleLogDetail_attackerLost";
        e.btn_right2.toolTipText = "dialog_battleLogDetail_defenderLost";
        break;
      case 2:
        this.textFieldManager.registerTextField(e.txt_flanke, new g.LocalizedTextVO("dialog_battleLogDetail_courtyard")).autoFitToBounds = true;
        e.txt_left.toolTipText = "dialog_battleLogDetail_yardAttacker";
        e.txt_right.toolTipText = "dialog_battleLogDetail_yardDefender";
        e.btn_left1.toolTipText = "dialog_battleLogDetail_yardAttackersLost";
        e.btn_right1.toolTipText = "dialog_battleLogDetail_yardDefendersLost";
        break;
      case 3:
        this.textFieldManager.registerTextField(e.txt_flanke, new g.LocalizedTextVO("dialog_battleLogDetail_finalWave")).autoFitToBounds = true;
        e.txt_left.toolTipText = "dialog_battleLogDetail_yardAttacker";
        e.btn_left2.toolTipText = "dialog_battleLogDetail_yardAttackersLost";
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (L.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.mc_flank1.btn_left1:
        case this.dialogDisp.mc_flank1.btn_right1:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.LEFT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank1.btn_left2:
        case this.dialogDisp.mc_flank1.btn_right2:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.LEFT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_flank2.btn_left1:
        case this.dialogDisp.mc_flank2.btn_right1:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank2.btn_left2:
        case this.dialogDisp.mc_flank2.btn_right2:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_flank3.btn_left1:
        case this.dialogDisp.mc_flank3.btn_right1:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS));
          break;
        case this.dialogDisp.mc_flank3.btn_left2:
        case this.dialogDisp.mc_flank3.btn_right2:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_finalWave.btn_left2:
        case this.dialogDisp.mc_finalWaveSummary.btn_left2:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this.dialogProperties.logVO.reinforcementWaveIndex, CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK, CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS));
          break;
        case this.dialogDisp.mc_yard.btn_left1:
        case this.dialogDisp.mc_yard.btn_right1:
          if (this._currentWave == -1) {
            N.CastleDialogHandler.getInstance().registerDefaultDialogs(K.CastleBattleLogPopUpDialog, new w.CastleBattleLogPopUpDialogProperties(this.dialogProperties.logVO, this._currentWave, CastleBattleLogDetailAdvancedDialog.COURTYARD));
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          N.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_battleLogDetail"));
          break;
        case this.dialogDisp.btn_forwarding:
          N.CastleDialogHandler.getInstance().registerDefaultDialogs(W.CastleForwardMessageDialog, new x.CastleForwardMessageDialogProperties(this.dialogProperties.messageId, c.MessageConst.MESSAGE_TYPE_BATTLE_LOG));
      }
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.onComboboxChange = function (e = null) {
    this._currentWave = this._waveSelector.getSelectedItem().data;
    this.displayLog();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.fillWaveItem = function (e) {
    e.disp.basicButton = null;
    e.disp.mouseChildren = true;
    L.ButtonHelper.initButton(e.getItemMc(), 1, D.ClickFeedbackButton);
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new d.TextVO(this.getWaveName(e.data, false)), new o.InternalGGSTextFieldConfigVO(true));
    var t = this.textFieldManager.registerTextField(e.getItemMc().mc_default.txt_waveNumber, new d.TextVO(" "), new o.InternalGGSTextFieldConfigVO(true));
    var i = this.textFieldManager.registerTextField(e.getItemMc().mc_hover.txt_waveNumber, new d.TextVO(" "), new o.InternalGGSTextFieldConfigVO(true));
    switch (e.data) {
      case CastleBattleLogDetailAdvancedDialog.COURTYARD:
        e.getItemMc().mc_default.icon.visible = false;
        e.getItemMc().mc_hover.icon.visible = false;
        break;
      case this.dialogProperties.logVO.reinforcementWaveIndex:
        e.getItemMc().mc_default.icon.visible = true;
        e.getItemMc().mc_hover.icon.visible = true;
        e.getItemMc().mc_default.icon.gotoAndStop(8);
        e.getItemMc().mc_hover.icon.gotoAndStop(8);
        break;
      default:
        e.getItemMc().mc_default.icon.visible = false;
        e.getItemMc().mc_hover.icon.visible = false;
        t.text = "" + (e.data + 1);
        i.text = "" + (e.data + 1);
    }
    e.getItemMc().gotoAndStop(1);
    L.ButtonHelper.initButton(e.getItemMc(), 1, D.ClickFeedbackButton);
  };
  CastleBattleLogDetailAdvancedDialog.prototype.getWaveName = function (e, t) {
    if (e == this.dialogProperties.logVO.reinforcementWaveIndex) {
      return p.Localize.text("dialog_battleLogDetail_finalWave");
    } else if (e == CastleBattleLogDetailAdvancedDialog.COURTYARD) {
      return p.Localize.text("dialog_battleLogDetail_summary");
    } else if (t) {
      return p.Localize.text(s.GenericTextIds.VALUE_ASSIGN_COLON, [p.Localize.text("dialog_battleLogDetail_wave"), (e + 1 < 10 ? "0" : "") + (e + 1)]);
    } else {
      return p.Localize.text("dialog_battleLogDetail_wave");
    }
  };
  CastleBattleLogDetailAdvancedDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.baronToolipTrigger.show();
  };
  CastleBattleLogDetailAdvancedDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    if (this.commanderToolipTrigger) {
      this.commanderToolipTrigger.hide();
    }
    if (this.baronToolipTrigger) {
      this.baronToolipTrigger.hide();
    }
  };
  Object.defineProperty(CastleBattleLogDetailAdvancedDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleBattleLogDetailAdvancedDialog.NAME = "CastleBattleLogDetailAdvanced_Generals2";
  CastleBattleLogDetailAdvancedDialog.LEFT_FLANK = 0;
  CastleBattleLogDetailAdvancedDialog.FRONTAL_FLANK = 1;
  CastleBattleLogDetailAdvancedDialog.RIGHT_FLANK = 2;
  CastleBattleLogDetailAdvancedDialog.COURTYARD = -1;
  CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_UNITS = 0;
  CastleBattleLogDetailAdvancedDialog.UNIT_TYPE_TOOLS = 1;
  CastleBattleLogDetailAdvancedDialog.CREST_SIZE = [[0, 0], [22, 22], [12, 18], [18, 10], [8, 8]];
  return CastleBattleLogDetailAdvancedDialog;
}(M.CastleExternalDialog);
exports.CastleBattleLogDetailAdvancedDialog = F;
a.classImplementsInterfaces(F, "ICollectableRendererList");
var N = require("./9.js");
var k = require("./133.js");
var U = require("./298.js");
var G = require("./5426.js");
var H = require("./61.js");
var j = require("./73.js");
var W = require("./1945.js");
var Y = require("./1955.js");
var K = require("./5427.js");