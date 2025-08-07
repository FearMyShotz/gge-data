Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = function () {
  function CastleMessageFactory() {}
  CastleMessageFactory.parseMessage = function (e, t) {
    var i;
    switch (parseInt(e[1])) {
      case n.MessageConst.MESSAGE_TYPE_PLAYER_GIFT:
        i = new P.MessagePlayerGift();
        break;
      case n.MessageConst.MESSAGE_TYPE_ATTACK_COUNT_THRESHOLD:
        i = new h.MessageAttackTheasholdVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_USER_IN:
      case n.MessageConst.MESSAGE_TYPE_USER_OUT:
      case n.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER:
        i = new j.MessageUserVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SPY_PLAYER:
        i = new F.MessageSpyPlayerVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_PATCH_NOTES:
        i = new C.MessageChangelistVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SPY_NPC:
        i = new B.MessageSpyNpcVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_CONQUERABLE_AREA:
        i = new _.MessageConquerableAreaVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_BATTLE_LOG:
        i = new g.MessageBattleLogVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ALLIANCE_REQUEST:
        i = new u.MessageAllianceRequestVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ALLIANCE_WAR:
        i = new d.MessageAllianceWarVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ALLIANCE_BOOKMARK:
        i = new c.MessageAllianceBookmarkVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ATTACK_CANCELLED:
        i = new p.MessageAttackCancelledVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SPY_CANCELLED:
        i = new w.MessageSpyCancelledVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_STARVE_INFO:
      case n.MessageConst.MESSAGE_TYPE_STARVE_VILLAGE_LOST:
      case n.MessageConst.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST:
        i = new N.MessageStarveInfoVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_BUILDING_DISABLED:
        i = new Y.MessageBuildingDisabledInfoVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_MARKET_CARRIAGE_ARRIVED:
        i = new A.MessageMarketCarriageArrivedVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ABO:
        i = new s.MessageAboVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_PAYMENT_DOPPLER:
        i = new L.MessagePaymentDopplerVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_REBUY:
        i = new R.MessageRebuyVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SPECIAL_EVENT:
        i = new x.MessageSpecialEventVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_TOURNAMENT_OVER:
        i = new G.MessageTournamentOverVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ISLAND_KINGDOM_TITLE:
        i = new f.MessageEilandTitleVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ISLAND_KINGDOM_REWARD:
        i = new m.MessageEilandRewardVO();
        break;
      case n.MessageConst.MESSAGE_RUIN_INFO:
        i = new V.MessageRuinInfoVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_THANKY_YOU_PACKAGE:
        i = new U.MessageThankYouPackageVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_HIGHSCORE_BONUS:
        i = new S.MessageHighscoreBonusVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_PRIVATE_OFFER:
        i = new M.MessagePrivateOfferVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FRIEND_INVITE_TEASER:
        i = new D.MessageFriendInviteTeaserVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FIND_A_FRIEND:
        i = new E.MessageFindAFriendVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FRIEND_JOIN_THE_GAME:
        i = new I.MessageFriendJoinTheGameVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FRIEND_REACHED_A_LEVEL:
        i = new T.MessageFriendReachedALevelVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FRIEND_BOUGHT_RUBIES:
        i = new b.MessageFriendInviteSinglePaymentVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_X_FRIENDS_BOUGHT_RUBIES:
        i = new y.MessageFriendInviteMultiplePaymentVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_EVENT_ANNOUNCEMENT:
        i = new O.MessageEventAnnouncementVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_USER_SURVEY:
        i = new H.MessageUserSurveyVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_FRIEND_INVITE:
      case n.MessageConst.MESSAGE_TYPE_NEW_FRIENDSHIP:
        i = new v.MessageFriendRequestVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_TEXT_ID:
        i = new a.CastleMessageInfoVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SUBSCRIPTION:
        i = new k.MessageSubscriptionVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_SYSTEM:
        i = new W.MessageSystemVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_POPUP:
        i = new K.MessagePopupVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_DOWNTIME_STATUS:
        i = new z.MessageDowntimeStatusVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ATTACK_ADVISOR_FAILURE:
        i = new r.MessageAdvisorFailureVO();
        break;
      case n.MessageConst.MESSAGE_TYPE_ATTACK_ADVISOR_SUMMARY:
        i = new l.MessageAdvisorSummaryVO();
        break;
      default:
        i = new j.MessageUserVO();
    }
    i.loadFromParamArray(e, t);
    return i;
  };
  return CastleMessageFactory;
}();
exports.CastleMessageFactory = o;
var a = require("./5398.js");
var s = require("./5401.js");
var r = require("./5404.js");
var l = require("./5407.js");
var c = require("./5410.js");
var u = require("./5411.js");
var d = require("./5413.js");
var p = require("./5416.js");
var h = require("./5419.js");
var g = require("./5420.js");
var C = require("./5431.js");
var _ = require("./5436.js");
var m = require("./5439.js");
var f = require("./5444.js");
var O = require("./5451.js");
var E = require("./5452.js");
var y = require("./5453.js");
var b = require("./5454.js");
var D = require("./5455.js");
var I = require("./5456.js");
var T = require("./5457.js");
var v = require("./5458.js");
var S = require("./5463.js");
var A = require("./5465.js");
var L = require("./5469.js");
var P = require("./5471.js");
var M = require("./5474.js");
var R = require("./5477.js");
var V = require("./5480.js");
var x = require("./5481.js");
var w = require("./5521.js");
var B = require("./5522.js");
var F = require("./5523.js");
var N = require("./5530.js");
var k = require("./5533.js");
var U = require("./5537.js");
var G = require("./5540.js");
var H = require("./1111.js");
var j = require("./1960.js");
var W = require("./5545.js");
var Y = require("./5546.js");
var K = require("./5550.js");
var z = require("./1163.js");