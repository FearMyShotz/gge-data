Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./6.js");
var f = require("./18.js");
var O = require("./4.js");
var E = require("./1667.js");
var y = require("./1668.js");
var b = require("./3435.js");
var D = require("./3436.js");
var I = require("./3438.js");
var T = require("./1669.js");
var v = require("./1670.js");
var S = require("./1672.js");
var A = require("./1673.js");
var L = require("./3439.js");
var P = require("./1065.js");
var M = require("./3441.js");
var R = require("./3442.js");
var V = require("./1674.js");
var x = require("./3443.js");
var w = require("./3444.js");
var B = require("./3445.js");
var F = require("./910.js");
var N = require("./3446.js");
var k = require("./3447.js");
var U = require("./3448.js");
var G = require("./3449.js");
var H = require("./3450.js");
var j = require("./3451.js");
var W = require("./3452.js");
var Y = require("./3454.js");
var K = require("./1675.js");
var z = require("./1676.js");
var q = require("./3455.js");
var X = require("./3456.js");
var Q = require("./3457.js");
var J = require("./1677.js");
var Z = require("./565.js");
var $ = require("./3458.js");
var ee = require("./3459.js");
var te = require("./1400.js");
var ie = function () {
  function CastlePopUpHelper() {}
  CastlePopUpHelper.displayPopUps = function (e, t = false) {
    for (var i = e.P, n = [], a = [], s = 0; s < i.length; ++s) {
      var r = i[s].VAL;
      var l = m.int(i[s].POP);
      if (l == p.PopupConst.CRAFTING_MATERIALS) {
        n.push(r);
      } else if (m.int(CastlePopUpHelper.getEventIDbyPopUpID(l)) != -1 && t) {
        a.push(i[s]);
      } else {
        CastlePopUpHelper.displayPopUp(l, r);
      }
    }
    CastlePopUpHelper.displayMaterialBagPopUp(n);
    if (a.length > 0) {
      le.CastleDialogHandler.getInstance().registerDefaultDialogs(De.MultiEventRewardsDialog, new Ie.MultiEventRewardsProperties(a), false, o.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastlePopUpHelper.displayPopUp = function (e, t) {
    ne.FarhatBuildingSpawnController.getInstance().applaudNow();
    var i = le.CastleDialogHandler.getInstance();
    switch (e) {
      case p.PopupConst.GENERIC_REWARDS_GAINED:
        i.registerDefaultDialogs(P.ModernGenericRewardDialog, new wt.ModernGenericRewardDialogProperties("dialog_combinedReward_header", "eventend_rewards_generic", O.CastleModel.rewardData.getListByIdArray(t[c.CommKeys.REWARDS]), t.rewardHubVO));
        break;
      case p.PopupConst.GACHA_EVENT_REWARD:
        i.registerDefaultDialogs(M.GenericRewardDialog, new R.GenericRewardDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.GACHA_EVENT_END_REWARD:
      case p.PopupConst.GACHA_EVENT_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(D.GachaEventEndDialog, new I.GachaEventEndDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LONGTERM_POINT_EVENT_REWARD:
        i.registerDefaultDialogs(tt.LongTermPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        O.CastleModel.equipData.parse_MSP(t);
        break;
      case p.PopupConst.LONGTERM_POINT_EVENT_FIRST:
        i.registerDefaultDialogs(tt.LongTermPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LONGTERM_POINT_EVENT_TOPX:
        i.registerDefaultDialogs(tt.LongTermPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LONGTERM_POINT_EVENT_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(tt.LongTermPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LONGTERM_POINT_EVENT_HARD_MODE:
        i.registerDefaultDialogs(et.LongTermPointEventHardModeDialog, null, false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.POINT_EVENT_REWARD:
        i.registerDefaultDialogs(rt.CastlePointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        O.CastleModel.equipData.parse_MSP(t);
        break;
      case p.PopupConst.POINT_EVENT_FIRST:
        i.registerDefaultDialogs(rt.CastlePointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.POINT_EVENT_TOPX:
        i.registerDefaultDialogs(rt.CastlePointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.POINT_EVENT_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(rt.CastlePointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_REWARD:
        i.registerDefaultDialogs(st.CastleLuckyPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        O.CastleModel.equipData.parse_MSP(t);
        break;
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_FIRST:
        i.registerDefaultDialogs(st.CastleLuckyPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_TOPX:
        i.registerDefaultDialogs(st.CastleLuckyPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(yt.CastleLuckySaleDaysPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_REWARD:
        i.registerDefaultDialogs(yt.CastleLuckySaleDaysPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        O.CastleModel.equipData.parse_MSP(t);
        break;
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_FIRST:
        i.registerDefaultDialogs(yt.CastleLuckySaleDaysPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_TOPX:
        i.registerDefaultDialogs(yt.CastleLuckySaleDaysPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(st.CastleLuckyPointEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.BEGGING_KNIGHTS_REWARD:
        i.registerDefaultDialogs(Ye.CastleBeggingKnightsRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.BEGGING_KNIGHTS_FIRST:
        i.registerDefaultDialogs(Ye.CastleBeggingKnightsRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.BEGGING_KNIGHTS_TOPX:
        i.registerDefaultDialogs(Ye.CastleBeggingKnightsRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.BEGGING_KNIGHTS_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(Ye.CastleBeggingKnightsRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER:
        i.registerDefaultDialogs(Ge.CastleAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER:
        i.registerDefaultDialogs(Ge.CastleAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER:
        i.registerDefaultDialogs(Ge.CastleAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE:
        i.registerDefaultDialogs(Ue.CastleAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE:
        i.registerDefaultDialogs(Ue.CastleAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE:
        i.registerDefaultDialogs(Ue.CastleAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(Ue.CastleAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER:
        i.registerDefaultDialogs(Ge.CastleAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED:
        i.registerDefaultDialogs(Mt.CastleGenericRewardsDialog, new Rt.CastleGenericRewardsDialogProperties("dialog_pointsEvent_rewardsList_allianceContest_qualified_header", "dialog_pointsEvent_rewardsList_allianceContest_alienInvasion_qualified_desc", -1, oe.CollectableManager.parser.s2cParamList.createList(t.RW)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SAMURAI_INVASION_ALLIANCE_REWARDS_UNLOCKED:
        i.registerDefaultDialogs(Mt.CastleGenericRewardsDialog, new Rt.CastleGenericRewardsDialogProperties("dialog_pointsEvent_rewardsList_allianceContest_qualified_header", "dialog_pointsEvent_rewardsList_allianceContest_samuraiInvasion_qualified_desc", -1, oe.CollectableManager.parser.s2cParamList.createList(t.RW)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_INVASION_ALLIANCE_REWARDS_UNLOCKED:
        i.registerDefaultDialogs(Mt.CastleGenericRewardsDialog, new Rt.CastleGenericRewardsDialogProperties("dialog_pointsEvent_rewardsList_allianceContest_qualified_header", "dialog_pointsEvent_rewardsList_allianceContest_berimondInvasion_qualified_desc", -1, oe.CollectableManager.parser.s2cParamList.createList(t.RW)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED:
        i.registerDefaultDialogs(Mt.CastleGenericRewardsDialog, new Rt.CastleGenericRewardsDialogProperties("dialog_pointsEvent_rewardsList_allianceContest_qualified_header", "dialog_pointsEvent_rewardsList_allianceContest_redAlienInvasion_qualified_desc", -1, oe.CollectableManager.parser.s2cParamList.createList(t.RW)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_ALLIANCE_REWARDS_UNLOCKED:
        i.registerDefaultDialogs(Mt.CastleGenericRewardsDialog, new Rt.CastleGenericRewardsDialogProperties("dialog_pointsEvent_rewardsList_allianceContest_qualified_header", "dialog_pointsEvent_rewardsList_allianceContest_nomadInvasion_qualified_desc", -1, oe.CollectableManager.parser.s2cParamList.createList(t.RW)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER:
        i.registerDefaultDialogs(je.CastleRedAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER:
        i.registerDefaultDialogs(je.CastleRedAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER:
        i.registerDefaultDialogs(je.CastleRedAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE:
        i.registerDefaultDialogs(He.CastleRedAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE:
        i.registerDefaultDialogs(He.CastleRedAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE:
        i.registerDefaultDialogs(He.CastleRedAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(He.CastleRedAllianceAlienInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER:
        i.registerDefaultDialogs(je.CastleRedAllianceAlienInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER:
        i.registerDefaultDialogs(nt.CastleAllianceNomadInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER:
        i.registerDefaultDialogs(nt.CastleAllianceNomadInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER:
        i.registerDefaultDialogs(nt.CastleAllianceNomadInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE:
        i.registerDefaultDialogs(it.CastleAllianceNomadInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE:
        i.registerDefaultDialogs(it.CastleAllianceNomadInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE:
        i.registerDefaultDialogs(it.CastleAllianceNomadInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(it.CastleAllianceNomadInvasionRewardDialogAlliance, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER:
        i.registerDefaultDialogs(nt.CastleAllianceNomadInvasionRewardDialogPlayer, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.COLLECTOR_REWARD_PLAYER:
        i.registerDefaultDialogs(ze.CastleCollectorEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.NOMAD_INVASION_ALLIANCE_CAMP_REWARD_POPUP:
        i.registerDefaultDialogs(ot.CastleNomadInvasionAllianceCampRewardDialog, new q.CastleNomadInvasionAllianceCampRewardDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.MORALE_BOOSTER_REWARD:
        i.registerDefaultDialogs(Re.CastleUnderworldMoraleBoosterRewardDialog, new U.CastleUnderworldMoraleBoosterRewardDialogProperties(t), true);
        break;
      case p.PopupConst.BOUNTYHUNTER:
        i.registerDefaultDialogs(Ke.CastleBountyhunterWinDialog, new H.CastleBountyhunterWinDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.RANDOMDUNGEON:
        i.registerDefaultDialogs(lt.CastleRandomDungeonWinDialog, new ct.CastleRandomDungeonWinDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ARTIFACT:
        O.CastleModel.specialEventData.parse_SAF(t);
        break;
      case p.PopupConst.QUEST_FINISH:
        var C = O.CastleModel.questData.getQuestPrototype(t.QID);
        if (!!C && !C.isStarterQuest && !C.hidden) {
          i.registerDefaultDialogs(Pe.CastleQuestCompletedDialog, new Me.CastleQuestCompletedDialogProperties(C, t), true, o.BasicDialogHandler.PRIORITY_HIGH);
        }
        O.CastleModel.questData.finishQuest(t.QID);
        break;
      case p.PopupConst.ACHIEVEMENT_FINISH:
        if (O.CastleModel.castleAchievementData.getAchievementByID(t.AID).achievementSerieVO.achievementSeriesID == re.CastleAchievementData.MAIN_ACHIEVMENT_SERIESID) {
          i.registerDefaultDialogs(ue.CastleAchievementLevelUpDialog, new E.CastleAchievementLevelUpDialogProperties(t.AID));
        } else {
          mt.CastleIngameMessageHandler.getInstance().registerMessage(de.CastleAchievementPopupDialog, new y.CastleAchievementPopupDialogProperties(t.AID), true, mt.CastleIngameMessageHandler.PRIORITY_MIDDLE);
        }
        break;
      case p.PopupConst.NEWSLETTER_CONFIRMED:
        O.CastleModel.userData.userValidatedEmail();
        i.registerDefaultDialogs(_e.CastleMailGiftDialog, new Pt.CastleMailGiftDialogProperties(t.RID));
        break;
      case p.PopupConst.MAIL_VERIFIED:
        O.CastleModel.userData.userValidatedEmail();
        i.registerDefaultDialogs(he.CastleDarkOkDialog, new a.BasicStandardOkDialogProperties("dialog_emailConfirm_header", "dialog_emailConfirm_copy"));
        break;
      case p.PopupConst.NEWSLETTER_CONFIRMED_AGAIN:
        i.registerDefaultDialogs(he.CastleDarkOkDialog, new a.BasicStandardOkDialogProperties("dialog_newsletterConfirm_header", "dialog_newsletterConfirm_reward_copy"));
        break;
      case p.PopupConst.EMAIL_SEND_SUCCESS:
        CastlePopUpHelper.layoutManager.hideDialogWithDialogKey(he.CastleDarkOkDialog);
        if (t.subscription == 1) {
          le.CastleDialogHandler.getInstance().registerDefaultDialogs(me.CastleMailSendWithNewsletterDialog);
        } else {
          le.CastleDialogHandler.getInstance().registerDefaultDialogs(fe.CastleMailSendWithoutNewsletterDialog);
        }
        break;
      case p.PopupConst.EMAIL_SEND_FAIL:
        CastlePopUpHelper.layoutManager.hideDialogWithDialogKey(he.CastleDarkOkDialog);
        i.registerDefaultDialogs(he.CastleDarkOkDialog, new a.BasicStandardOkDialogProperties("dialog_mailVerticationRejected_header", "dialog_mailVerticationRejected_copy1"));
        break;
      case p.PopupConst.MAIN_QUEST:
        if (!O.CastleModel.settingsData.abTestShowSagamap) {
          i.registerDefaultDialogs(Le.CastleMainQuestFinishedDialog, new k.CastleMainQuestFinishedDialogProperties(m.int(t)));
        }
        break;
      case p.PopupConst.FACTION_FINISHED:
        if (t.FID == d.FactionConst.BLUE_FACTION) {
          i.registerDefaultDialogs(Xe.CastleFactionEventWinBlueDialog, new Qe.CastleFactionEventWinDialogProperties(t));
        } else if (t.FID == d.FactionConst.RED_FACTION) {
          i.registerDefaultDialogs(Je.CastleFactionEventWinRedDialog, new Qe.CastleFactionEventWinDialogProperties(t));
        }
        break;
      case p.PopupConst.COLOSSUS_COMPLETE:
        i.registerDefaultDialogs(qe.CastleColossusEventFinishedDialog, new j.CastleColossusEventFinishedDialogProperties(m.int(t.P), m.int(t.R), m.int(l.ColossusConst.getDecoPoints(m.int(t.P))), t.WID));
        break;
      case p.PopupConst.MIGHT_REWARD:
        var ie = new B.MightPointRewardProperties();
        ie.crest = O.CastleModel.userData.playerCrest;
        ie.rankIDs = t.RID;
        ie.rankIDs.sort(Z.numericSort);
        i.registerDefaultDialogs(be.MightPointRewardDialog, ie);
        break;
      case p.PopupConst.LEVEL_UP:
        var ae = m.int(t.L);
        var se = !!t.LL && t.LL == 1;
        if (ae == 6) {
          O.CastleModel.smartfoxClient.sendCommandVO(new Lt.C2SGetSLI());
        }
        if (ae == f.ClientConstCastle.AUTO_SHOW_NAME_CASTLE_DIALOG_LEVEL && !se) {
          var ge = O.CastleModel.userData.castleList.getHomeCastle();
          i.registerDefaultDialogs(Te.CastleNameCastleDialog, new F.CastleNameCastleDialogProperties(ge, g.WorldClassic.KINGDOM_ID, ge.objectId), false, o.BasicDialogHandler.PRIORITY_LOW);
        }
        O.CastleModel.userData.parse_LEVEL_UP(ae, se);
        if (CastlePopUpHelper.layoutManager.isIngameState) {
          var Ce = m.int(se ? ae + r.PlayerConst.LEVEL_CAP : ae);
          s.CommandController.instance.executeCommand(n.BasicController.GTM_CALL_GGS_TRACK_EVENT, "level" + Ce);
          if (f.ClientConstCastle.hasReachedSpecificLevel(Ce)) {
            s.CommandController.instance.executeCommand(n.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new kt.GameSightPayloadVO(Nt.GamesightEventConstants.LEVEL_COMPLETE_ + (Ce - 1)));
          }
          if (ae == 3 && !se) {
            break;
          }
        }
        i.registerDefaultDialogs(ye.CastleLevelUpDialog, new V.CastleLevelUpDialogProperties(ae, se), true, o.BasicDialogHandler.PRIORITY_MIDDLE);
        break;
      case p.PopupConst.CRUSADE_SEAQUEEN_FAILED:
        i.registerDefaultDialogs(pt.CastleSeasonEventFailDialog, new ht.CastleSeasonEventFailDialogProperties(u.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN));
        break;
      case p.PopupConst.CRUSADE_THORNKING_FAILED:
        i.registerDefaultDialogs(pt.CastleSeasonEventFailDialog, new ht.CastleSeasonEventFailDialogProperties(u.EventConst.EVENTTYPE_CRUSADE_THORNKING));
        break;
      case p.PopupConst.CRUSADE_UNDERWOLRD_FAILED:
        i.registerDefaultDialogs(pt.CastleSeasonEventFailDialog, new ht.CastleSeasonEventFailDialogProperties(u.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD));
        break;
      case p.PopupConst.PRIVATE_OFFER:
        break;
      case p.PopupConst.TMAP_RELIC_REWARD:
        var De;
        var Ie;
        if (ce.CastleLayoutManager.getInstance().currentState == ce.CastleLayoutManager.STATE_SEASON_WORLDMAP) {
          if (O.CastleModel.specialEventData.activeSeasonVO && O.CastleModel.specialEventData.activeSeasonVO.mapID == h.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD) {
            Ie = "dialog_treasureMap_foundTreasure_hard_title";
            De = "dialog_treasureMap_foundTreasure_hard_copy";
          } else if (O.CastleModel.specialEventData.activeSeasonVO && O.CastleModel.specialEventData.activeSeasonVO.mapID == h.TreasureMapsConst.MAP_ID_THORNKING_HARD) {
            Ie = "dialog_treasureMap_foundTreasure_hard_title";
            De = "dialog_treasureMap_foundTreasure_hard_copy";
          }
        }
        var Et = O.CastleModel.rewardData.getListById(m.int(t));
        i.registerDefaultDialogs(_t.CastleTreasureFoundTreasureDialog, new J.CastleTreasureFoundTreasureDialogProperties(Et, Ie, De), true, o.BasicDialogHandler.PRIORITY_MIDDLE);
        break;
      case p.PopupConst.TMAP_RESOURCE_REWARD:
        var Dt = O.CastleModel.rewardData.getListById(m.int(t.R));
        le.CastleDialogHandler.getInstance().registerDefaultDialogs(Ct.CastleTreasureChestOpenDialog, new Q.CastleTreasureChestOpenDialogProperties(Dt));
        break;
      case p.PopupConst.LOGIN_LP_INCENTIVE:
        var At = m.int(t);
        i.registerDefaultDialogs(pe.CastleBookmarkRewardDialog, new b.CastleBookmarkRewardDialogProperties(At));
        break;
      case p.PopupConst.ISLAND_END:
        var Gt = new Ft.CastleStormIslandsEventEndDialogProperties(t.ARIDS, t.PRIDS, t[c.CommKeys.INTERNAL_RANK], t[c.CommKeys.ISLAND_RANK], t[c.CommKeys.AQUA_POINTS], t[c.CommKeys.ALLIANCE_AQUA_POINTS], t[c.CommKeys.TITLE_ID], t[c.CommKeys.HAS_ALLIANCE]);
        i.registerDefaultDialogs(Bt.CastleStormIslandsEventEndDialog, Gt);
        break;
      case p.PopupConst.NOMAD_INVASION_FIRST:
        i.registerDefaultDialogs(at.CastleNomadInvasionEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.NOMAD_INVASION_TOPX:
        i.registerDefaultDialogs(at.CastleNomadInvasionEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.NOMAD_INVASION_REWARD:
        i.registerDefaultDialogs(at.CastleNomadInvasionEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        O.CastleModel.equipData.parse_MSP(t);
        break;
      case p.PopupConst.NOMAD_INVASION_END_WITHOUT_REWARD:
        i.registerDefaultDialogs(at.CastleNomadInvasionEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.NEW_DAILY_QUEST_REWARD:
        i.registerDefaultDialogs(Se.CastleDailyQuestThresholdRewardDialog, new Ae.CastleDailyQuestThresholdRewardDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_POINT_EVENT_FIRST:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_POINT_EVENT_TOPX:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_POINT_EVENT_REWARD:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_INVASION_FIRST_PLAYER:
      case p.PopupConst.FACTION_INVASION_END_WITHOUT_REWARD:
      case p.PopupConst.FACTION_INVASION_REWARD_PLAYER:
      case p.PopupConst.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t, false, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.FACTION_INVASION_REWARD_ALLIANCE:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t, false, true, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_INVASION_TOPX_ALLIANCE:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t, true, true, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.FACTION_INVASION_TOPX_PLAYER:
        i.registerDefaultDialogs(Ze.CastleFactionRewardDialog, new $e.CastleFactionRewardDialogProperties(false, t, true, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.PERMANENT_SLOT_REWARD:
        i.registerDefaultDialogs(gt.CastleSlotRewardEventDialog, new X.CastleSlotRewardEventDialogProperties(m.int(t)), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SAMURAI_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE:
        i.registerDefaultDialogs(ut.CastleSamuraiInvasionAllianceRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SAMURAI_INVASION_REWARD_PLAYER:
      case p.PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER:
        i.registerDefaultDialogs(dt.CastleSamuraiInvasionEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_TOURNAMENT_FIRST:
        i.registerDefaultDialogs(We.CastleAllianceTournamentEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(true, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_TOURNAMENT_REWARD:
        i.registerDefaultDialogs(We.CastleAllianceTournamentEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_TOURNAMENT_TOPX:
        i.registerDefaultDialogs(We.CastleAllianceTournamentEventRewardDialog, new Ee.CastleGenericRewardDialogProperties(false, t, true), true, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.RESEARCH_FINISHED:
        i.registerDefaultDialogs(Ve.CastleResearchCompleteDialog, new G.CastleResearchCompleteDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.RETURN_INVENTORY_TO_THE_OLD_OWNER:
        CastlePopUpHelper.openReturnToolsToInventoryPopup(t);
        break;
      case p.PopupConst.TIME_LIMITED_CAMPAIGN_REWARD_POPUP:
        i.registerDefaultDialogs(Pe.CastleQuestCompletedDialog, new ve.CastleCampaignRewardDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.EXPIRED_EQUIPMENTS:
        i.registerDefaultDialogs(Oe.EquipmentExpiredDialog, new L.EquipmentExpiredDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SEASON_DAILY_MEDAL_PAYOUT:
        i.registerDefaultDialogs(xe.SeasonLeagueDailyRewardDialog, new we.SeasonLeagueDailyRewardDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SEASON_PROMOTION:
        i.registerDefaultDialogs(Ne.SeasonLeaguePromotionDialog, new ke.SeasonLeaguePromotionDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SEASON_PASS_ACTIVATION:
        var Ht = "";
        var jt = {};
        switch (t[c.CommKeys.SEASON_PASS_TYPE]) {
          case r.SeasonConst.PASS_TYPE_SEASON:
            jt.isSeason = true;
            Ht = "dialog_seasonLeague_seasonPass_passGained_copy";
            break;
          case r.SeasonConst.PASS_TYPE_EVENT_END:
            jt.isEvent = true;
            Ht = "dialog_seasonLeague_eventPass_passGained_copy";
            break;
          case r.SeasonConst.PASS_TYPE_PROMOTION:
            jt.isPromotion = true;
            Ht = "dialog_seasonLeague_promotionPass_passGained_copy";
        }
        var Wt = oe.CollectableManager.parser.s2cParamList.createList(t[c.CommKeys.REWARDS]);
        if (Wt.length > 0) {
          i.registerDefaultDialogs(xt.SeasonLeaguePassGained, new wt.ModernGenericRewardDialogProperties("dialog_seasonLeague_seasonPass_passGained_header", Ht, Wt, jt), false, o.BasicDialogHandler.PRIORITY_LOW);
        }
        break;
      case p.PopupConst.SEASON_END:
      case p.PopupConst.SEASON_EVENT_END:
        i.registerDefaultDialogs(Be.SeasonLeagueEndDialog, new Fe.SeasonLeagueEndDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.TEMP_SERVER_ENTER:
        i.registerDefaultDialogs(ft.CastleTempServerWelcomeDialog, null, false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_BATTLE_GROUND_ENTER:
        i.registerDefaultDialogs(te.CastleAllianceBattlegroundStartDialog, null, false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.DAIMYO_ALLIANCE_CONTRACT_COMPLETED:
        break;
      case p.PopupConst.SUBSCRPTION_LOYALTY_PAYOUT:
        i.registerDefaultDialogs($.SubscriptionLoyaltyBonusGainDialog, new Ot.SubscriptionLoyaltyBonusGainDialogProperties(t.C2), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_FIRST_PLAYER:
      case p.PopupConst.SAMURAI_INVASION_TOPX_PLAYER:
      case p.PopupConst.DAIMYO_REWARD:
        CastlePopUpHelper.onSamuraiEventEndMessageArrived(e, t);
        break;
      case p.PopupConst.ALLIANCE_BATTLE_GROUND_EVENT_END_REWARD:
      case p.PopupConst.TEMP_SERVER_EVENT_END_REWARD:
        var Yt = new bt.CastleAllianceBattleGroundEventEndDialogProperties(t.PRID, t.ARID);
        Yt.playerRank = m.int(t.PLR);
        Yt.playerPoints = m.int(t.PLP);
        Yt.allianceRank = m.int(t.ALR);
        Yt.alliancePoints = m.int(t.ALP);
        Yt.settingID = m.int(t.TSID ? t.TSID : 1);
        Yt.isCrossplay = !!t[c.CommKeys.IS_CROSSPLAY_SERVER] && m.int(t[c.CommKeys.IS_CROSSPLAY_SERVER]) == 1;
        Yt.playerDailyRewardIDs = t[c.CommKeys.PLAYER_DAILY_TASK_REWARD_ID];
        Yt.dailyMandatoryPoints = m.int(t[c.CommKeys.PLAYER_DAILY_TASK_POINTS]);
        Yt.dailyRewardLevel = m.int(t[c.CommKeys.PLAYER_DAILY_TASK_REWARD_LEVEL]);
        if (e == p.PopupConst.ALLIANCE_BATTLE_GROUND_EVENT_END_REWARD) {
          i.registerDefaultDialogs(ee.CastleAllianceBattleGroundEventEndDialog, Yt, false, o.BasicDialogHandler.PRIORITY_LOW);
        } else {
          i.registerDefaultDialogs(Vt.CastleTempServerEventEndDialog, Yt, false, o.BasicDialogHandler.PRIORITY_LOW);
        }
        break;
      case p.PopupConst.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_RE_LINK:
        i.registerDefaultDialogs(It.CastleABGTowerReassignmentDialog, new Tt.CastleABGTowerInfoDialogProperties(vt.WorldmapObjectFactory.parseWorldMapArea(t[c.CommKeys.TOWERS])), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_REVIVE:
        i.registerDefaultDialogs(St.DarkOkDialog, new a.BasicStandardOkDialogProperties("dialog_beyondTheHorizon_AllianceTower_castleRevive_header", "dialog_beyondTheHorizon_AllianceTower_castleRevive_copy", CastlePopUpHelper.onGetNewABGTimer, "", CastlePopUpHelper.onGetNewABGTimer), false, o.BasicDialogHandler.PRIORITY_LOW);
        break;
      case p.PopupConst.BUILDINGS_TRANSFERRED_TO_AREA_INVENTORY:
        var Kt = t[c.CommKeys.BUILDING_LIST] ? t[c.CommKeys.BUILDING_LIST] : t[c.CommKeys.WOD_IDS];
        var zt = Kt && Kt.length > 0 ? Kt.length : 0;
        i.registerDefaultDialogs(x.WmoCapturedLostDialog, new w.WmoCapturedLostDialogProperties("dialog_messageHeader_outpostConquered", zt <= 0 ? "dialog_siegeMessage_outpostConquered" : "dialog_siegeMessage_outpostConqueredDistrict", t, true, false));
        break;
      case p.PopupConst.VERIFICATION_SENT_TO_OLD_MAIL:
        if (t && t.T) {
          O.CastleModel.playerEmailData.setTimestamp(t.T);
        }
        i.registerDefaultDialogs(St.DarkOkDialog, new Ut.CastleStandardYesNoDialogProperties("dialog_options_newEmail_verificationSent_title", _.Localize.text("dialog_options_newEmail_verificationSent_desc", [O.CastleModel.playerEmailData.getRemainingTimeForAutoChange()])));
        break;
      case p.PopupConst.MAIL_CHANGE_REQUEST_WITHOUT_VERIFICATION:
        i.registerDefaultDialogs(St.DarkOkDialog, new Ut.CastleStandardYesNoDialogProperties("success", _.Localize.text("dialog_saveAccount_emailSent_changedBeforeRegistration_desc")));
        break;
      case p.PopupConst.MAIL_CANCEL_SUCCESS:
        i.registerDefaultDialogs(N.CastleChangePlayerEmailCancelDoneDialog);
        break;
      case p.PopupConst.MAIL_CHANGE_SUCCESS:
        i.registerDefaultDialogs(St.DarkOkDialog, new Ut.CastleStandardYesNoDialogProperties("success", "dialog_options_newEmail_success_desc"));
        break;
      case p.PopupConst.RECE_WELCOME_MESSAGE:
        this.layoutManager.clearAllDialogs();
        if (ce.CastleLayoutManager.getInstance().stage.stageWidth >= 1280) {
          i.registerDefaultDialogs(v.ModernWelcomebackDialogBig, new S.ModernWelcomebackDialogProperties(m.int(t.WBRID)), true, o.BasicDialogHandler.PRIORITY_HIGH);
        } else {
          i.registerDefaultDialogs(A.ModernWelcomebackDialogSmall, new S.ModernWelcomebackDialogProperties(m.int(t.WBRID)), true, o.BasicDialogHandler.PRIORITY_HIGH);
        }
        break;
      case p.PopupConst.PLAYER_NAME_EMAIL_ALIAS_POPUP:
        var qt = t.APS == 1 ? "generic_email" : "generic_username";
        i.registerDefaultDialogs(T.DuplicatedEmailPopupDialog, new a.BasicStandardOkDialogProperties(null, qt));
        break;
      case p.PopupConst.TEASER:
        var Xt = t.EID;
        i.registerDefaultDialogs(K.EventStarterAnnouncementDialog, new z.EventStarterAnnouncementDialogProperties(e, Xt));
        break;
      case p.PopupConst.DONATION_EVENT_END_REWARD:
        var Qt = t.DSI;
        var Jt = t.DEER;
        var Zt = t.DEETP;
        i.registerDefaultDialogs(W.DonationEventEndDialog, new Y.DonationEventEndDialogProperties(Qt, Jt, Zt));
    }
  };
  CastlePopUpHelper.onGetNewABGTimer = function (e = null) {
    n.BasicModel.smartfoxClient.sendCommandVO(new At.C2SAllianceBattleGroundGetTimersVO());
  };
  CastlePopUpHelper.getEventIDbyPopUpID = function (e) {
    switch (e) {
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_REWARD:
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_FIRST:
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_TOPX:
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_END_WITHOUT_REWARD:
        return m.int(u.EventConst.EVENTTYPE_LUCKYWHEEL);
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_REWARD:
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_FIRST:
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_TOPX:
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_END_WITHOUT_REWARD:
        return m.int(u.EventConst.EVENTTYPE_LUCKYWHEEL_SD);
      case p.PopupConst.COLOSSUS_COMPLETE:
        return m.int(u.EventConst.EVENTTYPE_COLOSSUS);
      case p.PopupConst.LONGTERM_POINT_EVENT_REWARD:
      case p.PopupConst.LONGTERM_POINT_EVENT_FIRST:
      case p.PopupConst.LONGTERM_POINT_EVENT_TOPX:
      case p.PopupConst.LONGTERM_POINT_EVENT_END_WITHOUT_REWARD:
      case p.PopupConst.LONGTERM_POINT_EVENT_HARD_MODE:
        return m.int(u.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT);
      case p.PopupConst.POINT_EVENT_REWARD:
      case p.PopupConst.POINT_EVENT_FIRST:
      case p.PopupConst.POINT_EVENT_TOPX:
      case p.PopupConst.POINT_EVENT_END_WITHOUT_REWARD:
        return m.int(u.EventConst.EVENTTYPE_POINT_EVENT);
      case p.PopupConst.BEGGING_KNIGHTS_REWARD:
      case p.PopupConst.BEGGING_KNIGHTS_FIRST:
      case p.PopupConst.BEGGING_KNIGHTS_TOPX:
      case p.PopupConst.BEGGING_KNIGHTS_END_WITHOUT_REWARD:
        return m.int(u.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER:
        return m.int(u.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE);
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD:
      case p.PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER:
        return m.int(u.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE);
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER:
        return m.int(u.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      case p.PopupConst.FACTION_POINT_EVENT_FIRST:
      case p.PopupConst.FACTION_POINT_EVENT_TOPX:
      case p.PopupConst.FACTION_POINT_EVENT_REWARD:
      case p.PopupConst.FACTION_FINISHED:
        return m.int(u.EventConst.EVENTTYPE_FACTION);
      case p.PopupConst.ARTIFACT:
        return m.int(u.EventConst.EVENTTYPE_ARTIFACT);
      case p.PopupConst.FACTION_INVASION_FIRST_PLAYER:
      case p.PopupConst.FACTION_INVASION_END_WITHOUT_REWARD:
      case p.PopupConst.FACTION_INVASION_REWARD_PLAYER:
      case p.PopupConst.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER:
      case p.PopupConst.FACTION_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.FACTION_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.FACTION_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.FACTION_INVASION_TOPX_PLAYER:
        return m.int(u.EventConst.EVENTTYPE_FACTION_INVASION);
      case p.PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_REWARD_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_FIRST_PLAYER:
      case p.PopupConst.SAMURAI_INVASION_TOPX_PLAYER:
      case p.PopupConst.SAMURAI_INVASION_REWARD_PLAYER:
      case p.PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER:
        return m.int(u.EventConst.EVENTTYPE_SAMURAI_INVASION);
      case p.PopupConst.TMAP_RELIC_REWARD:
        return m.int(u.EventConst.EVENTTYPE_UNITDEALER);
      default:
        return -1;
    }
  };
  CastlePopUpHelper.isWinner = function (e) {
    switch (e) {
      case p.PopupConst.LONGTERM_POINT_EVENT_FIRST:
      case p.PopupConst.POINT_EVENT_FIRST:
      case p.PopupConst.LUCKY_WHEEL_POINT_EVENT_FIRST:
      case p.PopupConst.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_FIRST:
      case p.PopupConst.BEGGING_KNIGHTS_FIRST:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER:
      case p.PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER:
      case p.PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.NOMAD_INVASION_FIRST:
      case p.PopupConst.FACTION_POINT_EVENT_FIRST:
      case p.PopupConst.FACTION_INVASION_FIRST_PLAYER:
      case p.PopupConst.FACTION_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE:
      case p.PopupConst.SAMURAI_INVASION_FIRST_PLAYER:
        return true;
      default:
        return false;
    }
  };
  CastlePopUpHelper.playerIsInLevelRangeMailVerification = function (e) {
    for (var t = 0, i = f.ClientConstCastle.AUTO_SHOW_MAIL_VERIFICATION_DIALOG_LEVELS; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && e == n) {
        return true;
      }
    }
    return false;
  };
  CastlePopUpHelper.createRewardList = function (e) {
    var t = new se.CollectableList();
    if (e.RID || e.RIDS) {
      if (e.RIDS) {
        for (var i = 0; i < e.RIDS.length; i++) {
          var n = O.CastleModel.rewardData.getCopiedListById(e.RIDS[i]);
          if (n) {
            t.addList(n);
          }
        }
      } else {
        t = O.CastleModel.rewardData.getCopiedListById(e.RID);
      }
      if (e.TH != null) {
        for (var o = t.getFilteredListByType(ae.CollectableEnum.UNITS), a = 0; a < o.length; a++) {
          var s = o.getItemByIndex(a);
          s.amount = r.BeggingKnightsConst.calculateRewardAmount(Number(e.TH), s.amount);
        }
        t = o;
      }
    } else if (e.RW || e.R) {
      t = oe.CollectableManager.parser.s2cParamList.createList(e.RW ? e.RW : e.R);
    }
    CastlePopUpHelper.setGrantType(t, e);
    return t;
  };
  CastlePopUpHelper.setGrantType = function (e, t) {
    if (e && e.list.length > 0 && t.GT) {
      var i = parseInt(t.GT);
      for (var n = m.int(e.list.length), o = 0; o < n; o++) {
        e.getItemByIndex(o).grantType = i;
      }
    }
  };
  Object.defineProperty(CastlePopUpHelper, "layoutManager", {
    get: function () {
      return ce.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePopUpHelper.displayMaterialBagPopUp = function (e) {
    if (!(e.length <= 0)) {
      var t = 1;
      if (e != null) {
        for (var i = 0, n = e; i < n.length; i++) {
          var a = n[i];
          if (a !== undefined) {
            var s = oe.CollectableManager.parser.s2cParamList.createList(a.R);
            s.sort(CastlePopUpHelper.sortByMaterialRareness);
            t = m.int(Math.max(O.CastleModel.craftingMaterialData.craftingMaterialBags.get(a.BID).rareness, t));
          }
        }
      }
      le.CastleDialogHandler.getInstance().registerDefaultDialogs(ge.MaterialBagOpenedDialog, new Ce.MaterialBagOpenedDialogProperties(s, t), true, o.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  CastlePopUpHelper.sortByMaterialRareness = function (e, t) {
    return m.int(e.xmlCurrencyVO.rareness - t.xmlCurrencyVO.rareness);
  };
  CastlePopUpHelper.openReturnToolsToInventoryPopup = function (e) {
    var t = "dialog_toolsReturned_title";
    var i = "";
    var n = e[c.CommKeys.AREA_TYPE] ? e[c.CommKeys.AREA_TYPE] : 0;
    if (n == 0) {
      n = e.A ? e.A[0] : 0;
    }
    switch (n) {
      case C.WorldConst.AREA_TYPE_VILLAGE:
        i = "dialog_toolsReturned_village_body";
        break;
      case C.WorldConst.AREA_TYPE_MONUMENT:
        i = "dialog_toolsReturned_monument_body";
        break;
      case C.WorldConst.AREA_TYPE_CAPITAL:
        i = "dialog_toolsReturned_capital_body";
        break;
      case C.WorldConst.AREA_TYPE_LABORATORY:
        i = "dialog_toolsReturned_laboratory_body";
        break;
      case C.WorldConst.AREA_TYPE_METROPOL:
        i = Dt.SpecialServerHelper.checkTextIDForSkinText("dialog_toolsReturned_tradingMetropolis_body");
        break;
      case C.WorldConst.AREA_TYPE_KINGS_TOWER:
        i = Dt.SpecialServerHelper.checkTextIDForSkinText("dialog_toolsReturned_royalTower_body");
        break;
      case C.WorldConst.AREA_TYPE_ISLE_RESOURCE:
        i = "dialog_toolsReturned_resourceIsland_body";
        break;
      default:
        t = "dialog_messageHeader_outpostLost";
        i = "dialog_toolsReturned_outpost_body";
    }
    le.CastleDialogHandler.getInstance().registerDefaultDialogs(x.WmoCapturedLostDialog, new w.WmoCapturedLostDialogProperties(t, i, e, false, true));
  };
  CastlePopUpHelper.onSamuraiEventEndMessageArrived = function (e, t) {
    O.CastleModel.samuraiDaimyoData.server.parseEventEndDialogData(e, t);
    if (!le.CastleDialogHandler.getInstance().isDialogRegistered(Et.SamuraiEventEndDialog) && !ce.CastleLayoutManager.getInstance().isDialogVisible(Et.SamuraiEventEndDialog)) {
      le.CastleDialogHandler.getInstance().registerDefaultDialogs(Et.SamuraiEventEndDialog, null, false, o.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  return CastlePopUpHelper;
}();
exports.CastlePopUpHelper = ie;
var ne = require("./1678.js");
var oe = require("./50.js");
var ae = require("./12.js");
var se = require("./48.js");
var re = require("./813.js");
var le = require("./9.js");
var ce = require("./17.js");
var ue = require("./1680.js");
var de = require("./1681.js");
var pe = require("./3465.js");
var he = require("./574.js");
var ge = require("./1682.js");
var Ce = require("./1683.js");
var _e = require("./1684.js");
var me = require("./3467.js");
var fe = require("./3468.js");
var Oe = require("./1685.js");
var Ee = require("./1686.js");
var ye = require("./814.js");
var be = require("./3469.js");
var De = require("./3472.js");
var Ie = require("./3475.js");
var Te = require("./911.js");
var ve = require("./3477.js");
var Se = require("./3478.js");
var Ae = require("./3479.js");
var Le = require("./3480.js");
var Pe = require("./1067.js");
var Me = require("./1688.js");
var Re = require("./3481.js");
var Ve = require("./3482.js");
var xe = require("./3483.js");
var we = require("./3484.js");
var Be = require("./1689.js");
var Fe = require("./1690.js");
var Ne = require("./1691.js");
var ke = require("./1692.js");
var Ue = require("./3489.js");
var Ge = require("./3490.js");
var He = require("./3491.js");
var je = require("./3492.js");
var We = require("./3493.js");
var Ye = require("./3494.js");
var Ke = require("./3495.js");
var ze = require("./3496.js");
var qe = require("./3497.js");
var Xe = require("./3498.js");
var Qe = require("./3499.js");
var Je = require("./3500.js");
var Ze = require("./3501.js");
var $e = require("./3502.js");
var et = require("./3503.js");
var tt = require("./3504.js");
var it = require("./3505.js");
var nt = require("./3506.js");
var ot = require("./3507.js");
var at = require("./3508.js");
var st = require("./3509.js");
var rt = require("./1695.js");
var lt = require("./3510.js");
var ct = require("./3511.js");
var ut = require("./3512.js");
var dt = require("./3513.js");
var pt = require("./3514.js");
var ht = require("./3515.js");
var gt = require("./3516.js");
var Ct = require("./800.js");
var _t = require("./1697.js");
var mt = require("./658.js");
var ft = require("./1698.js");
var Ot = require("./3519.js");
var Et = require("./3520.js");
var yt = require("./3522.js");
var bt = require("./1700.js");
var Dt = require("./44.js");
var It = require("./3523.js");
var Tt = require("./891.js");
var vt = require("./147.js");
var St = require("./216.js");
var At = require("./1701.js");
var Lt = require("./1702.js");
var Pt = require("./3524.js");
var Mt = require("./3525.js");
var Rt = require("./3526.js");
var Vt = require("./1703.js");
var xt = require("./3528.js");
var wt = require("./1704.js");
var Bt = require("./3529.js");
var Ft = require("./3531.js");
var Nt = require("./660.js");
var kt = require("./661.js");
var Ut = require("./493.js");