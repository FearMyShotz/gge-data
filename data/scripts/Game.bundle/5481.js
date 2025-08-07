Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./53.js");
var p = require("./44.js");
var h = require("./137.js");
var g = require("./29.js");
var C = require("./5482.js");
var _ = require("./5483.js");
var m = require("./5484.js");
var f = require("./5485.js");
var O = require("./5486.js");
var E = require("./5487.js");
var y = require("./1956.js");
var b = require("./1675.js");
var D = require("./1676.js");
var I = require("./5489.js");
var T = require("./1846.js");
var v = require("./468.js");
var S = require("./5490.js");
var A = require("./5491.js");
var L = require("./5492.js");
var P = require("./4.js");
var M = require("./83.js");
var R = require("./99.js");
var V = function (e) {
  function MessageSpecialEventVO() {
    var t = this;
    t._subtypeEvent = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageSpecialEventVO, e);
  MessageSpecialEventVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(s.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var i = t[0].split("+");
    this._subtypeEvent = parseInt(i[0]);
    if (this._subtypeEvent == s.MessageConst.SPECIAL_ID_WORLD_CUP) {
      i.shift();
      this._additionalInformation = i;
    } else if (t.length > 1) {
      this._additionalInformation = t[1].split("+");
    }
  };
  MessageSpecialEventVO.prototype.parseSubject = function () {
    switch (this._subtypeEvent) {
      case s.MessageConst.MESSAGE_TYPE_PLAYER_GIFT:
        return c.Localize.text("message_header_giftTrader_obtainedGift");
      case s.MessageConst.SPECIAL_ID_BAEM_AWARD:
        return c.Localize.text("bam_award_title");
      case s.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
        return c.Localize.text("bam_award_final_title");
      case s.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
        return c.Localize.text("european_games_award_title");
      case s.MessageConst.SPECIAL_ID_EGA_100_RUBIES:
        return c.Localize.text("dialog_EGAevent_message_won_title");
      case s.MessageConst.SPECIAL_ID_EGA_500_RUBIES_FORUM:
        return c.Localize.text("dialog_EGAevent_message_title");
      case s.MessageConst.SPECIAL_ID_GAMEX_AWARD:
      case s.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
        return c.Localize.text("bam_award_title");
      case s.MessageConst.SPECIAL_ID_TURKEY_MESSAGE:
        return c.Localize.text("turkish_paysteaser_title");
      case s.MessageConst.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE:
        return c.Localize.text("empireDealsDays_message_header");
      case s.MessageConst.SPECIAL_ID_TERMS_AND_CONDITIONS:
        return c.Localize.text("general_tcmailing_subject");
      case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START:
        return this.eventStartSubject();
      case s.MessageConst.SPECIAL_ID_UNDERWORLD:
        return c.Localize.text("message_header_underworld_start");
      case s.MessageConst.SPECIAL_ID_THORNKING:
        return c.Localize.text("message_header_thornking_start");
      case s.MessageConst.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED:
        return c.Localize.text("faction_message_lostlastCamp_title");
      case s.MessageConst.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION:
        switch (parseInt(this._additionalInformation[0])) {
          case r.FactionConst.BLUE_FACTION:
            return c.Localize.text("message_lms_started_blue");
          case r.FactionConst.RED_FACTION:
            return c.Localize.text("message_lms_started_red");
        }
        return "";
      case s.MessageConst.SPECIAL_ID_VIP_INFORMATION:
        return c.Localize.text("dialog_VipBonus_message_header_v2", [parseInt(this._additionalInformation[0])]);
      case s.MessageConst.SPECIAL_ID_WORLD_CUP:
        return c.Localize.text("dialog_worldCup");
      case s.MessageConst.SPECIAL_ID_MONUMENT:
        return c.Localize.text("dialog_monument_resetMessage_title");
      case s.MessageConst.SPECIAL_ID_LABORATORY:
        return c.Localize.text("dialog_laboratory_resetMessage_title");
      case s.MessageConst.SPECIAL_ID_KINGSTOWER:
      case s.MessageConst.SPECIAL_ID_METROPOLIS:
        return c.Localize.text(p.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_title"));
      case s.MessageConst.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED:
        return c.Localize.text("dialog_messageTip_title_13");
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_1:
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_2:
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_3:
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1:
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2:
      case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3:
        return c.Localize.text("dialog_messageTip_title_" + this._subtypeEvent);
      case s.MessageConst.SPECIAL_ID_ANNOUNCE_INSTANCE:
        return c.Localize.text("mail_newServer_header");
      case s.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE:
        return c.Localize.text("dialog_fairplayMessage_header");
      case s.MessageConst.SPECIAL_ID_ALCHEMIST_RETIREMENT:
        return c.Localize.text("dialog_alchemistRetirement_title");
      case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE:
        if (this._additionalInformation.length > 0 && this._additionalInformation[0] == l.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
          return c.Localize.text("message_header_outerrealms_start");
        } else {
          return c.Localize.text("dialog_shapeshifterDaily_mailHeader");
        }
      case s.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND:
        return c.Localize.text("message_header_mapPiece");
      default:
        return this._subject;
    }
  };
  MessageSpecialEventVO.prototype.eventStartSubject = function () {
    var e = parseInt(this._additionalInformation[0]);
    switch (e) {
      case l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return c.Localize.text("message_header_underworld_start");
      case l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return c.Localize.text("message_header_seaqueen_start");
      case l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return c.Localize.text("message_header_invasion_start");
      case l.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return c.Localize.text("message_eiland_reset_header");
      case l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return c.Localize.text("dialog_alienInvasion_message_header");
      case l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return c.Localize.text("dialog_redAlienInvasion_message_header");
      case l.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return c.Localize.text("dialog_samuraiInvasion_message_header");
      case l.EventConst.EVENTTYPE_FACTION_INVASION:
        return c.Localize.text("message_header_berimondInvasion_start");
      case l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        return c.Localize.text("message_header_seasonLeague_start");
      case l.EventConst.EVENTTYPE_TEMPSERVER:
        return c.Localize.text("message_header_tempServer_start");
      case l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
        return c.Localize.text("event_title_113");
      case l.EventConst.EVENTTYPE_DONATION:
        return c.Localize.text("dialog_startDonationEvent_title");
      case l.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        return c.Localize.text("message_header_thornking_start");
      case l.EventConst.EVENTTYPE_FACTION:
        return c.Localize.text("event_title_3");
      case l.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return c.Localize.text("dialog_longPointsEvent_eventcamp_header_" + v.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).name);
      default:
        return c.Localize.text("dialog_event_announcement_header_" + e);
    }
  };
  MessageSpecialEventVO.prototype.parseSender = function () {
    return c.Localize.text("system");
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subtypeEvent) {
        case s.MessageConst.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION:
          var e = parseInt(this._additionalInformation[0]);
          var t = parseInt(this._additionalInformation[1]);
          return new M.DialogInfoVO(Q.CastleFactionEventLMSDialog, new T.CastleFactionEventLMSDialogProperties(e, t));
        case s.MessageConst.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED:
          var i = parseInt(this._additionalInformation[0]);
          return new M.DialogInfoVO(J.CastleFactionEventLostLastCampDialog, new I.CastleFactionDialogProperties(i));
        case s.MessageConst.SPECIAL_ID_BAEM_AWARD:
        case s.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
        case s.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
        case s.MessageConst.SPECIAL_ID_GAMEX_AWARD:
        case s.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
          return new M.DialogInfoVO(N.CastleAwardDialog, new O.CastleAwardDialogProperties(this));
        case s.MessageConst.SPECIAL_ID_EGA_100_RUBIES:
        case s.MessageConst.SPECIAL_ID_EGA_150_RUBIES:
          return new M.DialogInfoVO(U.CastleAwardWithRewardWinDialog);
        case s.MessageConst.SPECIAL_ID_EGA_500_RUBIES_FORUM:
          return new M.DialogInfoVO(k.CastleAwardWithRewardDialog);
        case s.MessageConst.SPECIAL_ID_TURKEY_MESSAGE:
          return new M.DialogInfoVO(j.CastleIngameMessageTurkeyDialog);
        case s.MessageConst.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE:
          return new M.DialogInfoVO(H.CastleIngameMessageDealsDayDialog);
        case s.MessageConst.SPECIAL_ID_TERMS_AND_CONDITIONS:
          return new M.DialogInfoVO(Y.CastleTermsAndConditionsChangedDialog);
        case s.MessageConst.SPECIAL_ID_VIP_INFORMATION:
          var n = parseInt(this._additionalInformation[0]);
          return new M.DialogInfoVO(B.CastleVIPMessageDialog, new m.CastleVIPMessageDialogProperties(n));
        case s.MessageConst.SPECIAL_ID_WORLD_CUP:
          return new M.DialogInfoVO(oe.CastleWorldCupFinisher, new A.CastleWorldCupFinisherProperties(this._additionalInformation));
        case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START:
          return this.dialogInfoSpecialEventStart();
        case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE:
          if (this._additionalInformation.length > 0 && this._additionalInformation[0] == l.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
            return new M.DialogInfoVO(ae.CastleTempServerMultiplierDialog, new L.CastleTempServerMultiplierDialogProperties(this._additionalInformation[1], this._additionalInformation[2]));
          }
          break;
        case s.MessageConst.SPECIAL_ID_UNDERWORLD:
          if (P.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD)) {
            return new M.DialogInfoVO(ne.CastleUnderworldEventTeaserDialog, new S.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
          } else {
            return new M.DialogInfoVO(x.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
          }
        case s.MessageConst.SPECIAL_ID_THORNKING:
          if (P.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_THORNKING)) {
            return new M.DialogInfoVO(ie.CastleThornkingEventTeaserDialog, new S.CastleSeasonEventTeaserDialogProperties(a.TreasureMapsConst.MAP_ID_THORNKING_HARD));
          } else {
            return new M.DialogInfoVO(x.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
          }
        case s.MessageConst.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED:
          return new M.DialogInfoVO(K.CastleMessageTipDialog, new y.CastleMessageTipDialogProperties(null, 13, 5));
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_1:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_2:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_3:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3:
          return new M.DialogInfoVO(K.CastleMessageTipDialog, new y.CastleMessageTipDialogProperties(null, this._subtypeEvent, 6));
        case s.MessageConst.SPECIAL_ID_MONUMENT:
          return new M.DialogInfoVO(w.CastleResetLandmarkMessageDialog, new _.CastleResetMonumentDialogProperties());
        case s.MessageConst.SPECIAL_ID_LABORATORY:
          return new M.DialogInfoVO(w.CastleResetLandmarkMessageDialog, new C.CastleResetLaboratoryDialogProperties());
        case s.MessageConst.SPECIAL_ID_METROPOLIS:
        case s.MessageConst.SPECIAL_ID_KINGSTOWER:
          return new M.DialogInfoVO(x.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(p.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_title"), p.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_desc")));
        case s.MessageConst.SPECIAL_ID_ANNOUNCE_INSTANCE:
          return new M.DialogInfoVO(W.CastleNewServerAnnounceDialog, new E.CastleNewServerAnnounceDialogProperties(u.int(this._additionalInformation[0]), u.int(this._additionalInformation[1]), u.int(this._additionalInformation[2])));
        case s.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE:
          return new M.DialogInfoVO(G.CastleFairPlayDialog);
        case s.MessageConst.SPECIAL_ID_ALCHEMIST_RETIREMENT:
          var r = this._additionalInformation.slice(0, 4);
          var d = u.int(this._additionalInformation[4]);
          return new M.DialogInfoVO(F.CastleAlchemistRetirementDialog, new f.CastleAlchemistRetirementDialogProperties(r, d));
        case s.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND:
          return new M.DialogInfoVO(le.CastleTreasureFoundPieceDialog);
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(R.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.dialogInfoSpecialEventStart = function () {
    var e = parseInt(this._additionalInformation[0]);
    switch (e) {
      case l.EventConst.EVENTTYPE_ISLAND_KINGDOM:
        return new M.DialogInfoVO(ue.CastleStormIslandsStartTeaserDialog, new ce.CastleStormIslandsStartTeaserDialogProperties(this));
    }
    if (!P.CastleModel.specialEventData.isEventActive(e)) {
      return new M.DialogInfoVO(x.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
    }
    switch (e) {
      case l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        return new M.DialogInfoVO(ne.CastleUnderworldEventTeaserDialog, new S.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
      case l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        return new M.DialogInfoVO(te.CastleSeaQueenEventTeaserDialog);
      case l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        return new M.DialogInfoVO($.CastleAllianceNomadInvasionEventTeaserDialog);
      case l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
        return new M.DialogInfoVO(q.CastleAllianceAlienInvasionEventTeaserDialog);
      case l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        return new M.DialogInfoVO(X.CastleRedAllianceAlienInvasionEventTeaserDialog);
      case l.EventConst.EVENTTYPE_SAMURAI_INVASION:
        return new M.DialogInfoVO(ee.CastleSamuraiInvasionEventTeaserDialog);
      case l.EventConst.EVENTTYPE_FACTION_INVASION:
        return new M.DialogInfoVO(Z.CastleFactionInvasionEventTeaserDialog);
      case l.EventConst.EVENTTYPE_TEMPSERVER:
        if (h.TempServerHelper.tmpServerEvent) {
          return new M.DialogInfoVO(se.CastleTempServerStartDialog);
        }
        break;
      case l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
        if (d.ABGHelper.abgEvent) {
          return new M.DialogInfoVO(re.CastleAllianceBattlegroundMessageDialog);
        }
        break;
      case l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
        return new M.DialogInfoVO(z.SeasonLeagueStartDialog);
      case l.EventConst.EVENTTYPE_FACTION:
        return new M.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_FACTION_EVENT_MAIN_DIALOG);
      case l.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        return new M.DialogInfoVO(null, null, g.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
      default:
        return new M.DialogInfoVO(b.EventStarterAnnouncementDialog, new D.EventStarterAnnouncementDialogProperties(-1, e));
    }
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "additionalIconName", {
    get: function () {
      if (this.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START || this.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END) {
        switch (parseInt(this._additionalInformation[0])) {
          case l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
            return "CastleMessageIconsUnderworld";
          case l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
            return "CastleMessageIconsSeaQueen";
          case l.EventConst.EVENTTYPE_NOMADINVASION:
          case l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
            return "CastleMessageIconsNomad";
          case l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
            return "CastleMessageIconsAlien";
          case l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
            return "CastleMessageIconsRedAlien";
          case l.EventConst.EVENTTYPE_SAMURAI_INVASION:
            return "CastleMessageIconsSamurai";
          case l.EventConst.EVENTTYPE_FACTION_INVASION:
            return "CastleMessageIconsFactionInvasion";
          case l.EventConst.EVENTTYPE_ISLAND_KINGDOM:
            return "CastleMessageIconsEiland";
          case l.EventConst.EVENTTYPE_TEMPSERVER:
            return "CastleMessageIconsTempServer";
          case l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND:
            return "CastleMessageIconsAllianceBattleground";
          case l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE:
            return "CastleMessageIconsSeasonLeague";
          case l.EventConst.EVENTTYPE_DONATION:
            return "CastleMessageIconsDonationEvent";
          case l.EventConst.EVENTTYPE_DECO_GACHA:
            return "CastleMessageIconsDistrictGacha";
          case l.EventConst.EVENTTYPE_CHRISTMAS_GACHA:
            return "CastleMessageIconsChristmasGacha";
          case l.EventConst.EVENTTYPE_SUMMER_GACHA:
            return "CastleMessageIconsSummerGacha";
          case l.EventConst.EVENTTYPE_EASTER_GACHA:
            return "CastleMessageIconsEasterGacha";
          case l.EventConst.EVENTTYPE_ANNIVERSARY_GACHA:
            return "CastleMessageIconsAnniversaryGacha";
          case l.EventConst.EVENTTYPE_FACTION:
            return "CastleMessageIconsFaction";
          case l.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
            if (o.BasicModel.basicLoaderData.isItemAssetVersioned("CastleMessageIconsLTPE_" + v.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).assetName)) {
              return "CastleMessageIconsLTPE_" + v.LongTermPointEventSkin.getTypeById(parseInt(this._additionalInformation[1])).assetName;
            } else {
              return "";
            }
        }
      } else {
        if (this.subtypeEvent == s.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE) {
          return "CastleMessageIconsFairPlay";
        }
        if (this.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE) {
          if (parseInt(this._additionalInformation[0]) == l.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
            return "CastleMessageIconsTempServer";
          } else {
            return "CastleMessageIconsShapeshifter";
          }
        }
        if (this._subtypeEvent == s.MessageConst.SPECIAL_ID_VIP_INFORMATION) {
          return "CastleMessageIconsVIP";
        }
        if (this._subtypeEvent == s.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND) {
          return "CastleMessageIconsTreasureMap";
        }
      }
      return "";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(R.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpecialEventVO.prototype, "isVisible", {
    get: function () {
      return this.subtypeEvent != s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && this.subtypeEvent != s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END || parseInt(this._additionalInformation[0]) != l.EventConst.EVENTTYPE_TEMPSERVER && parseInt(this._additionalInformation[0]) != l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND || !this.isOnExcludedNetwork(o.EnvGlobalsHandler.globals.networkId) && !de.ClientConstABTests.isOnPolishServerInstance && !de.ClientConstABTests.isOnKoreanServerInstance;
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.isOnExcludedNetwork = function (e) {
    return e == o.GoodgamePartners.NETWORK_MEINVZ || e == o.GoodgamePartners.NETWORK_NASZAKLASA || e == o.GoodgamePartners.NETWORK_SPIL_JETZTSPIELEN || e == o.GoodgamePartners.NETWORK_SPIL_AGAME || e == o.GoodgamePartners.NETWORK_SPIL_OURGAMES_RU || e == o.GoodgamePartners.NETWORK_SPIELAFFE || e == o.GoodgamePartners.NETWORK_KRALOYUN || e == o.GoodgamePartners.NETWORK_ONE_LT || e == o.GoodgamePartners.NETWORK_KONGREGATE || e == o.GoodgamePartners.NETWORK_SPIL_HYVES || e == o.GoodgamePartners.NETWORK_KANOBU || e == o.GoodgamePartners.NETWORK_DRAUGAS_LT || e == 81;
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "subtypeEvent", {
    get: function () {
      return this._subtypeEvent;
    },
    enumerable: true,
    configurable: true
  });
  MessageSpecialEventVO.prototype.canBeArchived = function () {
    return e.prototype.canBeArchived.call(this) && this.subtypeEvent != l.EventConst.EVENTTYPE_USER_SURVEY;
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "additionalInformation", {
    get: function () {
      return this._additionalInformation;
    },
    enumerable: true,
    configurable: true
  });
  return MessageSpecialEventVO;
}(R.AMessageVO);
exports.MessageSpecialEventVO = V;
var x = require("./38.js");
var w = require("./5493.js");
var B = require("./5494.js");
var F = require("./5495.js");
var N = require("./5496.js");
var k = require("./5497.js");
var U = require("./5498.js");
var G = require("./5499.js");
var H = require("./5500.js");
var j = require("./5501.js");
var W = require("./5502.js");
var Y = require("./5503.js");
var K = require("./1161.js");
var z = require("./1957.js");
var q = require("./5504.js");
var X = require("./5505.js");
var Q = require("./1847.js");
var J = require("./5506.js");
var Z = require("./5507.js");
var $ = require("./5508.js");
var ee = require("./5509.js");
var te = require("./5510.js");
var ie = require("./5511.js");
var ne = require("./5512.js");
var oe = require("./5513.js");
var ae = require("./5514.js");
var se = require("./5515.js");
var re = require("./5516.js");
var le = require("./5517.js");
var ce = require("./5518.js");
var ue = require("./5519.js");
var de = require("./514.js");