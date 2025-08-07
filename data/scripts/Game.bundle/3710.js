Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./264.js");
var _ = require("./37.js");
var m = require("./26.js");
var f = require("./4.js");
var O = require("./42.js");
var E = require("./8.js");
var y = require("./287.js");
var b = require("./35.js");
var D = require("./823.js");
var I = require("./330.js");
var T = createjs.Point;
var v = function (e) {
  function CastleAllianceCampNomadInvasionPointsEventSublayer(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).textFieldManager.registerTextField(t.txt_khanCamp_header, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc_khanCamp")).autoFitToBounds = true;
    i.textFieldManager.registerTextField(t.txt_taunt_header, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc_rageLevelProgress"));
    i.textFieldManager.registerTextField(t.btn_rewardList.txt_label, new g.LocalizedTextVO("dialog_pointsEvent_rewardsList_header")).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.textFieldManager.registerTextField(t.txt_description, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_desc")).autoFitToBounds = true;
    var n = i.textFieldManager.registerTextField(t.mc_nextReward.txt_rewardInfo, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_forParticipantMembers_header"));
    n.autoFitToBounds = true;
    n.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    i.itxt_detailDescription = i.textFieldManager.registerTextField(t.txt_descriptionDetail, new g.LocalizedTextVO(""));
    i.itxt_khanCampLevel = i.textFieldManager.registerTextField(t.txt_khanCampLevel, new g.LocalizedTextVO(""));
    i.itxt_alliRage = i.textFieldManager.registerTextField(t.mc_alliRage.txt_alliRage, new g.LocalizedTextVO(""));
    i.itxt_rage = i.textFieldManager.registerTextField(t.mc_rage.txt_rage, new g.LocalizedTextVO(""));
    i.itxt_nextReward = i.textFieldManager.registerTextField(t.mc_nextRewardHeader.txt_nextReward, new g.LocalizedTextVO(""));
    i.itxt_rage.autoFitToBounds = true;
    i.alliRageProgress = new o.BasicProgressBar(t.mc_alliRage.progressbar);
    i.rageProgress = new o.BasicProgressBar(t.mc_rage.progressbar);
    t.mc_alliRage.toolTipText = "dialog_nomadInvasion_khanContest_khanCampProgress";
    t.mc_rageIcon.toolTipText = "rage";
    t.btn_joinAlliance.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
    t.mc_chains.toolTipText = "dialog_nomadInvasion_khanContest_belowRewardLimit_tooltip";
    t.btn_highscore.toolTipText = "dialog_nomadInvasion_allianceScore_tooltip";
    t.mc_alliRage.mouseChildren = false;
    t.mc_rage.mouseChildren = false;
    i.centeredRewardList = new L.CastleCenteredRewardRendererListComponent(i.subLayerDisp.mc_nextReward.rewards, CastleAllianceCampNomadInvasionPointsEventSublayer.ITEM_DIMENSION);
    E.ButtonHelper.initBasicButtons([t.btn_rewardList, t.btn_taunt, t.btn_showMe, t.btn_joinAlliance, t.btn_highscore]);
    return i;
  }
  n.__extends(CastleAllianceCampNomadInvasionPointsEventSublayer, e);
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.showHelp = function () {
    A.CastleDialogHandler.getInstance().showHelper("", h.Localize.text("help_nomadInvasion_khanContest"));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.checkAllianceStatus();
    this.subLayerDisp.mc_difficulty.visible = this.eventVO.isDifficultyScalingActivated;
    if (this.subLayerDisp.mc_difficulty.visible) {
      y.DifficultyScalingHelper.addDifficultyIcon(this.subLayerDisp.mc_difficulty.mc_icon, f.CastleModel.eventDifficultyScaling.getDifficultyVOByDifficultyID(this.eventVO.difficultyIDChoosen), 45, 45, this.subLayerDisp.mc_difficulty);
    }
    f.CastleModel.specialEventData.addEventListener(m.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventsRefreshed));
    this.subLayerDisp.mc_difficulty.visible = false;
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.checkAllianceStatus = function () {
    if (f.CastleModel.userData.isInAlliance) {
      this.itxt_detailDescription.textContentVO.textId = "dialog_nomadInvasion_khanContest_desc_detail";
      this.itxt_khanCampLevel.textContentVO.textId = "levelX";
      this.itxt_alliRage.textContentVO.textId = s.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.itxt_rage.textContentVO.textId = s.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.updateProgress();
      this.subLayerDisp.btn_showMe.toolTipText = "dialog_nomadInvasion_khanContest_jumpCamp";
      this.subLayerDisp.btn_joinAlliance.visible = false;
      this.subLayerDisp.mc_nextReward.visible = true;
      this.subLayerDisp.mc_nextRewardHeader.visible = true;
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_showMe, true);
    } else {
      this.itxt_detailDescription.textContentVO.textId = "dialog_nomadInvasion_khanContest_descNoAlliance_detail";
      this.itxt_khanCampLevel.textContentVO.textId = "-";
      this.itxt_alliRage.textContentVO.textId = "-";
      this.itxt_rage.textContentVO.textId = "-";
      this.itxt_rage.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this.subLayerDisp.btn_taunt.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
      this.subLayerDisp.btn_showMe.toolTipText = "dialog_nomadInvasion_khanContest_joinAlliance_tooltip";
      this.subLayerDisp.btn_joinAlliance.visible = true;
      this.subLayerDisp.mc_nextReward.visible = false;
      this.subLayerDisp.mc_nextRewardHeader.visible = false;
      this.subLayerDisp.mc_chains.visible = false;
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_showMe, false);
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_taunt, false);
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    f.CastleModel.specialEventData.removeEventListener(m.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventsRefreshed));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onClick = function (e) {
    if (E.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_taunt:
          b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(V.CastleNomadInvasionTauntDialog);
          break;
        case this.subLayerDisp.btn_rewardList:
          this.onRewardListClick();
          break;
        case this.subLayerDisp.btn_joinAlliance:
          b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(P.CastleAllianceTeaserDialog);
          break;
        case this.subLayerDisp.btn_showMe:
          var t = f.CastleModel.userData.castleList.getMainCastleByKingdomID(d.WorldClassic.KINGDOM_ID);
          a.CommandController.instance.executeCommand(S.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, [t.kingdomID, t.absAreaPosX, t.absAreaPosY]);
          this.controller.addEventListener(_.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
          break;
        case this.subLayerDisp.btn_highscore:
          b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(M.CastleAllianceNomadInvasionHighscoreDialog, new D.CastleGenericAllianceHighscoreDialogProperties(u.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE, this.eventVO.allianceBarVO.numberOfLeagues, this.eventVO.allianceBarVO.leagueID, this.eventVO.allianceBarVO.ownRank));
      }
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onGAAarrived = function (e) {
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.GAA_ARRIVED, this.bindFunction(this.onGAAarrived));
    f.CastleModel.smartfoxClient.sendCommandVO(new C.C2SFindNextMapObjectVO(p.WorldConst.AREA_TYPE_ALLIANCE_NOMAD_CAMP, d.WorldClassic.KINGDOM_ID, -1, -1, l.DungeonConst.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onRewardListClick = function () {
    b.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(R.CastleAllianceNomadInvasionRewardListDialog, new I.GenericEventInfoListProperties(c.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, R.CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP));
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.setEventVO = function (e) {
    this.eventVO = e;
  };
  Object.defineProperty(CastleAllianceCampNomadInvasionPointsEventSublayer.prototype, "scoreBarData", {
    get: function () {
      return this.eventVO.khanCampBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.onEventsRefreshed = function (e) {
    if (e.specialEventVO.eventId == c.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.checkAllianceStatus();
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.prototype.updateProgress = function () {
    if (f.CastleModel.userData.isInAlliance) {
      var e = this.eventVO.allianceCamp;
      var t = e.rageNeededForLevelUp;
      var i = e.playerRageCap;
      this.itxt_khanCampLevel.textContentVO.textReplacements = [this.eventVO.khanCampLevel];
      this.itxt_rage.textContentVO.textReplacements = [this.eventVO.playerRage, i];
      this.itxt_rage.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      if (e.isMaxLevel) {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsReceived, new g.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned")).autoFitToBounds = true;
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_nextKhanCampLevel, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_rewardCondition_maxed"));
        this.itxt_nextReward.textContentVO.textId = "dialog_nomadInvasion_khanContest_finalReward_title";
        this.itxt_alliRage.textContentVO.textId = "panel_state_levelCap";
      } else {
        this.textFieldManager.registerTextField(this.subLayerDisp.txt_rewardsReceived, new g.LocalizedTextVO("dialog_pointsEvent_scoreBar_rewards", [this.scoreBarData.rewardsReceived, this.scoreBarData.pointThresholds.length]));
        this.textFieldManager.registerTextField(this.subLayerDisp.mc_nextReward.txt_nextKhanCampLevel, new g.LocalizedTextVO("dialog_nomadInvasion_khanContest_rewardCondition", [Math.min(this.scoreBarData.ownPoints + 1, this.scoreBarData.pointThresholds[this.scoreBarData.pointThresholds.length - 1])]));
        this.itxt_nextReward.textContentVO.textId = "dialog_nomadInvasion_khanContest_nextReward_title";
        this.itxt_alliRage.textContentVO.textId = s.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
        this.itxt_alliRage.textContentVO.textReplacements = [this.eventVO.allianceRage, t];
      }
      this.centeredRewardList.showRewards(this.scoreBarData.rewardLists[Math.min(this.scoreBarData.rewardsReceived, this.scoreBarData.rewardLists.length - 1)]);
      this.subLayerDisp.mc_chains.visible = !this.eventVO.canGetKhanRewards;
      this.alliRageProgress.scaleX = Math.min(1, this.eventVO.allianceRage / t);
      this.rageProgress.scaleX = Math.min(1, this.eventVO.playerRage / i);
      var n = this.eventVO.playerRage >= i;
      if (n) {
        this.subLayerDisp.btn_taunt.toolTipText = "dialog_nomadInvasion_khanContest_attackKhanButtonTooltip";
        this.subLayerDisp.mc_rage.toolTipText = "dialog_nomadInvasion_khanContest_rageMeterTooltipFull";
      } else {
        this.subLayerDisp.btn_taunt.toolTipText = {
          t: "dialog_nomadInvasion_khanContest_attackKhanButtonGreyTooltip",
          p: [this.eventVO.playerRage, i]
        };
        this.subLayerDisp.mc_rage.toolTipText = "dialog_nomadInvasion_khanContest_rageMeterTooltip";
      }
      E.ButtonHelper.enableButton(this.subLayerDisp.btn_taunt, n);
    }
  };
  CastleAllianceCampNomadInvasionPointsEventSublayer.__initialize_static_members = function () {
    CastleAllianceCampNomadInvasionPointsEventSublayer.ITEM_DIMENSION = new T(44, 42);
  };
  return CastleAllianceCampNomadInvasionPointsEventSublayer;
}(b.CastleDialogSubLayer);
exports.CastleAllianceCampNomadInvasionPointsEventSublayer = v;
var S = require("./29.js");
var A = require("./9.js");
var L = require("./400.js");
var P = require("./388.js");
var M = require("./1767.js");
var R = require("./1093.js");
var V = require("./1768.js");
r.classImplementsInterfaces(v, "ICollectableRendererList", "ISublayer");
v.__initialize_static_members();