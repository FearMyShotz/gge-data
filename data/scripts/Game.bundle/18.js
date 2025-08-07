Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./6.js");
var s = createjs.Point;
var r = function () {
  function ClientConstCastle() {}
  ClientConstCastle.setWorldmapSize = function (e, t) {
    n.info("worldmap size set to " + e + "x" + t);
    ClientConstCastle._worldmapsize_x = e;
    ClientConstCastle._worldmapsize_y = t;
  };
  ClientConstCastle.setWorldmapSizeViaGGC = function (e, t) {
    ClientConstCastle.setWorldmapSize(e, t);
    ClientConstCastle._ggcX = e;
    ClientConstCastle._ggcY = t;
  };
  Object.defineProperty(ClientConstCastle, "GGC_X", {
    get: function () {
      return ClientConstCastle._ggcX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "GGC_Y", {
    get: function () {
      return ClientConstCastle._ggcY;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLDMAPSIZE_X", {
    get: function () {
      return ClientConstCastle._worldmapsize_x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLDMAPSIZE_Y", {
    get: function () {
      return ClientConstCastle._worldmapsize_y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLD_WIDTH", {
    get: function () {
      return ClientConstCastle._worldmapsize_x * o.WorldConst.SECTOR_WIDTH;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLD_HEIGHT", {
    get: function () {
      return ClientConstCastle._worldmapsize_y * o.WorldConst.SECTOR_HEIGHT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLDMAPPIXELSIZE_X", {
    get: function () {
      return ClientConstCastle._worldmapsize_x * o.WorldConst.SECTOR_WIDTH * ClientConstCastle.MAPTILESIZE_X;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ClientConstCastle, "WORLDMAPPIXELSIZE_Y", {
    get: function () {
      return ClientConstCastle._worldmapsize_y * o.WorldConst.SECTOR_HEIGHT * ClientConstCastle.MAPTILESIZE_Y;
    },
    enumerable: true,
    configurable: true
  });
  ClientConstCastle.hasReachedSpecificLevel = function (e) {
    return [ClientConstCastle.PLAYER_LEVEL_5, ClientConstCastle.PLAYER_LEVEL_13].indexOf(e) != -1;
  };
  ClientConstCastle.__initialize_static_members = function () {
    ClientConstCastle.SECTORPIXELSIZE_X = a.int(ClientConstCastle.MAPTILESIZE_X * o.WorldConst.SECTOR_WIDTH);
    ClientConstCastle.SECTORPIXELSIZE_Y = a.int(ClientConstCastle.MAPTILESIZE_Y * o.WorldConst.SECTOR_HEIGHT);
    ClientConstCastle.SECTORSINLOOKUPMAP_X = a.int(a.int(o.WorldConst.LOOKUP_MAP_SIZE / o.WorldConst.SECTOR_WIDTH));
    ClientConstCastle.SECTORSINLOOKUPMAP_Y = a.int(a.int(o.WorldConst.LOOKUP_MAP_SIZE / o.WorldConst.SECTOR_HEIGHT));
    ClientConstCastle.SECTORSINRIVERLOOKUPMAP_X = a.int(ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    ClientConstCastle.SECTORSINRIVERLOOKUPMAP_Y = a.int(ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    ClientConstCastle.BOOSTER_REBUY_REMINDER_TIME_BEFORE_END = 604680;
  };
  ClientConstCastle.USE_PICK_AND_DROP = true;
  ClientConstCastle.WELCOME_FEATURE_ENABLED = false;
  ClientConstCastle.SHOW_FPS = false;
  ClientConstCastle.FPS_OF_ANIMATIONS = 12;
  ClientConstCastle.USE_BITMAP_CLIPS = false;
  ClientConstCastle.USE_BITMAP_NPCS = true;
  ClientConstCastle.USE_BITMAP_FX = true;
  ClientConstCastle.MAX_SIZE_FOR_CACHING = 2000;
  ClientConstCastle.MAX_WIDTH = 1300;
  ClientConstCastle.MAX_HEIGHT = 800;
  ClientConstCastle.MIN_WIDTH = 800;
  ClientConstCastle.MIN_HEIGHT = 600;
  ClientConstCastle.VO_CLASSPATH_ISO_WORLD = "com.goodgamestudios.castle.gameplay.isoworld.model.vos.";
  ClientConstCastle.VE_CLASSPATH_ISO_WORLD = "com.goodgamestudios.castle.gameplay.isoworld.view.ves.";
  ClientConstCastle.VO_CLASSPATH_WORLDMAP = "com.goodgamestudios.castle.worldmap.vo.";
  ClientConstCastle.VE_CLASSPATH_WORLDMAP = "com.goodgamestudios.castle.worldmap.objects.";
  ClientConstCastle.VO_CLASSPATH_OTHER = "com.goodgamestudios.castle.world.vo.";
  ClientConstCastle.VO_CLASSPATH_UNITS = "com.goodgamestudios.castle.world.vo.";
  ClientConstCastle.MODEL_CLASSPATH = "com.goodgamestudios.castle.model.components.";
  ClientConstCastle.VO_CLASSPATH_WORLD = "com.goodgamestudios.castle.world.vo.";
  ClientConstCastle.VE_CLASSPATH_WORLD = "com.goodgamestudios.castle.world.objects.";
  ClientConstCastle.NUM_RANDOM_LOADINGTEXT_ELEMENTS_AVAILABLE = 14;
  ClientConstCastle.ISOTILESIZE_X = 80;
  ClientConstCastle.ISOTILESIZE_Y = 40;
  ClientConstCastle.BACKGROUND_WOD = 50;
  ClientConstCastle.WOODCUTTER_WOD = 100;
  ClientConstCastle.SPYTYPE_MILITARY = 0;
  ClientConstCastle.SPYTYPE_ECO = 1;
  ClientConstCastle.SPYTYPE_SABOTAGE = 2;
  ClientConstCastle.SPYTYPE_PLAGUE = 3;
  ClientConstCastle.ACTION_TYPE_ATTACK = 0;
  ClientConstCastle.ACTION_TYPE_CONQUER = 1;
  ClientConstCastle.ACTION_TYPE_CONQUERATTACK = 2;
  ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE = 3;
  ClientConstCastle.ACTION_TYPE_DUNGEONATTACK = 4;
  ClientConstCastle.ACTION_TYPE_OUTPOSTATTACK = 5;
  ClientConstCastle.ACTION_TYPE_SENDTROUPS = 6;
  ClientConstCastle.ACTION_TYPE_TREASUREATTACK = 7;
  ClientConstCastle.ACTION_TYPE_BOSSDUNGEONATTACK = 10;
  ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK = 11;
  ClientConstCastle.ACTION_TYPE_SENDGOODS = 12;
  ClientConstCastle.ACTION_TYPE_LANDMARK_ATTACK = 14;
  ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK = 15;
  ClientConstCastle.ACTION_TYPE_ALLIANCE_CITY = 16;
  ClientConstCastle.ACTION_TYPE_COLLECTOR_ATTACK = 17;
  ClientConstCastle.ACTION_TYPE_SUPPORTDEFENSE_TOWNSHIP = 18;
  ClientConstCastle.ACTION_TYPE_ATTACK_ABG_TOWERS = 19;
  ClientConstCastle.MOVEMENTTYPE_ATTACK = 0;
  ClientConstCastle.MOVEMENTTYPE_DEFENCE = 1;
  ClientConstCastle.MOVEMENTTYPE_TRAVEL = 2;
  ClientConstCastle.MOVEMENTTYPE_SPY = 3;
  ClientConstCastle.MOVEMENTTYPE_MARKET = 4;
  ClientConstCastle.MOVEMENTTYPE_SIEGE = 5;
  ClientConstCastle.MOVEMENTTYPE_TREASUREHUNT = 6;
  ClientConstCastle.MOVEMENTTYPE_NPC_ATTACK = 11;
  ClientConstCastle.MOVEMENTTYPE_PLAGUEMONK = 14;
  ClientConstCastle.MOVEMENTTYPE_OCCUPY_FACTION = 15;
  ClientConstCastle.MOVEMENTTYPE_ALIEN_ATTACK = 17;
  ClientConstCastle.MOVEMENTTYPE_FACTION_ATTACK = 18;
  ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CITY_ATTACK = 19;
  ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_TAUNT_ATTACK = 20;
  ClientConstCastle.MOVEMENTTYPE_ALLIANCE_CAMP_ATTACK = 21;
  ClientConstCastle.MOVEMENTTYPE_COLLECTOR = 23;
  ClientConstCastle.MOVEMENTTYPE_COLLECTOR_TEMP_SERVER = 24;
  ClientConstCastle.MOVEMENTTYPE_RANKSWAP_TEMP_SERVER = 25;
  ClientConstCastle.MOVEMENTTYPE_DAIMYO_TOWNSHIP_DEFENSE = 26;
  ClientConstCastle.MOVEMENTTYPE_DAIMYO_TAUNT_ATTACK = 27;
  ClientConstCastle.MOVEMENTTYPE_DAIMYO_CASTLE_ATTACK = 28;
  ClientConstCastle.MOVEMENTTYPE_ALLIANCE_BATTLE_GROUND_COLLECTOR_ATTACK = 29;
  ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVE_CHARGE = 30;
  ClientConstCastle.MOVEMENTTYPE_TEMPSERVER_PVP_CHARGE = 31;
  ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_SUPPORT = 32;
  ClientConstCastle.MOVEMENTTYPE_ABG_ALLIANCE_TOWER_ATTACK = 33;
  ClientConstCastle.MOVEMENTTYPE_WOLFKING_TAUNT_ATTACK = 34;
  ClientConstCastle.SMALL_ARMY_LIMIT = 50;
  ClientConstCastle.BIG_ARMY_LIMIT = 200;
  ClientConstCastle.MAPTILESIZE_X = 64;
  ClientConstCastle.MAPTILESIZE_Y = 64;
  ClientConstCastle._worldmapsize_x = 0;
  ClientConstCastle._worldmapsize_y = 0;
  ClientConstCastle._ggcX = 0;
  ClientConstCastle._ggcY = 0;
  ClientConstCastle.MAX_FINDABLE_ENEMY_COUNTER = 10;
  ClientConstCastle.PLAYERLEVEL_AT_FIRST_DUNGEONATTACK = 4;
  ClientConstCastle.UNIT_BUY_MAXIMUM = 499;
  ClientConstCastle.RIVER_LOOKUP_MAP_SIZE = 9;
  ClientConstCastle.CASTLE_RIVER_LOOKUP_MAP = [[13, 1, 14, 50, 50, 50, 13, 14, 50], [11, 50, 12, 14, 50, 13, 11, 2, 21], [50, 41, 50, 12, 21, 31, 21, 11, 50], [42, 1, 21, 14, 50, 22, 50, 50, 50], [50, 50, 13, 1, 3, 31, 21, 14, 50], [14, 50, 22, 50, 12, 11, 50, 2, 21], [12, 3, 11, 50, 50, 50, 50, 22, 50], [50, 12, 3, 14, 13, 21, 21, 11, 50], [50, 13, 11, 12, 1, 44, 50, 50, 50]];
  ClientConstCastle.PRELOAD_DISTANCE_X = 1;
  ClientConstCastle.PRELOAD_DISTANCE_Y = 1;
  ClientConstCastle.SECTOR_EXPIRATION_TIME = 120000;
  ClientConstCastle.SECTOR_EXPIRATION_ON_CHANGE_TO_WORLDMAP = 10000;
  ClientConstCastle.BUDDY_PANEL_HEIGHT = 160;
  ClientConstCastle.SEASON_PANEL_OFFSET = -65;
  ClientConstCastle.TUTORIAL_BUILDING_WOD = 999;
  ClientConstCastle.TUTORIAL_BUILDINGSPACE_WOD = 998;
  ClientConstCastle.EXPANSIONS_TO_EACHSIDE = 2;
  ClientConstCastle.GROUP_EXPANSION = "Expansion";
  ClientConstCastle.GROUP_TOWER = "Tower";
  ClientConstCastle.GROUP_BACKGROUND = "Background";
  ClientConstCastle.GROUP_RESOURCES = "Resources";
  ClientConstCastle.GROUP_CASTLEWALL = "Castlewall";
  ClientConstCastle.GROUP_GATE = "Gate";
  ClientConstCastle.GROUP_TOWERBASE = "Towerbase";
  ClientConstCastle.GROUP_BUILDING = "Building";
  ClientConstCastle.GROUP_MAPOBJECT = "Mapobject";
  ClientConstCastle.GROUP_MAPMOVEMENT = "Mapmovement";
  ClientConstCastle.GROUP_UNIT = "Unit";
  ClientConstCastle.GROUP_DEFENCE = "Defence";
  ClientConstCastle.GROUP_SURROUNDINGS = "Surroundings";
  ClientConstCastle.GROUP_FIXED_POSITION_BUILDING = "FixedPositionBuilding";
  ClientConstCastle.GROUP_TRAVELBOOSTER = "Travelbooster";
  ClientConstCastle.GROUP_MOAT = "Moat";
  ClientConstCastle.GROUP_EVENT = "Event";
  ClientConstCastle.GROUP_MOVING = "Moving";
  ClientConstCastle.UNIT_CATEGORY_SOLDIERS = "unitCategorySoldiers";
  ClientConstCastle.UNIT_CATEGORY_AUXILIARIES = "unitCategoryAuxiliaries";
  ClientConstCastle.UNIT_CATEGORY_TOOLS = "unitCategoryTools";
  ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE = 1;
  ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE = 0;
  ClientConstCastle.UNIT_BUILDINGTYPE_BARRACKS = "Barracks";
  ClientConstCastle.UNIT_BUILDINGTYPE_SCEAT = "sceat";
  ClientConstCastle.UNIT_BUILDINGTYPE_WORKSHOP = "Workshop";
  ClientConstCastle.UNIT_BUILDINGTYPE_DWORKSHOP = "Dworkshop";
  ClientConstCastle.UNIT_BUILDINGTYPE_HOSPITAL = "Hospital";
  ClientConstCastle.UNIT_BUILDINGTYPE_FACTION_BARRACKS = "FactionBarracks";
  ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE = "soldierRange";
  ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE = "soldierMelee";
  ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_MEAD = "soldierRangeMead";
  ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_MEAD = "soldierMeleeMead";
  ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE_BEEF = "soldierRangeBeef";
  ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE_BEEF = "soldierMeleeBeef";
  ClientConstCastle.UNIT_TYPE_TOOL_ATTACK = "toolAttack";
  ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE = "toolDefence";
  ClientConstCastle.UNIT_TYPE_STRONGHOLD = "stronghold";
  ClientConstCastle.UNIT_TYPE_EVENTUNIT = "Eventunit";
  ClientConstCastle.BOOSTER_CATEGORY_MARAUDER = "boosterCategoryMarauder";
  ClientConstCastle.CATEGORY_INVENTORY = "category_inventory";
  ClientConstCastle.CATEGORY_STRONGHOLD = "category_stronghold";
  ClientConstCastle.CATEGORY_HOSPITAL = "category_hospital";
  ClientConstCastle.CATEGORY_MARKETPLACE_BOOSTER = "category_marketplace_booster";
  ClientConstCastle.CATEGORY_MARKETPLACE_VIP = "category_marketplace_vip";
  ClientConstCastle.CATEGORY_MARKETPLACE_CREST = "category_marketplace_crest";
  ClientConstCastle.CATEGORY_MARKETPLACE_INVITE_A_FRIEND = "category_marketplace_inviteafriend";
  ClientConstCastle.NAME_EVENTUNIT = "Eventunit";
  ClientConstCastle.NAME_ELITETOOL = "Elitetool";
  ClientConstCastle.BUILDINGGROUND_TYPE_DECO = "DECO";
  ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY = "MILITARY";
  ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE = "DEFENCE";
  ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL = "CIVIL";
  ClientConstCastle.BUILDINGGROUND_TYPE_NONE = "";
  ClientConstCastle.BUILDINGGORUND_TYPES = [ClientConstCastle.BUILDINGGROUND_TYPE_NONE, ClientConstCastle.BUILDINGGROUND_TYPE_CIVIL, ClientConstCastle.BUILDINGGROUND_TYPE_MILITARY, ClientConstCastle.BUILDINGGROUND_TYPE_DEFENCE];
  ClientConstCastle.CATEGORY_NOT_IN_SHOP = "NOT_IN_SHOP";
  ClientConstCastle.CATEGORY_CIVIL = "CIVIL";
  ClientConstCastle.CATEGORY_MILITARY = "MILITARY";
  ClientConstCastle.CATEGORY_DECO = "DECO";
  ClientConstCastle.CATEGORY_STORAGE = "STORAGE";
  ClientConstCastle.CATEGORY_DEFENCE = "DEFENCE";
  ClientConstCastle.CATEGORY_TUTORIAL = "TUTORIAL";
  ClientConstCastle.CATEGORY_SEASONEVENT = "ONLY_IN_EVENT";
  ClientConstCastle.TIP_EFFICIENCY = "TIP_EFFICIENCY";
  ClientConstCastle.TIP_BARRACKUNIT = "TIP_BARRACKUNIT";
  ClientConstCastle.TIP_BUILDLIST = "TIP_BUILDLIST";
  ClientConstCastle.TIP_INSTANTBUILD = "TIP_INSTANTBUILD";
  ClientConstCastle.TIP_OVERSEER = "TIP_OVERSEER";
  ClientConstCastle.TIP_PRODUCTIVITY = "TIP_PRODUCTIVITY";
  ClientConstCastle.TIP_REPAIR = "TIP_REPAIR";
  ClientConstCastle.START_GROUND_WOD_ID = 200;
  ClientConstCastle.EXTENSION_GROUND_WOD_ID = 201;
  ClientConstCastle.CASTLEWALL_WOD_ID = 501;
  ClientConstCastle.UNIT_PEASANT_WOD = 652;
  ClientConstCastle.UNIT_MILITIA_WOD = 746;
  ClientConstCastle.UNIT_UNKNOWNTOOLS_WOD = 666;
  ClientConstCastle.UNIT_UNKNOWNSOLDIER_WOD = 665;
  ClientConstCastle.BIGGEST_MILITARYCAMP_WOD = 153;
  ClientConstCastle.BIGGEST_TAVERN_WOD = 147;
  ClientConstCastle.NO_HORSE_WOD = -1;
  ClientConstCastle.HORSE_LEVEL1_WOD = 1001;
  ClientConstCastle.HORSE_LEVEL2_WOD = 1004;
  ClientConstCastle.HORSE_LEVEL3_WOD = 1007;
  ClientConstCastle.HORSE_P1_LEVEL1_WOD = 1002;
  ClientConstCastle.HORSE_P1_LEVEL2_WOD = 1005;
  ClientConstCastle.HORSE_P2_LEVEL1_WOD = 1003;
  ClientConstCastle.HORSE_P2_LEVEL2_WOD = 1006;
  ClientConstCastle.HORSE_P3_LEVEL1_WOD = 1008;
  ClientConstCastle.HORSE_P3_LEVEL2_WOD = 1009;
  ClientConstCastle.MARKETPLACE_WOD = 283;
  ClientConstCastle.COLOSS_RIDER_DECO_WOD = 391;
  ClientConstCastle.COLOSS_DECO_WOD = 342;
  ClientConstCastle.COIN_COLOSSUS_DECO_WOD = 56;
  ClientConstCastle.HUNTER_BUILDING_WOD = 472;
  ClientConstCastle.BREWERY_BUILDING_WOD = 1959;
  ClientConstCastle.BEEKEEPER_BUILDING_WOD = 1944;
  ClientConstCastle.KINGDOMHUNTER_BUILDING_WOD = 506;
  ClientConstCastle.STRONGHOLD_BUILDING_WOD = 477;
  ClientConstCastle.HOSPITAL_BUILDING_WOD = 1;
  ClientConstCastle.TREASURECHEST_WOD = 223;
  ClientConstCastle.CRANE_BUILDING_WOD_LEVEL1 = 494;
  ClientConstCastle.BUILDERS_QUARTERS_BUILDING_WOD_LEVEL1 = 3211;
  ClientConstCastle.RESEARCH_BUILDING_WOD_LEVEL1 = 49;
  ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1 = 756;
  ClientConstCastle.ARMORY_BUILDING_WOD_LEVEL1 = 1846;
  ClientConstCastle.LEGEND_TEMPLE_WOD_LEVEL1 = 837;
  ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_IDS = [ClientConstCastle.CONSTRUCTOR_BUILDING_WOD_LEVEL1];
  ClientConstCastle.BARRACKS_BUILDING_WOD_ID = 160;
  ClientConstCastle.HORSE_BOOSTER_COUNT = 4;
  ClientConstCastle.MIN_USERLEVEL_HORSE_VISIBLE_IN_POSTATTACK = 7;
  ClientConstCastle.TOWER_DIRS = [new s(-1, -1), new s(1, -1), new s(1, 1), new s(-1, 1)];
  ClientConstCastle.WID_RESEARCH_TOWER = 49;
  ClientConstCastle.DEFENCE_CATEGORY_KEEP = 0;
  ClientConstCastle.DEFENCE_CATEGORY_WALL = 1;
  ClientConstCastle.DEFENCE_CATEGORY_MOAT = 2;
  ClientConstCastle.DEFENCE_CATEGORY_ALLIANCETOWER = 3;
  ClientConstCastle.ATTACK_TOOL = "Attack";
  ClientConstCastle.DEFENSE_TOOL = "Defence";
  ClientConstCastle.WALL_WOD_IDS = [501, 502, 503, 504, 505, 2542, 1984, 2543, 3182];
  ClientConstCastle.GATE_WOD_IDS = [450, 451, 452, 453, 469, 2544, 1985, 2545, 3183];
  ClientConstCastle.MOAT_WOD_IDS = [455, 830, 1987, 2546, 456, 831, 1988, 2547, 4264];
  ClientConstCastle.FACTION_WALL_WOD_IDS = [234, 235, 278];
  ClientConstCastle.FACTION_GATE_WOD_IDS = [238, 239, 292];
  ClientConstCastle.FACTION_MOAT_WOD_IDS = [240, 0, 0, 0, 9, 241, 10];
  ClientConstCastle.INBOX_CATEGORY_TYPED_MAIL = "INBOX_CATEGORY_TYPED_MAIL";
  ClientConstCastle.INBOX_CATEGORY_PLAYER_MAIL = "INBOX_CATEGORY_PLAYER_MAIL";
  ClientConstCastle.INBOX_CATEGORY_FLAGGED_MAIL = "INBOX_CATEGORY_FLAGED_MAIL";
  ClientConstCastle.MESSAGE_CATEGORY_OUTBOX = "MESSAGE_CATEGORY_OUTBOX";
  ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS = "INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS";
  ClientConstCastle.INBOX_CATEGORY_OFFER = "INBOX_CATEGORY_OFFER";
  ClientConstCastle.INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED = "INBOX_CATEGORY_BATTLE_AND_SPY_REPORTS_FORWARDED";
  ClientConstCastle.TREASURECHEST_POSITIONS = [[2, -12], [12, -12], [-14, -2], [-14, 18]];
  ClientConstCastle.TREASURECHEST_POSITIONS_HOME_CASTLE = [[-10, -12], [-10, -12], [-14, -10], [-14, -13]];
  ClientConstCastle.SPECIAL_INSTANCE_ID = 8;
  ClientConstCastle.PLAGUEMONK_TRAVEL_TIME = 600;
  ClientConstCastle.CATEGORY_ACHIEVEMENT = 1;
  ClientConstCastle.CATEGORY_HONOR = 2;
  ClientConstCastle.CATEGORY_LOOT = 3;
  ClientConstCastle.CATEGORY_BUILDING_POINTS = 4;
  ClientConstCastle.CATEGORY_MIGHT = 5;
  ClientConstCastle.CATEGORY_LEGEND_LEVEL = 6;
  ClientConstCastle.CATEGORY_TOURNAMENT_FAME = 20;
  ClientConstCastle.CATEGORY_ALLIANCE_TOURNAMENT_FAME = 21;
  ClientConstCastle.CATEGORY_FACTIONEVENT_HIGHSCORE = 30;
  ClientConstCastle.AUTO_SHOW_MAIL_VERIFICATION_DIALOG_LEVEL = 15;
  ClientConstCastle.AUTO_SHOW_MAIL_VERIFICATION_DIALOG_LEVELS = [6, 7, 9, 11, 13];
  ClientConstCastle.AUTO_SHOW_NAME_CASTLE_DIALOG_LEVEL = 3;
  ClientConstCastle.FLANK_LEFT = 0;
  ClientConstCastle.FLANK_MIDDLE = 1;
  ClientConstCastle.FLANK_RIGHT = 2;
  ClientConstCastle.FLANK_YARD = 3;
  ClientConstCastle.FLANK_REINFORCEMENT = 4;
  ClientConstCastle.FLANK_REINFORCEMENT_SUMMARY = 5;
  ClientConstCastle.MINIMUM_RECRUITEMENT_TIME = 15;
  ClientConstCastle.PLAYER_LEVEL_5 = 5;
  ClientConstCastle.PLAYER_LEVEL_13 = 13;
  return ClientConstCastle;
}();
exports.ClientConstCastle = r;
r.__initialize_static_members();