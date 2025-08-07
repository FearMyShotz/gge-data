var i = function () {
  function AlchemistConst() {}
  AlchemistConst.HOURS_$LI$ = function () {
    if (AlchemistConst.HOURS == null) {
      AlchemistConst.HOURS = 3600;
    }
    return AlchemistConst.HOURS;
  };
  AlchemistConst.POTION_TO_INGREDIENT_TO_COST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_INGREDIENT_TO_COST == null) {
      AlchemistConst.POTION_TO_INGREDIENT_TO_COST = [[15, 2, 1, 0], [20, 13, 5, 0], [0, 15, 10, 1], [35, 40, 0, 3], [50, 0, 24, 5]];
    }
    return AlchemistConst.POTION_TO_INGREDIENT_TO_COST;
  };
  AlchemistConst.POTION_TO_BOOST_$LI$ = function () {
    if (AlchemistConst.POTION_TO_BOOST == null) {
      AlchemistConst.POTION_TO_BOOST = [0.2, 0.2, 0.5, 1, 1.5];
    }
    return AlchemistConst.POTION_TO_BOOST;
  };
  AlchemistConst.POTION_TO_DURATION_$LI$ = function () {
    if (AlchemistConst.POTION_TO_DURATION == null) {
      AlchemistConst.POTION_TO_DURATION = [AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 36, AlchemistConst.HOURS_$LI$() * 24, AlchemistConst.HOURS_$LI$() * 46, AlchemistConst.HOURS_$LI$() * 36];
    }
    return AlchemistConst.POTION_TO_DURATION;
  };
  AlchemistConst.getPotionDuration = function (e) {
    return AlchemistConst.POTION_TO_DURATION_$LI$()[e];
  };
  AlchemistConst.getPotionEffect = function (e) {
    return AlchemistConst.POTION_TO_BOOST_$LI$()[e];
  };
  return AlchemistConst;
}();
i.POTION_COUNT = 5;
i.INGREDIENT_COUNT = 4;
i.MAX_INGREDIENTS_PER_DROP = 3;
i.INGREDIENTS_PER_POTION = 3;
i.RUBY_COST = 150;
exports.AlchemistConst = i;
i.__class = "AlchemistConst";
var a = function () {
  function AllianceBattleGroundConst() {}
  AllianceBattleGroundConst.calculateAllianceTowerPointsToLoot = function (e, t, n, i) {
    if (n === 0) {
      return e;
    } else {
      return (e + t * (Math.pow(2, n) | 0)) * i;
    }
  };
  AllianceBattleGroundConst.calculateEffectStrength = function (e, t, n) {
    return t + n * (e - 1);
  };
  AllianceBattleGroundConst.calculateBuffCosts = function (e, t, n) {
    var i = 0;
    for (var a = e + 1; a <= t; ++a) {
      i += a <= 45 ? a * n : n * 45 * Math.pow((a - 41) / 100 + 1, a - 45);
    }
    return i = Math.round(i);
  };
  return AllianceBattleGroundConst;
}();
a.NORMAL_SERVER_EVENT_JOIN_LEVEL = 30;
a.HIGHSCORE_ALLIANCE_COLLECTOR = "AllianceCollector";
a.HIGHSCORE_ALLIANCE_TOWER = "AllianceTower";
a.MAX_CONQUERABLE_METROPOLIS = 5;
a.MAX_CONQUERABLE_KINGSTOWER = 5;
a.MAX_ALLOWED_TOWER_CONNECTED_PLAYERS = 5;
a.JOIN_PERIOD_DAYS = 2;
exports.AllianceBattleGroundConst = a;
a.__class = "AllianceBattleGroundConst";
var s = function () {
  function AllianceConst() {}
  AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN_$LI$ = function () {
    if (AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN == null) {
      AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN = 10800;
    }
    return AllianceConst.ALLIANCE_HELP_REPAIR_COOLDOWN;
  };
  AllianceConst.MIN_XP_$LI$ = function () {
    if (AllianceConst.MIN_XP == null) {
      AllianceConst.MIN_XP = se.getXPFromLevel(AllianceConst.MIN_LEVEL);
    }
    return AllianceConst.MIN_XP;
  };
  AllianceConst.MIN_MEMBERSHIP_FOR_DONATE_$LI$ = function () {
    if (AllianceConst.MIN_MEMBERSHIP_FOR_DONATE == null) {
      AllianceConst.MIN_MEMBERSHIP_FOR_DONATE = 86400;
    }
    return AllianceConst.MIN_MEMBERSHIP_FOR_DONATE;
  };
  AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION == null) {
      AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION = 172800;
    }
    return AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION;
  };
  AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST == null) {
      AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST = 180;
    }
    return AllianceConst.DIPLOMACY_AUTO_WAR_PROTECTION_TEST;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST = 300;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME = 172800;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION = 604800;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION;
  };
  AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST_$LI$ = function () {
    if (AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST == null) {
      AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST = 420;
    }
    return AllianceConst.DIPLOMACY_REQUEST_EXPIRATION_TEST;
  };
  AllianceConst.LOWEST_RANK_$LI$ = function () {
    if (AllianceConst.LOWEST_RANK == null) {
      AllianceConst.LOWEST_RANK = AllianceConst.RANK_APPLICANT;
    }
    return AllianceConst.LOWEST_RANK;
  };
  AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET_$LI$ = function () {
    if (AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET == null) {
      AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET = 3600;
    }
    return AllianceConst.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET;
  };
  AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET_$LI$ = function () {
    if (AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET == null) {
      AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET = 86340;
    }
    return AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET;
  };
  AllianceConst.isAllianceBookmark = function (e) {
    return e >= AllianceConst.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK;
  };
  AllianceConst.MIN_RANK_FORUM_ADMIN_$LI$ = function () {
    if (AllianceConst.MIN_RANK_FORUM_ADMIN == null) {
      AllianceConst.MIN_RANK_FORUM_ADMIN = AllianceConst.RANK_GENERAL;
    }
    return AllianceConst.MIN_RANK_FORUM_ADMIN;
  };
  AllianceConst.mayDeclareWar = function (e, t) {
    return e > AllianceConst.MAX_LEVEL_FOR_THIS_ALLIANCE || t - e <= AllianceConst.MAX_DIFFERENCE_TO_THAT_ALLIANCE;
  };
  AllianceConst.getRankingGroupFromRank = function (e) {
    switch (e) {
      case AllianceConst.RANK_LEADER:
      case AllianceConst.RANK_COLEADER:
        return AllianceConst.RANKING_GROUP_LEADER;
      case AllianceConst.RANK_MARSHAL:
      case AllianceConst.RANK_TREASURER:
      case AllianceConst.RANK_DIPLOMAT:
      case AllianceConst.RANK_RECRUITER:
      case AllianceConst.RANK_GENERAL:
        return AllianceConst.RANKING_GROUP_GENERAL;
      case AllianceConst.RANK_SERGEANT:
        return AllianceConst.RANKING_GROUP_SERGEANT;
      case AllianceConst.RANK_MEMBER:
        return AllianceConst.RANKING_GROUP_MEMBER;
      case AllianceConst.RANK_APPLICANT:
        return AllianceConst.RANKING_GROUP_APPLICANT;
      default:
        return -1;
    }
  };
  AllianceConst.hasHigherRank = function (e, t) {
    return AllianceConst.getRankingGroupFromRank(e) < AllianceConst.getRankingGroupFromRank(t) || e === AllianceConst.RANK_LEADER;
  };
  AllianceConst.hasAdminRightsForTopicAndAnswers = function (e, t) {
    return e <= AllianceConst.MIN_RANK_FORUM_ADMIN_$LI$() && AllianceConst.hasHigherRank(e, t);
  };
  AllianceConst.TYPE_TEMP_BUFFS_$LI$ = function () {
    if (AllianceConst.TYPE_TEMP_BUFFS == null) {
      AllianceConst.TYPE_TEMP_BUFFS = [AllianceConst.TYPE_TEMP_ATTACK_POWER_BOOST, AllianceConst.TYPE_TEMP_DEFENSE_POWER_BOOST, AllianceConst.TYPE_TEMP_GLORY_BOOST, AllianceConst.TYPE_TEMP_DEFENSE_SPEED_BOOST, AllianceConst.TYPE_COOLDOWN_REDUCTION_NOMADS, AllianceConst.TYPE_COOLDOWN_REDUCTION_KHAN, AllianceConst.TYPE_RAGE_POINT_BOOST, AllianceConst.TYPE_INFLUENCE_POINT_BOOST, AllianceConst.TYPE_ALIEN_ATTACK_BOOST, AllianceConst.TYPE_DAIMYO_ATTACK_BOOST, AllianceConst.TYPE_KHAN_DEFENSE_BOOST, AllianceConst.TYPE_HEALING_SPEED_BOOST];
    }
    return AllianceConst.TYPE_TEMP_BUFFS;
  };
  AllianceConst.mayDonateC2 = function (e, t) {
    return t || e >= AllianceConst.MIN_LEVEL_FOR_DONATE_C2;
  };
  AllianceConst.FAME_REDUCE_INTERVAL_$LI$ = function () {
    if (AllianceConst.FAME_REDUCE_INTERVAL == null) {
      AllianceConst.FAME_REDUCE_INTERVAL = 86400;
    }
    return AllianceConst.FAME_REDUCE_INTERVAL;
  };
  AllianceConst.FAME_REDUCE_INTERVAL_TEST_$LI$ = function () {
    if (AllianceConst.FAME_REDUCE_INTERVAL_TEST == null) {
      AllianceConst.FAME_REDUCE_INTERVAL_TEST = 600;
    }
    return AllianceConst.FAME_REDUCE_INTERVAL_TEST;
  };
  AllianceConst.APPLICATION_TIME_TO_LIVE_$LI$ = function () {
    if (AllianceConst.APPLICATION_TIME_TO_LIVE == null) {
      AllianceConst.APPLICATION_TIME_TO_LIVE = 259200;
    }
    return AllianceConst.APPLICATION_TIME_TO_LIVE;
  };
  AllianceConst.isValidAllianceID = function (e) {
    return e !== AllianceConst.NO_ALLIANCE_ID && e !== AllianceConst.MEMBER_IS_SEARCHING_ID;
  };
  return AllianceConst;
}();
s.ALLIANCE_HELP_RECRUITMENT = 1;
s.ALLIANCE_HELP_HEAL_UNIT = 2;
s.ALLIANCE_HELP_REPAIR = 3;
s.ALLIANCE_HELP_BUILD = 4;
s.ALLIANCE_HELP_LOOP_RECRUIT = 5;
s.ALLIANCE_HELP_RECRUITMENT_LIST = 6;
s.ALLIANCE_HELP_BUILD_MINLEVEL = 20;
s.FOUND_COST_C1 = 50;
s.FOUND_COST_C2 = 375;
s.FOUND_COST_WOOD = 100;
s.FOUND_COST_STONE = 50;
s.RENAME_COST_C2 = 10000;
s.EMBLEM_CHANGE_COST_C2 = 10000;
s.NAME_MAX_LENGTH = 15;
s.NAME_MIN_LENGTH = 5;
s.NAME_MIN_LENGTH_HARD = 2;
s.DESCRIPTION_MAX_LENGTH = 1000;
s.MAX_CHAT_MSG_LENGTH = 1300;
s.MAX_REPLIES_TO_TOPIC = 20;
s.MIN_FORUM_TEXT_LENGTH = 2;
s.MAX_REPLY_TEXT = 2000;
s.MAX_TOPIC_TEXT = 38;
s.MAX_TOPIC_COUNT = 20;
s.MIN_LEVEL = 3;
s.MIN_LEVEL_FOR_DONATE_C2 = 25;
s.X_FREE_RENAMES = 1;
s.DIPLOMACY_IN_WAR = 0;
s.DIPLOMACY_NEUTRAL = 1;
s.DIPLOMACY_SOFT_ALLIED = 2;
s.DIPLOMACY_REAL_ALLIED = 3;
s.DIPLOMACY_REQUEST = 0;
s.DIPLOMACY_CONFIRMED = 1;
s.DIPLOMACY_TRIBUT_MAX = 50;
s.DIPLOMACY_TRIBUT_MIN = 0;
s.DIPLOMACY_TRIBUT_TRANSPORT_COST = 0.5;
s.MEMBER_JOIN = 0;
s.MEMBER_LEFT = 1;
s.MEMBER_KICKED = 2;
s.MEMBER_NEW_LEADER = 3;
s.MEMBER_DEMOTE = 4;
s.MEMBER_PROMOTE = 5;
s.MEMBER_DONATE_C1 = 6;
s.MEMBER_DONATE_C2 = 7;
s.MEMBER_DONATE_RES = 8;
s.CHANGE_NAME = 9;
s.CHANGE_ANNOUNCEMENT = 10;
s.CHANGE_DESCRIPTION = 11;
s.UPGRADE = 12;
s.CHANGE_DIPLOMACY = 13;
s.GET_REQUEST_DIPLOMACY = 14;
s.SEND_REQUEST_DIPLOMACY = 15;
s.REFUSE_DIPLOMACY = 16;
s.LEVEL_UP = 17;
s.LEVEL_DOWN = 18;
s.DONATE_C1_BY_LEVELUP = 19;
s.DONATE_C2_BY_LEVELUP = 20;
s.DONATE_RES_BY_LEVELUP = 21;
s.MEMBER_EARN_FAME = 22;
s.CONQUERED_CAPITAL = 23;
s.LOST_CAPITAL = 24;
s.LOOSING_CAPITAL = 25;
s.TOURNAMENTREWARD = 26;
s.TOURNAMENTRANK = 27;
s.CONQUERED_METROPOL = 28;
s.LOST_METROPOL = 29;
s.LOOSING_METROPOL = 30;
s.MEMBER_INACTIVE_KICK = 31;
s.ALLIANCE_RANK_OF_LAST_ROUND = 32;
s.NEW_KINGS_NAME = 33;
s.PRIZE_C1_OF_LAST_ROUND = 35;
s.PRIZE_C2_OF_LAST_ROUND = 36;
s.STORM_ISLAND_ENDED = 37;
s.TRIBUT_PAY_C1 = 38;
s.TRIBUT_PAY_C2 = 39;
s.TRIBUT_PAY_RES = 40;
s.TRIBUT_GET_C1 = 41;
s.TRIBUT_GET_C2 = 42;
s.TRIBUT_GET_RES = 43;
s.ACTIVATE_TEMP_BUFF = 44;
s.EXTEND_TEMP_BUFF = 45;
s.ABANDONED_CAPITAL = 46;
s.ABANDONED_METROPOL = 47;
s.ALLIANCE_FOUNDED = 48;
s.FOUNDED_NOBLE_HOUSE = 49;
s.SET_EMBLEM = 50;
s.KING_CONFERED_ISLAND_TITLE = 56;
s.CAPITAL_OWNER_JOINED = 57;
s.METROPOLIS_OWNER_JOINED = 58;
s.REWARD_C1 = 59;
s.REWARD_C2 = 60;
s.ALLIANCE_BATTLE_GROUND_OWNED_TOWER_DEFEATED = 61;
s.ALLIANCE_BATTLE_GROUND_MALUS_INCREASED = 62;
s.ALLIANCE_BATTLE_GROUND_POINTS_GAINED = 63;
s.ALLIANCE_BATTLE_GROUND_MALUS_RESET = 64;
s.DAIMYO_ALLIANCE_CASTLE_CONTRACT_COMPLETED = 65;
s.DAIMYO_ALLIANCE_TOWNSHIP_CONTRACT_COMPLETED = 66;
s.RANK_LEADER = 0;
s.RANK_COLEADER = 1;
s.RANK_MARSHAL = 2;
s.RANK_TREASURER = 3;
s.RANK_DIPLOMAT = 4;
s.RANK_RECRUITER = 5;
s.RANK_GENERAL = 6;
s.RANK_SERGEANT = 7;
s.RANK_MEMBER = 8;
s.RANK_APPLICANT = 9;
s.RANKING_GROUP_LEADER = 0;
s.RANKING_GROUP_GENERAL = 1;
s.RANKING_GROUP_SERGEANT = 2;
s.RANKING_GROUP_MEMBER = 3;
s.RANKING_GROUP_APPLICANT = 4;
s.RIGHT_HANDLE_DEPUTY = 0;
s.RIGHT_RENAME = 1;
s.RIGHT_DELETE = 2;
s.RIGHT_NEW_LEADER = 3;
s.RIGHT_HANDLE_GENERAL = 4;
s.RIGHT_HANDLE_SEAGANT = 5;
s.RIGHT_DESCRIPTION = 6;
s.RIGHT_DIPLOMACY = 7;
s.RIGHT_UPGRADE = 8;
s.RIGHT_INVITE = 9;
s.RIGHT_KICK_MEMBER = 10;
s.RIGHT_ANNOUNCEMENT = 11;
s.RIGHT_NEWSLETTER = 12;
s.RIGHT_AUTO_WAR = 13;
s.RIGHT_ACCEPT_APPLICATIONS = 14;
s.RIGHT_MANAGE_BOOKMARKS = 15;
s.RIGHT_EMBLEM = 16;
s.RIGHT_CHANGE_LANGUAGE = 18;
s.MAX_BANNED_PLAYERS = 20;
s.BOOKMARK_TYPE_PLAYER_ENEMY = 0;
s.BOOKMARK_TYPE_PLAYER_FRIEND = 1;
s.BOOKMARK_TYPE_ALLIANCE_FREE_ATTACK = 2;
s.BOOKMARK_TYPE_ALLIANCE_DEFEND = 3;
s.BOOKMARK_TYPE_ALLIANCE_ATTACK_ORDER = 4;
s.ALLIANCE_BOOKMARK_MAX_ENTRIES = 20;
s.ALLIANCE_RANKING_GROUPS_COUNT = 5;
s.HIGHEST_RANK_WITHOUT_ADMIN_RIGHTS = 7;
s.MAX_LEVEL_FOR_THIS_ALLIANCE = 5;
s.MAX_DIFFERENCE_TO_THAT_ALLIANCE = 5;
s.ONLINESTATE_ONLINE = 0;
s.ONLINESTATE_LAST_12_HOURS = 1;
s.ONLINESTATE_LAST_48_HOURS = 2;
s.ONLINESTATE_LAST_1_WEEK = 3;
s.ONLINESTATE_LONG_AGO = 4;
s.TYPE_MEMBERS = 0;
s.TYPE_DEFENSE_SPEED_BOOST = 1;
s.TYPE_MARKET_SPEED_BOOST = 2;
s.TYPE_DEPOSIT_BONUS = 3;
s.TYPE_MARAUDER_BONUS = 4;
s.TYPE_ATTACK_SPEED_BOOST = 5;
s.TYPE_FORGE_UPGRADE = 6;
s.TYPE_TEMP_ATTACK_POWER_BOOST = 7;
s.TYPE_TEMP_DEFENSE_POWER_BOOST = 8;
s.TYPE_TEMP_GLORY_BOOST = 9;
s.TYPE_TEMP_DEFENSE_SPEED_BOOST = 10;
s.TYPE_NOBLE_HOUSE = 11;
s.TYPE_RAGE_POINT_BOOST = 12;
s.TYPE_COOLDOWN_REDUCTION_KHAN = 13;
s.TYPE_COOLDOWN_REDUCTION_NOMADS = 14;
s.TYPE_INFLUENCE_POINT_BOOST = 15;
s.TYPE_ALIEN_ATTACK_BOOST = 16;
s.TYPE_DAIMYO_ATTACK_BOOST = 17;
s.TYPE_KHAN_DEFENSE_BOOST = 18;
s.TYPE_HEALING_SPEED_BOOST = 19;
s.TYPE_COOLDOWN_REDUCTION_SAMURAI_CAMP = 20;
s.TYPE_COOLDOWN_REDUCTION_DAIYMO = 21;
s.FAME_CAP = 9000000000000000000;
s.DAILY_FAME_LOSS = 0.005;
s.REAL_ALLIED_CAP = 5;
s.SOFT_ALLIED_CAP = 5;
s.NO_ALLIANCE_ID = -1;
s.MEMBER_IS_SEARCHING_ID = -2;
s.MAX_APPLICATION_COUNT = 20;
s.LOG_SIZE_CHAT = 50;
s.LOG_SIZE_NOTIFICATIONS = 200;
exports.AllianceConst = s;
s.__class = "AllianceConst";
var r = function () {
  function AllianceForgeConst() {}
  AllianceForgeConst.canUseRelicAllianceForge = function (e) {
    return e >= AllianceForgeConst.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE;
  };
  AllianceForgeConst.calculateC1CostForSoftCurrencyRelicAllianceForge = function (e) {
    return Math.pow(1.5, e) * 60000 | 0;
  };
  AllianceForgeConst.calculateC2CostForHardCurrencyRelicAllianceForge = function (e) {
    return Math.pow(1.25, e) * 10000 | 0;
  };
  return AllianceForgeConst;
}();
r.TOMBOLA_ID_SOFT_CURRENCY_FORGE = -1;
r.TOMBOLA_ID_HARD_CURRENCY_FORGE = -2;
r.MINIMUM_LEGEND_LEVEL_FOR_RELIC_ALLIANCE_FORGE = 1;
exports.AllianceForgeConst = r;
r.__class = "AllianceForgeConst";
var o = function () {
  return function AllianceInvasionConst() {};
}();
o.PLAYER_PARTICIPATION_RAGE_THRESHOLD = 1;
o.DEFAULT_ALLIANCE_CAMP_LEAGUE_ID = 1;
o.ALLIANCE_INVASION_LORD_LOOK_ID = 1002;
o.REQUIRED_DEFEATS_FOR_DEFENSE_SETUP_CHANGE = 65;
exports.AllianceInvasionConst = o;
o.__class = "AllianceInvasionConst";
var l = function () {
  return function ArtifactConst() {};
}();
l.SKIN_TRAVELLING_KNIGHTS = 1;
l.SKIN_RENEGADE_ICE_KINGDOM = 2;
l.SKIN_RENEGADE_DESERT_KINGDOM = 3;
l.SKIN_RENEGADE_VOLCANO_KINGDOM = 4;
l.SKIN_NEW_KING = 5;
exports.ArtifactConst = l;
l.__class = "ArtifactConst";
var u = function () {
  return function AttackAdvisorConst() {};
}();
u.ADVISOR_TYPE_NOMAD = 1;
u.FAILURE_GENERIC = 0;
u.FAILURE_NOT_ENOUGH_CURRENCY_1 = 1;
u.FAILURE_NOT_ENOUGH_CURRENCY_2 = 2;
u.FAILURE_NOT_ENOUGH_PEGASUS_TICKETS = 3;
u.FAILURE_NOT_ENOUGH_UNITS_OR_TOOLS = 4;
u.FAILURE_NOT_ENOUGH_TIME_SKIPS = 5;
exports.AttackAdvisorConst = u;
u.__class = "AttackAdvisorConst";
var c = function () {
  return function AutoSkipCooldownConst() {};
}();
c.AUTO_SKIP_TYPE_OFF = 0;
c.AUTO_SKIP_TYPE_MINUTE_SKIP = 1;
c.AUTO_SKIP_TYPE_C2 = 2;
exports.AutoSkipCooldownConst = c;
c.__class = "AutoSkipCooldownConst";
var _ = function () {
  function BeggingKnightsConst() {}
  BeggingKnightsConst.calculateRequirement = function (e, t) {
    return Math.max(1, Math.round(e * t));
  };
  BeggingKnightsConst.calculateRewardAmount = function (e, t) {
    var n = t / 100 * e;
    return Math.max(1, Math.round(n));
  };
  return BeggingKnightsConst;
}();
exports.BeggingKnightsConst = _;
_.__class = "BeggingKnightsConst";
var d = function () {
  function BoosterConst() {}
  BoosterConst.REMINDER_LEAD_TIME_SECONDS_$LI$ = function () {
    if (BoosterConst.REMINDER_LEAD_TIME_SECONDS == null) {
      BoosterConst.REMINDER_LEAD_TIME_SECONDS = 86400;
    }
    return BoosterConst.REMINDER_LEAD_TIME_SECONDS;
  };
  BoosterConst.TAX_BRIBE_DURATION_$LI$ = function () {
    if (BoosterConst.TAX_BRIBE_DURATION == null) {
      BoosterConst.TAX_BRIBE_DURATION = 604800;
    }
    return BoosterConst.TAX_BRIBE_DURATION;
  };
  BoosterConst.INSTRUCTOR_DURATION_$LI$ = function () {
    if (BoosterConst.INSTRUCTOR_DURATION == null) {
      BoosterConst.INSTRUCTOR_DURATION = 604800;
    }
    return BoosterConst.INSTRUCTOR_DURATION;
  };
  BoosterConst.MARAUDER_DURATION_$LI$ = function () {
    if (BoosterConst.MARAUDER_DURATION == null) {
      BoosterConst.MARAUDER_DURATION = 604800;
    }
    return BoosterConst.MARAUDER_DURATION;
  };
  BoosterConst.OVERSEER_DURATION_$LI$ = function () {
    if (BoosterConst.OVERSEER_DURATION == null) {
      BoosterConst.OVERSEER_DURATION = 604800;
    }
    return BoosterConst.OVERSEER_DURATION;
  };
  BoosterConst.PRIME_SALE_BOOSTER_IDS_$LI$ = function () {
    if (BoosterConst.PRIME_SALE_BOOSTER_IDS == null) {
      BoosterConst.PRIME_SALE_BOOSTER_IDS = [BoosterConst.OVERSEER_WOOD, BoosterConst.OVERSEER_STONE, BoosterConst.OVERSEER_FOOD, BoosterConst.OVERSEER_HONEY, BoosterConst.OVERSEER_MEAD, BoosterConst.OVERSEER_BEEF, BoosterConst.MARAUDER, BoosterConst.TAX, BoosterConst.INSTRUCTOR, BoosterConst.CARAVAN_OVERLOADER, BoosterConst.RETURNING_SPEED];
    }
    return BoosterConst.PRIME_SALE_BOOSTER_IDS;
  };
  return BoosterConst;
}();
d.OVERSEER_WOOD = 0;
d.OVERSEER_STONE = 1;
d.OVERSEER_FOOD = 2;
d.OVERSEER_HONEY = 3;
d.OVERSEER_MEAD = 4;
d.OVERSEER_BEEF = 5;
d.MARAUDER = 6;
d.TAX = 8;
d.INSTRUCTOR = 10;
d.CARAVAN_OVERLOADER = 11;
d.BUILDING_SKIP_DISCOUNT = 16;
d.GLORY_BOOST_ID = 17;
d.PERSONAL_GLORY_BOOST_ID = 18;
d.RETURNING_SPEED = 19;
d.KHAN_BOOST_ID = 20;
d.XP_BOOSTER_ID = 21;
d.SAMURA_TOKEN_BOOST_ID = 22;
d.LONGTERM_POINT_EVENT_BOOST_ID = 23;
d.GALLANTRY_POINTS_BOOST_ID = 24;
d.XP_BUILDING_BOOSTER_ID = 25;
d.ALLIANCE_COIN_BOOST_ID = 26;
d.RAGE_POINT_BOOST_ID = 27;
d.KHAN_MEDAL_BOOST_ID = 28;
d.REPUTATION_POINT_BOOST_ID = 29;
d.MIN_REBUY_FOR_DISCOUNT = 1;
d.DISCOUNT_FACTOR = 0.1;
d.REBUY_TRACKING = " rebuy";
d.TAX_BRIBE_COSTS_C2 = 750;
d.TAX_BRIBE_BOOST = 0.2;
d.INSTRUCTOR_CUSTOM_ID = "instructor";
d.INSTRUCTOR_BOOST = 0.8;
d.INSTRUCTOR_COST_C2 = 990;
d.MARAUDER_COST_C2 = 990;
d.MARAUDER_BOOST = 0.9;
d.OVERSEER_COST_C2 = 625;
d.OVERSEER_BOOST = 25;
d.OVERSEER_BEEF_COST_C2 = 4900;
d.OVERSEER_BEEF_BOOST = 125;
d.PERMANENT_BOOSTER_DURATION = 2147483647;
exports.BoosterConst = d;
d.__class = "BoosterConst";
var m = function () {
  function ColossusConst() {}
  ColossusConst.calcResourcePointsForResources = function (e, t) {
    return Math.round(e) * ColossusConst.WOOD_POINTS + Math.round(t) * ColossusConst.STONE_POINTS;
  };
  ColossusConst.getResourcePointsForCoins = function (e) {
    return ColossusConst.COIN_POINTS * Math.round(e);
  };
  ColossusConst.getDecoPoints = function (e) {
    if (e < ColossusConst.MIN_POINTS) {
      return 0;
    }
    var t = Math.log(e * 2.2 + 319) * 233 - 1320;
    if (t < 3000) {
      return Math.round(t) | 0;
    } else {
      return Math.round(t / 10 + 2700) | 0;
    }
  };
  return ColossusConst;
}();
m.COIN_POINTS = 1;
m.WOOD_POINTS = 2;
m.STONE_POINTS = 3;
m.MIN_POINTS = 50;
exports.ColossusConst = m;
m.__class = "ColossusConst";
var h = function () {
  function CombatConst() {}
  CombatConst.ITEMS_LEFTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_LEFTWALL_TOOLS == null) {
      CombatConst.ITEMS_LEFTWALL_TOOLS = [2, 2];
    }
    return CombatConst.ITEMS_LEFTWALL_TOOLS;
  };
  CombatConst.LEVELS_LEFTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_LEFTWALL_TOOLS == null) {
      CombatConst.LEVELS_LEFTWALL_TOOLS = [0, 37];
    }
    return CombatConst.LEVELS_LEFTWALL_TOOLS;
  };
  CombatConst.ITEMS_LEFTWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_LEFTWALL_UNITS == null) {
      CombatConst.ITEMS_LEFTWALL_UNITS = [0, 0];
    }
    return CombatConst.ITEMS_LEFTWALL_UNITS;
  };
  CombatConst.LEVELS_LEFTWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_LEFTWALL_UNITS == null) {
      CombatConst.LEVELS_LEFTWALL_UNITS = [0, 13];
    }
    return CombatConst.LEVELS_LEFTWALL_UNITS;
  };
  CombatConst.ITEMS_MIDDLEWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_TOOLS == null) {
      CombatConst.ITEMS_MIDDLEWALL_TOOLS = [1, 1, 1];
    }
    return CombatConst.ITEMS_MIDDLEWALL_TOOLS;
  };
  CombatConst.LEVELS_MIDDLEWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_TOOLS == null) {
      CombatConst.LEVELS_MIDDLEWALL_TOOLS = [0, 11, 37];
    }
    return CombatConst.LEVELS_MIDDLEWALL_TOOLS;
  };
  CombatConst.ITEMS_MIDDLEWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_UNITS == null) {
      CombatConst.ITEMS_MIDDLEWALL_UNITS = [0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_MIDDLEWALL_UNITS;
  };
  CombatConst.LEVELS_MIDDLEWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_UNITS == null) {
      CombatConst.LEVELS_MIDDLEWALL_UNITS = [0, 0, 13, 13, 26, 26];
    }
    return CombatConst.LEVELS_MIDDLEWALL_UNITS;
  };
  CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$ = function () {
    if (CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY == null) {
      CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY = [0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY;
  };
  CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$ = function () {
    if (CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY == null) {
      CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY = [0, 0, 13, 13, 26, 26];
    }
    return CombatConst.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY;
  };
  CombatConst.ITEMS_RIGHTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_RIGHTWALL_TOOLS == null) {
      CombatConst.ITEMS_RIGHTWALL_TOOLS = [2, 2];
    }
    return CombatConst.ITEMS_RIGHTWALL_TOOLS;
  };
  CombatConst.LEVELS_RIGHTWALL_TOOLS_$LI$ = function () {
    if (CombatConst.LEVELS_RIGHTWALL_TOOLS == null) {
      CombatConst.LEVELS_RIGHTWALL_TOOLS = [0, 37];
    }
    return CombatConst.LEVELS_RIGHTWALL_TOOLS;
  };
  CombatConst.ITEMS_RIGHTWALL_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_RIGHTWALL_UNITS == null) {
      CombatConst.ITEMS_RIGHTWALL_UNITS = [0, 0];
    }
    return CombatConst.ITEMS_RIGHTWALL_UNITS;
  };
  CombatConst.LEVELS_RIGHTWALL_UNITS_$LI$ = function () {
    if (CombatConst.LEVELS_RIGHTWALL_UNITS == null) {
      CombatConst.LEVELS_RIGHTWALL_UNITS = [0, 13];
    }
    return CombatConst.LEVELS_RIGHTWALL_UNITS;
  };
  CombatConst.ITEMS_ASUPPORT_TOOLS_$LI$ = function () {
    if (CombatConst.ITEMS_ASUPPORT_TOOLS == null) {
      CombatConst.ITEMS_ASUPPORT_TOOLS = [10, 10, 10];
    }
    return CombatConst.ITEMS_ASUPPORT_TOOLS;
  };
  CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP_$LI$ = function () {
    if (CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP == null) {
      CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP = [4, 4, 4];
    }
    return CombatConst.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP;
  };
  CombatConst.ITEMS_FINALWAVE_UNITS_$LI$ = function () {
    if (CombatConst.ITEMS_FINALWAVE_UNITS == null) {
      CombatConst.ITEMS_FINALWAVE_UNITS = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return CombatConst.ITEMS_FINALWAVE_UNITS;
  };
  CombatConst.WAVE_UNLOCK_LEVEL_$LI$ = function () {
    if (CombatConst.WAVE_UNLOCK_LEVEL == null) {
      CombatConst.WAVE_UNLOCK_LEVEL = [0, 13, 26, 51];
    }
    return CombatConst.WAVE_UNLOCK_LEVEL;
  };
  CombatConst.FLANKBONUS_$LI$ = function () {
    if (CombatConst.FLANKBONUS == null) {
      CombatConst.FLANKBONUS = [0, 0.7, 1, 1.3];
    }
    return CombatConst.FLANKBONUS;
  };
  CombatConst.WALL_WOD_IDS_VILLAGES_$LI$ = function () {
    if (CombatConst.WALL_WOD_IDS_VILLAGES == null) {
      CombatConst.WALL_WOD_IDS_VILLAGES = [503, 504, 505];
    }
    return CombatConst.WALL_WOD_IDS_VILLAGES;
  };
  CombatConst.GATE_WOD_IDS_VILLAGES_$LI$ = function () {
    if (CombatConst.GATE_WOD_IDS_VILLAGES == null) {
      CombatConst.GATE_WOD_IDS_VILLAGES = [452, 453, 469];
    }
    return CombatConst.GATE_WOD_IDS_VILLAGES;
  };
  CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS_$LI$ = function () {
    if (CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS == null) {
      CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS = [603, 607];
    }
    return CombatConst.NPC_ATTACK_DEFAULT_SOLDIER_IDS;
  };
  CombatConst.getFlankBonus = function (e, t, n) {
    var i = 0;
    if (e) {
      i++;
    }
    if (t) {
      i++;
    }
    if (n) {
      i++;
    }
    return CombatConst.FLANKBONUS_$LI$()[i];
  };
  CombatConst.getAmountSoldiers = function (e, t, n, i) {
    if (e === 1) {
      return CombatConst.getAmountSoldiersMiddle(t, i);
    } else {
      return CombatConst.getAmountSoldiersFlank(t, n);
    }
  };
  CombatConst.getAmountSoldiersFlank = function (e, t) {
    return Math.ceil(CombatConst.getMaxAttackers(e) * 0.2 * (1 + t / 100)) | 0;
  };
  CombatConst.getAmountSoldiersFlankWithoutBonus = function (e) {
    return Math.ceil(CombatConst.getMaxAttackers(e) * 0.2) | 0;
  };
  CombatConst.getAmountSoldiersMiddle = function (e, t) {
    return Math.ceil((CombatConst.getMaxAttackers(e) - CombatConst.getAmountSoldiersFlankWithoutBonus(e) * 2) * (1 + t / 100)) | 0;
  };
  CombatConst.getMinSoldiers = function (e) {
    return CombatConst.getMaxAttackers(e) * 0.1 | 0;
  };
  CombatConst.getMaxDamagedBuildings = function (e) {
    return Math.round(Math.exp((e - 4) * 0.199) * 0.179) | 0;
  };
  CombatConst.getTotalAmountToolsFlank = function (e, t) {
    return CombatConst.getTotalAmountTools(0, e, t);
  };
  CombatConst.getTotalAmountToolsMiddle = function (e) {
    return CombatConst.getTotalAmountTools(1, e, 0);
  };
  CombatConst.getTotalAmountTools = function (e, t, n) {
    if (e === 1) {
      if (t < 11) {
        return 10;
      } else if (t < 37) {
        return 20;
      } else if (t < 50) {
        return 30;
      } else if (t < 69) {
        return 40;
      } else {
        return 50;
      }
    } else if (t < 37) {
      return 10;
    } else if (t < 50) {
      return 20;
    } else if (t < 69) {
      return 30;
    } else {
      return Math.ceil(40 + n) | 0;
    }
  };
  CombatConst.getMaxAttackers = function (e) {
    var t = 320;
    if (e <= 69) {
      t = Math.min(260, e * 5 + 8);
    }
    return t;
  };
  CombatConst.getMaxUnitsInReinforcementWave = function (e, t, n, i) {
    var a = Math.sqrt(e) * 20 + 50 + t * 20 + n;
    return Math.round(a * i) | 0;
  };
  CombatConst.getMaxLevelDif1 = function (e) {
    return Math.max(5, Math.round(e * 0.002 * e + e * 0.17 + 3));
  };
  CombatConst.getMaxLevelDif2 = function (e) {
    return Math.max(5, Math.round(e * 0.0015 * e + e * 0.12 + 3));
  };
  CombatConst.getHonorChange = function (e, t, n, i, a) {
    if (n > i + CombatConst.getMaxLevelDif2(n)) {
      if (n > i + CombatConst.getMaxLevelDif1(n)) {
        return (i - n) * 3;
      } else {
        return 0;
      }
    } else {
      if (a) {
        s = e;
        r = t;
      } else {
        s = t;
        r = e;
      }
      return Math.round(Math.max((r - s) / 7 + 100, 0));
    }
    var s;
    var r;
  };
  CombatConst.getHonorChangeWithBoost = function (e, t, n, i, a, s, r, o) {
    return Math.round(CombatConst.getHonorChange(e, t, n, i, o) * (1 + (r + s + a) / 100));
  };
  CombatConst.getMoralBonus = function (e) {
    if (e >= 0) {
      return 2 - 1 / (1 + Math.abs(e) / 250);
    } else {
      return 1 / (1 + Math.abs(e) / 250);
    }
  };
  CombatConst.getFameBonusForHonor = function (e) {
    if (e === 0) {
      return 0;
    } else {
      return Math.min(1, (Math.exp(e * 0.00115) * 2 + (e * 0.012 + 1)) / 100);
    }
  };
  CombatConst.getMaxWaveCount = function (e, t) {
    var n = 1;
    for (var i = CombatConst.WAVE_UNLOCK_LEVEL_$LI$().length - 1; i >= 0; i--) {
      if (e >= CombatConst.WAVE_UNLOCK_LEVEL_$LI$()[i]) {
        n = i + 1;
        break;
      }
    }
    if (t) {
      n += CombatConst.CONQUERATTACK_ADDITIONAL_WAVES;
    }
    return n;
  };
  CombatConst.getMaxWaveCountWithBonus = function (e, t, n) {
    return CombatConst.getMaxWaveCount(e, t) + n;
  };
  CombatConst.isConquerAttack = function (e) {
    switch (e) {
      case CombatConst.ATTACK_TYPE_CAPITAL_CONQUER:
      case CombatConst.ATTACK_TYPE_OUTPOST_CONQUER:
      case CombatConst.ATTACK_TYPE_VILLAGE_CONQUER:
      case CombatConst.ATTACK_TYPE_KINGTOWER_CONQUER:
      case CombatConst.ATTACK_TYPE_MONUMENT_CONQUER:
      case CombatConst.ATTACK_TYPE_LABORATORY_CONQUER:
      case CombatConst.ATTACK_TYPE_METROPOL_CONQUER:
      case CombatConst.ATTACK_TYPE_CONQUER:
        return true;
      default:
        return false;
    }
  };
  CombatConst.getSurvivingDefenderRate = function (e) {
    return Math.max(CombatConst.MIN_SURVIVING_SOLDIERS, (e * -0.25 * e + 104) / 100);
  };
  CombatConst.getXpForAttackingDungeon = function (e) {
    return Math.round(Math.max(1, Math.pow(e * 0.5, 1.1))) | 0;
  };
  CombatConst.getXpForPlayerBattle = function (e, t) {
    return Math.round(Math.max(1, e * 0.05 + t * 0.005));
  };
  CombatConst.isTargetLowLevelProtected = function (e, t) {
    var n = false;
    if (t <= CombatConst.LOW_LEVEL_PROTECTION_MAX_LEVEL) {
      n = e > t + CombatConst.LOW_LEVEL_PROTECTION_RANGE;
    }
    return n;
  };
  CombatConst.isLowLevelProtectionActive = function (e, t, n) {
    return CombatConst.isTargetLowLevelProtected(e, t) && n > -1;
  };
  CombatConst.getMinTargetLevelForFindEnemyCastle = function (e) {
    return Math.max(CombatConst.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE, e - Math.max(CombatConst.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE, Math.round(e * 0.002 * e + e * 0.17 + 3)) + 1) | 0;
  };
  CombatConst.getMaxTargetLevelForFindEnemyCastle = function (e) {
    return Math.round(e * 1.3) | 0;
  };
  CombatConst.getMaxUnitCountWallByLevelForVillages = function (e) {
    if (e >= 70) {
      return 320;
    } else if (e >= 51) {
      return 260;
    } else {
      return 200;
    }
  };
  CombatConst.getWallOrGateWodIdForVillages = function (e, t) {
    if (e >= 69) {
      if (t) {
        return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[2];
      } else {
        return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[2];
      }
    } else if (e >= 50) {
      if (t) {
        return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[1];
      } else {
        return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[1];
      }
    } else if (t) {
      return CombatConst.WALL_WOD_IDS_VILLAGES_$LI$()[0];
    } else {
      return CombatConst.GATE_WOD_IDS_VILLAGES_$LI$()[0];
    }
  };
  CombatConst.getDefenseBonus = function (e, t, n, i, a, s, r) {
    return 1 + Math.max(0, e + t + n + i - s - a - r) * 1 / 100;
  };
  CombatConst.getTotalDefenseBonus = function (e, t, n) {
    return e * t * n;
  };
  CombatConst.getAttackBonus = function (e, t, n, i, a) {
    return e + t + n + i + a;
  };
  CombatConst.getAttackTypeSpecificBonus = function (e, t, n, i, a, s, r, o, l, u) {
    return e * (t + n + i + Math.max(-1, (a + s + r + o + l) / 100) + u);
  };
  CombatConst.getDefenseTotalTypeSpecificBonus = function (e, t, n, i, a, s, r, o, l, u) {
    return e * (t + n + i) * (1 + Math.max(-1, (a + s + r + o + l) / 100 + u));
  };
  CombatConst.getDefenseValues = function (e, t, n, i) {
    var a = e + t;
    var s = a !== 0 ? e / a : 0.5;
    var r = 1 - s;
    if (e < n * s && t > i * r) {
      i = Math.round((1 - e / n) * i);
      n = e;
    } else if (e > n * s && t < i * r) {
      n = Math.round((1 - t / i) * n);
      i = t;
    } else {
      n = Math.round(n * s);
      i = Math.round(i * r);
    }
    var o = [0, 0];
    o[0] = n | 0;
    o[1] = i | 0;
    return o;
  };
  return CombatConst;
}();
h.ATTACK_SUPPORT_TOOL_SLOTS = 3;
h.REINFORCEMENT_WAVE_UNIT_SLOTS = 8;
h.REINFORCEMENT_WAVE_TOOL_SLOTS = 0;
h.SLOT_TYPE_MIDDLE_TOOL = 1;
h.SLOT_TYPE_FLANK_TOOL = 2;
h.LOW_LEVEL_PROTECTION_MAX_LEVEL = 10;
h.LOW_LEVEL_PROTECTION_RANGE = 5;
h.DEFENSIVE_DAMAGED_PERCENTAGE = 0.25;
h.BASIC_PEASANTS_FROM_POPULATION_FACTOR = 20;
h.TAKEOVER_DAMAGE_NORMAL = 0.5;
h.TAKEOVER_DAMAGE_BIG = 0.8;
h.TAKEOVER_DAMAGE_EXTRA_BIG = 1;
h.PALACE_DAMAGE_LOWER_BOUND = 0.5;
h.PALACE_DAMAGE_HIGHER_BOUND = 0.8;
h.EMPORIUM_DAMAGE_LOWER_BOUND = 0.5;
h.MIN_ATTACK_PLAYER_LEVEL = 5;
h.MIN_SURVIVING_SOLDIERS = 0.1;
h.CONQUERATTACK_ADDITIONAL_WAVES = 2;
h.LOOT_PRIO_MIN_LEVEL = 20;
h.LOOT_PRIO_NO = 0;
h.LOOT_PRIO_WOOD = 1;
h.LOOT_PRIO_STONE = 2;
h.LOOT_PRIO_FOOD = 3;
h.LOOT_PRIO_COAL = 4;
h.LOOT_PRIO_OIL = 5;
h.LOOT_PRIO_GLASS = 6;
h.LOOT_PRIO_AQUAMARINE = 7;
h.LOOT_PRIO_IRON = 8;
h.LOOT_PRIO_HONEY = 9;
h.LOOT_PRIO_MEAD = 10;
h.LOOT_PRIO_BEEF = 11;
h.LOOT_MAX_CONTIGENT_FACTOR = 1;
h.ATTACK_TYPE_ATTACK = 0;
h.ATTACK_TYPE_OUTPOST_CONQUER = 1;
h.ATTACK_TYPE_VILLAGE_CONQUER = 2;
h.ATTACK_TYPE_CAPITAL_CONQUER = 3;
h.ATTACK_TYPE_METROPOL_CONQUER = 5;
h.ATTACK_TYPE_KINGTOWER_CONQUER = 6;
h.ATTACK_TYPE_CONQUER = 7;
h.ATTACK_TYPE_MONUMENT_CONQUER = 8;
h.ATTACK_TYPE_LABORATORY_CONQUER = 9;
h.MIN_TARGET_LEVEL_FOR_FIND_ENEMY_CASTLE = 5;
h.MIN_SECONDS_TO_NEXT_ATTACK = 3;
h.MIN_FIRE_DAMAGE = 5;
h.MAX_FIRE_DAMAGE = 10;
h.DAMAGE_BUILDING_PROBABILITY = 100;
h.MAX_LEVEL_CAPITAL_NO_HONOR = 51;
exports.CombatConst = h;
h.__class = "CombatConst";
var p = function () {
  return function CommKeys() {};
}();
p.MAY_CHANGE_EMBLEM = "MCE";
p.GEMS = "GEM";
p.RELIC_GEMS = "RGEM";
p.DISTANCE = "D";
p.DURATION = "D";
p.PRICE = "P";
p.X_COORDINATE = "X";
p.Y_COORDINATE = "Y";
p.ROTATION = "R";
p.X_POSITION = "XPOS";
p.Y_POSITION = "YPOS";
p.LEGEND_LEVEL = "LL";
p.CURRENT_TOP_X = "TOPX";
p.IS_RUINED = "R";
p.SHOULD_USE_VIP_FLAG = "VF";
p.AMOUNT_OF_TIME = "AOT";
p.REMAINING_DURATION = "RD";
p.REMAINING_SECONDS = "RS";
p.REMAINING_TIME = "RT";
p.REMAINING_CANCEL_ABANDONMENT_TIME = "CAT";
p.REMAINING_OPEN_GATE_DURATION = "OGT";
p.REMAINING_OPEN_GATE_DURATION_2 = "RPT";
p.REMAINING_TIME_UNTIL_EXECUTION = "RD";
p.REMAINING_NO_ABANDON_TIME = "TA";
p.REMAINING_NOOB_PROTECTION = "RNP";
p.SECONDS_UNTIL_RESET = "STR";
p.LABORATORY_REMAINING_SECONDS = "LRS";
p.ISLAND_KINGDOM_REMAINING_SECONDS = "KRS";
p.MONUMENT_REMAINING_SECONDS = "MRS";
p.APPROXIMATE_REMAINING_TIME = "ART";
p.PASSED_SECONDS = "PS";
p.REMAINING_PEACE_TIME = "RPT";
p.REMAINING_RELOCATION_TIME = "RRD";
p.AREA_INFO = "AI";
p.AREA_INFO_2 = "A";
p.EMPTY_POSITION = "EP";
p.VISIBLE_AREA_INFO = "VAI";
p.CHEST_ID = "CID";
p.TIME_TO_UNLOCK = "TTU";
p.LORDS = "L";
p.BARONS = "B";
p.COMMANDERS = "C";
p.GENERALS = "G";
p.LORD_ID = "ID";
p.LORD_ID_2 = "LID";
p.DUMMY_LORD_ID = "DLID";
p.LORD_NAME = "N";
p.LORD_EQUIPMENT = "EQ";
p.LORD_LOOK = "VIS";
p.WEARER_ID = "WID";
p.LOCKED_CASTLE_ID = "LICID";
p.ALIEN_INVASION_EFFECTS = "AIE";
p.WINS = "W";
p.DEFEATS = "D";
p.WINNING_SPREE = "SPR";
p.DO_EXTRACT = "EX";
p.TAUNT_ATTACK_EFFECTS = "TAE";
p.OBJECT = "O";
p.OBJECT_ID = "OID";
p.BUILDING = "B";
p.NEW_BUILDING = "N";
p.NEW_OBJECT = "NO";
p.MOVED_OBJECT = "MO";
p.CUSTOM_BUILDINGS = "CB";
p.CUSTOM_OBJECT_ID = "COID";
p.OBJECT_ID_LIST = "OIDL";
p.SLOT_OVERVIEW = "SO";
p.BUILDING_COST_REDUCTION = "B";
p.BURNING = "B";
p.UPGRADE_DETAILS = "UD";
p.FAST_COMPLETE = "F";
p.MINES = "M";
p.BUILDING_EXISTS = "BE";
p.BUILDING_LIST = "BL";
p.SIMULTANEOUS_SLOT_COUNT = "SSC";
p.MERCENARY_MISSIONS = "M";
p.NEXT_MERCENARY_MISSION_REFRESH = "NM";
p.MERCENARY_MISSION_ID = "ID";
p.MISSION_STATE = "S";
p.QUALITY = "Q";
p.REWARD = "R";
p.REWARD_ID = "RID";
p.REWARD_IDS = "RIDS";
p.REWARD_ROTATION_INDEX = "RIDX";
p.REWARD_STEP = "RS";
p.COLLECTED_REWARDS = "CR";
p.SELECTED_REWARDS = "RS";
p.WINNER_REWARD_ID = "WR";
p.TOP_X_REWARD_ID = "TR";
p.BOOBY_PRIZE_REWARD_ID = "BR";
p.MINIMUM_FAME_FOR_BOOBY_PRIZE = "MFB";
p.CLASS_REWARDS = "CR";
p.REWARD_GRANT_TYPE = "GT";
p.PEACE_MODE_STATUS = "PMS";
p.PEACE_MODE_TIME = "PMT";
p.RESOURCE_CARTS = "RC";
p.RESOURCE_TYPE = "RT";
p.BOOKMARKS = "BM";
p.BOOKMARK_LIST = "BL";
p.BOOKMARK_DISPLAY_NAME = "N";
p.BOOKMARK_DISPLAY_NAME_2 = "DN";
p.IS_FRIEND = "TY";
p.IS_FRIEND_2 = "IF";
p.BOOKMARK_TYPE = "TY";
p.TIME_LEFT = "TI";
p.SEND_IMPORTANT_MESSAGES = "IM";
p.BOOKMARK_ID = "BID";
p.BOOKMARK_CREATOR = "C";
p.ALLIANCE_BOOKMARK_LIST = "ABL";
p.CURRENCY_1 = "C1";
p.CURRENCY_2 = "C2";
p.WOOD = "W";
p.STONE = "S";
p.FOOD = "F";
p.COAL = "C";
p.OIL = "O";
p.GLASS = "G";
p.AQUAMARINE = "A";
p.IRON = "I";
p.HONEY = "HONEY";
p.MEAD = "MEAD";
p.BEEF = "BEEF";
p.KHAN_TABLETS = "KT";
p.SKULL_RELICS = "TS";
p.PEARL_RELICS = "PR";
p.SILVER_RUNES = "USR";
p.GOLD_RUNES = "UGR";
p.GREEN_SKULL_RELICS = "GTS";
p.WISHING_WELL_COINS = "WWC";
p.SAMURAI_TOKENS = "ST";
p.PEGASUS_TRAVEL_TICKET = "PTT";
p.CAPITAL_COINS = "CC";
p.CAPITAL_TOKENS = "CT";
p.RUBY_COST_FOR_WOOD = "WC2";
p.RUBY_COST_FOR_STONE = "SC2";
p.RUBY_COST_FOR_FOOD = "FC2";
p.RUBY_COST_FOR_C1 = "C1C2";
p.RESOURCE_AMOUNT_FOOD = "RAF";
p.RESOURCE_AMOUNT_WOOD = "RAW";
p.RESOURCE_AMOUNT_STONE = "RAS";
p.RESOURCE_AMOUNT_BEEF = "RAB";
p.APOLOGIZE_TOKEN = "APT";
p.KHAN_MEDALS = "KM";
p.MISSING_CURRENCY_IDS = "MCIDS";
p.BOOSTER_KEYS = "BKS";
p.HIDDEN_FOOD = "HF";
p.HIDDEN_MEAD = "HM";
p.HIDDEN_BEEF = "HB";
p.WISHING_WELL_OPERATION = "WOP";
p.WISHING_WELL_LEVEL = "L";
p.ALL_DIALOGS = "A";
p.DIALOG_ID = "K";
p.PREMIUM_ACCOUNT_TYPE = "PT";
p.PREMIUM_TIME_REMAINING = "PA";
p.FESTIVAL_TYPE = "T";
p.UPDATE_ALL = "UA";
p.TREASURE_MAP_ID = "MID";
p.TREASURE_MAP = "TM";
p.TREASURE_MAP_NODE = "N";
p.TREASURE_MAP_NODE_ID = "NID";
p.PROGRESS_TYPE = "PT";
p.ACHIEVED = "A";
p.COOLDOWN_MAP = "CM";
p.PRIVATE_OFFER_ID = "OID";
p.PRIVATE_OFFER_STATE = "OS";
p.PRIVATE_OFFER_ITERATION = "IT";
p.CAMP_POSITIONS = "CP";
p.CAMP_REROLL_ENABLED = "CRE";
p.REROLL_CURRENCY_KEY = "RCK";
p.REROLL_CURRENCY_KEYS = "RCKS";
p.REROLL_COUNT_SC = "RCSC";
p.REROLL_COUNT_HC = "RCHC";
p.TOPIC_ID = "TID";
p.TOPIC = "N";
p.TOPIC_NAME = "TN";
p.TOPIC_CREATOR_NAME = "CN";
p.UNREAD_TOPIC_COUNT = "UTC";
p.REPLY_TEXT = "RT";
p.REPLY_ID = "RID";
p.REPLY = "R";
p.RANKING_GROUPS = "RG";
p.TIME_SINCE_LAST_ALLIANCE_HELP = "TSL";
p.ALLIANCE_HELP_ID = "LID";
p.ALLIANCE_HELP_TYPE = "T";
p.ALLIANCE_HELP_TARGET_ID = "ID";
p.ALLIANCE_HELP_RECRUITMENT_PACKAGE_ID = "RID";
p.APPLICATION_LIST = "AL";
p.APPLICATION_AGE = "AA";
p.ALLIANCE = "A";
p.ALLIANCES = "AL";
p.ALLIANCE_NAME = "N";
p.ALLIANCE_NEW_NAME = "AN";
p.ALLIANCE_NAME_2 = "AN";
p.ALLIANCE_ID = "AID";
p.ALLIANCE_DESCRIPTION = "D";
p.IS_SEARCHING_ALLIANCE = "IS";
p.ALLIANCE_INVITATION_DECISION = "D";
p.ALLIANCE_TRIBUTE = "T";
p.NEW_DIPLOMACY_RANK = "NDR";
p.OLD_DIPLOMACY_RANK = "ODR";
p.THIS_ALLIANCE = "AS";
p.OTHER_ALLIANCE = "AO";
p.DIPLOMACY_REQUEST_STATUS = "S";
p.DESCRIPTION_TYPE = "T";
p.AUTO_WAR_ENABLED = "AW";
p.ACCEPTED_APPLICATION = "A";
p.ONLINE_MEMBERS = "OM";
p.ALLIANCE_LANDMARKS = "ALA";
p.APPLICATION_TEXT = "AT";
p.IS_AUTO_JOIN_ENABLED = "IA";
p.AUTO_JOIN_SET = "AS";
p.RANK = "R";
p.BUFF_TYPE = "BT";
p.ALLIANCE_NOTIFICATION_TYPE = "A";
p.ALLIANCE_NOTIFICATION_VALUES = "AV";
p.TRIBUTE = "T";
p.ALLIANCE_DIPLOMACY = "DOA";
p.HAS_REACHED_PEACE_CAP = "SP";
p.DIPLOMACY_TRIBUTE_OFFER = "PO";
p.TIME_TO_ACCEPT_TRIBUTE = "TS";
p.ANNOUNCEMENT = "A";
p.IS_ISLAND_KING_ALLIANCE = "KA";
p.ALLIANCE_DIPLOMACY_REQUEST_STATUS = "AS";
p.ALLIANCE_DIPLOMACY_REQUEST_ACCEPTED = "AC";
p.ALLIANCE_MEMBER_INFO = "AMI";
p.ALLIANCE_DIPLOMACY_LIST = "ADL";
p.ALLIANCE_PRIME_TIME_BONUS_PERCENTAGE = "APP";
p.ALLIANCE_CAPITAL = "ACA";
p.ALLIANCE_METROPOLIS = "ATC";
p.ALLIANCE_KINGS_TOWER = "AKT";
p.ALLIANCE_MONUMENT = "AMO";
p.ALLIANCE_LABORATORY = "ALA";
p.ALLIANCE_CURRENT_FAME_2 = "CF";
p.ALLIANCE_BUFF_LIST = "ABL";
p.ALLIANCE_AQUA_POINTS_RANK = "AR";
p.ALLIANCE_LANGUAGE = "ALL";
p.ALLIANCE_SCORE = "ACS";
p.IS_ALLIANCE_OPEN = "IAO";
p.MESSAGE = "M";
p.MESSAGES = "MSG";
p.MESSAGE_ID = "MID";
p.MESSAGE_IDS = "MIDS";
p.MESSAGE_ERROR_IDS = "ERR";
p.MESSAGE_DELETED_IDS = "DEL";
p.CHAT_MESSAGE = "CM";
p.IS_CHAT_HIDDEN = "H";
p.TEXT = "TXT";
p.MESSAGE_TEXT = "MTXT";
p.SUBJECT = "SJ";
p.MESSAGE_HEADER = "MH";
p.BADWORDS = "BW";
p.SOURCE_NAME = "SN";
p.TARGET_NAME = "TN";
p.RECEIVER_NAME = "RN";
p.RECEIVER_PLAYER_IDS = "PID";
p.EMAIL = "EM";
p.MESSAGE_TYPE = "MT";
p.MESSAGE_METADATA = "MS";
p.BUG_MESSAGE = "BM";
p.IGNORED_PLAYER_ID = "IPID";
p.MESSAGE_TYPES_COUNT = "MTC";
p.SPACE_ID = "SID";
p.AREA_ID = "AID";
p.KINGDOM_ID = "KID";
p.KINGDOM_ID_2 = "K";
p.AREA_TYPE = "AT";
p.GIFTS = "G";
p.GIFT_ID = "ID";
p.GIFT_TYPE = "T";
p.GIFTS_AVAILABLE_TODAY = "RA";
p.PLAYER_ID = "PID";
p.PLAYER_LIST = "PL";
p.PLAYER_IDS = "PIDS";
p.WOOD_STORED = "WS";
p.STONE_STORED = "SS";
p.CAPITAL_TOKENS_STORED = "CTS";
p.WOOD_PRODUCTION = "WP";
p.STONE_PRODUCTION = "SP";
p.STONE_CAPACITY = "MRS";
p.WOOD_CAPACITY = "MRW";
p.FOOD_CAPACITY = "MRF";
p.COAL_CAPACITY = "MRC";
p.OIL_CAPACITY = "MRO";
p.GLASS_CAPACITY = "MRG";
p.IRON_CAPACITY = "MRI";
p.AQUAMARINE_CAPACITY = "MRA";
p.STORAGE = "S";
p.ALLIANCE_STORAGE = "STO";
p.DONATION_RESOURCE_VALUES = "RV";
p.WOOD_PRODUCTION_MODIFIER = "WM";
p.STONE_PRODUCTION_MODIFIER = "SM";
p.FOOD_PRODUCTION_BOOST = "FM";
p.COAL_PRODUCTION_MODIFIER = "CM";
p.OIL_PRODUCTION_MODIFIER = "OM";
p.GLASS_PRODUCTION_MODIFIER = "GM";
p.IRON_PRODUCTION_MODIFIER = "IM";
p.RESOURCE_METROPOLIS_FOOD_PRODUCTION_BONUS = "MP";
p.WOOD_DELTA = "DW";
p.STONE_DELTA = "DS";
p.FOOD_DELTA = "DF";
p.COAL_DELTA = "DC";
p.OIL_DELTA = "DO";
p.GLASS_DELTA = "DG";
p.IRON_DELTA = "DI";
p.FOOD_CONSUMPTION_DELTA = "DFC";
p.SICKNESS = "S";
p.MAIN_CASTLES_RESOURCES = "MCR";
p.CURRENT_AREA_RESOURCES = "CAR";
p.MINIMUM_STOCK = "MS";
p.PRODUCTION_ADJUSTMENT = "PA";
p.SERVER_PRODUCTION_FREEZE = "SRPF";
p.CURRENCY_TYPE = "CT";
p.PACKAGE_ID = "PID";
p.PACKAGE_ID_2 = "PKID";
p.PACKAGE_LIST = "PL";
p.PACKAGE_PRICE = "PKPC";
p.PROPOSED_RUBIES = "PC2";
p.AMOUNT = "AMT";
p.AMOUNT_2 = "A";
p.COUNT = "C";
p.PRIME_OFFER_ID = "PO";
p.BUY_TYPE = "BT";
p.BUY_TYPE_ID = "TID";
p.BUY_AGAIN = "BA";
p.PAY_WITH_RUBIES = "PWR";
p.DISCOUNT = "DIS";
p.DECORATION_ID = "DID";
p.UNSTORED_DECO_ID = "I";
p.UNIQUE_DECORATION_ID = "UID";
p.VILLAGE_COUNT = "VC";
p.POPUP_ID = "POP";
p.POPUP_VALUE = "VAL";
p.BOOSTER_ID = "BID";
p.BOOSTER_ID_2 = "ID";
p.BOOSTER_PERCENT_BOOST = "PB";
p.BOOSTER_LEVEL = "L";
p.FOOD_BOOST = "FB";
p.VIP_BOOST = "VB";
p.IS_BOOSTED = "BT";
p.GLORY_BOOSTER_PERCENTAGE = "GBP";
p.MOVEMENTS = "M";
p.MOVEMENT = "M";
p.TO_PLAYER_ID = "TID";
p.MARKET_MOVEMENT = "MM";
p.CARRIAGES = "C";
p.GOODS = "G";
p.TARGET_AREA = "TA";
p.SOURCE_AREA = "SA";
p.DISTANCE_X = "DX";
p.DISTANCE_Y = "DY";
p.X_DESTINATION = "DX";
p.Y_DESTINATION = "DY";
p.UNIT_TRANSFER = "UT";
p.RESOURCE_TRANSFER = "RT";
p.ATTACK_MOVEMENT = "A";
p.ATTACK_TYPE = "ATT";
p.TARGET_X_COORDINATE = "TX";
p.TARGET_Y_COORDINATE = "TY";
p.SOURCE_X_COORDINATE = "SX";
p.SOURCE_Y_COORDINATE = "SY";
p.SOURCE_KINGDOM_ID = "SKID";
p.TARGET_KINGDOM_ID = "TKID";
p.ARMY_ATTACK_MOVEMENT = "AAM";
p.TRANSFER_TYPE = "TT";
p.SCOPE = "S";
p.TOTAL_CARRIAGES = "TC";
p.AVAILABLE_CARRIAGES = "AC";
p.MOVEMENT_ID = "MID";
p.TARGET_KINGDOM_ID_2 = "TK";
p.TREASURE_HUNT_MOVEMENT = "TM";
p.FINAL_ARMY = "FA";
p.GUESSED_SIZE = "GS";
p.GESAMMTE_ARMY = "GA";
p.SLOWNDOWN_DURATION_IN_SECONDS = "SD";
p.TOTAL_TIME = "TT";
p.PASSED_TIME = "PT";
p.START_PLAYER_ID = "SID";
p.ATTACK_SUPPORT_TOOLS = "AST";
p.HOME_AWORKSHOP_LEVEL = "HAWL";
p.UNIT_MOVEMENT = "UM";
p.PROGRESS_WAITING_DURATION = "PWD";
p.TOTAL_WAITING_DURATION = "TWD";
p.ARMY = "A";
p.INVENTORY = "I";
p.ALLIANCE_SUPPORT_INVENTORY = "AI";
p.UNITS = "U";
p.TOOLS = "T";
p.LEFT = "L";
p.MIDDLE = "M";
p.RIGHT = "R";
p.REINFORCEMENT_WAVE = "RW";
p.PRECOMBAT_WAVE = "PW";
p.POSTCOMBAT_WAVE = "EW";
p.UNITS_TRAVELING = "UT";
p.STATUS = "S";
p.STATUS_2 = "ST";
p.MINIMUM_SOLDIER_COUNT = "MS";
p.MAXIMUM_UNITS = "MU";
p.UNIT_AMOUNT = "U";
p.MORALE = "M";
p.APPEND_UNITS = "AU";
p.RUNNING_ACHIEVEMENTS = "RA";
p.FINISHED_ACHIEVEMENTS = "FA";
p.ACHIEVEMENT_POINTS = "AVP";
p.ACHIEVEMENT_ID = "AID";
p.PROGRESS = "P";
p.QUEST_ID = "QID";
p.QUEST_IDS = "QIDS";
p.UNREAD = "U";
p.QUEST_STATE = "S";
p.QUEST_LIST = "QL";
p.ANNOUNCED_QUESTS = "ANN";
p.RUNNING_QUESTS = "R";
p.DONE_QUESTS = "D";
p.RUNNING_DAILY_QUESTS = "RDQ";
p.FINISHED_DAILY_QUESTS = "FDQ";
p.PLAYER_QUEST_LEVEL = "PQL";
p.CAMPAIGN_QUESTS = "CQS";
p.QUEST_CAMPAIGN_STATUS = "QCS";
p.CAMPAIGN_QUEST_ID = "CQID";
p.QUEST_CONDITION = "QC";
p.QUEST_TARGET_ID = "QTID";
p.SIDE = "S";
p.UNIT_DISTRIBUTION_PERCENTAGE = "UP";
p.UNIT_COMPOSITION = "UC";
p.SLOTS = "S";
p.LEFT_SLOT = "LS";
p.MIDDLE_SLOT = "MS";
p.RIGHT_SLOT = "RS";
p.UNIT_SLOTS = "SU";
p.UNIT_SLOTS_2 = "US";
p.TOOL_SLOTS = "ST";
p.DEFENSE_VALUE = "D";
p.SPY_AGE = "AS";
p.DEFENDER_PLAYER_ID = "DP";
p.DEFENDER_LEVEL = "DL";
p.KEEP_LEVEL = "KL";
p.WALL_LEVEL = "WL";
p.GATE_LEVEL = "GL";
p.TOWER_LEVEL = "TL";
p.MOAT_LEVEL = "ML";
p.SPECIAL_CAMP_ID = "SPC";
p.MINIMUM_ATTACK_UNITS_TO_CONSUME_TOOLS = "MAUCT";
p.SUPPORT_TOOL_SLOTS = "STS";
p.SOURCE_ZONE_ID = "SZID";
p.TARGET_ZONE_ID = "TZID";
p.BOUNTYHUNTER_REWARD_C1 = "BC1";
p.BOUNTYHUNTER_REWARD_C2 = "BC2";
p.BOUNTYHUNTER_REWARD_IRON = "I";
p.DUNGEON_PROTECTION_TIME = "DPT";
p.DUNGEON = "D";
p.DEFENCE_UNITS = "DU";
p.COLOSSUS_POINTS = "P";
p.ISLAND_RANK = "OR";
p.WINNER_ALLIANCE_ID = "WAID";
p.WINNER_ALLIANCE_NAME = "WAN";
p.WINNER_ALLIANCE_MEMBER_COUNT = "WAM";
p.WINNER_ALLIANCE_LEVEL = "WAL";
p.WINNER_ALLIANCE_AQUA_POINTS = "WAP";
p.ISLAND_KING_PLAYER_ID = "KID";
p.ISLAND_KING_PLAYER_NAME = "KN";
p.OWNER_ALLIANCE_MEMBER_COUNT = "OAM";
p.OWNER_ALLIANCE_NAME = "OAN";
p.OWNER_ALLIANCE_LEVEL = "OAL";
p.OWNER_ALLIANCE_ID = "OAI";
p.FACTION_OWNER_INFO = "FN";
p.FACTION_POINTS_BLUE = "BFP";
p.FACTION_POINTS_RED = "RFP";
p.PLAYER_COUNT_RED = "RP";
p.PLAYER_COUNT_BLUE = "BP";
p.FACTION_ID = "FID";
p.AUXILIARY_CAPACITY = "AUS";
p.PLAYER_PERCENTAGE_IN_FACTION_RED = "RFPPA";
p.FACTION_BLUE = "FB";
p.FACTION_RED = "FR";
p.CURRENT_FACTION_POINTS = "CFP";
p.HIGHEST_FACTION_POINTS = "HFP";
p.RED_FACTION_LAST_MAN_STANDING_ACTIVE = "RFLMS";
p.BLUE_FACTION_LAST_MAN_STANDING_ACTIVE = "BFLMS";
p.BLUE_FACTION_CAPITAL_REACHED = "BCR";
p.RED_FACTION_CAPITAL_REACHED = "RCR";
p.MAIN_CAMP_ID = "MC";
p.IS_SPECTATOR = "SPC";
p.FACTION_AREA_CAPACITY = "FAC";
p.MAP_SEED = "MS";
p.BATTLE_LOG_ID = "LID";
p.ATTACKER_LORD_INFO = "AL";
p.DEFENDER_BARON_INFO = "DB";
p.ATTACKER_GEM_TRIGGERED = "AGT";
p.DEFENDER_GEM_TRIGGERED = "DGT";
p.ATTACKER_LEGEND_SKILLS = "ALS";
p.DEFENDER_LEGEND_SKILLS = "DLS";
p.DEFENDER_WON = "DW";
p.DEFENDER_USED_SUPPORT_TOOLS = "DUST";
p.HONOR = "H";
p.DEFENDER_SURVIVAL_RATE = "SR";
p.PLAYER_BATTLE_INFO = "PBI";
p.PLAYER_INFO = "PI";
p.FOUND_EQUIPMENT = "EQF";
p.FOUND_GEM_ID = "GF";
p.FOUND_MINUTE_SKIP_ID = "MSF";
p.ATTACKER_HOSPITAL_CASTLE_ID = "AHC";
p.ATTACKER_HAD_HOSPITAL = "AHH";
p.ATTACKER_HOSPITAL_WAS_FULL = "AHF";
p.DEFENDER_HOSPITAL_CASTLE_ID = "DHC";
p.DEFENDER_HAD_HOSPITAL = "DHH";
p.DEFENDER_HOSPITAL_WAS_FULL = "DHF";
p.WOUNDED_SUPPORTER_UNITS = "WSU";
p.ATTACKER_USED_ONLY_AUXILIARIES = "AUA";
p.DEFENDER_USED_ONLY_AUXILIARIES = "DUA";
p.ATTACKER_ALLIANCE_SUBSCRIBERS = "AAS";
p.DEFENDER_ALLIANCE_SUBSCRIBERS = "DAS";
p.ATTACKER_HAD_PLAYER_SUBSCRIPTION = "AHP";
p.DEFENDER_HAD_PLAYER_SUBSCRIPTION = "DHP";
p.RAGE_POINTS = "RP";
p.ADDITIONAL_EFFECTS = "AE";
p.SPY = "S";
p.SPY_COUNT = "SC";
p.GUARD_COUNT = "GC";
p.GUARD_COUNT_2 = "GRD";
p.SPYING_PLAYER_ID = "SID";
p.SPY_OWNER = "SO";
p.SPY_RISK = "SR";
p.SPY_ACCOUNT = "SA";
p.SPY_TYPE = "ST";
p.SPY_EFFECT = "SE";
p.RISK = "R";
p.PLAGUE_MONK_MOVEMENT = "P";
p.CASTLE = "C";
p.CASTLES = "C";
p.CASTLE_ID = "CID";
p.CASTLE_NAME = "N";
p.CASTLE_NAME_1 = "CN";
p.POPULATION = "P";
p.NEUTRAL_DECO_POINTS = "NDP";
p.DECO_POINTS = "DP";
p.RIOT = "R";
p.SLUM_LEVEL = "SL";
p.SOLDIER_PRODUCTION_SPEED = "RS1";
p.OFFENSIVE_TOOL_PRODUCTION_SPEED = "RS2";
p.DEFENSIVE_TOOL_PRODUCTION_SPEED = "RS3";
p.HOSPITAL_PRODUCTION_SPEED = "RSH";
p.BUILD_SPEED = "BDB";
p.BUILDING_INFO = "BI";
p.BUILDING_LEVEL = "BL";
p.STATE = "S";
p.OPEN_GATE_COUNTER = "OGC";
p.TAX = "TX";
p.EXPECTED_MONEY = "EM";
p.IS_BRIBED = "IB";
p.POPULATION_1 = "PO";
p.COLLECTED_TAXES = "CT";
p.TAX_TYPE = "TT";
p.SKIN_ID = "EID";
p.UNLOCKED_STUFF = "UL";
p.IS_UNLOCKED = "U";
p.PAID_WOOD = "PW";
p.PAID_FOOD = "PF";
p.PAID_STONE = "PS";
p.PAID_C1 = "PC1";
p.PAID_C2 = "PC2";
p.TOP_X_RANK = "TX";
p.CURRENT_SCORE = "OP";
p.CURRENT_SCORE_2 = "OEP";
p.LEAGUE_TYPE = "LID";
p.CURRENT_FAME = "CF";
p.HIGHEST_FAME = "HF";
p.VILLAGE_POSITIONS = "VP";
p.AREA_POSITIONS = "AP";
p.UNITS_2 = "UT";
p.CASTLE_X_COORDINATE = "CX";
p.CASTLE_Y_COORDINATE = "CY";
p.GATE_DEFENSE = "GD";
p.MELEE_DEFENSE_STRENGTH = "MDS";
p.RANGE_DEFENSE_STRENGTH = "RDS";
p.PLACED_RANGE_UNITS = "PR";
p.PLACED_MELEE_UNITS = "PM";
p.HOME_DWORKSHOP_LEVEL = "HDWL";
p.POPUP_LIST = "P";
p.PLAYER_NAME = "PN";
p.REGISTRATION_EMAIL = "MAIL";
p.PASSWORD = "PW";
p.LOGIN_TOKEN = "LT";
p.STAY_LOGGED_IN = "PL";
p.LANGUAGE = "LANG";
p.REFERRER = "REF";
p.KOREA_REQUEST_ID = "koreaRequestId";
p.KOREA_REQUEST_ID_SHORT = "KID";
p.INVITE_CODE = "IC";
p.LOGIN_NEW_PASSWORD = "P";
p.LOGIN_NEW_PASSWORD_BCRYPT = "PB";
p.LOGIN_NEW_EMAIL = "M";
p.NEWSLETTER_SUBSCRIPTION = "N";
p.REGISTRATION_DATE = "RD";
p.FREE_CASTLE_RENAME = "FCR";
p.IS_PLAYER_NAME_TEMPORARY = "PNT";
p.IS_EMAIL_TEMPORARY = "MLT";
p.IS_PASSWORD_TEMPORARY = "PWT";
p.NAME_OR_EMAIL = "NOM";
p.ACCOUNT_ID = "AID";
p.LOGIN_TYPE_ID = "ID";
p.GOODGAME_CAMPAIGN_ID = "GCI";
p.EMAIL_2 = "E";
p.HAS_CONFIRMED_EMAIL = "V";
p.HAS_CONFIRMED_TERMS_AND_CONDITIONS = "CTAC";
p.HAS_NEWSLETTER_SUBSCRIPTION = "SFN";
p.API_BEARER_TOKEN = "ABT";
p.EXPIRES_IN_SECONDS = "ES";
p.CAN_GET_NEWSLETTER_REWARD = "CGNR";
p.API_BEARER_TOKEN_V2 = "ABTV2";
p.ZONE_NETWORK_ID = "ZNID";
p.HAS_PASSWORD = "hasPassword";
p.INVITED_FRIENDS_COUNT = "FC";
p.INVITED_PAYUSER_FRIENDS_COUNT = "PF";
p.CONSTRUCTION_ITEM = "CI";
p.CONSTRUCTION_ITEM_ID = "CID";
p.CONSTRUCTION_ITEM_LIST = "CIL";
p.MODE = "M";
p.CONSTRUCTION_ITEM_SELECTED_UPGRADE_CURRENCY = "SUC";
p.NEXT_EXPIRING_CI_REMAINING_SECONDS = "NCRS";
p.LAST_EXPIRED_CI_TIMESTAMP = "LECT";
p.BOOSTED_CONSTRUCTION_ITEM_ID = "BCID";
p.TITLE_ID = "TI";
p.TITLE_ID_2 = "TID";
p.NEW_TITLE_INDEX = "NHT";
p.PREFIX_TITLE = "PRE";
p.SUFFIX_TITLE = "SUF";
p.PREFIX_TITLE_2 = "PFX";
p.SUFFIX_TITLE_2 = "SFX";
p.TITLE_COOLDOWN = "TCD";
p.TITLE_INFO = "TI";
p.AQUA_POINTS = "AP";
p.ALLIANCE_AQUA_POINTS = "A";
p.AQUA_POINTS_HIGHSCORE = "APH";
p.LEGEND_SKILL_POINTS = "SP";
p.PLAYER_AQUA_POINTS = "P";
p.DELTA_PLAYER_AQUA_POINTS = "DP";
p.CURRENT_MIGHT_POINTS = "MP";
p.HIGHEST_MIGHT_POINTS = "HMP";
p.VIP_POINTS = "VP";
p.COLLECTED_POINTS = "CP";
p.HIGHEST_MIGHT_POINTS_2 = "HAMP";
p.POINT_THRESHOLD = "PT";
p.SURVEY_ID = "SID";
p.IS_CANCELED = "C";
p.ANSWERS = "A";
p.ANSWERS_IDS = "AS";
p.QUESTION_ID = "ID";
p.FREE_TEXT = "T";
p.SURVEY_TYPE_ID = "ST";
p.QUESTIONS = "QS";
p.QUESTION_TYPE = "QT";
p.ANSWERS_COUNT = "AC";
p.FULL_NAME = "FUN";
p.FIRST_NAME = "FIN";
p.LAST_NAME = "LAN";
p.PROFILE_LINK = "PLK";
p.GENDER_NAME = "GEN";
p.LOCALE_CODE = "LOC";
p.IS_ACCOUNT_VERIFIED = "IAV";
p.FACEBOOK_AGE_RANGE = "AGR";
p.UTC_OFFSET = "UTC";
p.BIRTHDAY = "BID";
p.FACEBOOK_BUSINESS_TOKEN = "FBT";
p.FACEBOOK_INVITER_INFO = "FI";
p.FACEBOOK_ID = "FB";
p.FACEBOOK_ID_1 = "ID";
p.FACEBOOK_IDS = "FIDS";
p.FACEBOOK_INVITEES_LIST = "FL";
p.FACEBOOK_APP_ID = "FAID";
p.FACEBOOK_USER_ID = "FID";
p.FACEBOOK_TOKEN = "FTK";
p.INSTANCE_ID = "IID";
p.ZONE_ID = "ZID";
p.IS_CONNECTED_TO_FACEBOOK = "CTF";
p.SET_FACEBOOK_CONNECTION = "SFC";
p.FACEBOOK_SENDER_ID = "SID";
p.FACEBOOK_RECEIVER_ID = "RXID";
p.FACEBOOK_ID_WAS_SET_BEFORE = "SB";
p.FACEBOOK_IDS_MAPPING = "FM";
p.SHOPPING_CART = "SC";
p.TYPE_IDS = "TID";
p.PAYED_C2 = "P";
p.LIMIT = "LIM";
p.LEVEL = "L";
p.COST_C2 = "C2";
p.SHOPPING_CART_A = "SCA";
p.SHOPPING_CART_B = "SCB";
p.SHOPPING_CART_C = "SCC";
p.MATERIAL_BAG_ID = "BID";
p.CRAFTING_MATERIAL = "CM";
p.MATERIAL_ID = "MID";
p.ITEM_RECIPES = "IR";
p.RECIPE_ID = "RID";
p.SLOT_NAME = "SN";
p.LINK = "L";
p.WEBSITE_ID = "WID";
p.OWNER_INFO = "OI";
p.OWNER_INFO_2 = "O";
p.INGREDIENTS = "I";
p.SEARCH_VALUE = "SV";
p.WOD_ID = "WID";
p.WOD_IDS = "WIDS";
p.WOD_ID_2 = "W";
p.WOD_ID_3 = "WOD";
p.RANDOM_NAMES = "RN";
p.CHOSEN_OPTION = "CO";
p.FREE_UNIT_CAPACITY = "FUC";
p.SHUTTING_DOWN = "SD";
p.EQUIPMENT = "E";
p.REMAINING_COOLDOWN = "CD";
p.DAY_OF_WEEK = "DOW";
p.EVENT_ID = "EID";
p.JUDGEMENT_ID = "JID";
p.FREE_SKIP = "FS";
p.FOOD_CONSUMPTION_REDUCTION = "FCR";
p.TIME_UNTIL_NEXT_COLLECTION = "NC";
p.REMAINING_COLLECTIONS = "RC";
p.EXTRA_GOODS = "EG";
p.XP = "XP";
p.OLD_SLOT = "OS";
p.NEW_SLOT = "NS";
p.SLOT_ID = "S";
p.SLOT_ID_2 = "SID";
p.SKIN_ID_2 = "SID";
p.SKIN_ID_3 = "SKN";
p.LEAGUE_ID = "ALID";
p.UPCOMING_EVENTS = "UE";
p.SUB_TYPE = "ST";
p.FOUND_RANK = "FR";
p.WOOD_AND_STONE_PRODUCTION_REDUCTION = "WSR";
p.UNIT_ID = "U";
p.TAKE_FROM_STRONGHOLD = "S";
p.AREAS = "A";
p.UNLOCKED_HORSES = "UH";
p.LOCKED_UNITS = "L";
p.SAFE_HOUSE_INVENTORY = "SHI";
p.HOSPITAL_INVENTORY = "HI";
p.TRAVELLING_UNITS = "TU";
p.RESEARCH_ID = "RID";
p.SOURCE_AREA_ID = "SCID";
p.SOURCE_AREA_ID_2 = "SID";
p.TARGET_AREA_ID = "TCID";
p.OWNER_ID = "OID";
p.HORSE_WOD_ID = "HBW";
p.BOUGHT_PREMIUM_COMMANDER = "BPC";
p.VISIBLE_FOR_ALLIANCE = "AV";
p.LOOT_PRIORITY = "LP";
p.KING_TOWER_BONUS = "KTB";
p.EMBLEM = "E";
p.MORALE_BONUS = "MB";
p.WAIT_TIME_INDEX = "WT";
p.WAIT_TIME_HOURS = "WT";
p.CAMP_ID = "CID";
p.EFFECT = "E";
p.AVAILABLE_SPY_COUNT = "AS";
p.AVAILABLE_PLAGUE_MONK_COUNT = "APM";
p.TRAVELLING_PLAGUE_MONK_COUNT = "TPM";
p.AGE_SPY = "AS";
p.OBJECT_THINGY = "O";
p.VILLAGES = "VI";
p.HAS_CONTOR = "C";
p.RESOURCES_TRANSPORTED = "RT";
p.SLUM_PAID_WOOD = "SPW";
p.SLUM_PAID_STONE = "SPS";
p.SLUM_PAID_FOOD = "SPF";
p.SLUM_PAID_C1 = "SPC1";
p.DIRECTION = "D";
p.RELOCATION_COUNT = "RLC";
p.REMAINING_RELOCATION_COOLDOWN = "RMC";
p.JUST_MOVED = "JM";
p.ORIGIN_X_COORDINATE = "OX";
p.ORIGIN_Y_COORDINATE = "OY";
p.X_POSITION_2 = "PX";
p.Y_POSITION_2 = "PY";
p.CHOSEN_DURATION_INDEX = "CD";
p.NEW_NAME = "N";
p.HAS_TO_PAY = "P";
p.DISABLE_JUMP = "DJ";
p.INCLUDE_MIDDLE_LOG = "IM";
p.IGNORE = "IGN";
p.OWNER_CASTLE_ID = "OCID";
p.TARGET_CASTLE_ID = "TCID";
p.RESOURCES = "R";
p.ISLAND_RANDOM_SEED = "I";
p.ALLIANCE_BOOKMARK_INFO = "ABI";
p.CREATED_AVATAR_EMBLEM = "CAE";
p.EMBLEM_SYMBOL_1_ID = "S1";
p.EMBLEM_SYMBOL_2_ID = "S2";
p.NEW_PASSWORD = "NPW";
p.NEW_BCRYPT_PASSWORD = "NBPW";
p.OLD_PASSWORD = "OPW";
p.INDEX = "I";
p.SPECIAL_PARAMETER = "SP";
p.REWARDED_TROOPS_WOD_ID = "ID";
p.PORTAL_LOGIN_NAME = "PLN";
p.DAY = "D";
p.NAME_OR_MAIL = "NOM";
p.DISTRIBUTOR_ID = "ID";
p.SHOW_VIP_FLAG = "SVF";
p.IS_OFFLINE_FOR_FRIENDS = "OFF";
p.CONFIRM_C2_THRESHOLD = "CC2T";
p.USE_BIG_MESSAGE_BOX = "BIG";
p.MESSAGE_2 = "MSG";
p.TIMESTAMP = "T";
p.NEXT_RETENTION_REWARD = "NRR";
p.CAN_COLLECT = "CC";
p.MEMBERS = "M";
p.RESOURCE_TYPE_2 = "T";
p.GEM_ID = "GID";
p.EQUIPMENT_ID = "EID";
p.HERO_ID = "HID";
p.SUCCESS = "S";
p.USED_GEM_IDS = "UG";
p.MADE_GEM_ID = "MID";
p.DO_EQUIP = "E";
p.REMAINING_EQUIPMENT_INVENTORY_SPACE = "E";
p.TOTAL_EQUIPMENT_INVENTORY_SPACE = "TE";
p.REMAINING_CONSTRUCTION_ITEM_INVENTORY_SPACE = "C";
p.REMAINING_GEM_INVENTORY_SPACE = "G";
p.TOTAL_GEM_INVENTORY_SPACE = "TG";
p.RECEIVED_REWARDS = "RR";
p.MISSION_ID = "MID";
p.MINUTE_SKIP_TYPE = "MST";
p.MINUTE_SKIPS = "MS";
p.ISSUER_ID = "IID";
p.EVENT_COMMAND = "CMD";
p.SKIP_WITH_C2 = "SC";
p.FOOD_STORED = "FS";
p.REMAINING_NOOB_PROTECTION_TIME_IN_SECONDS = "NS";
p.TIME_SINCE_LAST_ACTIVE = "LA";
p.WAS_RESETTED = "WR";
p.INCLUDE_CASTLE_DEFENSE = "CD";
p.TOTAL_CARRIAGES_2 = "MC";
p.HAS_BARRACKS = "B";
p.HAS_WORKSHOP = "WS";
p.HAS_DEFENSE_WORKSHOP = "DW";
p.HAS_HOSPITAL = "H";
p.ARMY_COLLECTION = "AC";
p.DEFENSE_DECORATION = "D";
p.HONOR_RANK = "RP";
p.BONUS_SPY_AMOUNT = "BS";
p.MAXIMUM_SPY_AMOUNT = "MS";
p.HAS_EVER_CHANGED_NAME = "ECN";
p.ADMIN_SECURITY_LEVEL = "CL";
p.USER_ID = "UID";
p.HAS_PREMIUM_FLAG = "PF";
p.CURRENT_PLAYER_LEVEL = "LVL";
p.NEW_PLAYER_LEVEL = "NL";
p.XP_FOR_CURRENT_LEVEL = "XPFCL";
p.XP_FOR_NEXT_LEVEL = "XPTNL";
p.LAST_WEEKS_RANK = "LWR";
p.CURRENT_HONOR_RANK = "CWR";
p.LIST_TYPE = "LT";
p.LAST_ROW = "LR";
p.HIGHSCORE_LIST = "L";
p.ALLIANCE_RANK = "R";
p.ALLIANCE_CURRENT_FAME = "ACF";
p.IS_SEARCHING_ALLIANCE_2 = "SA";
p.USED_PREMIUM_GENERALS = "UPG";
p.VIP_REMAINING_SECONDS = "VRS";
p.VIP_REACHED_LEVEL = "VRL";
p.OFFER_ID = "OID";
p.OFFER_DESCRIPTION_INDEX = "ODI";
p.OFFER_ACCEPTED = "C";
p.WAS_INSTANT_COMPLETED = "IC";
p.GAINED_EQUIPMENT = "GEQ";
p.DAILY_ACTIVITY_TYPE = "DA";
p.ARTIFACT_PIECES_FOUND = "PF";
p.WOOD_PACKAGES = "WP";
p.FOOD_PACKAGES = "FP";
p.STONE_PACKAGES = "SP";
p.DONATED_COINS = "DC";
p.DONATED_STONE = "DS";
p.DONATED_WOOD = "DW";
p.IS_SMALL_LIST = "S";
p.CURRENT_RANK = "OR";
p.HIGHSCORE = "HS";
p.AREA_TYPE_2 = "T";
p.MINIMUM_LEVEL = "LMIN";
p.MAXIMUM_LEVEL = "LMAX";
p.IS_PLAYER_ACTIVE = "PA";
p.CAMP_TYPE_ID = "ID";
p.DO_COLLECT_REWARDS = "CR";
p.RECEIVER_PLAYER_ID = "RID";
p.REWARD_COUNT = "RC";
p.REWARDS = "RW";
p.WON_RUBIES = "WR";
p.FOOD_COST = "F";
p.FOOD_PRODUCED = "FP";
p.WOOD_PRODUCED = "WP";
p.STONE_PRODUCED = "SP";
p.COAL_STORED = "CS";
p.COAL_PRODUCED = "CP";
p.OIL_STORED = "OS";
p.OIL_PRODUCED = "OP";
p.GLASS_STORED = "GS";
p.GLASS_PRODUCED = "GP";
p.IRON_STORED = "IS";
p.IRON_PRODUCED = "IP";
p.EVENTS = "E";
p.AREA_1_X_COORDINATE = "AX1";
p.AREA_1_Y_COORDINATE = "AY1";
p.AREA_2_X_COORDINATE = "AX2";
p.AREA_2_Y_COORDINATE = "AY2";
p.AREA_ID_2 = "ID";
p.AREA_NAME = "AN";
p.TOPIC_COUNT = "TC";
p.TOPICS = "T";
p.ALLIANCE_RANK_2 = "AR";
p.TOPIC_NAME_2 = "N";
p.TOPIC_CREATION_TIMESTAMP = "CT";
p.TOPIC_CREATOR_RANK = "CR";
p.REPLY_COUNT = "RC";
p.LAST_REPLY_CREATOR_NAME = "LRN";
p.LAST_REPLY_CREATION_TIMESTAMP = "LRT";
p.TOPIC_IS_READ = "R";
p.REPLIES = "R";
p.HELP_TYPE_ID = "TID";
p.MESSAGE_AGE = "MA";
p.HAS_ALREADY_CONFIRMED = "AC";
p.OPTIONAL_PARAMETERS = "OP";
p.ALLIANCE_HELP_LIST = "AHL";
p.MESSAGE_3 = "MT";
p.SOURCE_ID = "SID";
p.NPC_OWNER_ID = "NID";
p.CURRENCY_1_STORED = "SC1";
p.CURRENCY_2_STORED = "SC2";
p.WOOD_STORED_2 = "SW";
p.FREE_RENAMES = "FR";
p.IS_AUTO_WAR_ENABLED = "AW";
p.APPLICATION_AMOUNT = "AA";
p.REQUESTED_DELETE_TIME = "RT";
p.HAS_PACT_CAP_REACHED = "HP";
p.IS_LOOKING_FOR_MEMBERS = "IS";
p.BUFF_LEVELS = "BL";
p.BUFF_COOLDOWNS = "BC";
p.IS_INVENTORY_FULL = "IF";
p.ALLIANCE_LOGS = "AL";
p.BACKGROUND_TYPE = "BGT";
p.BACKGROUND_COLOR_1 = "BGC1";
p.BACKGROUND_COLOR_2 = "BGC2";
p.BACKGROUND_COLOR_3 = "BGC3";
p.SYMBOL_POSITION_TYPE = "SPT";
p.EMBLEM_SYMBOL_1_COLOR = "SC1";
p.EMBLEM_SYMBOL_2_COLOR = "SC2";
p.EMBLEM_SYMBOL_3_ID = "S3";
p.EMBLEM_SYMBOL_3_COLOR = "SC3";
p.MEMBER_COUNT = "M";
p.PACKAGE_ID_LIST = "PIDL";
p.IGNORED_PLAYERS = "IPS";
p.PLAYER_NAME_2 = "N";
p.OWNER_PLAYER_ID = "OID";
p.IS_DUMMY = "DUM";
p.SKIP_COST_PER_MINUTE = "CPM";
p.SKIP_LEVEL = "SL";
p.SINGLE_PLAYER = "SP";
p.ROTATION_INDEX = "RIDX";
p.ALLIANCE_RANKING_INFO = "A";
p.TOTAL_HOURS = "TH";
p.TARGET_PLAYER_ID = "PID";
p.HAS_WON = "HW";
p.AREA = "A";
p.HAS_FINISHED = "F";
p.ANNOUNCED_EVENT_ID = "AEID";
p.HAS_COLLECTED_REWARDS = "COL";
p.THEME = "T";
p.ATTACKABLE_CAMPS = "AC";
p.LAST_SKIPPABLE_SECOND = "SEC";
p.IS_ALREADY_COLLECTED = "AC";
p.POINT_EVENT_TYPE = "PET";
p.WINNING_CATEGORY = "WC";
p.SUB_EVENT_ID = "SEID";
p.REAL_PRICE = "RP";
p.IS_TIMELESS = "TML";
p.TIME_IN_SECONDS = "TS";
p.SCALE_FACTOR = "SC";
p.OCCUPIER_ID = "OCID";
p.MOVEMENT_TYPE = "T";
p.MEMBER_BUFF_LEVEL = "ML";
p.INVITER_ID = "INV";
p.CONNECTIONS = "CON";
p.IS_ONLINE = "ION";
p.IS_INVITER = "IIN";
p.IS_REFERRED = "IRF";
p.USING_ONLY_CURRENCY_2 = "OC2";
p.IS_FORCED_CANCELABLE = "FC";
p.IS_GROUPED_HIGHSCORE = "IGH";
p.CURRENCY_CODE = "CC";
p.VOUCHER_CODE = "VC";
p.PRICE_DATA = "PD";
p.LIFETIME_SPENT_C2 = "LTS";
p.C2_SPENT_90_DAYS = "SND";
p.USE_90_DAYS_SPENT = "UNDS";
p.BOUGHT_C2 = "BC2";
p.C2_SOURCE = "C2SRC";
p.SEND_ONE_PAY_POPUP = "PB";
p.IS_PAY_USER = "PU";
p.PAYMENT_DOPPLER_COUNT = "DC";
p.LAST_PAY_DATE = "LPD";
p.FIRST_PAY_DATE = "FPD";
p.KINGDOM_FAME_BOOST = "KFB";
p.LEVEL_RANGE = "LR";
p.NTH_TARGET = "N";
p.FACEBOOK_LOGIN_CLIENT_TRACKING = "FBD";
p.USER_SURVEY_SEEN_CLIENT_TRACKING = "USS";
p.MOBILE_ADVERTISING_ID = "ADID";
p.APPSFLYER_UID = "AFUID";
p.IOS_IDFV = "IDFV";
p.TEST_ID = "TID";
p.TEST_CASE_ID = "CID";
p.PACKAGE_INSTALLER_ID = "PAID";
p.PRE_INSTALL_ID = "PRID";
p.SLOT_TYPE = "ST";
p.RECRUITMENT_MODE = "RM";
p.RECRUITMENT_LIST_ID = "LID";
p.RECRUITMENT_LIST_ID_2 = "RLID";
p.HOSPITAL_SLOT_OVERVIEW = "SOH";
p.RECRUITMENT_SNAPSHOT = "RS";
p.CURRENT_FOOD_CONSUMPTION = "CFC";
p.CURRENT_RECRUITMENT_TIME = "CRT";
p.ADDITIONAL_FOOD_CONSUMPTION = "AFC";
p.ADDITIONAL_RECRUITMENT_TIME = "ART";
p.CURRENT_BOOST_STAGE = "CBS";
p.INITIAL_AMOUNT = "IA";
p.DOUBLING_COST_C2 = "DC";
p.PRODUCTIVITY = "P";
p.FOOD_PRODUCTION = "FP";
p.ERROR_ID = "EID";
p.COST_WOOD = "CW";
p.COST_STONE = "CS";
p.INITIAL_COMPLETION_TIME = "ICT";
p.RECEIVED_ALLIANCE_HELP = "RAH";
p.REMAINING_COMPLETION_TIME = "RCT";
p.TOTAL_UNIT_AMOUNT = "TUA";
p.PRODUCTION_SLOT = "PS";
p.QUEUE_SLOTS = "QS";
p.PACKAGE = "P";
p.SLOT_INFO = "SI";
p.REMAINING_UNLOCK_TIME = "RUT";
p.UNLOCKED_BY_VIP = "VIP";
p.SOURCE_PACKAGE_ID = "SPID";
p.TOTAL_COMPLETION_TIME = "TCT";
p.NEW_UNIT_AMOUNT = "NUA";
p.RECEIVED_UNIT_AMOUNT = "RUA";
p.DIALOG_NAME = "DN";
p.ACTION = "A";
p.STATE_LAYOUT = "SL";
p.ANNOUNCEMENT_AVAILABLE = "AA";
p.ANNOUNCEMENT_MESSAGES = "A";
p.ANNOUNCEMENT_ID = "ID";
p.ANNOUNCEMENT_IDS = "IDS";
p.ANNOUNCEMENT_LANGUAGE = "L";
p.ANNOUNCEMENT_FILTER = "F";
p.ANNOUNCEMENT_TITLE = "T";
p.ANNOUNCEMENT_MESSAGE = "M";
p.ANNOUNCEMENT_FILTER_PLAYER_LEVEL_MIN = "LMIN";
p.ANNOUNCEMENT_FILTER_PLAYER_LEVEL_MAX = "LMAX";
p.ANNOUNCEMENT_FILTER_PAY_USER = "PU";
p.ANNOUNCEMENT_FILTER_OS_TYPE = "OS";
p.ANNOUNCEMENT_FILTER_OS_TYPE_IOS = "ios";
p.ANNOUNCEMENT_FILTER_OS_TYPE_ANDROID = "android";
p.ANNOUNCEMENT_FILTER_STORE = "S";
p.ANNOUNCEMENT_FILTER_STORE_AMAZON = "amazon";
p.ANNOUNCEMENT_FILTER_STORE_APPLE = "apple";
p.ANNOUNCEMENT_FILTER_STORE_GOOGLE = "google";
p.ANNOUNCEMENT_FILTER_STORE_SAMSUNG = "samsung";
p.ANNOUNCEMENT_FILTER_OS_VERSION_MIN = "OSMIN";
p.ANNOUNCEMENT_FILTER_OS_VERSION_MAX = "OSMAX";
p.ACTIVE_RESEARCH_ID = "ARID";
p.ACTIVE_RESEARCH_REMAINING_TIME = "ARRT";
p.BOUGHT_RESEARCHES = "BR";
p.DEVICE_MODEL = "DM";
p.MOBILE_NETWORK_ID = "MNID";
p.PROMOTION_BANNER_ID = "PID";
p.CHANCE = "CH";
p.VILLAGE_ID = "VID";
p.XML_VILLAGE_ID = "XID";
p.VILLAGE_TYPE = "VT";
p.VILLAGE_LEVEL = "VL";
p.PRIVATE_RESOURCE_VILLAGES = "PV";
p.RESOURCE_VILLAGE_TOKEN = "RVT";
p.SKILL_ID = "ID";
p.SKILL_IDS = "IDS";
p.SKILL_IDS_2 = "SID";
p.LEGEND_SKILLS = "LS";
p.RESET_COUNT = "RC";
p.SCEAT_SKILL_IDS = "SIDS";
p.SCEAT_SKILL_ACTIVATIONS = "SSA";
p.SCEAT_SKILLS_TAB_ID = "TID";
p.SUBSCRIPTION_TYPE_ID = "STID";
p.ALLIANCE_SUBSCRIBERS_COUNT = "ASC";
p.SUBSCRIPTION_PACKAGES = "SP";
p.REMAINING_SECONDS_WITH_GRACE_PERIOD = "RSGP";
p.SUBSCRIPTION_LOYALTY_BOOST = "SLB";
p.ALLIANCE_RAGE = "AR";
p.ALLIANCE_CAMP = "AC";
p.ALLIANCE_CAMP_ID = "ACID";
p.ALLIANCE_CAMP_ENABLED = "ACE";
p.ALLIANCE_CAMP_VICTORY_COUNT = "ACVC";
p.PLAYER_RAGE_POINTS_TYPE = "PRPT";
p.PLAYER_CURRENT_RAGE_POINTS = "PCRP";
p.PLAYER_TOTAL_RAGE_POINTS = "PTRP";
p.REWARD_SET_ID = "RSID";
p.END_REWARD_VALUE = "ERV";
p.START_TIMESTAMP = "ST";
p.EXPIRED_EQUIPMENTS = "EE";
p.REGULAR_DECORATIONS = "RD";
p.CUSTOM_DECORATIONS = "CD";
p.UNIQUE_DECORATIONS = "UD";
p.STORAGE_ID = "SID";
p.FUSION_FORGE_ID = "FID";
p.FUSION_FORGE_IDS = "FIDS";
p.FUSION_FORGE_ENERGY = "FE";
p.FUSION_FORGE_LEVEL = "FL";
p.FUSION_FORGE_ENERGY_RECHARGE_INTERVAL_PROGRESS_IN_SECONDS = "FRS";
p.FUSION_FORGE_USED_MINUTE_SKIPS = "FUM";
p.FUSION_FORGE_USED_PREMIUM_SKIPS = "FUPS";
p.FUSION_FORGE_INFO = "FI";
p.FUSION_FORGE_SKIP_RECHARGE_USE_PREMIUM = "FSRP";
p.FUSION_FORGE_SKIP_RECHARGE_MINUTE_SKIP_ID = "FSRMID";
p.FUSION_FORGE_CATALYST_CONVERSION_DIRECTION = "FCCD";
p.FUSION_FORGE_CATALYST_ID = "FCID";
p.FUSION_FORGE_CATALYST_CONVERSION_AMOUNT = "FCCA";
p.FUSION_FORGE_FUSE_USE_PREMIUM = "FFFP";
p.FUSION_SOURCE_UNIQUE_DECORATION_ID = "FSUID";
p.FUSION_SOURCE_WOD_ID = "FSWID";
p.FUSION_TARGET_UNIQUE_DECORATION_ID = "FTUID";
p.FUSION_TARGET_WOD_ID = "FTWID";
p.FUSION_TARGET_OBJECT_ID = "FTOID";
p.FUSION_TARGET_SPACE_ID = "FTSID";
p.FUSION_TARGET_AREA_ID = "FTAID";
p.FUSION_XP = "FXP";
p.BONUS_FUSION_XP = "BFXP";
p.AUTO_SELL_EQUIPMENT_CONDITIONS = "ECS";
p.AUTO_SELL_GEM_CONDITIONS = "GCS";
p.POPOVER_ID = "ID";
p.POPOVER_DATA = "D";
p.PUSH_NOTIFICATION_CATEGORY_ACTIVE = "A";
p.PUSH_NOTIFICATION_DEVICE_TOKEN = "D";
p.PUSH_NOTIFICATION_CATEGORIES = "C";
p.PUSH_NOTIFICATION_DEVICE_PLATFORM = "PL";
p.SHOP_ITEM_ID = "IID";
p.SHOP_PROVIDER_ID = "PID";
p.SHOP_GAME_SESSION_ID = "GSID";
p.GLOBALSERVER_LOGIN_TOKEN = "TLT";
p.COUNTRY_CODE = "CC";
p.REGISTRATION_IP = "IP";
p.GLOBALSERVER_ZONE = "TSZ";
p.GLOBALSERVER_IP = "TSIP";
p.GLOBALSERVER_PORT = "TSP";
p.IS_TEMPSERVER = "ITS";
p.DEVICE_ID = "DID";
p.TEMPSERVER_TOKEN_PLATFORM_ID = "PPID";
p.NETWORK_ID = "NID";
p.DAILY_POINTS_MIN_MODIFIER = "DPMM";
p.DAILY_POINTS_MAX_MODIFIER = "DPXM";
p.PREBUILT_CASTLE_ID = "PBCI";
p.SETTING_ID = "TSID";
p.RUNTIME_IN_DAYS = "TSR";
p.TEMP_SERVER_BUILDING_MIGHT = "TSBM";
p.TEMP_SERVER_COLLECTOR_KEYS = "TCK";
p.IS_PRESET_SELECTED = "IPS";
p.DAILY_RANK = "DR";
p.DAILY_HIGHSCORE = "DHS";
p.TEMP_SERVER_CAMP_ID = "TSCI";
p.TEMP_SERVER = "TS";
p.PLAYER_DAILY_TASK_REWARD_ID = "DTR";
p.PLAYER_DAILY_TASK_REWARD_LEVEL = "DTRL";
p.PLAYER_DAILY_TASK_POINTS = "DTP";
p.IS_SUPPORT_LOGIN = "ISL";
p.IS_COLLECTOR_ATTACK = "ICA";
p.COLLECTOR_KEYS = "CK";
p.COLLECTOR_SECONDS_TO_DAILY_PAYOUT = "SDP";
p.COLLECTOR_EVENT_OPTION_ID = "EOID";
p.COLLECTOR_CURRENCY_AMOUNT = "CCA";
p.TRIGGER_EVENTS = "TE";
p.TRIGGER_ID = "TRID";
p.SEASON_RUNTIME = "KLRT";
p.SEASON_REMAINING_DAYS = "KLRD";
p.SEASON_MODE_ENABLED = "KL";
p.SEASON_DIVISION = "KLD";
p.SEASON_DIVISION_ID = "KLDID";
p.SEASON_DIVISION_SIZE = "KLDS";
p.SEASON_POINTS = "KLCP";
p.SEASON_MEDALS = "KLM";
p.SEASON_MEDALS_OVERVIEW = "KLMO";
p.SEASON_MEDAL_ID = "KLMID";
p.SEASON_RANK = "KLR";
p.SEASON_RANK_ID = "KLRID";
p.SEASON_MEDAL_POINTS = "KLMP";
p.SEASON_PASS_ENABLED = "KLP";
p.SEASON_PASS = "KLSP";
p.SEASON_SEEN_EVENT_START = "KLSE";
p.SEASON_SEEN_START = "KLS";
p.SEASON_ALLIANCE_RANKING_ENABLED = "KLARE";
p.SEASON_ALLIANCE_POINTS = "KLAP";
p.SEASON_ALLIANCE_MEDAL_ID = "KLAMID";
p.SEASON_ALLIANCE_RANK = "KLAR";
p.SEASON_ALLIANCE_MEDALS = "KLAM";
p.SEASON_LEAGUE_TYPE_ID = "KLLID";
p.SEASON_PROMOTION_PASSES = "KLPP";
p.SEASON_EVENT_PASS_ENABLED = "KLEPE";
p.SEASON_PASS_TYPE = "KLPT";
p.SEASON_ID = "KLID";
p.SEASON_PROMOTION_PASS_ENABLED = "KLPPE";
p.GLOBAL_EFFECTS = "GE";
p.SEEN_GLOBAL_EFFECTS = "SGE";
p.GLOBAL_EFFECT_BOOSTERS = "GEB";
p.GLOBAL_EFFECT_ID = "GEID";
p.BOOST_VALUE = "BV";
p.USE_PREMIUM_RELIC_ALLIANCE_FORGE = "UPRAF";
p.MAY_FORGE = "MF";
p.SOFT_CURRENCY_RELIC_ALLIANCE_FORGE_USES = "SRFU";
p.HARD_CURRENCY_RELIC_ALLIANCE_FORGE_USES = "HRFU";
p.DONATE_CURRENCY_ID = "CID";
p.DONATE_CURRENCY_AMOUNT = "A";
p.NEW_RELICS = "NR";
p.RELIC_ITEM_ID = "RIID";
p.IS_GEM = "IG";
p.EXPANDABLE_AREAS = "EA";
p.REWARD_OBJECT_TYPE = "ROT";
p.REWARD_OBJECT_VALUE = "ROV";
p.EXPIRE_TIME = "ET";
p.LOST_AND_FOUND_ID = "LFID";
p.CREATION_TIMESTAMP = "CT";
p.RELIC_GEM = "GEM";
p.RELIC_EQUIPMENT = "EQ";
p.LOST_AND_FOUND_ELAPSED_SECONDS = "LFES";
p.USE_PREMIUM = "P";
p.LOCKED_SLOTS = "LS";
p.TRAINING_PROGRAMS = "TP";
p.TRAINING_EFFECT = "TE";
p.ACTIVE_TRAINING = "AT";
p.TRAINING_PROLONG_COUNTER = "PC";
p.DAIMYO_INFO = "DY";
p.DAIMYO_ENABLED = "E";
p.DAIMYO_CASTLES = "DC";
p.DAIMYO_TOWNSHIPS = "DT";
p.DAIMYO_ALLIANCE_CONTRACTS = "C";
p.DAIMYO_CASTLE_CONTRACTS = "DCC";
p.DAIMYO_TOWNSHIP_CONTRACTS = "DTC";
p.DAIMYO_WAR_EFFORTS = "WES";
p.DAIMYO_TOTAL_WAR_EFFORT = "TWE";
p.DAIMYO_CASTLE_WAR_EFFORTS = "CWES";
p.DAIMYO_TOWNSHIP_WAR_EFFORTS = "TWES";
p.DAIMYO_COOLDOWN_COUNTER = "CDC";
p.SAMURAI_MEDAL_BOOSTER_KEYS = "SMK";
p.SHOGUN_POINTS = "SP";
p.SHOGUN_POINT_BOOSTER_KEYS = "SPK";
p.DAIMYO_AREA_RANK = "DAR";
p.DAIMYO_DIFFICULTY_CAMP_ID = "DDCID";
p.RELIC_ENCHANTER_ENABLED = "E";
p.RELIC_FRAGMENT_BOOST = "RFB";
p.WEB_SHOP_SESSION_ID = "sessionId";
p.WEB_SHOP_PACKAGE_ID = "packageId";
p.CASH_OFFER_ID = "cashOfferId";
p.API_TOKEN = "apiToken";
p.AUTH_PLATFORM = "platform";
p.APPLE_TOKEN = "appleToken";
p.APPLE_ID = "appleId";
p.APPLE_AUTH_CODE = "authCode";
p.ALLIANCE_LEADER_PLAYER_ID = "ALPI";
p.ALLIANCE_BATTLEGROUND_CAMP_ID = "BGCI";
p.GLOBAL_SERVER_TYPE = "GST";
p.MAX_ALLIANCE_SIZE = "MAS";
p.MAX_INFLUENCE_POINTS = "MIP";
p.ALLIANCE_REWARD_ID = "ARID";
p.PLAYER_REWARD_ID = "PRID";
p.PLAYER_STATISTIC_ID = "PSI";
p.PLAYER_STATISTICS = "PST";
p.ALLIANCE_MEMBERS_STATISTICS = "AME";
p.CAPITAL_AMOUNT = "CPA";
p.CAPITAL_LIMIT = "CPL";
p.CITY_STATES_AMOUNT = "CSA";
p.CITY_STATES_PLAYER_LIMIT = "CSPL";
p.CITY_STATES_ALLIANCE_LIMIT = "CSAL";
p.TOWER_AMOUNT = "TWM";
p.TOWER_PLAYER_LIMIT = "TPL";
p.TOWER_ALLIANCE_LIMIT = "TAL";
p.GLOBAL_SERVER_PLAYER_RANK = "PLR";
p.GLOBAL_SERVER_PLAYER_RANK_POINTS = "PLP";
p.GLOBAL_SERVER_ALLIANCE_RANK = "ALR";
p.GLOBAL_SERVER_ALLIANCE_RANK_POINTS = "ALP";
p.ALLIANCE_AREAS_INFO = "AAI";
p.SECONDS_TILL_NEXT_REVIVE = "STNR";
p.SECONDS_TILL_NEXT_RE_LINK = "STNL";
p.TOWERS = "T";
p.TOWER_EFFECTS = "TE";
p.TOWER_EFFECT_ACTIVE = "TEA";
p.TOWER_EFFECT_ID = "TEID";
p.EFFECT_LEVEL_BEFORE_INCREASE = "ELBI";
p.EFFECT_LEVEL_AFTER_INCREASE = "ELAI";
p.REMAINING_JOIN_TIME = "RJT";
p.ALLIANCE_BATTLE_GROUND = "ABG";
p.GLOBAL_SERVER_INFO = "GSI";
p.MAP_TYPE = "MTYP";
p.END_TIMESTAMP = "ET";
p.PLAYER_ID_FULL = "playerId";
p.PAYLOAD = "payload";
p.CXF_PUSH_TOPIC = "topic";
p.CXF_BROADCAST_TOPIC = "topic";
p.LUCKY_WHEEL_EVENT_TYPE = "LWET";
p.LUCKY_WHEEL_TICKETS = "LWT";
p.DISTRICT_OBJECT_ID = "DOID";
p.FORTUNE_TELLER_DRAW_COUNT = "FTDC";
p.FORTUNE_TELLER_REWARD_ID_CHANCES = "FTRC";
p.VISUAL_COMPONENT_METADATA = "VCM";
p.FILTER_ID = "FID";
p.IS_ACTIVATION = "ACT";
p.ACTIVE_FILTERS = "AFS";
p.EMBLEM_UNLOCKED_SYMBOL_IDS = "U";
p.EMBLEM_PAID_SYMBOL_IDS = "P";
p.DOWNTIME_STATUS = "DTS";
p.PARENT_OFFER_ID = "POID";
p.SILENT_RECONNECT_ENABLED = "SRC";
p.SILENT_RECONNECT_ISO_ENABLED = "SRI";
p.IGS_REDIRECT_TO_HC_ENABLED = "ISR";
p.HOSPITAL_RUBY_FILTER = "HRF";
p.PRIORITISE_PRODUCTION_OVER_TROOPS = "PPOT";
p.HAS_ALLIANCE_ENTERED = "AE";
p.INTERNAL_RANK = "IR";
p.HAS_PLAYER_ENTERED = "PE";
p.HAS_ALLIANCE = "HA";
p.ALLIANCE_REWARD_IDS = "ARIDS";
p.PLAYER_REWARD_IDS = "PRIDS";
p.FEAST_REDUCTION_MODIFIER = "FRM";
p.PING = "ping";
p.PARENT_PARTITION_KEY = "parentPartitionKey";
p.HUB_REWARD_ID = "hubRewardID";
p.PARENT_SORT_KEY = "parentSortKey";
p.PARENT_STILL_ACTIVE = "parentStillActive";
p.EXTRA_TIER_UNLOCKED_BY_PARENT = "extraTierUnlockedByParent";
p.EXTRA_TIER_UNLOCK_COST_C_2 = "extraTierUnlockCostC2";
p.EXTRA_TIER_UNLOCKED = "extraTierUnlocked";
p.UNLOCK_TIMESTAMP = "unlockTimestamp";
p.BASIC_TIER = "basicTier";
p.EXTRA_TIER = "extraTier";
p.COLLECTED = "collected";
p.REWARD_HUB_REWARD_IDS = "rewardIds";
p.VISUAL_COMPONENT = "visualComponent";
p.REWARD_HUB_EVENT_ID = "eventID";
p.REWARD_HUB_SUB_EVENT_ID = "subEventID";
p.PROMOTION_ID = "promotionID";
p.COUNTERS = "counters";
p.PRE_UPGRADE_POPUP = "preUpgradePopup";
p.TRACKING_COMPONENT = "trackingComponent";
p.ERROR = "ERROR";
p.CORRELATION_ID = "correlationId";
p.PARENT_SORT_KEY_PREFIX = "parentSortKeyPrefix";
p.CRAFTING_RECIPE_ID = "CRID";
p.CRAFTING_QUEUE_ID = "CQID";
p.CRAFTING_BUILDINGS_INFO = "CBI";
p.CRAFTING_EFFECTS = "CE";
p.CRAFTING_QUEUE_BOOST_EFFECTS = "CQBE";
p.CRAFTING_AREA_INFO = "CAI";
p.PLATFORM_ID = "PLFID";
p.STORE_ID = "SID";
p.EVENT_DIFFICULTY_ID = "EDID";
p.EVENT_AUTO_SCALING_ENABLED = "EASE";
p.HIGHEST_THRESHOLD_REWARD = "HTR";
p.HAS_RECEIVED_ALLIANCE_REAWRDS = "HRAR";
p.RENT_C2_UNLOCK = "C2U";
p.PLAYER_NAME_CHANGE_COUNTER = "PNCC";
p.PLAYER_NAME_CHANGE_COOLDOWN = "PNCD";
p.ENABLE_RUBY_CONFIRMATION = "ERC";
p.DELETION_DATE_TIMESTAMP = "D";
p.IS_GDPR_DELETED = "GDPR";
p.PENDING_MAIL_ADDRESS = "PMA";
p.RESEND_MAIL_ACTION_TYPE = "T";
p.PENDING_MAIL_CHANGE_STATUS = "PMCS";
p.WELCOME_BACK_REWARD_ID = "WBRID";
p.WELCOME_BACK_REWARD_DATE = "WBRD";
p.WELCOME_BACK_REWARD_MIN_INACIVE_DAYS = "WBRMID";
p.ID = "ID";
p.CURRENCY_ID = "CID";
p.LOOTBOX_PAYOUT_ID = "LID";
p.ALL_LOOTBOXES = "ALL";
p.TOMBOLA_KEY = "KEY";
p.TOMBOLA_REWARDS_LIST = "LTR";
p.TOMBOLA_REWARDS_RESPONSE_LIST = "LTRR";
p.KEY_BAR_STATUS = "KBS";
p.TOMBOLA_KEY_BAR_FILLING_AMOUNT = "TBF";
p.KEY_TOMBOLA_REWARDS = "KTR";
p.USED_KEY_ID = "UKI";
p.CHARACTER_ID = "CID";
p.OFFERINGS_ID = "OID";
p.IS_FREE = "IF";
p.CHARACTERS = "CHR";
p.CHARACTER = "CH";
p.FREE_OPENINGS_AVAILABLE = "FOA";
p.LAST_FREE_OPENING = "LFO";
p.RARITY = "R";
p.REWARD_RESPONSE = "RR";
p.ALIAS_POPUP_SELECTION = "APS";
p.IGNORE_REWARD_GRANTING_CHECK = "IGC";
p.GENERAL_ID = "GID";
p.STAR_TIER = "ST";
p.IS_NEW = "IN";
p.LEVELLED_UP = "LU";
p.GENERAL_SKILL_IDS = "SIDS";
p.ABILITY_ID = "AID";
p.GENERAL_ASSIGNED_SLOT_AND_ABILITY_IDS = "GASAIDS";
p.SLOT_AND_ABILITY_IDS = "SAIDS";
p.OLD_XP = "OXP";
p.ATTACKER_ABILITIES = "AA";
p.DEFENDER_ABILITIES = "DA";
p.ENABLE_SPLITRUN_HARDCURRENCY_SHOP = "ESHS";
p.UNITS_YARD_LIMIT = "UYL";
p.ALLIANCE_YARD_UNITS_LIMIT = "AUYL";
p.UNITS_WALL_LIMIT = "UWL";
p.UNITS_YARD = "UY";
p.ALLIANCE_YARD_UNITS = "AUY";
p.UNITS_WALL = "UW";
p.REMAINING_SUPPORT_UNITS = "RSU";
p.FACEBOOK_LOGIN_BUTTON_DISABLE = "FLBD";
p.IS_CROSSPLAY_SERVER = "ICS";
p.GAME_ID = "GID";
p.IS_CROSSPLAY_SERVER_EVENT = "ICSE";
p.AUTO_SKIP_COOLDOWN_TYPE = "ASCT";
p.AUTO_SKIP_C2 = "ASC";
p.AUTO_SKIP_MINUTESKIPS = "ASMS";
p.AUTO_SKIP_SECONDS = "ASS";
p.DISABLE_RUBY_SHOP = "DRS";
p.RECAPTCHA_TOKEN = "RCT";
p.SKIN = "S";
p.DONATION_SETTING_ID = "DSI";
p.DONATION_ITEM_VALUES = "DIV";
p.DONATION_ITEM_ID = "DII";
p.DONATION_ITEM_AMOUNT = "DIA";
p.DONATED_ITEMS = "DIS";
p.DONATION_ITEM_POINTS = "DIP";
p.DONATION_EVENT_END_REWARD_IDS = "DEER";
p.DONATION_EVENT_END_TYPE_POINTS = "DEETP";
p.EFFECT_SOURCE_EQUIPMENT = "EQ";
p.EFFECT_SOURCE_BUILDING = "BG";
p.EFFECT_SOURCE_CONSTRUCTION_ITEM = "CI";
p.EFFECT_SOURCE_OTHER = "OTH";
p.EFFECT_SOURCE_DECORATION = "DE";
p.EFFECT_SOURCE_ALLIANCE_BUFF = "AB";
p.EFFECT_SOURCE_CREST_SYMBOL = "CS";
p.EFFECT_SOURCE_GLOBAL_EFFECT = "GE";
p.EFFECT_SOURCE_PRIVATE_VILLAGE = "PV";
p.EFFECT_SOURCE_TITLE = "TL";
p.EFFECT_SOURCE_RESEARCH = "RH";
p.EFFECT_SOURCE_ALLIANCE_SUBSCRIPTION = "AS";
p.EFFECT_SOURCE_PLAYER_SUBSCRIPTION = "PS";
p.EFFECT_SOURCE_ALLIANCE_COAT = "AC";
p.EFFECT_SOURCE_GENERAL = "GNL";
p.EFFECT_SOURCE_TRAINING = "TG";
p.EFFECT_SOURCE_HIGH_LEVEL_HOL = "HLH";
p.EFFECT_SOURCE_TOOLS = "TLS";
p.EFFECT_SOURCE_SOLDIER = "SR";
p.DATA = "DATA";
p.DISABLE_HELPSHIFT_CHAT = "DHSC";
p.LEADERBOARD_TYPE = "LT";
p.LEADERBOARD_MAX_RESULTS = "M";
p.LEADERBOARD_LIST = "L";
p.LEADERBOARD_NUM_SCORES = "T";
p.LEADERBOARD_SCORE_ID = "SI";
p.LEADERBOARD_RANK = "R";
p.LEADERBOARD_PLAYER_NAME = "P";
p.LEADERBOARD_ALLIANCE_NAME = "A";
p.LEADERBOARD_SERVER_INSTANCE = "I";
p.LEADERBOARD_SCORE = "S";
p.LEADERBOARD_REWARD_SET_ID = "LRSI";
p.LEADERBOARD_SCORE_METADATA = "SM";
p.DIVISION_ID = "DI";
p.SUBDIVISION_ID = "SDI";
p.ADVISOR_ATTACK_CURRENCY_ID = "ACI";
p.ADVISOR_ATTACK_IS_FREE = "AAF";
p.ADVISOR_ATTACK_IS_ACTIVATED = "AAA";
p.ADVISOR_ATTACK_TYPE = "AAT";
p.ADVISOR_ATTACK_COUNT = "AAC";
p.ADVISOR_ATTACK_NUMBER = "AAN";
p.ADVISOR_ATTACK_IS_LAST = "AAL";
p.ADVISOR_ATTACK_SEND_MESSAGE = "AASM";
p.ADVISOR_ATTACK_OVERVIEW_COMMANDERS = "C";
p.ADVISOR_ATTACK_OVERVIEW_GAINED = "G";
p.ADVISOR_ATTACK_OVERVIEW_LOST = "L";
p.ADVISOR_ATTACK_OVERVIEW_LOST_UNITS = "LU";
p.ADVISOR_ATTACK_OVERVIEW_LOST_TOOLS = "LT";
p.ADVISOR_ATTACK_OVERVIEW_WINS = "W";
p.ADVISOR_ATTACK_OVERVIEW_DEFEATS = "D";
p.ADVISOR_ATTACK_OVERVIEW_ABORTS = "P";
p.ATTACK_COUNT = "AC";
p.ATTACK_COUNT_THRESHOLD = "ACTH";
p.ATTACK_COUNT_GROWTH_RATE = "ACGR";
p.ALLIANCE_COAT_LAYOUTS = "ACLS";
p.ALLIANCE_COAT_LAYOUT_ID = "ACLI";
p.ALLIANCE_COAT_COLORS = "ACCS";
p.ALLIANCE_COAT_ISACTIVE = "ACIA";
p.ALLIANCE_COAT_LAYOUT_END_TIMESTAMP = "ACLET";
p.ALLIANCE_COAT_CURRENT_ACTIVE = "ACCA";
p.ALLIANCE_COAT_FALL_BACK = "ACFB";
p.ALLIANCE_COAT_LAYOUT = "ACL";
exports.CommKeys = p;
p.__class = "CommKeys";
var g = function () {
  function ConditionConst() {}
  ConditionConst.calculateSpyCount = function (e) {
    return Math.min(T.MAX_SPY_COUNT, Math.ceil((e - 4) / 10) | 0);
  };
  ConditionConst.amountOfTaxesToCollect = function (e) {
    return (Math.round((Math.exp(e * 0.052) * 150 - 170) / 10) | 0) * 10;
  };
  ConditionConst.getLevelOfClassicDungeonToDestroy = function (e) {
    if (e < 8) {
      return 1;
    } else {
      return Math.min(25, Math.ceil(25 / 65 * (e - 6)) | 0);
    }
  };
  ConditionConst.calculateFameForFight = function (e, t) {
    return Math.round(Math.round(Math.pow(e, 5) * 1e-7 + 5) / 5) * 5 * t | 0;
  };
  return ConditionConst;
}();
exports.ConditionConst = g;
g.__class = "ConditionConst";
var E = function () {
  return function ConstantsSmartFox() {};
}();
E.C2S_RENAME_CASTLE = "arc";
E.S2C_RENAME_CASTLE = "arc";
E.S2C_SERVER_SHUTDOWN = "ssd";
E.S2C_GET_LOGIN_BONUS = "alb";
E.C2S_GET_LOGIN_BONUS = "alb";
E.C2S_CATCH_LOGIN_BONUS = "clb";
E.S2C_CATCH_LOGIN_BONUS = "clb";
E.C2S_STARTUP_LOGINBONUS_COLLECT = "slc";
E.S2C_STARTUP_LOGINBONUS_COLLECT = "slc";
E.C2S_STARTUP_LOGINBONUS_INFO = "sli";
E.S2C_STARTUP_LOGINBONUS_INFO = "sli";
E.C2S_EMAIL_VERIFIED = "lev";
E.C2S_CHANGE_EMBLEM = "cem";
E.S2C_CHANGE_EMBLEM = "cem";
E.C2S_CHOOSE_FREE_NAME = "lcn";
E.S2C_CHOOSE_FREE_NAME = "lcn";
E.C2S_CHOOSE_FREE_EMBLEM = "lce";
E.S2C_CHOOSE_FREE_EMBLEM = "lce";
E.S2C_COMEBACK_POPUP = "lcb";
E.S2C_ADMIN_FEEDBACK = "smg";
E.S2C_SHOW_POPUP = "msp";
E.C2S_UPDATE_PACKAGE_AND_PARTNER_IDS = "upp";
E.C2S_SET_META_DATA_EVENT = "dmd";
E.C2S_API_TOKEN_INFO = "ato";
E.S2C_API_TOKEN_INFO = "ato";
E.S2C_SEASON_EVENT = "sea";
E.C2S_SPECIAL_EVENT_INFO = "sei";
E.S2C_SPECIAL_EVENT_INFO = "sei";
E.S2C_ALLIANCE_TOURNAMENT_REWARD = "atr";
E.S2C_PRIVATE_PRIME_TIME_EVENT = "ppt";
E.S2C_SPECIAL_EVENT_END = "see";
E.C2S_POINT_EVENT_POINTS = "pep";
E.S2C_POINT_EVENT_POINTS = "pep";
E.C2S_SEASON_EVENT_PAY_UNLOCK = "spu";
E.S2C_SEASON_EVENT_PAY_UNLOCK = "spu";
E.C2S_SEASON_JOIN_EVENT = "sje";
E.S2C_SHOPPING_CART_REWARD = "spr";
E.C2S_BOUNTY_HUNTER_SKIP = "bst";
E.S2C_BOUNTY_HUNTER_SKIP = "bst";
E.BOUNTY_HUNTER_VALIDATE_OR_RESET_TARGET_EVENT = "brt";
E.C2S_TRIGGER_EVENT_INFO = "tei";
E.S2C_TRIGGER_EVENT_INFO = "tei";
E.S2C_TRIGGER_EVENT_END = "tee";
E.C2S_BUY_EVENTPACKAGE = "sbp";
E.S2C_BUY_EVENTPACKAGE = "sbp";
E.C2S_GET_PACKAGE_PRIZE = "gpp";
E.S2C_GET_PACKAGE_PRIZE = "gpp";
E.C2S_PLAYER_GIFT_LIST = "pgl";
E.S2C_PLAYER_GIFT_LIST = "pgl";
E.C2S_GRANT_PLAYER_GIFT = "gpg";
E.S2C_GRANT_PLAYER_GIFT = "gpg";
E.C2S_GET_ALLIANCE_INFO = "ain";
E.S2C_GET_ALLIANCE_INFO = "ain";
E.S2C_GET_ALLIANCE_BUFF_LIST = "abl";
E.C2S_FOUND_ALLIANCE = "afo";
E.S2C_FOUND_ALLIANCE = "afo";
E.C2S_ALLIANCE_INVITE_PLAYER = "aip";
E.S2C_ALLIANCE_INVITE_PLAYER = "aip";
E.C2S_ALLIANCE_ACTION_LIST = "all";
E.S2C_ALLIANCE_ACTION_LIST = "all";
E.C2S_ALLIANCE_QUIT = "aqi";
E.S2C_ALLIANCE_QUIT = "aqi";
E.C2S_GET_ALLIANCE_INVITATION = "bai";
E.S2C_GET_ALLIANCE_INVITATION = "bai";
E.C2S_ALLIANCE_ACCEPT_INVITE = "aai";
E.S2C_ALLIANCE_ACCEPT_INVITE = "aai";
E.S2C_ALLIANCE_CHAT_LOG = "acl";
E.C2S_ALLIANCE_CHAT_LOG = "acl";
E.C2S_ALLIANCE_CHAT = "acm";
E.S2C_ALLIANCE_CHAT = "acm";
E.C2S_ALLIANCE_CHAT_VISIBILITY = "acv";
E.S2C_ALLIANCE_CHAT_VISIBILITY = "acv";
E.C2S_ALLIANCE_ONLINE_MEMBERS = "aom";
E.S2C_ALLIANCE_ONLINE_MEMBERS = "aom";
E.C2S_ALLIANCE_DONATE = "ado";
E.S2C_ALLIANCE_DONATE = "ado";
E.C2S_ALLIANCE_UPGRADE = "aug";
E.S2C_ALLIANCE_UPGRADE = "aug";
E.C2S_ALLIANCE_CHANGE_NAME = "acn";
E.S2C_ALLIANCE_CHANGE_NAME = "acn";
E.C2S_ALLIANCE_CHANGE_DESCRIPTION = "acd";
E.S2C_ALLIANCE_CHANGE_DESCRIPTION = "acd";
E.C2S_ALLIANCE_NEWSLETTER = "anl";
E.S2C_ALLIANCE_NEWSLETTER = "anl";
E.C2S_ALLIANCE_KICK_MEMBER = "akm";
E.S2C_ALLIANCE_KICK_MEMBER = "akm";
E.C2S_ALLIANCE_RERANK_MEMBER = "arm";
E.S2C_ALLIANCE_RERANK_MEMBER = "arm";
E.C2S_ALLIANCE_CHANGE_DIPLOMACY = "adp";
E.S2C_ALLIANCE_CHANGE_DIPLOMACY = "adp";
E.C2S_ALLIANCE_REFUSE_DIPLOMACY = "ard";
E.S2C_ALLIANCE_REFUSE_DIPLOMACY = "ard";
E.C2S_ALLIANCE_GET_FAME = "afa";
E.S2C_ALLIANCE_GET_FAME = "afa";
E.C2S_ALLIANCE_SET_SEARCH_ALLIANCE = "asa";
E.S2C_ALLIANCE_SET_SEARCH_ALLIANCE = "asa";
E.C2S_ALLIANCE_SEND_APPLICATION = "saa";
E.S2C_ALLIANCE_SEND_APPLICATION = "saa";
E.C2S_ALLIANCE_APPLICATION_LIST = "aal";
E.S2C_ALLIANCE_APPLICATION_LIST = "aal";
E.C2S_ALLIANCE_ANSWER_APPLICATION = "aaa";
E.C2S_JOIN_OPEN_ALLIANCE = "joa";
E.S2C_JOIN_OPEN_ALLIANCE = "joa";
E.C2S_ALLIANCE_SET_SEARCH_MEMBER = "asm";
E.S2C_ALLIANCE_SET_SEARCH_MEMBER = "asm";
E.C2S_AUTO_ALLIANCE_SEARCH = "aas";
E.S2C_AUTO_ALLIANCE_SEARCH = "aas";
E.C2S_ALLIANCE_HELP_LIST = "ahl";
E.S2C_ALLIANCE_HELP_LIST = "ahl";
E.S2C_ALLIANCE_HELP_FEEDBACK = "ahf";
E.C2S_ALLIANCE_HELP_CONFIRMED = "ahc";
E.C2S_ALLIANCE_HELP_REQUEST_RECRUITMENT = "ahr";
E.S2C_ALLIANCE_HELP_REQUEST_RECRUITMENT = "ahr";
E.S2C_ALLIANCE_HELP_CHANGE_OR_ADD = "ahh";
E.S2C_ALLIANCE_HELP_DELETE = "ahd";
E.C2S_ALLIANCE_HELP_ALL = "aha";
E.C2S_ALLIANCE_SET_AUTO_WAR = "saw";
E.S2C_ALLIANCE_SET_AUTO_WAR = "saw";
E.S2C_GET_CURRENCY = "gcu";
E.S2C_GET_PLAYER_IDENTITY = "gpi";
E.S2C_GET_EMBLEM = "gem";
E.S2C_GET_XP = "gxp";
E.S2C_GET_BASIC_DATA = "gbd";
E.S2C_LEVEL_UP = "glu";
E.S2C_GET_ACTIVITY = "gac";
E.S2C_GET_PERMANENT_CASTLE_DATA = "gpc";
E.C2S_GET_PERMANENT_CASTLE_DATA = "gpc";
E.S2C_GET_PLAYER_ALLIANCE = "gal";
E.C2S_GET_CASTLELIST = "gcl";
E.S2C_GET_CASTLELIST = "gcl";
E.C2S_GET_DETAILPLAYERINFO = "gdi";
E.S2C_GET_DETAILPLAYERINFO = "gdi";
E.S2C_PREMIUM_FLAG_INFO = "gpf";
E.C2S_BUY_PREMIUIM_FLAG = "gbp";
E.S2C_BUY_PREMIUIM_FLAG = "gbp";
E.S2C_HELLO_WORLD = "ghw";
E.C2S_USER_ATTACK_PROTECTION = "uap";
E.S2C_USER_ATTACK_PROTECTION = "uap";
E.S2C_GET_HONOR = "gho";
E.C2S_GET_DETAILEDCASTLELIST = "dcl";
E.S2C_GET_DETAILEDCASTLELIST = "dcl";
E.S2C_GET_FAME = "ufa";
E.S2C_USER_FACTION_POINTS = "ufp";
E.S2C_USER_ACHIEVED_RANK = "uar";
E.C2S_USER_ACHIEVED_RANK = "uar";
E.S2C_GET_PAYMENT_INFO = "upi";
E.S2C_KIKERIKI = "kik";
E.S2C_GET_KINGSTOWER_LIST = "gkl";
E.C2S_GET_PACKAGE_BUY_COUNT = "gbc";
E.S2C_GET_PACKAGE_BUY_COUNT = "gbc";
E.S2C_LIFETIME_SPEND_C2 = "lts";
E.C2S_ADD_BOOKMARK = "bad";
E.S2C_ADD_BOOKMARK = "bad";
E.C2S_CHANGE_BOOKMARK = "bch";
E.S2C_CHANGE_BOOKMARK = "bch";
E.C2S_DELETE_BOOKMARK = "bde";
E.S2C_DELETE_BOOKMARK = "bde";
E.C2S_DELETE_ALLIANCE_BOOKMARK = "abd";
E.S2C_DELETE_ALLIANCE_BOOKMARK = "abd";
E.C2S_GET_BOOKMARKLIST = "gbl";
E.S2C_GET_BOOKMARKLIST = "gbl";
E.C2S_BOOSTER_INFO = "boi";
E.S2C_BOOSTER_INFO = "boi";
E.C2S_OVERSEER_START = "ovs";
E.S2C_OVERSEER_START = "ovs";
E.C2S_DOCTOR_START = "bds";
E.S2C_DOCTOR_START = "bds";
E.C2S_MARAUDER_START = "bms";
E.S2C_MARAUDER_START = "bms";
E.C2S_INSTRUCTOR_START = "bis";
E.S2C_INSTRUCTOR_START = "bis";
E.C2S_ARCHITECT_START = "bas";
E.S2C_ARCHITECT_START = "bas";
E.C2S_CARAVAN_OVERLOADER_START = "bcs";
E.S2C_CARAVAN_OVERLOADER_START = "bcs";
E.C2S_BOOST_RETURNSPEED_START = "brs";
E.S2C_BOOST_RETURNSPEED_START = "brs";
E.C2S_SHOW_CONSTRUCTION_LIST = "scl";
E.S2C_SHOW_CONSTRUCTION_LIST = "scl";
E.C2S_MOVE_CONSTRUCTION_ITEM = "mci";
E.S2C_FINISHED_BUILDING = "fbe";
E.C2S_GET_CASTLE = "gca";
E.S2C_GET_CASTLE = "gca";
E.C2S_GET_CASTLE_RESOURCES = "grc";
E.S2C_GET_CASTLE_RESOURCES = "grc";
E.C2S_GET_CASTLE_PRODUCTION_DATA = "gpa";
E.S2C_GET_CASTLE_PRODUCTION_DATA = "gpa";
E.C2S_PLACE_CUSTOM_INVENTORY_OBJECT = "pio";
E.S2C_PLACE_CUSTOM_INVENTORY_OBJECT = "pio";
E.C2S_BUY_OBJECT = "ebu";
E.S2C_BUY_OBJECT = "ebu";
E.C2S_BUY_EXPANSION = "ebe";
E.S2C_BUY_EXPANSION = "ebe";
E.C2S_MOVE_OBJECT = "emo";
E.S2C_MOVE_OBJECT = "emo";
E.C2S_UPGRADE_OBJECT = "eup";
E.S2C_UPGRADE_OBJECT = "eup";
E.C2S_DISASSEMBLE_OBJECT = "edo";
E.S2C_DISASSEMBLE_OBJECT = "edo";
E.S2C_GET_OBJECT = "ego";
E.C2S_FAST_COMPLETE_OBJECT = "fco";
E.S2C_FAST_COMPLETE_OBJECT = "fco";
E.C2S_REPAIR_BUILDING = "rbu";
E.S2C_REPAIR_BUILDING = "rbu";
E.C2S_UPGRADE_DEFENCE = "eud";
E.S2C_UPGRADE_DEFENCE = "eud";
E.S2C_GET_CHANGED_BUILDING_EFFICIENCY = "gcb";
E.S2C_GET_DAMAGED_BUILDINGS = "gdb";
E.S2C_GET_DAMAGED_BUILDINGS_E4K = "dar";
E.S2C_GET_DAMAGED_BUILDINGS_AND_RUBBLE = "gdr";
E.S2C_RESOURCE_CITIZEN = "irc";
E.C2S_RESOURCE_CITIZEN = "irc";
E.C2S_REPAIR_ALL = "ira";
E.S2C_REPAIR_ALL = "ira";
E.S2C_GET_AREA_BOOSTER = "gab";
E.C2S_MERCENARY_PACKAGE = "mpe";
E.S2C_MERCENARY_PACKAGE = "mpe";
E.C2S_MERCENARY_REFRESH_MISSION = "rmm";
E.S2C_MERCENARY_REFRESH_MISSION = "rmm";
E.S2C_SPECIAL_CURRENCY_EVENT = "sce";
E.GET_CASTLE_TRANSPORTATION_BUILDINGS_EVENT = "gctb";
E.C2S_START_TAX_COLLECTION = "txs";
E.S2C_START_TAX_COLLECTION = "txs";
E.C2S_COLLECT_TAX = "txc";
E.S2C_COLLECT_TAX = "txc";
E.C2S_BRIBE_TAX_COLLECTOR = "btx";
E.S2C_BRIBE_TAX_COLLECTOR = "btx";
E.C2S_TAX_INFO = "txi";
E.S2C_TAX_INFO = "txi";
E.C2S_GET_TUTORIAL_AREAS = "gta";
E.C2S_GET_AREAS = "gaa";
E.S2C_GET_AREAS = "gaa";
E.C2S_JOIN_AREA = "jaa";
E.S2C_JOIN_AREA = "jaa";
E.C2S_JOIN_CASTLE = "jca";
E.S2C_JOIN_CASTLE = "jca";
E.C2S_JOIN_CAMP = "jea";
E.S2C_JOIN_CAMP = "jea";
E.C2S_SEARCH_PLAYER = "wsp";
E.S2C_SEARCH_PLAYER = "wsp";
E.C2S_GET_DUNGEONS = "wgd";
E.C2S_FIND_NEXT_ENEMY_CASTLE_FOR_HONOR = "fec";
E.S2C_FIND_NEXT_ENEMY_CASTLE_FOR_HONOR = "fec";
E.S2C_FIND_NEXT_ENEMY_CASTLE_FOR_GLORY = "ffc";
E.C2S_FIND_NEXT_ENEMY_CASTLE_FOR_GLORY = "ffc";
E.C2S_LEAVE_AREA = "laa";
E.S2C_LEAVE_AREA = "laa";
E.C2S_FIND_NEXT_MAPOBJECT = "fnm";
E.S2C_FIND_NEXT_MAPOBJECT = "fnm";
E.C2S_RUIN_INFO = "rui";
E.S2C_RUIN_INFO = "rui";
E.C2S_START_RELOCATION = "rst";
E.S2C_START_RELOCATION = "rst";
E.C2S_REMEMBER_RUIN = "rmb";
E.S2C_REMEMBER_RUIN = "rmb";
E.S2C_GET_RELOCATION_INFO = "gri";
E.C2S_SHOW_MESSAGES = "sne";
E.S2C_SHOW_MESSAGES = "sne";
E.C2S_SEND_MESSAGE = "sms";
E.S2C_SEND_MESSAGE = "sms";
E.C2S_MARK_MESSAGE_READ = "mmr";
E.C2S_READ_MESSAGES = "rms";
E.S2C_READ_MESSAGES = "rms";
E.C2S_DELETE_MESSAGE = "dms";
E.S2C_DELETE_MESSAGE = "dms";
E.C2S_IGNORE_PLAYER = "ipl";
E.S2C_IGNORE_PLAYER = "ipl";
E.C2S_BATTLE_LOG_SHORT = "bls";
E.S2C_BATTLE_LOG_SHORT = "bls";
E.C2S_BATTLE_LOG_MIDDLE = "blm";
E.S2C_BATTLE_LOG_MIDDLE = "blm";
E.C2S_BATTLE_LOG_DETAIL = "bld";
E.S2C_BATTLE_LOG_DETAIL = "bld";
E.C2S_BUG_REPORT = "brp";
E.S2C_BUG_REPORT = "brp";
E.C2S_MARKET_CARRIAGE_NOTIFY = "mmn";
E.S2C_MARKET_CARRIAGE_NOTIFY = "mmn";
E.S2C_RENAME_CASTLE_INVITATION = "mir";
E.C2S_GET_IGNORED_PLAYERS = "ili";
E.S2C_GET_IGNORED_PLAYERS = "ili";
E.C2S_FORWARD_BATTLE_LOG = "mfb";
E.S2C_FORWARD_BATTLE_LOG = "mfb";
E.C2S_FORWARD_SPY_LOG = "mfs";
E.S2C_FORWARD_SPY_LOG = "mfs";
E.C2S_ARCHIVE_MESSAGES = "ams";
E.S2C_ARCHIVE_MESSAGES = "ams";
E.C2S_PEACEMODE_START = "mps";
E.S2C_PEACEMODE_START = "mps";
E.C2S_OPENGATE_START = "mos";
E.S2C_OPENGATE_START = "mos";
E.C2S_ABANDONOUTPOST_START = "mas";
E.S2C_ABANDONOUTPOST_START = "mas";
E.C2S_ABANDON_OUTPOST_CANCEL = "mac";
E.S2C_ABANDON_OUTPOST_CANCEL = "mac";
E.C2S_GET_ALL_MOVEMENTS = "gam";
E.S2C_GET_ALL_MOVEMENTS = "gam";
E.C2S_CANCEL_MOVEMENT = "mcm";
E.S2C_CANCEL_MOVEMENT = "mcm";
E.C2S_CREATE_DEFENCE_SUPPORT_MOVEMENT = "cds";
E.S2C_CREATE_DEFENCE_SUPPORT_MOVEMENT = "cds";
E.S2C_CREATE_SIEGE_MOVEMENT = "css";
E.C2S_CREATE_ARMY_ATTACK_MOVEMENT = "cra";
E.S2C_CREATE_ARMY_ATTACK_MOVEMENT = "cra";
E.S2C_ARMY_REACHED_SMALL_RADIUS = "asr";
E.S2C_ARMY_REACHED_BIG_RADIUS = "abr";
E.C2S_CREATE_ARMY_TRAVEL_MOVEMENT = "cat";
E.S2C_CREATE_ARMY_TRAVEL_MOVEMENT = "cat";
E.C2S_CREATE_MARKET_MOVEMENT = "crm";
E.S2C_CREATE_MARKET_MOVEMENT = "crm";
E.C2S_SKIP_DUNGEON_COOLDOWN = "sdc";
E.S2C_SKIP_DUNGEON_COOLDOWN = "sdc";
E.C2S_MARKET_INFO = "cmi";
E.S2C_MARKET_INFO = "cmi";
E.C2S_TROOP_SUPPORT_INFO = "sti";
E.S2C_TROOP_SUPPORT_INFO = "sti";
E.C2S_SHOW_INVENTORY = "sin";
E.S2C_SHOW_INVENTORY = "sin";
E.C2S_MARK_BUILDING_IN_STORAGE = "mbs";
E.S2C_MARK_BUILDING_IN_STORAGE = "mbs";
E.C2S_STORE_OBJECT = "sob";
E.S2C_STORE_OBJECT = "sob";
E.C2S_BUY_UNIT_PACKAGE = "bup";
E.S2C_BUY_UNIT_PACKAGE = "bup";
E.C2S_SHOW_PACKAGE_LIST = "spl";
E.S2C_SHOW_PACKAGE_LIST = "spl";
E.C2S_UNLOCK_PACKAGE_SLOT = "ups";
E.S2C_UNLOCK_PACKAGE_SLOT = "ups";
E.C2S_MOVE_UNIT_PACKAGE = "mup";
E.S2C_MOVE_UNIT_PACKAGE = "mup";
E.C2S_CANCEL_UNIT_PACKAGE = "mcu";
E.S2C_CANCEL_UNIT_PACKAGE = "mcu";
E.C2S_GET_UNIT_INVENTORY = "gui";
E.S2C_GET_UNIT_INVENTORY = "gui";
E.C2S_GET_RECEIVED_UNIT_EVENT = "rue";
E.S2C_GET_RECEIVED_UNIT_EVENT = "rue";
E.C2S_BOOST_UNIT_PACKAGE = "bou";
E.S2C_BOOST_UNIT_PACKAGE = "bou";
E.C2S_SET_RECRUITMENT_MODE = "srm";
E.S2C_GET_RECRUITMENT_DUPLICATION_INFO = "dri";
E.C2S_GET_RECRUITMENT_DUPLICATION_INFO = "dri";
E.C2S_DUPLICATE_RECRUITMENT_LIST = "drl";
E.S2C_DUPLICATE_RECRUITMENT_LIST = "drl";
E.C2S_DEFENSE_COMPLETE = "dfc";
E.S2C_DEFENSE_COMPLETE = "dfc";
E.C2S_DEFENSE_WALL = "dfw";
E.S2C_DEFENSE_WALL = "dfw";
E.C2S_DEFENSE_KEEP = "dfk";
E.S2C_DEFENSE_KEEP = "dfk";
E.C2S_DEFENSE_MOAT = "dfm";
E.S2C_DEFENSE_MOAT = "dfm";
E.C2S_INSTANT_BUY_TOOL = "ibt";
E.S2C_INSTANT_BUY_TOOL = "ibt";
E.C2S_GET_ATTACK_CASTLE_INFOS = "aci";
E.S2C_GET_ATTACK_CASTLE_INFOS = "aci";
E.C2S_GET_ATTACK_DUNGEON_INFOS = "adi";
E.S2C_GET_ATTACK_DUNGEON_INFOS = "adi";
E.C2S_GET_CONQUER_INFO_OUTPOST = "coi";
E.S2C_GET_CONQUER_INFO_OUTPOST = "coi";
E.C2S_GET_CONQUER_INFO_CAPITAL = "cci";
E.S2C_GET_CONQUER_INFO_CAPITAL = "cci";
E.C2S_CONQUER_INFO_TRADECENTER = "cti";
E.S2C_CONQUER_INFO_TRADECENTER = "cti";
E.C2S_ATTACK_INFO_BOSSDUNGEON = "abi";
E.S2C_ATTACK_INFO_BOSSDUNGEON = "abi";
E.C2S_ATTACK_INFO_VILLAGE = "avi";
E.S2C_ATTACK_INFO_VILLAGE = "avi";
E.C2S_ATTACK_INFO_LANDMARK = "ali";
E.S2C_ATTACK_INFO_LANDMARK = "ali";
E.C2S_ATTACK_INFO_ISLAND = "aii";
E.S2C_ATTACK_INFO_ISLAND = "aii";
E.S2C_OCCUPATION_TARGET_CHANGED_STATUS = "otc";
E.C2S_GET_PREDEFINED_ATTACK_SETUP = "gas";
E.S2C_GET_PREDEFINED_ATTACK_SETUP = "gas";
E.C2S_SAVE_PREDEFINED_ATTACK_SETUP = "sas";
E.S2C_SAVE_PREDEFINED_ATTACK_SETUP = "sas";
E.C2S_UNLOCK_PREDEFINED_ATTACK_SLOT = "uas";
E.S2C_UNLOCK_PREDEFINED_ATTACK_SLOT = "uas";
E.C2S_GET_ATTACK_INFO = "gai";
E.S2C_GET_ATTACK_INFO = "gai";
E.C2S_GET_MAX_SPYS = "gms";
E.S2C_GET_MAX_SPYS = "gms";
E.C2S_GET_SPY_INFO = "ssi";
E.S2C_GET_SPY_INFO = "ssi";
E.C2S_CREATE_SPY_MOVEMENT = "csm";
E.S2C_CREATE_SPY_MOVEMENT = "csm";
E.C2S_REMOVE_MOVEMENT = "mrm";
E.S2C_REMOVE_MOVEMENT = "mrm";
E.C2S_SPY_LOG_DETAIL = "bsd";
E.S2C_SPY_LOG_DETAIL = "bsd";
E.C2S_GET_SPY_UNITS_EVENT = "ssu";
E.S2C_GET_SPY_UNITS_EVENT = "ssu";
E.S2C_QUEST_START = "qst";
E.S2C_QUEST_FINISHED = "qfi";
E.C2S_QUEST_STARTER_CLICK = "qsc";
E.S2C_QUEST_STARTER_CLICK = "qsc";
E.C2S_QUEST_DONATE_RESOURCES = "qdr";
E.S2C_QUEST_DONATE_RESOURCES = "qdr";
E.C2S_QUEST_LIST = "qli";
E.S2C_QUEST_LIST = "qli";
E.S2C_QUEST_PROGRES = "qpg";
E.S2C_QUEST_MARK_AS_READ = "qmr";
E.C2S_CHECK_COMPLETED_QUESTS = "ccq";
E.S2C_CHECK_COMPLETED_QUESTS = "ccq";
E.C2S_MAIN_CASTLE_RESOURCES = "mcr";
E.S2C_MAIN_CASTLE_RESOURCES = "mcr";
E.C2S_BUY_QUEST = "bcq";
E.S2C_BUY_QUEST = "bcq";
E.C2S_BUY_CAMPAIGN_REWARD = "bcr";
E.S2C_BUY_CAMPAIGN_REWARD = "bcr";
E.S2C_CAMPAIGN_QUEST_STATUS = "cqs";
E.C2S_QUEST_DONATE_CURRENCIES = "qdc";
E.S2C_QUEST_DONATE_CURRENCIES = "qdc";
E.C2S_GET_HIGHSCORE = "hgh";
E.S2C_GET_HIGHSCORE = "hgh";
E.C2S_GET_WEEKLY_HONOR_SCORE = "gwh";
E.S2C_GET_WEEKLY_HONOR_SCORE = "gwh";
E.C2S_REDEEM_WEEKLY_HONOR_SCORE = "rwb";
E.S2C_REDEEM_WEEKLY_HONOR_SCORE = "rwb";
E.C2S_SUPPORT_DEFENCE_INFO = "sdi";
E.S2C_SUPPORT_DEFENCE_INFO = "sdi";
E.C2S_ARTIFACT_FOUND = "saf";
E.S2C_ARTIFACT_FOUND = "saf";
E.C2S_BUY_ARTIFACT_PIECE = "sap";
E.S2C_BUY_ARTIFACT_PIECE = "sap";
E.S2C_PAYMENT_REWARD = "par";
E.S2C_PAYMENT_CONFIRMAMTION = "upc";
E.C2S_START_HUNTER = "hst";
E.S2C_START_HUNTER = "hst";
E.C2S_HUNTER_INFO = "hin";
E.S2C_HUNTER_INFO = "hin";
E.S2C_HUNTER_RETURNED = "hre";
E.C2S_RESEARCH_INFO = "rei";
E.S2C_RESEARCH_INFO = "rei";
E.C2S_RESEARCH_START = "res";
E.S2C_RESEARCH_START = "res";
E.C2S_RESEARCH_FINISH_INSTANT = "rfi";
E.S2C_RESEARCH_FINISH_INSTANT = "rfi";
E.C2S_KINGDOM_INFO = "kpi";
E.S2C_KINGDOM_INFO = "kpi";
E.C2S_KINGDOM_SKIP_TRANSFER = "kst";
E.S2C_KINGDOM_SKIP_TRANSFER = "kst";
E.C2S_KINGDOM_UNIT_TRANSFER = "kut";
E.S2C_KINGDOM_UNIT_TRANSFER = "kut";
E.C2S_KINGDOM_GOODS_TRANSFER = "kgt";
E.S2C_KINGDOM_GOODS_TRANSFER = "kgt";
E.C2S_CRUSADE_SELECT_CAMP = "csc";
E.S2C_CRUSADE_SELECT_CAMP = "csc";
E.C2S_FACTION_SELECT_CAMP = "fsc";
E.S2C_FACTION_SELECT_CAMP = "fsc";
E.C2S_KINGDOM_SELECT_CAMP = "ksc";
E.S2C_KINGDOM_SELECT_CAMP = "ksc";
E.C2S_KINGDOM_GET_VILLAGE_LIST = "kgv";
E.S2C_KINGDOM_GET_VILLAGE_LIST = "kgv";
E.S2C_GET_LOGIN_NAME = "agl";
E.C2S_UNLOCK_EVENT = "ule";
E.S2C_UNLOCK_EVENT = "ule";
E.S2C_FACTIONS_JOIN_FACTION = "fjf";
E.C2S_GET_FACTION_BALANCE = "fgb";
E.S2C_GET_FACTION_BALANCE = "fgb";
E.C2S_FIND_NEXT_TOWER = "fnt";
E.S2C_FIND_NEXT_TOWER = "fnt";
E.C2S_GET_ATTACKABLE_FACTION_DATA = "afd";
E.S2C_GET_ATTACKABLE_FACTION_DATA = "afd";
E.C2S_GET_FACTIONKINGDOM_INFO = "fki";
E.S2C_GET_FACTIONKINGDOM_INFO = "fki";
E.C2S_START_FACTIONPROTECTION = "ffp";
E.S2C_START_FACTIONPROTECTION = "ffp";
E.C2S_CONQUER_INFO_FACTIONCAMP = "cfi";
E.S2C_CONQUER_INFO_FACTIONCAMP = "cfi";
E.C2S_GET_CAMP_UNIT_CAPACITY = "fuc";
E.S2C_GET_CAMP_UNIT_CAPACITY = "fuc";
E.C2S_GET_ALL_CAMP_UNIT_CAPACITY = "fac";
E.S2C_GET_ALL_CAMP_UNIT_CAPACITY = "fac";
E.C2S_GET_VILLAGE_COUNT = "gvc";
E.S2C_GET_VILLAGE_COUNT = "gvc";
E.S2C_SHUTTING_DOWN_EVENT = "sde";
E.C2S_GET_EQUIPMENT_INVENTORY = "gei";
E.S2C_GET_EQUIPMENT_INVENTORY = "gei";
E.C2S_EQUIPMENT_INVENTORY_SPACE_LEFT = "esl";
E.S2C_EQUIPMENT_INVENTORY_SPACE_LEFT = "esl";
E.C2S_CRAFT_EQUIPMENT = "ceq";
E.S2C_CRAFT_EQUIPMENT = "ceq";
E.C2S_EQUIP_EQUIPMENT = "eeq";
E.S2C_EQUIP_EQUIPMENT = "eeq";
E.C2S_SELL_EQUIPMENT = "seq";
E.S2C_SELL_EQUIPMENT = "seq";
E.S2C_BOUGHT_EQUIPMENT = "beq";
E.C2S_GET_LORDS_INFO = "gli";
E.S2C_GET_LORDS_INFO = "gli";
E.C2S_GET_LORD_ASSIGNED_GENERAL = "gla";
E.S2C_GET_LORD_ASSIGNED_GENERAL = "gla";
E.C2S_RENAME_LORD = "arl";
E.S2C_RENAME_LORD = "arl";
E.C2S_EXTRACT_GEM = "ege";
E.S2C_EXTRACT_GEM = "ege";
E.C2S_ALLIANCE_FORGE_EVENT = "frc";
E.S2C_ALLIANCE_FORGE_EVENT = "frc";
E.C2S_GET_NEW_RELICS = "gnr";
E.S2C_GET_NEW_RELICS = "gnr";
E.C2S_NEW_RELICS_FLAG = "nrf";
E.S2C_NEW_RELICS_FLAG = "nrf";
E.C2S_ENCHANT_RELIC_ITEM_EVENT = "ere";
E.S2C_ENCHANT_RELIC_ITEM_EVENT = "ere";
E.BOUGHT_RELIC_ITEM_EVENT = "bri";
E.C2S_ENCHANT_EQUIPMENT_EVENT = "eqe";
E.S2C_ENCHANT_EQUIPMENT_EVENT = "eqe";
E.C2S_SET_PUSH_NOTIFICATION_RUIN = "grt";
E.S2C_SET_PUSH_NOTIFICATION_RUIN = "grt";
E.C2S_COLOSSUS_GET_RANK = "che";
E.S2C_COLOSSUS_GET_RANK = "che";
E.C2S_COLOSSUS_DEPOSIT_RESOURCES = "cde";
E.S2C_COLOSSUS_DEPOSIT_RESOURCES = "cde";
E.C2S_CHOOSE_DECO_CASTLE = "cdc";
E.S2C_CHOOSE_DECO_CASTLE = "cdc";
E.C2S_COLOSSUS_GET_COLOSSUS = "cdg";
E.S2C_COLOSSUS_GET_COLOSSUS = "cdg";
E.C2S_OPEN_ACTIVITY_CHEST = "uoa";
E.S2C_OPEN_ACTIVITY_CHEST = "uoa";
E.S2C_ACTIVITY_CHEST_INFO = "uac";
E.C2S_FESTIVAL_START = "bfs";
E.S2C_FESTIVAL_START = "bfs";
E.C2S_ACHIEVEMENT_LIST = "vli";
E.S2C_ACHIEVEMENT_LIST = "vli";
E.C2S_ACHIEVEMENT_FINISHED = "vfi";
E.S2C_ACHIEVEMENT_FINISHED = "vfi";
E.S2C_GET_STATUS_MINES = "gsm";
E.C2S_COLLECT_MINE_RESOURCES = "cmr";
E.S2C_COLLECT_MINE_RESOURCES = "cmr";
E.S2C_DAILY_QUEST_LIST = "dql";
E.C2S_DAILY_QUEST_LIST = "dql";
E.S2C_COLLECT_DAILY_REWARD = "cdr";
E.C2S_COLLECT_DAILY_REWARD = "cdr";
E.C2S_VIP_INFO_EVENT = "vip";
E.S2C_VIP_INFO_EVENT = "vip";
E.C2S_OPTION_EVENT = "opt";
E.S2C_OPTION_EVENT = "opt";
E.C2S_LUCKY_WHEEL_SPIN = "lws";
E.S2C_LUCKY_WHEEL_SPIN = "lws";
E.C2S_LUCKY_WHEEL_CHANGE_MODE = "lwm";
E.S2C_LUCKY_WHEEL_CHANGE_MODE = "lwm";
E.C2S_LUCKY_WHEEL_BUY_JACKPOT = "lwj";
E.S2C_LUCKY_WHEEL_BUY_JACKPOT = "lwj";
E.C2S_LUCKY_WHEEL_INCREASE_PRIZE_CLASS = "lwc";
E.S2C_LUCKY_WHEEL_INCREASE_PRIZE_CLASS = "lwc";
E.S2C_GET_DAILY_RESET_TIME = "drt";
E.C2S_GET_DAILY_RESET_TIME = "drt";
E.C2S_GET_BUILDING_INFO = "gbi";
E.S2C_GET_BUILDING_INFO = "gbi";
E.C2S_GET_EXPANSION_INFO = "sea";
E.S2C_GET_EXPANSION_INFO = "sea";
E.C2S_NEW_MARAUDERS_DEPOSIT_RESOURCES = "bkp";
E.S2C_NEW_MARAUDERS_DEPOSIT_RESOURCES = "bkp";
E.C2S_TREASUREMAPS = "tmp";
E.S2C_TREASUREMAPS = "tmp";
E.C2S_CREATE_TREASUREHUNT_MOVEMENT = "thm";
E.S2C_CREATE_TREASUREHUNT_MOVEMENT = "thm";
E.C2S_ATTACK_INFO_TREASUREDUNGEON = "tai";
E.S2C_ATTACK_INFO_TREASUREDUNGEON = "tai";
E.C2S_BUY_TREASUREMAP_PIECE = "tbm";
E.S2C_BUY_TREASUREMAP_PIECE = "tbm";
E.C2S_TREASUREMAP_SKIP_TRANSFER = "tkt";
E.S2C_TREASUREMAP_SKIP_TRANSFER = "tkt";
E.C2S_TREASUREMAP_UNIT_TRANSFER = "tut";
E.S2C_TREASUREMAP_UNIT_TRANSFER = "tut";
E.C2S_TREASUREMAP_GOODS_TRANSFER = "tgt";
E.S2C_TREASUREMAP_GOODS_TRANSFER = "tgt";
E.C2S_TREASURE_FINISH_MAP = "tfm";
E.S2C_TREASURE_FINISH_MAP = "tfm";
E.S2C_TREASUREHUNT_INFO = "thi";
E.C2S_CLICK_NODE = "tcn";
E.S2C_CLICK_NODE = "tcn";
E.S2C_HIDE_ALIEN_CAMP = "hac";
E.S2C_REPLACE_ALIEN_CAMP = "rae";
E.C2S_REPLACE_ALIEN_CAMP = "rae";
E.S2C_GET_ALIEN_REPLACE_COUNT = "rce";
E.C2S_GET_ALIEN_REPLACE_COUNT = "rce";
E.C2S_DISMISS_UNITS = "dup";
E.S2C_DISMISS_UNITS = "dup";
E.C2S_REVIVE_ALL_HOSPITAL_UNITS = "hra";
E.S2C_REVIVE_ALL_HOSPITAL_UNITS = "hra";
E.C2S_CANCEL_HOSPITAL_SLOT = "hcs";
E.S2C_CANCEL_HOSPITAL_SLOT = "hcs";
E.C2S_REVIVE_HOSPITAL_UNITS = "hru";
E.S2C_REVIVE_HOSPITAL_UNITS = "hru";
E.C2S_SKIP_HOSPITAL_SLOT = "hss";
E.S2C_SKIP_HOSPITAL_SLOT = "hss";
E.C2S_DISMISS_HOSPITAL_UNITS = "hdu";
E.S2C_DISMISS_HOSPITAL_UNITS = "hdu";
E.C2S_ASSIGN_TITLE = "apt";
E.S2C_ASSIGN_TITLE = "apt";
E.S2C_ISLAND_KINGDOM_RESET = "ikr";
E.C2S_GET_AQUA_POINTS = "gap";
E.S2C_GET_AQUA_POINTS = "gap";
E.C2S_STORM_ISLAND_INFO = "sii";
E.S2C_STORM_ISLAND_INFO = "sii";
E.C2S_SEARCH_PLAYER_FOR_TITLE = "spt";
E.S2C_SEARCH_PLAYER_FOR_TITLE = "spt";
E.C2S_ALLIANCE_MEMBER_AQUA_POINTS_EVENT = "ama";
E.S2C_ALLIANCE_MEMBER_AQUA_POINTS_EVENT = "ama";
E.S2C_SLUM_LEVEL = "csl";
E.S2C_UPDATE_REWARD_INFO_EVENT = "uri";
E.C2S_ASSIGN_AND_GET_TEST_CASE_EVENT = "gtc";
E.S2C_ASSIGN_AND_GET_TEST_CASE_EVENT = "gtc";
E.C2S_FRIEND_INVITE_INFO = "fii";
E.S2C_FRIEND_INVITE_INFO = "fii";
E.C2S_SET_FACEBOOK_DATA_EVENT = "sfd";
E.S2C_SET_FACEBOOK_DATA_EVENT = "sfd";
E.C2S_PLAYERS_BY_FACEBOOK_IDS = "pbf";
E.S2C_PLAYERS_BY_FACEBOOK_IDS = "pbf";
E.C2S_GET_OWNER_INFO = "goi";
E.S2C_GET_OWNER_INFO = "goi";
E.C2S_GET_FACEBOOK_GIFT_COUNT = "fgc";
E.S2C_GET_FACEBOOK_GIFT_COUNT = "fgc";
E.C2S_GET_FACEBOOK_GIFT_LIST = "fgl";
E.S2C_GET_FACEBOOK_GIFT_LIST = "fgl";
E.C2S_COLLECT_FACEBOOK_GIFT = "cfg";
E.S2C_COLLECT_FACEBOOK_GIFT = "cfg";
E.C2S_SEND_FACEBOOK_GIFT = "sfg";
E.S2C_SEND_FACEBOOK_GIFT = "sfg";
E.C2S_GET_FACEBOOK_GIFT_COOLDOWN = "efc";
E.S2C_GET_FACEBOOK_GIFT_COOLDOWN = "efc";
E.C2S_RUBY_WISHING_WELL = "rww";
E.S2C_RUBY_WISHING_WELL = "rww";
E.C2S_SKILL_POINT_LIST = "skl";
E.S2C_SKILL_POINT_LIST = "skl";
E.C2S_ADD_SKILL_POINT = "skp";
E.S2C_ADD_SKILL_POINT = "skp";
E.C2S_RESET_SKILL_POINT = "skr";
E.S2C_RESET_SKILL_POINT = "skr";
E.S2C_HERO_DECISION_COMMAND = "hdc";
E.C2S_HERO_DECISION_COMMAND = "hdc";
E.C2S_GET_MONUMENTS_PROGRESS = "gmp";
E.S2C_GET_MONUMENTS_PROGRESS = "gmp";
E.S2C_GET_MONUMENTS_LIST = "gml";
E.S2C_MONUMENTS_RESET = "mre";
E.C2S_GET_GEMS_EVENT = "ggm";
E.S2C_GET_GEMS_EVENT = "ggm";
E.S2C_GEM_CHANGE = "gec";
E.S2C_SELL_GEM = "sge";
E.C2S_SELL_GEM = "sge";
E.S2C_BOUGHT_GEM = "bgm";
E.C2S_BIND_GEM = "bge";
E.S2C_BIND_GEM = "bge";
E.S2C_CRAFT_GEM = "cge";
E.C2S_CRAFT_GEM = "cge";
E.S2C_PLAYER_NAMES_LIST = "pnl";
E.C2S_GET_MIGHT_UPDATE = "gmu";
E.S2C_GET_MIGHT_UPDATE = "gmu";
E.C2S_KINGDOM_FAME_BOOST = "kfb";
E.S2C_KINGDOM_FAME_BOOST = "kfb";
E.C2S_SELECT_TITLE_EVENT = "ste";
E.S2C_SELECT_TITLE_EVENT = "ste";
E.C2S_GET_FACTION_POINTS = "gfp";
E.S2C_GET_FACTION_POINTS = "gfp";
E.S2C_LOGIN_POPUP_LIST = "lpl";
E.C2S_MINUTE_SKIP_BUILDING = "msb";
E.S2C_MINUTE_SKIP_BUILDING = "msb";
E.C2S_MINUTE_SKIP_KINGDOM_TRANSFER = "msk";
E.S2C_MINUTE_SKIP_KINGDOM_TRANSFER = "msk";
E.C2S_MINUTE_SKIP_MAP_TRANSFER = "msm";
E.S2C_MINUTE_SKIP_MAP_TRANSFER = "msm";
E.C2S_MINUTE_SKIP_RESEARCH = "msr";
E.S2C_MINUTE_SKIP_RESEARCH = "msr";
E.C2S_MINUTE_SKIP_DUNGEON = "msd";
E.S2C_MINUTE_SKIP_DUNGEON = "msd";
E.C2S_SAVE_SHOPPING_CART = "ssc";
E.S2C_IN_GAME_ANNOUNCEMENTS = "iga";
E.C2S_GET_ANNOUNCEMENTS_IN_LANGUAGE = "gia";
E.S2C_GET_ANNOUNCEMENTS_IN_LANGUAGE = "gia";
E.C2S_GET_CONSTRUCTION_ITEM_INVENTORY = "gii";
E.S2C_GET_CONSTRUCTION_ITEM_INVENTORY = "gii";
E.C2S_ADD_OR_REPLACE_CONSTRUCTION_ITEM = "rpc";
E.S2C_ADD_OR_REPLACE_CONSTRUCTION_ITEM = "rpc";
E.C2S_REMOVE_CONSTRUCTION_ITEM = "cri";
E.S2C_REMOVE_CONSTRUCTION_ITEM = "cri";
E.C2S_PROMOTION_BANNER_DATA = "pbd";
E.C2S_SELL_STORED_DECO = "sds";
E.S2C_SELL_STORED_DECO = "sds";
E.C2S_GET_USER_SURVEY_EVENT = "sur";
E.S2C_GET_USER_SURVEY_EVENT = "sur";
E.C2S_REPORT_USER_SURVEY_EVENT = "rus";
E.S2C_REPORT_USER_SURVEY_EVENT = "rus";
E.C2S_CLIENT_TRACKING_REQUEST_EVENT = "ctr";
E.S2C_GET_UNLOCKED_SYMBOL = "gus";
E.C2S_REQUEST_GGS_GIFT = "rgg";
E.S2C_REQUEST_GGS_GIFT = "rgg";
E.C2S_ALLIANCE_SUBSCRIBER_COUNT = "asc";
E.S2C_ALLIANCE_SUBSCRIBER_COUNT = "asc";
E.C2S_SUBSCRIPTIONS_INFORMATION = "sie";
E.S2C_SUBSCRIPTIONS_INFORMATION = "sie";
E.C2S_START_TAUNT_ATTACK = "lta";
E.S2C_START_TAUNT_ATTACK = "lta";
E.S2C_ALLIANCE_INVASION_CAMP_INFO = "aic";
E.S2C_RAGE_POINTS_RECEIVED = "rpr";
E.C2S_GET_CONSTRUCTION_CRAFTING_INFO = "gcc";
E.S2C_GET_CONSTRUCTION_CRAFTING_INFO = "gcc";
E.C2S_CONSTRUCTION_ITEM_CRAFT = "cic";
E.S2C_CONSTRUCTION_ITEM_CRAFT = "cic";
E.C2S_CONSTRUCTION_ITEM_DISASSEMBLE = "dci";
E.S2C_CONSTRUCTION_ITEM_DISASSEMBLE = "dci";
E.C2S_CONSTRUCTION_ITEM_INVENTORYS_SPACE_LEFT = "csp";
E.S2C_CONSTRUCTION_ITEM_INVENTORYS_SPACE_LEFT = "csp";
E.C2S_MINUTE_SKIP_CRAFTING = "sci";
E.S2C_MINUTE_SKIP_CRAFTING = "sci";
E.C2S_VISIT_SHOP = "vsh";
E.S2C_VISIT_SHOP = "vsh";
E.C2S_GET_ENABLED_HARDCORE_MODE_EFFECTS = "ghe";
E.S2C_GET_ENABLED_HARDCORE_MODE_EFFECTS = "ghe";
E.C2S_SET_ENABLED_HARDCORE_MODE_EFFECTS = "she";
E.S2C_SET_ENABLED_HARDCORE_MODE_EFFECTS = "she";
E.C2S_CONFIRM_TERMS_AND_CONDITIONS_EVENT = "ctc";
E.S2C_CONFIRM_TERMS_AND_CONDITIONS_EVENT = "ctc";
E.C2S_NEWSLETTER_SUBSCRIPTION_EVENT = "nse";
E.S2C_NEWSLETTER_SUBSCRIPTION_EVENT = "nse";
E.C2S_GET_NEWSLETTER_SUBSCRIPTION_STATUS_EVENT = "nss";
E.S2C_GET_NEWSLETTER_SUBSCRIPTION_STATUS_EVENT = "nss";
E.S2C_GET_FUSION_FORGE_INFO_EVENT = "ffi";
E.C2S_GET_FUSION_FORGE_INFO_EVENT = "ffi";
E.C2S_LEVEL_UP_FUSION_FORGE_EVENT = "ffl";
E.S2C_LEVEL_UP_FUSION_FORGE_EVENT = "ffl";
E.C2S_GET_FUSION_TARGET_DECO = "gtd";
E.S2C_GET_FUSION_TARGET_DECO = "gtd";
E.C2S_SKIP_FUSION_RECHARGE_EVENT = "fsr";
E.S2C_SKIP_FUSION_RECHARGE_EVENT = "fsr";
E.C2S_FUSION_CATALYST_CONVERSION_EVENT = "fcc";
E.S2C_FUSION_CATALYST_CONVERSION_EVENT = "fcc";
E.C2S_DECO_FORGE_FUSE_EVENT = "dff";
E.S2C_DECO_FORGE_FUSE_EVENT = "dff";
E.C2S_GET_AUTO_SELL_CONDITIONS_EVENT = "asg";
E.S2C_GET_AUTO_SELL_CONDITIONS_EVENT = "asg";
E.C2S_SET_AUTO_SELL_EQUIPMENT_CONDITIONS_EVENT = "aes";
E.S2C_SET_AUTO_SELL_EQUIPMENT_CONDITIONS_EVENT = "aes";
E.C2S_SET_AUTO_SELL_GEM_CONDITIONS_EVENT = "ags";
E.S2C_SET_AUTO_SELL_GEM_CONDITIONS_EVENT = "ags";
E.S2C_SHOW_POPOVER_EVENT = "spo";
E.C2S_REGISTER_PUSH_NOTIFICATION_DEVICE = "rpd";
E.C2S_GENERATE_LOGIN_TOKEN_EVENT = "glt";
E.S2C_GENERATE_LOGIN_TOKEN_EVENT = "glt";
E.C2S_REGISTER_OR_LOGIN_EVENT = "tle";
E.S2C_REGISTER_OR_LOGIN_EVENT = "tle";
E.S2C_TEMP_SERVER_EVENT = "tse";
E.S2C_TEMP_SERVER_PLAYER_HIGHSCORE = "tsh";
E.C2S_TEMP_SERVER_PLAYER_HIGHSCORE = "tsh";
E.S2C_TEMP_SERVER_SELECT_CAMP = "tsc";
E.C2S_TEMP_SERVER_SELECT_CAMP = "tsc";
E.S2C_TEMP_SERVER_GET_PLAYER_COLLECTOR_CURRENCY = "tpc";
E.C2S_TEMP_SERVER_GET_PLAYER_COLLECTOR_CURRENCY = "tpc";
E.S2C_CREATE_TEMP_SERVER_COLLECTOR_ARMY_ATTACK_MOVEMENT = "cam";
E.C2S_CREATE_TEMP_SERVER_COLLECTOR_ARMY_ATTACK_MOVEMENT = "cam";
E.S2C_GET_ATTACK_TEMP_SERVER_COLLECTOR_CASTLE_INFO = "ati";
E.C2S_GET_ATTACK_TEMP_SERVER_COLLECTOR_CASTLE_INFO = "ati";
E.S2C_MUTE_DIALOGS = "smd";
E.C2S_GET_PLAYER_COLLECTOR_CURRENCY = "pcc";
E.S2C_GET_PLAYER_COLLECTOR_CURRENCY = "pcc";
E.C2S_GET_ATTACK_COLLECTOR_CASTLE_INFO = "acc";
E.S2C_GET_ATTACK_COLLECTOR_CASTLE_INFO = "acc";
E.C2S_BUY_PRIVATE_RESOURCE_VILLAGE = "bpv";
E.S2C_BUY_PRIVATE_RESOURCE_VILLAGE = "bpv";
E.C2S_REMOVE_PRIVATE_RESOURCE_VILLAGE = "rpv";
E.S2C_REMOVE_PRIVATE_RESOURCE_VILLAGE = "rpv";
E.C2S_UPGRADE_PRIVATE_RESOURCE_VILLAGE = "upv";
E.S2C_UPGRADE_PRIVATE_RESOURCE_VILLAGE = "upv";
E.C2S_GET_KINGDOMS_LEAGUE_INFO_EVENT = "kli";
E.S2C_GET_KINGDOMS_LEAGUE_INFO_EVENT = "kli";
E.C2S_BUY_KINGDOMS_LEAGUE_PASS_EVENT = "kbp";
E.S2C_BUY_KINGDOMS_LEAGUE_PASS_EVENT = "kbp";
E.C2S_SET_KINGDOMS_LEAGUE_START_SEEN_EVENT = "kss";
E.S2C_SET_KINGDOMS_LEAGUE_START_SEEN_EVENT = "kss";
E.C2S_GET_KINGDOMS_HIGHSCORE_RANK_EVENT = "klh";
E.S2C_GET_KINGDOMS_HIGHSCORE_RANK_EVENT = "klh";
E.SEASON_PASS_PRICE_EVENT = "spp";
E.BUY_SEASON_PROMOTION_PASS = "bsp";
E.BUY_SEASON_EVENT_PASS = "bep";
E.C2S_OFFER_OFFER_PAY = "oop";
E.S2C_OFFER_OFFER_PAY = "oop";
E.BUY_BESTSELLER_OFFER = "bso";
E.C2S_UPDATE_SEEN_GLOBAL_EFFECTS_EVENT = "usg";
E.S2C_UPDATE_SEEN_GLOBAL_EFFECTS_EVENT = "usg";
E.ACTIVATE_GLOBAL_EFFECT_BOOSTER_EVENT = "agb";
E.GLOBAL_EFFECT_BOOSTER_INFO_EVENT = "bie";
E.C2S_LOST_AND_FOUND_EVENT = "lfe";
E.S2C_LOST_AND_FOUND_EVENT = "lfe";
E.C2S_COLLECT_LOST_AND_FOUND_EVENT = "clf";
E.S2C_COLLECT_LOST_AND_FOUND_EVENT = "clf";
E.C2S_ACTIVATE_TRAINING_PROGRAM_EVENT = "atp";
E.S2C_ACTIVATE_TRAINING_PROGRAM_EVENT = "atp";
E.C2S_PROLONG_TRAINING_PROGRAM_EVENT = "ptp";
E.S2C_PROLONG_TRAINING_PROGRAM_EVENT = "ptp";
E.C2S_REROLL_TRAINING_PROGRAMS_EVENT = "rtp";
E.S2C_REROLL_TRAINING_PROGRAMS_EVENT = "rtp";
E.C2S_GET_ACTIVE_TRAINING_PROGRAM_INFO_EVENT = "gatp";
E.S2C_GET_ACTIVE_TRAINING_PROGRAM_INFO_EVENT = "gatp";
E.C2S_GET_TRAINING_PROGRAM_INFO_EVENT = "gtp";
E.S2C_GET_TRAINING_PROGRAM_INFO_EVENT = "gtp";
E.C2S_GET_DAIMYO_ALLIANCE_CONTRACTS_EVENT = "gdc";
E.S2C_GET_DAIMYO_ALLIANCE_CONTRACTS_EVENT = "gdc";
E.C2S_GET_DAIMYO_WAR_EFFORTS_EVENT = "gdw";
E.S2C_GET_DAIMYO_WAR_EFFORTS_EVENT = "gdw";
E.C2S_GET_DAIMYO_AREAS_EVENT = "gda";
E.S2C_GET_DAIMYO_AREAS_EVENT = "gda";
E.C2S_CREATE_DAIMYO_DEFENSE_MOVEMENT_EVENT = "cdd";
E.S2C_CREATE_DAIMYO_DEFENSE_MOVEMENT_EVENT = "cdd";
E.C2S_LAUNCH_DAIMYO_TAUNT_ATTACK_EVENT = "ldt";
E.S2C_LAUNCH_DAIMYO_TAUNT_ATTACK_EVENT = "ldt";
E.S2C_RELIC_ENCHANTER_ENABLED_EVENT = "ree";
E.THIRD_PARTY_GET_MAPPING = "tgm";
E.THIRD_PARTY_SET_MAPPING = "tsm";
E.ALLIANCE_BATTLE_GROUND_JOINED_PLAYER = "ajp";
E.ALLIANCE_BATTLE_GROUND_MINE_OUT_TIME = "mot";
E.GET_ALLIANCE_BATTLE_GROUND_ALLIANCE_POINTS = "gabgap";
E.GET_ALLIANCE_BATTLE_GROUND_PLAYER_POINTS = "gabgpp";
E.CREATE_ALLIANCE_BATTLE_GROUND_COLLECTOR_ARMY_ATTACK_MOVEMENT = "abgcam";
E.GET_ATTACK_ALLIANCE_BATTLE_GROUND_COLLECTOR_CASTLE_INFO = "abgati";
E.GET_ALLIANCE_BATTLE_GROUND_ALLIANCE_HIGHSCORE = "abgph";
E.GO_TO_WORLD_MAP_AFTER_REMOVE_AREA = "gtwara";
E.GET_PLAYER_EVENT_STATISTICS = "gpe";
E.GET_ALLIANCE_EVENT_STATISTICS = "gae";
E.GET_ALLIANCE_CENTERS_OF_POWER = "cpe";
E.GET_ALLIANCE_CENTERS_OF_POWER_DETAILED = "cpd";
E.GET_ALLIANCE_TOWER_RESET_TIMERS = "trt";
E.GET_ALLIANCE_TOWER_INFO = "tie";
E.GET_ALLIANCE_TOWER_PLAYER_INFO = "tpi";
E.GET_ALLIANCE_TOWER_BUFF_INFO = "tbi";
E.INCREASE_ALLIANCE_TOWER_BUFF = "iatb";
E.ACTIVATE_ALLIANCE_TOWER_BUFF = "aatb";
E.GET_ATTACK_ALLIANCE_BATTLE_GROUND_TOWER_INFO = "gti";
E.CREATE_ALLIANCE_BATTLE_GROUND_TOWER_DEFENSE_MOVEMENT = "tde";
E.GET_AREA_BARON_INFO_EVENT = "abe";
E.GLOBAL_SERVER_PREVIOUS_RUN_INFO_EVENT = "gpr";
E.GLOBAL_SERVER_REGISTER_OR_LOGIN_E4K_EVENT = "tle";
E.GLOBAL_SERVER_REGISTER_OR_LOGIN_EP_EVENT = "tlep";
E.FORTUNE_TELLER_EVENT = "ftl";
E.MOVE_OBJECT_TO_BUILDING_DISTRICT = "mde";
E.MOVE_OBJECT_FROM_BUILDING_DISTRICT = "rde";
E.BUY_SCEAT_SKILL = "bss";
E.SKIP_SCEAT_SKILL_ACTIVATION = "ssa";
E.AREA_BUILDING_PRODUCTION_INFO = "abpi";
E.MOVEMENT_FILTER_EVENT = "mvf";
E.BUY_UNLOCKED_SYMBOLS_EVENT = "bus";
E.GET_UNLOCKED_AND_PAID_CREST_SYMBOL_EVENT = "gus";
E.DOWNTIME_STATUS = "DTS";
E.FEATURE_FLAGS = "FTF";
E.CHANGE_ALLIANCE_LANGUAGE = "cal";
E.HOSPITAL_FLAGS = "hfl";
E.BREWERY_FLAGS = "bfl";
E.AD_PAYOUT_COMPLETE = "adpc";
E.GET_NEXT_EXPIRING_CONSTRUCTION_ITEM_EVENT = "nec";
E.GET_ALL_EXPIRED_CONSTRUCTION_ITEM_EVENT = "aec";
E.MARK_EXPIRED_CONSTRUCTION_ITEM_EVENT = "mec";
E.USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT = "ubc";
E.GET_FEAST_COST_REDUCTION_EVENT = "fce";
E.PENDING_REWARDS_EVENT = "pre";
E.CRAFTING_START_EVENT = "crst";
E.CRAFTING_CANCEL_EVENT = "crca";
E.CRAFTING_SKIP_EVENT = "crsk";
E.CRAFTING_INFO_EVENT = "crin";
E.CRAFTING_QUEUE_MOVE_EVENT = "crqm";
E.CRAFTING_UNLOCK_EVENT = "crun";
E.CRAFTING_AREA_INFO_EVENT = "crai";
E.SELECT_EVENT_AUTO_SCALING_DIFFICULTY_EVENT = "sede";
E.CHANGE_PLAYER_NAME_EVENT = "cpne";
E.CHANGE_PLAYER_EMAIL_EVENT = "cpee";
E.GET_PLAYER_NAME_CHANGE_INFO_EVENT = "gnci";
E.PLAYER_SCHEDULED_DELETION_EVENT = "psd";
E.REQUEST_MAIL_CHANGE = "rmc";
E.MAIL_NEWSLETTER_STATUS = "mns";
E.RESEND_MAIL = "rsm";
E.CANCEL_MAIL_CHANGE = "cmc";
E.VALIDATE_NEW_PLAYER_NAME_EVENT = "vpn";
E.VALIDATE_LOGIN_NAME_EVENT = "vln";
E.GET_LOOTBOXES_STATUS = "gls";
E.OPEN_LOOTBOX_EVENT = "ole";
E.GENERALS_INFO_EVENT = "gie";
E.GENERAL_UNLOCK_EVENT = "gue";
E.GENERAL_STAR_UPGRADE_EVENT = "gsue";
E.GENERAL_ADD_XP_EVENT = "gaxp";
E.GENERAL_RESET_FLAGS_EVENT = "grf";
E.GENERAL_UNLOCK_SKILL_EVENT = "guse";
E.GENERAL_RESET_SKILLS_EVENT = "grs";
E.GET_CHARACTERS_STATUS_EVENT = "gcs";
E.SPIN_CHARACTER_TOMBOLA_EVENT = "sct";
E.GENERALS_ASSIGN_ABILITY_EVENT = "gaae";
E.FINISH_QUEST_CONDITION_EVENT = "fcq";
E.SKIP_GENERALS_INTRODUCTION = "sgi";
E.LAUNCH_WOLFKING_TAUNT_ATTACK = "lwta";
E.WELCOME_BACK_MESSAGE_INFO_EVENT = "wbie";
E.UPDATE_PREDEFINED_ATTACK_NAME_EVENT = "upan";
E.STORE_SOLDIERS_EVENT = "sts";
E.TAKE_SOLDIERS_EVENT = "tas";
E.DAILY_MESSAGES_COUNT_UPDATE = "mcd";
E.PING_PONG = "pinpon";
E.C2S_VERSION_CHECK = "vck";
E.C2S_NEW_CASH_HASH = "nch";
E.C2S_REPORT_SURVEY = "rsv";
E.C2S_SOCIALLOGIN_EVENT = "lgs";
E.C2S_VERIFY_PLAYERMAIL_EVENT = "vpm";
E.S2C_SERVER_MESSAGE = "sms";
E.S2C_GET_CASH_HASH = "gch";
E.S2C_VERSION_CHECK = "vck";
E.S2C_SPECIAL_OFFER_EVENT = "soe";
E.S2C_FORUM_LOGIN_DATA = "core_gfl";
E.S2C_SERVERINFO = "nfo";
E.S2C_COMA_TEASER_EVENT = "cmt";
E.S2C_LOSTPASSWORD_EVENT = "lpp";
E.GET_DONATION_TYPE_INFO_EVENT = "gdti";
E.DONATE_DONATION_ITEM_EVENT = "ddi";
E.CLAIM_FREE_CHEST_EVENT = "cfc";
E.SPIN_GACHA_EVENT = "dge";
E.LIST_LEADERBOARD_SCORES_PAGE_EVENT = "llsp";
E.LIST_LEADERBOARD_SCORES_WINDOW_EVENT = "llsw";
E.SEARCH_LEADERBOARD_SCORES_EVENT = "slse";
E.ACTIVATE_ATTACK_ADVISOR_EVENT = "aa";
E.GET_ATTACK_ADVISOR_OVERVIEW_EVENT = "aao";
E.ALLIANCE_EMBLEM_EVENT = "aee";
E.SET_ALLIANCE_EMBLEM_EVENT = "sae";
exports.ConstantsSmartFox = E;
E.__class = "ConstantsSmartFox";
var C = function () {
  function ConstructionConst() {}
  ConstructionConst.UNLOCK_DURATION_$LI$ = function () {
    if (ConstructionConst.UNLOCK_DURATION == null) {
      ConstructionConst.UNLOCK_DURATION = 604800;
    }
    return ConstructionConst.UNLOCK_DURATION;
  };
  ConstructionConst.FREE_SKIP_TIME_$LI$ = function () {
    if (ConstructionConst.FREE_SKIP_TIME == null) {
      ConstructionConst.FREE_SKIP_TIME = 240;
    }
    return ConstructionConst.FREE_SKIP_TIME;
  };
  ConstructionConst.getFastCompleteCostC2 = function (e, t) {
    return Math.ceil(e * 1 / 60 * t) | 0;
  };
  ConstructionConst.getInstantCostC2PerMinuteFor = function (e) {
    var t = ConstructionConst.INSTANT_COST_C2_PER_MINUTE;
    if (e >= 30) {
      return t;
    } else {
      t *= ConstructionConst.SKIP_COST_FACTOR;
      if (e <= 25) {
        return t;
      } else {
        return (2 - t) / 5 * (e - 25) + t;
      }
    }
  };
  ConstructionConst.getRepairAllCostsC2 = function (e) {
    return ConstructionConst.getRepairAllCostsC2WithDiscount(e, 0);
  };
  ConstructionConst.getRepairAllCostsC2WithDiscount = function (e, t) {
    if (t >= 100) {
      return 0;
    }
    var n = e / 60 | 0;
    if (n === 1) {
      return 42;
    } else {
      return Math.min(ConstructionConst.MAX_REPAIR_ALL_COST, n * ConstructionConst.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE * Math.max(1, 1 / (Math.log(n) / Math.log(5)) * 2 + 0.335) * (100 - t) / 100 | 0);
    }
  };
  ConstructionConst.getRepairCost = function (e, t) {
    return Math.ceil(e * t * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR) | 0;
  };
  ConstructionConst.getRefundPrice = function (e) {
    return e * ConstructionConst.SELL_BONUS_FROM_BUY_COSTS_FACTOR | 0;
  };
  ConstructionConst.getDamageFactor = function (e) {
    if (e < 50) {
      return 0.5;
    } else {
      return e / ConstructionConst.MAX_HP;
    }
  };
  ConstructionConst.getRepairDuration = function (e, t) {
    return Math.floor(e * ConstructionConst.BUILT_TO_REPAIR_TIME_FACTOR * ((ConstructionConst.MAX_HP - t) / 100)) | 0;
  };
  ConstructionConst.getExpandLimitForC2 = function (e, t, n) {
    if (t === R.EVENTCAMP_AREA_ID || n === B.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (e < We.TUTORIAL_END_LEVEL) {
      return 0;
    } else if (e < 13) {
      return e - 1;
    } else if (e < 28) {
      return Math.ceil(6 + (e + 1) / 3) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLimitForResourcesShortTutorial = function (e, t, n) {
    if (t === R.EVENTCAMP_AREA_ID || n === B.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (e < 3) {
      return e;
    } else if (e < 6) {
      return e - 1;
    } else if (e < 13) {
      return Math.ceil(2 + e / 3) | 0;
    } else if (e < 22) {
      return Math.ceil(e / 2 - 0.5) | 0;
    } else if (e < 46) {
      return Math.ceil((e - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResourcesShortTutorial = function (e) {
    if (e < 3) {
      return e;
    } else if (e < 5) {
      return e + 1;
    } else if (e < 7) {
      return e * 3 - 8;
    } else if (e < 11) {
      return e * 2;
    } else if (e < 17) {
      return e * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLimitForResources = function (e, t, n) {
    if (t === R.EVENTCAMP_AREA_ID || n === B.KINGDOM_ID) {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    } else if (e === 1) {
      return 1;
    } else if (e === 2) {
      return 2;
    } else if (e < 6) {
      return e - 1;
    } else if (e < 13) {
      return Math.ceil(2 + e / 3) | 0;
    } else if (e < 22) {
      return Math.ceil(e / 2 - 0.5) | 0;
    } else if (e < 46) {
      return Math.ceil((e - 1) / 4 + 4) | 0;
    } else {
      return ConstructionConst.MAX_EXPANSION_LEVEL;
    }
  };
  ConstructionConst.getExpandLevelForResources = function (e) {
    if (e < 5) {
      return e + 1;
    } else if (e < 7) {
      return e * 3 - 8;
    } else if (e < 11) {
      return e * 2;
    } else if (e < 17) {
      return e * 4 - 18;
    } else {
      return 0;
    }
  };
  ConstructionConst.getExpandLevelForC2 = function (e) {
    if (e < 4) {
      return We.TUTORIAL_END_LEVEL;
    } else if (e < 12) {
      return e + 1;
    } else if (e < 17) {
      return (e - 7) * 3;
    } else {
      return 0;
    }
  };
  ConstructionConst.getSkipCostForUnits = function (e, t) {
    return e * t | 0;
  };
  return ConstructionConst;
}();
C.MAX_SLOTS = 4;
C.MAX_QUEUE_SLOTS = 2;
C.MAX_SIMULTANEOUS_SLOTS = 2;
C.SLOTSTATEUNLOCKED = -1;
C.SLOTSTATELOCKED = -2;
C.BUILT_TO_DISASSEMBLE_TIME_FACTOR = 0.5;
C.BUILT_TO_REPAIR_TIME_FACTOR = 0.5;
C.MAX_HP = 100;
C.MIN_HP = 0;
C.UPGRADE_RECRUITSPEED_BOOST = 5;
C.INSTANT_COST_C2_PER_MINUTE = 2;
C.INSTANT_REPAIR_ALL_COST_C2_PER_MINUTE = 2;
C.UNLOCK_C2 = 625;
C.PREMIUM_FACTOR_REPAIR_ALL = 0.5;
C.RUBBLE_WOD_ID = 250;
C.MAX_REPAIR_ALL_COST = 10000;
C.DAMAGE_TYPE_FIRE = 0;
C.DAMAGE_TYPE_PLAGUE = 1;
C.SELL_BONUS_FROM_BUY_COSTS_FACTOR = 0.25;
C.SKIP_COST_FACTOR = 2;
C.MAX_EXPANSION_LEVEL = 19;
exports.ConstructionConst = C;
C.__class = "ConstructionConst";
var f = function () {
  function ConstructionItemConst() {}
  ConstructionItemConst.MAX_SLOTS_$LI$ = function () {
    if (ConstructionItemConst.MAX_SLOTS == null) {
      ConstructionItemConst.MAX_SLOTS = ConstructionItemConst.APPEARANCE_SLOT_COUNT + ConstructionItemConst.PRIMARY_SLOT_COUNT + ConstructionItemConst.SECONDARY_SLOT_COUNT;
    }
    return ConstructionItemConst.MAX_SLOTS;
  };
  ConstructionItemConst.SLOT_TYPE_COUNTS_$LI$ = function () {
    if (ConstructionItemConst.SLOT_TYPE_COUNTS == null) {
      ConstructionItemConst.SLOT_TYPE_COUNTS = [ConstructionItemConst.APPEARANCE_SLOT_COUNT, ConstructionItemConst.PRIMARY_SLOT_COUNT, ConstructionItemConst.SECONDARY_SLOT_COUNT];
    }
    return ConstructionItemConst.SLOT_TYPE_COUNTS;
  };
  return ConstructionItemConst;
}();
f.APPEARANCE_SLOT_TYPE = 0;
f.PRIMARY_SLOT_TYPE = 1;
f.SECONDARY_SLOT_TYPE = 2;
f.APPEARANCE_SLOT_COUNT = 1;
f.PRIMARY_SLOT_COUNT = 1;
f.SECONDARY_SLOT_COUNT = 1;
f.RARENESS_UNIQUE = 0;
f.RARENESS_COMMON = 1;
f.RARENESS_RARE = 2;
f.RARENESS_EPIC = 3;
f.RARENESS_LEGENDARY = 4;
f.INVENTORY_SOFTCAP = 1000;
f.INVENTORY_HARDCAP = 1500;
exports.ConstructionItemConst = f;
f.__class = "ConstructionItemConst";
var T = function () {
  function DailyQuestConst() {}
  DailyQuestConst.REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.REWARD_STEPS == null) {
      DailyQuestConst.REWARD_STEPS = [3, 6, 9, 12];
    }
    return DailyQuestConst.REWARD_STEPS;
  };
  DailyQuestConst.RANDOM_REWARD_STEPS_$LI$ = function () {
    if (DailyQuestConst.RANDOM_REWARD_STEPS == null) {
      DailyQuestConst.RANDOM_REWARD_STEPS = [3, 6, 9];
    }
    return DailyQuestConst.RANDOM_REWARD_STEPS;
  };
  return DailyQuestConst;
}();
T.MIN_LEVEL = 6;
T.MAX_SPY_COUNT = 5;
T.RUBY_STEP = 12;
T.ACTIVITIES_PER_DAY = 12;
T.TEMP_SERVER_ACTIVITIES_PER_DAY = 3;
exports.DailyQuestConst = T;
T.__class = "DailyQuestConst";
var S = function () {
  function DaimyoConst() {}
  DaimyoConst.MIN_LEVEL_$LI$ = function () {
    if (DaimyoConst.MIN_LEVEL == null) {
      DaimyoConst.MIN_LEVEL = se.LEVEL_CAP;
    }
    return DaimyoConst.MIN_LEVEL;
  };
  return DaimyoConst;
}();
S.DAIMYO_CASTLES_PER_PLAYER = 4;
S.DAIMYO_TOWNSHIPS_PER_PLAYER = 4;
S.DAIMYO_BARON_LOOK_ID = 1002;
S.DAIMYO_GENERAL_LOOK_ID = 1003;
exports.DaimyoConst = S;
S.__class = "DaimyoConst";
var y = function () {
  function DecorationConst() {}
  DecorationConst.getStorageID = function (e) {
    var t = false;
    for (var n = 0; n < xe.CRUSADE_MAP_IDS_$LI$().length; n++) {
      if (xe.CRUSADE_MAP_IDS_$LI$()[n] === e) {
        t = true;
        break;
      }
    }
    if (t || B.KINGDOM_ID === e) {
      return e;
    }
    var i = false;
    for (n = 0; n < $e.WORLD_IDS_$LI$().length; n++) {
      if ($e.WORLD_IDS_$LI$()[n] === e) {
        i = true;
        break;
      }
    }
    if (i) {
      return DecorationConst.GLOBAL_DECORATION_STORAGE_ID;
    } else {
      return DecorationConst.NO_DECORATION_STORAGE_ID;
    }
  };
  return DecorationConst;
}();
y.HARD_CAP = 3000;
y.SOFT_CAP = 50;
y.EMPTY_NEW_COUNT = 0;
y.NO_DECORATION_STORAGE_ID = -1;
y.GLOBAL_DECORATION_STORAGE_ID = 1;
y.AREA_INVENTORY_STORAGE_ID = 2;
exports.DecorationConst = y;
y.__class = "DecorationConst";
var I = function () {
  function DefenseConst() {}
  DefenseConst.ITEMS_KEEP_$LI$ = function () {
    if (DefenseConst.ITEMS_KEEP == null) {
      DefenseConst.ITEMS_KEEP = [5, 5, 5];
    }
    return DefenseConst.ITEMS_KEEP;
  };
  DefenseConst.LEVELS_KEEP_$LI$ = function () {
    if (DefenseConst.LEVELS_KEEP == null) {
      DefenseConst.LEVELS_KEEP = [1, 2, 3];
    }
    return DefenseConst.LEVELS_KEEP;
  };
  DefenseConst.ITEMS_SUPPORT_TOOLS_$LI$ = function () {
    if (DefenseConst.ITEMS_SUPPORT_TOOLS == null) {
      DefenseConst.ITEMS_SUPPORT_TOOLS = [6, 6, 6];
    }
    return DefenseConst.ITEMS_SUPPORT_TOOLS;
  };
  DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP_$LI$ = function () {
    if (DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP == null) {
      DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP = [4, 4, 4];
    }
    return DefenseConst.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP;
  };
  DefenseConst.ITEMS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTWALL == null) {
      DefenseConst.ITEMS_LEFTWALL = [1, 1, 1, 1];
    }
    return DefenseConst.ITEMS_LEFTWALL;
  };
  DefenseConst.LEVELS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTWALL == null) {
      DefenseConst.LEVELS_LEFTWALL = [1, 2, 3, 5];
    }
    return DefenseConst.LEVELS_LEFTWALL;
  };
  DefenseConst.ITEMS_SKILLS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_SKILLS_LEFTWALL == null) {
      DefenseConst.ITEMS_SKILLS_LEFTWALL = [1];
    }
    return DefenseConst.ITEMS_SKILLS_LEFTWALL;
  };
  DefenseConst.LEVELS_SKILLS_LEFTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_SKILLS_LEFTWALL == null) {
      DefenseConst.LEVELS_SKILLS_LEFTWALL = [506];
    }
    return DefenseConst.LEVELS_SKILLS_LEFTWALL;
  };
  DefenseConst.ITEMS_MIDDLEWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEWALL == null) {
      DefenseConst.ITEMS_MIDDLEWALL = [1, 2, 1, 1, 2, 1];
    }
    return DefenseConst.ITEMS_MIDDLEWALL;
  };
  DefenseConst.LEVELS_MIDDLEWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEWALL == null) {
      DefenseConst.LEVELS_MIDDLEWALL = [2, 2, 3, 5, 6, 9];
    }
    return DefenseConst.LEVELS_MIDDLEWALL;
  };
  DefenseConst.PLAYER_LEVEL_WALL_$LI$ = function () {
    if (DefenseConst.PLAYER_LEVEL_WALL == null) {
      DefenseConst.PLAYER_LEVEL_WALL = [1, 11, 24];
    }
    return DefenseConst.PLAYER_LEVEL_WALL;
  };
  DefenseConst.PLAYER_LEVEL_GATE_$LI$ = function () {
    if (DefenseConst.PLAYER_LEVEL_GATE == null) {
      DefenseConst.PLAYER_LEVEL_GATE = [1, 11, 24];
    }
    return DefenseConst.PLAYER_LEVEL_GATE;
  };
  DefenseConst.ITEMS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTWALL == null) {
      DefenseConst.ITEMS_RIGHTWALL = [1, 1, 1, 1];
    }
    return DefenseConst.ITEMS_RIGHTWALL;
  };
  DefenseConst.LEVELS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTWALL == null) {
      DefenseConst.LEVELS_RIGHTWALL = [1, 2, 3, 5];
    }
    return DefenseConst.LEVELS_RIGHTWALL;
  };
  DefenseConst.ITEMS_SKILLS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.ITEMS_SKILLS_RIGHTWALL == null) {
      DefenseConst.ITEMS_SKILLS_RIGHTWALL = [1];
    }
    return DefenseConst.ITEMS_SKILLS_RIGHTWALL;
  };
  DefenseConst.LEVELS_SKILLS_RIGHTWALL_$LI$ = function () {
    if (DefenseConst.LEVELS_SKILLS_RIGHTWALL == null) {
      DefenseConst.LEVELS_SKILLS_RIGHTWALL = [506];
    }
    return DefenseConst.LEVELS_SKILLS_RIGHTWALL;
  };
  DefenseConst.ITEMS_LEFTMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTMOAT == null) {
      DefenseConst.ITEMS_LEFTMOAT = [4];
    }
    return DefenseConst.ITEMS_LEFTMOAT;
  };
  DefenseConst.LEVELS_LEFTMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTMOAT == null) {
      DefenseConst.LEVELS_LEFTMOAT = [1];
    }
    return DefenseConst.LEVELS_LEFTMOAT;
  };
  DefenseConst.ITEMS_MIDDLEMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEMOAT == null) {
      DefenseConst.ITEMS_MIDDLEMOAT = [4];
    }
    return DefenseConst.ITEMS_MIDDLEMOAT;
  };
  DefenseConst.LEVELS_MIDDLEMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEMOAT == null) {
      DefenseConst.LEVELS_MIDDLEMOAT = [1];
    }
    return DefenseConst.LEVELS_MIDDLEMOAT;
  };
  DefenseConst.ITEMS_RIGHTMOAT_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTMOAT == null) {
      DefenseConst.ITEMS_RIGHTMOAT = [4];
    }
    return DefenseConst.ITEMS_RIGHTMOAT;
  };
  DefenseConst.LEVELS_RIGHTMOAT_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTMOAT == null) {
      DefenseConst.LEVELS_RIGHTMOAT = [1];
    }
    return DefenseConst.LEVELS_RIGHTMOAT;
  };
  DefenseConst.ITEMS_LEFTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_LEFTWALL_FACTION == null) {
      DefenseConst.ITEMS_LEFTWALL_FACTION = [1, 1, 1];
    }
    return DefenseConst.ITEMS_LEFTWALL_FACTION;
  };
  DefenseConst.LEVELS_LEFTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_LEFTWALL_FACTION == null) {
      DefenseConst.LEVELS_LEFTWALL_FACTION = [1, 2, 3];
    }
    return DefenseConst.LEVELS_LEFTWALL_FACTION;
  };
  DefenseConst.ITEMS_MIDDLEWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_MIDDLEWALL_FACTION == null) {
      DefenseConst.ITEMS_MIDDLEWALL_FACTION = [1, 2, 1, 1, 2];
    }
    return DefenseConst.ITEMS_MIDDLEWALL_FACTION;
  };
  DefenseConst.LEVELS_MIDDLEWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_MIDDLEWALL_FACTION == null) {
      DefenseConst.LEVELS_MIDDLEWALL_FACTION = [2, 2, 3, 5, 6];
    }
    return DefenseConst.LEVELS_MIDDLEWALL_FACTION;
  };
  DefenseConst.ITEMS_RIGHTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.ITEMS_RIGHTWALL_FACTION == null) {
      DefenseConst.ITEMS_RIGHTWALL_FACTION = [1, 1, 1];
    }
    return DefenseConst.ITEMS_RIGHTWALL_FACTION;
  };
  DefenseConst.LEVELS_RIGHTWALL_FACTION_$LI$ = function () {
    if (DefenseConst.LEVELS_RIGHTWALL_FACTION == null) {
      DefenseConst.LEVELS_RIGHTWALL_FACTION = [1, 2, 3];
    }
    return DefenseConst.LEVELS_RIGHTWALL_FACTION;
  };
  DefenseConst.getFixedPrctOnSide = function (e) {
    return Math.round(25 - 2000 / (e + 80));
  };
  DefenseConst.getIndicesOfMaxToMinSorting = function (e) {
    var t = [0, 1, 2];
    if (e[t[0]] > e[t[1]]) {
      if (e[t[2]] > e[t[0]]) {
        t[0] = 2;
        t[1] = 0;
        t[2] = 1;
      } else if (e[t[2]] > e[t[1]]) {
        t[1] = 2;
        t[2] = 1;
      }
    } else if (e[t[1]] > e[t[2]]) {
      if (e[t[0]] > e[t[2]]) {
        t[0] = 1;
        t[1] = 0;
      } else {
        t[0] = 1;
        t[1] = 2;
        t[2] = 0;
      }
    } else {
      t[0] = 2;
      t[2] = 0;
    }
    return t;
  };
  DefenseConst.getSideUnitCount = function (e, t) {
    var n = [e * 1 * t[DefenseConst.SIDE_LEFT] / 100, e * 1 * t[DefenseConst.SIDE_MIDDLE] / 100, e * 1 * t[DefenseConst.SIDE_RIGHT] / 100];
    var i = new Array(3);
    i[0] = n[0] | 0;
    i[1] = n[1] | 0;
    i[2] = n[2] | 0;
    var a = new Array(3);
    a[0] = n[0] - i[0];
    a[1] = n[1] - i[1];
    a[2] = n[2] - i[2];
    var s = Math.round(a[0] + a[1] + a[2]);
    if (s > 0) {
      var r = DefenseConst.getIndicesOfMaxToMinSorting(a);
      for (var o = 0; o < s; o++) {
        i[r[o]]++;
      }
    }
    return i;
  };
  DefenseConst.calculateCastleDefense = function (e, t, n, i, a) {
    var s = n.getTotalAmount();
    e = Math.ceil(e * (1 + t / 100)) | 0;
    var r;
    var o;
    var l = Math.min(e, s);
    var u = DefenseConst.getSideUnitCount(l, i);
    var c = n.getMeleeCount();
    var _ = n.getRangedCount();
    var d = new Array(3);
    var m = new Array(3);
    var h = new Array(3);
    var p = new Array(3);
    var g = 0;
    var E = 0;
    for (var C = 0; C < 3; C++) {
      h[C] = u[C] * a[C] / 100;
      p[C] = u[C] - h[C];
      g += h[C];
      E += p[C];
    }
    r = g | 0;
    o = E | 0;
    if (g > c) {
      for (var f = 0; f < 3; f++) {
        h[f] = r === 0 ? 0 : c * h[f] / g;
        p[f] = u[f] - h[f];
      }
    } else if (E > _) {
      for (var T = 0; T < 3; T++) {
        p[T] = o === 0 ? 0 : _ * p[T] / E;
        h[T] = u[T] - p[T];
      }
    }
    for (var S = 0; S < 3; S++) {
      d[S] = h[S] | 0;
      m[S] = p[S] | 0;
    }
    var y = new Array(3);
    for (var I = 0; I < 3; I++) {
      y[I] = h[I] - d[I];
    }
    var v = new Array(3);
    for (var A = 0; A < 3; A++) {
      v[A] = p[A] - m[A];
    }
    var O = y[0] + y[1] + y[2] + 0.5 | 0;
    var L = v[0] + v[1] + v[2] + 0.49999 | 0;
    var D = new Array(3);
    for (var b = 0; b < 3; b++) {
      D[b] = d[b] + m[b] === u[b];
    }
    for (var N, R = DefenseConst.getIndicesOfMaxToMinSorting(y), P = 0; P < 3 && (N = R[P], !(O <= 0)); P++) {
      if (!D[N]) {
        d[N]++;
        O--;
        D[N] = d[N] + m[N] === u[N];
      }
    }
    R = DefenseConst.getIndicesOfMaxToMinSorting(v);
    for (var B = 0; B < 3 && (N = R[B], !(L <= 0)); B++) {
      if (!D[N]) {
        m[N]++;
        L--;
        D[N] = d[N] + m[N] === u[N];
      }
    }
    var M = n.getUnitTypeCount() * 2;
    var F = new ve(M);
    var U = 0;
    for (var G = n.getSoldierMeleeDefenseOrder(), k = 0; k < G.length; k++) {
      var w = G[k];
      var x = n.getItemAmount(w);
      var W = d[0] + d[1] + d[2];
      var H = Math.min(x, W);
      if (W > 0 && H > 0) {
        var V = H - (K = Math.round(H * 1 * d[DefenseConst.SIDE_LEFT] / W) | 0) - (Y = Math.round(H * 1 * d[DefenseConst.SIDE_RIGHT] / W - 0.0001) | 0);
        n.removeItem(w, H);
        F.leftSide[U] = w;
        F.leftSide[U + 1] = K;
        F.middleSide[U] = w;
        F.middleSide[U + 1] = V;
        F.rightSide[U] = w;
        F.rightSide[U + 1] = Y;
        U += 2;
        d[DefenseConst.SIDE_LEFT] -= K;
        d[DefenseConst.SIDE_MIDDLE] -= V;
        d[DefenseConst.SIDE_RIGHT] -= Y;
      }
    }
    for (var j = n.getSoldierRangedDefenseOrder(), q = 0; q < j.length; q++) {
      w = j[q];
      x = n.getItemAmount(w);
      W = m[0] + m[1] + m[2];
      H = Math.min(x, W);
      if (W > 0 && H > 0) {
        var K;
        var Y;
        V = H - (K = Math.round(H * 1 * m[DefenseConst.SIDE_LEFT] / W) | 0) - (Y = Math.round(H * 1 * m[DefenseConst.SIDE_RIGHT] / W - 0.0001) | 0);
        n.removeItem(w, H);
        F.leftSide[U] = w;
        F.leftSide[U + 1] = K;
        F.middleSide[U] = w;
        F.middleSide[U + 1] = V;
        F.rightSide[U] = w;
        F.rightSide[U + 1] = Y;
        U += 2;
        m[DefenseConst.SIDE_LEFT] -= K;
        m[DefenseConst.SIDE_MIDDLE] -= V;
        m[DefenseConst.SIDE_RIGHT] -= Y;
      }
    }
    for (var z = U; z < M; z++) {
      F.leftSide[z] = -1;
      F.middleSide[z] = -1;
      F.rightSide[z] = -1;
    }
    return F;
  };
  return DefenseConst;
}();
I.MAX_SLOTSIZE = 999;
I.MAX_SUPPORT_TOOLS_SLOTSIZE = 1;
I.TOOL_TYPE_WALL = 1;
I.TOOL_TYPE_GATE = 2;
I.TOOL_TYPE_FIELD = 3;
I.TOOL_TYPE_MOAT = 4;
I.TOOL_TYPE_KEEP = 5;
I.TOOL_TYPE_KEEP_DEFENSE_SUPPORT_TOOLS = 6;
I.DEFENCE_CATEGORY_MOAT = 2;
I.SIDE_LEFT = 0;
I.SIDE_MIDDLE = 1;
I.SIDE_RIGHT = 2;
I.MAX_SUPPORT_TOOL_TRIGGER_LIMIT = 2000;
exports.DefenseConst = I;
I.__class = "DefenseConst";
var v = function () {
  return function DistrictConst() {};
}();
v.NOT_IN_DISTRICT = -1;
v.NO_SLOT = -1;
v.INVALID_DISTRICT_ID = -1;
exports.DistrictConst = v;
v.__class = "DistrictConst";
var A = function () {
  function DontShowDialogConst() {}
  DontShowDialogConst.isValidDialogID = function (e) {
    return e === DontShowDialogConst.WORLDMAP_TEASER;
  };
  return DontShowDialogConst;
}();
A.WORLDMAP_TEASER = 0;
exports.DontShowDialogConst = A;
A.__class = "DontShowDialogConst";
var O = function () {
  return function DowntimeStatusConst() {};
}();
O.FREEZED = 1;
O.UNFREEZED = 0;
O.FOOD_PRODUCTION_MESSAGE = 1;
O.ALL_PRODUCTION_MESSAGE = 0;
exports.DowntimeStatusConst = O;
O.__class = "DowntimeStatusConst";
var L = function () {
  function DungeonConst() {}
  DungeonConst.COOLDOWN_$LI$ = function () {
    if (DungeonConst.COOLDOWN == null) {
      DungeonConst.COOLDOWN = 10800;
    }
    return DungeonConst.COOLDOWN;
  };
  DungeonConst.getEventDungeonOwnerIDBySkinID = function (e) {
    switch (e) {
      case DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING:
        return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_COW:
        return DungeonConst.APRIL_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
        return DungeonConst.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID;
      case DungeonConst.DUNGEON_SKIN_EASTER:
        return DungeonConst.EASTER_DUNGEON_EVENT_PLAYER_ID;
      default:
        return DungeonConst.INVALID;
    }
  };
  DungeonConst.getEventDungeonDefaultOwnerID = function () {
    return DungeonConst.RANDOM_DUNGEON_EVENT_PLAYER_ID;
  };
  DungeonConst.getDungeonOwnerID = function (e, t) {
    if (e === 0) {
      return DungeonConst.DUNGEON_PLAYER_ID - t;
    } else {
      return DungeonConst.KINGDOM_DUNGEON_PLAYER_ID - (e - 1);
    }
  };
  DungeonConst.getBossDungeonOwnerID = function (e) {
    return DungeonConst.KINGDOM_BOSS_DUNGEON_PLAYER_ID - (e - 1);
  };
  DungeonConst.getLevel = function (e, t) {
    var n = DungeonConst.getKingdomOffset(t);
    return (Math.floor(DungeonConst.FACTOR_VICTORY_LEVEL * Math.pow(Math.abs(e), DungeonConst.POWER_VICTORY_LEVEL)) | 0) + n;
  };
  DungeonConst.getSkipCost = function (e, t) {
    return Math.max(1, (e * t / 180 | 0) / 60 | 0);
  };
  DungeonConst.getVictories = function (e, t) {
    var n = DungeonConst.getKingdomOffset(t);
    return Math.floor(Math.pow((e - n + 1) / DungeonConst.FACTOR_VICTORY_LEVEL, 1 / DungeonConst.POWER_VICTORY_LEVEL)) | 0;
  };
  DungeonConst.getKingdomOffset = function (e) {
    var t = 0;
    switch (e) {
      case 0:
        t = 1;
        break;
      case 2:
        t = 20;
        break;
      case 1:
        t = 35;
        break;
      case 3:
        t = 45;
    }
    return t;
  };
  DungeonConst.getResources = function (e) {
    return Math.pow(e, 2.2) * 1.2 + 90 | 0;
  };
  DungeonConst.getC1 = function (e) {
    if (e >= 61) {
      return Math.pow(e, 1.1) * 210 | 0;
    } else {
      return Math.pow(e, 2.1) * 3.5 + 25 | 0;
    }
  };
  DungeonConst.getC2 = function (e) {
    return Math.max(0, (Math.random() * 11 - 5 + e * 0.5 + 0.7) * 0.5) | 0;
  };
  DungeonConst.getC2Probability = function (e) {
    if (e >= 3) {
      return 50;
    } else {
      return 0;
    }
  };
  DungeonConst.getWallUpgradeByLevel = function (e) {
    if (e < 11) {
      return 1;
    } else if (e < 24) {
      return 2;
    } else {
      return 3;
    }
  };
  DungeonConst.getWallWOD = function (e) {
    if (e < 11) {
      return 501;
    } else if (e < 24) {
      return 502;
    } else {
      return 503;
    }
  };
  DungeonConst.getGateWOD = function (e) {
    if (e < 11) {
      return 450;
    } else if (e < 24) {
      return 451;
    } else {
      return 452;
    }
  };
  DungeonConst.getGuards = function (e, t) {
    var n = DungeonConst.getLevel(e, t);
    return Math.max(0, Math.min(50, Math.round((n - 4) * 0.06 * (n - 4) + (n - 4) * 0.5)));
  };
  return DungeonConst;
}();
L.FACTOR_VICTORY_LEVEL = 1.9;
L.POWER_VICTORY_LEVEL = 0.555;
L.DUNGEON_PLAYER_ID = -202;
L.DUNGEON_PLAYER_NAME_COUNT = 13;
L.KINGDOM_DUNGEON_PLAYER_ID = -220;
L.KINGDOM_BOSS_DUNGEON_PLAYER_ID = -230;
L.BLUE_FACTION_KING = -410;
L.RED_FACTION_KING = -411;
L.RANDOM_DUNGEON_EVENT_PLAYER_ID = -500;
L.APRIL_DUNGEON_EVENT_PLAYER_ID = -501;
L.ST_PATRICKS_DAY_DUNGEON_EVENT_PLAYER_ID = -502;
L.EASTER_DUNGEON_EVENT_PLAYER_ID = -503;
L.RANDOM_DUNGEON_MAX_GUARDS = 50;
L.BASIC_NOMAD_CAMP_PLAYER_ID = -601;
L.BASIC_SAMURAI_CAMP_PLAYER_ID = -651;
L.BASIC_INVASION_CAMP_PLAYER_ID = -701;
L.BASIC_ALIEN_ID = -1000;
L.BASIC_SAMURAI_ALIEN_ID = -1001;
L.BASIC_RED_ALIEN_ID = -1002;
L.BASIC_ALLIANCE_NOMAD_CAMP_PLAYER_ID = -801;
L.BASIC_DAIMYO_CASTLE_PLAYER_ID = -811;
L.BASIC_DAIMYO_TOWNSHIP_PLAYER_ID = -815;
L.BASIC_COLLECTOR_PLAYER_ID = -1100;
L.BASIC_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_PLAYER_ID = -1200;
L.BASIC_WOLF_KING_PLAYER_ID = -1201;
L.DUNGEON_SKIN_ROBBER_BARON_KING = 1;
L.DUNGEON_SKIN_COW = 2;
L.DUNGEON_SKIN_ST_PATRICKS_DAY = 3;
L.DUNGEON_SKIN_EASTER = 4;
L.NOMAD_CAMP_COUNT = 4;
L.MESSAGE_FAKE_TUTORIAL_BATTLELOG_PID = -2;
L.DUNGEON_DELETION_CLASSIC_FACTOR = 1;
L.DUNGEON_DELETION_ICE_FACTOR = 2.2;
L.DUNGEON_DELETION_DESERT_FACTOR = 3.5;
L.DUNGEON_DELETION_VULCAN_FACTOR = 4;
L.NO_LOW_LEVEL_DUNGEON_ATTACK = false;
L.INVALID = -1;
exports.DungeonConst = L;
L.__class = "DungeonConst";
var D = function () {
  function EffectConst() {}
  EffectConst.boostToModifier = function (e) {
    var t = (EffectConst.BASE_BOOST_PERCENTAGE + e) * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(t, 0);
  };
  EffectConst.modifierToIntBoost = function (e) {
    var t = (e - EffectConst.DEFAULT_MODIFIER) * EffectConst.BASE_BOOST_PERCENTAGE | 0;
    return Math.max(t, 0);
  };
  EffectConst.boostsToModifier = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = EffectConst.BASE_BOOST_PERCENTAGE;
    for (var i = 0; i < e.length; i++) {
      n += e[i];
    }
    var a = n * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(a, 0);
  };
  EffectConst.addBoostToModifier = function (e, t) {
    t += e * EffectConst.TO_MULTIPLIER_FACTOR;
    return Math.max(t, 0);
  };
  EffectConst.reductionBoostToModifier = function (e) {
    return EffectConst.boostToModifier(-e);
  };
  EffectConst.addReductionBoostToModifier = function (e, t) {
    return EffectConst.addBoostToModifier(-e, t);
  };
  EffectConst.boostToBoostFactor = function (e) {
    return e * EffectConst.TO_MULTIPLIER_FACTOR;
  };
  EffectConst.boostsToBoostFactor = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    var n = 0;
    for (var i = 0; i < e.length; i++) {
      n += e[i];
    }
    return EffectConst.boostToBoostFactor(n);
  };
  EffectConst.boostFactorToBoost = function (e) {
    return e * EffectConst.BASE_BOOST_PERCENTAGE;
  };
  EffectConst.addBoostFactorsToModifier = function (e) {
    var t = [];
    for (var n = 1; n < arguments.length; n++) {
      t[n - 1] = arguments[n];
    }
    var i = e;
    for (var a = 0; a < t.length; a++) {
      i += t[a];
    }
    return i;
  };
  EffectConst.reductionBoostFactorToModifier = function (e) {
    return EffectConst.boostFactorsToModifier(-e);
  };
  EffectConst.boostFactorsToModifier = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    return EffectConst.addBoostFactorsToModifier.apply(this, [EffectConst.DEFAULT_MODIFIER].concat(e));
  };
  EffectConst.applyBoostToValueRoundingWithCeil = function (e, t) {
    var n = EffectConst.boostToModifier(e);
    return Math.ceil(t * n) | 0;
  };
  EffectConst.applyBoostToValueRoundingWithFloor = function (e, t) {
    var n = EffectConst.boostToModifier(e);
    return Math.floor(t * n) | 0;
  };
  EffectConst.applyBoostToValue = function (e, t) {
    return t * EffectConst.boostToModifier(e);
  };
  EffectConst.getBoostedAmount = function (e, t) {
    return EffectConst.applyBoostToValueRoundingWithCeil(e, t) - t;
  };
  EffectConst.reduceBoostToValueRoundingWithFloor = function (e, t) {
    var n = EffectConst.addBoostToModifier(-e, 1);
    return Math.floor(t * n) | 0;
  };
  return EffectConst;
}();
D.BASE_BOOST_PERCENTAGE = 100;
D.TO_MULTIPLIER_FACTOR = 0.01;
D.DEFAULT_MODIFIER = 1;
D.NO_BOOST = 0;
D.NO_BOOST_FACTOR = 0;
D.NO_BONUS = 0;
D.DUMMY_VALUE = 0;
exports.EffectConst = D;
D.__class = "EffectConst";
var b = function () {
  function EquipmentConst() {}
  EquipmentConst.SLOT_IDS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS == null) {
      EquipmentConst.SLOT_IDS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN, EquipmentConst.SLOT_HERO];
    }
    return EquipmentConst.SLOT_IDS;
  };
  EquipmentConst.SLOT_IDS_FOR_GEMS_$LI$ = function () {
    if (EquipmentConst.SLOT_IDS_FOR_GEMS == null) {
      EquipmentConst.SLOT_IDS_FOR_GEMS = [EquipmentConst.SLOT_ARMOR, EquipmentConst.SLOT_WEAPON, EquipmentConst.SLOT_HELMET, EquipmentConst.SLOT_ARTIFACT, EquipmentConst.SLOT_SKIN];
    }
    return EquipmentConst.SLOT_IDS_FOR_GEMS;
  };
  EquipmentConst.PER_TEN_THOUSAND_$LI$ = function () {
    if (EquipmentConst.PER_TEN_THOUSAND == null) {
      EquipmentConst.PER_TEN_THOUSAND = 0.0001;
    }
    return EquipmentConst.PER_TEN_THOUSAND;
  };
  EquipmentConst.getMaxEnchantmentLevel = function (e) {
    switch (e) {
      case EquipmentConst.RARENESS_COMMON:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_COMMON;
      case EquipmentConst.RARENESS_RARE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RARE;
      case EquipmentConst.RARENESS_EPIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_EPIC;
      case EquipmentConst.RARENESS_LEGENDARY:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_LEGENDARY;
      case EquipmentConst.RARENESS_UNIQUE:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_UNIQUE;
      case EquipmentConst.RARENESS_RELIC:
        return EquipmentConst.MAX_ENCHANTMENTLEVEL_RELIC;
    }
    return 0;
  };
  EquipmentConst.isValidForEnchanting = function (e, t) {
    return t < EquipmentConst.getMaxEnchantmentLevel(e);
  };
  EquipmentConst.getC2PriceForEnchanting = function (e) {
    return (Math.round(Math.pow(e, 2.1) * 5.5) | 0) * 10;
  };
  EquipmentConst.getC1PriceForEnchanting = function (e) {
    return (Math.round(Math.pow(e, 1.7) * 17) | 0) * 10;
  };
  EquipmentConst.getPriceForCrafting = function (e, t, n) {
    var i = 0;
    if (e === EquipmentConst.NORMAL_CRAFT_COUNT) {
      switch (t) {
        case EquipmentConst.RARENESS_COMMON:
          i = EquipmentConst.PRICE_COMMON;
          break;
        case EquipmentConst.RARENESS_RARE:
          i = EquipmentConst.PRICE_RARE;
          break;
        case EquipmentConst.RARENESS_EPIC:
          i = EquipmentConst.PRICE_EPIC;
          break;
        case EquipmentConst.RARENESS_LEGENDARY:
          i = EquipmentConst.PRICE_LEGENDARY;
      }
    } else {
      switch (t) {
        case EquipmentConst.RARENESS_COMMON:
          i = EquipmentConst.PRICE_TORARE;
          break;
        case EquipmentConst.RARENESS_RARE:
          i = EquipmentConst.PRICE_TOEPIC;
          break;
        case EquipmentConst.RARENESS_EPIC:
          i = EquipmentConst.PRICE_TOLEGENDARY;
      }
    }
    return Math.floor(i * n) | 0;
  };
  EquipmentConst.getEnchantingChance = function (e) {
    return Math.min(100, Math.round(Math.exp(e * -0.2) * 1.28 * 100));
  };
  EquipmentConst.getEquipmentBonus = function (e, t, n) {
    var i = e * t * n * EquipmentConst.PER_TEN_THOUSAND_$LI$();
    if (i > 1 || i < -1) {
      return i | 0;
    } else if (i > 0) {
      return 1;
    } else if (i < 0) {
      return -1;
    } else {
      return 0;
    }
  };
  EquipmentConst.getEquipmentBonusWithEnchantment = function (e, t, n, i, a) {
    return EquipmentConst.getEquipmentBonus(e, t, n) + i * a;
  };
  EquipmentConst.getBaronCapitalPick = function (e) {
    switch (e) {
      case Ye.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_CLASSIC;
      case et.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_ICE;
      case Je.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_DESERT;
      case it.KINGDOM_ID:
        return EquipmentConst.PICK_BARON_CAPITAL_VULCAN;
    }
    return -1;
  };
  EquipmentConst.isHero = function (e) {
    switch (e) {
      case EquipmentConst.RARENESS_HERO_UNIQUE:
      case EquipmentConst.RARENESS_HERO_COMMON:
      case EquipmentConst.RARENESS_HERO_RARE:
      case EquipmentConst.RARENESS_HERO_EPIC:
      case EquipmentConst.RARENESS_HERO_LEGENDARY:
      case EquipmentConst.RARENESS_HERO_RELIC:
        return true;
      default:
        return false;
    }
  };
  EquipmentConst.isOutpostBaron = function (e) {
    return e === EquipmentConst.PICK_BARON_A1 || e === EquipmentConst.PICK_BARON_A2 || e === EquipmentConst.PICK_BARON_A3;
  };
  return EquipmentConst;
}();
b.NORMAL_CRAFT_COUNT = 3;
b.SUPER_CRAFT_COUNT = 6;
b.EQUIPMENT_SIZE_NORMAL = 400;
b.EQUIPMENT_SIZE_MAX = 420;
b.UNDEFINED_WEARER_ID = -1;
b.BARON_WEARER_ID = 1;
b.COMMANDER_WEARER_ID = 2;
b.SLOT_ARMOR = 1;
b.SLOT_WEAPON = 2;
b.SLOT_HELMET = 3;
b.SLOT_ARTIFACT = 4;
b.SLOT_SKIN = 5;
b.SLOT_HERO = 6;
b.RARENESS_UNIQUE = 0;
b.RARENESS_COMMON = 1;
b.RARENESS_RARE = 2;
b.RARENESS_EPIC = 3;
b.RARENESS_LEGENDARY = 4;
b.RARENESS_RELIC = 5;
b.RARENESS_HERO_UNIQUE = 10;
b.RARENESS_HERO_COMMON = 11;
b.RARENESS_HERO_RARE = 12;
b.RARENESS_HERO_EPIC = 13;
b.RARENESS_HERO_LEGENDARY = 14;
b.RARENESS_HERO_RELIC = 15;
b.RARENESS_HERO_BEGINN = 10;
b.PRICE_COMMON = 10;
b.PRICE_TORARE = 25;
b.PRICE_RARE = 500;
b.PRICE_TOEPIC = 2500;
b.PRICE_EPIC = 4000;
b.PRICE_TOLEGENDARY = 20000;
b.PRICE_LEGENDARY = 25000;
b.PICK_BARON_CLASSIC = 0;
b.PICK_BARON_ICE = 1;
b.PICK_BARON_DESERT = 2;
b.PICK_BARON_VULCAN = 3;
b.PICK_BARON_CAPITAL_CLASSIC = 4;
b.PICK_BARON_FACTION = 5;
b.PICK_BARON_A1 = 6;
b.PICK_BARON_A2 = 7;
b.PICK_BARON_A3 = 8;
b.PICK_BARON_METROPOL = 9;
b.PICK_BARON_CAPITAL_ICE = 10;
b.PICK_BARON_CAPITAL_DESERT = 11;
b.PICK_BARON_CAPITAL_VULCAN = 12;
b.PICK_BARON_ISLAND = 13;
b.BARON_BOSS_DUNGEON = -51;
b.WOLFKING_BARON = -214;
b.BARON_FACTION_RED = -101;
b.BARON_FACTION_BLUE = -102;
b.NO_ENCHANTMENT = 0;
b.MAX_ENCHANTMENTLEVEL_COMMON = 3;
b.MAX_ENCHANTMENTLEVEL_RARE = 8;
b.MAX_ENCHANTMENTLEVEL_EPIC = 12;
b.MAX_ENCHANTMENTLEVEL_LEGENDARY = 16;
b.MAX_ENCHANTMENTLEVEL_UNIQUE = 20;
b.MAX_ENCHANTMENTLEVEL_RELIC = 50;
b.LORD_NAME_MIN_LENGTH = 3;
b.LORD_NAME_MAX_LENGTH = 15;
b.EQUIPMENT_TYPE_ID_GENERATED = 0;
b.EQUIPMENT_TYPE_ID_UNIQUE = 1;
b.EQUIPMENT_TYPE_ID_UNIQUE_TEMPORARY = 2;
b.EQUIPMENT_TYPE_ID_RELIC = 3;
exports.EquipmentConst = b;
b.__class = "EquipmentConst";
var N = function () {
  return function EventAutoScalingConst() {};
}();
N.DIFFICULTY_NOT_SELECTED = -1;
N.CLASSIC_EVENT_DIFFICULTY = 0;
N.ANY_EVENT_DIFFICULTY = 1;
exports.EventAutoScalingConst = N;
N.__class = "EventAutoScalingConst";
var R = function () {
  function EventConst() {}
  EventConst.ARTIFACT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ARTIFACT_EVENT_TYPES == null) {
      EventConst.ARTIFACT_EVENT_TYPES = [EventConst.EVENTTYPE_ARTIFACT2, EventConst.EVENTTYPE_ARTIFACT_ICECREAM, EventConst.EVENTTYPE_ARTIFACT_DESSERT, EventConst.EVENTTYPE_ARTIFACT_VOLCANO];
    }
    return EventConst.ARTIFACT_EVENT_TYPES;
  };
  EventConst.DUNGEON_EVENT_TYPES_$LI$ = function () {
    if (EventConst.DUNGEON_EVENT_TYPES == null) {
      EventConst.DUNGEON_EVENT_TYPES = [EventConst.EVENTTYPE_DUNGEON, EventConst.EVENTTYPE_APRIL];
    }
    return EventConst.DUNGEON_EVENT_TYPES;
  };
  EventConst.CRUSADE_EVENT_TYPES_$LI$ = function () {
    if (EventConst.CRUSADE_EVENT_TYPES == null) {
      EventConst.CRUSADE_EVENT_TYPES = [EventConst.EVENTTYPE_CRUSADE_THORNKING, EventConst.EVENTTYPE_CRUSADE_SEAQUEEN, EventConst.EVENTTYPE_CRUSADE_UNDERWORLD];
    }
    return EventConst.CRUSADE_EVENT_TYPES;
  };
  EventConst.NOMAD_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.NOMAD_INVASION_EVENT_TYPES == null) {
      EventConst.NOMAD_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_NOMADINVASION, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE];
    }
    return EventConst.NOMAD_INVASION_EVENT_TYPES;
  };
  EventConst.SAMURAI_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.SAMURAI_INVASION_EVENT_TYPES == null) {
      EventConst.SAMURAI_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_SAMURAI_INVASION];
    }
    return EventConst.SAMURAI_INVASION_EVENT_TYPES;
  };
  EventConst.FACTION_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.FACTION_INVASION_EVENT_TYPES == null) {
      EventConst.FACTION_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_FACTION_INVASION];
    }
    return EventConst.FACTION_INVASION_EVENT_TYPES;
  };
  EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP_$LI$ = function () {
    if (EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP == null) {
      EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP = [EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_ALLIANCE_BATTLEGROUND];
    }
    return EventConst.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP;
  };
  EventConst.ALL_PACKAGEEVENT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ALL_PACKAGEEVENT_EVENT_TYPES == null) {
      EventConst.ALL_PACKAGEEVENT_EVENT_TYPES = [EventConst.EVENTTYPE_UNITDEALER_ISLAND, EventConst.EVENTTYPE_UNITDEALER_UNDERWORLD, EventConst.EVENTTYPE_UNITDEALER_BERIMOND, EventConst.EVENTTYPE_MERCHANT, EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_PLAGUE, EventConst.EVENTTYPE_UNITDEALER, EventConst.EVENTTYPE_NOMADHUNTER, EventConst.EVENTTYPE_UNITDEALER_SEAQUEEN, EventConst.EVENTTYPE_EQUIPMENTMERCHANT, EventConst.EVENTTYPE_MERCHANT_FACTION, EventConst.EVENTTYPE_GIFT_TRADER, EventConst.EVENTTYPE_UNITDEALER_SAMURAI, EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION, EventConst.EVENTTYPE_APPRENTICE_BLACKSMITH, EventConst.EVENTTYPE_WISHING_WELL_COIN_VENDOR, EventConst.EVENTTYPE_NOMADINVASION_VENDOR, EventConst.EVENTTYPE_SAMURAIINVASION_VENDOR, EventConst.EVENTTYPE_COLLECTOR_SHOP, EventConst.EVENTTYPE_DAIMYO_SHOP, EventConst.EVENTTYPE_APPRENTICE_TOKEN_VENDOR];
    }
    return EventConst.ALL_PACKAGEEVENT_EVENT_TYPES;
  };
  EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES_$LI$ = function () {
    if (EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES == null) {
      EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES = [EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_MERCHANT, EventConst.EVENTTYPE_EQUIPMENTMERCHANT, EventConst.EVENTTYPE_GIFT_TRADER];
    }
    return EventConst.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES;
  };
  EventConst.ALIEN_INVASION_EVENT_TYPES_$LI$ = function () {
    if (EventConst.ALIEN_INVASION_EVENT_TYPES == null) {
      EventConst.ALIEN_INVASION_EVENT_TYPES = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.ALIEN_INVASION_EVENT_TYPES;
  };
  EventConst.TREASURE_MAP_UNIT_DEALERS_$LI$ = function () {
    if (EventConst.TREASURE_MAP_UNIT_DEALERS == null) {
      EventConst.TREASURE_MAP_UNIT_DEALERS = [EventConst.EVENTTYPE_UNITDEALER, EventConst.EVENTTYPE_UNITDEALER_UNDERWORLD, EventConst.EVENTTYPE_UNITDEALER_SEAQUEEN];
    }
    return EventConst.TREASURE_MAP_UNIT_DEALERS;
  };
  EventConst.COLOSSUS_EVENT_TYPES_$LI$ = function () {
    if (EventConst.COLOSSUS_EVENT_TYPES == null) {
      EventConst.COLOSSUS_EVENT_TYPES = [EventConst.EVENTTYPE_COLOSSUS, EventConst.EVENTTYPE_HORSE_COLOSSUS, EventConst.EVENTTYPE_COIN_COLOSSUS];
    }
    return EventConst.COLOSSUS_EVENT_TYPES;
  };
  EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS_$LI$ = function () {
    if (EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS == null) {
      EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS = [EventConst.EVENTTYPE_ARMORER, EventConst.EVENTTYPE_NOMADHUNTER, EventConst.EVENTTYPE_UNITDEALER_BERIMOND, EventConst.EVENTTYPE_UNITDEALER_SAMURAI, EventConst.EVENTTYPE_UNITDEALER_FACTION_INVASION];
    }
    return EventConst.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE = EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE;
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE;
  };
  EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION_$LI$ = function () {
    if (EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION == null) {
      EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION = [EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE, EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE, EventConst.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED];
    }
    return EventConst.LEAGUETYPE_EVENT_SUBTYPES_FACTION;
  };
  EventConst.LTPE_DEFAULT_SUBTYPES_$LI$ = function () {
    if (EventConst.LTPE_DEFAULT_SUBTYPES == null) {
      EventConst.LTPE_DEFAULT_SUBTYPES = EventConst.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$();
    }
    return EventConst.LTPE_DEFAULT_SUBTYPES;
  };
  EventConst.LTPE_DEFAULT_SUBTYPE_$LI$ = function () {
    if (EventConst.LTPE_DEFAULT_SUBTYPE == null) {
      EventConst.LTPE_DEFAULT_SUBTYPE = EventConst.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT;
    }
    return EventConst.LTPE_DEFAULT_SUBTYPE;
  };
  EventConst.getBountyPrizeC1ByTargetLevel = function (e) {
    return (Math.round(Math.pow(e, 0.75) * 415 / 100) | 0) * 100;
  };
  EventConst.getItemPositionByC2Amount = function (e) {
    switch (e) {
      case 2000:
        return 1;
      case 6500:
        return 2;
      case 15000:
        return 3;
      case 30000:
        return 4;
      case 50000:
        return 5;
      case 85000:
        return 6;
      case 180000:
        return 7;
      case 380000:
        return 8;
      default:
        return -1;
    }
  };
  EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE_$LI$ = function () {
    if (EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE == null) {
      EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_INVASION, EventConst.EVENTTYPE_FACTION_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.ALLOWED_EVENT_TYPES_FOR_LTPE;
  };
  EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL_$LI$ = function () {
    if (EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL == null) {
      EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL = [EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE, EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE, EventConst.EVENTTYPE_SAMURAI_INVASION, EventConst.EVENTTYPE_FACTION_INVASION, EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE];
    }
    return EventConst.EVENT_TYPES_FOR_OFFICERS_SCHOOL;
  };
  EventConst.LUCKY_WHEEL_EVENT_TYPES_$LI$ = function () {
    if (EventConst.LUCKY_WHEEL_EVENT_TYPES == null) {
      EventConst.LUCKY_WHEEL_EVENT_TYPES = [EventConst.EVENTTYPE_LUCKYWHEEL, EventConst.EVENTTYPE_LUCKYWHEEL_SD];
    }
    return EventConst.LUCKY_WHEEL_EVENT_TYPES;
  };
  return EventConst;
}();
R.TRIGGER_ID_OFFSET = 600;
R.INVALID_EVENTTYPE = -1;
R.EVENTTYPE_CRUSADE_THORNKING = 2;
R.EVENTTYPE_FACTION = 3;
R.EVENTTYPE_CRUSADE_SEAQUEEN = 4;
R.EVENTTYPE_NOMADINVASION = 5;
R.EVENTTYPE_PAYMENTREWARD_SPECIAL_OFFER = 6;
R.EVENTTYPE_PRIME_SALES = 7;
R.EVENTTYPE_SKIP_FOR_FREE = 8;
R.EVENTTYPE_EGA_VOTING = 10;
R.EVENTTYPE_GGS_GIFT = 13;
R.EVENTTYPE_UNITDEALER_ISLAND = 14;
R.EVENTTYPE_LUCKYWHEEL = 15;
R.EVENTTYPE_GLORY_BOOSTER = 16;
R.EVENTTYPE_UNITDEALER_UNDERWORLD = 17;
R.EVENTTYPE_ADJUST_SKIP_BUILDING = 18;
R.EVENTTYPE_ARTIFACT_VERYLOW = 19;
R.EVENTTYPE_MERCHANT = 22;
R.EVENTTYPE_ARTIFACT = 23;
R.EVENTTYPE_TOURNAMENT = 24;
R.EVENTTYPE_BOUNTYHUNTER = 25;
R.EVENTTYPE_DUNGEON = 26;
R.EVENTTYPE_ARMORER = 27;
R.EVENTTYPE_RESSOURCEEXCHANGER = 28;
R.EVENTTYPE_ARTIFACT2 = 29;
R.EVENTTYPE_ARTIFACT_LOW = 30;
R.EVENTTYPE_RATINGEVENT = 32;
R.EVENTTYPE_ALCHEMIST = 35;
R.EVENTTYPE_ALLIANCE_TOURNAMENT = 36;
R.EVENTTYPE_ARTIFACT_ICECREAM = 37;
R.EVENTTYPE_ARTIFACT_DESSERT = 38;
R.EVENTTYPE_ARTIFACT_VOLCANO = 39;
R.EVENTTYPE_ARTIFACT_LOW_LEVEL = 67;
R.EVENTTYPE_CONSTRUCTION_EXPERT = 40;
R.EVENTTYPE_PLAGUE = 41;
R.EVENTTYPE_MERCHANT_FACTION = 42;
R.EVENTTYPE_UNITDEALER = 43;
R.EVENTTYPE_COLOSSUS = 44;
R.EVENTTYPE_ALLIPRIME = 45;
R.EVENTTYPE_ENCHANTER = 46;
R.EVENTTYPE_APRIL = 48;
R.EVENTTYPE_NOMADHUNTER = 49;
R.EVENTTYPE_RESEARCH_EXPERT = 50;
R.EVENTTYPE_ALLIPAYMENT = 55;
R.EVENTTYPE_HORSE_COLOSSUS = 57;
R.EVENTTYPE_UNITDEALER_SEAQUEEN = 58;
R.EVENTTYPE_POINT_EVENT = 60;
R.EVENTTYPE_EVENT_SKIN = 61;
R.EVENTTYPE_BEGGING_KNIGHTS = 62;
R.EVENTTYPE_WORLD_CUP = 63;
R.EVENTTYPE_CRUSADE_UNDERWORLD = 64;
R.EVENTTYPE_USER_SURVEY = 65;
R.EVENTTYPE_GIFT_TRADER = 66;
R.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES = 68;
R.EVENTTYPE_COIN_COLOSSUS = 69;
R.EVENTTYPE_PRIME_SALES_REVIVE_ALL = 70;
R.EVENTTYPE_ALIEN_INVASION_ALLIANCE = 71;
R.EVENTTYPE_SAMURAI_ALIEN_INVASION = 500;
R.EVENTTYPE_NOMADINVASION_ALLIANCE = 72;
R.EVENTTYPE_EVENT_ANNOUNCEMENT = 73;
R.EVENTTYPE_REAL_CURRENCY_PRIME_DAY = 74;
R.EVENTTYPE_EVENT_BOOSTER_PRIME_SALE = 75;
R.EVENTTYPE_UNITDEALER_BERIMOND = 76;
R.EVENTTYPE_EVENT_TEMPORARY_QUESTS = 77;
R.EVENTTYPE_EVENT_ONE_TIME_OFFER = 78;
R.EVENTTYPE_REACTIVATION_PRIME_DAY = 79;
R.EVENTTYPE_SAMURAI_INVASION = 80;
R.EVENTTYPE_UNITDEALER_SAMURAI = 81;
R.EVENTTYPE_TIERED_PRIME_DAY = 82;
R.EVENTTYPE_LONGTERM_POINT_EVENT = 83;
R.EVENTTYPE_PRIVATE_PRIME_TIME_EVENT = 84;
R.EVENTTYPE_FACTION_INVASION = 85;
R.EVENTTYPE_UNITDEALER_FACTION_INVASION = 86;
R.EVENTTYPE_PRIME_SALES_TECHNICUS = 87;
R.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER = 88;
R.EVENTTYPE_LUCKYWHEEL_SD = 89;
R.EVENTTYPE_SHOPPING_CART_PRIMEDAY = 90;
R.EVENTTYPE_APPRENTICE_BLACKSMITH = 92;
R.EVENTTYPE_WISHING_WELL_COIN_VENDOR = 93;
R.EVENTTYPE_NOMADINVASION_VENDOR = 94;
R.EVENTTYPE_TIMELIMITED_CAMPAIGN_EVENT = 95;
R.EVENTTYPE_TIMELIMITED_CAMPAIGN_QUEST_EVENT = 96;
R.EVENTTYPE_UNIT_PRIME_SALE = 100;
R.EVENTTYPE_EQUIPMENTMERCHANT = 101;
R.EVENTTYPE_TEMPSERVER = 106;
R.EVENTTYPE_COLLECTOR = 108;
R.EVENTTYPE_COLLECTOR_SHOP = 109;
R.EVENTTYPE_KINGDOMS_LEAGUE = 601;
R.EVENTTYPE_KINGDOMS_LEAGUE_KILL = 602;
R.EVENTTYPE_KINGDOMS_LEAGUE_CHANGE_RUNTIME = 603;
R.EVENTTYPE_GLOBAL_EFFECTS = 610;
R.EVENTTYPE_GLOBAL_EFFECTS_KILL = 611;
R.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER = 612;
R.EVENTTYPE_GLOBAL_EFFECTS_BOOSTER_KILL = 613;
R.EVENTTYPE_LONGTERMPOINTEVENT_CHANGE_UPCOMING_EVENTS = 620;
R.EVENTTYPE_CURRENCY_CLEAR_COMPENSATION = 621;
R.EVENTTYPE_SAMURAIINVASION_VENDOR = 107;
R.EVENTTYPE_TEMPSERVER_MULTIPLIER = 110;
R.EVENTTYPE_DAIMYO_SHOP = 111;
R.EVENTTYPE_PRIME_SALES_EXPANSIONS = 112;
R.EVENTTYPE_ALLIANCE_BATTLEGROUND = 113;
R.EVENTTYPE_WEBSHOP = 114;
R.EVENTTYPE_REACTIVATION_PRIVATE_PRIME_TIME_EVENT = 115;
R.EVENTTYPE_APPRENTICE_TOKEN_VENDOR = 116;
R.EVENTTYPE_FORTUNE_TELLER = 117;
R.EVENTTYPE_LOYALTY = 118;
R.EVENTTYPE_MOBILE_BROWSER_SHOP_STANDARD = 119;
R.EVENTTYPE_MOBILE_BROWSER_SHOP_SPECIAL = 120;
R.EVENTTYPE_MOBILE_BROWSER_SHOP_TEMPSERVER_STANDARD = 121;
R.EVENTTYPE_MOBILE_BROWSER_SHOP_TEMPSERVER_SPECIAL = 122;
R.EVENTTYPE_DONATION = 123;
R.EVENTTYPE_PRIME_TIME_SKIN = 124;
R.EVENTTYPE_SPECIAL_DAILY_BUNDLE = 125;
R.EVENTTYPE_DECO_GACHA = 126;
R.EVENTTYPE_CHRISTMAS_GACHA = 127;
R.EVENTTYPE_EASTER_GACHA = 128;
R.EVENTTYPE_ALLIANCE_MOBILISATION = 129;
R.EVENTTYPE_SUMMER_GACHA = 130;
R.EVENTTYPE_ANNIVERSARY_GACHA = 131;
R.EVENTTYPE_ISLAND_KINGDOM = 102;
R.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE = 103;
R.EVENTTYPE_PRIME_SALES_FUSION_RECHARGE = 104;
R.EVENTTYPE_PRIME_SALES_PREMIUM_FUSION = 105;
R.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS = 599;
R.EVENTCAMP_AREA_ID = -24;
R.PROVISIONS = 24;
R.LEAGUETYPE_EVENT_SUBTYPE_DEFAULT = 0;
R.LEAGUETYPE_EVENT_SUBTYPE_ALIEN_INVASION_ALLIANCE = 1;
R.LEAGUETYPE_EVENT_SUBTYPE_NOMAD_INVASION_ALLIANCE = 1;
R.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_INVASION = 1;
R.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_ALLIANCE = 1;
R.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_BLUE = 2;
R.LEAGUETYPE_EVENT_SUBTYPE_FACTION_INVASION_RED = 3;
R.LEAGUETYPE_EVENT_SUBTYPE_ALLIANCE_CAMP_INVASION = 16;
R.DEFAULT_REWARD_SET_ID = 1;
R.DEFAULT_REWARD_ID = 1;
R.SKIN_OFFSET = 100;
exports.EventConst = R;
R.__class = "EventConst";
var P = function () {
  function FacebookConst() {}
  FacebookConst.GIFT_COOLDOWN_$LI$ = function () {
    if (FacebookConst.GIFT_COOLDOWN == null) {
      FacebookConst.GIFT_COOLDOWN = 86400;
    }
    return FacebookConst.GIFT_COOLDOWN;
  };
  return FacebookConst;
}();
P.BULK_REQUEST_LIMIT = 150;
exports.FacebookConst = P;
P.__class = "FacebookConst";
var B = function () {
  function FactionConst() {}
  FactionConst.FACTIONS_$LI$ = function () {
    if (FactionConst.FACTIONS == null) {
      FactionConst.FACTIONS = [FactionConst.BLUE_FACTION, FactionConst.RED_FACTION];
    }
    return FactionConst.FACTIONS;
  };
  FactionConst.TOWER_COOLDOWN_$LI$ = function () {
    if (FactionConst.TOWER_COOLDOWN == null) {
      FactionConst.TOWER_COOLDOWN = 10800;
    }
    return FactionConst.TOWER_COOLDOWN;
  };
  FactionConst.VILLAGE_COOLDOWN_$LI$ = function () {
    if (FactionConst.VILLAGE_COOLDOWN == null) {
      FactionConst.VILLAGE_COOLDOWN = 86400;
    }
    return FactionConst.VILLAGE_COOLDOWN;
  };
  FactionConst.TITLE_RESET_INTERVAL_SECONDS_$LI$ = function () {
    if (FactionConst.TITLE_RESET_INTERVAL_SECONDS == null) {
      FactionConst.TITLE_RESET_INTERVAL_SECONDS = 14400;
    }
    return FactionConst.TITLE_RESET_INTERVAL_SECONDS;
  };
  FactionConst.getOppositeFactionID = function (e) {
    if (e === FactionConst.BLUE_FACTION) {
      return FactionConst.RED_FACTION;
    } else {
      return FactionConst.BLUE_FACTION;
    }
  };
  FactionConst.getMapWidth = function () {
    return $e.SECTOR_WIDTH * FactionConst.MAP_WIDTH_IN_SECTORS;
  };
  FactionConst.getMapHeight = function () {
    return $e.SECTOR_HEIGHT * FactionConst.MAP_HEIGHT_IN_SECTORS;
  };
  FactionConst.getSectorSeed = function (e, t, n) {
    return e + t * 15 + n * 31;
  };
  FactionConst.inSector = function (e, t, n) {
    var i = n[0];
    var a = n[1];
    var s = e * FactionConst.SECTOR_WIDTH_IN_CAMPS;
    var r = t * FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return s <= i && i < s + FactionConst.SECTOR_WIDTH_IN_CAMPS && r <= a && a < r + FactionConst.SECTOR_HEIGHT_IN_CAMPS;
  };
  FactionConst.upperLeftWorldXFromAbsoluteCampX = function (e) {
    var t = e / FactionConst.SECTOR_WIDTH_IN_CAMPS | 0;
    var n = e % FactionConst.SECTOR_WIDTH_IN_CAMPS;
    return t * $e.SECTOR_WIDTH + n * FactionConst.CAMP_SPOT_WIDTH;
  };
  FactionConst.upperLeftWorldYFromAbsoluteCampY = function (e) {
    var t = e / FactionConst.SECTOR_HEIGHT_IN_CAMPS | 0;
    var n = e % FactionConst.SECTOR_HEIGHT_IN_CAMPS;
    return t * $e.SECTOR_HEIGHT + n * FactionConst.CAMP_SPOT_HEIGHT;
  };
  FactionConst.getMoraleModifier = function (e) {
    if (e >= 0) {
      return 2 - 1 / (1 + Math.abs(e) / 200);
    } else {
      return 1 / (1 + Math.abs(e) / 200);
    }
  };
  FactionConst.getPeaceHeatup = function (e) {
    if (e) {
      return 300;
    } else {
      return 43200;
    }
  };
  FactionConst.getPeaceDuration = function (e) {
    if (e) {
      return 600;
    } else {
      return 216000;
    }
  };
  FactionConst.getPeaceCooldown = function (e) {
    if (e) {
      return 300;
    } else {
      return 345600;
    }
  };
  FactionConst.getPeaceC2Cost = function () {
    return 7500;
  };
  FactionConst.getMoraleBoostFromFactionStrength = function (e) {
    if (e <= 0.49) {
      return Math.round(Math.min(0.75, e * -13 + 6.5) * 100);
    } else {
      return 0;
    }
  };
  FactionConst.getCostReductionBonus = function (e) {
    if (e <= 0.49) {
      return Math.round(Math.min(0.5, e * -10 + 5) * 100) / 100;
    } else {
      return 0;
    }
  };
  FactionConst.getIndexOfFactionID = function (e) {
    for (var t = 0; t < FactionConst.FACTIONS_$LI$().length; t++) {
      if (FactionConst.FACTIONS_$LI$()[t] === e) {
        return t;
      }
    }
    return -1;
  };
  FactionConst.getNPCFactionID = function (e) {
    switch (e) {
      case L.BLUE_FACTION_KING:
        return FactionConst.BLUE_FACTION;
      case L.RED_FACTION_KING:
        return FactionConst.RED_FACTION;
      default:
        return -1;
    }
  };
  FactionConst.getNpcPID = function (e) {
    switch (e) {
      case FactionConst.BLUE_FACTION:
        return L.BLUE_FACTION_KING;
      case FactionConst.RED_FACTION:
        return L.RED_FACTION_KING;
      default:
        return -1;
    }
  };
  return FactionConst;
}();
B.KINGDOM_ID = 10;
B.MAP_WIDTH_IN_SECTORS = 200;
B.MAP_HEIGHT_IN_SECTORS = 10;
B.SECTOR_WIDTH_IN_CAMPS = 4;
B.SECTOR_HEIGHT_IN_CAMPS = 6;
B.CAMP_SPOT_WIDTH = 3;
B.CAMP_SPOT_HEIGHT = 2;
B.BLUE_FACTION = 0;
B.RED_FACTION = 1;
B.VILLAGE_POINTS = 5;
B.TOWER_POINTS = 15;
B.CAPITAL_POINTS = 30;
B.BURNING_BUILDING_MORAL = 10;
B.START_GATE_WOD = 238;
B.START_MAINTENT_WOD = 233;
B.START_WALL_WOD = 234;
B.START_TOWER_WOD = 272;
B.START_WOOD = 3000;
B.START_FOOD = 3000;
B.START_STONE = 3000;
B.TOWER_COOLDOWN_TEST = 60;
B.VILLAGE_COOLDOWN_TEST = 60;
B.BARON_ID = -16;
B.DESTROYED_OCCUPIER_PLAYER_ID = -415;
B.TOP_X = 100;
B.MAJORITY_CAP = 1.2;
B.FACTION_PROTECTION_STATUS_OFF = -1;
B.FACTION_PROTECTION_STATUS_PRETIME = 0;
B.FACTION_PROTECTION_STATUS_ACTIVE = 1;
B.FACTION_PROTECTION_STATUS_COOLDOWN = 2;
B.FACTION_ACTIVE_THRESHOLD = 250;
exports.FactionConst = B;
B.__class = "FactionConst";
var M = function () {
  function FusionConst() {}
  FusionConst.getPremiumFusionC2Cost = function (e) {
    return 2500 + (Math.floor(e * (1 / 3)) | 0) * 100;
  };
  FusionConst.getFusionEnergyCost = function (e) {
    return e * 50 + 900;
  };
  FusionConst.getBaseFusionXPFromSource = function (e) {
    return e * 10 + 10;
  };
  FusionConst.getFusionXPModifierFromSource = function (e, t) {
    if (e === t) {
      return 1;
    } else if (e < t) {
      return Math.pow(Math.exp(e - t), 0.025);
    } else {
      return FusionConst.logOfBase(100, e - t) + 1;
    }
  };
  FusionConst.logOfBase = function (e, t) {
    return Math.log(t) / Math.log(e);
  };
  FusionConst.getFusionXPFromSource = function (e, t) {
    return Math.floor(FusionConst.getBaseFusionXPFromSource(e) * FusionConst.getFusionXPModifierFromSource(e, t)) | 0;
  };
  FusionConst.getBonusFusionXPChanceFromSource = function (e, t, n) {
    if (t === n) {
      return e;
    } else {
      return Math.min(Math.floor(e * Math.exp((t - n) / 144.269)), 100) | 0;
    }
  };
  FusionConst.getBonusFusionXPChanceFromCatalyst = function (e, t) {
    if (e === t) {
      return 0;
    } else {
      return Math.max((e - t) * 4, 0);
    }
  };
  FusionConst.getBonusFusionXPChance = function (e, t, n, i, a) {
    return FusionConst.getBonusFusionXPChanceFromSource(e, t, n) + FusionConst.getBonusFusionXPChanceFromCatalyst(i, a);
  };
  FusionConst.getBonusFusionXPBoost = function (e, t, n) {
    var i = t + n;
    return Math.max(Math.round((i / 100 - 1) * e), 0);
  };
  FusionConst.getBonusFusionXP = function (e, t) {
    return (Math.floor(e * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXP(t);
  };
  FusionConst.getBonusFusionXPWithForgeMax = function (e, t, n) {
    return (Math.floor(t * 2.5 + 5) | 0) + FusionConst.getForgeBonusFusionXPWithMax(e, t, n);
  };
  FusionConst.getForgeBonusFusionXP = function (e) {
    return e * 5 + 9;
  };
  FusionConst.getMaxAllowedForgeBonusFusionXP = function (e, t) {
    return (FusionConst.getBaseFusionXPFromSource(e) + (FusionConst.getStartXPFromLevel(t + 1) - FusionConst.getStartXPFromLevel(t) | 0)) * 100;
  };
  FusionConst.getForgeBonusFusionXPWithMax = function (e, t, n) {
    var i = FusionConst.getForgeBonusFusionXP(n);
    var a = FusionConst.getMaxAllowedForgeBonusFusionXP(e, t);
    return Math.min(i, a);
  };
  FusionConst.getFusionEnergyCap = function (e) {
    return e * 100 + 2300;
  };
  FusionConst.getFusionEnergyRechargeAmount = function (e) {
    return e * 25 + 575;
  };
  FusionConst.getFusionEnergyRechargeFromMinuteSkip = function (e, t) {
    return Math.round(Math.ceil(e * 3600 / t));
  };
  FusionConst.getFusionEnergyRechargeFromC2 = function (e) {
    return e;
  };
  FusionConst.getFusionEnergyRechargeFromC2Cost = function (e, t, n) {
    return Math.ceil(e * Math.pow(t, n)) | 0;
  };
  FusionConst.getForgeLevelUpDustCost = function (e) {
    return e * 10 + 10;
  };
  FusionConst.getDecorationFusionFusionCurrencyCost = function (e) {
    return Math.floor(1 / 3 * e + 1) | 0;
  };
  FusionConst.getDecorationPointsFromFusionLevel = function (e) {
    return e * 5 + 100 | 0;
  };
  FusionConst.getTotalBonusFusionXP = function (e, t) {
    return e + t;
  };
  FusionConst.getRechargeTimeForOneFusionEnergyInSeconds = function (e, t) {
    return e / FusionConst.getFusionEnergyRechargeAmount(t) | 0;
  };
  FusionConst.getLevelFromXP = function (e) {
    return Math.floor(Math.sqrt(12.25 + e * 0.4) - 2.5) | 0;
  };
  FusionConst.getStartXPFromLevel = function (e) {
    return Math.round(Math.floor(Math.pow(e - 1, 2) * 2.5 + (e - 1) * 17.5));
  };
  FusionConst.getFusionCurrencyCost = function (e, t) {
    if (e === FusionConst.DECORATION_FORGE_ID) {
      return FusionConst.getDecorationFusionFusionCurrencyCost(t);
    } else {
      return 0;
    }
  };
  FusionConst.getDecorationPointsFromFusionXP = function (e) {
    return FusionConst.getDecorationPointsFromFusionLevel(FusionConst.getLevelFromXP(e));
  };
  FusionConst.getXPRangeBetweenLevels = function (e, t) {
    return FusionConst.getStartXPFromLevel(t) - FusionConst.getStartXPFromLevel(e);
  };
  FusionConst.getNeededXPToNextLevel = function (e) {
    var t = FusionConst.getLevelFromXP(e);
    return FusionConst.getStartXPFromLevel(t + 1) - e;
  };
  FusionConst.getXPProgressInLevel = function (e) {
    var t = FusionConst.getLevelFromXP(e);
    return e - FusionConst.getStartXPFromLevel(t);
  };
  return FusionConst;
}();
M.DECORATION_FORGE_ID = 1;
exports.FusionConst = M;
M.__class = "FusionConst";
var F = function () {
  return function GameConst() {};
}();
F.GAME_ID = 12;
F.IS_EMPIRE = true;
F.IS_E4K = false;
F.GAME_NAME_SHORT = "EP";
F.ALLIANCE_FORGE_ACTIVATED = true;
F.JUDGMENT_CITIZEN_ACTIVATED = true;
F.LOOKING_FOR_MEMBERS_ACTIVATED = true;
F.MAIN_QUESTS_ACTIVATED = true;
F.PROMO_MAILS_ACTIVATED = true;
F.WORLD_LOOP_ACTIVATED = true;
F.ALLI_FORUM_ACTIVATED = true;
F.COMEBACK_BONUS_ACTIVATED = true;
F.EXPANSION_TREASURE_CHEST = true;
F.EMPTY_DEFAULT_EMBLEM = true;
F.RESOURCE_CARTS = true;
F.ALLIANCE_TRIBUTE = true;
F.LABORATORY_ACTIVATED = true;
F.SEND_ALLIANCE_WAR_MESSAGE = true;
F.WEB_RESOURCE_PACKAGE = true;
F.WEB_USE_ROUNDING = true;
F.WEB_AUTO_RETREAT = true;
F.KINGDOM_RESOURCES_IMMEDIATELY_LOOTABLE = false;
F.WEB_REGISTER = true;
F.WEB_COLOSSUS = true;
F.WEB_WISHING_WELL = true;
F.WEB_TUTORIAL = true;
F.WEB_FACTION = true;
F.WEB_ARCHIVE_MESSAGE = true;
F.WEB_PARAGON = true;
F.WEB_SEARCH_MAP = true;
F.WEB_ALIEN = true;
F.WEB_STORM_ISLAND = true;
F.WEB_GEMS = true;
F.REG_MGR_USE_EMPIRE_ERROR_CODES = true;
F.LP_LOGINREWARD = true;
F.CORE_LOGIN = false;
F.PRIVATE_OFFER_EMPIRE_STILE = true;
F.LEVEL_ZERO_EMBLEM = true;
F.SET_PLAYER_PW_HASH_IN_FACADE = false;
F.VERIFY_PLAYER_MAIL_EVENT = true;
F.SIMPLE_RANDOM = true;
F.WEB_DEFAULT_NETWORK = true;
F.BUGGY_ADDITIONAL_ICE_KINGDOM_CASTLES = true;
F.ALIEN_INVASION_USE_RANDOM_TOOL_AMOUNTS = false;
F.ALIEN_HERO_EFFECTS = true;
F.WEB_MOVEMENT_VISIBILITY = true;
F.WEB_NPC_ATTACKS = true;
F.PRIME_SALE_FILL_ALL_STORAGES = false;
F.SLIM_BASIC_DATA = false;
F.UNLOCK_EVENT_ERROR_RESPONSE = false;
F.SEND_OUT_ACHIEVEMENT_LIST = true;
F.QUEST_CAN_BE_UNREAD = false;
F.ALLIANCE_MINI_CHAT = false;
F.SPYLOG_TOOLS_AMOUNT = false;
F.SEND_ALLIANCE_WAR_ENEMY_SABOTAGE_MESSAGE = false;
F.ALLI_AUTOWAR_ON_CHANGE_NOTIFY_ALL = false;
F.DETAIL_CASTLE_LIST_WITH_PACKAGE_LIST_OVERVIEW = false;
F.E4K_TUTORIAL_AB = false;
F.INVALIDATE_USER_KINGDOM = false;
F.SEND_AQUA_RANK_IN_ALLIANCE_INFO = false;
F.SEND_FULL_GBC = false;
F.DISTINGUISH_SHADOW_ATTACKS = true;
F.FACEBOOK_USE_MAPPING_PROVIDER = false;
F.FACEBOOK_FRIENDINVITE = false;
F.SEND_DAMAGE_AND_RUBBLE = false;
F.REGISTRATION_EMAIL_WITH_WEBSITE_ID_ENABLED = true;
F.PING_PONG = false;
F.MOBILE_CORE_EVENTSTUFF = false;
F.FREE_PLAYER_RENAME = false;
F.PUSH_NOTIFICATIONS_ACTIVATED = false;
F.MOBILE_LOGIN_ADDITIONAL_DATA = false;
F.FACEBOOK_EMPIRE_STYLE = true;
F.WEB_LTPE = true;
F.RATING_EVENT_ENABLED = false;
F.ANNOUNCEMENT_ENABLED = false;
F.EXPIRED_EQUIPMENT_MESSAGE_ENABLED = true;
F.HAS_LOGIN_TOKEN = true;
F.GAME_SHORT_NAME = "Empire";
F.ITEM_XML_NAME = "items.xml";
F.GAME_TRACKING_PREFIX = "empire_";
F.DEFAULT_URL = "empire.goodgamestudios.com";
F.AWS_PROJECT_NAME = "ep";
exports.GameConst = F;
F.__class = "GameConst";
var U = function () {
  function GemConst() {}
  GemConst.getTotalStorageCapacity = function (e) {
    if (e) {
      return GemConst.MAX_GEM_STORAGE;
    } else {
      return GemConst.NORMAL_GEM_STORAGE;
    }
  };
  return GemConst;
}();
U.MAX_GEM_LEVEL = 13;
U.MIN_GEM_LEVEL = 0;
U.MIN_PLAYER_LEVEL_FOR_GEM_DROP = 25;
U.NUM_GEMS_NEEDED_FOR_UPGRADE = 6;
U.MAX_GEM_STORAGE = 500;
U.NORMAL_GEM_STORAGE = 480;
exports.GemConst = U;
U.__class = "GemConst";
var G = function () {
  function GeneralConst() {}
  GeneralConst.getMaxLevelForStarTier = function (e) {
    return Math.min(100, (e + 1) * 10);
  };
  GeneralConst.calculateXPGainForAttackingGeneral = function (e, t, n, i) {
    if (e > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var a = GeneralConst.BASE_XP_ATTACK;
    if (e > 2) {
      a = Math.max(10, GeneralConst.BASE_XP_ATTACK - GeneralConst.BASE_XP_ATTACK * e / 15);
    }
    var s = e === 1 ? GeneralConst.FIRST_ATTACK_BONUS_XP : 0;
    var r = GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral(i, e, t, n);
    return Math.round(a + s + r);
  };
  GeneralConst.calculateUnitsKilledBonusXPForAttackingGeneral = function (e, t, n, i) {
    if (e) {
      return 0;
    } else {
      a = t > 2 ? Math.max(10, Math.round(GeneralConst.UNITS_KILLED_XP_CAP - GeneralConst.UNITS_KILLED_XP_CAP * t / 15)) : GeneralConst.UNITS_KILLED_XP_CAP;
      s = n < 45 ? (GeneralConst.log15(i * Math.max(5, 35 - n) / n + 60 / n) - 1) * 200 : (GeneralConst.log15(i * Math.pow(n, 0.75) / (n * 5)) - 1) * 200;
      return Math.max(0, Math.min(a, s));
    }
    var a;
    var s;
  };
  GeneralConst.log15 = function (e) {
    return Math.log(e) / Math.log(15);
  };
  GeneralConst.calculateXPGainForDefendingGeneral = function (e) {
    if (e > GeneralConst.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN) {
      return 0;
    }
    var t = GeneralConst.BASE_XP_DEFENSE;
    if (e > 2) {
      t = Math.max(10, GeneralConst.BASE_XP_DEFENSE - GeneralConst.BASE_XP_DEFENSE * e / 15);
    }
    return Math.round(t);
  };
  return GeneralConst;
}();
G.SKILL_RESET_C2_COST = 2500;
G.MAXIMUM_DAILY_ATTACKS_FOR_XP_GAIN = 20;
G.BASE_XP_ATTACK = 100;
G.BASE_XP_DEFENSE = 100;
G.FIRST_ATTACK_BONUS_XP = 500;
G.UNITS_KILLED_XP_CAP = 500;
G.GENERALS_STARTER_QUEST_SERIES_ID = 10000;
G.GENERAL_HORATIO_ID = 104;
G.NPC_GENERAL_ID = 106;
exports.GeneralConst = G;
G.__class = "GeneralConst";
var k = function () {
  return function GiftConst() {};
}();
k.DEFAULT_SKIN = 0;
k.CHRISTMAS_SKIN = 1;
exports.GiftConst = k;
k.__class = "GiftConst";
var w = function () {
  return function GlobalPrimeTimeConst() {};
}();
w.MBS_PERCENTAGE_BONUS = 0;
exports.GlobalPrimeTimeConst = w;
w.__class = "GlobalPrimeTimeConst";
var x = function () {
  return function GlobalServerConst() {};
}();
x.NORMAL_SERVER = 1;
x.TEMP_SERVER = 2;
x.ALLIANCE_BATTLE_GROUND_SERVER = 3;
exports.GlobalServerConst = x;
x.__class = "GlobalServerConst";
var W = function () {
  return function GraphiteConst() {};
}();
W.DEFAULT_GRAPHITE_HOST_URL = "graphite.ggs-game.com";
W.DEFAULT_GRAPHITE_HOST_PORT = 2003;
exports.GraphiteConst = W;
W.__class = "GraphiteConst";
var H = function () {
  function HighscoreBonusConst() {}
  HighscoreBonusConst.calcHighscoreBonusForC1 = function (e, t, n, i, a) {
    var s = HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus(e, t, n, i);
    var r = HighscoreBonusConst.calcLevelDependentC1HighscoreBonus(a);
    return Math.max(s, r);
  };
  HighscoreBonusConst.calcHighscoreBonusForUnits = function (e, t, n, i) {
    return Math.round(Math.max(i, (1 - (n - t + 1) / 100 + 0.01) * e)) | 0;
  };
  HighscoreBonusConst.calcHighscoreBonusForTools = function (e, t, n) {
    return Math.max(e, Math.floor((t - n) * 0.5) | 0);
  };
  HighscoreBonusConst.calcLevelIndependentC1HighscoreBonus = function (e, t, n, i) {
    return Math.max(i, e - (n - t) * 10);
  };
  HighscoreBonusConst.calcLevelDependentC1HighscoreBonus = function (e) {
    return (Math.round(Math.pow(e, 1.1)) | 0) * 10;
  };
  return HighscoreBonusConst;
}();
exports.HighscoreBonusConst = H;
H.__class = "HighscoreBonusConst";
var V = function () {
  function HighscoreConst() {}
  HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.PERSISTENT_LEAGUE_NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.SEASON_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.DAIMYO_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN_$LI$ = function () {
    if (HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN == null) {
      HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN = HighscoreConst.NUMBER_OF_ENTRIES_SHOWN;
    }
    return HighscoreConst.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN;
  };
  HighscoreConst.POINTS_CAPITALS_$LI$ = function () {
    if (HighscoreConst.POINTS_CAPITALS == null) {
      HighscoreConst.POINTS_CAPITALS = [1500, 1400, 1250, 1750];
    }
    return HighscoreConst.POINTS_CAPITALS;
  };
  HighscoreConst.TITLE_COOLDOWN_$LI$ = function () {
    if (HighscoreConst.TITLE_COOLDOWN == null) {
      HighscoreConst.TITLE_COOLDOWN = 259200;
    }
    return HighscoreConst.TITLE_COOLDOWN;
  };
  HighscoreConst.TITLE_COOLDOWN_TEST_$LI$ = function () {
    if (HighscoreConst.TITLE_COOLDOWN_TEST == null) {
      HighscoreConst.TITLE_COOLDOWN_TEST = 300;
    }
    return HighscoreConst.TITLE_COOLDOWN_TEST;
  };
  HighscoreConst.LEAGUED_HIGHSCORES_$LI$ = function () {
    if (HighscoreConst.LEAGUED_HIGHSCORES == null) {
      HighscoreConst.LEAGUED_HIGHSCORES = [HighscoreConst.PLAYER_HONOR, HighscoreConst.PLAYER_MIGHT_POINTS, HighscoreConst.PLAYER_ACHIEVEMENT_POINTS, HighscoreConst.SAMURAI_PLAYER, HighscoreConst.NOMADINVASION, HighscoreConst.ALLIANCE_NOMADINVASION_PLAYER, HighscoreConst.ALLIANCE_TOURNAMENT_FAME, HighscoreConst.FACTION_TOURNAMENT, HighscoreConst.POINT_EVENT, HighscoreConst.BEGGING_KNIGHTS, HighscoreConst.ALIEN_INVASION, HighscoreConst.ALLIANCE_ALIEN_INVASION_PLAYER, HighscoreConst.SAMURAI_PLAYER, HighscoreConst.LONG_TERM_POINT_EVENT, HighscoreConst.FACTION_INVASION_PLAYER_BLUE, HighscoreConst.FACTION_INVASION_PLAYER_RED];
    }
    return HighscoreConst.LEAGUED_HIGHSCORES;
  };
  HighscoreConst.MIN_XP_FOR_HIGHSCORE_$LI$ = function () {
    if (HighscoreConst.MIN_XP_FOR_HIGHSCORE == null) {
      HighscoreConst.MIN_XP_FOR_HIGHSCORE = se.getXPFromLevel(se.MIN_LEVEL_FOR_MAP);
    }
    return HighscoreConst.MIN_XP_FOR_HIGHSCORE;
  };
  HighscoreConst.NO_OFFSET_$LI$ = function () {
    if (HighscoreConst.NO_OFFSET == null) {
      HighscoreConst.NO_OFFSET = 0;
    }
    return HighscoreConst.NO_OFFSET;
  };
  HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER_$LI$ = function () {
    if (HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER == null) {
      HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER = [HighscoreConst.TEMPSERVER_PREVIOUS_RUN_PLAYER, HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER, HighscoreConst.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE];
    }
    return HighscoreConst.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER;
  };
  return HighscoreConst;
}();
V.SEPARATOR = ",";
V.MY_RANK = -1;
V.SEARCH_FOR_OWN_RANK = "-1";
V.PLAYER_ACHIEVEMENT_POINTS = 1;
V.PLAYER_WEEKLY_LOOT = 2;
V.PLAYER_HONOR = 5;
V.PLAYER_MIGHT_POINTS = 6;
V.PLAYER_LEGEND = 7;
V.ALLIANCE_HONOR = 10;
V.ALLIANCE_MIGHT_POINTS = 11;
V.ALLIANCE_LANDMARKS = 12;
V.ALLIANCE_AQUA_POINTS = 13;
V.TOURNAMENT_FAME = 20;
V.ALLIANCE_TOURNAMENT_FAME = 21;
V.FACTION_TOURNAMENT = 30;
V.TOURNAMENT_START_OFFSET = 4;
V.TOURNAMENT_TOP = 6;
V.NUMBER_OF_ENTRIES_SHOWN = 10;
V.NUMBER_OF_ENTRIES_SHOWN_FOR_COLOSS = 50;
V.PERSISTENT_LEAGUE_NUMBER_OF_ENTRIES_SHOWN = 8;
V.NUMBER_OF_ENTRIES_SHOWN_FOR_FACTION = 5;
V.TOURNAMENT_NUM_ENTRIES = 8;
V.AQUAPOINTS_NUM_ENTRIES = 7;
V.TEMP_SERVER_HIGHSCORE_NUMBER_OF_ENTRIES_SHOWN = 7;
V.ALLIANCE_BATTLE_GROUND_HIGHSCORE_NUMBER_OF_ENTRIES_SHOWN = 9;
V.DONATION_EVENT_NUMBER_OF_ENTRIES = 10;
V.PLAYER_BUILDINGS = 6;
V.ALLIANCE_BUILDINGS = 11;
V.POINTS_METROPOL = 750;
V.POINTS_KINGS_TOWER = 25;
V.POINTS_MONUMENTS = 25;
V.POINTS_LABORATORY = 25;
V.POINT_EVENT = 40;
V.FACTION_INVASION_INITIAL_POINTS = 150;
V.BEGGING_KNIGHTS = 41;
V.ALIEN_INVASION = 42;
V.LUCKY_WHEEL = 43;
V.ALLIANCE_ALIEN_INVASION_PLAYER = 44;
V.ALLIANCE_ALIEN_INVASION_ALLIANCE = 45;
V.ALLIANCE_NOMADINVASION_PLAYER = 46;
V.ALLIANCE_NOMADINVASION_ALLIANCE = 47;
V.NOMADINVASION = 48;
V.ALLIANCE_SAMURAI_ALIEN_INVASION_PLAYER = 500;
V.ALLIANCE_SAMURAI_ALIEN_INVASION_ALLIANCE = 501;
V.COLOSSUS = 50;
V.SAMURAI_PLAYER = 51;
V.SAMURAI_ALLIANCE = 52;
V.LONG_TERM_POINT_EVENT = 53;
V.FACTION_INVASION_PLAYER_BLUE = 54;
V.FACTION_INVASION_PLAYER_RED = 55;
V.FACTION_INVASION_ALLIANCE = 56;
V.ALLIANCE_RED_ALIEN_INVASION_PLAYER = 58;
V.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE = 59;
V.TEMP_SERVER_DAILY_MIGHT_POINTS_BUILDINGS = 61;
V.TEMP_SERVER_GLOBAL = 62;
V.KINGDOMS_LEAGUE_SEASON = 63;
V.KINGDOMS_LEAGUE_SEASON_EVENT = 64;
V.TEMP_SERVER_DAILY_COLLECTOR_POINTS = 65;
V.TEMP_SERVER_DAILY_RANK_SWAP = 66;
V.ALLIANCE_KINGDOMS_LEAGUE_SEASON = 67;
V.ALLIANCE_KINGDOMS_LEAGUE_SEASON_EVENT = 68;
V.ALLIANCE_DAIMYO = 69;
V.ALLIANCE_BATTLE_GROUND_ALLIANCE_COLLECTOR = 70;
V.ALLIANCE_BATTLE_GROUND_PLAYER_COLLECTOR = 71;
V.LUCKY_WHEEL_SALE_DAYS = 72;
V.ALLIANCE_BATTLE_GROUND_ALLIANCE_TOWER = 74;
V.ALLIANCE_BATTLE_GROUND_PLAYER_TOWER = 75;
V.TEMPSERVER_PREVIOUS_RUN_PLAYER = 76;
V.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_ALLIANCE = 77;
V.ALLIANCE_BATTLE_GROUND_PREVIOUS_RUN_PLAYER = 78;
V.DONATION_EVENT = 79;
V.DECO_GACHA_EVENT = 80;
V.CHRISTMAS_GACHA_EVENT = 81;
V.EASTER_GACHA_EVENT = 82;
V.SUMMER_GACHA_EVENT = 83;
V.ALLIANCE_MOBILISATION_EVENT = 84;
V.ANNIVERSARY_GACHA_EVENT = 85;
V.INVALID_HIGHSCORE_LIST_ID = -1;
V.INVALID_RANK = 0;
V.NO_ENTRIES = 0;
V.NO_SCORE = 0;
V.INVALID_ENTRY_ID = -1;
V.RANK_ONE = 1;
V.USE_LOCAL_HIGHSCORE = true;
V.DO_NOT_USE_LOCAL_HIGHSCORE = false;
V.USE_GLOBAL_HIGHSCORE = true;
V.DO_NOT_USE_GLOBAL_HIGHSCORE = false;
V.INITIAL_HIGHSCORE_SIZE_ON_LIVE = 131072;
V.INITIAL_HIGHSCORE_SIZE_ON_TEST = 4096;
exports.HighscoreConst = V;
V.__class = "HighscoreConst";
var j = function () {
  return function InstallerPackageConst() {};
}();
j.UNKNOWN = -1;
j.PRE_INSTALLED = 0;
j.SAMSUNG = 1;
j.ITUNES = 2;
j.GOOGLEPLAY = 3;
j.AMAZON = 4;
exports.InstallerPackageConst = j;
j.__class = "InstallerPackageConst";
var q = function () {
  function JudgementCitizenCalculation() {}
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND = [[-1, 1.925], [2.2, 1.925], [-1, 2.2], [-1, -1], [2.2, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_COND = [[-1, 0.22], [0.4, 0.22], [-1, 0.3], [-1, -1], [0.15, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_FORMULA_1_COND == null) {
      JudgementCitizenCalculation.OFFSET_FORMULA_1_COND = [[-1, 0], [0, 0], [-1, 0], [-1, -1], [-15, -1]];
    }
    return JudgementCitizenCalculation.OFFSET_FORMULA_1_COND;
  };
  JudgementCitizenCalculation.MIN_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MIN_VALUE == null) {
      JudgementCitizenCalculation.MIN_VALUE = [[-1, 5], [15, 5], [-1, 10], [-1, -1], [5, -1]];
    }
    return JudgementCitizenCalculation.MIN_VALUE;
  };
  JudgementCitizenCalculation.FACTORS_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTORS_REWARD == null) {
      JudgementCitizenCalculation.FACTORS_REWARD = [[[-1, -1, -1, -1], [5, -1.6, 0.12, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.121, -0.0013]], [[-1, -1, -1, -1], [5, -1.6, 0.123, -0.0013]], [[-1, -1, -1, -1], [-1, -1, -1, -1]], [[-1, -1, -1, -1], [5, -1.58, 0.12, -0.0013]]];
    }
    return JudgementCitizenCalculation.FACTORS_REWARD;
  };
  JudgementCitizenCalculation.MAX_VALUE_$LI$ = function () {
    if (JudgementCitizenCalculation.MAX_VALUE == null) {
      JudgementCitizenCalculation.MAX_VALUE = [[-1, 3400], [-1, 3800], [-1, 4200], [0, 0], [-1, 3500]];
    }
    return JudgementCitizenCalculation.MAX_VALUE;
  };
  JudgementCitizenCalculation.OFFSET_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.OFFSET_REWARD == null) {
      JudgementCitizenCalculation.OFFSET_REWARD = [[-1, 10], [-1, 10], [-1, 10], [-1, -1], [-1, 10]];
    }
    return JudgementCitizenCalculation.OFFSET_REWARD;
  };
  JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [2.15, 2.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$ = function () {
    if (JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD == null) {
      JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD = [[-1, -1], [-1, -1], [-1, -1], [0.5, 0.3], [-1, -1]];
    }
    return JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD;
  };
  JudgementCitizenCalculation.calcCond = function (e, t, n) {
    return Math.max(JudgementCitizenCalculation.MIN_VALUE_$LI$()[t][n], Math.round((JudgementCitizenCalculation.FACTOR_FORMULA_1_COND_$LI$()[t][n] * Math.pow(e, JudgementCitizenCalculation.EXPONENT_FORMULA_1_COND_$LI$()[t][n]) + JudgementCitizenCalculation.OFFSET_FORMULA_1_COND_$LI$()[t][n]) / 5) * 5) | 0;
  };
  JudgementCitizenCalculation.rewardC1 = function (e, t, n) {
    return Math.min(JudgementCitizenCalculation.MAX_VALUE_$LI$()[t][n], Math.ceil((JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[t][n][3] * Math.pow(e, 4) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[t][n][2] * Math.pow(e, 3) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[t][n][1] * Math.pow(e, 2) + JudgementCitizenCalculation.FACTORS_REWARD_$LI$()[t][n][0] * e + JudgementCitizenCalculation.OFFSET_REWARD_$LI$()[t][n]) / 10) * 10) | 0;
  };
  JudgementCitizenCalculation.rewardWoodStone = function (e, t, n) {
    return Math.round(JudgementCitizenCalculation.FACTOR_FORMULA_1_REWARD_$LI$()[t][n] * Math.pow(e, JudgementCitizenCalculation.EXPONENT_FORMULA_1_REWARD_$LI$()[t][n]) / 5) * 5 | 0;
  };
  JudgementCitizenCalculation.calculateWaitingTimeUntilNextJudgement = function (e) {
    return (Math.round((e * 0.3 * Math.pow(e, 2.6) + 50) / 10) | 0) * 10;
  };
  return JudgementCitizenCalculation;
}();
exports.JudgementCitizenCalculation = q;
q.__class = "JudgementCitizenCalculation";
var K = function () {
  function LawAndOrderConst() {}
  LawAndOrderConst.calculateLawAndOrder = function (e, t, n) {
    return e - (n + t);
  };
  LawAndOrderConst.calculateLawAndOrderWithTitle = function (e, t, n, i) {
    return Math.round((e - (n + t)) * (1 + i / 100));
  };
  LawAndOrderConst.calculateLawAndOrderFactor = function (e, t, n) {
    return LawAndOrderConst.calculateLawAndOrderFactorWithEffect(e, t, n, D.DEFAULT_MODIFIER);
  };
  LawAndOrderConst.calculateLawAndOrderFactorWithEffect = function (e, t, n, i) {
    var a = LawAndOrderConst.calculateLawAndOrder(e, t, n);
    if (a < 0) {
      return 1 / (Math.sqrt(Math.abs(a)) / 50 + 1) * i;
    } else {
      return (Math.sqrt(a) / 50 + 1) * i;
    }
  };
  return LawAndOrderConst;
}();
exports.LawAndOrderConst = K;
K.__class = "LawAndOrderConst";
var Y = function () {
  function LegendSkillConst() {}
  LegendSkillConst.RESET_COOLDOWN_IN_SECONDS_$LI$ = function () {
    if (LegendSkillConst.RESET_COOLDOWN_IN_SECONDS == null) {
      LegendSkillConst.RESET_COOLDOWN_IN_SECONDS = 1296000;
    }
    return LegendSkillConst.RESET_COOLDOWN_IN_SECONDS;
  };
  LegendSkillConst.TIER_UNLOCK_POINTS_$LI$ = function () {
    if (LegendSkillConst.TIER_UNLOCK_POINTS == null) {
      LegendSkillConst.TIER_UNLOCK_POINTS = [0, LegendSkillConst.TIER_1_POINTS_TO_TIER_2, LegendSkillConst.TIER_2_POINTS_TO_TIER_3, LegendSkillConst.TIER_3_POINTS_TO_TIER_4, LegendSkillConst.TIER_4_POINTS_TO_TIER_5, LegendSkillConst.TIER_5_POINTS_TO_TIER_6];
    }
    return LegendSkillConst.TIER_UNLOCK_POINTS;
  };
  LegendSkillConst.isTierUnlocked = function (e, t) {
    return e >= LegendSkillConst.MIN_TIER_ID && e <= LegendSkillConst.MAX_TIER_ID && t >= LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[e - 1];
  };
  LegendSkillConst.pointsNeededForTier = function (e) {
    if (e >= LegendSkillConst.MIN_TIER_ID && e <= LegendSkillConst.MAX_TIER_ID) {
      return LegendSkillConst.TIER_UNLOCK_POINTS_$LI$()[e - 1];
    } else {
      return -1;
    }
  };
  LegendSkillConst.resetSkipCostC2 = function (e, t) {
    return (LegendSkillConst.BASE_COST * Math.pow(t, LegendSkillConst.EXPONENT) | 0) + (e + LegendSkillConst.BASE_SKILL_POINTS) * LegendSkillConst.POINTS_FACTOR;
  };
  return LegendSkillConst;
}();
Y.TIER_1_POINTS_TO_TIER_2 = 40;
Y.TIER_2_POINTS_TO_TIER_3 = 80;
Y.TIER_3_POINTS_TO_TIER_4 = 90;
Y.TIER_4_POINTS_TO_TIER_5 = 90;
Y.TIER_5_POINTS_TO_TIER_6 = 90;
Y.MIN_TIER_ID = 1;
Y.MAX_TIER_ID = 6;
Y.BASE_COST = 20;
Y.EXPONENT = 5;
Y.BASE_SKILL_POINTS = 50;
Y.POINTS_FACTOR = 30;
exports.LegendSkillConst = Y;
Y.__class = "LegendSkillConst";
var z = function () {
  function LongTermPointEventConst() {}
  LongTermPointEventConst.SKINS_$LI$ = function () {
    if (LongTermPointEventConst.SKINS == null) {
      LongTermPointEventConst.SKINS = [LongTermPointEventConst.NO_SKIN, LongTermPointEventConst.HALLOWEEN_SKIN, LongTermPointEventConst.WINTER_SKIN, LongTermPointEventConst.SPRING_SKIN, LongTermPointEventConst.REUSABLE_SKIN, LongTermPointEventConst.NEW_KING_SKIN, LongTermPointEventConst.ST_PATRICKS_DAY_SKIN, LongTermPointEventConst.ANNIVERSARY_SKIN, LongTermPointEventConst.OKTOBERFEST_SKIN, LongTermPointEventConst.CHRISTMAS_SKIN, LongTermPointEventConst.MAYA_SKIN, LongTermPointEventConst.PIRATES_SKIN, LongTermPointEventConst.DRAGONRIDERS_SKIN];
    }
    return LongTermPointEventConst.SKINS;
  };
  return LongTermPointEventConst;
}();
z.NO_SKIN = -1;
z.HARD_MODE_SKIN = -2;
z.HALLOWEEN_SKIN = 2;
z.WINTER_SKIN = 3;
z.SPRING_SKIN = 4;
z.REUSABLE_SKIN = 5;
z.NEW_KING_SKIN = 6;
z.ST_PATRICKS_DAY_SKIN = 7;
z.ANNIVERSARY_SKIN = 8;
z.OKTOBERFEST_SKIN = 9;
z.CHRISTMAS_SKIN = 10;
z.MAYA_SKIN = 11;
z.PIRATES_SKIN = 12;
z.DRAGONRIDERS_SKIN = 13;
exports.LongTermPointEventConst = z;
z.__class = "LongTermPointEventConst";
var Z = function () {
  function LordConst() {}
  LordConst.isRealLord = function (e) {
    return e >= LordConst.FIRST_REAL_ID;
  };
  return LordConst;
}();
Z.NO_LORD = -1;
Z.FIRST_REAL_ID = 0;
Z.BARON_ID = -300;
Z.AUTOSCALING_ALIEN_BARON_ID = -220;
Z.AUTOSCALING_BLOOD_CROW_BARON_ID = -219;
Z.AUTOSCALING_NOMAD_AND_KHAN_BARON_ID = -217;
Z.AUTOSCALING_SAMURAI_AND_DAIMYO_BARON_ID = -218;
Z.AUTOSCALING_BATTLEGROUND_RESOURCE_TOWER_BARON_ID = -1;
Z.AUTOSCALING_KHAN_TAUNT_COMMANDER_ID = -215;
Z.AUTOSCALING_WOLF_KING_TAUNT_COMMANDER_ID = -213;
Z.AUTOSCALING_DAIMIO_COMMANDER_ID = -216;
exports.LordConst = Z;
Z.__class = "LordConst";
var X = function () {
  return function LostAndFoundConst() {};
}();
X.INVENTORY_SIZE = 30;
exports.LostAndFoundConst = X;
X.__class = "LostAndFoundConst";
var Q = function () {
  function LuckyWheelConst() {}
  LuckyWheelConst.calculateC2CostForIncreasingPrizeClass = function (e, t) {
    if (e <= 0 || t <= 0) {
      return 0;
    }
    var n = e * t;
    return (Math.ceil(n / 100) | 0) * 100;
  };
  return LuckyWheelConst;
}();
Q.SPIN_TICKET_COST_NORMAL = 30;
Q.SPIN_TICKET_COST_PROMODE = 300;
Q.SPIN_TICKET_COST_SALE_DAYS = 1;
Q.JACKPOT_C2_COST_NORMAL = 2900;
Q.JACKPOT_C2_COST_PROMODE = 29000;
Q.CATEGORY_COUNT_NORMAL = 8;
Q.CATEGORY_JACKPOT = 0;
Q.MIN_EXCLUSIVE_POINT_VALUE = 1;
Q.WINNING_CLASS_PROGRESS_NORMAL = 1;
Q.WINNING_CLASS_PROGRESS_PROMODE = 10;
exports.LuckyWheelConst = Q;
Q.__class = "LuckyWheelConst";
var $ = function () {
  function MarketConst() {}
  MarketConst.getMarketTravelCostC1 = function (e, t) {
    return Math.ceil(t * 5 * Math.log(e + 1) / Math.log(2.3) * 0.6) | 0;
  };
  MarketConst.getHorseCostC1 = function (e, t, n) {
    return n * (Math.ceil(t * 5 * Math.log(e + 1) / Math.log(2.3) * 0.2) | 0);
  };
  MarketConst.getHorseCostC2 = function (e, t, n) {
    var i = (Math.sqrt(e + 60) * -25 * Math.pow(1.5, Math.pow(e + 60, 2) * -0.0002) + 145) * 1.5 * (1 + t / 83) | 0;
    return Math.round(i * n);
  };
  return MarketConst;
}();
$.MARKET_TRAVEL_SPEED = 50;
$.RESOURCES_PER_CARRIAGE = 100;
$.MAX_MARKET_MOVEMENTS_TO_TARGET = 15;
exports.MarketConst = $;
$.__class = "MarketConst";
var J = function () {
  function MercenaryConst() {}
  MercenaryConst.getSkipC2Cost = function (e) {
    return Math.ceil(e * 1 / 60 * MercenaryConst.INSTANT_COST_C2_PER_MINUTE) | 0;
  };
  return MercenaryConst;
}();
J.REFRESH_MISSION_COST = 240;
J.REFRESH_INTERVAL_HOURS = 6;
J.MAX_MISSION_COUNT = 6;
J.REWARD_AMOUNT = 3;
J.INSTANT_COST_C2_PER_MINUTE = 5;
J.REFRESH_FIRST_HOUR_OF_THE_DAY = 4;
exports.MercenaryConst = J;
J.__class = "MercenaryConst";
var ee = function () {
  function MessageConst() {}
  MessageConst.getSubtypeForBattleAndSpies = function (e, t) {
    if (e) {
      if (t) {
        return MessageConst.SUBTYPE_ATTACKER_SUCCESS;
      } else {
        return MessageConst.SUBTYPE_DEFENDER_FAILED;
      }
    } else if (t) {
      return MessageConst.SUBTYPE_ATTACKER_FAILED;
    } else {
      return MessageConst.SUBTYPE_DEFENDER_SUCCESS;
    }
  };
  return MessageConst;
}();
ee.MAX_MAILBOX_SIZE = 50;
ee.MESSAGES_PER_PAGE = 8;
ee.MAX_LENGTH_SUBJECT = 20;
ee.MAX_LENGTH_RECEIVER = 15;
ee.MIN_LENGTH_TEXT = 3;
ee.MAX_LENGTH_TEXT = 1300;
ee.MAX_IGNORE_COUNT = 50;
ee.MAX_MAILBOX_ARCHIVE_SIZE = 20;
ee.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS = 25;
ee.MAX_MAILBOX_BATTLE_AND_SPY_REPORTS_FORWARDED = 50;
ee.MAX_MAILBOX_OUTBOX_SIZE = 10;
ee.MAX_MAILBOX_SPECIAL_OFFERS_SIZE = 50;
ee.MIN_FREE_MESSAGE_ID_THRESHOLD = 100000000;
ee.FROM_SERVER_PLAYER_ID = -1;
ee.FROM_SERVER_PLAYER_NAME = "";
ee.MESSAGE_TYPE_SYSTEM = 0;
ee.MESSAGE_TYPE_USER_IN = 1;
ee.MESSAGE_TYPE_USER_OUT = 2;
ee.MESSAGE_TYPE_SPY_PLAYER = 3;
ee.MESSAGE_TYPE_SPY_NPC = 4;
ee.MESSAGE_TYPE_CONQUERABLE_AREA = 5;
ee.MESSAGE_TYPE_BATTLE_LOG = 6;
ee.MESSAGE_TYPE_ALLIANCE_REQUEST = 20;
ee.MESSAGE_TYPE_ALLIANCE_WAR = 21;
ee.MESSAGE_TYPE_ALLIANCE_NEWSLETTER = 22;
ee.MESSAGE_TYPE_ALLIANCE_BOOKMARK = 23;
ee.MESSAGE_TYPE_FRIEND_INVITE_TEASER = 30;
ee.MESSAGE_TYPE_FRIEND_JOIN_THE_GAME = 31;
ee.MESSAGE_TYPE_FIND_A_FRIEND = 32;
ee.MESSAGE_TYPE_FRIEND_REACHED_A_LEVEL = 33;
ee.MESSAGE_TYPE_FRIEND_BOUGHT_RUBIES = 34;
ee.MESSAGE_TYPE_X_FRIENDS_BOUGHT_RUBIES = 35;
ee.MESSAGE_TYPE_FRIEND_INVITE = 36;
ee.MESSAGE_TYPE_NEW_FRIENDSHIP = 37;
ee.MESSAGE_TYPE_LOWLEVEL_UNDERWORLD = 40;
ee.MESSAGE_TYPE_USER_SURVEY = 50;
ee.MESSAGE_TYPE_ATTACK_CANCELLED = 67;
ee.MESSAGE_TYPE_SPY_CANCELLED = 68;
ee.MESSAGE_TYPE_STARVE_INFO = 70;
ee.MESSAGE_TYPE_BUILDING_DISABLED = 71;
ee.MESSAGE_TYPE_MARKET_CARRIAGE_ARRIVED = 75;
ee.MESSAGE_TYPE_ABO = 80;
ee.MESSAGE_TYPE_PAYMENT_DOPPLER = 81;
ee.MESSAGE_TYPE_REBUY = 90;
ee.MESSAGE_TYPE_SPECIAL_EVENT = 95;
ee.MESSAGE_TYPE_STARVE_VILLAGE_LOST = 96;
ee.MESSAGE_TYPE_TOURNAMENT_OVER = 97;
ee.MESSAGE_TYPE_ISLAND_KINGDOM_TITLE = 98;
ee.MESSAGE_TYPE_ISLAND_KINGDOM_REWARD = 99;
ee.MESSAGE_TYPE_STARVE_ISLE_RESOURCE_LOST = 100;
ee.MESSAGE_RUIN_INFO = 102;
ee.MESSAGE_TYPE_PLAYER_GIFT = 103;
ee.MESSAGE_TYPE_SUBSCRIPTION = 104;
ee.MESSAGE_TYPE_ATTACK_COUNT_THRESHOLD = 105;
ee.MESSAGE_TYPE_THANKY_YOU_PACKAGE = 117;
ee.MESSAGE_TYPE_DOWNTIME_STATUS = 118;
ee.MESSAGE_TYPE_ATTACK_ADVISOR_FAILURE = 120;
ee.MESSAGE_TYPE_ATTACK_ADVISOR_SUMMARY = 121;
ee.MESSAGE_TYPE_HIGHSCORE_BONUS = 122;
ee.MESSAGE_TYPE_EVENT_ANNOUNCEMENT = 123;
ee.MESSAGE_TYPE_POPUP = 124;
ee.MESSAGE_TYPE_PATCH_NOTES = 125;
ee.MESSAGE_TYPE_PRIVATE_OFFER = 126;
ee.MESSAGE_TYPE_TEXT_ID = 127;
ee.MAILBOX_INBOX = 0;
ee.MAILBOX_COMBAT_AND_SPY = 1;
ee.MAILBOX_FORWARDED = 2;
ee.MAILBOX_OUTBOX = 3;
ee.MAILBOX_SPECIAL_OFFERS = 4;
ee.SPECIAL_ID_BAEM_AWARD = 1;
ee.SPECIAL_ID_BAEM_AWARD_FINAL = 2;
ee.SPECIAL_ID_EUROPEAN_AWARD = 3;
ee.SPECIAL_ID_SHADOW_TEASER = 4;
ee.SPECIAL_ID_EGA_100_RUBIES = 5;
ee.SPECIAL_ID_EGA_150_RUBIES = 6;
ee.SPECIAL_ID_EGA_500_RUBIES_FORUM = 7;
ee.SPECIAL_ID_GAMEX_AWARD = 8;
ee.SPECIAL_ID_MMO_OF_THE_YEAR_AWARD = 9;
ee.SPECIAL_ID_TURKEY_MESSAGE = 10;
ee.SPECIAL_ID_SPECIAL_EVENT_START = 12;
ee.SPECIAL_ID_SPECIAL_EVENT_END = 13;
ee.SPECIAL_ID_FACTION_LAST_MAN_STANDING_BEGAN_FOR_FACTION = 14;
ee.SPECIAL_ID_FACTION_LAST_CAMP_DESTROYED = 15;
ee.SPECIAL_ID_VIP_INFORMATION = 16;
ee.SPECIAL_ID_WORLD_CUP = 17;
ee.SPECIAL_ID_UNDERWORLD = 18;
ee.SPECIAL_ID_THORNKING = 19;
ee.SPECIAL_ID_HOSPITAL_CAPACITY_EXCEEDED = 20;
ee.SPECIAL_ID_EMPIRE_DEALS_DAYS_MESSAGE = 21;
ee.SPECIAL_ID_TERMS_AND_CONDITIONS = 22;
ee.SPECIAL_ID_WAR_OF_EMPIRES_1 = 23;
ee.SPECIAL_ID_WAR_OF_EMPIRES_2 = 24;
ee.SPECIAL_ID_WAR_OF_EMPIRES_3 = 25;
ee.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_1 = 26;
ee.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_2 = 27;
ee.SPECIAL_ID_WAR_OF_EMPIRES_REWARD_3 = 28;
ee.SPECIAL_ID_ANNOUNCE_INSTANCE = 29;
ee.SPECIAL_ID_FAIR_PLAY_MESSAGE = 30;
ee.SPECIAL_ID_ALCHEMIST_RETIREMENT = 31;
ee.SPECIAL_ID_SPECIAL_EVENT_UPDATE = 32;
ee.SPECIAL_ID_TREASURE_MAP_PIECE_FOUND = 33;
ee.SPECIAL_ID_MONUMENT = 66;
ee.SPECIAL_ID_LABORATORY = 67;
ee.SPECIAL_ID_METROPOLIS = 68;
ee.SPECIAL_ID_KINGSTOWER = 69;
ee.PRIVATE_OFFER_TIPPMAIL = 1;
ee.PRIVATE_OFFER_DUNGEON_TREASURE_CHEST = 5;
ee.PRIVATE_OFFER_WHALE_CHEST = 6;
ee.PRIVATE_OFFER_EVENT_GIFT = 7;
ee.PRIVATE_OFFER_FORUM_ADVERTISING = 8;
ee.PRIVATE_OFFER_DEFENSE = 9;
ee.PRIVATE_OFFER_TOOL_RETURN = 10;
ee.PRIVATE_OFFER_VOUCHER = 11;
ee.PRIVATE_OFFER_TIME_CHALLENGE = 12;
ee.PRIVATE_OFFER_TIME_CHALLENGE_FINISHED = 13;
ee.PRIVATE_OFFER_BESTSELLER_SHOP = 14;
ee.BATTLE_LOG_CANCELLED_GENERAL = 1;
ee.BATTLE_LOG_CANCELLED_COOLDOWN = 2;
ee.BATTLE_LOG_CANCELLED_STARVATION = 3;
ee.TOURNAMENT_SINGLE = 1;
ee.SUBTYPE_SIEGE_CANCELED = 0;
ee.SUBTYPE_NEW_SIEGE = 1;
ee.SUBTYPE_CONQUERABLE_AREA_CONQUERED = 2;
ee.SUBTYPE_CONQUERABLE_AREA_LOST = 3;
ee.SUBTYPE_TREASUREMAP_SUBNODE = 0;
ee.SUBTYPE_TREASUREMAP_MAINNODE = 1;
ee.SUBTYPE_TREASUREMAP_ENDNODE = 2;
ee.SUBTYPE_ATTACK_NORMAL = 0;
ee.SUBTYPE_ATTACK_CONQUER = 1;
ee.SUBTYPE_ATTACK_NPC = 2;
ee.SUBTYPE_ATTACK_OCCUPY = 3;
ee.SUBTYPE_ATTACK_SHADOW = 4;
ee.POSITION_SUBTYPE_SPY = 0;
ee.SUBTYPE_SPY_SABOTAGE = 0;
ee.SUBTYPE_SPY_DEFENCE = 1;
ee.SUBTYPE_SPY_ECO = 2;
ee.SUBTYPE_SPY_PLAQUE_MONK = 3;
ee.SUBTYPE_ATTACKER_SUCCESS = 0;
ee.SUBTYPE_DEFENDER_SUCCESS = 1;
ee.SUBTYPE_ATTACKER_FAILED = 2;
ee.SUBTYPE_DEFENDER_FAILED = 3;
ee.SUBTYPE_ALLIANCE_ENEMY_ATTACK_WAR = 0;
ee.SUBTYPE_ALLIANCE_ENEMY_DECLARED_WAR = 1;
ee.SUBTYPE_ALLIANCE_OUR_DECLARED_WAR = 2;
ee.SUBTYPE_ALLIANCE_OUR_ATTACK_WAR = 3;
ee.SUBTYPE_ALLIANCE_OUR_SABOTAGE_WAR = 4;
ee.SUBTYPE_ALLIANCE_ENEMY_END_WAR = 5;
ee.SUBTYPE_ALLIANCE_ENEMY_SABOTAGE_WAR = 6;
ee.SUBTYPE_TITLE_ASSIGNED = 0;
ee.SUBTYPE_TITLE_LOST = 1;
ee.SUBTYPE_NEW_KING = 2;
ee.SUBTYPE_REWARD_TOP_X = 3;
ee.SUBTYPE_REWARD_KING = 4;
ee.SUBTYPE_REWARD_POINTS = 5;
ee.SUBTYPE_REWARD_WINNER_ALLI = 6;
ee.SUBTYPE_LOST_TITLE_ON_RESET = 7;
ee.DATATYPE_TITLE_LOST_TAKEN = 0;
ee.DATATYPE_TITLE_LOST_RESET = 1;
ee.DATATYPE_TITLE_LOST_LEADER_LEFT = 2;
ee.DATATYPE_TITLE_LOST_PLAYER_LEFT = 3;
ee.SUBTYPE_ATTACK_ABORTED = 0;
ee.SUBTYPE_ATTACK_AUTO_RETREAT = 1;
ee.SUBTYPE_ATTACK_AUTO_RETREAT_ENEMY = 2;
ee.SUBTYPE_SPY_ABORTED = 0;
ee.SUBTYPE_BOOKMARK_ADDED = 0;
ee.SUBTYPE_BOOKMARK_DELETED = 1;
ee.SUBTYPE_LOWLEVEL_UNDERWORLD_START = 0;
ee.SUBTYPE_LOWLEVEL_UNDERWORLD_WARN = 1;
ee.SUBTYPE_LOWLEVEL_UNDERWORLD_END = 2;
ee.SUBTYPE_THANK_YOU_PACKAGE_DESTROYED_FACTION_TOWERS = 0;
ee.SUBTYPE_SUPPORT_PACKAGE_LOST_FACTION_TOWERS = 1;
ee.SUBTYPE_SUBSCRIPTION_ENABLED = 0;
ee.SUBTYPE_SUBSCRIPTION_EXPIRED = 1;
ee.SUBTYPE_SUBSCRIPTION_REWARD = 2;
ee.SUBTYPE_META_DATA_SPLITTER = "#";
ee.SUBJECT_SEPARATOR = "+";
ee.SUBTYPE_POPUP_REGISTRATION_GIFT = 0;
ee.SUBTYPE_POPUP_FACEBOOK_CONNECTION = 1;
ee.SUBTYPE_POPUP_LOGIN_BONUS = 2;
ee.SUBTYPE_POPUP_SAVE_ACCOUNT = 3;
exports.MessageConst = ee;
ee.__class = "MessageConst";
var te = function () {
  return function MonumentConst() {};
}();
te.MAX_LEVEL_NORMAL_MONUMENT = 9;
te.START_LEVEL_RARE_MONUMENT = 5;
te.MAX_LEVEL_RARE_MONUMENT = 19;
exports.MonumentConst = te;
te.__class = "MonumentConst";
var ne = function () {
  return function MovementFilterConst() {};
}();
ne.PLAYER_PVP_ATTACKS = 0;
ne.ALLIANCE_PVP_ATTACKS = 1;
ne.RESOURCE_TRANSPORTS = 2;
exports.MovementFilterConst = ne;
ne.__class = "MovementFilterConst";
var ie = function () {
  function OutpostConst() {}
  OutpostConst.SIEGE_TIME_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME == null) {
      OutpostConst.SIEGE_TIME = 86400;
    }
    return OutpostConst.SIEGE_TIME;
  };
  OutpostConst.SIEGE_TIME_TEST_$LI$ = function () {
    if (OutpostConst.SIEGE_TIME_TEST == null) {
      OutpostConst.SIEGE_TIME_TEST = 600;
    }
    return OutpostConst.SIEGE_TIME_TEST;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON = 259200;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON;
  };
  OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST_$LI$ = function () {
    if (OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST == null) {
      OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST = 300;
    }
    return OutpostConst.MIN_TIME_BEFORE_ABANDON_TEST;
  };
  OutpostConst.ABANDON_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME == null) {
      OutpostConst.ABANDON_TIME = 86400;
    }
    return OutpostConst.ABANDON_TIME;
  };
  OutpostConst.ABANDON_TIME_TEST_$LI$ = function () {
    if (OutpostConst.ABANDON_TIME_TEST == null) {
      OutpostConst.ABANDON_TIME_TEST = 3600;
    }
    return OutpostConst.ABANDON_TIME_TEST;
  };
  OutpostConst.ABANDON_CANCEL_TIME_$LI$ = function () {
    if (OutpostConst.ABANDON_CANCEL_TIME == null) {
      OutpostConst.ABANDON_CANCEL_TIME = 10800;
    }
    return OutpostConst.ABANDON_CANCEL_TIME;
  };
  OutpostConst.getCapitalDefaultOwnerFor = function (e) {
    switch (e) {
      case Ye.KINGDOM_ID:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
      case et.KINGDOM_ID:
        return OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID;
      case Je.KINGDOM_ID:
        return OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID;
      case it.KINGDOM_ID:
        return OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
      default:
        return OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isCapitalDefaultOwner = function (e) {
    return e === OutpostConst.CAPITAL_CLASSIC_DEFAULT_OWNER_ID || e === OutpostConst.CAPITAL_ICE_DEFAULT_OWNER_ID || e === OutpostConst.CAPITAL_DESSERT_DEFAULT_OWNER_ID || e === OutpostConst.CAPITAL_VOLCANO_DEFAULT_OWNER_ID;
  };
  OutpostConst.getLaboratoryDefaultOwnerFor = function (e) {
    switch (e) {
      case Ye.KINGDOM_ID:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
      case et.KINGDOM_ID:
        return OutpostConst.LABORATORY_ICE_OWNER_ID;
      case Je.KINGDOM_ID:
        return OutpostConst.LABORATORY_DESERT_OWNER_ID;
      case it.KINGDOM_ID:
        return OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
      default:
        return OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID;
    }
  };
  OutpostConst.isLaboratoryDefaultOwner = function (e) {
    return e === OutpostConst.LABORATORY_CLASSIC_DEFAULT_OWNER_ID || e === OutpostConst.LABORATORY_ICE_OWNER_ID || e === OutpostConst.LABORATORY_DESERT_OWNER_ID || e === OutpostConst.LABORATORY_VOLCANO_OWNER_ID;
  };
  return OutpostConst;
}();
ie.DUMMY_SIEGE_TIME = 2;
ie.DAMAGED_BUILDING_RATIO = 0.9;
ie.ABANDON_CANCEL_TIME_TEST = 60;
ie.DEFAULT_NAME = "";
ie.OUTPOST_DEFAULT_OWNER_ID = -300;
ie.OUTPOST_DEFAULT_AREA_ID = -300;
ie.OUTPOST_DEFAULT_LEVEL = 5;
ie.CAPITAL_CLASSIC_DEFAULT_OWNER_ID = -432;
ie.CAPITAL_ICE_DEFAULT_OWNER_ID = -433;
ie.CAPITAL_DESSERT_DEFAULT_OWNER_ID = -434;
ie.CAPITAL_VOLCANO_DEFAULT_OWNER_ID = -435;
ie.CAPITAL_UNSPAWNED_AREA_ID = -301;
ie.CAPITAL_MAP_ICON = "333300";
ie.CAPITAL_NON_CLASSIC_FOOD_PRODUCERS = 2;
ie.CAPITAL_CLASSIC_FOOD_PRODUCERS = 3;
ie.METROPOL_DEFAULT_OWNER_ID = -440;
ie.METROPOL_UNSPAWNED_AREA_ID = -341;
ie.METROPOL_ALLIANCE_BATTLE_GROUND_MINED_OUT_AREA_ID = -342;
ie.METROPOL_MAP_ICON = "333300";
ie.METROPOL_FOOD_PRODUCERS = 3;
ie.KINGS_TOWER_DEFAULT_OWNER_ID = -450;
ie.KINGS_TOWER_UNSPAWNED_AREA_ID = -351;
ie.KINGS_TOWER_BONUS = 20;
ie.KINGS_TOWER_DEFAULT_LEVEL = 70;
ie.MONUMENT_DEFAULT_OWNER_ID = -460;
ie.MONUMENT_UNSPAWNED_AREA_ID = -353;
ie.MONUMENT_DEFAULT_LEVEL = 70;
ie.LABORATORY_CLASSIC_DEFAULT_OWNER_ID = -470;
ie.LABORATORY_ICE_OWNER_ID = -471;
ie.LABORATORY_DESERT_OWNER_ID = -472;
ie.LABORATORY_VOLCANO_OWNER_ID = -473;
ie.LABORATORY_UNSPAWNED_AREA_ID = -355;
ie.LABORATORY_DEFAULT_LEVEL = 70;
ie.ALLIANCE_BATTLE_GROUND_DEFAULT_OWNER_ID = -480;
ie.ALLIANCE_BATTLE_GROUND_UNSPAWNED_AREA_ID = -481;
ie.LANDMARK_DEFAULT_LEVEL = 70;
ie.RESOURCE_ISLE_DEFAULT_LEVEL = 70;
exports.OutpostConst = ie;
ie.__class = "OutpostConst";
var ae = function () {
  return function PackageConst() {};
}();
ae.BUY_TYPE_EVENT = 0;
ae.BUY_TYPE_PRIVATE_OFFER = 1;
ae.BUY_TYPE_VIP = 2;
ae.BUY_TYPE_SLUM = 3;
ae.BUY_TYPE_PRIMEDAY = 4;
ae.BUY_TYPE_CRUSADEMAP = 5;
ae.BUY_TYPE_GIFT = 6;
ae.BUY_TYPE_FUSION = 7;
ae.BUY_TYPE_OFFERINGS = 8;
ae.BUY_TYPE_GENERAL_SKILLS_RESET_TOKEN = 9;
ae.MAX_BUY_PER_CLICK = 1000;
ae.MAX_PLAYER_GIFT_PER_DAY = 50;
ae.MAX_PLAYER_GIFT_STORAGE = 30;
exports.PackageConst = ae;
ae.__class = "PackageConst";
var se = function () {
  function PlayerConst() {}
  PlayerConst.NAME_PREFIX_$LI$ = function () {
    if (PlayerConst.NAME_PREFIX == null) {
      PlayerConst.NAME_PREFIX = ["strong", "fast", "ultimate", "new", "mighty", "righteous", "amazing", "super", "great", "powerfully", "epic", "legendary", "fabulous", "gorgeous", "wise", "favoured", "heavy", "brave", "famous", "dark", "noble"];
    }
    return PlayerConst.NAME_PREFIX;
  };
  PlayerConst.NAME_MIDDLE_$LI$ = function () {
    if (PlayerConst.NAME_MIDDLE == null) {
      PlayerConst.NAME_MIDDLE = ["boss", "lord", "king", "manager", "star", "pro", "guru", "gold", "diamond"];
    }
    return PlayerConst.NAME_MIDDLE;
  };
  PlayerConst.NAME_SUFFIX_$LI$ = function () {
    if (PlayerConst.NAME_SUFFIX == null) {
      PlayerConst.NAME_SUFFIX = ["player", "user", "gamer", "adventurer", "hero", "champion", "ruler", "swayer", "ruler", "warrior", "fighter", "berserk", "nobleman"];
    }
    return PlayerConst.NAME_SUFFIX;
  };
  PlayerConst.OPEN_GATE_C2_$LI$ = function () {
    if (PlayerConst.OPEN_GATE_C2 == null) {
      PlayerConst.OPEN_GATE_C2 = [450, 700];
    }
    return PlayerConst.OPEN_GATE_C2;
  };
  PlayerConst.OPEN_GATE_DURATION_$LI$ = function () {
    if (PlayerConst.OPEN_GATE_DURATION == null) {
      PlayerConst.OPEN_GATE_DURATION = [21600, 43200];
    }
    return PlayerConst.OPEN_GATE_DURATION;
  };
  PlayerConst.PEACE_MODE_C2_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_C2 == null) {
      PlayerConst.PEACE_MODE_C2 = [5000, 7500, 10000, 20000];
    }
    return PlayerConst.PEACE_MODE_C2;
  };
  PlayerConst.PEACE_MODE_DURATION_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_DURATION == null) {
      PlayerConst.PEACE_MODE_DURATION = [604800, 1209600, 1814400, 5184000];
    }
    return PlayerConst.PEACE_MODE_DURATION;
  };
  PlayerConst.PEACE_MODE_HEAT_UP_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_HEAT_UP == null) {
      PlayerConst.PEACE_MODE_HEAT_UP = 86400;
    }
    return PlayerConst.PEACE_MODE_HEAT_UP;
  };
  PlayerConst.PEACE_MODE_HEAT_UP_TEST_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_HEAT_UP_TEST == null) {
      PlayerConst.PEACE_MODE_HEAT_UP_TEST = 600;
    }
    return PlayerConst.PEACE_MODE_HEAT_UP_TEST;
  };
  PlayerConst.PEACE_MODE_COOLDOWN_$LI$ = function () {
    if (PlayerConst.PEACE_MODE_COOLDOWN == null) {
      PlayerConst.PEACE_MODE_COOLDOWN = 172800;
    }
    return PlayerConst.PEACE_MODE_COOLDOWN;
  };
  PlayerConst.MAIL_CONFIRM_C2_$LI$ = function () {
    if (PlayerConst.MAIL_CONFIRM_C2 == null) {
      PlayerConst.MAIL_CONFIRM_C2 = [500, 10000, 30000, 60000, 90000];
    }
    return PlayerConst.MAIL_CONFIRM_C2;
  };
  PlayerConst.LOGIN_LP_INCENTIVES_C1_$LI$ = function () {
    if (PlayerConst.LOGIN_LP_INCENTIVES_C1 == null) {
      PlayerConst.LOGIN_LP_INCENTIVES_C1 = [0, 6000, 0, 2000, 0, 1500, 0, 1000, 0, 1500, 0, 3000, 0, 5000];
    }
    return PlayerConst.LOGIN_LP_INCENTIVES_C1;
  };
  PlayerConst.LOGIN_LP_INCENTIVES_C2_$LI$ = function () {
    if (PlayerConst.LOGIN_LP_INCENTIVES_C2 == null) {
      PlayerConst.LOGIN_LP_INCENTIVES_C2 = [150, 0, 50, 0, 37, 0, 26, 0, 37, 0, 75, 0, 125, 0];
    }
    return PlayerConst.LOGIN_LP_INCENTIVES_C2;
  };
  PlayerConst.LEVEL_CAP_XP_$LI$ = function () {
    if (PlayerConst.LEVEL_CAP_XP == null) {
      PlayerConst.LEVEL_CAP_XP = PlayerConst.LEVEL_CAP * PlayerConst.LEVEL_CAP * 30;
    }
    return PlayerConst.LEVEL_CAP_XP;
  };
  PlayerConst.COMBINED_LEVEL_CAP_$LI$ = function () {
    if (PlayerConst.COMBINED_LEVEL_CAP == null) {
      PlayerConst.COMBINED_LEVEL_CAP = PlayerConst.LEVEL_CAP + PlayerConst.LEGEND_LEVEL_CAP;
    }
    return PlayerConst.COMBINED_LEVEL_CAP;
  };
  PlayerConst.LEGEND_MAX_XP_$LI$ = function () {
    if (PlayerConst.LEGEND_MAX_XP == null) {
      PlayerConst.LEGEND_MAX_XP = PlayerConst.getXPFromLegendLevel(PlayerConst.LEGEND_LEVEL_CAP);
    }
    return PlayerConst.LEGEND_MAX_XP;
  };
  PlayerConst.CUMULATED_LEVEL_CAP_$LI$ = function () {
    if (PlayerConst.CUMULATED_LEVEL_CAP == null) {
      PlayerConst.CUMULATED_LEVEL_CAP = PlayerConst.LEVEL_CAP + PlayerConst.LEGEND_LEVEL_CAP;
    }
    return PlayerConst.CUMULATED_LEVEL_CAP;
  };
  PlayerConst.LOGIN_BONUS_KEY_PRICES_$LI$ = function () {
    if (PlayerConst.LOGIN_BONUS_KEY_PRICES == null) {
      PlayerConst.LOGIN_BONUS_KEY_PRICES = [[30, 40, 45, 55, 104, 150], [60, 70, 90, 99, 187, 275], [75, 90, 110, 130, 256, 375], [100, 115, 140, 183, 280, 540], [135, 160, 200, 240, 457, 675], [180, 220, 260, 317, 580, 950]];
    }
    return PlayerConst.LOGIN_BONUS_KEY_PRICES;
  };
  PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY_$LI$ = function () {
    if (PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY == null) {
      PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY = [6, 7, 9, 11, 13, 15];
    }
    return PlayerConst.SAVE_ACCOUNT_LEVEL_CATEGORY;
  };
  PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN_$LI$ = function () {
    if (PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN == null) {
      PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN = 43200;
    }
    return PlayerConst.PLAYER_NAME_CHANGE_COOLDOWN;
  };
  PlayerConst.getLevelFromXP = function (e) {
    return Math.min(PlayerConst.LEVEL_CAP, Math.floor(Math.sqrt(e / 30))) | 0;
  };
  PlayerConst.getXPFromLevel = function (e) {
    return Math.min(PlayerConst.LEVEL_CAP_XP_$LI$(), e * e * 30);
  };
  PlayerConst.getLegendLevelFromXP = function (e) {
    var t = e - PlayerConst.LEVEL_CAP_XP_$LI$();
    if (t >= 0) {
      var n = Math.max(1, Math.floor(Math.pow((t + 2750) / 3000, 1 / 1.19))) | 0;
      return Math.min(PlayerConst.LEGEND_LEVEL_CAP, n);
    }
    return 0;
  };
  PlayerConst.getXPFromLegendLevel = function (e) {
    if (e < 1) {
      return 0;
    } else {
      e = Math.min(PlayerConst.LEGEND_LEVEL_CAP, e);
      return (Math.ceil(Math.pow(e, 1.19) * 3000) | 0) - 2750 + PlayerConst.LEVEL_CAP_XP_$LI$();
    }
  };
  PlayerConst.getXPFromCombinedLevel = function (e) {
    if (e <= PlayerConst.LEVEL_CAP) {
      return PlayerConst.getXPFromLevel(e);
    } else {
      return PlayerConst.getXPFromLegendLevel(e - PlayerConst.LEVEL_CAP);
    }
  };
  PlayerConst.getAttackCooldown = function (e, t) {
    return Math.min(47, Math.max(3, Math.floor((e * 0.65 - t) * 3) | 0)) * 60 * 60;
  };
  PlayerConst.getOpenGateCosts = function (e, t) {
    var n = Math.min(PlayerConst.OPEN_GATE_COUNT_CAP, t);
    return (Math.round(PlayerConst.OPEN_GATE_C2_$LI$()[e] * Math.pow(n, 1.1 + n / 10) / 10) | 0) * 10;
  };
  PlayerConst.getLoginBonusLevelCategory = function (e) {
    if (e < 15) {
      return 0;
    } else if (e < 21) {
      return 1;
    } else if (e < 27) {
      return 2;
    } else if (e < 38) {
      return 3;
    } else if (e < 51) {
      return 4;
    } else {
      return 5;
    }
  };
  PlayerConst.getLoginBonusLevelCategoryNew = function (e) {
    if (e < 24) {
      return 0;
    } else if (e < 40) {
      return 1;
    } else if (e < 50) {
      return 2;
    } else if (e < 60) {
      return 3;
    } else if (e < 69) {
      return 4;
    } else {
      return 5;
    }
  };
  PlayerConst.getLoginBonusKeyCost = function (e, t) {
    var n = PlayerConst.getLoginBonusLevelCategory(e);
    return PlayerConst.LOGIN_BONUS_KEY_PRICES_$LI$()[n][t];
  };
  PlayerConst.justReachedLevel = function (e, t, n) {
    return t >= n && e < n;
  };
  PlayerConst.isHumanPlayerOrAlien = function (e) {
    return PlayerConst.isHumanPlayer(e) || PlayerConst.isAlien(e);
  };
  PlayerConst.isHumanPlayer = function (e) {
    return e > -1;
  };
  PlayerConst.isAlien = function (e) {
    return e === L.BASIC_ALIEN_ID || e === L.BASIC_RED_ALIEN_ID || e === L.BASIC_SAMURAI_ALIEN_ID;
  };
  PlayerConst.isLegendaryPlayer = function (e) {
    return e >= PlayerConst.LEVEL_CAP;
  };
  PlayerConst.isGodlikePlayer = function (e) {
    return e >= PlayerConst.LEGEND_LEVEL_CAP;
  };
  PlayerConst.isNPC = function (e) {
    return !PlayerConst.isHumanPlayer(e);
  };
  return PlayerConst;
}();
se.START_XP = 0;
se.START_C1 = 100;
se.START_C2 = 0;
se.START_WOOD = 200;
se.START_STONE = 100;
se.START_FOOD = 0;
se.START_HONOR = 0;
se.START_ACHIEVEMENTPOINTS = 0;
se.MAX_LOGIN_FAILS = 59;
se.MAX_LOGIN_FAIL_RESETTIME = 1800;
se.CASTLE_NAME_MIN_LENGTH = 3;
se.CASTLE_NAME_MAX_LENGTH = 15;
se.OPEN_GATE_COUNT_CAP = 9;
se.WELCOME_GIFT_ID = 0;
se.MAIL_CONFIRMED_ID = 1;
se.CHANGE_CASTLE_NAME_C2 = 2500;
se.NEWSLETTER_CONFIRM_ID = 1;
se.DAILY_FAME_LOSS = 2;
se.MERCENARY_EVENT_MIN_LEVEL = 6;
se.START_LEVEL = 1;
se.LEVEL_CAP = 70;
se.LEGEND_LEVEL_CAP = 950;
se.START_LEGEND_LEVEL = 1;
se.PREMIUM_FLAG_COST_C2 = 4900;
se.MIN_LEVEL_FOR_RECRUITMENT = 2;
se.MIN_LEVEL_FOR_MESSAGES = 2;
se.MIN_LEVEL_FOR_ACTIVITY_CHEST = 2;
se.LEVEL_FOR_CASTLE_NAME = 3;
se.MIN_LEVEL_FOR_MAP = 3;
se.MIN_LEVEL_FOR_MAIL_POPUP = 3;
se.LEVEL_FOR_FACEBOOK_MESSAGE = 3;
se.MIN_LEVEL_FOR_EXPANSION_TREASURE = 6;
se.MIN_LEVEL_FOR_DAILY_REWARD = 6;
se.DAILY_VIP_POINTS_LOSS = 5;
se.BOOKMARKS_MAX_ENTRYS = 50;
se.PLAYER_MAX_FRIEND_CONNECTIONS = 100;
se.LOGIN_BONUS_REQUIRED_XP = 1200;
se.LOGIN_BONUS_KEYS = 3;
se.DAYS_BEFORE_FINAL_DELETION = 120;
se.MIN_LEVEL_FOR_INVITE_TEASER = 12;
se.DEFAULT_MAIL = "-1";
se.RESEND_MAIL_ACCOUNT_VERIFICATION = 0;
se.MAIL_CHANGE_NO_PENDING_STATE = 0;
se.MAIL_CHANGE_STARTED = 1;
se.MAIL_CHANGE_FIRST_EXPIRATION_TIME_STATE = 2;
se.MAIL_CHANGE_SECOND_EXPIRATION_TIME_STATE = 3;
se.MAIL_CHANGE_CANCEL_STARTED = 4;
exports.PlayerConst = se;
se.__class = "PlayerConst";
var re = function () {
  function PointEventConst() {}
  PointEventConst.POINTS_FOR_TASK_$LI$ = function () {
    if (PointEventConst.POINTS_FOR_TASK == null) {
      PointEventConst.POINTS_FOR_TASK = [1, 2, 3];
    }
    return PointEventConst.POINTS_FOR_TASK;
  };
  return PointEventConst;
}();
re.NUMBER_OF_REWARDPACKAGES = 3;
re.TOTAL_NUMBER_OF_REWARDS = 4;
re.COLLECT_TAX_PE_TYPE = 1;
re.SPY_PE_TYPE = 2;
re.SABOTAGE_DAMAGE_PE_TYPE = 3;
re.WIN_HONOR_FIGHT_PE_TYPE = 4;
re.DO_FIRE_DAMAGE_PE_TYPE = 5;
re.COLLECT_FROM_CITIZEN_PE_TYPE = 6;
re.COLLECT_FROM_CARRIAGE_PE_TYPE = 7;
re.OFF_MELEE_UNITS_PE_TYPE = 8;
re.OFF_RANGE_UNITS_PE_TYPE = 9;
re.FIND_EQUIPMENT_PE_TYPE = 10;
re.CRAFT_EQUIPMENT_PE_TYPE = 11;
re.RESOURCE_TO_PLAYER_PE_TYPE = 12;
re.COUNT_DUNGEONS_PE_TYPE = 13;
re.COUNT_DUNGEONS_KINGDOM_PE_TYPE = 14;
re.POINT_EVENT_FAME_PE_TYPE = 15;
re.POINT_EVENT_CONQUER_VILLAGES = 16;
re.POINT_EVENT_SPIN_LUCKY_WHEEL = 17;
re.POINT_EVENT_BOUNTY_HUNTER = 18;
re.POINT_EVENT_LUCKY_WHEEL = 19;
re.POINT_EVENT_NOMAD_INVASION = 20;
re.POINT_EVENT_MARAUDERS = 21;
re.POINT_EVENT_TOOLS = 22;
re.POINT_EVENT_LOOT_RESOURCES = 23;
re.POINT_EVENT_REVIVE_UNITS = 24;
re.POINT_EVENT_FACTION_POINTS = 25;
re.POINT_EVENT_DUNGEONS_ICE = 26;
re.POINT_EVENT_DUNGEONS_SAND = 27;
re.POINT_EVENT_SAMURAI_INVASION = 28;
re.POINT_EVENT_SPENT_C2 = 29;
re.POINT_EVENT_LUCKY_WHEEL_SALE_DAYS = 30;
re.NUM_ENTRIES_IN_HIGHSCORE = 8;
re.OFFSET_IN_HIGHSCORE_LIST = 4;
exports.PointEventConst = re;
re.__class = "PointEventConst";
var oe = function () {
  return function PopoverConst() {};
}();
oe.EQUIPMENT_SOLD = 1;
oe.GEM_SOLD = 2;
exports.PopoverConst = oe;
oe.__class = "PopoverConst";
var le = function () {
  function PopupConst() {}
  PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS = [PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.ALLIANCE_ALIEN_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS = [PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_NOMAD_INVASION_ALLIANCE_REWARDS_UNLOCKED, PopupConst.NOMAD_INVASION_ALLIANCE_CAMP_REWARD_POPUP];
    }
    return PopupConst.ALLIANCE_NOMAD_INVASION_POPUPS;
  };
  PopupConst.SAMURAI_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.SAMURAI_INVASION_POPUPS == null) {
      PopupConst.SAMURAI_INVASION_POPUPS = [PopupConst.SAMURAI_INVASION_FIRST_ALLIANCE, PopupConst.SAMURAI_INVASION_TOPX_ALLIANCE, PopupConst.SAMURAI_INVASION_REWARD_ALLIANCE, PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE, PopupConst.SAMURAI_INVASION_FIRST_PLAYER, PopupConst.SAMURAI_INVASION_TOPX_PLAYER, PopupConst.SAMURAI_INVASION_REWARD_PLAYER, PopupConst.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.SAMURAI_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.SAMURAI_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_TOURNAMENT_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_TOURNAMENT_POPUPS == null) {
      PopupConst.ALLIANCE_TOURNAMENT_POPUPS = [PopupConst.ALLIANCE_TOURNAMENT_FIRST, PopupConst.ALLIANCE_TOURNAMENT_TOPX, PopupConst.ALLIANCE_TOURNAMENT_REWARD, PopupConst.ALLIANCE_TOURNAMENT_END_WITHOUT_REWARD];
    }
    return PopupConst.ALLIANCE_TOURNAMENT_POPUPS;
  };
  PopupConst.FACTION_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.FACTION_INVASION_POPUPS == null) {
      PopupConst.FACTION_INVASION_POPUPS = [PopupConst.FACTION_INVASION_FIRST_ALLIANCE, PopupConst.FACTION_INVASION_TOPX_ALLIANCE, PopupConst.FACTION_INVASION_REWARD_ALLIANCE, PopupConst.FACTION_INVASION_END_WITHOUT_REWARD, PopupConst.FACTION_INVASION_FIRST_PLAYER, PopupConst.FACTION_INVASION_TOPX_PLAYER, PopupConst.FACTION_INVASION_REWARD_PLAYER, PopupConst.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.FACTION_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.FACTION_INVASION_POPUPS;
  };
  PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS == null) {
      PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS = [PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD, PopupConst.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.ALLIANCE_RED_ALIEN_INVASION_POPUPS;
  };
  PopupConst.SAMURAI_ALIEN_INVASION_POPUPS_$LI$ = function () {
    if (PopupConst.SAMURAI_ALIEN_INVASION_POPUPS == null) {
      PopupConst.SAMURAI_ALIEN_INVASION_POPUPS = [PopupConst.SAMURAI_ALIEN_INVASION_FIRST_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_TOPX_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_REWARD_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_ALLIANCE, PopupConst.SAMURAI_ALIEN_INVASION_FIRST_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_TOPX_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_REWARD_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER, PopupConst.SAMURAI_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED];
    }
    return PopupConst.SAMURAI_ALIEN_INVASION_POPUPS;
  };
  return PopupConst;
}();
le.BOUNTYHUNTER = 1;
le.RANDOMDUNGEON = 2;
le.ARTIFACT = 3;
le.QUEST_FINISH = 4;
le.ACHIEVEMENT_FINISH = 5;
le.MAIL_VERIFIED = 6;
le.ALCHEMIST = 7;
le.MAIN_QUEST = 8;
le.FACTION_FINISHED = 9;
le.COLOSSUS_COMPLETE = 11;
le.CRUSADE_THORNKING_FAILED = 12;
le.LEVEL_UP = 14;
le.APRILDUNGEON = 15;
le.CRUSADE_SEAQUEEN_FAILED = 16;
le.PRIVATE_OFFER = 18;
le.TMAP_RELIC_REWARD = 19;
le.TMAP_RESOURCE_REWARD = 20;
le.MINE_EXHAUSTED = 21;
le.POINT_EVENT_FIRST = 22;
le.POINT_EVENT_REWARD = 23;
le.POINT_EVENT_END_WITHOUT_REWARD = 24;
le.LOGIN_LP_INCENTIVE = 25;
le.BEGGING_KNIGHTS_FIRST = 26;
le.BEGGING_KNIGHTS_TOPX = 27;
le.BEGGING_KNIGHTS_REWARD = 28;
le.BEGGING_KNIGHTS_END_WITHOUT_REWARD = 29;
le.POINT_EVENT_TOPX = 30;
le.ISLAND_END_NO_ALLI_PLAYER = 31;
le.ISLAND_END_ALLI_PLAYER_WIN = 32;
le.ISLAND_END_ALLI_PLAYER_PARTICIPANT = 33;
le.ISLAND_END = 262;
le.CRUSADE_UNDERWOLRD_FAILED = 38;
le.LUCKY_WHEEL_POINT_EVENT_FIRST = 39;
le.LUCKY_WHEEL_POINT_EVENT_TOPX = 40;
le.LUCKY_WHEEL_POINT_EVENT_REWARD = 41;
le.LUCKY_WHEEL_POINT_EVENT_END_WITHOUT_REWARD = 42;
le.NOMAD_INVASION_FIRST = 43;
le.NOMAD_INVASION_TOPX = 44;
le.NOMAD_INVASION_REWARD = 45;
le.NOMAD_INVASION_END_WITHOUT_REWARD = 46;
le.ALLIANCE_ALIEN_INVASION_FIRST_ALLIANCE = 47;
le.ALLIANCE_ALIEN_INVASION_TOPX_ALLIANCE = 48;
le.ALLIANCE_ALIEN_INVASION_REWARD_ALLIANCE = 49;
le.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD = 50;
le.ALLIANCE_ALIEN_INVASION_FIRST_PLAYER = 51;
le.ALLIANCE_ALIEN_INVASION_TOPX_PLAYER = 52;
le.ALLIANCE_ALIEN_INVASION_REWARD_PLAYER = 53;
le.ALLIANCE_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 65;
le.ALLIANCE_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 254;
le.MIGHT_REWARD = 54;
le.ALLIANCE_NOMAD_INVASION_FIRST_ALLIANCE = 55;
le.ALLIANCE_NOMAD_INVASION_TOPX_ALLIANCE = 56;
le.ALLIANCE_NOMAD_INVASION_REWARD_ALLIANCE = 57;
le.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD = 58;
le.ALLIANCE_NOMAD_INVASION_FIRST_PLAYER = 59;
le.ALLIANCE_NOMAD_INVASION_TOPX_PLAYER = 60;
le.ALLIANCE_NOMAD_INVASION_REWARD_PLAYER = 61;
le.ALLIANCE_NOMAD_INVASION_END_WITHOUT_REWARD_PLAYER = 66;
le.ALLIANCE_NOMAD_INVASION_ALLIANCE_REWARDS_UNLOCKED = 255;
le.NOMAD_INVASION_ALLIANCE_CAMP_REWARD_POPUP = 118;
le.NEW_DAILY_QUEST_REWARD = 62;
le.MORALE_BOOSTER_REWARD = 63;
le.FACTION_POINT_EVENT_FIRST = 67;
le.FACTION_POINT_EVENT_TOPX = 68;
le.FACTION_POINT_EVENT_REWARD = 69;
le.FACTION_POINT_EVENT_END_WITHOUT_REWARD = 70;
le.PERMANENT_SLOT_REWARD = 71;
le.SAMURAI_INVASION_FIRST_ALLIANCE = 72;
le.SAMURAI_INVASION_TOPX_ALLIANCE = 73;
le.SAMURAI_INVASION_REWARD_ALLIANCE = 74;
le.SAMURAI_INVASION_END_WITHOUT_REWARD_ALLIANCE = 75;
le.SAMURAI_INVASION_FIRST_PLAYER = 76;
le.SAMURAI_INVASION_TOPX_PLAYER = 77;
le.SAMURAI_INVASION_REWARD_PLAYER = 78;
le.SAMURAI_INVASION_END_WITHOUT_REWARD_PLAYER = 79;
le.SAMURAI_INVASION_ALLIANCE_REWARDS_UNLOCKED = 256;
le.LONGTERM_POINT_EVENT_FIRST = 82;
le.LONGTERM_POINT_EVENT_TOPX = 83;
le.LONGTERM_POINT_EVENT_REWARD = 84;
le.LONGTERM_POINT_EVENT_END_WITHOUT_REWARD = 85;
le.ALLIANCE_TOURNAMENT_FIRST = 86;
le.ALLIANCE_TOURNAMENT_TOPX = 87;
le.ALLIANCE_TOURNAMENT_REWARD = 88;
le.ALLIANCE_TOURNAMENT_END_WITHOUT_REWARD = 89;
le.RESEARCH_FINISHED = 90;
le.FACTION_INVASION_FIRST_ALLIANCE = 91;
le.FACTION_INVASION_TOPX_ALLIANCE = 92;
le.FACTION_INVASION_REWARD_ALLIANCE = 93;
le.FACTION_INVASION_END_WITHOUT_REWARD = 94;
le.FACTION_INVASION_FIRST_PLAYER = 95;
le.FACTION_INVASION_TOPX_PLAYER = 96;
le.FACTION_INVASION_REWARD_PLAYER = 97;
le.FACTION_INVASION_END_WITHOUT_REWARD_PLAYER = 98;
le.FACTION_INVASION_ALLIANCE_REWARDS_UNLOCKED = 257;
le.TERMS_AND_CONDITIONS_CHANGE = 100;
le.LONGTERM_POINT_EVENT_HARD_MODE = 101;
le.CRAFTING_MATERIALS = 108;
le.ALLIANCE_RED_ALIEN_INVASION_FIRST_ALLIANCE = 109;
le.ALLIANCE_RED_ALIEN_INVASION_TOPX_ALLIANCE = 110;
le.ALLIANCE_RED_ALIEN_INVASION_REWARD_ALLIANCE = 111;
le.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD = 112;
le.ALLIANCE_RED_ALIEN_INVASION_FIRST_PLAYER = 113;
le.ALLIANCE_RED_ALIEN_INVASION_TOPX_PLAYER = 114;
le.ALLIANCE_RED_ALIEN_INVASION_REWARD_PLAYER = 115;
le.ALLIANCE_RED_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 116;
le.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 258;
le.RETURN_INVENTORY_TO_THE_OLD_OWNER = 117;
le.POPUP_FIRST_ALLIANCE = 0;
le.POPUP_TOPX_ALLIANCE = 1;
le.POPUP_REWARD_ALLIANCE = 2;
le.POPUP_END_WITHOUT_REWARD = 3;
le.POPUP_FIRST_PLAYER = 4;
le.POPUP_TOPX_PLAYER = 5;
le.POPUP_REWARD_PLAYER = 6;
le.POPUP_END_WITHOUT_REWARD_PLAYER = 7;
le.POPUP_ALLIANCE_REWARDS_UNLOCKED = 8;
le.ALLIANCE_CAMP_REWARD_POPUP_INDEX = 9;
le.TIME_LIMITED_CAMPAIGN_REWARD_POPUP = 119;
le.EXPIRED_EQUIPMENTS = 120;
le.NEWSLETTER_CONFIRMED = 221;
le.NEWSLETTER_CONFIRMED_AGAIN = 222;
le.EMAIL_SEND_SUCCESS = 223;
le.EMAIL_SEND_FAIL = 224;
le.SAMURAI_ALIEN_INVASION_FIRST_ALLIANCE = 225;
le.SAMURAI_ALIEN_INVASION_TOPX_ALLIANCE = 226;
le.SAMURAI_ALIEN_INVASION_REWARD_ALLIANCE = 227;
le.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_ALLIANCE = 228;
le.SAMURAI_ALIEN_INVASION_FIRST_PLAYER = 229;
le.SAMURAI_ALIEN_INVASION_TOPX_PLAYER = 230;
le.SAMURAI_ALIEN_INVASION_REWARD_PLAYER = 231;
le.SAMURAI_ALIEN_INVASION_END_WITHOUT_REWARD_PLAYER = 232;
le.SAMURAI_ALIEN_INVASION_ALLIANCE_REWARDS_UNLOCKED = 259;
le.SEASON_DAILY_MEDAL_PAYOUT = 233;
le.SEASON_PROMOTION = 234;
le.SEASON_EVENT_END = 235;
le.SEASON_END = 236;
le.SEASON_PASS_ACTIVATION = 261;
le.COLLECTOR_REWARD_PLAYER = 237;
le.TEMP_SERVER_ENTER = 238;
le.SUBSCRPTION_LOYALTY_PAYOUT = 239;
le.DAIMYO_ALLIANCE_CONTRACT_COMPLETED = 240;
le.DAIMYO_REWARD = 241;
le.ALLIANCE_BATTLE_GROUND_ENTER = 242;
le.ALLIANCE_BATTLE_GROUND_EVENT_END_REWARD = 243;
le.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_FIRST = 244;
le.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_TOPX = 245;
le.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_REWARD = 246;
le.LUCKY_WHEEL_SALE_DAYS_POINT_EVENT_END_WITHOUT_REWARD = 247;
le.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_REVIVE = 250;
le.ALLIANCE_BATTLE_GROUND_TOWER_PLAYER_RE_LINK = 251;
le.STATELESS_OFFER_REWARD_PAYOUT = 252;
le.BUILDINGS_TRANSFERRED_TO_AREA_INVENTORY = 253;
le.TEMP_SERVER_EVENT_END_REWARD = 260;
le.OFFER_WALL_C2_GAINED = 270;
le.RECE_WELCOME_MESSAGE = 271;
le.VERIFICATION_SENT_TO_OLD_MAIL = 272;
le.MAIL_CHANGE_SUCCESS = 273;
le.PLAYER_NAME_EMAIL_ALIAS_POPUP = 274;
le.MAIL_CANCEL_SUCCESS = 275;
le.MAIL_CHANGE_REQUEST_WITHOUT_VERIFICATION = 276;
le.TEASER = 277;
le.DONATION_EVENT_END_REWARD = 278;
le.US_ZIP_CODE = 279;
le.GACHA_EVENT_REWARD = 280;
le.GACHA_EVENT_END_WITHOUT_REWARD = 281;
le.GACHA_EVENT_END_REWARD = 282;
le.GENERIC_REWARDS_GAINED = 283;
exports.PopupConst = le;
le.__class = "PopupConst";
var ue = function () {
  function PremiumConst() {}
  PremiumConst.FACTOR_C1_$LI$ = function () {
    if (PremiumConst.FACTOR_C1 == null) {
      PremiumConst.FACTOR_C1 = [0.9, 0.85, 0.8];
    }
    return PremiumConst.FACTOR_C1;
  };
  PremiumConst.FACTOR_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_C2 == null) {
      PremiumConst.FACTOR_C2 = [0.95, 0.9, 0.9];
    }
    return PremiumConst.FACTOR_C2;
  };
  PremiumConst.FACTOR_BRIBE_TAX_C2_$LI$ = function () {
    if (PremiumConst.FACTOR_BRIBE_TAX_C2 == null) {
      PremiumConst.FACTOR_BRIBE_TAX_C2 = [0.2, 0.3, 0.5];
    }
    return PremiumConst.FACTOR_BRIBE_TAX_C2;
  };
  PremiumConst.FACTOR_DONATE_ALLI_$LI$ = function () {
    if (PremiumConst.FACTOR_DONATE_ALLI == null) {
      PremiumConst.FACTOR_DONATE_ALLI = [1.1, 1.15, 1.2];
    }
    return PremiumConst.FACTOR_DONATE_ALLI;
  };
  return PremiumConst;
}();
ue.EVENT_SPECIALOFFER = 0;
ue.EVENT_SPECIALINGAMEOFFER = 1;
ue.EVENT_REGISTERBONUS = 2;
ue.PREMIUM_ACCOUNT_GOLD = 2;
ue.PREMIUM_ACCOUNT_SILVER = 1;
ue.PREMIUM_ACCOUNT_BRONZE = 0;
ue.PREMIUM_ACCOUNT_TYPE_0 = 50;
ue.PREMIUM_ACCOUNT_TYPE_1 = 51;
ue.PREMIUM_ACCOUNT_TYPE_2 = 52;
ue.VIP_FLAG_OPTION_DEFAULT = true;
exports.PremiumConst = ue;
ue.__class = "PremiumConst";
var ce = function () {
  return function PrivateOfferHelpTextMessageConst() {};
}();
ce.DEFAULT_MESSAGE = 0;
ce.ATTACK_SUCCEEDED = 1;
ce.DEFENSE_SUCCEEDED = 2;
ce.SPY_SUCCEEDED = 3;
ce.GOT_SUCCESSFULLY_SABOTAGED = 4;
ce.DAILY_MAIL_1 = 5;
ce.DAILY_MAIL_2 = 6;
ce.DAILY_MAIL_3 = 7;
ce.DAILY_MAIL_4 = 8;
ce.DAILY_MAIL_5 = 9;
ce.DAILY_MAIL_6 = 10;
ce.DAILY_MAIL_7 = 11;
ce.DAILY_MAIL_8 = 12;
exports.PrivateOfferHelpTextMessageConst = ce;
ce.__class = "PrivateOfferHelpTextMessageConst";
var _e = function () {
  function PrivatePrimeTimeConst() {}
  PrivatePrimeTimeConst.DEFAULT_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.DEFAULT_SKIN_ID == null) {
      PrivatePrimeTimeConst.DEFAULT_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.DEFAULT_SKIN_ID;
  };
  PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.GOLD_SKIN_ID == null) {
      PrivatePrimeTimeConst.GOLD_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID;
    }
    return PrivatePrimeTimeConst.GOLD_SKIN_ID;
  };
  PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$ = function () {
    if (PrivatePrimeTimeConst.BRICK_SKIN_ID == null) {
      PrivatePrimeTimeConst.BRICK_SKIN_ID = PrivatePrimeTimeConst.START_SKIN_ID + 1;
    }
    return PrivatePrimeTimeConst.BRICK_SKIN_ID;
  };
  PrivatePrimeTimeConst.SKIN_LIST_$LI$ = function () {
    if (PrivatePrimeTimeConst.SKIN_LIST == null) {
      PrivatePrimeTimeConst.SKIN_LIST = [PrivatePrimeTimeConst.GOLD_SKIN_ID_$LI$(), PrivatePrimeTimeConst.BRICK_SKIN_ID_$LI$()];
    }
    return PrivatePrimeTimeConst.SKIN_LIST;
  };
  return PrivatePrimeTimeConst;
}();
_e.USE_NOVELITY_ALGORITHM_SKIN_ID = 1;
_e.START_SKIN_ID = 10;
exports.PrivatePrimeTimeConst = _e;
_e.__class = "PrivatePrimeTimeConst";
var de = function () {
  return function ProductionPackageConst() {};
}();
de.MIN_RECRUITMENT_TIME_PER_UNIT = 15;
de.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM = 10;
de.PRODUCTION_SLOT_SIZE = 5;
de.MAX_AMOUNT_OF_BOOST_APPLICATIONS_PER_PACKAGE = 3;
exports.ProductionPackageConst = de;
de.__class = "ProductionPackageConst";
var me = function () {
  function PushConstants() {}
  PushConstants.PUSHCATEGORY_CONSTRUCTION_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_CONSTRUCTION == null) {
      PushConstants.PUSHCATEGORY_CONSTRUCTION = 2;
    }
    return PushConstants.PUSHCATEGORY_CONSTRUCTION;
  };
  PushConstants.PUSHCATEGORY_MISC_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_MISC == null) {
      PushConstants.PUSHCATEGORY_MISC = 4;
    }
    return PushConstants.PUSHCATEGORY_MISC;
  };
  PushConstants.PUSHCATEGORY_RESSOURCE_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_RESSOURCE == null) {
      PushConstants.PUSHCATEGORY_RESSOURCE = 8;
    }
    return PushConstants.PUSHCATEGORY_RESSOURCE;
  };
  PushConstants.PUSHCATEGORY_TAX_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_TAX == null) {
      PushConstants.PUSHCATEGORY_TAX = 16;
    }
    return PushConstants.PUSHCATEGORY_TAX;
  };
  PushConstants.PUSHCATEGORY_INGAME_EVENTS_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_INGAME_EVENTS == null) {
      PushConstants.PUSHCATEGORY_INGAME_EVENTS = 32;
    }
    return PushConstants.PUSHCATEGORY_INGAME_EVENTS;
  };
  PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK == null) {
      PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK = 64;
    }
    return PushConstants.PUSHCATEGORY_ALLIANCE_ATTACK;
  };
  PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES_$LI$ = function () {
    if (PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES == null) {
      PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES = 128;
    }
    return PushConstants.PUSHCATEGORY_FORWARDED_MESSAGES;
  };
  return PushConstants;
}();
me.SOUND_DEFAULT = "default";
me.SOUND_NO_SOUND = "";
me.PUSHTYPE_ID_INCOMING_ATTACK = 1000;
me.PUSHTYPE_ID_ESPIONAGE_DONE = 1001;
me.PUSHTYPE_ID_ATTACK_DONE = 1002;
me.PUSHTYPE_ID_MARKET_MOVEMENT_DONE = 1003;
me.PUSHTYPE_ID_LOST_OUTPOST = 1004;
me.PUSHTYPE_ID_LOST_VILLAGE = 1005;
me.PUSHTYPE_ID_MESSAGE_RECEIVED = 1007;
me.PUSHTYPE_ID_ALLIANCE_INCOMING_ATTACK = 1008;
me.PUSHTYPE_ID_BACK_ONLINE = 1009;
me.PUSHTYPE_ID_UPDATE_AVAILABLE = 1010;
me.PUSHTYPE_ID_PRIVATE_PRIMETIME = 1039;
me.PUSHTYPE_ID_GLOBAL_PRIMETIME = 1040;
me.PUSHTYPE_ID_UPGRADE = 2000;
me.PUSHTYPE_ID_DESTRUCTION = 2001;
me.PUSHTYPE_ID_BUILDUP = 2002;
me.PUSHTYPE_ID_TAXCOLLECT = 2004;
me.PUSHTYPE_ID_DESERTINGUNITS = 2005;
me.PUSHTYPE_ID_UNITSREADY = 2006;
me.PUSHTYPE_ID_TOOLSBUILT = 2007;
me.PUSHTYPE_ID_RESEARCHCOMPLETED = 2008;
me.PUSHTYPE_ID_STORAGEFULL = 2009;
me.PUSHTYPE_ID_RETENTION_1 = 2010;
me.PUSHTYPE_ID_RETENTION_2 = 2011;
me.PUSHTYPE_ID_RETENTION_3 = 2012;
me.PUSHTYPE_ID_RETENTION_4 = 2013;
me.PUSHTYPE_ID_RETENTION_5 = 2014;
me.PUSHTYPE_ID_RETENTION_6 = 2015;
me.PUSHTYPE_ID_RETENTION_7 = 2016;
me.PUSHTYPE_ID_RETENTION_8 = 2017;
me.PUSHTYPE_ID_RETENTION_9 = 2018;
me.PUSHTYPE_ID_RETENTION_10 = 2019;
me.PUSHTYPE_ID_RETENTION_11 = 2020;
me.PUSHTYPE_ID_INACTIVITY_WARNING = 2021;
me.PUSHTYPE_ID_FINISHED_REPAIR = 2022;
me.PUSHTYPE_ID_MERCENARY_MISSION_COMPLETE = 2023;
me.PUSHTYPE_ID_MERCENARY_MISSION_AVAILABLE = 2024;
me.PUSHTYPE_ID_ACTIVITY_CHEST_1 = 2051;
me.PUSHTYPE_ID_ACTIVITY_CHEST_2 = 2052;
me.PUSHTYPE_ID_ACTIVITY_CHEST_3 = 2053;
me.PUSHTYPE_ID_ACTIVITY_CHEST_4 = 2054;
me.PUSHTYPE_ID_ACTIVITY_CHEST_5 = 2055;
me.PUSHTYPE_ID_ACTIVITY_CHEST_6 = 2056;
me.PUSHTYPE_ID_LOGIN_BONUS_1 = 2061;
me.PUSHTYPE_ID_LOGIN_BONUS_2 = 2062;
me.PUSHTYPE_ID_LOGIN_BONUS_3 = 2063;
me.PUSHTYPE_ID_LOGIN_BONUS_4 = 2064;
me.PUSHTYPE_ID_LOGIN_BONUS_5 = 2065;
me.PUSHTYPE_ID_LOGIN_BONUS_6 = 2066;
me.PUSHTYPE_ID_LOGIN_BONUS_7 = 2067;
me.PUSHTYPE_ID_INACTIVITY = 2071;
me.PUSHTYPE_ID_RESEARCH_COMPLETE = 2072;
me.PUSHCATEGORY_NO_CATEGORY = 0;
me.PUSHCATEGORY_MILITARY = 1;
exports.PushConstants = me;
me.__class = "PushConstants";
var he = function () {
  function RecruitmentConst() {}
  RecruitmentConst.getSkipCostC2 = function (e, t, n) {
    return t * (e / n) | 0;
  };
  return RecruitmentConst;
}();
he.FINISH_FIRST_STACK_MODE_ID = 0;
he.FINISH_STACKS_EQUALLY_MODE_ID = 1;
he.SLOT_IS_PERMANENTLY_UNLOCKED = -1;
he.SLOT_IS_LOCKED = 0;
he.PRODUCTION_SLOT_TYPE_NAME = "production";
he.QUEUE_SLOT_TYPE_NAME = "queue";
he.INVALID_SLOT_ID = -1;
he.NO_SOURCE_ID = -1;
he.CONTAINS_SOLDIERS = true;
he.CONTAINS_TOOLS = false;
he.MAXIMUM_PREMIUM_TOOL_STACK_SIZE = 500;
he.CHEATED_DURATION_PER_PACKAGE = 5;
he.END_TIMESTAMP_IN_THE_PAST = -1;
he.START_TIMESTAMP_IN_THE_PAST = -1;
he.MINIMUM_STACK_SIZE_FOR_ALLIANCE_HELP = 5;
exports.RecruitmentConst = he;
he.__class = "RecruitmentConst";
var pe = function () {
  function RelicItemConst() {}
  RelicItemConst.calculateRelicItemMightValue = function (e) {
    return 1000 + e * 10;
  };
  RelicItemConst.calculateFragmentSellValue = function (e) {
    return e / 10 | 0;
  };
  RelicItemConst.calculateFragmentSellMinValue = function () {
    return 100;
  };
  RelicItemConst.calculateFragmentSellMaxValue = function (e) {
    return (1 + e) * 100;
  };
  RelicItemConst.isTombolaID = function (e) {
    return e < 0;
  };
  return RelicItemConst;
}();
pe.INSERT_RELIC_GEM_C1_COST = 95000;
pe.EXTRACT_RELIC_GEM_RELIC_FRAGMENT_COST = 2000;
exports.RelicItemConst = pe;
pe.__class = "RelicItemConst";
var ge = function () {
  function RelocationConst() {}
  RelocationConst.RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.RELOCATION_DURATION == null) {
      RelocationConst.RELOCATION_DURATION = [600, 21600];
    }
    return RelocationConst.RELOCATION_DURATION;
  };
  RelocationConst.RELOCATION_COST_C2_$LI$ = function () {
    if (RelocationConst.RELOCATION_COST_C2 == null) {
      RelocationConst.RELOCATION_COST_C2 = [0, 5000, 20000, 35000];
    }
    return RelocationConst.RELOCATION_COST_C2;
  };
  RelocationConst.RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.RELOCATION_COOLDOWN == null) {
      RelocationConst.RELOCATION_COOLDOWN = 1209600;
    }
    return RelocationConst.RELOCATION_COOLDOWN;
  };
  RelocationConst.getRelocationCost = function (e) {
    var t = e;
    if (RelocationConst.RELOCATION_COST_C2_$LI$().length <= e) {
      t = RelocationConst.RELOCATION_COST_C2_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_COST_C2_$LI$()[t];
  };
  RelocationConst.getRelocationTime = function (e) {
    var t = e - 1;
    if (RelocationConst.RELOCATION_DURATION_$LI$().length <= e) {
      t = RelocationConst.RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.RELOCATION_DURATION_$LI$()[t];
  };
  RelocationConst.getRelocationTimeForTesting = function (e) {
    var t = e - 1;
    if (RelocationConst.TEST_RELOCATION_DURATION_$LI$().length <= e) {
      t = RelocationConst.TEST_RELOCATION_DURATION_$LI$().length - 1;
    }
    return RelocationConst.TEST_RELOCATION_DURATION_$LI$()[t];
  };
  RelocationConst.TEST_RELOCATION_DURATION_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_DURATION == null) {
      RelocationConst.TEST_RELOCATION_DURATION = [180, 300];
    }
    return RelocationConst.TEST_RELOCATION_DURATION;
  };
  RelocationConst.TEST_RELOCATION_COOLDOWN_$LI$ = function () {
    if (RelocationConst.TEST_RELOCATION_COOLDOWN == null) {
      RelocationConst.TEST_RELOCATION_COOLDOWN = 180;
    }
    return RelocationConst.TEST_RELOCATION_COOLDOWN;
  };
  return RelocationConst;
}();
ge.MIN_RELOCATION_LEVEL = 6;
exports.RelocationConst = ge;
ge.__class = "RelocationConst";
var Ee = function () {
  function ResearchConst() {}
  ResearchConst.getFastCompleteCostC2 = function (e, t) {
    return Math.ceil(e * 1 / 60 * C.getInstantCostC2PerMinuteFor(t)) | 0;
  };
  ResearchConst.RESOURCE_TYPES_TO_MODIFY_$LI$ = function () {
    if (ResearchConst.RESOURCE_TYPES_TO_MODIFY == null) {
      ResearchConst.RESOURCE_TYPES_TO_MODIFY = [p.FOOD, p.WOOD, p.STONE, p.COAL, p.OIL, p.GLASS, p.IRON, p.AQUAMARINE, p.MEAD, p.HONEY, p.BEEF];
    }
    return ResearchConst.RESOURCE_TYPES_TO_MODIFY;
  };
  return ResearchConst;
}();
exports.ResearchConst = Ee;
Ee.__class = "ResearchConst";
var Ce = function () {
  function ResourceCartConst() {}
  ResourceCartConst.CHARGETIME_$LI$ = function () {
    if (ResourceCartConst.CHARGETIME == null) {
      ResourceCartConst.CHARGETIME = [900, 21600, 10800];
    }
    return ResourceCartConst.CHARGETIME;
  };
  return ResourceCartConst;
}();
Ce.MIN_LEVEL = 5;
exports.ResourceCartConst = Ce;
Ce.__class = "ResourceCartConst";
var fe = function () {
  function ResourceConst() {}
  ResourceConst.RESOURCE_FACTORS_$LI$ = function () {
    if (ResourceConst.RESOURCE_FACTORS == null) {
      ResourceConst.RESOURCE_FACTORS = [ResourceConst.WOOD_FACTOR, ResourceConst.STONE_FACTOR, ResourceConst.FOOD_FACTOR, ResourceConst.COAL_FACTOR, ResourceConst.OIL_FACTOR, ResourceConst.GLASS_FACTOR, ResourceConst.AQUAMARINE_FACTOR, ResourceConst.IRON_FACTOR, ResourceConst.HONEY_FACTOR, ResourceConst.MEAD_FACTOR, ResourceConst.BEEF_FACTOR];
    }
    return ResourceConst.RESOURCE_FACTORS;
  };
  ResourceConst.getC2PriceForResources = function (e) {
    var t = 0;
    for (var n = 0; n < e.length; n++) {
      t += ResourceConst.RESOURCE_FACTORS_$LI$()[n] * e[n];
    }
    return (Math.ceil(t * ResourceConst.ONE_CLICK_FACTOR / 100) | 0) * 100;
  };
  ResourceConst.getCombinedProductionModifier = function (e, t, n) {
    return n * t * e;
  };
  return ResourceConst;
}();
fe.PRODUCTION_INTERVAL = 3600;
fe.NO_RIOT = 0;
fe.RIOT_INCREASE = 5;
fe.PRICE_FOR_PACKAGE = 1;
fe.PRICE_FOR_BUILDING = 2;
fe.WOOD_FACTOR = 0.25;
fe.STONE_FACTOR = 0.22;
fe.FOOD_FACTOR = 0.19;
fe.COAL_FACTOR = 0.41;
fe.OIL_FACTOR = 0.57;
fe.GLASS_FACTOR = 0.79;
fe.IRON_FACTOR = 1.5;
fe.AQUAMARINE_FACTOR = 1000;
fe.MEAD_FACTOR = 0.25;
fe.HONEY_FACTOR = 0.19;
fe.BEEF_FACTOR = 0.25;
fe.ONE_CLICK_FACTOR = 1.12;
fe.MEAD_HOHEY_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
fe.BEEF_UNLOCK_PLAYER_LEGEND_LEVEL = 650;
fe.MIN_LEVEL_FOR_RESOURCE_TRADER_BUTTON_FOR_PACKAGES = 70;
exports.ResourceConst = fe;
fe.__class = "ResourceConst";
var Te = function () {
  return function RewardConst() {};
}();
Te.PLAYER = 0;
Te.ALLIANCE = 1;
Te.ALLIANCE_MEMBER = 2;
Te.DECO_GRANT_TYPE_NORMAL = 0;
Te.DECO_GRANT_TYPE_GLOBAL = 1;
Te.DECO_GRANT_TYPE_AREA_SPECIFIC = 2;
Te.OFFER_ID_FOR_C2_INVITER_REWARD = 2209;
exports.RewardConst = Te;
Te.__class = "RewardConst";
var Se = function () {
  function SceatSkillConst() {}
  SceatSkillConst.getFastCompleteCostC2 = function (e, t) {
    return Math.ceil(e * 1 / 60 * C.getInstantCostC2PerMinuteFor(t)) | 0;
  };
  return SceatSkillConst;
}();
exports.SceatSkillConst = Se;
Se.__class = "SceatSkillConst";
var ye = function () {
  function SeasonConst() {}
  SeasonConst.calculateMaxPromotion = function (e) {
    return Math.max(1, Math.min(Math.floor(e * SeasonConst.MAX_POINTS_PER_DAY / SeasonConst.POINTS_PER_PROMOTION) + 1, 21)) | 0;
  };
  SeasonConst.calculateSeasonPassPrice = function (e, t, n, i) {
    return Math.max(0, (e - 1) * t + n * i - 2);
  };
  SeasonConst.calculateSeasonPassC2Cost = function (e, t, n, i, a) {
    return Math.max(e - (t * n + i * a), 0);
  };
  return SeasonConst;
}();
ye.GOLD_MEDAL_ID = 1;
ye.SILVER_MEDAL_ID = 2;
ye.BRONZE_MEDAL_ID = 3;
ye.PASS_TYPE_SEASON = 1;
ye.PASS_TYPE_EVENT_END = 2;
ye.PASS_TYPE_PROMOTION = 3;
ye.MAX_POINTS_PER_DAY = 1000;
ye.POINTS_PER_PROMOTION = 2000;
exports.SeasonConst = ye;
ye.__class = "SeasonConst";
var Ie = function () {
  return function ShadowUnitConst() {};
}();
Ie.DEFAULT_AREA_ID = -333;
Ie.DEFAULT_OWNER_ID = -333;
Ie.SHADOW_LORDS_ID = -333;
Ie.DEFAULT_NAME = "-333";
exports.ShadowUnitConst = Ie;
Ie.__class = "ShadowUnitConst";
var ve = function () {
  return function SharedCastleDefense(e) {
    this.leftSide = new Array(e);
    this.middleSide = new Array(e);
    this.rightSide = new Array(e);
  };
}();
exports.SharedCastleDefense = ve;
ve.__class = "SharedCastleDefense";
var Ae = function () {
  return function ShoppingCartConst() {};
}();
Ae.DEFAULT_SKIN = 0;
Ae.OPTIONS_PER_GROUP = 6;
Ae.TOTAL_OPTIONS_AMOUNT = 18;
Ae.SHOPPING_CART_SIZE = 9;
Ae.SHOPPING_CART_GROUP_SIZE = 3;
Ae.SHOPPING_CART_CATEGORY_SIZE = 3;
Ae.DEFAULT_AMOUNT_BUYABLE = 3;
Ae.LIFE_TIME_GROUP_AMOUNT = 4;
Ae.TOTAL_OPTIONS_PER_TYPE = 12;
exports.ShoppingCartConst = Ae;
Ae.__class = "ShoppingCartConst";
var Oe = function () {
  return function SplitRunConst() {};
}();
Oe.SKIP_GROUP_PARAM = "inSkipGroup";
Oe.BUY_LEVEL_TEST_NAME = "buyLevel";
Oe.BUY_LEVEL_TEST_PARAM = "inBuyLevelGroup";
Oe.MIN_LEVEL_TO_BUY_LEVEL = 10;
Oe.MAX_LEVEL_TO_BUY_LEVEL = 69;
exports.SplitRunConst = Oe;
Oe.__class = "SplitRunConst";
var Le = function () {
  function SpyConst() {}
  SpyConst.SPY_VALIDITY_$LI$ = function () {
    if (SpyConst.SPY_VALIDITY == null) {
      SpyConst.SPY_VALIDITY = 172800;
    }
    return SpyConst.SPY_VALIDITY;
  };
  SpyConst.MAX_SABOTAGE_COOLDOWN_$LI$ = function () {
    if (SpyConst.MAX_SABOTAGE_COOLDOWN == null) {
      SpyConst.MAX_SABOTAGE_COOLDOWN = 43200;
    }
    return SpyConst.MAX_SABOTAGE_COOLDOWN;
  };
  SpyConst.SABOTAGE_PROTECTION_WINDOW_$LI$ = function () {
    if (SpyConst.SABOTAGE_PROTECTION_WINDOW == null) {
      SpyConst.SABOTAGE_PROTECTION_WINDOW = 345600;
    }
    return SpyConst.SABOTAGE_PROTECTION_WINDOW;
  };
  SpyConst.getRatioGuardSpy = function () {
    return SpyConst.MAX_GUARD / SpyConst.MAX_SPY;
  };
  SpyConst.getRatioAccuracy = function () {
    return 50 - (SpyConst.MAX_ACCURACY + SpyConst.MIN_ACCURACY) / 2;
  };
  SpyConst.getRatioDamage = function () {
    return 50 - (SpyConst.MAX_DAMAGE + SpyConst.MIN_DAMAGE) / 2;
  };
  SpyConst.getSpyRisk = function (e, t, n, i, a) {
    var s = SpyConst.MIN_RISK_SPY_PLAYER;
    if (!!i || !a) {
      s = SpyConst.MIN_RISK_SPY_DUNGEON;
    }
    var r = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * e - t) + SpyConst.getRatioAccuracy() + n, SpyConst.MAX_RISK_SPY), s);
    var o = Math.max(Math.min(Math.floor(t * 1 / e / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioAccuracy() + n)), SpyConst.MAX_RISK_SPY), s);
    return Math.round((r + o) / 2);
  };
  SpyConst.getSabotageRisk = function (e, t, n) {
    var i = Math.max(Math.min(-(SpyConst.getRatioGuardSpy() * e - t) + SpyConst.getRatioDamage() + n, SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    var a = Math.max(Math.min(Math.floor(t * 1 / e / SpyConst.getRatioGuardSpy() * (SpyConst.getRatioDamage() + n)), SpyConst.MAX_RISK_SABOTAGE), SpyConst.MIN_RISK_SABOTAGE);
    return Math.round((i + a) / 2);
  };
  SpyConst.getTravelCostC1 = function (e, t, n) {
    return (e * 20 * Math.log(t + 1) / Math.log(2.3) + n - 20) * 0.6 | 0;
  };
  SpyConst.getHorseCostC1 = function (e, t, n, i) {
    return n * (Math.ceil((t * Math.log(e + 1) / Math.log(2.3) * 20 + i - 20) * 0.2) | 0);
  };
  SpyConst.getHorseCostC2 = function (e, t, n) {
    var i = (Math.sqrt(e + 60) * -25 * Math.pow(1.5, Math.pow(e + 60, 2) * -0.0002) + 145) * 1.5 * (1 + t / 28) | 0;
    return Math.round(i * n);
  };
  return SpyConst;
}();
Le.SPY_QUEST_ID = 2147;
Le.TRAVELSPEED_SABOTAGE = 50;
Le.TRAVELSPEED_SPY = 450;
Le.MAX_GUARD = 180;
Le.MAX_SPY = 15;
Le.MAX_DEPLOYABLE_PLAGUEMONKS = 20;
Le.MAX_OWNABLE_PLAGUEMONKS = 200;
Le.MIN_RISK_SPY_PLAYER = 5;
Le.MIN_RISK_SPY_DUNGEON = 0;
Le.MAX_RISK_SPY = 95;
Le.MIN_RISK_SABOTAGE = 10;
Le.MAX_RISK_SABOTAGE = 90;
Le.MIN_ACCURACY = 50;
Le.MAX_ACCURACY = 100;
Le.MIN_DAMAGE = 10;
Le.MAX_DAMAGE = 50;
Le.PLAGUEMONK_OWNER_ID = -334;
Le.PLAGUEMONK_DISTANCE_TO_TARGET = 10;
Le.DAMAGE_PER_BUILDING = 10;
Le.DAMAGE_PER_SPY = 0.02;
Le.QUEST_ID_DEFENSE = 0;
Le.QUEST_ID_ECO = 1;
Le.MAX_DELTA_LEVEL_SPY = 50;
Le.MIN_LEVEL_SPY_ALL = 50;
Le.SABTOAGE_PROTECTION_THRESHOLD = 12;
exports.SpyConst = Le;
Le.__class = "SpyConst";
var De = function () {
  return function StatisticsConst() {};
}();
De.CONTRIBUTION_TO_ALLIANCE_INFLUENCE = 1;
De.CITY_STATES_CONQUERED = 2;
De.CAPITALS_ATTACKED = 3;
De.INFLUENCE_FROM_CITY_STATES = 4;
De.INFLUENCE_FROM_ENEMY_CASTLES = 5;
De.INFLUENCE_FROM_ENEMY_CAPITALS = 6;
De.CONTRIBUTION_TO_ALLIANCE_TOWER_POINTS = 7;
De.ALLIANCE_TOWERS_DEFEATED = 8;
De.ALLIANCE_TOWERS_DEFENDED = 9;
De.ALLIANCE_CASTLES_DEFENDED = 10;
De.TOWER_EFFECT_BUFFS_ACTIVATED = 11;
De.TOWER_EFFECT_BUFFS_PURCHASED = 12;
De.SUPPORT_TROOPS_SENT_TO_ALLIANCE_TOWERS = 13;
De.RESOURCE_TOWERS_DEFEATED = 14;
De.AQUAMARINE_TOTAL = 15;
De.AQUAMARINE_RESOURCE_ISLE = 16;
De.AQUAMARINE_STORM_FORTRESS = 17;
De.AQUAMARINE_PVP = 18;
De.AQUAMARINE_SPENT = 19;
De.AQUAMARINE_LOST_PVP = 20;
exports.StatisticsConst = De;
De.__class = "StatisticsConst";
var be = function () {
  function SubscriptionConst() {}
  SubscriptionConst.PLAYER_TYPE_PACKAGES_$LI$ = function () {
    if (SubscriptionConst.PLAYER_TYPE_PACKAGES == null) {
      SubscriptionConst.PLAYER_TYPE_PACKAGES = [SubscriptionConst.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID, SubscriptionConst.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID];
    }
    return SubscriptionConst.PLAYER_TYPE_PACKAGES;
  };
  return SubscriptionConst;
}();
be.PLAYER_SUBSCRIPTION_PACKAGE_TYPE_ID = 1;
be.ALLIANCE_SUBSCRIPTION_PACKAGE_TYPE_ID = 2;
be.PLAYER_SUBSCRIPTION_PREMIUM_PACKAGE_TYPE_ID = 3;
exports.SubscriptionConst = be;
be.__class = "SubscriptionConst";
var Ne = function () {
  return function SurveyConst() {};
}();
Ne.MAX_ANSWER_LENGTH = 1000;
Ne.QUESTION_TYPE_TEXT = 0;
Ne.QUESTION_TYPE_RADIO = 1;
Ne.QUESTION_TYPE_CHECKBOX = 2;
exports.SurveyConst = Ne;
Ne.__class = "SurveyConst";
var Re = function () {
  function TaxConst() {}
  TaxConst.COLLECTOR_DURATION_$LI$ = function () {
    if (TaxConst.COLLECTOR_DURATION == null) {
      TaxConst.COLLECTOR_DURATION = [600, 1800, 5400, 10800, 21600, 43200, 86400];
    }
    return TaxConst.COLLECTOR_DURATION;
  };
  TaxConst.START_COST_C2_$LI$ = function () {
    if (TaxConst.START_COST_C2 == null) {
      TaxConst.START_COST_C2 = [0, 0, 0, 0, 0, 125, 300];
    }
    return TaxConst.START_COST_C2;
  };
  TaxConst.START_COST_C1_PERC_$LI$ = function () {
    if (TaxConst.START_COST_C1_PERC == null) {
      TaxConst.START_COST_C1_PERC = [0, 0.1, 0.1, 0.1, 0.1, 0, 0];
    }
    return TaxConst.START_COST_C1_PERC;
  };
  TaxConst.COLLECTOR_LOSS_$LI$ = function () {
    if (TaxConst.COLLECTOR_LOSS == null) {
      TaxConst.COLLECTOR_LOSS = [1, 0.66, 0.44, 0.33, 0.25, 0.3, 0.4];
    }
    return TaxConst.COLLECTOR_LOSS;
  };
  TaxConst.getCollectorC1Costs = function (e, t, n, i, a, s) {
    if (e >= 5 && t > 0) {
      return 0;
    }
    var r = TaxConst.START_COST_C1_PERC_$LI$()[e];
    if ((a || i) && e === 5 || s && e >= 5) {
      r = 0.1;
    }
    return Math.floor(TaxConst.getCollectorIncome(e, n) * r) | 0;
  };
  TaxConst.getCollectorC2Costs = function (e, t, n, i, a) {
    if (e === 5 && (i || t === ue.PREMIUM_ACCOUNT_SILVER || t === ue.PREMIUM_ACCOUNT_GOLD || n)) {
      return 0;
    } else if (e !== 6 || !a && t !== ue.PREMIUM_ACCOUNT_GOLD) {
      return TaxConst.START_COST_C2_$LI$()[e];
    } else {
      return 0;
    }
  };
  TaxConst.getCollectorIncome = function (e, t) {
    var n = t * 2;
    return Math.round(TaxConst.COLLECTOR_LOSS_$LI$()[e] * TaxConst.COLLECTOR_DURATION_$LI$()[e] / 3600 * n);
  };
  TaxConst.applyCollectionBoosts = function (e, t, n, i) {
    var a = 1;
    if (t) {
      a += d.TAX_BRIBE_BOOST;
    }
    e *= a += i / 100;
    e *= n;
    return Math.round(e);
  };
  TaxConst.getCollectedMoney = function (e, t, n, i, a, s) {
    var r;
    var o = TaxConst.COLLECTOR_DURATION_$LI$()[e];
    r = t > 0 ? (o - t) / (o * 1) * n : n;
    return TaxConst.applyCollectionBoosts(r, i, a, s);
  };
  TaxConst.getCollectorC2CostsNoVip = function (e, t, n) {
    var i = TaxConst.START_COST_C2_$LI$()[e];
    if ((e === 5 || e === 6) && t > ue.PREMIUM_ACCOUNT_BRONZE) {
      if (e === 5 || t === ue.PREMIUM_ACCOUNT_GOLD) {
        i = 0;
      }
    }
    if (n && e === 5) {
      i = 0;
    }
    return i;
  };
  return TaxConst;
}();
exports.TaxConst = Re;
Re.__class = "TaxConst";
var Pe = function () {
  return function TempServerConst() {};
}();
Pe.NORMAL_SERVER_EVENT_JOIN_LEVEL = 70;
Pe.TEMP_SERVER_EVENT_JOIN_LEVEL = 11;
Pe.HIGHSCORE_COLLECTOR = "collector";
Pe.HIGHSCORE_MIGHT = "might";
Pe.HIGHSCORE_RANK_SWAP = "rankSwap";
exports.TempServerConst = Pe;
Pe.__class = "TempServerConst";
var Be = function () {
  return function ThirdPartyAuthConst() {};
}();
Be.PLATFORM_APPLE = "apple";
Be.PLATFORM_FACEBOOK = "facebook";
exports.ThirdPartyAuthConst = Be;
Be.__class = "ThirdPartyAuthConst";
var Me = function () {
  return function TimeConst() {};
}();
Me.SUNDAY = 1;
Me.MONDAY = 2;
Me.TUESDAY = 3;
Me.WEDNESDAY = 4;
Me.THURSDAY = 5;
Me.FRIDAY = 6;
Me.SATURDAY = 7;
exports.TimeConst = Me;
Me.__class = "TimeConst";
var Fe = function () {
  function TimeLimitedCampaignConst() {}
  TimeLimitedCampaignConst.calculateEndRewardPurchaseCost = function (e, t, n) {
    var i = e * (1 - n / t) | 0;
    return i - i % TimeLimitedCampaignConst.END_REWARD_VALUE_REMAINDER_DIVISOR;
  };
  return TimeLimitedCampaignConst;
}();
Fe.NO_SKIN = -1;
Fe.QUEST_STATUS_NEW = "N";
Fe.QUEST_STATUS_INPROGRESS = "I";
Fe.QUEST_STATUS_FAILED = "F";
Fe.QUEST_STATUS_COMPLETE = "C";
Fe.DEFAULT_END_REWARD_VALUE = 1000000;
Fe.END_REWARD_VALUE_REMAINDER_DIVISOR = 10000;
exports.TimeLimitedCampaignConst = Fe;
Fe.__class = "TimeLimitedCampaignConst";
var Ue = function () {
  return function TombolaConst() {};
}();
Ue.BATCH_OPENING_SPIN_CAP = 100;
exports.TombolaConst = Ue;
Ue.__class = "TombolaConst";
var Ge = function () {
  function TrackingConst() {}
  TrackingConst.wasAutofieldUsed = function (e) {
    return (e & TrackingConst.TRACKING_AUTOFILL_USED) != 0;
  };
  TrackingConst.wasAutofieldToolsBefore = function (e) {
    return (e & TrackingConst.TRACKING_AUTOFILL_TOOLS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldSoldiersBefore = function (e) {
    return (e & TrackingConst.TRACKING_AUTOFILL_SOLDIERS_BEFORE) != 0;
  };
  TrackingConst.wasAutofieldModified = function (e) {
    return (e & TrackingConst.TRACKING_AUTOFILL_MODIFIED) != 0;
  };
  return TrackingConst;
}();
Ge.TRACKING_ID_MOVEMENTS = 901;
Ge.TRACKING_AUTOFILL_USED = 1;
Ge.TRACKING_AUTOFILL_TOOLS_BEFORE = 2;
Ge.TRACKING_AUTOFILL_SOLDIERS_BEFORE = 4;
Ge.TRACKING_AUTOFILL_MODIFIED = 8;
exports.TrackingConst = Ge;
Ge.__class = "TrackingConst";
var ke = function () {
  function TrainingConst() {}
  TrainingConst.calculateProlongationDuration = function (e) {
    return e / 2 | 0;
  };
  return TrainingConst;
}();
exports.TrainingConst = ke;
ke.__class = "TrainingConst";
var we = function () {
  function TravelConst() {}
  TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.BASIC_FIELD_TRAVEL_TIME == null) {
      TravelConst.BASIC_FIELD_TRAVEL_TIME = 600;
    }
    return TravelConst.BASIC_FIELD_TRAVEL_TIME;
  };
  TravelConst.MAX_FALLBACK_TIME_$LI$ = function () {
    if (TravelConst.MAX_FALLBACK_TIME == null) {
      TravelConst.MAX_FALLBACK_TIME = 600;
    }
    return TravelConst.MAX_FALLBACK_TIME;
  };
  TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$ = function () {
    if (TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS == null) {
      TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS = 43200;
    }
    return TravelConst.MAX_SLOWDOWN_DURATION_IN_SECONDS;
  };
  TravelConst.PLAGUE_TRAVEL_TIME_$LI$ = function () {
    if (TravelConst.PLAGUE_TRAVEL_TIME == null) {
      TravelConst.PLAGUE_TRAVEL_TIME = 600;
    }
    return TravelConst.PLAGUE_TRAVEL_TIME;
  };
  TravelConst.getPlagueTravelTime = function (e) {
    return TravelConst.getSpecialTravelTime(e, TravelConst.PLAGUE_TRAVEL_TIME_$LI$());
  };
  TravelConst.getSpecialTravelTime = function (e, t) {
    var n = t;
    if (e) {
      n = TravelConst.TRAVEL_BOOST_CHEAT;
    }
    return n;
  };
  TravelConst.getArmySightRadius = function (e) {
    return Math.max(Math.pow(e, 0.4) * 0.6, TravelConst.DEFAULT_SIGHT_RADIUS);
  };
  TravelConst.getSupportDurationCostC2 = function (e, t, n, i) {
    var a = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE;
    if (n || i) {
      a = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL;
    } else if (t) {
      a = TravelConst.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED;
    }
    return Math.max(0, (e - a) * TravelConst.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST);
  };
  TravelConst.getTravelCostC1 = function (e, t, n, i) {
    var a = (100 - n) * (100 - i) / 10000;
    return Math.max(0, Math.ceil(a * 0.6 * (t * Math.log(e + 1) / Math.log(2.3)))) | 0;
  };
  TravelConst.getAttackTravelCostC1 = function (e, t, n, i, a, s, r) {
    var o = TravelConst.getTravelCostC1(e, t, n, i);
    if (a <= s) {
      return o;
    } else {
      return Math.min(Math.exp(r * (a - s)) * o, 2147483647) | 0;
    }
  };
  TravelConst.getRedeployTravelCostC1 = function (e, t, n, i) {
    return TravelConst.getTravelCostC1(e, t, n, i) / 2 | 0;
  };
  TravelConst.getTravelBoostCostC2 = function (e) {
    return Math.ceil(Math.pow(e, 0.5) * 179) | 0;
  };
  TravelConst.getTravelTime = function (e, t, n, i, a) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(e, t, n, i, a)) | 0;
  };
  TravelConst.getTravelTimeWithTitle = function (e, t, n, i, a, s) {
    return Math.floor(TravelConst.getTravelTimeAsFloat(e, t, n, i + a, s)) | 0;
  };
  TravelConst.getTravelTimeAsFloat = function (e, t, n, i, a) {
    var s = i / 100;
    var r = e / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (n + s);
    if (a) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    } else {
      return t / r;
    }
  };
  TravelConst.getHorseCostC1 = function (e, t, n) {
    return n * (Math.ceil(t * Math.log(e + 1) / Math.log(2.3) * 0.2) | 0);
  };
  TravelConst.getHorseCostC2 = function (e, t, n) {
    var i = (Math.sqrt(e + 60) * -25 * Math.pow(1.5, Math.pow(e + 60, 2) * -0.0002) + 145) * 1.5 * (1 + t / 1100) | 0;
    return Math.round(Math.max(1, i) * n);
  };
  TravelConst.getTravelTimeWithHorseAndWithoutLowLevelBoost = function (e, t, n, i, a, s, r) {
    return TravelConst.getTravelTimeWithHorse(e, t, n, i, a, s, r);
  };
  TravelConst.getTravelTimeWithHorse = function (e, t, n, i, a, s, r) {
    if (r) {
      return TravelConst.TRAVEL_BOOST_CHEAT;
    }
    var o;
    var l = e / 10 / TravelConst.BASIC_FIELD_TRAVEL_TIME_$LI$() * (n + a / 100);
    if (t < TravelConst.LOW_DISTANCE_BOOST_FIELDS) {
      o = 1 + i / 100 / TravelConst.HORSE_BOOST_FIELDS * 60 * (Math.log(s / 2 + 1) / Math.log(8));
    } else if (i > 0) {
      o = 1 + i / 100 / TravelConst.HORSE_BOOST_FIELDS * (s - 10);
      t -= 10;
    } else {
      o = 1 + i / 100 / TravelConst.HORSE_BOOST_FIELDS * s;
    }
    var u = t / (l *= o);
    return Math.floor(u) | 0;
  };
  TravelConst.getInstantSpyHorseTravelTime = function (e) {
    return Math.floor(Math.log(e) / Math.log(10) + 1) | 0;
  };
  TravelConst.getTravelTimeWithTitleAndHorse = function (e, t, n, i, a, s, r, o, l, u) {
    return TravelConst.getTravelTimeWithHorse(e, t, n + u, i, a + r + o, s, l);
  };
  TravelConst.calculateSightDistance = function (e, t, n, i, a, s, r) {
    var o = s - i;
    var l = r - a;
    if (o === 0 && l === 0) {
      return NaN;
    }
    var u = i - t;
    var c = a - n;
    var _ = o * o + l * l;
    var d = (o * 2 * u + l * 2 * c) / _;
    var m = d * d / 4 - (u * u + c * c - e * e) / _;
    if (m < 0) {
      return NaN;
    }
    var h = -d / 2 - Math.sqrt(m);
    var p = -d / 2 + Math.sqrt(m);
    if (h < 0 && p < 0) {
      return NaN;
    }
    if (h > 1 && p > 1) {
      return NaN;
    }
    var g = Math.max(0, Math.min(h, p));
    return Math.sqrt(g * o * g * o + g * l * g * l);
  };
  TravelConst.calculateLowLevelBoost = function (e, t) {
    if (t || e >= TravelConst.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST) {
      return 0;
    } else {
      return (Math.max(0, e * -0.1667 + 4.167) * 100 | 0) / 100;
    }
  };
  return TravelConst;
}();
we.GUESS_SIZE_PRECISION = 3;
we.DEFAULT_SIGHT_RADIUS = 6;
we.INNER_CIRCLE_DIVISOR = 2;
we.TRAVEL_PREMIUM_COMMANDER_COSTS_C2 = 125;
we.KINGDOM_TOOL_TRAVEL_COST_C1 = 100;
we.TRAVEL_BOOST_TUTORIAL = 20;
we.BARON_SPEED = 2;
we.CAPITAL_CONQUER_SPEED = 5;
we.CAPITAL_CONQUER_MIN_ATTACK_DISTANCE = 6;
we.CAPITAL_CONQUER_MAX_ATTACK_DISTANCE = 144;
we.CAPITAL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
we.METROPOL_CONQUER_SPEED = 5;
we.METROPOL_CONQUER_MIN_ATTACK_DISTANCE = 6;
we.METROPOL_CONQUER_MAX_ATTACK_DISTANCE = 144;
we.METROPOL_CONQUER_MIN_BIG_SIGHT_RADIUS = 30;
we.DEFENSE_SUPPORT_DURATION_HOURS_MAX = 99;
we.DEFENSE_SUPPORT_DURATION_HOURS_FREE = 12;
we.DEFENSE_SUPPORT_DURATION_HOURS_FREE_OCCUPIED = 24;
we.DEFENSE_SUPPORT_DURATION_HOURS_FREE_CAPITAL_METROPOL = 72;
we.DEFENSE_SUPPORT_DURATION_HOURLY_C2_COST = 275;
we.SLOWDOWN_C2_COSTS = 200;
we.TRAVEL_BOOST_CHEAT = 5;
we.HORSE_BOOST_FIELDS = 10;
we.LOW_DISTANCE_BOOST_FIELDS = 100;
we.ALIEN_TRAVEL_DISTANCE = 50;
we.NOMAD_TRAVEL_DISTANCE = 2;
we.SAMURAI_TRAVEL_DISTANCE = 2;
we.FACTION_TRAVEL_DISTANCE = 5;
we.ALLIANCE_INVASION_CAMP_TRAVEL_DISTANCE = 2;
we.COLLECTOR_TRAVEL_DISTANCE = 50;
we.TEMPSERVER_RANKSWAP_TRAVEL_DISTANCE = 25.2;
we.DAIMYO_CASTLE_TRAVEL_DISTANCE = 2;
we.DAIMYO_TOWNSHIP_TRAVEL_DISTANCE = 2;
we.DAIMYO_TAUNT_TRAVEL_DISTANCE = 2;
we.ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER_DISTANCE = 10;
we.ALLIANCE_BATTLE_GROUND_TOWER_DISTANCE = 25;
we.WOLFKING_TRAVEL_DISTANCE = 1;
we.WOLFKING_TAUNT_TRAVEL_DISTANCE = 0.5;
we.MAX_TOOL_SLOTS = 9;
we.MAX_TOOLS_PER_SLOT = 99999;
we.TESTSERVER_DEFENSE_WAIT_DIVISOR = 4;
we.MAX_KINGDOM_GOODS_MOVEMENTS = 1;
we.MAX_KINGDOM_ARMY_MOVEMENTS = 1;
we.COMMANDER_PREMIUM = -14;
we.COMMANDER_DUNGEON = -15;
we.WOLFKING_COMMANDER = -213;
we.COMMANDER_BOSS_DUNGEON = -45;
we.COMMANDER_TREASURE = -12;
we.MAX_LEVEL_FOR_LOW_LEVEL_TRAVEL_BOOST = 25;
exports.TravelConst = we;
we.__class = "TravelConst";
var xe = function () {
  function TreasureMapsConst() {}
  TreasureMapsConst.CRUSADE_MAP_IDS_$LI$ = function () {
    if (TreasureMapsConst.CRUSADE_MAP_IDS == null) {
      TreasureMapsConst.CRUSADE_MAP_IDS = [TreasureMapsConst.MAP_ID_THORNKING_EASY, TreasureMapsConst.MAP_ID_THORNKING_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EASY, TreasureMapsConst.MAP_ID_SEAQUEEN_HARD, TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD, TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_UNDERWORLD_HARD];
    }
    return TreasureMapsConst.CRUSADE_MAP_IDS;
  };
  TreasureMapsConst.STAGED_CRUSADE_MAPS_$LI$ = function () {
    if (TreasureMapsConst.STAGED_CRUSADE_MAPS == null) {
      TreasureMapsConst.STAGED_CRUSADE_MAPS = [TreasureMapsConst.MAP_ID_UNDERWORLD_EASY, TreasureMapsConst.MAP_ID_THORNKING_EASY];
    }
    return TreasureMapsConst.STAGED_CRUSADE_MAPS;
  };
  TreasureMapsConst.getTreasureMapDropChance = function (e, t, n) {
    if (t === TreasureMapsConst.FIRST_MAP_ID) {
      return 0.5;
    }
    var i = (Math.pow(e - n, 3) / 100 + 8) * 4 + e * 0.1;
    return Math.round(Math.min(80, Math.max(5, i))) / 100;
  };
  return TreasureMapsConst;
}();
xe.FIRST_MAP_ID = 50;
xe.PROGRESS_NONE = 0;
xe.PROGRESS_FOUND_MAP_PIECE = 1;
xe.PROGRESS_DESTROYED_DUNGEON = 2;
xe.PROGRESS_NEW_MAP = 3;
xe.PROGRESS_DESTROYED_END_NODE = 4;
xe.MIN_LEVEL_FOR_FINDING_PIECES = 6;
xe.TRAVEL_BOOST_ARMY = 2;
xe.MAP_ID_THORNKING_EASY = 21;
xe.MAP_ID_THORNKING_HARD = 25;
xe.MAP_ID_SEAQUEEN_EASY = 22;
xe.MAP_ID_SEAQUEEN_HARD = 27;
xe.MAP_ID_SEAQUEEN_EXTRA_HARD = 28;
xe.MAP_ID_UNDERWORLD_EASY = 23;
xe.MAP_ID_UNDERWORLD_HARD = 24;
xe.LOWLEVEL_UNDERWORLD_START_LEVEL = 10;
xe.LOWLEVEL_UNDERWORLD_STOP_LEVEL = 22;
xe.LOWLEVEL_UNDERWORLD_WARN_LEVEL = 29;
xe.LOWLEVEL_UNDERWORLD_KILL_LEVEL = 30;
xe.NODE_ID_HIDDEN_COW_DUNGEON = 165;
xe.NODE_ID_KRAKEN = 206;
xe.NODE_ID_THORNKING = 164;
xe.MAP_TYPE_CRUSADE = 0;
xe.MAP_TYPE_TREASURE_HUNT = 1;
xe.MAP_TYPE_CRUSADE_TIMED = 2;
exports.TreasureMapsConst = xe;
xe.__class = "TreasureMapsConst";
var We = function () {
  function TutorialConst() {}
  TutorialConst.TUTORIAL_TMAPS_$LI$ = function () {
    if (TutorialConst.TUTORIAL_TMAPS == null) {
      TutorialConst.TUTORIAL_TMAPS = [7, 8];
    }
    return TutorialConst.TUTORIAL_TMAPS;
  };
  return TutorialConst;
}();
We.LAST_TUTORIAL_STEP_LEVEL = 6;
We.TUTORIAL_END_LEVEL = 5;
We.LAST_TUTORIAL_STEP_XP = 1080;
We.LAST_TUTORIAL_QID = 2130;
We.LOAD_TAX_COLLECTOR_MIN_XP = 119;
We.TUTORIAL_HERO_0_ID = 801;
We.TUTORIAL_HERO_1_ID = 802;
We.TUTORIAL_HERO_2_ID = 803;
We.E4K_SHORT_TUTORIAL_FIRST_LEVEL_BARRIER = 2;
We.E4K_SHORT_TUTORIAL_SECOND_LEVEL_BARRIER = 3;
We.E4K_SHORT_TUTORIAL_QUEST_ID_ATTACK_DUNGEON = 3220;
exports.TutorialConst = We;
We.__class = "TutorialConst";
var He = function () {
  function UnitProductionConst() {}
  UnitProductionConst.UNLOCK_DURATION_$LI$ = function () {
    if (UnitProductionConst.UNLOCK_DURATION == null) {
      UnitProductionConst.UNLOCK_DURATION = 604800;
    }
    return UnitProductionConst.UNLOCK_DURATION;
  };
  return UnitProductionConst;
}();
He.MAX_SLOTS = 5;
He.TOOLS_LIMIT = 80;
He.UNIT_LIST = 0;
He.TOOLS_LIST = 1;
He.HOSPITAL_LIST = 2;
He.AUXILIARY_LIST = 3;
He.LIST_AMOUNT = 2;
He.UNLOCK_C2 = 375;
He.PEACE_MODE_SLOWDOWN = 2;
He.MAX_AMOUNT_CLIENT_INPUT = 1000;
He.MAX_UNIT_BOOST_AMOUNT = 3;
He.MAX_TOOL_BOOST_AMOUNT = 1;
He.MAX_STARTER_BOOST_LEVEL = 10;
He.MAX_STARTER_BOOST_Value = 0.98;
exports.UnitProductionConst = He;
He.__class = "UnitProductionConst";
var Ve = function () {
  function VillageConst() {}
  VillageConst.getVillageDefaultOwnerID = function (e) {
    return VillageConst.DEFAULT_OWNER_OFFSET - (e - 1);
  };
  VillageConst.isVillagePlayer = function (e) {
    return e <= VillageConst.DEFAULT_OWNER_OFFSET && e > VillageConst.DEFAULT_OWNER_OFFSET - 4;
  };
  return VillageConst;
}();
Ve.VILLAGE_UNSPAWNED_AREA_ID = -1;
Ve.DEFAULT_OWNER_OFFSET = -400;
exports.VillageConst = Ve;
Ve.__class = "VillageConst";
var je = function () {
  return function WaveConst() {};
}();
je.YARD = -1;
je.PRE_COMBAT = -2;
je.POST_COMBAT = -3;
exports.WaveConst = je;
je.__class = "WaveConst";
var qe = function () {
  function WishingWellConst() {}
  WishingWellConst.calculateWishingWellSkipCost = function (e) {
    return Math.min((e / 60 | 0) * 0.5, WishingWellConst.MIN_SKIP_PRICE_C2);
  };
  return WishingWellConst;
}();
qe.ENTRY_COST_MODIFIER = 2;
qe.RUINED_WELL = 0;
qe.MIN_REQUIRED_PLAYER_LEVEL = 13;
qe.MIN_SKIP_PRICE_C2 = 1999;
qe.OPTION_START_RUBY_WISHING_WELL = "S";
qe.OPTION_SKIP_RUBY_WISHING_WELL = "SK";
qe.OPTION_COLLECT_RUBY_WISHING_WELL = "C";
qe.OPTION_UPGRADE_RUBY_WISHING_WELL = "U";
qe.OPTION_UPDATE_INFO_WISHING_WELL = "UD";
exports.WishingWellConst = qe;
qe.__class = "WishingWellConst";
var Ke = function () {
  return function WODConst() {};
}();
Ke.WOD_IDS = "wodIds";
Ke.COST_WOOD = "costWood";
Ke.COST_STONE = "costStone";
Ke.COST_AQUAMARINE = "costAquamarine";
Ke.COST_FOOD = "costFood";
Ke.COST_COAL = "costCoal";
Ke.COST_OIL = "costOil";
Ke.COST_GLASS = "costGlass";
Ke.COST_IRON = "costIron";
Ke.COST_HONEY = "costHoney";
Ke.COST_MEAD = "costMead";
Ke.COST_BEEF = "costBeef";
Ke.COST_CURRENCY1 = "costC1";
Ke.COST_CURRENCY2 = "costC2";
Ke.XML_VERSION_NODE = "version";
Ke.XML_VERSION_VALUE = "value";
Ke.DROPPABLE = "droppable";
Ke.DEPRECATED = "deprecated";
Ke.ID_LOWER_CASE = "id";
Ke.ID_UPPER_CASE = "ID";
Ke.EVENT_TYPE_ID = "eventTypeID";
Ke.COST_HEALING_C1 = "healingCostC1";
Ke.COST_HEALING_C2 = "healingCostC2";
Ke.COST_SKIP_C2 = "skipCostC2";
Ke.COST_ALL_REVIVAL_C2 = "reviveAllCostC2";
Ke.HEALING_TIME = "healingTime";
Ke.HEALING_ORDER = "healingOrder";
Ke.WOD_ID = "wodID";
Ke.TYPE = "type";
Ke.FOOD_SUPPLY = "foodSupply";
Ke.MEAD_SUPPLY = "meadSupply";
Ke.BEEF_SUPPLY = "beefSupply";
Ke.MELEE_DEF = "meleeDefence";
Ke.MELEE_ATT = "meleeAttack";
Ke.RANGE_DEF = "rangeDefence";
Ke.RANGE_ATT = "rangeAttack";
Ke.LOOT = "lootValue";
Ke.ROLE = "role";
Ke.SPEED = "speed";
Ke.RECRUITMENT_TIME = "recruitmentTime";
Ke.LOWLEVEL_RECRUITMENT_TIME = "lowLevelRecruitmentTime";
Ke.BUILDING_LEVEL = "buildingLevel";
Ke.INVENTORY_TYPE = "inventoryType";
Ke.RESEARCH_LOCKED = "researchLocked";
Ke.PALACE_LOCKED = "palaceLockedByKID";
Ke.FIRE_BOOST = "fireBoost";
Ke.FIGHT_TYPE = "fightType";
Ke.OFFENSIVE_RANGE_BONUS = "offRangeBonus";
Ke.OFFENSIVE_MELEE_BONUS = "offMeleeBonus";
Ke.KAMIKAZE = "isKamikaze";
Ke.UNLOCK_NPC_ID = "unlockNpcId";
Ke.SKIP_COST = "skipCost";
Ke.DESERTING_ORDER = "desertingOrder";
Ke.CLEAVAGE_OF_CELLS_COST = "cleavageOfCellsCost";
Ke.ALLOWED_TO_TRAVEL = "allowedToTravel";
Ke.ALLOWED_TO_ATTACK = "allowedToAttack";
Ke.NAME = "name";
Ke.SLOT_TYPES = "slotTypes";
Ke.WALL_BONUS = "wallBonus";
Ke.WALL_LEVEL = "wallLevel";
Ke.GATE_BONUS = "gateBonus";
Ke.GATE_LEVEL = "gateLevel";
Ke.MOAT_BONUS = "moatBonus";
Ke.MOAT_LEVEL = "moatLevel";
Ke.TOWER_LEVEL = "towerLevel";
Ke.TOOL_TYP = "typ";
Ke.DELETE_AFTER_BATTLE = "deleteToolAfterBattle";
Ke.DAILY_ACTIVITY = "dailyactivity";
Ke.ACHIEVEMENT = "achievement";
Ke.ACHIEVEMENT_ID = "achievementID";
Ke.REQUIRED_ACHIEVEMENT_ID = "requiredAchievementID";
Ke.OR_REQUIRED_ACHIEVEMENT_ID = "orRequiredAchievementID";
Ke.ACHIEVEMENT_POINTS = "achievementPoints";
Ke.CREST_SYMBOL_IDS = "crestSymbolIDs";
Ke.RUNS_PARALLEL_FOR_SERVER = "runsParallelForServer";
Ke.QUEST = "quest";
Ke.QUEST_ID = "questID";
Ke.EVENT_ID = "eventID";
Ke.MAP_ID = "mapID";
Ke.WOD_FOOD = "food";
Ke.WOD_WOOD = "wood";
Ke.WOD_STONE = "stone";
Ke.WOD_COAL = "coal";
Ke.WOD_OIL = "oil";
Ke.WOD_GLASS = "glass";
Ke.WOD_IRON = "iron";
Ke.WOD_AQUAMARINE = "aquamarine";
Ke.WOD_HONEY = "honey";
Ke.WOD_MEAD = "mead";
Ke.WOD_BEEF = "beef";
Ke.APOLOGIZE_TOKEN = "apologizeToken";
Ke.CURRENCY1 = "currency1";
Ke.CURRENCY2 = "currency2";
Ke.KHAN_TABLETS = "khanTablets";
Ke.KHAN_MEDALS = "khanMedals";
Ke.SAMURAI_TOKENS = "samuraiTokens";
Ke.PEGASUS_TRAVEL_TICKETS = "pegasusTravelTickets";
Ke.XP = "xp";
Ke.REQUIRED_LEVEL = "requiredLevel";
Ke.EARLY_UNLOCK_REQUIRED_LEVEL = "earlyUnlockRequiredLevel";
Ke.MAX_LEVEL = "maxLevel";
Ke.MAX_LEVEL_FOR_XP = "maxLevelForXP";
Ke.REQUIRED_QUEST_ID = "requiredQuestID";
Ke.OR_REQUIRED_QUEST_ID = "orRequiredQuestID";
Ke.ATTRIBUTE_KILLED_QUESTS = "killQuestIDs";
Ke.ATTRIBUTE_KILLED_QUESTS_START = "killQuestIDsOnStart";
Ke.QUEST_SERIES_ID = "questSeriesID";
Ke.TRIGGER_TUTORIAL_STEP_ID = "triggerTutorialStepID";
Ke.TEST_CASE_ID = "testCaseID";
Ke.CONDITIONS = "conditions";
Ke.FAILURE_CONDITIONS = "failureConditions";
Ke.DOLL_AMOUNT = "numberofDolls";
Ke.DOLL_WOD = "dollWod";
Ke.DEFENSIVE_MELEE_BONUS = "defMeleeBonus";
Ke.DEFENSIVE_RANGE_BONUS = "defRangeBonus";
Ke.MAX_COUNT = "maximumCount";
Ke.UPGRADE_ID = "upgradeWodID";
Ke.DOWNGRAGE_ID = "downgradeWodID";
Ke.GROUP = "group";
Ke.HEIGHT = "height";
Ke.WIDTH = "width";
Ke.STORABLE = "storeable";
Ke.BUILD_DURATION = "buildDuration";
Ke.LOW_LEVEL_BUILD_DURATION = "lowLevelBuildDuration";
Ke.BUILD_SPEED_BOOST = "buildSpeedBoost";
Ke.WOOD_PRODUCTION = "Woodproduction";
Ke.STONE_PRODUCTION = "Stoneproduction";
Ke.FOOD_PRODUCTION = "Foodproduction";
Ke.COAL_PRODUCTION = "Coalproduction";
Ke.OIL_PRODUCTION = "Oilproduction";
Ke.GLASS_PRODUCTION = "Glassproduction";
Ke.IRON_PRODUCTION = "Ironproduction";
Ke.HONEY_PRODUCTION = "Honeyproduction";
Ke.MEAD_PRODUCTION = "meadProduction";
Ke.BEEF_PRODUCTION = "Beefproduction";
Ke.FOOD_RATIO = "foodRatio";
Ke.HONEY_RATIO = "honeyRatio";
Ke.WOOD_BOOST = "Woodboost";
Ke.STONE_BOOST = "Stoneboost";
Ke.FOOD_BOOST = "Foodboost";
Ke.COAL_BOOST = "Coalboost";
Ke.OIL_BOOST = "Oilboost";
Ke.GLASS_BOOST = "Glassboost";
Ke.IRON_BOOST = "Ironboost";
Ke.HONEY_BOOST = "Honeyboost";
Ke.MEAD_BOOST = "Meadboost";
Ke.BEEF_BOOST = "Beefboost";
Ke.FOOD_CONSUMPTION_REDUCTION = "Foodreduction";
Ke.MEAD_CONSUMPTION_REDUCTION = "Meadreduction";
Ke.BEEF_CONSUMPTION_REDUCTION = "Beefreduction";
Ke.HIDEOUT = "Hideout";
Ke.AQUAMARINE_HIDEOUT = "aquamarineHideout";
Ke.GUARDS = "guardSize";
Ke.SPY_SIZE = "spySize";
Ke.GENERALS = "commanderSize";
Ke.MARKET_CARRIAGES = "marketCarriages";
Ke.BARONS = "baronSize";
Ke.STONESTORAGE = "stoneStorage";
Ke.FOODSTORAGE = "foodStorage";
Ke.WOODSTORAGE = "woodStorage";
Ke.COALSTORAGE = "coalStorage";
Ke.OILSTORAGE = "oilStorage";
Ke.GLASSSTORAGE = "glassStorage";
Ke.IRONSTORAGE = "ironStorage";
Ke.AQUAMARINESTORAGE = "aquamarineStorage";
Ke.HONEYSTORAGE = "honeyStorage";
Ke.MEADSTORAGE = "meadStorage";
Ke.BEEFSTORAGE = "beefStorage";
Ke.SIGHT_RADIUS_BONUS = "sightRadiusBonus";
Ke.POPULATION = "Population";
Ke.DECO_POINTS = "decoPoints";
Ke.EVENT_IDS = "eventIDs";
Ke.MAP_IDS = "mapIDs";
Ke.UNLOCKING_IDS = "unlockIDs";
Ke.UNLOCKING_HORSES = "unlockHorses";
Ke.CONSTRUCTION_ITEM_GROUP_IDS = "constructionItemGroupIDs";
Ke.SHOP_CATEGORY = "shopCategory";
Ke.LEVEL = "level";
Ke.DESTRUCTABLE = "destructable";
Ke.BURNABLE = "burnable";
Ke.DAMAGE_THRESHOLD = "damageTreshold";
Ke.DUNGEON = "dungeon";
Ke.COUNT_VICTORIES = "countVictories";
Ke.DUNGEON_SKIP_COST = "skipCosts";
Ke.UNIT_WALL_COUNT = "unitWallCount";
Ke.TOOL_R = "toolR";
Ke.TOOL_M = "toolM";
Ke.TOOL_L = "toolL";
Ke.UNIT_R = "unitsR";
Ke.UNIT_M = "unitsM";
Ke.UNIT_L = "unitsL";
Ke.UNIT_K = "unitsK";
Ke.UNITS = "units";
Ke.SMASHABLE = "smashable";
Ke.MORAL = "Moral";
Ke.UNIT_SIZE = "unitSize";
Ke.RESEARCH_BOOST = "researchBoost";
Ke.RECRUIT_SPEED_BOOST = "recruitSpeedBoost";
Ke.USAGE_EVENT_ID = "usageEventID";
Ke.XP_BONUS = "xpBonus";
Ke.AMOUNT_PER_WAVE = "amountPerWave";
Ke.DECOS = "decos";
Ke.TOHOME = "toHome";
Ke.HIDDENFOOD = "hiddenFood";
Ke.HIDDENMEAD = "hiddenMead";
Ke.HIDDENBEEF = "hiddenBeef";
Ke.DUNGEON_TYPE = "dungeonType";
Ke.DUNGEON_TYPE_MAIN = "main";
Ke.DUNGEON_TYPE_SUB = "sub";
Ke.TREASUREMAP = "tmap";
Ke.TREASUREMAP_ID = "mapID";
Ke.TREASUREMAP_TYPE = "maptype";
Ke.TREASURE_MAP_NODE_IDS = "tmapnodeIDs";
Ke.TREASURE_RELATES_OLD_MAP = "relatesOld";
Ke.STARTMAPPIECES = "initialpieces";
Ke.TOTALMAPPIECES = "totalpieces";
Ke.TREASURE_END_NODE_ID = "endNodeID";
Ke.TREASURE_HAS_CAMP = "hasCamp";
Ke.CONTINUE_AFTER_BOSS = "continueAfterBoss";
Ke.TREASURE_MAP_NODE = "tmapnode";
Ke.TREASURE_MAP_NODE_ID = "tmapnodeID";
Ke.DEFENSE_STREGTH = "defStrength";
Ke.RANDOMIZED_DEFENSE = "randomizedDefence";
Ke.DEFENCE_UNITS = "defenceUnits";
Ke.DEFENCE_TOOLS = "defenceTools";
Ke.DEFENCE_P_TOOLS = "dungeonPTools";
Ke.DISTANCE = "distance";
Ke.COOLDOWN = "coolDown";
Ke.DUNGEON_ID = "countVictories";
Ke.LOOT_C1 = "lootc1";
Ke.LOOT_C2 = "lootc2";
Ke.LOOT_WOOD = "lootWood";
Ke.LOOT_STONE = "lootStone";
Ke.LOOT_FOOD = "lootFood";
Ke.LOOT_COAL = "lootCoal";
Ke.LOOT_OIL = "lootOil";
Ke.LOOT_GLASS = "lootGlass";
Ke.LOOT_IRON = "lootIron";
Ke.LOOT_BEEF = "lootBeef";
Ke.CAPTURED_PRODUCTION_WOOD = "capturedProductionWood";
Ke.CAPTURED_PRODUCTION_STONE = "capturedProductionStone";
Ke.CAPTURED_PRODUCTION_FOOD = "capturedProductionFood";
Ke.TREASURE_UNLOCK_IDS_OR = "orUnlockIDs";
Ke.TREASURE_UNLOCK_IDS_AND = "andUnlockIDs";
Ke.TREASURE_TYPE = "type";
Ke.TREASURE_TYPE_DUNGEON = "DUNGEON";
Ke.TREASURE_TYPE_BRIDGE = "BRIDGE";
Ke.TREASURE_TYPE_BRIDGEDUNGEON = "BRIDGEDUNGEON";
Ke.TREASURE_TYPE_MORALE_BOOSTER = "MORALBOOSTER";
Ke.TREASURE_TYPE_PORT = "PORT";
Ke.TREASURE_TYPE_SWAMP = "SWAMP";
Ke.TREASURE_TYPE_SAND = "SAND";
Ke.TREASURE_CHEST_COSTC2 = "COSTC2";
Ke.DUNGEONLEVEL = "dungeonlevel";
Ke.MAPPIECEPRICE = "costpiece";
Ke.DIFFICULTY = "difficulty";
Ke.UNIT_BOOST = "unitBoost";
Ke.MARKET_BOOST = "marketBoost";
Ke.SPY_BOOST = "spyBoost";
Ke.IS_INSTANT_SPY_HORSE = "isInstantSpyHorse";
Ke.COST_FACTOR_C1 = "costFactorC1";
Ke.COST_FACTOR_C2 = "costFactorC2";
Ke.ALLOWED_FOR_NPC_ATTACK_IN_KIDS = "allowedForNpcAttackInKingdom";
Ke.IS_LAST_TUTORIAL_QUEST = "isLastTutorialQuest";
Ke.IS_RELIC_BUILDING = "isRelicBuilding";
Ke.SELL_WOOD = "sellWood";
Ke.SELL_STONE = "sellStone";
Ke.SELL_AQUAMARINE = "sellAquamarine";
Ke.SELL_FOOD = "sellFood";
Ke.SELL_COAL = "sellCoal";
Ke.SELL_OIL = "sellOil";
Ke.SELL_GLASS = "sellGlass";
Ke.SELL_IRON = "sellIron";
Ke.SELL_HONEY = "sellHoney";
Ke.SELL_MEAD = "sellMead";
Ke.SELL_BEEF = "sellBeef";
Ke.SELL_CURRENCY1 = "sellC1";
Ke.SELL_CURRENCY2 = "sellC2";
Ke.WISHING_WELL = "wishingwell";
Ke.WISHING_WELL_COIN = "wishingWellCoin";
Ke.COST_WISHING_WELL_COINS = "costWishingWellCoin";
Ke.ENTRY_COSTS = "entryCosts";
Ke.EVENT = "event";
Ke.EVENTID = "eventID";
Ke.TRAVEL_TIME = "travelTime";
Ke.SKIP_COST_C2 = "skipCostC2";
Ke.REQUIRED_MAP_ID = "requiredMapID";
Ke.THRESHOLD = "threshold";
Ke.TOP_X = "topX";
Ke.BOOSTED_WODS = "boostedWodIDs";
Ke.REDUCTION = "reduction";
Ke.ENABLE_WODS = "enabledWodIDs";
Ke.ALLIANCE_FAME_BOOST = "allianceFameBoost";
Ke.MAX_SOLDIERS = "maxSoldiers";
Ke.RETURN_UNITS = "returnUnits";
Ke.START_TMAP_WITH_UNITS = "startWithUnits";
Ke.FAME_LEVEL = "fameLevel";
Ke.FAME_DECREASE_PERCENT = "fameLoss";
Ke.EVENT_TYPE = "eventType";
Ke.PACKAGE_IDS = "packageIDs";
Ke.PACKAGES = "packages";
Ke.ARTIFACT = "artifact";
Ke.ARTIFACT_LEAGUE = "artifactsLeague";
Ke.ARTIFACT_LEAGUE_ID = "artifactsLeagueID";
Ke.ARTIFACT_ID = "artifactID";
Ke.ARTIFACT_PARTS = "artifactParts";
Ke.ARTIFACT_PRICE = "artifactPrice";
Ke.ARTIFACT_PART_PRICE = "artifactPartPrice";
Ke.DROP_FACTOR = "dropFactor";
Ke.EXPONENT = "exponent";
Ke.OFFSET = "offset";
Ke.AVERAGE_DUNGEON_LEVEL = "averageDungeonLevel";
Ke.PACKAGE_ID = "packageID";
Ke.PACKAGE_TYPE = "packageType";
Ke.PACKAGE_PRICE_C1 = "packagePriceC1";
Ke.PACKAGE_PRICE_C2 = "packagePriceC2";
Ke.PACKAGE_PRICE_WOOD = "packagePriceWood";
Ke.PACKAGE_PRICE_STONE = "packagePriceStone";
Ke.PACKAGE_PRICE_FOOD = "packagePriceFood";
Ke.PACKAGE_PRICE_COAL = "packagePriceCoal";
Ke.PACKAGE_PRICE_OIL = "packagePriceOil";
Ke.PACKAGE_PRICE_GLASS = "packagePriceGlass";
Ke.PACKAGE_PRICE_IRON = "packagePriceIron";
Ke.PACKAGE_PRICE_AQUAMARINE = "packagePriceAquamarine";
Ke.PACKAGE_PRICE_HONEY = "packagePriceHoney";
Ke.PACKAGE_PRICE_MEAD = "packagePriceMead";
Ke.PACKAGE_PRICE_BEEF = "packagePriceBeef";
Ke.BUY_AGAIN_REDUCED_COST_C2 = "buyAgainReducedCostC2";
Ke.AMOUNT_WOOD = "amountWood";
Ke.AMOUNT_STONE = "amountStone";
Ke.AMOUNT_FOOD = "amountFood";
Ke.AMOUNT_COAL = "amountCoal";
Ke.AMOUNT_OIL = "amountOil";
Ke.AMOUNT_GLASS = "amountGlass";
Ke.AMOUNT_IRON = "amountIron";
Ke.AMOUNT_C1 = "amountC1";
Ke.WOD_AMOUNT = "wodAmount";
Ke.PACKAGE_STOCK = "stock";
Ke.FILL_UP_RESOURCE_STORAGE = "fillUpResourceStorage";
Ke.FILL_ALL_KINGDOMS = "fillAllStorages";
Ke.EXCLUDED_AREA_TYPES = "excludedAreaTypes";
Ke.AMOUNT_SILVER_RUNES = "amountSilverRunes";
Ke.IS_GIFT_PACKAGE = "isGiftPackage";
Ke.AMOUNT_XP = "amountXP";
Ke.MAX_BUY_PER_CLICK = "maxBuyPerClick";
Ke.BOUNTY_TARGET_SKIP_COST_C2 = "targetSkipCostC2";
Ke.FAME_AS_OFF = "fameAsOff";
Ke.FAME_AS_DEF = "fameAsDef";
Ke.DEFENCE_P_TOOLS_STACK = "dungeonPToolStacks";
Ke.DEFENCE_NP_TOOLS_STACK = "dungeonNPToolStacks";
Ke.HIDDEN_SOLDIERS_SPACE = "hiddenSoldiersSpace";
Ke.KINGDOM_TRAVELLING_COST = "kingdomTravellingCost";
Ke.CAN_BE_PRIME_SALE_OFFER = "canBePrimeSaleOffer";
Ke.HOSPITAL_CAPACITY = "hospitalCapacity";
Ke.HOSPITAL_SURVIVE_BOOST = "surviveBoost";
Ke.HOSPITAL_SLOTS = "hospitalSlots";
Ke.HEAL_SPEED = "healSpeed";
Ke.RESEARCH = "research";
Ke.RESEARCH_ID = "researchID";
Ke.RESEARCH_GROUP_ID = "groupID";
Ke.RESEARCH_LEVEL = "level";
Ke.RESEARCH_PREREQUISITE_IDS = "prerequisiteIDs";
Ke.RESEARCH_DURATION = "researchDuration";
Ke.RECRUIT_SOLDIER_BOOST = "recruitSoldierBoost";
Ke.BUILD_TOOL_BOOST = "buildToolBoost";
Ke.TRAVEL_STATION_UNIT_BOOST = "travelStationUnitBoost";
Ke.TRAVEL_SPY_BOOST = "travelSpyBoost";
Ke.TRAVEL_MARKET_OWN_BOOST = "travelMarketOwnBoost";
Ke.TAX_COLLECTOR_BOOST = "taxCollectorBoost";
Ke.BUILDING_XP_BOOST = "buildingXPBoost";
Ke.PRODUCTIVITY_WOOD_BOOST = "productivityWoodBoost";
Ke.PRODUCTIVITY_STONE_BOOST = "productivityStoneBoost";
Ke.PRODUCTIVITY_FOOD_BOOST = "productivityFoodBoost";
Ke.BATTLE_XP_BOOST = "battleXPBoost";
Ke.LOOT_BOOST = "lootBoost";
Ke.RESEARCH_LOCK_WOD_IDS = "lockWodIDs";
Ke.RESEARCH_UNLOCK_WOD_IDS = "unlockWodIDs";
Ke.RESEARCH_SPEED_BOOST = "researchBoost";
Ke.FAME_BOOST = "fameBoost";
Ke.HONOR_BOOST = "honorBoost";
Ke.PERCEPTION_BOOST = "perceptionBoost";
Ke.MAGIC_FIND_BOOST = "magicFindBoost";
Ke.POPULATION_BOOST = "populationAmountBoost";
Ke.POPULATION_CONVERSION_BOOST = "peasantAmountBoost";
Ke.CRAFT_COST_REDUCTION = "forgeCostReduction";
Ke.STEALTH_BOOST = "stealthBoost";
Ke.ONLY_WITH_RESEARCH_EXPERT = "onlyWithResearchExpert";
Ke.REQUIRED_BUILDINGS = "requiredBuildings";
Ke.REQUIRED_BUILDINGS_CONDITION = "requiredBuildingsCondition";
Ke.RESEARCH_RECRUIT_SOLDIER_BOOST_ABSOLUTE = "recruitSoldierBoostAbsolute";
Ke.RESEARCH_BUILD_TOOL_BOOST_ABSOLUTE = "buildToolBoostAbsolute";
Ke.RESEARCH_PLUNDER_CAPACITY = "plunderCapacity";
Ke.RESEARCH_PRODUCT_WOOD_BOOST_ABSOLUTE = "productivityWoodBoostAbsolute";
Ke.RESEARCH_PRODUCT_STONE_BOOST_ABSOLUTE = "productivityStoneBoostAbsolute";
Ke.RESEARCH_PRODUCT_FOOD_BOOST_ABSOLUTE = "productivityFoodBoostAbsolute";
Ke.RESEARCH_BOOST_ABSOLUTE_ABSOLUTE = "researchBoostAbsolute";
Ke.RESEARCH_POPULATION_BOOST_ABSOLUTE = "populationAmountBoostAbsolute";
Ke.RESEARCH_XP_BONUS_ABSOLUTE = "xpBonusAbsolute";
Ke.VILLAGE = "village";
Ke.KINGDOM_ID = "kID";
Ke.TRIGGER_KINGDOM_ID = "triggerKingdomID";
Ke.RELATED_ID = "groupID";
Ke.WALL_WOD_ID = "wallWodId";
Ke.GATE_WOD_ID = "gateWodId";
Ke.KEEP_WOD_ID = "keepWodId";
Ke.MOAT_WOD_ID = "moatWodId";
Ke.PEASANTS = "peasants";
Ke.GUARDS_COUNT = "guards";
Ke.BOSS_DUNGEON = "bossdungeon";
Ke.COOLDOWN_DELAY = "cooldownDelay";
Ke.ATTACK_DELAY_RANGE = "attackDelayRange";
Ke.ATTACK_STRENGTH = "attackStrength";
Ke.PLAYER_COOLDOWN_DELAY = "playerCooldownDelay";
Ke.OWNER_ID = "ownerID";
Ke.KINGDOM_IDS = "kIDs";
Ke.KINGDOM = "kingdom";
Ke.UNIT_TRAVEL_TIME = "unitTravelTime";
Ke.RESOURCE_TRAVEL_TIME = "resourceTravelTime";
Ke.UNIT_TRAVEL_TAX_RATE = "unitTravelTaxRate";
Ke.RESOURCE_TRAVEL_TAX_RATE = "resourceTravelTaxRate";
Ke.MIN_LEVEL = "minLevel";
Ke.SKIP_UNIT_TRAVEL_C2_COST = "skipUnitTravelC2Cost";
Ke.SKIP_RESOURCE_TRAVEL_C2_COST = "skipResourceTravelC2Cost";
Ke.NOOB_PROTECTION_TIME = "noobProtectionTime";
Ke.REQUIRED_KINGDOM_ID = "requiredKingdomID";
Ke.VILLAGE_CAP_WOOD = "villageCapWood";
Ke.VILLAGE_CAP_STONE = "villageCapStone";
Ke.VILLAGE_CAP_FOOD = "villageCapFood";
Ke.NPC_COOLDOWN_FACTOR = "npcCooldownFactor";
Ke.MIN_C2_LEVEL = "minC2Level";
Ke.FAME_BONUS = "fameBonus";
Ke.FACTION_POINT_BONUS = "pointBonus";
Ke.C1_BONUS = "c1Bonus";
Ke.REPUTATION_BONUS = "reputationBonus";
Ke.RAGE_POINT_BONUS = "ragePointBonus";
Ke.IS_YARD_TOOL = "isYardTool";
Ke.IS_ALLOWED_TO_DEFEND = "allowedToDefend";
Ke.TOURNAMENT_PRIZE_DECO = "prizeDeco";
Ke.TOURNAMENT_FAME_PER_DAY = "famePerDay";
Ke.EVENT_DUNGEON_PROTECTION_TIME = "dungeonProtectionTime";
Ke.EVENT_DUNGEON_LOOT_C2 = "dungeonLootC2";
Ke.CAN_BE_USED_TO_ATTACK_NPC = "canBeUsedToAttackNPC";
Ke.CAN_BE_USED_BY_NPC = "canBeUsedByNPC";
Ke.INITIAL_WOOD = "initialWood";
Ke.INITIAL_FOOD = "initialFood";
Ke.INITIAL_STONE = "initialStone";
Ke.C2_FOR_REWARD = "c2ForReward";
Ke.REWARD_CAP = "rewardCap";
Ke.IGNORE_RESOURCE_STORAGE_CAPACITY = "ignoreResourceStorageCapacity";
Ke.MAIN_QUEST = "mainquest";
Ke.MAIN_QUEST_ID = "mainQuestID";
Ke.ANNOUNCEMENT_REQUIREMENTS = "IDsForAnnounced";
Ke.RUNNING_REQUIREMENTS = "IDsForRunning";
Ke.DONE_REQUIREMENTS = "IDsForDone";
Ke.PART_PAY_PRICE = "partpayprice";
Ke.PARTPAYPRICE_ID = "partPayPriceID";
Ke.PARTPAYMENT_SKIPPABLE = "skippable";
Ke.MODE = "mode";
Ke.FIXED = "fixed";
Ke.HOURLY_ROUNDED_TO_DAYS = "hourlyRoundedToDays";
Ke.PREMIUM_UNLOCK_C2 = "premiumUnlockCurrency2";
Ke.PREMIUM_UNLOCK_DISCOUNT = "premiumUnlockDiscount";
Ke.TRAVEL_KINGDOM_MARKET_TIME_REDUCTION = "travelKingdomMarketTimeReduction";
Ke.TRAVEL_KINGDOM_TROOP_TIME_REDUCTION = "travelKingdomTroopTimeReduction";
Ke.TAX_COLLECTOR_NO_RUBIES = "taxCollectorNoRubies";
Ke.MARKET_CARRIAGE_CAPACITY_BOOST = "marketCarriageCapacityBoost";
Ke.GUARDS_BOOST = "guardsBoost";
Ke.MIN_RESEARCH_TOWER_LEVEL = "minResearchTowerLevel";
Ke.UNIT_BOOST_SPEED = "boostUnitSpeed";
Ke.CONSTRUCTION_EXPERT = "constructionExpert";
Ke.CUSTOM_DECO = "customDeco";
Ke.SLUM_LEVEL_NEEDED = "slumLevelNeeded";
Ke.HUNTER_RATIO = "hunterRatio";
Ke.HUNTER_MAX = "hunterMax";
Ke.ONLY_IN_AREA_TYPES = "onlyInAreaTypes";
Ke.ALLI_FOOD_PRODUCTION_BONUS = "alliFoodProductionBonus";
Ke.KINGDOM_FAME_BOOST = "kingdomFameBoost";
Ke.TAG_SPECIAL_CAMP = "specialcamp";
Ke.TYPE_CAPITAL = "CAPITAL";
Ke.TYPE_TOWER = "DUNGEON";
Ke.TYPE_VILLAGES = "VILLAGES";
Ke.LOOT_VALUE_MODIFIER = "lootValueModifier";
Ke.ATTRIBUTE_CAMP_ID = "specialcampID";
Ke.ATTRIBUTE_POSITION_X = "CampPosX";
Ke.ATTRIBUTE_POSITION_Y = "CampPosY";
Ke.ATTRIBUTE_PROTECTOR_ID = "unlockIDs";
Ke.ATTRIBUTE_ATTACKS_UNTIL_DESTROYED = "attacksUntilDestroyed";
Ke.ATTRIBUTE_VILLAGE_COUNT = "villageCount";
Ke.ATTRIBUTE_AREA_TYPES = "areaTypes";
Ke.PLAGUEMONK_COUNT = "plagueMonkCount";
Ke.MAX_REPEAT_COUNT = "maxRepeatCount";
Ke.FACTION_ID = "factionID";
Ke.FIRE_BRIGADE_BOOST = "fireBrigadeBoost";
Ke.IS_HIDDEN = "hidden";
Ke.RESOURCE_POINTS = "resourcePoints";
Ke.BUILDING_COST_REDUCTION = "buildingCostReduction";
Ke.RECRUIT_COST_REDUCTION = "recruitCostReduction";
Ke.HOSPITAL_SLOT_BOOST = "hospitalSlotBoost";
Ke.LEAGUE_TYPE = "leaguetype";
Ke.LEAGUE_TYPE_ID = "leaguetypeID";
Ke.SUB_TYPE_ID = "subType";
Ke.LEAGUE_INVISIBLE_RANKING = "hasInvisibleRanking";
Ke.ALLIANCE_REWARD_THRESHOLD_POINTS = "allianceRewardThresholdPoints";
Ke.LEAGUE_TYPE_CV_MIN = "countVictoryMin";
Ke.LEAGUE_TYPE_CV_MAX = "countVictoryMax";
Ke.TAG_HIGHSCOREBONI = "highscoreboni";
Ke.ATTRIBUTE_HIGH_RANK = "highestRank";
Ke.ATTRIBUTE_LOW_RANK = "lowestRank";
Ke.ATTRIBUTE_UNIT_REWARD = "unitReward";
Ke.ATTRIBUTE_C1_REWARD = "c1Reward";
Ke.ATTRIBUTE_MIN_AMOUNT = "minAmount";
Ke.ATTRIBUTE_TOOL_REWARD = "toolReward";
Ke.ATTRIBUTE_TOOL_MIN_AMOUNT = "toolMinAmount";
Ke.ATTRIBUTE_TOOL_OFFSET = "toolOffset";
Ke.EQ_DROP_CHANCE = "equipment_drop";
Ke.EQ_SLOT = "equipment_slot";
Ke.EQUIPMENT_EFFECT = "equipment_effect";
Ke.EQ_RARENESS = "equipment_rareness";
Ke.EQ_EFFECTSTRENGTH = "equipment_effectstrength";
Ke.EQ_WEARER = "equipment_wearer";
Ke.EQ_UNIQUE = "equipment";
Ke.EQ_SET = "equipment_set";
Ke.MAGIC_FIND_STRENGTH = "magicFindStrength";
Ke.EQ_GROUP = "equipment_group";
Ke.EFFECT_TYPE = "effecttype";
Ke.HERO_AMOUNT = "heroAmount";
Ke.HERO_SPECIAL_RARENESS_ID = "specialHeroOfRarenessID";
Ke.HERO_DROP_CHANCE = "heroDropChance";
Ke.EFFECT = "effect";
Ke.SLOT_ID = "slotID";
Ke.SLOT_IDS = "slotIDs";
Ke.BONUS = "bonus";
Ke.SINGLE_BONUS = "singleBonus";
Ke.DROPRATE = "dropRate";
Ke.DROP_CHANCE = "dropChance";
Ke.LEVEL_FACTOR = "levelFactor";
Ke.EFFECT_ID = "effectID";
Ke.STRENGTH_ID = "strengthID";
Ke.WEARER_ID = "wearerID";
Ke.RARENESS_ID = "rarenessID";
Ke.SECONDARY_ATTRIBUTES = "secondaryAttributes";
Ke.SALE_VALUE = "saleValue";
Ke.EQ_IDS = "equipmentIDs";
Ke.ENCHANTED_EQ_IDS = "enchantedEquipmentIDs";
Ke.EQ_ID = "equipmentID";
Ke.ENCHANTED_EQ_ID = "enchantedEquipmentID";
Ke.EFFECTS = "effects";
Ke.PRIMARY = "primary";
Ke.APPEARANCE_COUNT = "appearanceCount";
Ke.SET_ID = "setID";
Ke.NEEDED_ITEMS = "neededItems";
Ke.EFFECT_BONUS_LIMIT = "maxTotalBonus";
Ke.PICTURE_ID = "picID";
Ke.ENCHANT_PRIMARY_BONUS = "enchantmentPrimaryBonus";
Ke.ENCHANT_SECONDARY_BONUS = "enchantmentSecondaryBonus";
Ke.ITEM_GROUP_ID = "itemGroupID";
Ke.EXCLUDE_EFFECT = "excludedMali";
Ke.AREA_TYPE_ID = "areaTypeID";
Ke.DROP_ID = "dropID";
Ke.EFFECT_TYPE_ID = "effectTypeID";
Ke.IGNORE_CAP = "ignoreCap";
Ke.EQUIPMENT_EFFECT_ID = "equipmentEffectID";
Ke.CAN_SLOT_GEM = "canSlotGem";
Ke.SELL_PRICE_OVERRIDE = "sellPriceOverride";
Ke.SPECIAL_LORDS = "lord";
Ke.LORD_ID = "lordID";
Ke.EQUIPMENT_DUNGEON_LEVEL = "equipmentDungeonLevel";
Ke.EQUIPMENT_AMOUNT = "equipmentAmount";
Ke.SPECIAL_EQUIPMENT_OF_RARENESS_ID = "specialEquipmentOfRarenessID";
Ke.EQUIPMENT_IDS = "equipmentIDs";
Ke.SHADOW_LORD_MIN_LEVEL = "minLevel";
Ke.SHADOW_LORD_MAX_LEVEL = "maxLevel";
Ke.REWARD = "reward";
Ke.DECO_WOD_ID = "decoWodID";
Ke.IGNORE_VIP_POINT_CAP = "ignoreVipPointCap";
Ke.EXTINGUISH_FIRE = "extinguishFire";
Ke.ALLIANCE_GIFT = "allianceGift";
Ke.GIFT_PACKAGE_IDS = "giftPackageIDs";
Ke.IGNORE_GIFT_CAP = "ignoreGiftCapacity";
Ke.GLORY_BOOSTER = "gloryBooster";
Ke.PERSONAL_GLORY_BOOSTER = "personalGloryBooster";
Ke.GLORY_BOOSTER_DURATION = "gloryBoosterDuration";
Ke.KHAN_TABLET_BOOSTER = "khanTabletBooster";
Ke.KHAN_BOOSTER_DURATION = "khanBoosterDuration";
Ke.XP_BOOSTER = "xpBooster";
Ke.XP_BOOSTER_BUILDING = "xpBoosterBuilding";
Ke.XP_BOOSTER_DURATION = "xpBoosterDuration";
Ke.KHAN_MEDAL_BOOSTER = "khanMedalBooster";
Ke.RAGE_POINT_BOOSTER = "ragePointBooster";
Ke.REPUTATION_POINT_BOOSTER = "reputationPointBooster";
Ke.GALLANTRY_POINT_BOOSTER = "gallantryPointBooster";
Ke.SAMURAI_TOKENS_BOOSTER = "samuraiTokenBooster";
Ke.CARAVAN_OVERLOADER_BOOSTER = "caravanOverloaderBooster";
Ke.INSTRUCTOR_BOOSTER = "instructorBooster";
Ke.TAX_COLLECTOR_BOOSTER = "taxCollectorBooster";
Ke.MARAUDER_BOOSTER = "maraduerBooster";
Ke.RETURNING_SPEED_BOOSTER = "returningSpeedBooster";
Ke.RANDOM_GROUP = "randomgroup";
Ke.RANDOM_GROUP_TYPE = "groupType";
Ke.RANDOM_GROUP_ENTRY_ID = "randomGroupEntryID";
Ke.PROBABILITY = "probability";
Ke.AMOUNT = "amount";
Ke.PAYMENTREWARD = "paymentreward";
Ke.PAYMENTREWARD_ID = "paymentrewardID";
Ke.LIFETIME_SPENT_C2_MIN = "c2LifetimeSpentMin";
Ke.LIFETIME_SPENT_C2_MAX = "c2LifetimeSpentMax";
Ke.C2_PURCHASED_90DAYS_MIN = "C290daysMin";
Ke.C2_PURCHASED_90DAYS_MAX = "C290daysMax";
Ke.BOOSTERS = "boosters";
Ke.ABTEST_GROUP_COUNT = "abGoupCount";
Ke.ABTEST_GROUP_IDS = "abGroupIDs";
Ke.REWARDS = "rewards";
Ke.SLOTS = "slots";
Ke.RANDOM_GROUP_KEY = "RG";
Ke.DEFAULT_SKIN_ID = "skinID";
Ke.DAYS_SINCE_LAST_PAYMENT_MIN = "daysSinceLastPaymentMin";
Ke.DAYS_SINCE_LAST_PAYMENT_MAX = "daysSinceLastPaymentMax";
Ke.PAYMENTREWARD_IDS = "paymentRewardIDs";
Ke.PRIMEDAY = "primeDay";
Ke.PRIMEDAY_ID = "primeDayID";
Ke.C2_STOCK_MIN = "currentC2StockMin";
Ke.C2_STOCK_MAX = "currentC2StockMax";
Ke.PAYMENTS_LAST14_DAYS_MIN = "paymentsLast14DaysMin";
Ke.PAYMENTS_LAST14_DAYS_MAX = "paymentsLast14DaysMax";
Ke.ACTIVITY_CHEST = "activityreward";
Ke.ACTIVITY_CHEST_ID = "activityRewardID";
Ke.REWARD_ID = "rewardID";
Ke.WAITING_TIME = "waitingTime";
Ke.BEGINNER_LOGIN_REWARD_ID = "beginnerLoginRewardID";
Ke.JUDGEMENT_CITIZEN_EVENT = "judgement";
Ke.JUDGEMENT_CITIZEN_ID = "judgementID";
Ke.CONDTYP_A = "conditionTypeA";
Ke.CONDTYP_B = "conditionTypeB";
Ke.REWARDTYP_A = "rewardTypeA";
Ke.REWARDTYP_B = "rewardTypeB";
Ke.DAILY_REWARD = "dailyreward";
Ke.DAILY_REWARD_ID = "dailyRewardID";
Ke.REWARD_POINTS = "rewardPoints";
Ke.UNITS_A = "unitA";
Ke.UNITS_B = "unitB";
Ke.UNITS_C = "unitC";
Ke.DAILY_QUEST_ID = "dailyQuestID";
Ke.LEVEL_CALCULATED = "levelCalculated";
Ke.EQUIPMENT = "equipment";
Ke.REWARD_IDS = "rewardIDs";
Ke.DURATION = "duration";
Ke.REPUTATION = "reputation";
Ke.SLUM = "slum";
Ke.SLUM_ID = "slumID";
Ke.SLUM_LEVEL = "slumLevel";
Ke.WINNER_REWARD_IDS = "winnerRewardIDs";
Ke.TOP_X_REWARD_IDS = "topXRewardIDs";
Ke.BOOBY_REWARD_IDS = "boobyRewardIDs";
Ke.FAMERANK = "famerank";
Ke.MIGHT_RANK = "mightrank";
Ke.FAME_ID = "fameID";
Ke.MIGHT_ID = "mightID";
Ke.ATTACK_BOOST = "attackBoost";
Ke.ATTACK_BOOST_PVP = "pvpAttackBoost";
Ke.MOVEMENT_BOOST = "movementBoost";
Ke.PVP_COIN_BOOST = "pvpCoinBoost";
Ke.ALLIANCEFAMERANK = "alliancefamerank";
Ke.BEGINNER_LOGINREWARD = "beginner_loginreward";
Ke.PACKAGE = "package";
Ke.VALID_KINGDOMS = "validKingdoms";
Ke.IS_NOT_REBUYABLE = "notRebuyable";
Ke.SPECIAL_EQUIPMENT_WITH_SLOT_ID = "specialEquipmentWithSlotID";
Ke.EQUIPMENTDROPCHANCE = "equipmentDropChance";
Ke.LUCKYWHEEL_TICKETS = "luckyWheelTickets";
Ke.NOMAD_CAMP = "nomadCamp";
Ke.COUNT_VICTORY = "countVictory";
Ke.MIN_SIGHT_LEVEL = "minSightLevel";
Ke.MAX_SIGHT_LEVEL = "maxSightLevel";
Ke.SAMURAI_CAMP = "samuraiCamp";
Ke.FACTION_INVASION_CAMP = "factioninvasioncamp";
Ke.FACTION_INVASION_CAMP_ID = "factionInvasionCampID";
Ke.MINE_TYPE = "mineType";
Ke.MINE_TYPE_ID = "mineTypeID";
Ke.AMOUNT_LOOTABLE = "amountLootable";
Ke.AMOUNT_PER_COLLECT_C1 = "amountPerCollectC1";
Ke.AMOUNT_PER_COLLECT_C2 = "amountPerCollectC2";
Ke.AMOUNT_INFLUENCE_PER_MINUTE = "amountInfluencePerMinute";
Ke.MAX_INFLUENCE_POINTS = "maxInfluencePoints";
Ke.EMPTY_AREA = "emptyArea";
Ke.AREA_TYPE = "areaType";
Ke.STARTING_FOOD = "startingFood";
Ke.EXPANSION = "expansion";
Ke.EXPANSION_ID = "expansionID";
Ke.SPACE_IDS = "spaceIDs";
Ke.EXPANSION_LEVEL = "expansionLevel";
Ke.CONSTRUCTIONSLOTCOUNT = "constructionSlotCount";
Ke.LOW_LEVEL_MAINCASTLE_COSTC2 = "lowLevelMainCastleCostC2";
Ke.MIN_SCORE_FOR_BOOBY = "minScoreForBooby";
Ke.POINT_EVENT_QUEST = "pointeventquest";
Ke.POINT_EVENT_TYPE = "pointeventtype";
Ke.POINT_EVENT_REWARD_SET = "pointeventrewardset";
Ke.POINT_EVENT_QUESTS_ID = "pointEventQuestIDs";
Ke.POINT_EVENT_QUEST_ID = "pointEventQuestID";
Ke.POINT_EVENT_TYPE_ID = "pointEventTypeID";
Ke.THRESHOLD_NAME = "neededPointsForReward";
Ke.THRESHOLDS = "neededPointsForRewards";
Ke.INCREMENTAL = "incremental";
Ke.POINTS_FOR_CONDITION = "pointsPerTier";
Ke.NEXT_ACTIVITY_REWARD_ID = "nextActivityRewardID";
Ke.REWARD_THRESHOLDS = "rewardThresholds";
Ke.THRESHOLD_REWARD_IDS = "thresholdRewardIDs";
Ke.REWARD_RANKS = "rewardRanks";
Ke.RANK_REWARD_IDS = "rankRewardIDs";
Ke.LONGTERM_POINT_EVENT_QUEST = "longtermpointeventquest";
Ke.SUB_EVENT_ID = "subEventID";
Ke.LONGTERM_POINT_EVENT_LEAGUE = "leaguetypelongtermpointevent";
Ke.LONGTERM_POINT_EVENT_LEAGUE_TYPE = "leaguetypeLongtermpointEventsID";
Ke.DIFFICULTY_IDS_MAX_POINTS = "difficultyIDforMaxPoints";
Ke.DIFFICULTY_MAX_POINTS = "difficultyMaxPoints";
Ke.DIFFICULTY_THRESHOLDS = "difficultyScalingNeededPointsForRewards";
Ke.DIFFICULTY_REWARDS_IDS = "difficultyScalingRewardIDs";
Ke.BOOSTER = "booster";
Ke.TOOLS = "tools";
Ke.ITEM_RARENESS = "equipmentRarenessID";
Ke.C1_MYSTERY = "c1";
Ke.C2_MYSTERY = "c2";
Ke.REWARD_CHOICE_MYSTERY = "choice";
Ke.REWARD_VIP_MYSTERY = "vip";
Ke.REWARD_ALLIANCE_MYSTERY = "alliance";
Ke.DAY = "day";
Ke.LEVEL_BRACKET = "levelBracket";
Ke.REWARD_STEP = "rewardStep";
Ke.VIP_POINTS = "vipPoints";
Ke.VIP_TIME = "vipTime";
Ke.VIP_LEVEL = "viplevel";
Ke.VIP_LEVEL_ID = "vipLevelID";
Ke.THRESHOLD_MIN = "thresholdMin";
Ke.THRESHOLD_MAX = "thresholdMax";
Ke.WOOD_BOOSTS = "woodBoosts";
Ke.STONE_BOOSTS = "stoneBoosts";
Ke.FOOD_BOOSTS = "foodBoosts";
Ke.BONUS_LOGIN_KEYS = "bonusLoginKeys";
Ke.ATTACK_SPEED_BOOST = "attackSpeedBoost";
Ke.ATTACK_FAME_BOOST = "attackFameBoost";
Ke.PRODUCTION_BONUS_SLOTS = "productionBonusSlots";
Ke.RECRUITMENT_BONUS_SLOTS = "recruitmentBonusSlots";
Ke.FREE_PREMIUM_GENERALS_PER_DAY = "freePremiumGeneralsPerDay";
Ke.TAX_COLLECTOR_NO_RUBIES_12 = "taxCollectorNoRubies12";
Ke.TAX_COLLECTOR_NO_RUBIES_24 = "taxCollectorNoRubies24";
Ke.MOVABLE = "movable";
Ke.FORCED_POSITION = "forcedPosition";
Ke.EXPANSION_REWARD_POSITION = "ExpansionRewardPosition";
Ke.LEAGUE_TYPE_EVENT_ID = "leaguetypeEventsID";
Ke.RESSOURCE_FACTORS = "ressourceFactors";
Ke.TOPXVALUE = "topXValue";
Ke.LEAGUETYPEEVENT = "leaguetypeevent";
Ke.LEAGUE_TYPE_TOPX = "leaguetypeTopXSize";
Ke.HARD_MODE_START = "hardModeStart";
Ke.ALLIANCEHELPREQUEST = "alliancehelprequest";
Ke.ALLIANCEHELPREQUEST_ID = "allianceHelpRequestID";
Ke.ALLIANCEHELPREQUEST_MAX_HELPERS_COUNT = "maxHelpersCount";
Ke.ALLIANCEHELPREQUEST_UNIT_COUNT_BONUS = "unitCountBonus";
Ke.ALLIANCEHELPREQUEST_UNIT_HEAL_TIME_REDUCTION = "unitHealTimeReduction";
Ke.ALLIANCEHELPREQUEST_DECREASE_BUILDING_TIME = "decreaseBuildingTimeAbsolute";
Ke.ISLE = "isle";
Ke.ISLE_ID = "IsleID";
Ke.FIXED_LOOT_WOOD = "fixedLootWood";
Ke.FIXED_LOOT_STONE = "fixedLootStone";
Ke.FIXED_LOOT_AQUAMARINE = "fixedLootAquamarine";
Ke.GLOBAL_COOLDOWN = "globalCooldown";
Ke.LOCAL_COOLDOWN = "localCooldown";
Ke.OCCUPATION_TIME = "occupationTime";
Ke.MAX_COUNT_VICTORIES = "maxCountVictories";
Ke.LOOT_AQUAMARINE = "lootAquamarine";
Ke.AQUA_POINTS = "islandAlliancePoints";
Ke.MAX_DIFF_LOOT_AQUAMARINE = "maxDiffLootAquamarine";
Ke.MAX_DIFF_LOOT_RESOURCES = "maxDiffLootResources";
Ke.ISLAND_REWARD_RANK = "islandrewardrank";
Ke.ISLAND_REWARD_SET_ID = "islandRewardSetID";
Ke.ISLAND_REWARD_RANK_ID = "islandRewardRankID";
Ke.ISLAND_REWARD_CARGO_POINTS = "cargoPointRequirement";
Ke.LOOT_CARGO_POINTS = "lootCargoPoints";
Ke.MAX_DIFF_LOOT_CARGO_POINTS = "maxDiffLootCargoPoints";
Ke.ISLAND_PLAYER_REWARD = "islandPlayerReward";
Ke.ISLAND_PLAYER_REWARD_ID = "islandPlayerRewardID";
Ke.TITLE = "title";
Ke.TITLE_ID = "titleID";
Ke.TITLE_IS_POSITIVE = "isPositive";
Ke.TITLE_IS_KING = "isKing";
Ke.TITLE_FOOD_PRODUCTION_BOOST = "foodProductionBoost";
Ke.TITLE_ATTACK_BONUS = "attackBonus";
Ke.TITLE_RECRUITMENT_SPEED_BOOST = "recruitmentSpeedBoost";
Ke.TITLE_SPY_COUNT_BOOST = "spyCountBoost";
Ke.TITLE_TRAVEL_BOOST = "travelBoost";
Ke.TITLE_RECRUITMENT_COSTS = "recruitmentCosts";
Ke.TITLE_PUBLIC_ORDER_POINTS = "publicOrderPoints";
Ke.TITLE_FAME_AND_LOOT_ENEMY_BOOST = "fameAndLootEnemyBoost";
Ke.ALLIANCEBUFFS = "alliancebuff";
Ke.ALLIANCEBUFF_ID = "allianceBuffID";
Ke.ALLIANCEBUFF_SERIES_ID = "allianceBuffSeriesID";
Ke.ALLIANCEBUFF_LEVEL = "level";
Ke.ALLIANCEBUFF_MAXLEVEL = "maxLevel";
Ke.ALLIANCEBUFF_MEMBERCOUNT = "memberCount";
Ke.ALLIANCEBUFF_COST_WOOD = "costWood";
Ke.ALLIANCEBUFF_COST_STONE = "costStone";
Ke.ALLIANCEBUFF_COST_C1 = "costC1";
Ke.ALLIANCEBUFF_COST_C2 = "costC2";
Ke.ALLIANCEBUFF_COST_COAL = "costCoal";
Ke.ALLIANCEBUFF_COST_GLASS = "costGlass";
Ke.ALLIANCEBUFF_COST_OIL = "costOil";
Ke.ALLIANCEBUFF_COST_IRON = "costIron";
Ke.ALLIANCEBUFF_ALLIANCE_TRAVEL_SUPPORT_BOOST = "allianceTravelSupportBoost";
Ke.ALLIANCEBUFF_ALLIANCE_TRAVEL_MARKET_BOOST = "allianceTravelMarketBoost";
Ke.ALLIANCEBUFF_ALLIANCE_RESOURCE_DEPOSIT_BOOST = "resourceDepositBoost";
Ke.ALLIANCEBUFF_WAR_LOOT_BOOST = "warLootBoost";
Ke.ALLIANCEBUFF_TRAVEL_WAR_ATTACK_BOOST = "travelWarAttackBoost";
Ke.ALLIANCEBUFF_RARE_CHANCE = "rareChance";
Ke.ALLIANCEBUFF_EPIC_CHANCE = "epicChance";
Ke.ALLIANCEBUFF_LEGENDARY_CHANCE = "legendaryChance";
Ke.ALLIANCEBUFF_FORGING_COST_C1 = "forgingCostC1";
Ke.ALLIANCEBUFF_GEM_1_CHANCE = "gem1Chance";
Ke.ALLIANCEBUFF_GEM_2_CHANCE = "gem2Chance";
Ke.ALLIANCEBUFF_GEM_3_CHANCE = "gem3Chance";
Ke.ALLIANCEBUFF_GEM_4_CHANCE = "gem4Chance";
Ke.ALLIANCEBUFF_GEM_5_CHANCE = "gem5Chance";
Ke.ALLIANCEBUFF_GLORY_BOOST_ATTACK = "allianceFameBoost";
Ke.ALLIANCEBUFF_ATTACK_STRENGTH_BOOST = "allianceAttackBoost";
Ke.ALLIANCEBUFF_DEFENSE_STRENGTH_BOOST = "allianceDefenseBoost";
Ke.ALLIANCEBUFF_DURATION = "duration";
Ke.ALLIANCEBUFF_REQUIRED_MEMBER_BUFF_LEVEL = "requiredMemberBuffLevel";
Ke.ALLIANCEBUFF_REQUIRED_MIGHT_POINTS = "requiredMightPoints";
Ke.ALLIANCEBUFF_REQUIRED_RANK_ID = "requiredRankID";
Ke.ALLIANCEBUFF_ALLIANCE_FAME = "requiredAllianceFame";
Ke.ALLIANCEBUFF_IS_DEFAULT_LEVEL = "isDefaultLevel";
Ke.ALLIANCE_BUFF_REQUIRED_BUFF_ID = "requiredBuffID";
Ke.ALLIANCE_BUFF_RESET_ON_EVENT_END = "resetOnEventEnd";
Ke.ALLIANCEBUFF_IS_UPGRADEABLE = "isUpgradeable";
Ke.ALLIANCEBUFF_IS_TEMPORARY = "isTemporary";
Ke.ALLIANCE_FORGE = "allianceForge";
Ke.ALLIANCE_FORGE_ID = "allianceForgeID";
Ke.ALLIANCE_FORGE_FORGING_COST_C1 = "forgingCostC1";
Ke.ALLIANCE_FORGE_LEVEL = "level";
Ke.LUCKYWHEEL_CLASSES = "luckywheelclass";
Ke.LUCKYWHEEL_CLASSES_ID = "luckyWheelClassID";
Ke.LUCKYWHEEL_CLASSES_SPINS = "neededSpinsForNextClass";
Ke.LUCKYWHEEL_JACKPOT_SETS = "luckywheelrewardset";
Ke.LUCKYWHEEL_JACKPOT_SET_ID = "luckyWheelRewardSetID";
Ke.LUCKYWHEEL_ACTIVITY_REWARD_THRESHOLD = "activityRewardThreshold";
Ke.LUCKYWHEEL_C2_PER_SKIPPED_SPIN = "C2PerSkippedSpin";
Ke.LUCKYWHEEL_SD_CLASSES = "saleDaysLuckyWheelClass";
Ke.LUCKYWHEEL_SALE_DAYS_CLASSES = "saleDaysLuckyWheelClass";
Ke.LUCKYWHEEL_SALE_DAYS_CLASSES_ID = "saleDaysLuckyWheelClassID";
Ke.LUCKYWHEEL_SALE_DAYS_JACKPOT_SETS = "saleDaysLuckyWheelRewardSet";
Ke.LUCKYWHEEL_SALE_DAYS_JACKPOT_SET_ID = "saleDaysLuckyWheelRewardSetID";
Ke.LUCKYWHEEL_CATEGORY_SELECTION_SALE_DAYS = "saleDaysLuckyWheelInitialCategorySelection";
Ke.CHANCE = "chance";
Ke.CATEGORY = "category";
Ke.GEM = "gem";
Ke.GEM_ID = "gemID";
Ke.GEM_FOLLOWING_GEM_ID = "followingGemID";
Ke.GEM_LEVEL_ID = "gemLevelID";
Ke.GEM_COLOR_ID = "gemColorID";
Ke.GEM_EFFECT_TYPE = "effectType";
Ke.GEM_EFFECT_VALUE = "effectValue";
Ke.GEM_TRIGGER_CHANCE = "triggerChance";
Ke.GEM_LEVEL = "gemlevel";
Ke.GEM_CRAFT_SUCCESS_CHANCE = "craftSuccessChance";
Ke.GEM_CRAFT_COST_C1 = "craftCostC1";
Ke.GEM_CRAFT_COST_C2 = "craftCostC2";
Ke.GEM_INSERT_COST_C1 = "insertCostC1";
Ke.GEM_SALE_VALUE = "saleValue";
Ke.GEM_AMOUNT = "gemAmount";
Ke.GEM_IDS = "gemIDs";
Ke.GEM_LEVEL_IDS = "gemLevelIDs";
Ke.GEM_SPECIAL_LEVEL_ID = "specialGemOfLevelID";
Ke.GEM_DROP_CHANCE = "gemDropChance";
Ke.GEM_REMOVAL_COST_C2 = "removalCostC2";
Ke.CREST_SYMBOL = "crestsymbol";
Ke.CREST_SYMBOL_ID = "crestSymbolID";
Ke.SPECIAL_EVENT_DONT_SEND_TO_CLIEN = "invisible";
Ke.SPECIAL_EVENT_ONLY_PAY_USER = "onlyPayUser";
Ke.FOR_PAYUSER = "playerIsPayuser";
Ke.GRANT_TYPE = "grantType";
Ke.REWARD_DECO_TO_GLOBAL_STORAGE = "toDecoGlobalStorage";
Ke.REWARD_TO_KINGDOM_CASTLE = "sendToKingdomCastle";
Ke.POTIONABLE = "potionable";
Ke.FEAST = "feast";
Ke.FEAST_ID = "feastID";
Ke.PRODUCTION_BOOST = "productionBoost";
Ke.MONUMENT = "monument";
Ke.REQUIRED_POINTS = "requiredPoints";
Ke.AB_TEST_GROUP_IDS = "ABTestGroupIDs";
Ke.AB_TEST_AUTO_ASSIGN = "autoAssignABTest";
Ke.AB_TEST_PARAM = "ABTestParam";
Ke.SUCCEED_ON_WRONG_CASE_ID = "succeedOnWrongCaseID";
Ke.LEVEL_UP = "levelup";
Ke.REQUIRED_LEGEND_LEVEL = "requiredLegendLevel";
Ke.IS_LEGEND = "isLegend";
Ke.MIN_LEGEND_LEVEL = "minLegendLevel";
Ke.MAX_LEGEND_LEVEL = "maxLegendLevel";
Ke.LEGEND_SKILL = "legendskill";
Ke.SCEAT_SKILL_TREE = "sceatSkillTree";
Ke.SCEAT_SKILL_TIER = "sceatSkillTier";
Ke.SCEAT_SKILL = "sceatSkill";
Ke.SKILL_ID = "skillID";
Ke.REQUIRED_SKILL_ID = "requiredSkillID";
Ke.PREVIOUS_SKILL_ID = "previousSkillID";
Ke.REQUIRED_SKILL_IDS = "requiredSkillIDs";
Ke.FOLLOWING_SKILL_ID = "followingSkillID";
Ke.SKILL_TREE_ID = "skillTreeID";
Ke.SKILL_TIER = "tier";
Ke.LEGEND_SKILL_COSTS = "costSkillPoints";
Ke.LEGEND_SKILL_EFFECT_TYPE = "effectType";
Ke.LEGEND_SKILL_EFFECT_VALUE = "effectValue";
Ke.LEGEND_TOTAL_SKILL_EFFECT_VALUE = "totalEffectValue";
Ke.LEGEND_TOTAL_SKILL_COSTS = "totalCostSkillPoints";
Ke.LEGEND_SKILL_POINTS = "skillPoints";
Ke.LEGEND_SKILL_SPECIAL_TYPE = "specialType";
Ke.SKILL_TIER_ID = "tierID";
Ke.ACTIVATION_TIME = "activationTime";
Ke.SCEAT_SKILL_CATEGORY = "tabID";
Ke.EFFECT_LOCKED = "effectLocked";
Ke.SCEAT_SKILL_LOCKED = "sceatSkillLocked";
Ke.SKILL_GROUP_ID = "skillGroupID";
Ke.REQUIRE_PREVIOUS_TIER_UNLOCKED = "requirePreviousTierUnlocked";
Ke.BUILDING = "building";
Ke.BUILDING_ID = "buildingID";
Ke.BUILDING_AMOUNT = "buildingAmount";
Ke.UNIT = "unit";
Ke.UNIT_ID = "unitID";
Ke.UNIT_AMOUNT = "unitAmount";
Ke.HORSE = "horse";
Ke.BUILDING_POSITION = "buildingPosition";
Ke.BUILDING_POSITION_ID = "buildingPositionID";
Ke.BUILDING_WOD_ID = "buildingWodID";
Ke.X = "x";
Ke.Y = "y";
Ke.ROTATION = "rotation";
Ke.PRE_BUILT_CASTLE_ID = "preBuiltCastleID";
Ke.SPACE_ID = "spaceID";
Ke.IS_MAIN_CASTLE_COPY = "isMainCastleCopy";
Ke.MIGHT_VALUE = "mightValue";
Ke.MINUTE_SKIP_1 = "minuteSkip1";
Ke.MINUTE_SKIP_2 = "minuteSkip2";
Ke.MINUTE_SKIP_3 = "minuteSkip3";
Ke.MINUTE_SKIP_4 = "minuteSkip4";
Ke.MINUTE_SKIP_5 = "minuteSkip5";
Ke.MINUTE_SKIP_6 = "minuteSkip6";
Ke.MINUTE_SKIP_7 = "minuteSkip7";
Ke.IGNORE_MINUTE_SKIP_CAPACITY = "ignoreMinuteSkipCapacity";
Ke.LABORATORY = "laboratory";
Ke.IRON_ALLIANCE_BOOST = "ironAllianceBoost";
Ke.GLASS_ALLIANCE_BOOST = "glassAllianceBoost";
Ke.CHARCOAL_ALLIANCE_BOOST = "charcoalAllianceBoost";
Ke.OLIVE_OIL_ALLIANCE_BOOST = "oliveOilAllianceBoost";
Ke.AB_TEST = "abTest";
Ke.DAILY_ACTIVITIES = "dailyActivities";
Ke.IS_DEFAULT_QUEST = "isDefaultQuest";
Ke.NEEDS_ALLIANCE = "needsAlliance";
Ke.IS_TEMP_SERVER_QUEST = "isTempServerQuest";
Ke.LEVEL_BRACKET_NODE = "levelbracket";
Ke.BASIC_LEVEL_BRACKET_ID = "bracketID";
Ke.LEVEL_BRACKET_MIN_LEVEL = "minLevel";
Ke.LEVEL_BRACKET_MAX_LEVEL = "maxLevel";
Ke.EVENT_ANNOUNCEMENT_ID = "eventAnnouncementID";
Ke.EVENT_ANNOUNCEMENT_REWARD_ID = "messageRewardID";
Ke.EVENT_ANNOUNCEMENT = "eventannouncement";
Ke.TUTORIAL = "tutorial";
Ke.TUTORIAL_STEP_ID = "tutorialStepID";
Ke.CHAPTER = "chapter";
Ke.CHAPTER_STEP = "chapterStep";
Ke.ALLIANCE_RIGHTS = "alliancerankright";
Ke.RIGHT_ID = "rankRightID";
Ke.NEEDED_ALLIANCE_RANK = "neededMemberRank";
Ke.ALLIANCE_RANKS = "alliancerank";
Ke.RANK_ID = "rankID";
Ke.RERANK_RIGHT = "rerankRight";
Ke.MISSION_REWARD = "mercenary";
Ke.MISSION_PROPERTY = "missionProperty";
Ke.MISSION_ID = "missionID";
Ke.UNIT_SLOT = "unitSlot";
Ke.TOOL_SLOT = "toolSlot";
Ke.IS_AUXILIARY = "isAuxiliary";
Ke.STACK_SIZE = "stackSize";
Ke.AUXILIARY_CAPACITY = "auxiliaryCapacity";
Ke.PRE_BUILT_CASTLE = "prebuiltcastle";
Ke.EVENT_SKIN = "eventSkin";
Ke.EVENT_SKIN_ID = "eventSkinID";
Ke.FORCED = "forced";
Ke.POINT_LOSS = "decay";
Ke.TITLE_EFFECT_ID = "titleEffectID";
Ke.TITLE_VALUE = "value";
Ke.DISPLAY_TYPE = "displayType";
Ke.PREVIOUS_TITLE_ID = "previousTitleID";
Ke.TITLE_EFFECTS = "titleEffect";
Ke.QUEST_PROGRESS = "questProgress";
Ke.GRANT_TITLE = "grantTitle";
Ke.LEVEL_BOOSTER = "levelBooster";
Ke.BOOSTER_ID = "boosterID";
Ke.BOOSTER_LEVEL = "level";
Ke.BOOST_PERCENTAGE = "boostPercentage";
Ke.BOOSTER_TYPE = "boosterType";
Ke.LONGTERM_POINT_EVENT_BOOSTER = "longTermPointEventBooster";
Ke.CONSTRUCTION_ITEM = "constructionItem";
Ke.CONSTRUCTION_ITEM_ID = "constructionItemID";
Ke.CONSTRUCTION_ITEM_GROUP_ID = "constructionItemGroupID";
Ke.CONSTRUCTION_ITEM_EFFECT_GROUP_ID = "constructionItemEffectGroupID";
Ke.CONSTRUCTION_ITEM_EFFECT_GROUP = "constructionItemsEffectGroup";
Ke.CONSTRUCTION_ITEM_AREA_LIMIT = "areaLimit";
Ke.CONSTRUCTION_ITEM_OWNER_GLOBAL_EFFECT = "ownerGlobalEffect";
Ke.CONSTRUCTION_ITEM_RECIPE = "constructionItemRecipe";
Ke.CONSTRUCTION_ITEM_RECIPE_ID = "constructionItemRecipeID";
Ke.DEFAULT_UNLOCKED = "defaultUnlocked";
Ke.CONSTRUCTION_ITEM_IDS = "constructionItemIDs";
Ke.CONSTRUCTION_ITEM_AMOUNT = "constructionItemAmount";
Ke.SLOT_TYPE_ID = "slotTypeID";
Ke.REMOVAL_COST_C1 = "removalCostC1";
Ke.XP_BOOST_PERCENTAGE = "xpBoostPercentage";
Ke.LOCK_REMOVAL = "lockRemoval";
Ke.BOOST_CONSUMABLE = "boostConsumable";
Ke.PROPERTY = "property";
Ke.PROPERTY_ID = "propertyID";
Ke.VALUE = "value";
Ke.META_TYPE = "metaType";
Ke.PRIME_TIME = "primeTime";
Ke.PAYMENT_META_DATA_PRIVATE = "private";
Ke.PLAYER_RELATION = "playerRelation";
Ke.PLAYER_RELATION_NOT_SET = "";
Ke.PLAYER_RELATION_NONE = "none";
Ke.PLAYER_RELATION_SAME_PLAYER = "samePlayer";
Ke.PLAYER_RELATION_SAME_ALLIANCE = "sameAlliance";
Ke.PLAYER_RELATION_ALLIANCE_WAR = "allianceInWar";
Ke.PLAYER_RELATION_ALLIANCE_FRIENDLY = "allianceFriendly";
Ke.CLIENT_ONLY = "clientOnly";
Ke.SHOPPING_CART = "shoppingCart";
Ke.CART_OPTION_ID = "cartOptionID";
Ke.TYPE_ID = "typeID";
Ke.GROUP_ID = "groupID";
Ke.AMOUNT_BUYABLE = "amountBuyable";
Ke.UNBOOSTED_WOOD_PRODUCTION = "unboostedWoodProduction";
Ke.UNBOOSTED_STONE_PRODUCTION = "unboostedStoneProduction";
Ke.UNBOOSTED_FOOD_PRODUCTION = "unboostedFoodProduction";
Ke.LEVEL_UP_PRICE = "levelUpPrice";
Ke.LEVEL_UP_PRICE_ID = "levelUpPriceID";
Ke.FROM_LEVEL = "fromLevel";
Ke.TO_LEVEL = "toLevel";
Ke.CURRENCY2_COST = "c2Cost";
Ke.AUTO_RECRUITMENT_PRICE = "autoRecruitmentPrice";
Ke.AUTO_RECRUITMENT_PRICE_ID = "autoRecruitmentPriceID";
Ke.LOOP = "loop";
Ke.TYPE_AUXILIARY = "auxiliaries";
Ke.TYPE_SOLDIER = "soldiers";
Ke.TYPE_TOOL = "tools";
Ke.CRAFTING_MATERIAL = "craftingMaterial";
Ke.MATERIAL_ID = "materialID";
Ke.MATERIAL_NAME = "materialName";
Ke.DECONSTRUCT_MATERIAL_NAME = "deconstructMaterialName";
Ke.NEEDED_CONSTRUCTION_ITEM_ID = "neededConstructionItemID";
Ke.MATERIAL_BAG = "rewardBag";
Ke.MATERIAL_BAGS = "rewardBags";
Ke.BAG_ID = "bagID";
Ke.MATERIAL_STATIC_SUFFIX = "static";
Ke.MATERIAL_STACK_SIZE_SUFFIX = "stackSize";
Ke.MATERIAL_PERCENTAGES_SUFFIX = "percentages";
Ke.FEAST_COST_REDUCTION = "feastCostsReduction";
Ke.OFFENSIVE_TOOLS_COSTS_REDUCTION = "offensiveToolsCostsReduction";
Ke.DEFENSIVE_TOOLS_COSTS_REDUCTION = "defensiveToolsCostsReduction";
Ke.ESPIONAGE_TRAVEL_BOOST = "espionageTravelBoost";
Ke.OFFENSIVE_TOOLS_SPEED_BOOST = "offensiveToolsSpeedBoost";
Ke.DEFENSIVE_TOOLS_SPEED_BOOST = "defensiveToolsSpeedBoost";
Ke.RESEARCH_RESOURCE_COSTS_REDUCTION = "ReduceResearchResourceCosts";
Ke.BUILD_BUILDINGS_XP_BOOST = "XPBoostBuildBuildings";
Ke.ATTACK_SETUP_SLOT = "attackSetupSlot";
Ke.CRAFTING_DURATION = "craftingDuration";
Ke.SUBSCRIPTION_BUFFS = "subscriptionsBuff";
Ke.SUBSCRIPTION_BUFF_ID = "subscriptionBuffID";
Ke.SUBSCRIPTION_BUFF_TYPE_ID = "subscriptionTypeID";
Ke.SUBSCRIPTION_BUFF_SERIES_ID = "seriesID";
Ke.SUBSCRIPTION_BUFF_REQUIRED_ALLIANCE_MEMBER_COUNT = "requiredMembers";
Ke.PVP_FIGHT_ONLY = "isPvPFight";
Ke.SUBSCRIPTION_CONVENIENCE_FEATURE = "subscriptionsConvenienceFeature";
Ke.SUBSCRIPTION_CONVENIENCE_FEATURE_ID = "convenienceFeatureID";
Ke.SUBSCRIPTION_LOYALTY = "subscriptionLoyalty";
Ke.SUBSCRIPTION_LOYALTY_ID = "subscriptionLoyaltyID";
Ke.SUBSCRIPTION_LOYALTY_MONTH = "month";
Ke.SUBSCRIPTION_LOYALTY_BOOST = "boost";
Ke.SUBSCRIPTION_REWARDS = "subscriptionsReward";
Ke.SUBSCRIPTION_REWARD_ID = "subscriptionsRewardID";
Ke.ALLIANCE_INVASION_CAMP = "allianceInvasionCamp";
Ke.ALLIANCE_INVASION_CAMP_ID = "allianceInvasionCampID";
Ke.RAGE_NEEDED_FOR_LEVEL_UP = "rageNeededForLevelUp";
Ke.PLAYER_RAGE_CAP = "playerRageCap";
Ke.COOLDOWN_INCREASE = "cooldownIncrease";
Ke.SKIP_COST_INCREASE = "skipCostIncrease";
Ke.INCREASE_MULTIPLIER = "increaseMultiplier";
Ke.INCREASE_INTERVAL = "increaseInterval";
Ke.COOLDOWN_INCREASE_CAP = "cooldownIncreaseCap";
Ke.SKIP_COST_INCREASE_CAP = "skipCostIncreaseCap";
Ke.GENERATED_RAGE_PER_ATTACK = "generatedRagePerAttack";
Ke.CHANCE_FOR_CRITICAL_RAGE_GENERATION = "chanceForCriticalRageGeneration";
Ke.GENERATED_RAGE_PER_DEFENSE = "generatedRagePerDefense";
Ke.LOOT_RESOURCES = "lootResources";
Ke.LOOT_WOOD_PERCENT_MIN = "lootWoodPercentMin";
Ke.LOOT_WOOD_PERCENT_MAX = "lootWoodPercentMax";
Ke.LOOT_STONE_PERCENT_MIN = "lootStonePercentMin";
Ke.LOOT_STONE_PERCENT_MAX = "lootStonePercentMax";
Ke.LOOT_IRON_PERCENT_MIN = "lootIronPercentMin";
Ke.LOOT_IRON_PERCENT_MAX = "lootIronPercentMax";
Ke.LOOT_COAL_PERCENT_MIN = "lootCoalPercentMin";
Ke.LOOT_COAL_PERCENT_MAX = "lootCoalPercentMax";
Ke.LOOT_OIL_PERCENT_MIN = "lootOilPercentMin";
Ke.LOOT_OIL_PERCENT_MAX = "lootOilPercentMax";
Ke.LOOT_GLASS_PERCENT_MIN = "lootGlassPercentMin";
Ke.LOOT_GLASS_PERCENT_MAX = "lootGlassPercentMax";
Ke.PAYMENT_DOPPLER = "paymentDoppler";
Ke.REWARD_SET_ID = "rewardSetID";
Ke.QUEST_C2_COST = "c2Cost";
Ke.QUEST_C2_REDUCTION = "c2Reduction";
Ke.CURRENCY = "currency";
Ke.CURRENCY_ID = "currencyID";
Ke.CURRENCY_NAME = "Name";
Ke.CURRENCY_CAP = "currencyCap";
Ke.CURRENCY_SOFT_CAP = "softCap";
Ke.CURRENCY_HARD_CAP = "hardCap";
Ke.CURRENCY_BOOST = "currencyBooster";
Ke.CURRENCY_BOOST_NAME = "currencyBoosterName";
Ke.JSON_KEY = "JSONKey";
Ke.CURRENCY_RANDOM_BONUS = "currencyRandomBonus";
Ke.CURRENCY_RANDOM_BONUS_NAME = "RandomBonusName";
Ke.CURRENCY_COLLECT_TASK_TYPE = "currencyCollectTaskType";
Ke.CURRENCY_SPEND_TASK_TYPE = "currencySpendTaskType";
Ke.CURRENCY_TASK_TYPE = "taskType";
Ke.CURRENCY_MINUTE_SKIP_VALUE = "currencyMinutesSkipValue";
Ke.CURRENCY_MINUTE_SKIP_TIME = "MinutesSkipValue";
Ke.CURRENCY_MINUTE_SKIP_INDEX = "MinuteSkipIndex";
Ke.CURRENCY_TYPE = "currencyType";
Ke.CURRENCY_TYPE_ID = "typeID";
Ke.CURRENCY_TYPE_ID_RANGE = "currencyIDRange";
Ke.IGNORE_CURRENCY_SOFT_CAP = "ignoreCurrencySoftCap";
Ke.FUSION_SYSTEM = "fusionSystem";
Ke.FUSION_SYSTEM_ID = "id";
Ke.FUSION_SYSTEM_ENERGY_RECHARGE_INTERVAL = "energyRechargeIntervalInSeconds";
Ke.FUSION_SYSTEM_ASSEMBLE_CATALYST_ENERGY_COST = "assembleCatalystEnergyCost";
Ke.FUSION_SYSTEM_DISASSEMBLE_CATALYST_ENERGY_COST = "disassembleCatalystEnergyCost";
Ke.FUSION_SYSTEM_BASE_BONUS_XP_CHANCE = "baseBonusFusionXPChance";
Ke.FUSION_SYSTEM_PREMIUM_BONUS_XP_CHANCE = "premiumBonusFusionXPChance";
Ke.FUSION_SYSTEM_SKIP_RECHARGE_C2_COST = "skipRechargeHardCurrencyCost";
Ke.FUSION_SYSTEM_SKIP_RECHARGE_C2_COST_FACTOR = "skipRechargeHardCurrencyCostFactor";
Ke.FUSION_SYSTEM_FUSION_CURRENCY_ID = "fusionCurrencyID";
Ke.FORGE = "fusionForge";
Ke.FORGE_ID = "forgeID";
Ke.FORGE_DUST_CURRENCY_ID = "dustCurrencyID";
Ke.FORGE_USABLE_TIMESKIPS_PER_DAY = "usableMinuteSkipsPerDay";
Ke.FORGE_MINUTE_SKIP = "forgeMinuteSkip";
Ke.FORGE_MINUTE_SKIP_ID = "id";
Ke.CATALYST = "catalyst";
Ke.CATALYST_DEPRECATED = "deprecated";
Ke.CATALYST_MAX_USABLE_FUSION_LEVEL = "maxUsableFusionLevel";
Ke.CATALYST_TIER = "tier";
Ke.FUSION_COST_SEQUENCE = "fusionCostSequence";
Ke.FUSION_COST_SEQUENCE_ID = "id";
Ke.FUSION_COST_SEQUENCE_FUSION_TARGET_LEVEL = "fusionTargetLevelIterationIndex";
Ke.FUSION_COST_SEQUENCE_COST_JSON_KEY = "costJSONKey";
Ke.FUSION_COST_SEQUENCE_COST_AMOUNT = "costAmount";
Ke.FUSION_IS_SOURCE = "isFusionSource";
Ke.FUSION_IS_TARGET = "isFusionTarget";
Ke.FUSION_INITIAL_FUSION_LEVEL = "initialFusionLevel";
Ke.FUSION_SHOP = "fusionShop";
Ke.PRIVATE_RESOURCE_VILLAGE = "privateVillage";
Ke.VILLAGE_ID = "villageID";
Ke.VILLAGE_LEVEL = "villageLevel";
Ke.RESOURCE_VILLAGE_TOKEN_COST = "costResourceVillageToken";
Ke.RESOURCE_VILLAGE_TOKEN_COST_TOTAL = "costResourceVillageTokenTotal";
Ke.VILLAGE_CAP_COAL = "villageCapCoal";
Ke.VILLAGE_CAP_OIL = "villageCapOil";
Ke.VILLAGE_CAP_GLASS = "villageCapGlass";
Ke.VILLAGE_CAP_IRON = "villageCapIron";
Ke.VILLAGE_TYPE = "type";
Ke.KINGS_MARKET = "kingsMarket";
Ke.TEMP_SERVER_REPAIR_COST_WOOD = "tempServerCostWood";
Ke.TEMP_SERVER_REPAIR_COST_STONE = "tempServerCostStone";
Ke.TEMP_SERVER_REPAIR_TIME = "tempServerTime";
Ke.TEMP_SERVER_RANK_ID = "tempServerRankID";
Ke.TEMP_SERVER_RANK_REWARD_ID = "tempServerRankRewardID";
Ke.MIN_RANK = "minRank";
Ke.MAX_RANK = "maxRank";
Ke.RANK_POINTS = "rankPoints";
Ke.TEMP_SERVER_RANK_POINTS = "tempServerRankPoint";
Ke.IS_HIDDEN_ON_TEMP_SERVER = "hiddenTempServer";
Ke.IS_HIDDEN_ON_CROSS_PLAY_SERVER = "hiddenCrossPlayServer";
Ke.DESTRUCTIBLE_ON_TEMP_SERVER = "tempServerDestructable";
Ke.BURNABLE_ON_TEMP_SERVER = "tempServerBurnable";
Ke.TEMP_SERVER_COST_CURRENCY2 = "tempServerCostC2";
Ke.START_PLAYER_LEVEL = "startPlayerLevel";
Ke.START_PLAYER_LEGEND_LEVEL = "startPlayerLegendLevel";
Ke.QUESTS_TO_FINISH = "questsToFinish";
Ke.TEMP_SERVER_RANK_REWARD = "tempServerRankReward";
Ke.RANK = "rank";
Ke.GAME_ID = "gameID";
Ke.ZONE_ID = "zoneID";
Ke.ZONE_IDS = "zoneIDs";
Ke.DATA = "data";
Ke.PLAYER_ID = "playerId";
Ke.PAYMENT_TYPE = "paymentType";
Ke.PAYMENT_TYPE_INCENTIVE = "incentive";
Ke.CURRENCY_PREMIUM = "currencyPremium";
Ke.PAYOUT = "payout";
Ke.ORDER_ID = "orderId";
Ke.MESSAGE = "message";
Ke.COMMAND_TYPE = "commandType";
Ke.COMMAND_TYPE_CUSTOM_PAYMENT_3 = "CUSTOM_PAYMENT_3";
Ke.CAMP_ID = "campID";
Ke.START_RESOURCE_ID = "startResourceID";
Ke.CASTLE_PASSAGE_TOKEN_PACKAGE_ID = "castlePassageTokenPackageID";
Ke.WOD_C1 = "c1";
Ke.START_RESOURCE = "startResource";
Ke.TEMP_SEVER_SETTING = "tempServerSetting";
Ke.SETTING_ID = "settingID";
Ke.PRESET_IDS = "presetIDs";
Ke.PEACE_MODE = "peaceMode";
Ke.SCORING_SYSTEM = "scoringSystem";
Ke.TEMP_SERVER_PREBUILT_CASTLE = "tempServerPreBuiltCastle";
Ke.START_CURRENCY_AMOUNT = "startCurrencyAmount";
Ke.CURRENCY_LOOTFACTOR_MIN = "currencyLootFactorMin";
Ke.CURRENCY_LOOTFACTOR_MAX = "currencyLootFactorMax";
Ke.BOOSTER_CURRENCY_ID = "boosterCurrencyID";
Ke.BOOSTER_CURRENCY_VALUE = "boosterCurrencyValue";
Ke.BOOSTER_CURRENCY_LIMIT = "boosterCurrencyLimit";
Ke.BOOSTER_CURRENCY_PACKAGE_ID = "boosterCurrencyPackageID";
Ke.TEMPSERVER_PAYOUT = "tempserver-payout";
Ke.SOURCE = "source";
Ke.TEMP_SERVER_DAILY_TASK_REWARD_ID = "tempServerDailyTaskRewardID";
Ke.TEMP_SERVER_MIN_DAILY_TASK_POINTS_PER_DAY = "minDailyTaskPointsPerDay";
Ke.TEMP_SERVER_DAILY_TASK_REWARD = "tempServerDailyTaskReward";
Ke.RETURN_CURRENCY_FACTOR = "returnCurrencyFactor";
Ke.DISABLED_ON_GLOBAL_SERVER = "disabledOnGlobalServer";
Ke.DEFENSE_STREGTH_INCREASE = "defStrengthIncrease";
Ke.LEVEL_INCREASE = "levelIncrease";
Ke.MAX_VALUE = "maxValue";
Ke.MINIMUM_CURRENCY_AMOUNT_TO_SCORE = "minimumCurrencyAmountToScore";
Ke.PEACE_DURATION = "peaceDuration";
Ke.GLOBAL_SERVER_RESEARCH_DURATION = "globalServerResearchDuration";
Ke.GLOBAL_SERVER_COST_C1 = "globalServerCostC1";
Ke.GLOBAL_SERVER_COST_C2 = "globalServerCostC2";
Ke.GLOBAL_SERVER_COST_WOOD = "globalServerCostWood";
Ke.GLOBAL_SERVER_COST_STONE = "globalServerCostStone";
Ke.GLOBAL_SERVER_COST_COAL = "globalServerCostCoal";
Ke.GLOBAL_SERVER_COST_OIL = "globalServerCostOil";
Ke.GLOBAL_SERVER_COST_GLASS = "globalServerCostGlass";
Ke.GLOBAL_SERVER_COST_IRON = "globalServerCostIron";
Ke.GLOBAL_SERVER_COST_FOOD = "globalServerCostFood";
Ke.GLOBAL_SERVER_COST_MEAD = "globalServerCostMead";
Ke.GLOBAL_SERVER_COST_HONEY = "globalServerCostHoney";
Ke.GLOBAL_SERVER_COST_AQUAMARINE = "globalServerCostAquamarine";
Ke.GLOBAL_SERVER_COST_BEEF = "globalServerCostBeef";
Ke.COLLECTOR_EVENT_REWARDS_ID = "collectorEventRewardsID";
Ke.COLLECTOR_EVENT_REWARD_EVENT_OPTION_ID = "eventOptionID";
Ke.COLLECTOR_EVENT_CURRENCY_THRESHOLD = "minCurrencyAmount";
Ke.COLLECTOR_EVENT_OPTION_ID = "collectorEventOptionID";
Ke.COLLECTOR_CURRENCY_ID = "collectorCurrencyID";
Ke.COLLECTOR_KEY_CURRENCY_ID = "collectorKeyCurrencyID";
Ke.COLLECTOR_KEY_BOOST = "collectorKeyBoost";
Ke.COLLECTOR_KEY_LIMIT = "collectorKeyLimit";
Ke.BASE_COLLECTOR_BOOST = "baseCollectorBoost";
Ke.EVENT_START_CURRENCY_AMOUNT = "eventStartCurrencyAmount";
Ke.DAILY_CURRENCY_INCREASE = "dailyCurrencyIncrease";
Ke.COLLECTOR_EVENT_OPTION = "collectorEventOption";
Ke.COLLECTOR_EVENT_REWARD = "collectorEventReward";
Ke.NPC_PLAYER_ID = "npcPlayerID";
Ke.SEASON_MEDAL = "seasonMedal";
Ke.SEASON_MEDAL_ID = "medalID";
Ke.SEASON_MEDAL_POINTS = "medalPoints";
Ke.SEASON_RANK = "seasonRank";
Ke.SEASON_RANK_ID = "rankID";
Ke.SEASON_MIN_MEDAL_POINTS_FOR_UNLOCK = "minMedalPointsForUnlock";
Ke.SEASON_EVENT_REWARD = "seasonEventReward";
Ke.SEASON_END_REWARD = "seasonEndReward";
Ke.SEASON_PROMOTION_REWARD = "seasonPromotionReward";
Ke.SEASON_NEEDS_PASS = "needsSeasonPass";
Ke.SEASON_MIN_HIGHSCORE_RANK = "minHighscoreRank";
Ke.USE_MIN_LEVEL_OF_EVENTS = "useMinLevelOfEvents";
Ke.SEASON_SETTING = "seasonSetting";
Ke.SEASON_PASS_PROMOTION_PRICE = "seasonPassPromotionPrice";
Ke.SEASON_PASS_EVENT_END_PRICE = "seasonPassEventEndPrice";
Ke.SEASON_PASS_FULL_DISCOUNT = "seasonPassFullDiscount";
Ke.SEASON_PASS_SINGLE_DISCOUNT = "seasonPassSingleDiscount";
Ke.REROLL_COST = "rerollCost";
Ke.REROLL_COUNT = "rerollCount";
Ke.REROLL_COST_C1 = "c1Cost";
Ke.REROLL_COST_C2 = "c2Cost";
Ke.GLOBAL_EFFECT = "globalEffect";
Ke.GLOBAL_EFFECT_ID = "globalEffectID";
Ke.REFRESH_AREA = "refreshArea";
Ke.EFFECT_CAP = "effectCap";
Ke.CAP_ID = "capID";
Ke.RELIC_POWER_DISTRIBUTION = "relicPowerDistribution";
Ke.POWER = "power";
Ke.SHARES = "shares";
Ke.RELIC_EFFECT = "relicEffect";
Ke.MINIMUM_VALUE = "minimumValue";
Ke.MAXIMUM_VALUE = "maximumValue";
Ke.RELIC_EFFECT_LIST = "relicEffectList";
Ke.RELIC_EFFECT_IDS = "relicEffectIDs";
Ke.RELIC_TYPES = "relicType";
Ke.RELIC_BLUE_PRINTS = "relicBluePrint";
Ke.NORMAL_AMOUNT = "normalAmount";
Ke.SPECIAL_AMOUNT = "specialAmount";
Ke.NORMAL_EFFECT_LIST_ID = "normalRelicEffectListID";
Ke.SPECIAL_EFFECT_LIST_ID = "specialRelicEffectListID";
Ke.RELIC_TYPE_ID = "relicTypeID";
Ke.BASE_EFFECT_IDS = "baseRelicEffectIDs";
Ke.RELIC_EFFECT_POWER_RATING = "relicEffectPowerRating";
Ke.RELIC_CATEGORY = "relicCategory";
Ke.NEEDED_RATINGS = "neededRatings";
Ke.IS_GEM = "isGem";
Ke.RELIC_EFFECT_TYPE = "relicEffectType";
Ke.VALUE_TEXT_TYPE = "valueTextType";
Ke.EFFECT_VALUE_KEYS = "effectValueKeys";
Ke.RELIC_ITEM_REWARDS = "relicEquipments";
Ke.PVE_FIGHT_ONLY = "isPvEFight";
Ke.SUCCESS_CHANCE = "chance";
Ke.EFFECT_INCREASE = "relicNormalEffectBoost";
Ke.RELIC_ENCHANTER = "relicEnchanter";
Ke.IS_RELIC_ENCHANTER = "isRelicEnchanter";
Ke.RELIC_FRAGMENT_BOOST = "relicFragmentBoost";
Ke.EQUIPMENT_STORAGE = "addEquipmentStorageCapacity";
Ke.GEM_STORAGE = "addGemStorageCapacity";
Ke.RELIC_LOOT_TABLE = "relicLootOption";
Ke.TOMBOLA_ID = "tombolaID";
Ke.OFFICERS_SCHOOL_POWER_DISTRIBUTION = "officersSchoolPowerDistribution";
Ke.OFFICERS_SCHOOL_UNIT_PAIR = "officersSchoolUnitPair";
Ke.OFFICERS_SCHOOL_EFFECT = "officersSchoolEffect";
Ke.OFFICERS_SCHOOL_CURRENCY = "officersSchoolCurrency";
Ke.OFFICERS_SCHOOL_DURATIION = "officersSchoolDuration";
Ke.UNLOCK_BUILDING_WOD_ID = "unlockBuildingWodID";
Ke.USED_FOR_PROGRAM = "usedForProgram";
Ke.USED_FOR_REROLL = "usedForReroll";
Ke.MINIMUM_VALUE_1 = "minimumEffectValueSlot1";
Ke.MAXIMUM_VALUE_1 = "maximumEffectValueSlot1";
Ke.MINIMUM_VALUE_2 = "minimumEffectValueSlot2";
Ke.MAXIMUM_VALUE_2 = "maximumEffectValueSlot2";
Ke.MINIMUM_VALUE_3 = "minimumEffectValueSlot3";
Ke.MAXIMUM_VALUE_3 = "maximumEffectValueSlot3";
Ke.C1_COST = "c1Cost";
Ke.C2_COST = "c2Cost";
Ke.DAIMYO_CASTLE = "daimyoCastle";
Ke.DAIMYO_TOWNSHIP = "daimyoTownship";
Ke.DAIMYO_CASTLE_ALLIANCE_CONTRACT = "daimyoCastleAllianceContract";
Ke.DAIMYO_TOWNSHIP_ALLIANCE_CONTRACT = "daimyoTownshipAllianceContract";
Ke.DAIMYO_ALLIANCE_CONTRACT_ENABLE_ON_START = "enableOnStart";
Ke.DAIMYO_ALLIANCE_CONTRACT_NEXT_CONTRACT = "nextContract";
Ke.DAIMYO_SHOGUN_POINTS = "shogunPoints";
Ke.DAIMYO_WAR_EFFORT_POINTS = "warEffortPoints";
Ke.DAIMYO_NEEDED_SHOGUN_POINTS = "shogunPointsNeededForLevelUp";
Ke.DAIMYO_MIN_HIGHSCORE_RANK = "minHighscoreRank";
Ke.DAIMYO_END_REWARD = "daimyoEndReward";
Ke.UNIT_CAPACITY = "unitCapacity";
Ke.SKIN = "skin";
Ke.ALLIANCE_BATTLE_GROUND_SETTING = "allianceBattleGroundSetting";
Ke.ALLIANCE_BATTLE_GROUND_PREBUILT_CASTLE = "allianceBattleGroundPreBuiltCastle";
Ke.SKIN_ID = "skinID";
Ke.ALLIANCE_BATTLE_GROUND_SKIN = "allianceBattleGroundSkin";
Ke.ALLIANCE_BATTLE_GROUND_SCORING = "allianceBattleGroundScoring";
Ke.ALLIANCE_BATTLE_GROUND_SCORING_ID = "allianceBattleGroundScoringID";
Ke.SCORING = "scoring";
Ke.SCORING_ID = "scoringID";
Ke.METROPOLIS_DECAY = "metropolisDecay";
Ke.KINGSTOWER_DECAY = "kingstowerDecay";
Ke.PLAYER_STEAL = "playerSteal";
Ke.ALLIANCE_STEAL = "allianceSteal";
Ke.MAX_ALLIANCE_SIZE = "maxAllianceSize";
Ke.ALLIANCE_BATTLE_GROUND_RANK_REWARD = "allianceBattleGroundRankReward";
Ke.ALLIANCE_BATTLE_GROUND_RANK_ID = "allianceBattleGroundRankID";
Ke.ALLIANCE_BATTLE_GROUND_RANK_REWARD_ID = "allianceBattleGroundRankRewardID";
Ke.ALLIANCE_BATTLE_GROUND_MAP = "allianceBattleGroundMap";
Ke.ALLIANCE_BATTLE_GROUND_DUNGEON = "allianceBattleGroundDungeon";
Ke.ALLIANCE_BATTLE_GROUND_DUNGEON_ID = "allianceBattleGroundDungeonID";
Ke.ALLIANCE_BATTLE_GROUND_PAYOUT = "battlegroundserver-payout";
Ke.IS_BATTLE_GROUND = "isBattleground";
Ke.ALLIANCE_CURRENCY_ID = "allianceCurrencyID";
Ke.IS_HIDDEN_ON_BATTLE_GROUND = "hiddenBattleGround";
Ke.ONLY_BATTLE_GROUND_SCORING_ID = "onlyBattleGroundScoringID";
Ke.ALLIANCE_CURRENCY_LOOT_FACTOR_MIN = "allianceCurrencyLootFactorMin";
Ke.ALLIANCE_REWARD_SET_ID = "allianceRewardSetID";
Ke.PLAYER_REWARD_SET_ID = "playerRewardSetID";
Ke.ALLIANCE_REWARD_ID = "allianceRewardID";
Ke.ALLIANCE_RANK_POINTS = "allianceRankPoints";
Ke.ALLIANCE_BATTLE_GROUND_TOWER = "allianceTower";
Ke.DIALOG_STATISTIC_IDS = "dialogStatisticIDs";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_ID = "allianceTowerID";
Ke.TOWER_BASE_POINTS = "addAllianceTowerPoints";
Ke.TOWER_LEVEL_MULTIPLIER = "allianceTowerLevelMultiplier";
Ke.DEFEATED_PLAYER_CASTLES_BASE_POINTS = "defeatedPVPBasePoints";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ID = "allianceTowerEffectID";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_IDS = "allianceTowerEffectIDs";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT = "allianceTowerEffect";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_BASE = "effectStartValue";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_INCREASE = "effectIncrease";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_MAX = "effectMaxLevel";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_BASE_PRICE = "effectBasePrice";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ACTIVATION = "allianceTowerEffectsActivation";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_EFFECT_ACTIVATION_ID = "allianceTowerEffectsActivationID";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_REMAINING = "remainingTime";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_COST = "cost";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_LOSS_MALUS = "defenceTowerLossMalus";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_MAX_MALUS = "defenceTowerLossMalusMax";
Ke.ALLIANCE_BATTLE_GROUND_TOWER_MALUS_CURRENCY = "malusCurrencyID";
Ke.BASE_LEVEL = "baseLevel";
Ke.INITINAL_ALLIANCE_FAME = "allianceFame";
Ke.INITINAL_ALLIANCE_MIGHT = "allianceMight";
Ke.LANDMARK = "landmark";
Ke.LANDMARK_ID = "landmarkID";
Ke.EMPTY_MIN_CONQUER_LEVEL = "emptyMinConquerLevel";
Ke.MIN_DEFENSE_LEVEL = "minDefenseLevel";
Ke.DEFAULT_LEVEL = "defaultLevel";
Ke.IS_DEFAULT = "isDefault";
Ke.METROPOLIS_LANDMARK_ID = "metropolisLandmarkID";
Ke.CAPITAL_LANDMARK_ID = "capitalLandmarkID";
Ke.FORTUNE_TELLER_CLASS = "fortuneTellerClass";
Ke.FORTUNE_TELLER_CLASS_ID = "fortuneTellerClassID";
Ke.TOP_REWARD_ID = "toprewardID";
Ke.DISTRICT_TYPE_ID = "districtTypeID";
Ke.IS_DISTRICT = "isDistrict";
Ke.DISTRICT_BUILDING_SLOTS = "districtSlots";
Ke.DISTRICT_TYPE = "districtType";
Ke.NEWSLETTER_REWARD = "newsletterReward";
Ke.NEWSLETTER_ID = "newsLetterID";
Ke.CURRENCY_RARENESS = "currencyRareness";
Ke.CURRENCY_RARENESS_RARENESS = "rareness";
Ke.ISLAND_PREBUILT_CASTLE = "islandPreBuiltCastle";
Ke.ALLIANCE_REWARD_IDs = "allianceRewardIDs";
Ke.PLAYER_REWARD_IDs = "playerRewardIDs";
Ke.CONSTRUCTION_ITEM_DISASSEMBLING_TOMBOLA = "constructionItemDisassemblingTombola";
Ke.CONSTRUCTION_ITEM_DISASSEMBLING_TOMBOLA_ID = "constructionItemDisassemblingTombolaID";
Ke.DISASSEMBLING_TOMBOLA_ID = "disassemblingTombolaID";
Ke.CRAFTING_RECIPE = "craftingRecipe";
Ke.CRAFTING_RECIPE_ID = "craftingRecipeId";
Ke.QUEUE_TYPE_ID = "queueTypeId";
Ke.CRAFTING_QUEUE = "craftingQueue";
Ke.CRAFTING_QUEUE_ID = "craftingQueueId";
Ke.PERMANENT_PRODUCTION_SLOTS = "permanentProductionSlots";
Ke.TEMPORARY_PRODUCTION_SLOTS = "temporaryProductionSlots";
Ke.PRODUCTION_SLOT_UNLOCK_BASE_COST_C1 = "productionSlotUnlockCostC1";
Ke.PRODUCTION_SLOT_UNLOCK_DURATION = "productionSlotUnlockDuration";
Ke.PERMANENT_QUEUE_SLOTS = "permanentQueueSlots";
Ke.TEMPORARY_QUEUE_SLOTS = "temporaryQueueSlots";
Ke.QUEUE_SLOT_UNLOCK_BASE_COST_C1 = "queueSlotUnlockCostC1";
Ke.QUEUE_SLOT_UNLOCK_DURATION = "queueSlotUnlockDuration";
Ke.RECIPE_GROUP_ID = "recipeGroupID";
Ke.CRAFTING_RESEARCH_GROUP_ID = "researchGroupID";
Ke.CURRENCY_CLEAR_COMPENSATION = "currencyClearCompensation";
Ke.CURRENCY_CLEAR_COMPENSATION_ID = "currencyClearCompensationID";
Ke.MIN_CURRENCY_AMOUNT = "minCurrencyAmount";
Ke.EVENT_AUTO_SCALING = "eventAutoScaling";
Ke.EVENT_AUTO_SCALING_ID = "eventAutoScalingID";
Ke.WALL_REDUCTION_BOOST = "wallReductionBoost";
Ke.GATE_REDUCTION_BOOST = "gateReductionBoost";
Ke.MOAT_REDUCTION_BOOST = "moatReductionBoost";
Ke.GUARDS_REDUCTION_BOOST = "guardsReductionBoost";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MIN_DEFENSE = "normalDiffDefStrengthBoostMinDefense";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MAX_DEFENSE = "normalDiffDefStrengthBoostMaxDefense";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MIN_DEFENSE = "premiumDiffDefStrengthBoostMinDefense";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MAX_DEFENSE = "premiumDiffDefStrengthBoostMaxDefense";
Ke.MAX_TROOP_CAPACITY_DEFENSE = "maxTroopCapacityDefense";
Ke.RANDOM_FACTOR_DEFENSE = "randomFactorDefense";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MIN_ATTACK = "normalDiffDefStrengthBoostMinAttack";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_NORMAL_MAX_ATTACK = "normalDiffDefStrengthBoostMaxAttack";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MIN_ATTACK = "premiumDiffDefStrengthBoostMinAttack";
Ke.DIFF_DEFENSE_STRENGTH_BOOST_PREMIUM_MAX_ATTACK = "premiumDiffDefStrengthBoostMaxAttack";
Ke.MAX_TROOP_CAPACITY_ATTACK = "maxTroopCapacityAttack";
Ke.RANDOM_FACTOR_ATTACK = "randomFactorAttack";
Ke.WAVES_PER_TOOL = "wavesPerTool";
Ke.MIN_DEF_STRENGTH = "minDefStrength";
Ke.DEFAULT_DEFENSE_UNITS = "defaultDefenseUnits";
Ke.TOOL_PLAYER_LEVEL = "toolPlayerLevel";
Ke.DEFAULT_WALL_DEFENSE_TOOLS = "defaultWallDefenseTools";
Ke.DEFAULT_GATE_DEFENSE_TOOLS = "defaultGateDefenseTools";
Ke.DEFAULT_MOAT_DEFENSE_TOOLS = "defaultMoatDefenseTools";
Ke.DEFAULT_RANGE_DEFENSE_TOOLS = "defaultRangeDefenseTools";
Ke.DEFAULT_MELEE_DEFENSE_TOOLS = "defaultMeleeDefenseTools";
Ke.DEFAULT_ATTACK_UNITS = "defaultAttackUnits";
Ke.DEFAULT_RANGE_ATTACK_TOOLS = "defaultRangeAttackTools";
Ke.DEFAULT_MELEE_ATTACK_TOOLS = "defaultMeleeAttackTools";
Ke.MAX_DEFENSE_STRENGTH_MULTIPLIER = "maxDefenseStrengthMultiplier";
Ke.NPC_DEFENSE_SCORE_MULTIPLIER = "npcDefenseScoreMultiplier";
Ke.EVENT_AUTO_SCALING_HOL_SKILL = "eventAutoScalingHoLSkill";
Ke.EVENT_AUTO_SCALING_LEGEND_ID = "eventAutoScalingLegendID";
Ke.PLAYER_LEGEND_SKILL_EFFECT = "playerLegendSkillEffect";
Ke.MAPPING_LEGEND_SKILL_EFFECT = "mappingLegendSkillEffect";
Ke.EVENT_AUTO_SCALING_CI = "eventAutoScalingCI";
Ke.EVENT_AUTO_SCALING_CI_ID = "eventAutoScalingCiID";
Ke.USEABLE_CI_GROUP_IDS = "useableConstructionItemGroupIDs";
Ke.EVENT_AUTO_SCALING_UNIT_PAIRING = "eventAutoScalingUnitPairing";
Ke.UNIT_PAIR_ID = "unitPairID";
Ke.PLAYER_WOD_ID = "playerWodID";
Ke.MAPPING_WOD_ID = "mappingWodID";
Ke.MIN_DIFFICULTY_ID = "minDifficultyID";
Ke.MAX_DIFFICULTY_ID = "maxDifficultyID";
Ke.EVENT_AUTO_SCALING_TOOL_PAIRING = "eventAutoScalingToolPairing";
Ke.TOOL_PAIR_ID = "toolPairID";
Ke.EVENT_AUTO_SCALING_BARON_EFFECT = "eventAutoScalingLordEffect";
Ke.EVENT_AUTO_SCALING_BARON_EFFECT_ID = "eventAutoScalingLordEffectID";
Ke.MIN_VALUE = "minValue";
Ke.EFFECT_GROUP = "effectGroup";
Ke.EVENT_AUTO_SCALING_DIFFICULTY = "eventAutoScalingDifficulty";
Ke.DIFFICULTY_ID = "difficultyID";
Ke.DIFFICULTY_TYPE_ID = "difficultyTypeID";
Ke.IS_LOCKED = "isLocked";
Ke.RENT_C2_COST = "rentC2Cost";
Ke.UNLOCKS_DIFFICULTY = "unlocksDifficulty";
Ke.EVENT_AUTO_SCALING_CAMP = "eventAutoScalingCamp";
Ke.EVENT_AUTO_SCALING_CAMP_ID = "eventAutoScalingCampID";
Ke.CAMP_LEVEL = "camplevel";
Ke.GENERATE_ATTACKS = "generateAttacks";
Ke.ATTACK_WAVE_AMOUNT = "attackWaveAmount";
Ke.ATTACK_WAVE_AMOUNT_MIN = "attackWaveAmountMin";
Ke.ATTACK_WAVE_AMOUNT_MAX = "attackWaveAmountMax";
Ke.FLANK_TOOLS_PER_WAVE = "flankToolsPerWave";
Ke.FLANK_TOOLS_PER_WAVE_MIN = "flankToolsPerWaveMin";
Ke.FLANK_TOOLS_PER_WAVE_MAX = "flankToolsPerWaveMax";
Ke.FRONT_TOOLS_PER_WAVE = "frontToolsPerWave";
Ke.FRONT_TOOLS_PER_WAVE_MIN = "frontToolsPerWaveMin";
Ke.FRONT_TOOLS_PER_WAVE_MAX = "frontToolsPerWaveMax";
Ke.SAVE_SETTING_FOR_NUMBER_OF_ATTACKS = "saveSettingForNumberOfAttacks";
Ke.BETA_SERVER_PREBUILT_CASTLE = "betaServerPreBuiltCastle";
Ke.PLAYER_NAME_CHANGE = "playerNameChange";
Ke.NAME_CHANGE_ID = "nameChangeID";
Ke.OLD_NAME = "oldName";
Ke.NEW_NAME = "newName";
Ke.WELCOME_BACK_REWARD = "welcomeBackReward";
Ke.WELCOME_BACK_REWARD_ID = "welcomeBackRewardID";
Ke.MIN_INACTIVE_DAYS = "minInactiveDays";
Ke.MAX_INACTIVE_DAYS = "maxInactiveDays";
Ke.ENTRY_ID = "entryID";
Ke.LOOT_BOX = "lootBox";
Ke.LOOT_BOX_TOMBOLA = "lootBoxTombola";
Ke.LOOT_BOX_KEY_TOMBOLA = "lootBoxKeyTombola";
Ke.LOOT_BOX_ID = "lootBoxID";
Ke.LOOT_BOX_THEME = "lootBoxTheme";
Ke.LOOT_BOX_TYPE = "lootBoxType";
Ke.LOOT_BOX_TYPE_ID = "lootBoxTypeID";
Ke.LOOT_BOX_TOMBOLA_ID = "lootBoxTombolaID";
Ke.DRAWS = "draws";
Ke.LOOT_BOX_KEY_TOMBOLA_ID = "lootBoxKeyTombolaID";
Ke.SORT_ORDER = "sortOrder";
Ke.LOOT_BOX_KEY_PAYOUT_THRESHOLD = "lootBoxKeyPayoutThreshold";
Ke.RARITY = "rarity";
Ke.REWARD_CATEGORY = "rewardCategory";
Ke.GENERAL = "general";
Ke.GENERAL_ID = "generalID";
Ke.MIN_GENERAL_STAR_TIER = "minGeneralStarTier";
Ke.GENERAL_RARITY = "generalRarity";
Ke.GENERAL_RARITY_ID = "generalRarityID";
Ke.MAX_STAR_LEVEL = "maxStarLevel";
Ke.XP_REQUIREMENTS = "xpRequirements";
Ke.UNLOCK_COSTS = "unlockCosts";
Ke.UPGRADE_COSTS = "upgradeCosts";
Ke.UNIVERSAL_SHARDS_PER_HUNDRED = "universalShardsPerHundred";
Ke.UNLOCK_CURRENCY_ID = "unlockCurrencyID";
Ke.UPGRADE_CURRENCY_IDS = "upgradeCurrencyIDs";
Ke.GENERAL_SKILL_TIER = "generalSkillTier";
Ke.GENERAL_SKILL = "generalSkill";
Ke.PREVIOUS_TIER_REQUIRED_SKILL_POINTS = "previousTierRequiredSkillPoints";
Ke.CHARACTER = "character";
Ke.CHARACTER_ID = "characterID";
Ke.SPIN_RARITIES = "spinRarities";
Ke.TOMBOLAS = "tombolas";
Ke.COOL_DOWN_IN_SECONDS = "coolDownInSeconds";
Ke.BAD_LUCK_PROTECTION_DRAW_AMOUNT = "badLuckProtectionDrawAmount";
Ke.FREE_OPENING_TOMBOLA_ID = "freeOpeningTombolaID";
Ke.MAX_FREE_OPENINGS = "maxFreeOpenings";
Ke.BAD_LUCK_SPIN_RARITIES = "badLuckSpinRarities";
Ke.UNLUCKY_TOTAL_POINTS = "unluckyTotalPoints";
Ke.ATTACK_SLOT = "attackSlots";
Ke.DEFENSE_SLOT = "defenseSlots";
Ke.GENERALS_RESPEC_PACKAGE = "generalsRespecPackage";
Ke.IS_PREVIEW = "isPreview";
Ke.IS_NPC_GENERAL = "isNPCGeneral";
Ke.GENERAL_SKIP_FINISH_QUEST = "generalSkipFinishQuest";
Ke.GENERAL_SKIP_FINISH_QUEST_ID = "generalSkipFinishQuestID";
Ke.AFFECTS_ENEMY_ARMY = "affectsEnemyArmy";
Ke.GENERAL_ABILITY = "generalAbility";
Ke.ABILITY_ID = "abilityID";
Ke.ABILITY_GROUP_ID = "abilityGroupID";
Ke.ABILITY_TRIGGER_ID = "abilityTriggerID";
Ke.GENERAL_ABILITY_EFFECT = "generalAbilityEffect";
Ke.ABILITY_EFFECT_ID = "abilityEffectID";
Ke.ABILITY_ATTACK_EFFECT_ID = "abilityAttackEffectID";
Ke.ABILITY_DEFENSE_EFFECT_ID = "abilityDefenseEffectID";
Ke.PRIORITY = "priority";
Ke.TRIGGER_PER_WAVE = "triggerPerWave";
Ke.GENERAL_ABILITY_TRIGGER = "generalAbilityTrigger";
Ke.GENERAL_SLOT = "generalSlot";
Ke.ABILITY_GROUP_IDS = "abilityGroupIDs";
Ke.AREA_SPECIFIC_EFFECTS = "areaSpecificEffects";
Ke.GENERAL_XP_ITEM = "generalXpItem";
Ke.XP_AMOUNT = "xpAmount";
Ke.XP_PER_ITEM_ID = "xpPerItemID";
Ke.MESSAGE_RESTRICTION_ID = "messageRestrictionID";
Ke.MESSAGE_TYPE = "messageType";
Ke.DAILY_LIMIT_PER_PLAYER = "dailyLimitPerPlayer";
Ke.MIN_LEVEL_GLOBAL_SERVER = "minLevelGlobalServer";
Ke.MESSAGE_RESTRICTION = "messageRestriction";
Ke.CROSSPLAY_ID = "crossplayID";
Ke.CROSSPLAY_MIN_LEVEL = "crossplayMinLevel";
Ke.RESOURCE = "resource";
Ke.RESOURCE_ID = "resourceID";
Ke.DONATION_TYPE = "donationType";
Ke.DONATION_TYPE_ID = "donationTypeID";
Ke.DONATION_SETTING = "donationSetting";
Ke.DONATION_SETTING_ID = "donationSettingID";
Ke.DONATION_ITEM = "donationItem";
Ke.DONATION_ITEM_ID = "donationItemID";
Ke.DONATION_ITEM_SET_ID = "donationItemSetID";
Ke.DONATION_ITEM_RATIO = "ratio";
Ke.DONATION_ITEM_MAX_POINT_LIMIT = "maxPointLimit";
Ke.DONATION_REWARD = "donationReward";
Ke.DONATION_REWARD_ID = "donationRewardID";
Ke.DONATION_REWARD_MIN_POINTS = "minPoints";
Ke.DONATION_ITEM_RESET = "reset";
Ke.GACHA_ID = "gachaID";
Ke.TOMBOLA_SPINS_AMOUNT = "tombolaSpinsAmount";
Ke.GACHA_LEVEL = "gachaLevel";
Ke.MIN_PULLS = "minPulls";
Ke.MAX_PULLS = "maxPulls";
Ke.MULTI_PULL_MAX = "multiPullMax";
Ke.FREE_CHEST_RESET_TIME = "freeChestResetTime";
Ke.FREE_CHEST_REWARD_ID = "freeChestRewardID";
Ke.GACHA = "gachaEvent";
Ke.LEAGUE_TYPE_IDS = "leagueTypeIDs";
Ke.ALLIANCE_COAT_LAYOUT = "allianceCoatLayout";
Ke.ALLIANCE_COAT_LAYOUT_ID = "allianceCoatLayoutID";
Ke.ALLIANCE_COAT_COLOR_ID = "allianceCoatColorID";
Ke.ALLIANCE_COAT_COLOR = "allianceCoatColor";
Ke.COLOR = "color";
Ke.NO_OF_COLORS = "noofColors";
Ke.ALLIANCE_COAT_LAYOUT_IDS = "allianceCoatLayoutIDs";
Ke.MAX_DURATION = "maxDuration";
Ke.LEADERBOARD_REWARD = "leaderboardReward";
Ke.LEADERBOARD_REWARD_ID = "leaderboardRewardID";
Ke.LEADERBOARD_REWARD_SET_ID = "leaderboardRewardSetID";
Ke.LEADERBOARD_REWARD_LEAGUE_ID = "leagueID";
exports.WODConst = Ke;
Ke.__class = "WODConst";
var Ye = function () {
  function WorldClassic() {}
  WorldClassic.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassic.OUTPOST_TYPE_COUNT == null) {
      WorldClassic.OUTPOST_TYPE_COUNT = [1, 4, 1, 4, 1, 3, 1, 3];
    }
    return WorldClassic.OUTPOST_TYPE_COUNT;
  };
  WorldClassic.AREA_MAP_$LI$ = function () {
    if (WorldClassic.AREA_MAP == null) {
      WorldClassic.AREA_MAP = [[1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0], [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 1], [0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2], [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1], [2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0], [0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0], [2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0], [0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]];
    }
    return WorldClassic.AREA_MAP;
  };
  WorldClassic.prototype.getAreaMap = function () {
    return WorldClassic.AREA_MAP_$LI$();
  };
  WorldClassic.prototype.getKingdomId = function () {
    return WorldClassic.KINGDOM_ID;
  };
  WorldClassic.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassic.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassic.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassic.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassic.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassic.prototype.getTypeCount = function () {
    return WorldClassic.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassic.prototype.getActiveTypeCount = function () {
    return WorldClassic.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassic.prototype.isExtension = function () {
    return WorldClassic.IS_EXTENSION;
  };
  return WorldClassic;
}();
Ye.KINGDOM_ID = 0;
Ye.IS_EXTENSION = false;
Ye.WOOD_PRODUCERS = 3;
Ye.STONE_PRODUCERS = 3;
Ye.FOOD_PRODUCERS = 3;
Ye.BEEF_PRODUCERS = 3;
Ye.IRON_PRODUCERS = 2;
exports.WorldClassic = Ye;
Ye.__class = "WorldClassic";
Ye.__interfaces = ["IAreaMap"];
var ze = function () {
  function WorldClassicBattleGroundGroundZero() {}
  WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundGroundZero.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundGroundZero.AREA_MAP == null) {
      WorldClassicBattleGroundGroundZero.AREA_MAP = [[0, 1, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 0, 1, 0, 1, 0], [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0], [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 0, 2, 0, 0, 2, 0, 99, 3, 99, 1, 0, 0, 2, 0, 2, 99, 3, 99, 2, 0, 2, 0, 0, 1, 99, 3, 99, 0, 2, 0, 0, 2, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 2, 0, 1, 0, 1, 0, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 23, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 0, 1, 0, 1, 0, 2, 0, 0], [1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 0, 23, 0, 23, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 1, 0, 0, 1], [2, 0, 2, 0, 0, 1, 99, 3, 99, 22, 99, 22, 99, 99, 22, 99, 23, 0, 0, 0, 0, 0, 23, 99, 22, 99, 99, 22, 99, 22, 99, 3, 99, 1, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 2, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0, 0, 1, 99, 99, 99, 99, 99, 1, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 1, 99, 99, 99, 99, 99, 1, 0, 1, 0, 0, 1, 0, 0], [0, 2, 0, 0, 1, 0, 99, 99, 99, 3, 99, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 99, 99, 0, 1, 0, 0, 2, 0], [0, 0, 1, 0, 0, 2, 99, 3, 99, 99, 99, 99, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 99, 99, 99, 99, 3, 99, 2, 0, 0, 1, 0, 2], [0, 2, 0, 2, 0, 0, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 0, 0, 2, 0, 0, 0], [1, 0, 1, 0, 0, 2, 99, 3, 99, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 99, 3, 99, 2, 0, 0, 1, 0, 0], [0, 0, 0, 0, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 0, 0, 0, 1], [2, 0, 0, 1, 99, 3, 99, 23, 0, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 0, 23, 99, 3, 99, 1, 0, 2, 0], [0, 0, 0, 0, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 0, 0, 0, 1], [1, 0, 1, 0, 99, 2, 99, 3, 99, 0, 0, 0, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 0, 0, 0, 99, 3, 99, 0, 2, 0, 1, 0, 0], [0, 2, 0, 2, 0, 0, 99, 99, 99, 0, 0, 23, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 23, 0, 0, 99, 99, 99, 0, 0, 2, 0, 2, 0], [0, 0, 1, 0, 0, 2, 99, 3, 99, 99, 99, 99, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 99, 99, 99, 99, 3, 99, 2, 0, 0, 1, 0, 1], [0, 2, 0, 0, 1, 0, 99, 99, 99, 3, 99, 22, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 99, 99, 0, 1, 0, 0, 2, 0], [1, 0, 1, 0, 0, 0, 0, 1, 99, 99, 99, 99, 99, 1, 99, 22, 99, 22, 99, 22, 99, 22, 99, 22, 99, 1, 99, 99, 99, 99, 99, 1, 0, 2, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 2, 0, 0, 0, 0], [2, 0, 2, 0, 0, 1, 99, 3, 99, 22, 99, 22, 99, 99, 22, 99, 23, 0, 0, 0, 0, 0, 23, 99, 22, 99, 99, 22, 99, 22, 99, 3, 99, 1, 0, 0, 2, 0, 0], [0, 0, 0, 1, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 1, 0, 0, 1], [0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 0, 23, 0, 23, 0, 0, 99, 3, 99, 3, 99, 3, 99, 3, 99, 0, 2, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 1, 0, 1, 0, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 23, 99, 3, 99, 3, 99, 1, 99, 3, 99, 3, 99, 0, 1, 0, 1, 0, 2, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 0, 99, 99, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 2, 0, 0, 2, 0, 99, 3, 99, 1, 0, 0, 2, 0, 2, 99, 3, 99, 2, 0, 2, 0, 0, 1, 99, 3, 99, 0, 2, 0, 2, 0, 1, 0, 0, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 2, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0], [1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 0], [2, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0]];
    }
    return WorldClassicBattleGroundGroundZero.AREA_MAP;
  };
  WorldClassicBattleGroundGroundZero.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundGroundZero.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundGroundZero.KINGDOM_ID;
  };
  WorldClassicBattleGroundGroundZero.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundGroundZero.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundGroundZero.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundGroundZero.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundGroundZero.prototype.isExtension = function () {
    return WorldClassicBattleGroundGroundZero.IS_EXTENSION;
  };
  return WorldClassicBattleGroundGroundZero;
}();
ze.KINGDOM_ID = 0;
ze.IS_EXTENSION = true;
ze.WOOD_PRODUCERS = 3;
ze.STONE_PRODUCERS = 3;
ze.FOOD_PRODUCERS = 3;
ze.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundGroundZero = ze;
ze.__class = "WorldClassicBattleGroundGroundZero";
ze.__interfaces = ["IAreaMap"];
var Ze = function () {
  function WorldClassicBattleGroundHiddenStar() {}
  WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundHiddenStar.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundHiddenStar.AREA_MAP == null) {
      WorldClassicBattleGroundHiddenStar.AREA_MAP = [[0, 0, 0, 0, 2, 0, 99, 99, 99, 2, 0, 1, 0, 2, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 2, 0, 1, 0, 2, 99, 99, 99, 0, 2, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 1, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 1, 0, 99, 99, 99], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99], [99, 99, 99, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 23, 0, 23, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 99, 99, 99], [99, 3, 99, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 2, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 99, 99, 99, 0, 23, 0, 23, 0, 2, 0, 99, 99, 99, 0, 0, 0, 1, 0, 2, 0, 99, 99, 99, 0, 99, 99, 99, 0, 2, 0, 23, 0, 23, 0, 99, 99, 99, 0], [0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 0, 99, 22, 99, 99, 99, 99, 0, 0, 0, 0, 99, 3, 99, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0], [0, 99, 99, 99, 1, 0, 0, 1, 0, 0, 0, 99, 99, 99, 99, 3, 99, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 1, 99, 99, 99, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0, 2, 99, 3, 99, 0, 0, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 2, 0, 0], [0, 1, 0, 0, 99, 99, 99, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 99, 99, 99, 0, 0, 99, 22, 99, 0, 99, 99, 99, 0, 0, 0, 1], [0, 0, 0, 0, 99, 22, 99, 0, 99, 99, 99, 0, 23, 0, 2, 99, 99, 99, 0, 0, 0, 0, 2, 99, 3, 99, 23, 0, 99, 99, 99, 0, 99, 22, 99, 0, 0, 0, 0], [99, 99, 99, 0, 99, 99, 99, 1, 0, 0, 2, 0, 0, 0, 0, 99, 3, 99, 2, 0, 0, 0, 0, 99, 99, 99, 0, 0, 2, 0, 0, 1, 99, 99, 99, 0, 99, 99, 99], [99, 22, 99, 0, 0, 0, 2, 0, 0, 0, 0, 0, 23, 0, 0, 99, 99, 99, 0, 0, 23, 0, 1, 0, 0, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 0, 99, 22, 99], [99, 99, 99, 0, 1, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 1, 0, 99, 99, 99], [0, 0, 2, 0, 0, 0, 0, 0, 99, 3, 99, 0, 1, 0, 0, 0, 0, 0, 1, 0, 23, 0, 99, 99, 99, 0, 1, 0, 99, 3, 99, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 0], [0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 23, 0, 0, 99, 3, 99, 0, 0, 23, 0, 99, 99, 99, 0, 23, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0], [0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99], [0, 2, 0, 0, 0, 0, 0, 2, 99, 99, 99, 0, 23, 0, 0, 0, 2, 0, 0, 99, 99, 99, 0, 0, 1, 0, 23, 0, 99, 99, 99, 2, 0, 0, 0, 0, 99, 3, 99], [99, 99, 99, 0, 1, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 0, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 0, 1, 0, 99, 99, 99], [99, 3, 99, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 1, 0, 99, 99, 99, 0, 1, 0, 2, 0, 0, 99, 99, 99, 0, 1, 0, 0, 0, 2, 0, 0], [99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 23, 0, 23, 0, 99, 99, 99, 0, 0, 99, 3, 99, 0, 1, 0, 0, 99, 99, 99, 0, 0, 0, 2, 99, 3, 99, 0, 0, 99, 99, 99, 0, 23, 0, 23, 0, 2], [0, 0, 0, 0, 0, 0, 99, 22, 99, 0, 0, 99, 99, 99, 0, 0, 0, 2, 99, 22, 99, 1, 0, 0, 0, 99, 99, 99, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0], [2, 0, 23, 0, 23, 0, 99, 99, 99, 0, 1, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 1, 0, 99, 99, 99, 0, 23, 0, 23, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 99, 22, 99, 0, 0, 0, 0, 0, 99, 22, 99, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 1, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 99, 99, 99, 0, 23, 0, 23, 0, 99, 99, 99, 0, 99, 99, 99, 0, 0, 0, 99, 99, 99, 1, 0, 2, 0], [0, 0, 0, 0, 99, 22, 99, 0, 1, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 99, 22, 99, 0, 1, 0, 99, 22, 99, 0, 0, 0, 0], [0, 1, 0, 0, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 23, 0, 23, 0, 0, 99, 99, 99, 99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 99, 99, 99, 2, 0, 0, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 1, 0, 0, 0], [99, 3, 99, 0, 0, 0, 99, 22, 99, 0, 0, 1, 0, 0, 99, 3, 99, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 99, 22, 99, 0, 0, 0, 0, 0, 0], [99, 99, 99, 0, 1, 0, 99, 99, 99, 99, 99, 99, 0, 0, 99, 99, 99, 0, 1, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 99, 99, 99, 0, 1, 0, 99, 99, 99], [0, 0, 0, 0, 0, 0, 2, 0, 0, 99, 3, 99, 0, 1, 0, 0, 0, 0, 0, 0, 99, 3, 99, 0, 1, 0, 0, 99, 3, 99, 0, 0, 2, 0, 0, 0, 99, 3, 99], [0, 0, 0, 0, 0, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 2, 0, 99, 99, 99, 0, 0, 0, 0, 99, 99, 99, 0, 0, 0, 0, 0, 0, 99, 99, 99]];
    }
    return WorldClassicBattleGroundHiddenStar.AREA_MAP;
  };
  WorldClassicBattleGroundHiddenStar.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundHiddenStar.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundHiddenStar.KINGDOM_ID;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundHiddenStar.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundHiddenStar.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundHiddenStar.prototype.isExtension = function () {
    return WorldClassicBattleGroundHiddenStar.IS_EXTENSION;
  };
  return WorldClassicBattleGroundHiddenStar;
}();
Ze.KINGDOM_ID = 0;
Ze.IS_EXTENSION = true;
Ze.WOOD_PRODUCERS = 3;
Ze.STONE_PRODUCERS = 3;
Ze.FOOD_PRODUCERS = 3;
Ze.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundHiddenStar = Ze;
Ze.__class = "WorldClassicBattleGroundHiddenStar";
Ze.__interfaces = ["IAreaMap"];
var Xe = function () {
  function WorldClassicBattleGroundLineBreak() {}
  WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT = [1, 0, 1, 0, 1, 0, 1, 0];
    }
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundLineBreak.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundLineBreak.AREA_MAP == null) {
      WorldClassicBattleGroundLineBreak.AREA_MAP = [[1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 23, 0, 2, 1, 0], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99, 99, 3, 99, 22, 99, 3, 99, 22, 99, 3, 99, 22, 99], [99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], [1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0, 1, 99, 3, 99, 3, 99, 23, 2, 99, 3, 99, 1, 0], [0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2, 0, 99, 99, 99, 99, 99, 1, 0, 99, 99, 99, 0, 2], [2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 23, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0, 0, 0, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 0], [99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99, 99, 99, 99, 3, 99, 22, 99, 0, 99, 3, 99, 99, 99], [99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99, 99, 3, 99, 99, 99, 99, 99, 1, 99, 99, 99, 3, 99], [99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99, 99, 99, 99, 22, 99, 3, 99, 0, 99, 22, 99, 99, 99], [0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23, 0, 1, 99, 99, 99, 99, 99, 2, 99, 99, 99, 1, 23], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2]];
    }
    return WorldClassicBattleGroundLineBreak.AREA_MAP;
  };
  WorldClassicBattleGroundLineBreak.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundLineBreak.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundLineBreak.KINGDOM_ID;
  };
  WorldClassicBattleGroundLineBreak.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundLineBreak.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundLineBreak.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundLineBreak.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundLineBreak.prototype.isExtension = function () {
    return WorldClassicBattleGroundLineBreak.IS_EXTENSION;
  };
  return WorldClassicBattleGroundLineBreak;
}();
Xe.KINGDOM_ID = 0;
Xe.IS_EXTENSION = true;
Xe.WOOD_PRODUCERS = 3;
Xe.STONE_PRODUCERS = 3;
Xe.FOOD_PRODUCERS = 3;
Xe.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundLineBreak = Xe;
Xe.__class = "WorldClassicBattleGroundLineBreak";
Xe.__interfaces = ["IAreaMap"];
var Qe = function () {
  function WorldClassicBattleGroundTowers() {}
  WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$ = function () {
    if (WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT == null) {
      WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT;
  };
  WorldClassicBattleGroundTowers.AREA_MAP_$LI$ = function () {
    if (WorldClassicBattleGroundTowers.AREA_MAP == null) {
      WorldClassicBattleGroundTowers.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0], [0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldClassicBattleGroundTowers.AREA_MAP;
  };
  WorldClassicBattleGroundTowers.prototype.getAreaMap = function () {
    return WorldClassicBattleGroundTowers.AREA_MAP_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.getKingdomId = function () {
    return WorldClassicBattleGroundTowers.KINGDOM_ID;
  };
  WorldClassicBattleGroundTowers.prototype.isClassicWorld = function () {
    return true;
  };
  WorldClassicBattleGroundTowers.prototype.isDessertWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isIceWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.isIslandWorld = function () {
    return false;
  };
  WorldClassicBattleGroundTowers.prototype.getTypeCount = function () {
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.getActiveTypeCount = function () {
    return WorldClassicBattleGroundTowers.OUTPOST_TYPE_COUNT_$LI$();
  };
  WorldClassicBattleGroundTowers.prototype.isExtension = function () {
    return WorldClassicBattleGroundTowers.IS_EXTENSION;
  };
  return WorldClassicBattleGroundTowers;
}();
Qe.KINGDOM_ID = 0;
Qe.IS_EXTENSION = true;
Qe.WOOD_PRODUCERS = 3;
Qe.STONE_PRODUCERS = 3;
Qe.FOOD_PRODUCERS = 3;
Qe.IRON_PRODUCERS = 2;
exports.WorldClassicBattleGroundTowers = Qe;
Qe.__class = "WorldClassicBattleGroundTowers";
Qe.__interfaces = ["IAreaMap"];
var $e = function () {
  function WorldConst() {}
  WorldConst.ALIEN_CAMP_AREA_TYPES_$LI$ = function () {
    if (WorldConst.ALIEN_CAMP_AREA_TYPES == null) {
      WorldConst.ALIEN_CAMP_AREA_TYPES = [WorldConst.AREA_TYPE_ALIEN_CAMP, WorldConst.AREA_TYPE_RED_ALIEN_CAMP];
    }
    return WorldConst.ALIEN_CAMP_AREA_TYPES;
  };
  WorldConst.OUTPOST_TYPE_LIST_$LI$ = function () {
    if (WorldConst.OUTPOST_TYPE_LIST == null) {
      WorldConst.OUTPOST_TYPE_LIST = [[2, 0, 1, 8, 0, 2], [2, 0, 1, 6, 0, 2], [0, 2, 1, 0, 8, 2], [0, 2, 1, 0, 6, 2], [1, 0, 2, 2, 0, 8], [1, 0, 2, 2, 0, 6], [0, 1, 2, 0, 2, 8], [0, 1, 2, 0, 2, 6]];
    }
    return WorldConst.OUTPOST_TYPE_LIST;
  };
  WorldConst.WORLD_IDS_$LI$ = function () {
    if (WorldConst.WORLD_IDS == null) {
      WorldConst.WORLD_IDS = [Ye.KINGDOM_ID, Je.KINGDOM_ID, et.KINGDOM_ID, it.KINGDOM_ID, tt.KINGDOM_ID, B.KINGDOM_ID];
    }
    return WorldConst.WORLD_IDS;
  };
  WorldConst.getSectorCountX = function (e) {
    if (e) {
      return WorldConst.SECTOR_COUNT_ON_TEST;
    } else {
      return WorldConst.SECTOR_COUNT;
    }
  };
  WorldConst.getSectorCountY = function (e) {
    return WorldConst.getSectorCountX(e);
  };
  WorldConst.getSectorCount = function (e) {
    return WorldConst.getSectorCountX(e) * WorldConst.getSectorCountY(e);
  };
  WorldConst.isLaboratoryKingdom = function (e) {
    return Ye.KINGDOM_ID === e || et.KINGDOM_ID === e || Je.KINGDOM_ID === e || it.KINGDOM_ID === e;
  };
  return WorldConst;
}();
$e.SECTOR_WIDTH = 13;
$e.SECTOR_HEIGHT = 13;
$e.AREA_TYPE_EMPTY = 0;
$e.AREA_TYPE_CASTLE = 1;
$e.AREA_TYPE_DUNGEON = 2;
$e.AREA_TYPE_CAPITAL = 3;
$e.AREA_TYPE_OUTPOST = 4;
$e.AREA_TYPE_TREASURE_DUNGEON = 7;
$e.AREA_TYPE_TREASURE_CAMP = 8;
$e.AREA_TYPE_SHADOW_AREA = 9;
$e.AREA_TYPE_VILLAGE = 10;
$e.AREA_TYPE_BOSS_DUNGEON = 11;
$e.AREA_TYPE_KINGDOM_CASTLE = 12;
$e.AREA_TYPE_EVENT_DUNGEON = 13;
$e.AREA_TYPE_NO_LANDMARK = 14;
$e.AREA_TYPE_FACTION_CAMP = 15;
$e.AREA_TYPE_FACTION_VILLAGE = 16;
$e.AREA_TYPE_FACTION_TOWER = 17;
$e.AREA_TYPE_FACTION_CAPITAL = 18;
$e.AREA_TYPE_PLAGUE_AREA = 19;
$e.AREA_TYPE_TROOP_HOSTEL = 20;
$e.AREA_TYPE_ALIEN_CAMP = 21;
$e.AREA_TYPE_METROPOL = 22;
$e.AREA_TYPE_KINGS_TOWER = 23;
$e.AREA_TYPE_ISLE_RESOURCE = 24;
$e.AREA_TYPE_ISLE_DUNGEON = 25;
$e.AREA_TYPE_MONUMENT = 26;
$e.AREA_TYPE_NOMAD_CAMP = 27;
$e.AREA_TYPE_LABORATORY = 28;
$e.AREA_TYPE_SAMURAI_CAMP = 29;
$e.AREA_TYPE_FACTION_INVASION_CAMP = 30;
$e.AREA_TYPE_DYNAMIC = 31;
$e.AREA_TYPE_SAMURAI_ALIEN_CAMP = 33;
$e.AREA_TYPE_RED_ALIEN_CAMP = 34;
$e.AREA_TYPE_ALLIANCE_NOMAD_CAMP = 35;
$e.AREA_TYPE_DAIMYO_CASTLE = 37;
$e.AREA_TYPE_DAIMYO_TOWNSHIP = 38;
$e.AREA_TYPE_ALLIANCE_BATTLE_GROUND_RESOURCE_TOWER = 40;
$e.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER = 41;
$e.AREA_TYPE_WOLF_KING = 42;
$e.AREA_TYPE_NO_OUTPOST = 99;
$e.VILLAGE_TYPE_WOOD = 0;
$e.VILLAGE_TYPE_STONE = 1;
$e.VILLAGE_TYPE_FOOD = 2;
$e.VILLAGE_TYPE_AQUAMARINE = 3;
$e.VILLAGE_TYPE_WOOD_NON_PREMIUM = 4;
$e.VILLAGE_TYPE_STONE_NON_PREMIUM = 5;
$e.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM = 6;
$e.VILLAGE_TYPE_COAL = 7;
$e.VILLAGE_TYPE_OIL = 8;
$e.VILLAGE_TYPE_GLASS = 9;
$e.VILLAGE_TYPE_IRON = 10;
$e.MONUMENT_TYPE_SMALL = 0;
$e.MONUMENT_TYPE_BIG = 1;
$e.LOOKUP_MAP_SIZE = 39;
$e.CAPITAL_RANDOM_POS_OFFSET_XY1 = 5;
$e.CAPITAL_RANDOM_POS_OFFSET_XY2 = 8;
$e.SEED_VALUE_1 = 7;
$e.SEED_VALUE_2 = 923;
$e.CASTLES_PER_SECTOR = 14;
$e.ALIEN_CAMPS_PER_SECTOR = 4;
$e.NOMAD_CAMPS_PER_SECTOR = 4;
$e.SAMURAI_CAMPS_PER_SECTOR = 4;
$e.RED_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
$e.BLUE_FACTION_INVASION_CAMPS_PER_SECTOR = 5;
$e.DAIMYO_CASTLES_PER_SECTOR = 2;
$e.DAIMYO_TOWNSHIPS_PER_SECTOR = 2;
$e.ALLIANCE_NOMAD_CAMPS_PER_SECTOR = 1;
$e.ALLIANCE_SAMURAI_CAMPS_PER_SECTOR = 0;
$e.BLUE_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
$e.RED_ALLIANCE_FACTION_INVASION_CAMPS_PER_SECTOR = 0;
$e.ZERO_ALLIANCE_CAMPS_PER_SECTOR = 0;
$e.SECTOR_COUNT = 99;
$e.SECTOR_COUNT_ON_TEST = 9;
$e.AREA_ID_DYNAMIC_WORLDMAPOBJECT = -1;
exports.WorldConst = $e;
$e.__class = "WorldConst";
var Je = function () {
  function WorldDessert() {}
  WorldDessert.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldDessert.VILLAGE_TYPE_COUNT == null) {
      WorldDessert.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldDessert.VILLAGE_TYPE_COUNT;
  };
  WorldDessert.AREA_MAP_$LI$ = function () {
    if (WorldDessert.AREA_MAP == null) {
      WorldDessert.AREA_MAP = [[0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2], [12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 12, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldDessert.AREA_MAP;
  };
  WorldDessert.prototype.getAreaMap = function () {
    return WorldDessert.AREA_MAP_$LI$();
  };
  WorldDessert.prototype.getTypeCount = function () {
    return WorldDessert.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldDessert.prototype.isClassicWorld = function () {
    return false;
  };
  WorldDessert.prototype.isDessertWorld = function () {
    return true;
  };
  WorldDessert.prototype.isIceWorld = function () {
    return false;
  };
  WorldDessert.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldDessert.prototype.isIslandWorld = function () {
    return false;
  };
  WorldDessert.prototype.getKingdomId = function () {
    return WorldDessert.KINGDOM_ID;
  };
  WorldDessert.prototype.getActiveTypeCount = function () {
    return WorldDessert.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldDessert.prototype.isExtension = function () {
    return WorldDessert.IS_EXTENSION;
  };
  return WorldDessert;
}();
Je.KINGDOM_ID = 1;
Je.IS_EXTENSION = false;
Je.WOOD_PRODUCERS = 1;
Je.STONE_PRODUCERS = 1;
Je.FOOD_PRODUCERS = 2;
Je.BEEF_PRODUCERS = 2;
Je.OIL_PRODUCERS = 2;
exports.WorldDessert = Je;
Je.__class = "WorldDessert";
Je.__interfaces = ["IAreaMap"];
var et = function () {
  function WorldIce() {}
  WorldIce.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldIce.VILLAGE_TYPE_COUNT == null) {
      WorldIce.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldIce.VILLAGE_TYPE_COUNT;
  };
  WorldIce.AREA_MAP_$LI$ = function () {
    if (WorldIce.AREA_MAP == null) {
      WorldIce.AREA_MAP = [[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 2, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0]];
    }
    return WorldIce.AREA_MAP;
  };
  WorldIce.prototype.getAreaMap = function () {
    return WorldIce.AREA_MAP_$LI$();
  };
  WorldIce.prototype.getKingdomId = function () {
    return WorldIce.KINGDOM_ID;
  };
  WorldIce.prototype.isClassicWorld = function () {
    return false;
  };
  WorldIce.prototype.isDessertWorld = function () {
    return false;
  };
  WorldIce.prototype.isIceWorld = function () {
    return true;
  };
  WorldIce.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldIce.prototype.isIslandWorld = function () {
    return false;
  };
  WorldIce.prototype.getTypeCount = function () {
    return WorldIce.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldIce.prototype.getActiveTypeCount = function () {
    return WorldIce.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldIce.prototype.isExtension = function () {
    return WorldIce.IS_EXTENSION;
  };
  return WorldIce;
}();
et.KINGDOM_ID = 2;
et.IS_EXTENSION = false;
et.WOOD_PRODUCERS = 2;
et.STONE_PRODUCERS = 2;
et.FOOD_PRODUCERS = 2;
et.BEEF_PRODUCERS = 2;
et.COAL_PRODUCERS = 2;
et.ADDITIONAL_KINGDOM_CASTLES_COUNT = 2;
exports.WorldIce = et;
et.__class = "WorldIce";
et.__interfaces = ["IAreaMap"];
var tt = function () {
  function WorldIsland() {}
  WorldIsland.ISLE_TYPE_COUNT_$LI$ = function () {
    if (WorldIsland.ISLE_TYPE_COUNT == null) {
      WorldIsland.ISLE_TYPE_COUNT = [1, 4];
    }
    return WorldIsland.ISLE_TYPE_COUNT;
  };
  WorldIsland.AREA_MAP_$LI$ = function () {
    if (WorldIsland.AREA_MAP == null) {
      WorldIsland.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 12], [0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 25], [0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0], [0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 25, 0, 0, 0, 12, 0, 0], [0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 25, 0, 0, 0, 0, 25, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24], [0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 25, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 25, 0, 0], [0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0], [0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0], [0, 24, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 0, 0, 12, 0, 0, 25, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0], [0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 25, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 25, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 25, 0, 0, 24, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 12, 0, 0, 0, 24, 0, 0, 0, 0], [24, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0], [0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0]];
    }
    return WorldIsland.AREA_MAP;
  };
  WorldIsland.prototype.getKingdomId = function () {
    return WorldIsland.KINGDOM_ID;
  };
  WorldIsland.prototype.getAreaMap = function () {
    return WorldIsland.AREA_MAP_$LI$();
  };
  WorldIsland.prototype.isClassicWorld = function () {
    return false;
  };
  WorldIsland.prototype.isDessertWorld = function () {
    return false;
  };
  WorldIsland.prototype.isIceWorld = function () {
    return false;
  };
  WorldIsland.prototype.isVolcanoWorld = function () {
    return false;
  };
  WorldIsland.prototype.isIslandWorld = function () {
    return true;
  };
  WorldIsland.prototype.getTypeCount = function () {
    return WorldIsland.ISLE_TYPE_COUNT_$LI$();
  };
  WorldIsland.prototype.getActiveTypeCount = function () {
    return WorldIsland.ISLE_TYPE_COUNT_$LI$();
  };
  WorldIsland.prototype.isExtension = function () {
    return WorldIsland.IS_EXTENSION;
  };
  return WorldIsland;
}();
tt.KINGDOM_ID = 4;
tt.IS_EXTENSION = false;
tt.HARD_R_ISLES_BELOW_ID = 4;
tt.HARD_R_ISLES_APPEAR_PERCENTAGE = 20;
tt.EASY_R_ISLES_APPEAR_PERCENTAGE = 40;
tt.WOOD_PRODUCERS = 3;
tt.STONE_PRODUCERS = 3;
tt.FOOD_PRODUCERS = 2;
tt.BEEF_PRODUCERS = 2;
exports.WorldIsland = tt;
tt.__class = "WorldIsland";
tt.__interfaces = ["IAreaMap"];
var nt;
var it = function () {
  function WorldVolcano() {}
  WorldVolcano.VILLAGE_TYPE_COUNT_$LI$ = function () {
    if (WorldVolcano.VILLAGE_TYPE_COUNT == null) {
      WorldVolcano.VILLAGE_TYPE_COUNT = [5, 5, 11];
    }
    return WorldVolcano.VILLAGE_TYPE_COUNT;
  };
  WorldVolcano.AREA_MAP_$LI$ = function () {
    if (WorldVolcano.AREA_MAP == null) {
      WorldVolcano.AREA_MAP = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 12, 0, 0, 0, 0], [12, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0], [0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 12, 0, 0], [0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 12, 0], [2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 12, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 2, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2], [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12], [0, 0, 0, 12, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0], [0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 12], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0], [0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12]];
    }
    return WorldVolcano.AREA_MAP;
  };
  WorldVolcano.prototype.getAreaMap = function () {
    return WorldVolcano.AREA_MAP_$LI$();
  };
  WorldVolcano.prototype.getKingdomId = function () {
    return WorldVolcano.KINGDOM_ID;
  };
  WorldVolcano.prototype.isClassicWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isDessertWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isIceWorld = function () {
    return false;
  };
  WorldVolcano.prototype.isVolcanoWorld = function () {
    return true;
  };
  WorldVolcano.prototype.isIslandWorld = function () {
    return false;
  };
  WorldVolcano.prototype.getTypeCount = function () {
    return WorldVolcano.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldVolcano.prototype.getActiveTypeCount = function () {
    return WorldVolcano.VILLAGE_TYPE_COUNT_$LI$();
  };
  WorldVolcano.prototype.isExtension = function () {
    return WorldVolcano.IS_EXTENSION;
  };
  return WorldVolcano;
}();
it.KINGDOM_ID = 3;
it.IS_EXTENSION = false;
it.WOOD_PRODUCERS = 1;
it.STONE_PRODUCERS = 1;
it.FOOD_PRODUCERS = 2;
it.BEEF_PRODUCERS = 2;
it.GLASS_PRODUCERS = 2;
exports.WorldVolcano = it;
it.__class = "WorldVolcano";
it.__interfaces = ["IAreaMap"];
i.POTION_TO_DURATION_$LI$();
i.POTION_TO_BOOST_$LI$();
i.POTION_TO_INGREDIENT_TO_COST_$LI$();
i.HOURS_$LI$();
s.APPLICATION_TIME_TO_LIVE_$LI$();
s.FAME_REDUCE_INTERVAL_TEST_$LI$();
s.FAME_REDUCE_INTERVAL_$LI$();
s.TYPE_TEMP_BUFFS_$LI$();
s.MIN_RANK_FORUM_ADMIN_$LI$();
s.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET_$LI$();
s.ALLIANCE_BOOKMARK_MIN_TIME_OFFSET_$LI$();
s.LOWEST_RANK_$LI$();
s.DIPLOMACY_REQUEST_EXPIRATION_TEST_$LI$();
s.DIPLOMACY_REQUEST_EXPIRATION_$LI$();
s.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_$LI$();
s.DIPLOMACY_REQUEST_EXPIRATION_WAR_TIME_TEST_$LI$();
s.DIPLOMACY_AUTO_WAR_PROTECTION_TEST_$LI$();
s.DIPLOMACY_AUTO_WAR_PROTECTION_$LI$();
s.MIN_MEMBERSHIP_FOR_DONATE_$LI$();
s.MIN_XP_$LI$();
s.ALLIANCE_HELP_REPAIR_COOLDOWN_$LI$();
d.PRIME_SALE_BOOSTER_IDS_$LI$();
d.OVERSEER_DURATION_$LI$();
d.MARAUDER_DURATION_$LI$();
d.INSTRUCTOR_DURATION_$LI$();
d.TAX_BRIBE_DURATION_$LI$();
d.REMINDER_LEAD_TIME_SECONDS_$LI$();
h.NPC_ATTACK_DEFAULT_SOLDIER_IDS_$LI$();
h.GATE_WOD_IDS_VILLAGES_$LI$();
h.WALL_WOD_IDS_VILLAGES_$LI$();
h.FLANKBONUS_$LI$();
h.WAVE_UNLOCK_LEVEL_$LI$();
h.ITEMS_FINALWAVE_UNITS_$LI$();
h.LEVELS_SUPPORT_TOOLS_HOME_AWORKSHOP_$LI$();
h.ITEMS_ASUPPORT_TOOLS_$LI$();
h.LEVELS_RIGHTWALL_UNITS_$LI$();
h.ITEMS_RIGHTWALL_UNITS_$LI$();
h.LEVELS_RIGHTWALL_TOOLS_$LI$();
h.ITEMS_RIGHTWALL_TOOLS_$LI$();
h.LEVELS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$();
h.ITEMS_MIDDLEWALL_UNITS_CROSS_PLAY_$LI$();
h.LEVELS_MIDDLEWALL_UNITS_$LI$();
h.ITEMS_MIDDLEWALL_UNITS_$LI$();
h.LEVELS_MIDDLEWALL_TOOLS_$LI$();
h.ITEMS_MIDDLEWALL_TOOLS_$LI$();
h.LEVELS_LEFTWALL_UNITS_$LI$();
h.ITEMS_LEFTWALL_UNITS_$LI$();
h.LEVELS_LEFTWALL_TOOLS_$LI$();
h.ITEMS_LEFTWALL_TOOLS_$LI$();
C.FREE_SKIP_TIME_$LI$();
C.UNLOCK_DURATION_$LI$();
f.SLOT_TYPE_COUNTS_$LI$();
f.MAX_SLOTS_$LI$();
T.RANDOM_REWARD_STEPS_$LI$();
T.REWARD_STEPS_$LI$();
S.MIN_LEVEL_$LI$();
I.LEVELS_RIGHTWALL_FACTION_$LI$();
I.ITEMS_RIGHTWALL_FACTION_$LI$();
I.LEVELS_MIDDLEWALL_FACTION_$LI$();
I.ITEMS_MIDDLEWALL_FACTION_$LI$();
I.LEVELS_LEFTWALL_FACTION_$LI$();
I.ITEMS_LEFTWALL_FACTION_$LI$();
I.LEVELS_RIGHTMOAT_$LI$();
I.ITEMS_RIGHTMOAT_$LI$();
I.LEVELS_MIDDLEMOAT_$LI$();
I.ITEMS_MIDDLEMOAT_$LI$();
I.LEVELS_LEFTMOAT_$LI$();
I.ITEMS_LEFTMOAT_$LI$();
I.LEVELS_SKILLS_RIGHTWALL_$LI$();
I.ITEMS_SKILLS_RIGHTWALL_$LI$();
I.LEVELS_RIGHTWALL_$LI$();
I.ITEMS_RIGHTWALL_$LI$();
I.PLAYER_LEVEL_GATE_$LI$();
I.PLAYER_LEVEL_WALL_$LI$();
I.LEVELS_MIDDLEWALL_$LI$();
I.ITEMS_MIDDLEWALL_$LI$();
I.LEVELS_SKILLS_LEFTWALL_$LI$();
I.ITEMS_SKILLS_LEFTWALL_$LI$();
I.LEVELS_LEFTWALL_$LI$();
I.ITEMS_LEFTWALL_$LI$();
I.LEVELS_SUPPORT_TOOLS_HOME_DWORKSHOP_$LI$();
I.ITEMS_SUPPORT_TOOLS_$LI$();
I.LEVELS_KEEP_$LI$();
I.ITEMS_KEEP_$LI$();
L.COOLDOWN_$LI$();
b.PER_TEN_THOUSAND_$LI$();
b.SLOT_IDS_FOR_GEMS_$LI$();
b.SLOT_IDS_$LI$();
R.LUCKY_WHEEL_EVENT_TYPES_$LI$();
R.EVENT_TYPES_FOR_OFFICERS_SCHOOL_$LI$();
R.ALLOWED_EVENT_TYPES_FOR_LTPE_$LI$();
R.LTPE_DEFAULT_SUBTYPE_$LI$();
R.LTPE_DEFAULT_SUBTYPES_$LI$();
R.LEAGUETYPE_EVENT_SUBTYPES_FACTION_$LI$();
R.LEAGUETYPE_EVENT_SUBTYPES_ALIEN_INVASION_ALLIANCE_$LI$();
R.LEAGUETYPE_EVENT_SUBTYPE_SAMURAI_ALIEN_INVASION_ALLIANCE_$LI$();
R.LEAGUETYPE_EVENT_SUBTYPES_DEFAULT_$LI$();
R.BUY_INSTANT_TOOL_CHECK_RELEVANT_EVENTS_$LI$();
R.COLOSSUS_EVENT_TYPES_$LI$();
R.TREASURE_MAP_UNIT_DEALERS_$LI$();
R.ALIEN_INVASION_EVENT_TYPES_$LI$();
R.MODIFIABLE_PACKAGEEVENT_EVENT_TYPES_$LI$();
R.ALL_PACKAGEEVENT_EVENT_TYPES_$LI$();
R.EVENTTYPES_WITH_ALLIANCE_INVASION_CAMP_$LI$();
R.FACTION_INVASION_EVENT_TYPES_$LI$();
R.SAMURAI_INVASION_EVENT_TYPES_$LI$();
R.NOMAD_INVASION_EVENT_TYPES_$LI$();
R.CRUSADE_EVENT_TYPES_$LI$();
R.DUNGEON_EVENT_TYPES_$LI$();
R.ARTIFACT_EVENT_TYPES_$LI$();
P.GIFT_COOLDOWN_$LI$();
B.TITLE_RESET_INTERVAL_SECONDS_$LI$();
B.VILLAGE_COOLDOWN_$LI$();
B.TOWER_COOLDOWN_$LI$();
B.FACTIONS_$LI$();
V.GLOBALSERVER_PREVIOUS_RUN_HIGHSCORES_ON_MAINSERVER_$LI$();
V.NO_OFFSET_$LI$();
V.MIN_XP_FOR_HIGHSCORE_$LI$();
V.LEAGUED_HIGHSCORES_$LI$();
V.TITLE_COOLDOWN_TEST_$LI$();
V.TITLE_COOLDOWN_$LI$();
V.POINTS_CAPITALS_$LI$();
V.GLOBAL_SERVER_PREVIOUS_RUN_NUMBER_OF_ENTRIES_SHOWN_$LI$();
V.DAIMYO_NUMBER_OF_ENTRIES_SHOWN_$LI$();
V.SEASON_NUMBER_OF_ENTRIES_SHOWN_$LI$();
q.FACTOR_FORMULA_1_REWARD_$LI$();
q.EXPONENT_FORMULA_1_REWARD_$LI$();
q.OFFSET_REWARD_$LI$();
q.MAX_VALUE_$LI$();
q.FACTORS_REWARD_$LI$();
q.MIN_VALUE_$LI$();
q.OFFSET_FORMULA_1_COND_$LI$();
q.FACTOR_FORMULA_1_COND_$LI$();
q.EXPONENT_FORMULA_1_COND_$LI$();
Y.TIER_UNLOCK_POINTS_$LI$();
Y.RESET_COOLDOWN_IN_SECONDS_$LI$();
z.SKINS_$LI$();
ie.ABANDON_CANCEL_TIME_$LI$();
ie.ABANDON_TIME_TEST_$LI$();
ie.ABANDON_TIME_$LI$();
ie.MIN_TIME_BEFORE_ABANDON_TEST_$LI$();
ie.MIN_TIME_BEFORE_ABANDON_$LI$();
ie.SIEGE_TIME_TEST_$LI$();
ie.SIEGE_TIME_$LI$();
se.PLAYER_NAME_CHANGE_COOLDOWN_$LI$();
se.SAVE_ACCOUNT_LEVEL_CATEGORY_$LI$();
se.LOGIN_BONUS_KEY_PRICES_$LI$();
se.CUMULATED_LEVEL_CAP_$LI$();
se.LEGEND_MAX_XP_$LI$();
se.COMBINED_LEVEL_CAP_$LI$();
se.LEVEL_CAP_XP_$LI$();
se.LOGIN_LP_INCENTIVES_C2_$LI$();
se.LOGIN_LP_INCENTIVES_C1_$LI$();
se.MAIL_CONFIRM_C2_$LI$();
se.PEACE_MODE_COOLDOWN_$LI$();
se.PEACE_MODE_HEAT_UP_TEST_$LI$();
se.PEACE_MODE_HEAT_UP_$LI$();
se.PEACE_MODE_DURATION_$LI$();
se.PEACE_MODE_C2_$LI$();
se.OPEN_GATE_DURATION_$LI$();
se.OPEN_GATE_C2_$LI$();
se.NAME_SUFFIX_$LI$();
se.NAME_MIDDLE_$LI$();
se.NAME_PREFIX_$LI$();
re.POINTS_FOR_TASK_$LI$();
le.SAMURAI_ALIEN_INVASION_POPUPS_$LI$();
le.ALLIANCE_RED_ALIEN_INVASION_POPUPS_$LI$();
le.FACTION_INVASION_POPUPS_$LI$();
le.ALLIANCE_TOURNAMENT_POPUPS_$LI$();
le.SAMURAI_INVASION_POPUPS_$LI$();
le.ALLIANCE_NOMAD_INVASION_POPUPS_$LI$();
le.ALLIANCE_ALIEN_INVASION_POPUPS_$LI$();
ue.FACTOR_DONATE_ALLI_$LI$();
ue.FACTOR_BRIBE_TAX_C2_$LI$();
ue.FACTOR_C2_$LI$();
ue.FACTOR_C1_$LI$();
_e.SKIN_LIST_$LI$();
_e.BRICK_SKIN_ID_$LI$();
_e.GOLD_SKIN_ID_$LI$();
_e.DEFAULT_SKIN_ID_$LI$();
me.PUSHCATEGORY_FORWARDED_MESSAGES_$LI$();
me.PUSHCATEGORY_ALLIANCE_ATTACK_$LI$();
me.PUSHCATEGORY_INGAME_EVENTS_$LI$();
me.PUSHCATEGORY_TAX_$LI$();
me.PUSHCATEGORY_RESSOURCE_$LI$();
me.PUSHCATEGORY_MISC_$LI$();
me.PUSHCATEGORY_CONSTRUCTION_$LI$();
ge.TEST_RELOCATION_COOLDOWN_$LI$();
ge.TEST_RELOCATION_DURATION_$LI$();
ge.RELOCATION_COOLDOWN_$LI$();
ge.RELOCATION_COST_C2_$LI$();
ge.RELOCATION_DURATION_$LI$();
Ee.RESOURCE_TYPES_TO_MODIFY_$LI$();
Ce.CHARGETIME_$LI$();
fe.RESOURCE_FACTORS_$LI$();
Le.SABOTAGE_PROTECTION_WINDOW_$LI$();
Le.MAX_SABOTAGE_COOLDOWN_$LI$();
Le.SPY_VALIDITY_$LI$();
be.PLAYER_TYPE_PACKAGES_$LI$();
Re.COLLECTOR_LOSS_$LI$();
Re.START_COST_C1_PERC_$LI$();
Re.START_COST_C2_$LI$();
Re.COLLECTOR_DURATION_$LI$();
we.PLAGUE_TRAVEL_TIME_$LI$();
we.MAX_SLOWDOWN_DURATION_IN_SECONDS_$LI$();
we.MAX_FALLBACK_TIME_$LI$();
we.BASIC_FIELD_TRAVEL_TIME_$LI$();
xe.STAGED_CRUSADE_MAPS_$LI$();
xe.CRUSADE_MAP_IDS_$LI$();
We.TUTORIAL_TMAPS_$LI$();
He.UNLOCK_DURATION_$LI$();
Ye.AREA_MAP_$LI$();
Ye.OUTPOST_TYPE_COUNT_$LI$();
ze.AREA_MAP_$LI$();
ze.OUTPOST_TYPE_COUNT_$LI$();
Ze.AREA_MAP_$LI$();
Ze.OUTPOST_TYPE_COUNT_$LI$();
Xe.AREA_MAP_$LI$();
Xe.OUTPOST_TYPE_COUNT_$LI$();
Qe.AREA_MAP_$LI$();
Qe.OUTPOST_TYPE_COUNT_$LI$();
$e.WORLD_IDS_$LI$();
$e.OUTPOST_TYPE_LIST_$LI$();
$e.ALIEN_CAMP_AREA_TYPES_$LI$();
Je.AREA_MAP_$LI$();
Je.VILLAGE_TYPE_COUNT_$LI$();
et.AREA_MAP_$LI$();
et.VILLAGE_TYPE_COUNT_$LI$();
tt.AREA_MAP_$LI$();
tt.ISLE_TYPE_COUNT_$LI$();
it.AREA_MAP_$LI$();
it.VILLAGE_TYPE_COUNT_$LI$();
(function (e) {
  e[e.ALL_OK = 0] = "ALL_OK";
  e[e.GENERAL_ERROR = 1] = "GENERAL_ERROR";
  e[e.INVALID_PARAMETER_VALUE = 2] = "INVALID_PARAMETER_VALUE";
  e[e.MISSING_PARAMETER = 3] = "MISSING_PARAMETER";
  e[e.INVALID_WOD_ID = 4] = "INVALID_WOD_ID";
  e[e.INVALID_OBJECT_ID = 5] = "INVALID_OBJECT_ID";
  e[e.INVALID_POSITION = 6] = "INVALID_POSITION";
  e[e.FEATURE_NOT_IN_THIS_NETWORK = 7] = "FEATURE_NOT_IN_THIS_NETWORK";
  e[e.NOT_ENOUGH_CURRENCY1 = 10] = "NOT_ENOUGH_CURRENCY1";
  e[e.NOT_ENOUGH_CURRENCY2 = 11] = "NOT_ENOUGH_CURRENCY2";
  e[e.LEVEL_TOO_HIGH_OR_LOW = 12] = "LEVEL_TOO_HIGH_OR_LOW";
  e[e.NO_PAY_USER = 14] = "NO_PAY_USER";
  e[e.NO_CHANGE = 15] = "NO_CHANGE";
  e[e.CAMP_IS_OCCUPIED = 16] = "CAMP_IS_OCCUPIED";
  e[e.WRONG_INPUT_SCREEN = 19] = "WRONG_INPUT_SCREEN";
  e[e.INVALID_PASSWORD = 20] = "INVALID_PASSWORD";
  e[e.PLAYER_NOT_FOUND = 21] = "PLAYER_NOT_FOUND";
  e[e.NAME_ALREADY_IN_USE = 22] = "NAME_ALREADY_IN_USE";
  e[e.EMAIL_ALREADY_IN_USE = 23] = "EMAIL_ALREADY_IN_USE";
  e[e.INVALID_EMAIL = 24] = "INVALID_EMAIL";
  e[e.ALREADY_VERIFIED_MAIL = 25] = "ALREADY_VERIFIED_MAIL";
  e[e.NO_AVATAR_CREATED = 26] = "NO_AVATAR_CREATED";
  e[e.IS_BANNED = 27] = "IS_BANNED";
  e[e.INVALID_NAME = 28] = "INVALID_NAME";
  e[e.WORLD_IS_FULL = 29] = "WORLD_IS_FULL";
  e[e.WRONG_MODE = 50] = "WRONG_MODE";
  e[e.NOT_MOVEABLE = 51] = "NOT_MOVEABLE";
  e[e.POSITION_IS_BLOCKED = 52] = "POSITION_IS_BLOCKED";
  e[e.NOT_IN_OWNED_CASTLE = 53] = "NOT_IN_OWNED_CASTLE";
  e[e.WOD_NOT_ACTIVE = 54] = "WOD_NOT_ACTIVE";
  e[e.NOT_ENOUGH_RESOURCES = 55] = "NOT_ENOUGH_RESOURCES";
  e[e.NOT_UPGRADEABLE = 56] = "NOT_UPGRADEABLE";
  e[e.TITLE_TOO_LOW = 57] = "TITLE_TOO_LOW";
  e[e.MOVE_FAILED = 58] = "MOVE_FAILED";
  e[e.NOT_SELLABLE = 59] = "NOT_SELLABLE";
  e[e.NO_COLLECTABLE_OBJECT_BONUS = 60] = "NO_COLLECTABLE_OBJECT_BONUS";
  e[e.NOT_STOREABLE = 61] = "NOT_STOREABLE";
  e[e.INVALID_OBJECT_STATE = 62] = "INVALID_OBJECT_STATE";
  e[e.NO_FREE_CONSTRUCTION_SLOT = 63] = "NO_FREE_CONSTRUCTION_SLOT";
  e[e.INVALID_NUMBER_OF_PARAMETERS = 64] = "INVALID_NUMBER_OF_PARAMETERS";
  e[e.INVALID_PLAYER_ID = 65] = "INVALID_PLAYER_ID";
  e[e.NO_SUCH_MESSAGE = 66] = "NO_SUCH_MESSAGE";
  e[e.NOT_ADDRESSED_TO_USER = 67] = "NOT_ADDRESSED_TO_USER";
  e[e.INVALID_RECEIVER_ID = 68] = "INVALID_RECEIVER_ID";
  e[e.PLAYER_IS_IGNORED = 69] = "PLAYER_IS_IGNORED";
  e[e.USAGE_OF_BADWORDS = 70] = "USAGE_OF_BADWORDS";
  e[e.PLAYER_IS_GUEST = 80] = "PLAYER_IS_GUEST";
  e[e.AREA_NOT_ATTACKABLE = 81] = "AREA_NOT_ATTACKABLE";
  e[e.ALREADY_TO_MANY_OUTPOSTS = 82] = "ALREADY_TO_MANY_OUTPOSTS";
  e[e.ALREADY_COLLECTING_TAXES = 83] = "ALREADY_COLLECTING_TAXES";
  e[e.TAX_COLLECTOR_NOT_FINISHED = 84] = "TAX_COLLECTOR_NOT_FINISHED";
  e[e.TAX_COLLECTOR_HAS_OLD_MONEY = 85] = "TAX_COLLECTOR_HAS_OLD_MONEY";
  e[e.NOT_REPAIRABLE = 86] = "NOT_REPAIRABLE";
  e[e.MISSING_REQUIRED_BUILDING = 87] = "MISSING_REQUIRED_BUILDING";
  e[e.TOO_MUCH_UNITS = 88] = "TOO_MUCH_UNITS";
  e[e.PACKAGE_NOT_BOOSTABLE = 89] = "PACKAGE_NOT_BOOSTABLE";
  e[e.CANT_START_NEW_ARMIES = 90] = "CANT_START_NEW_ARMIES";
  e[e.INVALID_ARMY_REQUEST = 91] = "INVALID_ARMY_REQUEST";
  e[e.NO_SELF_DESTRUCTION = 92] = "NO_SELF_DESTRUCTION";
  e[e.EXCEEDING_MAXIMUM_COUNT = 93] = "EXCEEDING_MAXIMUM_COUNT";
  e[e.PLAYER_HAS_NOOB_PROTECTION = 94] = "PLAYER_HAS_NOOB_PROTECTION";
  e[e.COOLING_DOWN = 95] = "COOLING_DOWN";
  e[e.PLAYER_NOT_ON_MAP = 96] = "PLAYER_NOT_ON_MAP";
  e[e.MISSING_GENERAL = 97] = "MISSING_GENERAL";
  e[e.TEXT_TOO_SHORT = 98] = "TEXT_TOO_SHORT";
  e[e.TEXT_TOO_LONG = 99] = "TEXT_TOO_LONG";
  e[e.MOVEMENT_HAS_NO_UNITS = 100] = "MOVEMENT_HAS_NO_UNITS";
  e[e.MISSING_UNITS = 101] = "MISSING_UNITS";
  e[e.PLAYER_ALREADY_HAS_INVITATION = 102] = "PLAYER_ALREADY_HAS_INVITATION";
  e[e.TOO_MANY_FRIENDS_MY = 103] = "TOO_MANY_FRIENDS_MY";
  e[e.PLAYER_ALREADY_IS_FRIEND = 104] = "PLAYER_ALREADY_IS_FRIEND";
  e[e.NOT_ENOUGH_SPIES = 105] = "NOT_ENOUGH_SPIES";
  e[e.RUIN = 106] = "RUIN";
  e[e.TOO_MANY_FRIENDS_OTHER = 107] = "TOO_MANY_FRIENDS_OTHER";
  e[e.UNKNOWN_MOVEMENT = 108] = "UNKNOWN_MOVEMENT";
  e[e.MISSING_CARRIAGE = 109] = "MISSING_CARRIAGE";
  e[e.IN_OTHER_ALLI = 110] = "IN_OTHER_ALLI";
  e[e.IN_THIS_ALLI = 111] = "IN_THIS_ALLI";
  e[e.ALLI_FULL = 112] = "ALLI_FULL";
  e[e.ALLI_NO_RIGHTS = 113] = "ALLI_NO_RIGHTS";
  e[e.ALLI_NOT_FOUND = 114] = "ALLI_NOT_FOUND";
  e[e.ALLI_NOT_ENOUGH_C1 = 115] = "ALLI_NOT_ENOUGH_C1";
  e[e.ALLI_NOT_ENOUGH_C2 = 116] = "ALLI_NOT_ENOUGH_C2";
  e[e.ALLI_NOT_ENOUGH_RES = 117] = "ALLI_NOT_ENOUGH_RES";
  e[e.OTHER_LEVEL_TOO_LOW = 120] = "OTHER_LEVEL_TOO_LOW";
  e[e.TOO_MUCH_TRAVEL_TIME = 121] = "TOO_MUCH_TRAVEL_TIME";
  e[e.DEFENDER_IS_IN_YOUR_ALLI = 122] = "DEFENDER_IS_IN_YOUR_ALLI";
  e[e.NOT_IN_SAME_ALLIANCE = 123] = "NOT_IN_SAME_ALLIANCE";
  e[e.JUST_JOINED_ALLIANCE = 124] = "JUST_JOINED_ALLIANCE";
  e[e.NO_SPY_DATA = 130] = "NO_SPY_DATA";
  e[e.TARGET_HAS_PEACE = 131] = "TARGET_HAS_PEACE";
  e[e.PLAYER_HAS_PEACE = 132] = "PLAYER_HAS_PEACE";
  e[e.MISSING_BARON = 133] = "MISSING_BARON";
  e[e.AREA_NOT_CONQUERABLE = 134] = "AREA_NOT_CONQUERABLE";
  e[e.TAX_COLLECTOR_FINISHED = 135] = "TAX_COLLECTOR_FINISHED";
  e[e.TAX_COLLECTOR_HAS_NO_MONEY = 136] = "TAX_COLLECTOR_HAS_NO_MONEY";
  e[e.NO_FREE_RENAME = 137] = "NO_FREE_RENAME";
  e[e.AREA_NOT_ABANDONABLE = 138] = "AREA_NOT_ABANDONABLE";
  e[e.ONLY_IN_MAIN_CASTLE = 139] = "ONLY_IN_MAIN_CASTLE";
  e[e.NOT_OWNED_LONG_ENOUGH = 140] = "NOT_OWNED_LONG_ENOUGH";
  e[e.IN_ALLIED_ALLI = 141] = "IN_ALLIED_ALLI";
  e[e.MAP_NOT_AVAILABLE = 142] = "MAP_NOT_AVAILABLE";
  e[e.NOT_COMPLETED = 143] = "NOT_COMPLETED";
  e[e.NO_EVENT_BUILDING = 144] = "NO_EVENT_BUILDING";
  e[e.NO_EVENT = 145] = "NO_EVENT";
  e[e.LOCKED = 146] = "LOCKED";
  e[e.NOTHING_TO_SKIP = 147] = "NOTHING_TO_SKIP";
  e[e.ALREADY_TRANSFERING = 148] = "ALREADY_TRANSFERING";
  e[e.NO_CAMP = 149] = "NO_CAMP";
  e[e.INVALID_NODE = 150] = "INVALID_NODE";
  e[e.ALREADY_ACHIEVED_NODE = 151] = "ALREADY_ACHIEVED_NODE";
  e[e.NO_SPACE = 152] = "NO_SPACE";
  e[e.NO_PLAYER_FOUND = 153] = "NO_PLAYER_FOUND";
  e[e.STORAGE_CAPACITY_REACHED = 154] = "STORAGE_CAPACITY_REACHED";
  e[e.OTHER_ALLIANCE_REACHED_MAXIMUM = 155] = "OTHER_ALLIANCE_REACHED_MAXIMUM";
  e[e.THIS_ALLIANCE_REACHED_MAXIMUM = 156] = "THIS_ALLIANCE_REACHED_MAXIMUM";
  e[e.REQUESTED_AMOUNT_NOT_ALLOWED = 157] = "REQUESTED_AMOUNT_NOT_ALLOWED";
  e[e.PACKAGE_NOT_IN_EVENT = 158] = "PACKAGE_NOT_IN_EVENT";
  e[e.PACKAGE_NOT_FOUND = 159] = "PACKAGE_NOT_FOUND";
  e[e.ALREADY_HUNTING = 160] = "ALREADY_HUNTING";
  e[e.OTHER_PLAYER_IN_OTHER_ALLI = 161] = "OTHER_PLAYER_IN_OTHER_ALLI";
  e[e.ALREADY_ABANDONING_OUTPOST = 162] = "ALREADY_ABANDONING_OUTPOST";
  e[e.ALREADY_RESEARCHING = 163] = "ALREADY_RESEARCHING";
  e[e.PREREQUISITE_NOT_MATCHED = 164] = "PREREQUISITE_NOT_MATCHED";
  e[e.ALREADY_RESEARCHED = 165] = "ALREADY_RESEARCHED";
  e[e.MAY_NOT_FORWARD = 166] = "MAY_NOT_FORWARD";
  e[e.ALREADY_HAS_SPY_REPORT = 167] = "ALREADY_HAS_SPY_REPORT";
  e[e.ALLI_APPLICATION_EXISTS = 168] = "ALLI_APPLICATION_EXISTS";
  e[e.ALLI_NOT_SEARCHING_MEMBERS = 169] = "ALLI_NOT_SEARCHING_MEMBERS";
  e[e.ALLI_REACHED_MAX_APLLICATIONS = 170] = "ALLI_REACHED_MAX_APLLICATIONS";
  e[e.ALLI_APPLICATION_NOT_EXISTS = 171] = "ALLI_APPLICATION_NOT_EXISTS";
  e[e.CL_OBJECT_ALREADY_IN_LIST = 172] = "CL_OBJECT_ALREADY_IN_LIST";
  e[e.MAILDOMAIN_BLOCKED = 173] = "MAILDOMAIN_BLOCKED";
  e[e.ALREADY_PURCHASED = 174] = "ALREADY_PURCHASED";
  e[e.INVALID_KINGDOM_ID = 175] = "INVALID_KINGDOM_ID";
  e[e.ALREADY_UNLOCKED = 176] = "ALREADY_UNLOCKED";
  e[e.NOT_IN_THIS_KINGDOM = 177] = "NOT_IN_THIS_KINGDOM";
  e[e.KINGDOM_NOT_AVAILABLE_FOR_USER = 178] = "KINGDOM_NOT_AVAILABLE_FOR_USER";
  e[e.TARGETAREA_DOES_NOT_EXSIST = 179] = "TARGETAREA_DOES_NOT_EXSIST";
  e[e.MAX_KINGDOM_GOODS_MOVEMENTS_EXCEEDED = 180] = "MAX_KINGDOM_GOODS_MOVEMENTS_EXCEEDED";
  e[e.MAX_KINGDOM_ARMY_MOVEMENTS_EXCEEDED = 181] = "MAX_KINGDOM_ARMY_MOVEMENTS_EXCEEDED";
  e[e.KINGDOM_MOVEMENTS_NOT_AVAILABLE = 182] = "KINGDOM_MOVEMENTS_NOT_AVAILABLE";
  e[e.MULTIPLE_MOVEMENTS_AVAILABLE = 183] = "MULTIPLE_MOVEMENTS_AVAILABLE";
  e[e.VILLAGE_CAP_WOOD_REACHED = 184] = "VILLAGE_CAP_WOOD_REACHED";
  e[e.VILLAGE_CAP_STONE_REACHED = 185] = "VILLAGE_CAP_STONE_REACHED";
  e[e.VILLAGE_CAP_FOOD_REACHED = 186] = "VILLAGE_CAP_FOOD_REACHED";
  e[e.NO_CONTOR = 187] = "NO_CONTOR";
  e[e.VILLAGE_WOULD_GET_LOST = 188] = "VILLAGE_WOULD_GET_LOST";
  e[e.INVALID_STARTAREA_FOR_CANCEL_MOVEMENT = 189] = "INVALID_STARTAREA_FOR_CANCEL_MOVEMENT";
  e[e.CL_MOAT_ALREADY_IN = 190] = "CL_MOAT_ALREADY_IN";
  e[e.IS_ALREADY_ACHIEVED = 191] = "IS_ALREADY_ACHIEVED";
  e[e.NO_TARGET = 192] = "NO_TARGET";
  e[e.ONLY_IN_CAPITAL = 193] = "ONLY_IN_CAPITAL";
  e[e.ALREADY_HAS_CAPITAL = 194] = "ALREADY_HAS_CAPITAL";
  e[e.NOT_ENOUGH_INGREDIENTS = 195] = "NOT_ENOUGH_INGREDIENTS";
  e[e.NOT_IN_CAPITAL = 196] = "NOT_IN_CAPITAL";
  e[e.IS_RELOCATING = 197] = "IS_RELOCATING";
  e[e.RELOCATION_COOLDOWN_RUNNING = 198] = "RELOCATION_COOLDOWN_RUNNING";
  e[e.IS_RELOCATING_OTHER = 199] = "IS_RELOCATING_OTHER";
  e[e.RELOCATION_RESERVED = 200] = "RELOCATION_RESERVED";
  e[e.FACTION_ALREADY_CHOSEN = 201] = "FACTION_ALREADY_CHOSEN";
  e[e.AREA_CANNOT_BUY_THIS = 202] = "AREA_CANNOT_BUY_THIS";
  e[e.INVALID_AREA = 203] = "INVALID_AREA";
  e[e.SPECIALCAMP_PROTECTED = 204] = "SPECIALCAMP_PROTECTED";
  e[e.NO_MORE_TOWERS = 205] = "NO_MORE_TOWERS";
  e[e.FACTION_PLAYER_CAMP_LIMIT_REACHED = 206] = "FACTION_PLAYER_CAMP_LIMIT_REACHED";
  e[e.HUNTER_LEVEL_TOO_LOW = 207] = "HUNTER_LEVEL_TOO_LOW";
  e[e.INVALID_CUSTOM_INVENTORY_OBJECT_ID = 208] = "INVALID_CUSTOM_INVENTORY_OBJECT_ID";
  e[e.SPECIALEVENT_NOT_RUNNING = 209] = "SPECIALEVENT_NOT_RUNNING";
  e[e.SPECIALEVENT_STILL_RUNNING = 210] = "SPECIALEVENT_STILL_RUNNING";
  e[e.NOT_ENOUGH_POINTS = 211] = "NOT_ENOUGH_POINTS";
  e[e.CASTLE_HAS_MOVEMENTS = 212] = "CASTLE_HAS_MOVEMENTS";
  e[e.ALREADY_REDEEMED = 213] = "ALREADY_REDEEMED";
  e[e.EQUIPMENT_NOT_FOUND = 214] = "EQUIPMENT_NOT_FOUND";
  e[e.DIFFERENT_EQUIPMENT_RARENESS = 215] = "DIFFERENT_EQUIPMENT_RARENESS";
  e[e.RARENESS_TO_HIGH = 216] = "RARENESS_TO_HIGH";
  e[e.BARON_IS_USED = 217] = "BARON_IS_USED";
  e[e.COMMANDER_IS_USED = 218] = "COMMANDER_IS_USED";
  e[e.INVALID_LORD_ID = 219] = "INVALID_LORD_ID";
  e[e.INVENTORY_FULL = 220] = "INVENTORY_FULL";
  e[e.EQUIPMENT_NOT_APPLICABLE = 221] = "EQUIPMENT_NOT_APPLICABLE";
  e[e.LORD_IN_MOVEMENT = 222] = "LORD_IN_MOVEMENT";
  e[e.INVALID_AMOUNT = 223] = "INVALID_AMOUNT";
  e[e.IS_ABANDONING = 224] = "IS_ABANDONING";
  e[e.MESSAGEDATA_TOO_OLD = 225] = "MESSAGEDATA_TOO_OLD";
  e[e.ENCHANTMENTLEVEL_TO_HIGH = 226] = "ENCHANTMENTLEVEL_TO_HIGH";
  e[e.ENCHANTING_FAILED = 227] = "ENCHANTING_FAILED";
  e[e.MAX_MARKET_MOVEMENTS_TO_PLAYER_REACHED = 228] = "MAX_MARKET_MOVEMENTS_TO_PLAYER_REACHED";
  e[e.NO_CHEST_AVAILABLE = 229] = "NO_CHEST_AVAILABLE";
  e[e.CHEST_LOCKED = 230] = "CHEST_LOCKED";
  e[e.FORGE_FORBIDDEN = 231] = "FORGE_FORBIDDEN";
  e[e.ALREADY_COLLECTED = 232] = "ALREADY_COLLECTED";
  e[e.TARGET_NOT_OWNED = 233] = "TARGET_NOT_OWNED";
  e[e.ATTACK_IN_PROGRESS = 234] = "ATTACK_IN_PROGRESS";
  e[e.SELECTED_FACTION_DISABLED = 235] = "SELECTED_FACTION_DISABLED";
  e[e.NOT_ENCHANTABLE = 236] = "NOT_ENCHANTABLE";
  e[e.PACKAGE_MAX_BUY_REACHED = 237] = "PACKAGE_MAX_BUY_REACHED";
  e[e.NAME_HAS_ONLY_NUMBERS = 238] = "NAME_HAS_ONLY_NUMBERS";
  e[e.NOT_ENOUGH_KHAN_TABLETS = 239] = "NOT_ENOUGH_KHAN_TABLETS";
  e[e.TOO_MANY_TOOLS = 240] = "TOO_MANY_TOOLS";
  e[e.IS_NETWORK_ACCOUNT = 241] = "IS_NETWORK_ACCOUNT";
  e[e.MINE_IS_EMPTY = 242] = "MINE_IS_EMPTY";
  e[e.MINE_IS_COOLING_DOWN = 243] = "MINE_IS_COOLING_DOWN";
  e[e.PLAYER_IS_IN_OTHER_LEAGUE = 244] = "PLAYER_IS_IN_OTHER_LEAGUE";
  e[e.TOO_MANY_MESSAGES_IN_ARCHIVE = 245] = "TOO_MANY_MESSAGES_IN_ARCHIVE";
  e[e.TOPIC_NOT_FOUND = 246] = "TOPIC_NOT_FOUND";
  e[e.REPLY_NOT_FOUND = 247] = "REPLY_NOT_FOUND";
  e[e.ALLI_IS_NOT_AUTO_JOIN_ENABLED = 248] = "ALLI_IS_NOT_AUTO_JOIN_ENABLED";
  e[e.TOO_MANY_REPLIES = 249] = "TOO_MANY_REPLIES";
  e[e.TOO_MANY_TOPICS = 250] = "TOO_MANY_TOPICS";
  e[e.NOT_ENOUGH_SKULL_RELICS = 251] = "NOT_ENOUGH_SKULL_RELICS";
  e[e.ALREADY_HAS_METROPOL = 252] = "ALREADY_HAS_METROPOL";
  e[e.NOT_IN_METROPOL = 253] = "NOT_IN_METROPOL";
  e[e.ONLY_IN_METROPOL = 254] = "ONLY_IN_METROPOL";
  e[e.INVALID_ATTACK_TYPE = 255] = "INVALID_ATTACK_TYPE";
  e[e.LORD_IS_USED = 256] = "LORD_IS_USED";
  e[e.RESOURCE_CART_NOT_READY = 257] = "RESOURCE_CART_NOT_READY";
  e[e.NOT_ENOUGH_LOTTERY_TICKETS = 258] = "NOT_ENOUGH_LOTTERY_TICKETS";
  e[e.ALLIANCE_DIFFERENCE_TOO_BIG = 259] = "ALLIANCE_DIFFERENCE_TOO_BIG";
  e[e.NOT_ENOUGH_PEARL_RELICS = 260] = "NOT_ENOUGH_PEARL_RELICS";
  e[e.FACTION_NPC_OBJECT_IS_PROTECTED = 261] = "FACTION_NPC_OBJECT_IS_PROTECTED";
  e[e.NO_MARKETPLACE = 262] = "NO_MARKETPLACE";
  e[e.ORIENTATION_FULL = 263] = "ORIENTATION_FULL";
  e[e.BOOSTER_REACHED_MAX_LEVEL = 264] = "BOOSTER_REACHED_MAX_LEVEL";
  e[e.UNITS_WOULD_STARVE = 265] = "UNITS_WOULD_STARVE";
  e[e.VIP_MAX_TIME_REACHED = 266] = "VIP_MAX_TIME_REACHED";
  e[e.VIP_MAX_POINTS_REACHED = 267] = "VIP_MAX_POINTS_REACHED";
  e[e.NO_RECRUITMENT = 268] = "NO_RECRUITMENT";
  e[e.PACKAGE_NOT_HELPABLE = 269] = "PACKAGE_NOT_HELPABLE";
  e[e.PLAYER_HAS_NO_ALLIANCE = 270] = "PLAYER_HAS_NO_ALLIANCE";
  e[e.NO_ALLIANCEHELP = 271] = "NO_ALLIANCEHELP";
  e[e.NO_SELF_ALLIANCEHELP = 272] = "NO_SELF_ALLIANCEHELP";
  e[e.NO_MULTIPLE_ALLIANCEHELP = 273] = "NO_MULTIPLE_ALLIANCEHELP";
  e[e.INVALID_PRICE = 274] = "INVALID_PRICE";
  e[e.NO_WORLDMAPOBJECT_FOUND = 275] = "NO_WORLDMAPOBJECT_FOUND";
  e[e.NO_FACTION_VILLAGE_FOUND = 276] = "NO_FACTION_VILLAGE_FOUND";
  e[e.CAMPS_NOT_ATTACKABLE = 277] = "CAMPS_NOT_ATTACKABLE";
  e[e.PLAYER_IS_BANNED_FROM_ALLI = 278] = "PLAYER_IS_BANNED_FROM_ALLI";
  e[e.BOOKMARK_ALREADY_ADDED = 279] = "BOOKMARK_ALREADY_ADDED";
  e[e.BOOKMARK_MAX_ENTRYS = 280] = "BOOKMARK_MAX_ENTRYS";
  e[e.NO_SELF_TARGET = 281] = "NO_SELF_TARGET";
  e[e.IS_OCCUPYING = 282] = "IS_OCCUPYING";
  e[e.IS_NOT_KING = 283] = "IS_NOT_KING";
  e[e.CANNOT_ASSIGN_TO_SELF = 284] = "CANNOT_ASSIGN_TO_SELF";
  e[e.ALREADY_HAS_TITLE = 285] = "ALREADY_HAS_TITLE";
  e[e.COOLING_DOWN_EQUIPMENT = 286] = "COOLING_DOWN_EQUIPMENT";
  e[e.NOT_IN_TIME_FOR_FREE_SKIP = 287] = "NOT_IN_TIME_FOR_FREE_SKIP";
  e[e.NO_KAMIKAZE_CONQUER = 288] = "NO_KAMIKAZE_CONQUER";
  e[e.ALLIANCE_ALREADY_HAS_PEACE_REQUEST = 289] = "ALLIANCE_ALREADY_HAS_PEACE_REQUEST";
  e[e.CAN_NOT_VOTE_IN_WORLD_CUP = 290] = "CAN_NOT_VOTE_IN_WORLD_CUP";
  e[e.NO_PLAYER_SPAWNED_YET = 291] = "NO_PLAYER_SPAWNED_YET";
  e[e.INVALID_EVENT_TOOL_USAGE = 292] = "INVALID_EVENT_TOOL_USAGE";
  e[e.ALLIANCE_ALREADY_HAS_SOFT_ALLIED_REQUEST = 293] = "ALLIANCE_ALREADY_HAS_SOFT_ALLIED_REQUEST";
  e[e.ALLIANCE_ALREADY_HAS_REAL_ALLIED_REQUEST = 294] = "ALLIANCE_ALREADY_HAS_REAL_ALLIED_REQUEST";
  e[e.BOOKMARK_IS_INVALID = 295] = "BOOKMARK_IS_INVALID";
  e[e.IS_OCCUPIED = 296] = "IS_OCCUPIED";
  e[e.HAS_ALREADY_RUNNING_MISSION = 297] = "HAS_ALREADY_RUNNING_MISSION";
  e[e.GEM_NOT_FOUND = 298] = "GEM_NOT_FOUND";
  e[e.GEM_INVALID = 299] = "GEM_INVALID";
  e[e.GEM_CANNOT_BE_UPGRADED = 300] = "GEM_CANNOT_BE_UPGRADED";
  e[e.GEM_STORAGE_FULL = 301] = "GEM_STORAGE_FULL";
  e[e.GEM_ID_FULL = 302] = "GEM_ID_FULL";
  e[e.DID_NOT_BUY_CREST_SYMBOL = 303] = "DID_NOT_BUY_CREST_SYMBOL";
  e[e.SYMBOL_NOT_UNLOCKED = 304] = "SYMBOL_NOT_UNLOCKED";
  e[e.PLAYER_NOT_IN_FACTION = 305] = "PLAYER_NOT_IN_FACTION";
  e[e.ALLI_NOT_IN_HIGH_SCORE = 306] = "ALLI_NOT_IN_HIGH_SCORE";
  e[e.CAPITAL_NOT_OWNED_LONG_ENOUGH = 307] = "CAPITAL_NOT_OWNED_LONG_ENOUGH";
  e[e.NOT_ENOUGH_SILVER_RUNES = 308] = "NOT_ENOUGH_SILVER_RUNES";
  e[e.NOT_ENOUGH_GOLD_RUNES = 309] = "NOT_ENOUGH_GOLD_RUNES";
  e[e.METROPOL_NOT_OWNED_LONG_ENOUGH = 310] = "METROPOL_NOT_OWNED_LONG_ENOUGH";
  e[e.NOT_COOLING_DOWN = 311] = "NOT_COOLING_DOWN";
  e[e.GIFT_EXPIRED = 312] = "GIFT_EXPIRED";
  e[e.ATTACK_TOO_MANY_UNITS = 313] = "ATTACK_TOO_MANY_UNITS";
  e[e.NOT_ENOUGH_GREEN_SKULL_RELICS = 314] = "NOT_ENOUGH_GREEN_SKULL_RELICS";
  e[e.WONT_REACH_IN_TIME = 315] = "WONT_REACH_IN_TIME";
  e[e.PLAYER_GIFT_STORAGE_FULL = 316] = "PLAYER_GIFT_STORAGE_FULL";
  e[e.TOO_MANY_PACKAGES_SENT_TODAY = 317] = "TOO_MANY_PACKAGES_SENT_TODAY";
  e[e.INVALID_BOOKMARK_ID = 318] = "INVALID_BOOKMARK_ID";
  e[e.INVALID_START_AREA = 319] = "INVALID_START_AREA";
  e[e.MONUMENT_REACHED_MAX_LEVEL = 320] = "MONUMENT_REACHED_MAX_LEVEL";
  e[e.EMPTY_BOOKMARK = 321] = "EMPTY_BOOKMARK";
  e[e.ALLIANCE_BOOKMARK_MAX_ENTRYS = 322] = "ALLIANCE_BOOKMARK_MAX_ENTRYS";
  e[e.RECEIVER_IS_EMPTY = 323] = "RECEIVER_IS_EMPTY";
  e[e.INVALID_LOOT_PRIORITY = 324] = "INVALID_LOOT_PRIORITY";
  e[e.ALLI_TOO_LOW_MEMBER_BUFF = 325] = "ALLI_TOO_LOW_MEMBER_BUFF";
  e[e.LEGEND_LEVEL_TOO_HIGH_OR_LOW = 326] = "LEGEND_LEVEL_TOO_HIGH_OR_LOW";
  e[e.NOT_ENOUGH_SPECIAL_CURRENCY = 327] = "NOT_ENOUGH_SPECIAL_CURRENCY";
  e[e.PLAYER_NOT_IN_HIGH_SCORE = 328] = "PLAYER_NOT_IN_HIGH_SCORE";
  e[e.AREA_BECOMES_RUIN = 329] = "AREA_BECOMES_RUIN";
  e[e.ADD_LEGEND_SKILL_FAILED = 330] = "ADD_LEGEND_SKILL_FAILED";
  e[e.ADD_LEGEND_SKILL_REQUIRED_SKILL_MISSING = 331] = "ADD_LEGEND_SKILL_REQUIRED_SKILL_MISSING";
  e[e.ADD_LEGEND_SKILL_NOT_ENOUGH_SKILL_POINTS = 332] = "ADD_LEGEND_SKILL_NOT_ENOUGH_SKILL_POINTS";
  e[e.ADD_LEGEND_SKILL_TIER_LOCKED = 333] = "ADD_LEGEND_SKILL_TIER_LOCKED";
  e[e.NOT_IN_WORLD_CHAT = 334] = "NOT_IN_WORLD_CHAT";
  e[e.NO_TIME_SKIP_LEFT = 335] = "NO_TIME_SKIP_LEFT";
  e[e.WRONG_AMOUNT_OF_BOUGHT_C2 = 336] = "WRONG_AMOUNT_OF_BOUGHT_C2";
  e[e.ADDITIONAL_KINGDOM_NOT_UNLOCKED = 337] = "ADDITIONAL_KINGDOM_NOT_UNLOCKED";
  e[e.WISHING_WELL_NOT_FINISHED = 338] = "WISHING_WELL_NOT_FINISHED";
  e[e.NOT_ENOUGH_WISHINGWELLCOINS = 339] = "NOT_ENOUGH_WISHINGWELLCOINS";
  e[e.STORAGE_CAPACITY_TO_LOW = 340] = "STORAGE_CAPACITY_TO_LOW";
  e[e.LABORATORY_REACHED_MAX_LEVEL = 341] = "LABORATORY_REACHED_MAX_LEVEL";
  e[e.PRIZE_CLASS_LIMIT_REACHED = 342] = "PRIZE_CLASS_LIMIT_REACHED";
  e[e.MAX_MAILS_PER_DAY = 343] = "MAX_MAILS_PER_DAY";
  e[e.MAX_MAILS_PER_MINUTE = 344] = "MAX_MAILS_PER_MINUTE";
  e[e.MAX_MAILS_PER_EMAIL_PER_DAY = 345] = "MAX_MAILS_PER_EMAIL_PER_DAY";
  e[e.MAP_TIME_RAN_OUT = 346] = "MAP_TIME_RAN_OUT";
  e[e.ALLI_TOO_LOW_MIGHT_POINTS = 347] = "ALLI_TOO_LOW_MIGHT_POINTS";
  e[e.ALLI_LEVEL_TOO_LOW = 348] = "ALLI_LEVEL_TOO_LOW";
  e[e.ALLIANCE_EMBLEM_NOT_SET = 349] = "ALLIANCE_EMBLEM_NOT_SET";
  e[e.ALLI_NO_NOBLE_HOUSE = 350] = "ALLI_NO_NOBLE_HOUSE";
  e[e.EVENT_ALREADY_ENTERED = 351] = "EVENT_ALREADY_ENTERED";
  e[e.UNKNOWN_CAMP_TYPE = 352] = "UNKNOWN_CAMP_TYPE";
  e[e.FACTION_LAST_MAN_STANDING_ACTIVE = 353] = "FACTION_LAST_MAN_STANDING_ACTIVE";
  e[e.ALL_SLOTS_ARE_PERMANENT = 354] = "ALL_SLOTS_ARE_PERMANENT";
  e[e.TITLE_NOT_AVAILABLE = 355] = "TITLE_NOT_AVAILABLE";
  e[e.NOT_ENOUGH_POINTS_FOR_TITLE = 356] = "NOT_ENOUGH_POINTS_FOR_TITLE";
  e[e.TITLE_SYSTEM_NOT_AVAILABLE = 357] = "TITLE_SYSTEM_NOT_AVAILABLE";
  e[e.TITLE_ON_COOLDOWN = 358] = "TITLE_ON_COOLDOWN";
  e[e.EXISTING_MAPPING_WRONG_SERVER = 368] = "EXISTING_MAPPING_WRONG_SERVER";
  e[e.UNEXPECTED_FACEBOOK_ERROR = 369] = "UNEXPECTED_FACEBOOK_ERROR";
  e[e.REGISTER_REDIRECTED_TO_LOGIN = 370] = "REGISTER_REDIRECTED_TO_LOGIN";
  e[e.FACEBOOK_MAPPING_NOT_ESTABLISHED = 371] = "FACEBOOK_MAPPING_NOT_ESTABLISHED";
  e[e.CONSTRUCTION_ITEM_NOT_FOUND = 372] = "CONSTRUCTION_ITEM_NOT_FOUND";
  e[e.CONSTRUCTION_ITEM_COULD_NOT_BE_REMOVED = 373] = "CONSTRUCTION_ITEM_COULD_NOT_BE_REMOVED";
  e[e.NO_FREE_CONSTRUCTION_ITEM_SLOT = 374] = "NO_FREE_CONSTRUCTION_ITEM_SLOT";
  e[e.LOCKED_CONSTRUCTION_ITEM_SLOT = 375] = "LOCKED_CONSTRUCTION_ITEM_SLOT";
  e[e.CONSTRUCTION_ITEM_INVENTORY_FULL = 376] = "CONSTRUCTION_ITEM_INVENTORY_FULL";
  e[e.CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED = 377] = "CONSTRUCTION_ITEM_INVENTORY_MAX_AMOUNT_REACHED";
  e[e.SOME_INVERNTORY_IS_FULL = 378] = "SOME_INVERNTORY_IS_FULL";
  e[e.TARGET_EQUIPMENT_INVENTORY_FULL = 379] = "TARGET_EQUIPMENT_INVENTORY_FULL";
  e[e.FACEBOOK_WRONG_USER_ID = 380] = "FACEBOOK_WRONG_USER_ID";
  e[e.INVALID_SLOWDOWN_DURATION = 381] = "INVALID_SLOWDOWN_DURATION";
  e[e.STORED_DECORATION_NOT_FOUND = 382] = "STORED_DECORATION_NOT_FOUND";
  e[e.NOT_A_DECORATION = 383] = "NOT_A_DECORATION";
  e[e.DECORATION_NOT_SELLABLE = 384] = "DECORATION_NOT_SELLABLE";
  e[e.ALLIANCE_TOO_LOW_REQUIRED_BUFF = 385] = "ALLIANCE_TOO_LOW_REQUIRED_BUFF";
  e[e.INVALID_LEVEL = 388] = "INVALID_LEVEL";
  e[e.AB_TEST_NOT_ASSIGNED_TO_PLAYER = 389] = "AB_TEST_NOT_ASSIGNED_TO_PLAYER";
  e[e.PLAYER_FRIEND_LIST_FULL = 390] = "PLAYER_FRIEND_LIST_FULL";
  e[e.EVENT_ALREADY_ENDED = 391] = "EVENT_ALREADY_ENDED";
  e[e.CONSTRUCTION_ITEM_LIMIT_FOR_TYPE_REACHED = 392] = "CONSTRUCTION_ITEM_LIMIT_FOR_TYPE_REACHED";
  e[e.ALREADY_CRAFTING_CONSTRUCTION_ITEM = 393] = "ALREADY_CRAFTING_CONSTRUCTION_ITEM";
  e[e.NOT_ENOUGH_MATERIALS = 394] = "NOT_ENOUGH_MATERIALS";
  e[e.NOT_ENOUGH_RAGE_POINTS = 395] = "NOT_ENOUGH_RAGE_POINTS";
  e[e.RELOCATION_PREVENTS_TAUNT = 396] = "RELOCATION_PREVENTS_TAUNT";
  e[e.TAUNT_WONT_REACH_IN_TIME = 397] = "TAUNT_WONT_REACH_IN_TIME";
  e[e.ALLIANCE_FUNDS_FULL = 398] = "ALLIANCE_FUNDS_FULL";
  e[e.CONSTRUCTION_ITEM_LOCKED = 399] = "CONSTRUCTION_ITEM_LOCKED";
  e[e.QUEST_ID_NOT_FOUND = 400] = "QUEST_ID_NOT_FOUND";
  e[e.REWARD_ID_NOT_FOUND = 401] = "REWARD_ID_NOT_FOUND";
  e[e.AREA_ALREADY_ATTACKED = 402] = "AREA_ALREADY_ATTACKED";
  e[e.AREA_BUSY = 403] = "AREA_BUSY";
  e[e.LORD_NEEDED = 404] = "LORD_NEEDED";
  e[e.TICKET_NEEDED = 405] = "TICKET_NEEDED";
  e[e.NO_TICKET_AVAILABLE = 406] = "NO_TICKET_AVAILABLE";
  e[e.EQUIPMENT_HAS_NO_GEM_SLOT = 407] = "EQUIPMENT_HAS_NO_GEM_SLOT";
  e[e.TROOPS_WONT_ARRIVE_IN_TIME = 408] = "TROOPS_WONT_ARRIVE_IN_TIME";
  e[e.INVALID_LOGIN_TOKEN = 409] = "INVALID_LOGIN_TOKEN";
  e[e.INVALID_FUSION_SOURCE = 410] = "INVALID_FUSION_SOURCE";
  e[e.INVALID_FUSION_TARGET = 411] = "INVALID_FUSION_TARGET";
  e[e.NOT_ENOUGH_FUSION_ENERGY = 412] = "NOT_ENOUGH_FUSION_ENERGY";
  e[e.INVALID_CATALYST = 413] = "INVALID_CATALYST";
  e[e.MINUTESKIP_BLOCKED = 414] = "MINUTESKIP_BLOCKED";
  e[e.PREMIUMSKIP_BLOCKED = 415] = "PREMIUMSKIP_BLOCKED";
  e[e.FUSION_INVENTORY_FULL = 416] = "FUSION_INVENTORY_FULL";
  e[e.FEATURE_NOT_ENABLED = 417] = "FEATURE_NOT_ENABLED";
  e[e.VILLAGE_CAP_COAL_REACHED = 418] = "VILLAGE_CAP_COAL_REACHED";
  e[e.VILLAGE_CAP_OIL_REACHED = 419] = "VILLAGE_CAP_OIL_REACHED";
  e[e.VILLAGE_CAP_GLASS_REACHED = 420] = "VILLAGE_CAP_GLASS_REACHED";
  e[e.VILLAGE_CAP_IRON_REACHED = 421] = "VILLAGE_CAP_IRON_REACHED";
  e[e.NOT_ENOUGH_PRIVATE_RESOURCE_VILLAGE_TOKEN = 422] = "NOT_ENOUGH_PRIVATE_RESOURCE_VILLAGE_TOKEN";
  e[e.INVALID_GLOBALSERVER_LOGIN_TOKEN = 423] = "INVALID_GLOBALSERVER_LOGIN_TOKEN";
  e[e.REWARD_EXPIRED = 424] = "REWARD_EXPIRED";
  e[e.LOSTANDFOUND_INVENTORY_FULL = 425] = "LOSTANDFOUND_INVENTORY_FULL";
  e[e.INVALID_SLOT_ID = 426] = "INVALID_SLOT_ID";
  e[e.NO_ACTIVE_TRAINING = 427] = "NO_ACTIVE_TRAINING";
  e[e.TARGET_SUPPORTED_BY_DIFFERENT_AREA = 428] = "TARGET_SUPPORTED_BY_DIFFERENT_AREA";
  e[e.MAX_CONQUERABLE_ALLIANCE_LANDMARKS_REACHED = 429] = "MAX_CONQUERABLE_ALLIANCE_LANDMARKS_REACHED";
  e[e.NEEDS_REPAIR = 430] = "NEEDS_REPAIR";
  e[e.NO_DISTRICT = 431] = "NO_DISTRICT";
  e[e.SCEAT_SKILL_ACTIVATION_IN_PROGRESS = 432] = "SCEAT_SKILL_ACTIVATION_IN_PROGRESS";
  e[e.INCOMPATIBLE_CIS_FOR_UPGRADE = 433] = "INCOMPATIBLE_CIS_FOR_UPGRADE";
  e[e.PASSWORD_ALREADY_SET = 434] = "PASSWORD_ALREADY_SET";
  e[e.NO_EXISTING_PASSWORD = 435] = "NO_EXISTING_PASSWORD";
  e[e.NO_MORE_DAILY_SCORES_WILL_BE_CALCULATED = 436] = "NO_MORE_DAILY_SCORES_WILL_BE_CALCULATED";
  e[e.INVALID_EVENT_DIFFICULTY_ID = 437] = "INVALID_EVENT_DIFFICULTY_ID";
  e[e.ALREADY_SELECTED_EVENT_DIFFICULTY_ID = 438] = "ALREADY_SELECTED_EVENT_DIFFICULTY_ID";
  e[e.LOCKED_EVENT_DIFFICULTY_ID = 439] = "LOCKED_EVENT_DIFFICULTY_ID";
  e[e.C2_CONFIRMATION_REQUIRED = 440] = "C2_CONFIRMATION_REQUIRED";
  e[e.RE_SEND_MAIL_COOLDOWN = 441] = "RE_SEND_MAIL_COOLDOWN";
  e[e.INVALID_ABILITY_ID = 442] = "INVALID_ABILITY_ID";
  e[e.TO_MANY_XP = 443] = "TO_MANY_XP";
  e[e.TOO_MANY_PACKAGES = 444] = "TOO_MANY_PACKAGES";
  e[e.NO_SPACE_WARNING = 445] = "NO_SPACE_WARNING";
  e[e.CURRENCY_SOFT_CAP_OVERFLOW = 446] = "CURRENCY_SOFT_CAP_OVERFLOW";
  e[e.TOO_MANY_MESSAGES = 447] = "TOO_MANY_MESSAGES";
  e[e.INVALID_DONATION_ITEM = 448] = "INVALID_DONATION_ITEM";
  e[e.DUPLICATE_ID = 449] = "DUPLICATE_ID";
  e[e.PASSWORD_COOLDOWN = 450] = "PASSWORD_COOLDOWN";
  e[e.NOT_ENOUGH_TIME = 451] = "NOT_ENOUGH_TIME";
  e[e.NOT_SUPPORTED = 452] = "NOT_SUPPORTED";
  e[e.LOGIN_COOLDOWN_ACTIVE = 453] = "LOGIN_COOLDOWN_ACTIVE";
  e[e.RESOURCE_PRODUCTION_CAP = 1001] = "RESOURCE_PRODUCTION_CAP";
  e[e.TOO_MANY_LEADERS = 1002] = "TOO_MANY_LEADERS";
  e[e.QUICK_ATTACK_ENABLED = 1003] = "QUICK_ATTACK_ENABLED";
  e[e.NO_FREE_EMBLEM = 2000] = "NO_FREE_EMBLEM";
  e[e.AGE_CHECK_FAILED_TIME_OF_DAY = 10000] = "AGE_CHECK_FAILED_TIME_OF_DAY";
  e[e.KOREA_ID_ALREADY_REGISTERED = 10001] = "KOREA_ID_ALREADY_REGISTERED";
  e[e.MISSING_KOREA_USER_DATA = 10002] = "MISSING_KOREA_USER_DATA";
  e[e.NO_KOREA_USER_DATA_AVAILABLE = 10003] = "NO_KOREA_USER_DATA_AVAILABLE";
  e[e.AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE = 10004] = "AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE";
  e[e.MISSING_KOREA_REQUEST_ID_PARAMETER = 10013] = "MISSING_KOREA_REQUEST_ID_PARAMETER";
  e[e.SOCIAL_LOGIN_KEYS_INVALID = 10014] = "SOCIAL_LOGIN_KEYS_INVALID";
  e[e.IS_MINING_INFLUENCE = 1004] = "IS_MINING_INFLUENCE";
  e[e.MISSING_INFLUENCE_MINER = 1005] = "MISSING_INFLUENCE_MINER";
  e[e.MAX_CONQUERABLE_KINGS_TOWER_REACHED = 1006] = "MAX_CONQUERABLE_KINGS_TOWER_REACHED";
  e[e.ALLIANCE_TOWER_NO_CHANGE = 1007] = "ALLIANCE_TOWER_NO_CHANGE";
  e[e.REGISTRATION_RESTRICTED = 1008] = "REGISTRATION_RESTRICTED";
  e[e.TOWER_DEPLETED = 1009] = "TOWER_DEPLETED";
  e[e.INVALID_LANGUAGE = 1010] = "INVALID_LANGUAGE";
  e[e.ALLIANCE_LANGUAGE_CHANGE_NOT_ALLOWED = 1011] = "ALLIANCE_LANGUAGE_CHANGE_NOT_ALLOWED";
})(nt ||= {});
exports.ERROR = nt;
(function (e) {
  e.getErrorText = function getErrorText(t) {
    return e[t];
  };
})(nt ||= {});
exports.ERROR = nt;