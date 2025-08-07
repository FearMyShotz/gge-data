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
var g = require("./5480.js");
var C = require("./5481.js");
var _ = require("./5482.js");
var m = require("./5483.js");
var f = require("./5484.js");
var O = require("./5485.js");
var E = require("./1955.js");
var y = require("./1902.js");
var b = require("./5487.js");
var D = require("./1844.js");
var I = require("./5488.js");
var T = require("./5489.js");
var v = require("./5490.js");
var S = require("./4.js");
var A = require("./83.js");
var L = require("./99.js");
var P = function (e) {
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
        var e = parseInt(this._additionalInformation[0]);
        if (e == l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
          return c.Localize.text("message_header_underworld_start");
        } else if (e == l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
          return c.Localize.text("message_header_seaqueen_start");
        } else if (e == l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
          return c.Localize.text("message_header_invasion_start");
        } else if (e == l.EventConst.EVENTTYPE_ISLAND_KINGDOM) {
          return c.Localize.text("message_eiland_reset_header");
        } else if (e == l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) {
          return c.Localize.text("dialog_alienInvasion_message_header");
        } else if (e == l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE) {
          return c.Localize.text("dialog_redAlienInvasion_message_header");
        } else if (e == l.EventConst.EVENTTYPE_SAMURAI_INVASION) {
          return c.Localize.text("dialog_samuraiInvasion_message_header");
        } else if (e == l.EventConst.EVENTTYPE_FACTION_INVASION) {
          return c.Localize.text("message_header_berimondInvasion_start");
        } else if (e == l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
          return c.Localize.text("message_header_seasonLeague_start");
        } else if (e == l.EventConst.EVENTTYPE_TEMPSERVER) {
          return c.Localize.text("message_header_tempServer_start");
        } else if (e == l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND) {
          return c.Localize.text("event_title_113");
        } else if (e == l.EventConst.EVENTTYPE_DONATION) {
          return c.Localize.text("dialog_startDonationEvent_title");
        } else {
          return c.Localize.text("message_header_thornking_start");
        }
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
  MessageSpecialEventVO.prototype.parseSender = function () {
    return c.Localize.text("system");
  };
  Object.defineProperty(MessageSpecialEventVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subtypeEvent) {
        case s.MessageConst.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION:
          var e = parseInt(this._additionalInformation[0]);
          var t = parseInt(this._additionalInformation[1]);
          return new A.DialogInfoVO(z.CastleFactionEventLMSDialog, new D.CastleFactionEventLMSDialogProperties(e, t));
        case s.MessageConst.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED:
          var i = parseInt(this._additionalInformation[0]);
          return new A.DialogInfoVO(q.CastleFactionEventLostLastCampDialog, new b.CastleFactionDialogProperties(i));
        case s.MessageConst.SPECIAL_ID_BAEM_AWARD:
        case s.MessageConst.SPECIAL_ID_BAEM_AWARD_FINAL:
        case s.MessageConst.SPECIAL_ID_EUROPEAN_AWARD:
        case s.MessageConst.SPECIAL_ID_GAMEX_AWARD:
        case s.MessageConst.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD:
          return new A.DialogInfoVO(w.CastleAwardDialog, new f.CastleAwardDialogProperties(this));
        case s.MessageConst.SPECIAL_ID_EGA_100_RUBIES:
        case s.MessageConst.SPECIAL_ID_EGA_150_RUBIES:
          return new A.DialogInfoVO(F.CastleAwardWithRewardWinDialog);
        case s.MessageConst.SPECIAL_ID_EGA_500_RUBIES_FORUM:
          return new A.DialogInfoVO(B.CastleAwardWithRewardDialog);
        case s.MessageConst.SPECIAL_ID_TURKEY_MESSAGE:
          return new A.DialogInfoVO(U.CastleIngameMessageTurkeyDialog);
        case s.MessageConst.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE:
          return new A.DialogInfoVO(k.CastleIngameMessageDealsDayDialog);
        case s.MessageConst.SPECIAL_ID_TERMS_AND_CONDITIONS:
          return new A.DialogInfoVO(H.CastleTermsAndConditionsChangedDialog);
        case s.MessageConst.SPECIAL_ID_VIP_INFORMATION:
          var n = parseInt(this._additionalInformation[0]);
          return new A.DialogInfoVO(V.CastleVIPMessageDialog, new _.CastleVIPMessageDialogProperties(n));
        case s.MessageConst.SPECIAL_ID_WORLD_CUP:
          return new A.DialogInfoVO(te.CastleWorldCupFinisher, new T.CastleWorldCupFinisherProperties(this._additionalInformation));
        case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START:
          var r = parseInt(this._additionalInformation[0]);
          if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_THORNKING) && r == l.EventConst.EVENTTYPE_CRUSADE_THORNKING) {
            return new A.DialogInfoVO($.CastleThornkingEventTeaserDialog, new I.CastleSeasonEventTeaserDialogProperties(a.TreasureMapsConst.MAP_ID_THORNKING_EASY));
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) && r == l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
            return new A.DialogInfoVO(Z.CastleSeaQueenEventTeaserDialog);
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) && r == l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD) {
            return new A.DialogInfoVO(ee.CastleUnderworldEventTeaserDialog, new I.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) && r == l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
            return new A.DialogInfoVO(Q.CastleAllianceNomadInvasionEventTeaserDialog);
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) && r == l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) {
            return new A.DialogInfoVO(Y.CastleAllianceAlienInvasionEventTeaserDialog);
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE) && r == l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE) {
            return new A.DialogInfoVO(K.CastleRedAllianceAlienInvasionEventTeaserDialog);
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_SAMURAI_INVASION) && r == l.EventConst.EVENTTYPE_SAMURAI_INVASION) {
            return new A.DialogInfoVO(J.CastleSamuraiInvasionEventTeaserDialog);
          } else if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_FACTION_INVASION) && r == l.EventConst.EVENTTYPE_FACTION_INVASION) {
            return new A.DialogInfoVO(X.CastleFactionInvasionEventTeaserDialog);
          } else if (r == l.EventConst.EVENTTYPE_ISLAND_KINGDOM) {
            return new A.DialogInfoVO(re.CastleStormIslandsStartTeaserDialog, new se.CastleStormIslandsStartTeaserDialogProperties(this));
          } else if (r == l.EventConst.EVENTTYPE_TEMPSERVER && h.TempServerHelper.tmpServerEvent) {
            return new A.DialogInfoVO(ne.CastleTempServerStartDialog);
          } else if (r == l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND && d.ABGHelper.abgEvent) {
            return new A.DialogInfoVO(oe.CastleAllianceBattlegroundMessageDialog);
          } else if (r == l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE && S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE)) {
            return new A.DialogInfoVO(W.SeasonLeagueStartDialog);
          } else if (r == l.EventConst.EVENTTYPE_DONATION && S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_DONATION)) {
            return new A.DialogInfoVO(y.DonationEventStartDialog);
          } else {
            return new A.DialogInfoVO(M.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
          }
        case s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_UPDATE:
          if (this._additionalInformation.length > 0 && this._additionalInformation[0] == l.EventConst.EVENTTYPE_TEMPSERVER_MULTIPLIER) {
            return new A.DialogInfoVO(ie.CastleTempServerMultiplierDialog, new v.CastleTempServerMultiplierDialogProperties(this._additionalInformation[1], this._additionalInformation[2]));
          }
          break;
        case s.MessageConst.SPECIAL_ID_UNDERWORLD:
          if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD)) {
            return new A.DialogInfoVO(ee.CastleUnderworldEventTeaserDialog, new I.CastleSeasonEventTeaserDialogProperties(this._subtypeEvent));
          } else {
            return new A.DialogInfoVO(M.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
          }
        case s.MessageConst.SPECIAL_ID_THORNKING:
          if (S.CastleModel.specialEventData.isEventActive(l.EventConst.EVENTTYPE_CRUSADE_THORNKING)) {
            return new A.DialogInfoVO($.CastleThornkingEventTeaserDialog, new I.CastleSeasonEventTeaserDialogProperties(a.TreasureMapsConst.MAP_ID_THORNKING_HARD));
          } else {
            return new A.DialogInfoVO(M.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_information"), c.Localize.text("alert_eventendet")));
          }
        case s.MessageConst.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED:
          return new A.DialogInfoVO(j.CastleMessageTipDialog, new E.CastleMessageTipDialogProperties(null, 13, 5));
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_1:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_2:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_3:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2:
        case s.MessageConst.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3:
          return new A.DialogInfoVO(j.CastleMessageTipDialog, new E.CastleMessageTipDialogProperties(null, this._subtypeEvent, 6));
        case s.MessageConst.SPECIAL_ID_MONUMENT:
          return new A.DialogInfoVO(R.CastleResetLandmarkMessageDialog, new C.CastleResetMonumentDialogProperties());
        case s.MessageConst.SPECIAL_ID_LABORATORY:
          return new A.DialogInfoVO(R.CastleResetLandmarkMessageDialog, new g.CastleResetLaboratoryDialogProperties());
        case s.MessageConst.SPECIAL_ID_METROPOLIS:
        case s.MessageConst.SPECIAL_ID_KINGSTOWER:
          return new A.DialogInfoVO(M.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(p.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_title"), p.SpecialServerHelper.checkTextIDForSkinText("dialog_message_resetKingstower_desc")));
        case s.MessageConst.SPECIAL_ID_ANNOUNCE_INSTANCE:
          return new A.DialogInfoVO(G.CastleNewServerAnnounceDialog, new O.CastleNewServerAnnounceDialogProperties(u.int(this._additionalInformation[0]), u.int(this._additionalInformation[1]), u.int(this._additionalInformation[2])));
        case s.MessageConst.SPECIAL_ID_FAIR_PLAY_MESSAGE:
          return new A.DialogInfoVO(N.CastleFairPlayDialog);
        case s.MessageConst.SPECIAL_ID_ALCHEMIST_RETIREMENT:
          var L = this._additionalInformation.slice(0, 4);
          var P = u.int(this._additionalInformation[4]);
          return new A.DialogInfoVO(x.CastleAlchemistRetirementDialog, new m.CastleAlchemistRetirementDialogProperties(L, P));
        case s.MessageConst.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND:
          return new A.DialogInfoVO(ae.CastleTreasureFoundPieceDialog);
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(L.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpecialEventVO.prototype, "additionalIconName", {
    get: function () {
      if (this.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START || this.subtypeEvent == s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END) {
        var e = parseInt(this._additionalInformation[0]);
        if (e == l.EventConst.EVENTTYPE_ISLAND_KINGDOM) {
          return "CastleMessageIconsEiland";
        }
        if (e == l.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE) {
          return "CastleMessageIconsAlien";
        }
        if (e == l.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN) {
          return "CastleMessageIconsSeaQueen";
        }
        if (e == l.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE) {
          return "CastleMessageIconsRedAlien";
        }
        if (e == l.EventConst.EVENTTYPE_SAMURAI_INVASION) {
          return "CastleMessageIconsSamurai";
        }
        if (e == l.EventConst.EVENTTYPE_FACTION_INVASION) {
          return "CastleMessageIconsFactionInvasion";
        }
        if (e == l.EventConst.EVENTTYPE_TEMPSERVER) {
          return "CastleMessageIconsTempServer";
        }
        if (e == l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND) {
          return "CastleMessageIconsAllianceBattleground";
        }
        if (e == l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
          return "CastleMessageIconsSeasonLeague";
        }
        if (e == l.EventConst.EVENTTYPE_NOMADINVASION || e == l.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
          return "CastleMessageIconsNomad";
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
      Object.getOwnPropertyDescriptor(L.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpecialEventVO.prototype, "isVisible", {
    get: function () {
      return this.subtypeEvent != s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && this.subtypeEvent != s.MessageConst.SPECIAL_ID_SPECIAL_EVENT_END || parseInt(this._additionalInformation[0]) != l.EventConst.EVENTTYPE_TEMPSERVER && parseInt(this._additionalInformation[0]) != l.EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND || !this.isOnExcludedNetwork(o.EnvGlobalsHandler.globals.networkId) && !le.ClientConstABTests.isOnPolishServerInstance && !le.ClientConstABTests.isOnKoreanServerInstance;
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
}(L.AMessageVO);
exports.MessageSpecialEventVO = P;
var M = require("./38.js");
var R = require("./5491.js");
var V = require("./5492.js");
var x = require("./5493.js");
var w = require("./5494.js");
var B = require("./5495.js");
var F = require("./5496.js");
var N = require("./5497.js");
var k = require("./5498.js");
var U = require("./5499.js");
var G = require("./5500.js");
var H = require("./5501.js");
var j = require("./1161.js");
var W = require("./1956.js");
var Y = require("./5502.js");
var K = require("./5503.js");
var z = require("./1845.js");
var q = require("./5504.js");
var X = require("./5505.js");
var Q = require("./5506.js");
var J = require("./5507.js");
var Z = require("./5508.js");
var $ = require("./5509.js");
var ee = require("./5510.js");
var te = require("./5511.js");
var ie = require("./5512.js");
var ne = require("./5513.js");
var oe = require("./5514.js");
var ae = require("./5515.js");
var se = require("./5516.js");
var re = require("./5517.js");
var le = require("./513.js");