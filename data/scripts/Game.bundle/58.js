Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./4.js");
var s = function () {
  function ClientConstLevelRestrictions() {}
  ClientConstLevelRestrictions.getResourceMinLevelByKingdomID = function (e) {
    if (e == n.WorldClassic.KINGDOM_ID) {
      return 70;
    } else if (r.isUndefined(a.CastleModel.kingdomData)) {
      return 0;
    } else {
      return o.int(a.CastleModel.kingdomData.getKingdomVOByID(e).minLevel);
    }
  };
  ClientConstLevelRestrictions.MIN_LEVEL_DESTRUCTION = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_SPY = 7;
  ClientConstLevelRestrictions.MIN_LEVEL_SABOTAGE = 8;
  ClientConstLevelRestrictions.MIN_LEVEL_TRADE = 9;
  ClientConstLevelRestrictions.MIN_LEVEL_MANAGEMENT = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_TOWER_UPDATE = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_OVERSEER = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_SHOW_BUILDINGLIST = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_USE_ARROW_DECOSHOP = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_DECOSHOP_MAX_BUILDINGCOUNT = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_HIGHSCORE = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_MAILREMINDER = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_INBOX = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_OUTPOSTS = 13;
  ClientConstLevelRestrictions.MIN_LEVEL_EVENT_TRADER = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_PEACE_PROTECTION_ICON = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_RECRUITMENT_ABORT = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_UNLOCK_RECRUIT_SLOT = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_RETREAT_MOVEMENTS = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_EVENTBUILDINGS = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_CAPITALS = 35;
  ClientConstLevelRestrictions.MIN_LEVEL_CONQUER_METROPOL = 35;
  ClientConstLevelRestrictions.MIN_LEVEL_PLAGUE_ATTACK = 8;
  ClientConstLevelRestrictions.MIN_LEVEL_ALL_QUEST_DIALOG_ELEMENTS_ACTIVE = 1;
  ClientConstLevelRestrictions.MIN_LEVEL_TROOP_BOOST_BUTTON_AVAILABLE = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_RECRUIT_SELECTMAX_UNITS = 20;
  ClientConstLevelRestrictions.PLAYERLEVEL_AT_FIRST_DUNGEONATTACK = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_ACHIEVEMENTS = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_ROTATIONPANEL = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_OPENGATE = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_KINGDOM_TEASER = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_SAVE_PLAYER_POSITION = 1;
  ClientConstLevelRestrictions.MIN_LEVEL_DEFENCE_DIALOG = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_EXPANSION_ARROWS = 1;
  ClientConstLevelRestrictions.MIN_LEVEL_DAILY_QUEST = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_RINGMENU_REOPENS_ON_SKIP_BUILDING = 25;
  ClientConstLevelRestrictions.MIN_LEVEL_RECEIVE_RESOURCE_WAGONS = 6;
  ClientConstLevelRestrictions.MAX_MACE_FOR_TUTORIAL_QUEST = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_FUSION_FORGE = 70;
  ClientConstLevelRestrictions.TUTORIAL_END = 5;
  ClientConstLevelRestrictions.MIN_LEVEL_SHOW_HOW_TODO_BUTTON = 5;
  ClientConstLevelRestrictions.MAX_LEVEL_SHOW_HOW_TODO_BUTTON = 15;
  ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME = 2;
  ClientConstLevelRestrictions.MAX_LEVEL_ATTACK_WARNING_NOT_ENOUGH_ATTACKPOWER = 16;
  ClientConstLevelRestrictions.MIN_LEVEL_TO_SHOW_QUESTBOOK_WHEN_ONLY_ONE_QUEST_ACTIVE = 0;
  ClientConstLevelRestrictions.MIN_LEVEL_TO_AUTO_SHOW_QEUST_INFO = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_PRODUCTION_QUEUE = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_INFO_WINDOW = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_NPC_COLLECTABLES = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_PAYMENT_SHOP = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_PUBLIC_ORDER = 2;
  ClientConstLevelRestrictions.MIN_LEVEL_CHANGE_CREST = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_GLORY_TITLE = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_WELCOME_GIFT = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_CHOOSE_LOCATION = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_ALLIANCE = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_MESSAGES = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_RANKINGS = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_FAME = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_LOST_AND_FOUND = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_MAP_OF_KINGDOMS = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_TO_THE_WORLD_MAP = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_ECONOMY = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_OVERVIEW = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_ADMIN = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_KINGS_MARKET = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_MOVEMENTS = 3;
  ClientConstLevelRestrictions.MIN_LEVEL_QUEST_HUD = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_ADVENTURE_MAP = 6;
  ClientConstLevelRestrictions.MIN_LEVEL_GENERALS = 10;
  ClientConstLevelRestrictions.MIN_LEVEL_SUBSCRIPTION = 6;
  ClientConstLevelRestrictions.MAX_DELTA_LEVEL_SPY = 50;
  ClientConstLevelRestrictions.MIN_LEVEL_SPY_ALL = 50;
  ClientConstLevelRestrictions.MIN_LEVEL_SELECT_PREMIUM_COMMANDER = 10;
  ClientConstLevelRestrictions.MIN_LEVEL_WEB_SHOP = 2;
  return ClientConstLevelRestrictions;
}();
exports.ClientConstLevelRestrictions = s;
var r = require("./229.js");