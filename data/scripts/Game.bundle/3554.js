Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./188.js");
var h = require("./662.js");
var g = require("./241.js");
var C = require("./159.js");
var _ = require("./21.js");
var m = require("./192.js");
var f = require("./210.js");
var O = require("./26.js");
var E = require("./410.js");
var y = require("./67.js");
var b = require("./19.js");
var D = require("./4.js");
var I = require("./8.js");
var T = require("./34.js");
var v = createjs.Point;
var S = function (e) {
  function FactionEventOverviewSublayer(t) {
    var i = e.call(this, t) || this;
    i.initBasicButtons([t.mc_bottomBar.mc_sendTroops.btn_sendTroops, t.mc_bottomBar.btn_enter, t.mc_bottomBar.mc_skipTroops.btn_fullSkip, t.mc_bottomBar.mc_skipTroops.btn_minuteSkip]);
    i.attackTowersBox = new N.FactionAttackPveBox(t.mc_objective0);
    i.attackCampsBox = new k.FactionAttackPvpBox(t.mc_objective1);
    var n = D.CastleModel.kingdomData.getKingdomVOByID(s.FactionConst.KINGDOM_ID);
    t.mc_bottomBar.mc_skipTroops.mc_icon.mouseChildren = false;
    t.mc_bottomBar.mc_skipTroops.btn_minuteSkip.toolTipText = "timeSkipButton_tooltip";
    t.mc_bottomBar.mc_skipTroops.btn_fullSkip.toolTipText = {
      t: "dialog_season_skipTransfer",
      p: [D.CastleModel.costsData.getFinalCostsStringC2(n.skipUnitTravelC2Cost)]
    };
    i.i_troops_txt_remainingTime = i.textFieldManager.registerTextField(t.mc_bottomBar.mc_skipTroops.txt_remainingTime, new u.TextVO(""));
    i.textFieldManager.registerTextField(t.mc_bottomBar.mc_lmsWarning.txt_description, new c.LocalizedTextVO("dialog_factionOverview_lastManStanding_copy"));
    i.textFieldManager.registerTextField(t.txt_header, new c.LocalizedTextVO("dialog_factionOverview_header"));
    i.textFieldManager.registerTextField(t.mc_bottomBar.mc_sendTroops.txt_sendTroops, new c.LocalizedTextVO("dialog_season_sendTroops"));
    i.textFieldManager.registerTextField(t.mc_bottomBar.txt_enter, new c.LocalizedTextVO("dialog_factionOverview_enter"));
    i.subLayerDisp.mc_nextReward.mc_points.toolTipText = "factionHighscore_points";
    i.subLayerDisp.mc_nextTitle.mc_points.toolTipText = "factionHighscore_points";
    i.subLayerDisp.mc_nextTitle.mc_points.mouseChildren = false;
    i._seasonLeague = new F.SeasonLeagueEventElementComponent(i.subLayerDisp.mc_seasonLeague, r.EventConst.EVENTTYPE_FACTION);
    return i;
  }
  n.__extends(FactionEventOverviewSublayer, e);
  FactionEventOverviewSublayer.prototype.updateShowLMSWarning = function () {
    var e = !D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isActiveInEvent;
    I.ButtonHelper.enableButton(this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops, !e);
    this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops.toolTipText = e ? "dialog_factionOverview_sendTroops_lms_tooltip " : "dialog_factionOverview_sendTroops_tooltip";
    this.subLayerDisp.mc_bottomBar.mc_lmsWarning.visible = e;
  };
  FactionEventOverviewSublayer.prototype.updateEnterButton = function () {
    var e;
    var t = D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION);
    var i = M.CastleLayoutManager.getInstance().isInState(M.CastleLayoutManager.STATE_KINGDOMMAP);
    var n = D.CastleModel.kingdomData.activeKingdomID != s.FactionConst.KINGDOM_ID || i;
    var o = this.subLayerDisp.mc_bottomBar.btn_enter;
    e = n ? t.isActiveInEvent ? "dialog_factionOverview_enter_tooltip" : "dialog_factionOverview_enter_lms_tooltip" : "dialog_factionOverview_alreadyEntered";
    I.ButtonHelper.enableButton(o, n);
    this.subLayerDisp.mc_bottomBar.btn_enter.toolTipText = e;
  };
  FactionEventOverviewSublayer.prototype.updateSendTroopsArea = function () {
    var e = D.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(s.FactionConst.KINGDOM_ID);
    var t = e != null && e.remainingTimeInSeconds > 0;
    var i = D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isSpectator;
    this.subLayerDisp.mc_bottomBar.mc_sendTroops.visible = !t && !i;
    this.subLayerDisp.mc_bottomBar.mc_skipTroops.visible = t && !i;
    if (t && !i) {
      this.subLayerDisp.mc_bottomBar.mc_skipTroops.mc_bar.scaleX = e.progressPercent;
      this.subLayerDisp.mc_bottomBar.mc_skipTroops.mc_icon.toolTipText = e.toolTipText;
      this.i_troops_txt_remainingTime.textContentVO.stringValue = U.CastleTimeStringHelper.getEventTimeString(e.remainingTimeInSeconds);
    }
  };
  FactionEventOverviewSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.updateShowLMSWarning();
    this.updateEnterButton();
    this.updateSendTroopsArea();
    this.attackTowersBox.show();
    this.attackCampsBox.show();
    this._seasonLeague.onShow();
    this.setNextTitle();
    D.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    D.CastleModel.kingdomData.addEventListener(m.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataArrived));
    D.CastleModel.specialEventData.addEventListener(O.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpectatorStatusChanged));
    D.CastleModel.timerData.addEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.controller.addEventListener(f.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onGetPoints));
    D.CastleModel.titleData.addEventListener(E.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdate));
    D.CastleModel.smartfoxClient.sendCommandVO(new g.C2SPointEventGetPointsVO(r.EventConst.EVENTTYPE_FACTION));
    this.updateSeasonLeagueElement();
  };
  FactionEventOverviewSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.attackTowersBox.hide();
    this.attackCampsBox.hide();
    this._seasonLeague.onHide();
    D.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.FACTION_EVENT_LAST_MAN_STANDING_UPDATE, this.bindFunction(this.onLMSUpdate));
    D.CastleModel.timerData.removeEventListener(_.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    D.CastleModel.specialEventData.removeEventListener(O.CastleSpecialEventEvent.FACTION_EVENT_SPECTATOR_STATUS_CHANGE, this.bindFunction(this.onSpectatorStatusChanged));
    D.CastleModel.kingdomData.removeEventListener(m.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataArrived));
    this.controller.removeEventListener(f.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onGetPoints));
    D.CastleModel.titleData.addEventListener(E.CastleTitleDataEvent.TITLE_DATA_UPDATED, this.bindFunction(this.onTitleDataUpdate));
  };
  FactionEventOverviewSublayer.prototype.updateSeasonLeagueElement = function () {
    var e = D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION);
    this.subLayerDisp.mc_seasonLeagueInactive.visible = !e.seasonLeague.isModeEnabled;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_seasonLeagueInactive.txt_title, new c.LocalizedTextVO("dialog_faction_seasonLeague_header")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_seasonLeagueInactive.txt_desc, new c.LocalizedTextVO(D.CastleModel.seasonLeagueData.isSeasonLeagueActive() ? "dialog_faction_seasonLeague_factionNotContributing_copy" : "dialog_faction_seasonLeague_leagueInactive_copyn")).autoFitToBounds = true;
  };
  FactionEventOverviewSublayer.prototype.onKingdomDataArrived = function (e) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onTimer = function (e) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onSpectatorStatusChanged = function (e) {
    this.updateSendTroopsArea();
  };
  FactionEventOverviewSublayer.prototype.onLMSUpdate = function (e) {
    this.updateShowLMSWarning();
    this.updateEnterButton();
  };
  FactionEventOverviewSublayer.prototype.onClick = function (e) {
    if (I.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.mc_bottomBar.btn_enter:
          this.onClickEnter();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_sendTroops.btn_sendTroops:
          this.onClickSendTroops();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_skipTroops.btn_fullSkip:
          this.onClickRubySkipTroops();
          break;
        case this.subLayerDisp.mc_bottomBar.mc_skipTroops.btn_minuteSkip:
          this.onClickMinuteSkipTroops();
      }
    }
  };
  FactionEventOverviewSublayer.prototype.onClickMinuteSkipTroops = function () {
    T.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(w.CastleMinuteSkipDialog, new B.KingdomUnitsTravelMinuteSkipProperties(s.FactionConst.KINGDOM_ID));
  };
  FactionEventOverviewSublayer.prototype.onClickRubySkipTroops = function () {
    if (D.CastleModel.kingdomData.getIncomingUnitsTransferByKingdomID(s.FactionConst.KINGDOM_ID).remainingTimeInSeconds >= 1) {
      D.CastleModel.smartfoxClient.sendCommandVO(new h.C2SKingdomSkipTransferVO(s.FactionConst.KINGDOM_ID, 1));
    }
  };
  FactionEventOverviewSublayer.prototype.onClickSendTroops = function () {
    var e = D.CastleModel.kingdomData.getKingdomVOByID(s.FactionConst.KINGDOM_ID);
    T.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(V.CastleTransferTroopsDialog, new x.CastleTransferTroopsToKingdomProperties(e));
  };
  FactionEventOverviewSublayer.prototype.onClickEnter = function () {
    if (!A.FlashBlockHelper.checkFlashBlock(s.FactionConst.KINGDOM_ID)) {
      var e = D.CastleModel.userData.castleList.getMainFactionCastle();
      if (D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).isSpectator) {
        if (e) {
          o.CommandController.instance.executeCommand(L.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [s.FactionConst.KINGDOM_ID, e.absAreaPosX, e.absAreaPosY]);
        } else {
          o.CommandController.instance.executeCommand(L.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [s.FactionConst.KINGDOM_ID, 1300, 60]);
        }
      } else if (e) {
        o.CommandController.instance.executeCommand(L.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, e);
      } else {
        if (D.CastleModel.worldmapData) {
          D.CastleModel.worldmapData.allowGAARequests = false;
        }
        D.CastleModel.smartfoxClient.sendCommandVO(new C.C2SJoinCastleVO(0, s.FactionConst.KINGDOM_ID));
      }
    }
  };
  FactionEventOverviewSublayer.prototype.setNextReward = function () {
    var e;
    var t = false;
    var i = 0;
    this.subLayerDisp.mc_nextReward.mc_checkmark.visible = false;
    i = 0;
    for (; i < this.ownLeagueVO.pointThresholds.length; i++) {
      if (this.ownLeagueVO.ownPoints < this.ownLeagueVO.pointThresholds[i]) {
        e = this.ownLeagueVO.rewardLists[i];
        break;
      }
    }
    if (!e) {
      t = true;
      e = this.ownLeagueVO.rewardLists[this.ownLeagueVO.rewardLists.length - 1];
      this.subLayerDisp.mc_nextReward.mc_checkmark.visible = this.ownLeagueVO.ownRank == 1;
      for (var n = 0; n < this.ownLeagueVO.topX.length; n++) {
        if (this.ownLeagueVO.ownRank > this.ownLeagueVO.topX[n]) {
          e = this.ownLeagueVO.rewardLists[n + i];
          this.subLayerDisp.mc_nextReward.mc_checkmark.visible = false;
          break;
        }
      }
    }
    this.subLayerDisp.mc_nextReward.rewards1.visible = e.length == 1;
    this.subLayerDisp.mc_nextReward.rewards2.visible = e.length == 2;
    R.CollectableRenderHelper.displayMultipleItemsComplete(this, new y.CollectableRenderClipsList(this.subLayerDisp.mc_nextReward["rewards" + e.length], "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addTextfields("txt_reward"), e, new b.CollectableRenderOptions(b.CollectableRenderOptions.SET_DEFAULT, new v(58, 58)));
    if (this.ownLeagueVO.ownRank == 1 && t) {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_header, new c.LocalizedTextVO("dialog_factionOverview_nextReward_headerFinal"));
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_header, new c.LocalizedTextVO("dialog_factionOverview_nextReward_header"));
    }
    var o = t ? new l.LocalizedNumberVO(this.ownLeagueVO.ownPoints) : new c.LocalizedTextVO("dialog_factionOverview_nextReward_points", [this.ownLeagueVO.ownPoints, this.ownLeagueVO.pointThresholds[i]]);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_points, o);
  };
  FactionEventOverviewSublayer.prototype.setNextTitle = function () {
    var e;
    var t = D.CastleModel.titleData.getHighestTitleCurrentlyHeldByThisUser(p.ClientConstTitle.BRAVERY_TITLE);
    var i = d.int(D.CastleModel.titleData.getPointsInSystem(p.ClientConstTitle.BRAVERY_TITLE));
    this.subLayerDisp.mc_nextTitle.mc_checkmark.visible = false;
    if (t == P.CastleTitleData.NULL_TITLE || t.nextTitleID > -1) {
      e = t == P.CastleTitleData.NULL_TITLE ? D.CastleModel.titleData.getTitlesFromSystem(p.ClientConstTitle.BRAVERY_TITLE)[0] : D.CastleModel.titleData.getTitleByTitleID(t.nextTitleID);
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_header, new c.LocalizedTextVO("dialog_factionOverview_nextTitle_header"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_title, new c.LocalizedTextVO(e.textID));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_points, new c.LocalizedTextVO("value_proportional_value", [i, e.threshold]));
      this.subLayerDisp.mc_nextTitle.mc_toolTipArea.toolTipText = e.descriptionTextVO;
    } else {
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_header, new c.LocalizedTextVO("dialog_factionOverview_nextTitle_headerFinal"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_title, new c.LocalizedTextVO(t.textID));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextTitle.txt_points, new l.LocalizedNumberVO(i));
      this.subLayerDisp.mc_nextTitle.mc_toolTipArea.toolTipText = t.descriptionTextVO;
      this.subLayerDisp.mc_nextTitle.mc_checkmark.visible = true;
    }
  };
  Object.defineProperty(FactionEventOverviewSublayer.prototype, "ownLeagueVO", {
    get: function () {
      return D.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FACTION).getOwnLeagueEventVO();
    },
    enumerable: true,
    configurable: true
  });
  FactionEventOverviewSublayer.prototype.onGetPoints = function (e) {
    this.setNextReward();
  };
  FactionEventOverviewSublayer.prototype.onTitleDataUpdate = function (e) {
    this.setNextTitle();
  };
  return FactionEventOverviewSublayer;
}(T.CastleDialogSubLayer);
exports.FactionEventOverviewSublayer = S;
var A = require("./160.js");
var L = require("./29.js");
var P = require("./565.js");
var M = require("./17.js");
var R = require("./25.js");
var V = require("./663.js");
var x = require("./1071.js");
var w = require("./208.js");
var B = require("./1073.js");
var F = require("./655.js");
var N = require("./1715.js");
var k = require("./1717.js");
var U = require("./27.js");
a.classImplementsInterfaces(S, "ICollectableRendererList", "ISublayer");