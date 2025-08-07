Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ClientConstQuestCondition() {}
  ClientConstQuestCondition.hasShowHowToFunction = function (e) {
    switch (e) {
      case ClientConstQuestCondition.QUESTTYPE_BUILDINGS:
      case ClientConstQuestCondition.QUESTTYPE_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_TOOLS:
      case ClientConstQuestCondition.QUESTTYPE_TOOL_START:
      case ClientConstQuestCondition.QUESTTYPE_DECOS:
      case ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER:
      case ClientConstQuestCondition.QUESTTYPE_EXPANSIONS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES:
      case ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE:
      case ClientConstQuestCondition.QUESTTYPE_SPY:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION:
      case ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE:
      case ClientConstQuestCondition.QUESTTYPE_START_KINGDOM:
      case ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP:
      case ClientConstQuestCondition.QUESTTYPE_OUTPOSTS:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES:
      case ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE:
      case ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE:
      case ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS:
      case ClientConstQuestCondition.QUESTTYPE_RESEARCH:
      case ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS:
      case ClientConstQuestCondition.QUESTTYPE_WISHING_WELL:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER:
      case ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT:
      case ClientConstQuestCondition.QUESTTYPE_SABOTAGE:
      case ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE:
      case ClientConstQuestCondition.QUESTTYPE_USE_FORGE:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS:
      case ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE:
      case ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME:
      case ClientConstQuestCondition.QUESTTYPE_OFF_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_DEF_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE:
      case ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS:
      case ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE:
      case ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES:
      case ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES:
      case ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES:
      case ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM:
      case ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM:
      case ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK:
      case ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME:
      case ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT:
      case ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP:
      case ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES:
      case ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER:
      case ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN:
      case ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW:
      case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
      case ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
      case ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING:
      case ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
      case ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW:
        return true;
      default:
        return false;
    }
  };
  ClientConstQuestCondition.QUESTTYPE_STARTER = "starter";
  ClientConstQuestCondition.QUESTTYPE_BUILDINGS = "buildings";
  ClientConstQuestCondition.QUESTTYPE_UNITS = "units";
  ClientConstQuestCondition.QUESTTYPE_TOOLS = "tools";
  ClientConstQuestCondition.QUESTTYPE_TOOL_START = "toolStart";
  ClientConstQuestCondition.QUESTTYPE_DECOS = "decos";
  ClientConstQuestCondition.QUESTTYPE_STORAGE = "storage";
  ClientConstQuestCondition.QUESTTYPE_EXPANSIONS = "expansions";
  ClientConstQuestCondition.QUESTTYPE_INSTANTBUILD = "instantBuild";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_TAX = "collectTax";
  ClientConstQuestCondition.QUESTTYPE_BRIBE_TAXCOLLECTOR = "bribeTaxCollector";
  ClientConstQuestCondition.QUESTTYPE_DONATE_STONE = "donateStone";
  ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD = "donateFood";
  ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD = "donateWood";
  ClientConstQuestCondition.QUESTTYPE_DONATE_C1 = "donateCurrency1";
  ClientConstQuestCondition.QUESTTYPE_DONATE_COAL = "donateCoal";
  ClientConstQuestCondition.QUESTTYPE_DONATE_OIL = "donateOil";
  ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS = "donateGlass";
  ClientConstQuestCondition.QUESTTYPE_DONATE_IRON = "donateIron";
  ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS = "donateKhanMedals";
  ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS = "donateSamuraiTokens";
  ClientConstQuestCondition.QUESTTYPE_COUNT_BATTLES = "countBattles";
  ClientConstQuestCondition.QUESTTYPE_COUNT_DUNGEONS = "countDungeons";
  ClientConstQuestCondition.QUESTTYPE_COUNT_POPULATION = "population";
  ClientConstQuestCondition.QUESTTYPE_LOOTRESOURCE = "lootResource";
  ClientConstQuestCondition.QUESTTYPE_SPY = "spy";
  ClientConstQuestCondition.QUESTTYPE_OUTPOSTS = "outposts";
  ClientConstQuestCondition.QUESTTYPE_START_TREASUREMAP = "startTreasureMap";
  ClientConstQuestCondition.QUESTTYPE_TREASURE_NODE = "treasureNode";
  ClientConstQuestCondition.QUESTTYPE_FINISHTREASUREDUNGEONS = "finishTreasureDungeons";
  ClientConstQuestCondition.QUESTTYPE_JOIN_ALLIANCE = "alliance";
  ClientConstQuestCondition.QUESTTYPE_START_KINGDOM = "startKingdom";
  ClientConstQuestCondition.QUESTTYPE_CONQUER_VILLAGES = "villages";
  ClientConstQuestCondition.QUESTTYPE_COUNT_BOSSDUNGEONS = "bossDungeon";
  ClientConstQuestCondition.QUESTTYPE_TREASURE_VILLAGES = "treasureVillages";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_SILVER_RUNES = "collectSilverRunes";
  ClientConstQuestCondition.QUESTTYPE_FIND_EQUIPMENT = "findEquipment";
  ClientConstQuestCondition.QUESTTYPE_OFF_UNITS = "offUnits";
  ClientConstQuestCondition.QUESTTYPE_DEF_UNITS = "defUnits";
  ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONCAMPS = "conquerFactionCamp";
  ClientConstQuestCondition.QUESTTYPE_CONQUER_FACTIONVILLAGE = "conquerFactionVillage";
  ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAPITAL = "defeatedFactionCapitalOnMap";
  ClientConstQuestCondition.QUESTTYPE_DEFEATED_FACTIONCAMP = "defeatFactionCamp";
  ClientConstQuestCondition.QUESTTYPE_FINISH_UNLOCKABLE = "finishUnlockable";
  ClientConstQuestCondition.QUESTTYPE_JOIN_AREA = "joinArea";
  ClientConstQuestCondition.QUESTTYPE_REPAIR_TREASURE_BRIDGES = "repairedTreasureBridges";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_KHAN_TABLETS = "collectKhanTablets";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_SAMURAI_TOKENS = "collectSamuraiTokens";
  ClientConstQuestCondition.QUESTTYPE_SPEND_SAMURAI_TOKENS = "spendSamuraiTokens";
  ClientConstQuestCondition.QUESTTYPE_LAW_AND_ORDER = "lawAndOrder";
  ClientConstQuestCondition.QUESTTYPE_LOOT_PVP_AQUAMARINE = "lootAquamarineInPVP";
  ClientConstQuestCondition.QUESTTYPE_LOOT_NPC_AQUAMARINE = "lootAquamarineFromNPC";
  ClientConstQuestCondition.QUESTTYPE_CONQUER_RESOURCE_ISLE = "conquerResourceIsle";
  ClientConstQuestCondition.QUESTTYPE_BUY_RUBIES = "buyRubies";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_FAME = "collectFame";
  ClientConstQuestCondition.QUESTTYPE_HEAL_SOLDIERS = "healSoldiers";
  ClientConstQuestCondition.QUESTTYPE_RESEARCH = "research";
  ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_TABLETS = "spendKhanTablets";
  ClientConstQuestCondition.QUESTTYPE_WISHING_WELL = "wishingWell";
  ClientConstQuestCondition.QUESTTYPE_MINUTESKIP = "useMinuteSkip";
  ClientConstQuestCondition.QUESTTYPE_INVITE_A_FRIEND = "inviteFriend";
  ClientConstQuestCondition.QUESTTYPE_CONSTRUCTION_ALLIANCE_HELP = "requestAllianceHelpBuilding";
  ClientConstQuestCondition.QUESTTYPE_BUY_PACKAGE = "buyPackage";
  ClientConstQuestCondition.QUESTTYPE_WIN_FAME_FIGHT = "winFameFight";
  ClientConstQuestCondition.QUESTTYPE_SPEND_RUBIES = "spendC2";
  ClientConstQuestCondition.QUESTTYPE_WRITE_ALLIANCECHAT = "writeInAllianceChat";
  ClientConstQuestCondition.QUESTTYPE_SEND_RESOURCES_PLAYER = "resourceToPlayer";
  ClientConstQuestCondition.QUESTTYPE_SABOTAGE = "sabotageDamage";
  ClientConstQuestCondition.QUESTTYPE_USE_FORGE_ALLIANCE = "useAllianceForge";
  ClientConstQuestCondition.QUESTTYPE_USE_FORGE = "craftEquipment";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_CITIZEN = "collectFromCitizen";
  ClientConstQuestCondition.QUESTTYPE_RECRUIT_UNITS = "recruitUnits";
  ClientConstQuestCondition.QUESTTYPE_PRODUCE_TOOLS = "produceTools";
  ClientConstQuestCondition.QUESTTYPE_REQUEST_ALLIANCE_HELP = "requestAllianceHelp";
  ClientConstQuestCondition.QUESTTYPE_COMPLETE_MERCENARY_MISSION = "completeMercenaryMission";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_FROM_CARRIAGE = "collectFromCarriage";
  ClientConstQuestCondition.QUESTTYPE_CREATE_EMBLEM = "createEmblem";
  ClientConstQuestCondition.QUESTTYPE_ASSIGN_CONSTRUCTIONITEM = "assignConstructionItem";
  ClientConstQuestCondition.QUESTTYPE_GAIN_FACTION_POINTS = "gainFactionPoints";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_ALIENS_WITH_MIN_FAME = "defeatAliensWithMinFame";
  ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_POINT_EVENT = "lootResourcesPointEvent";
  ClientConstQuestCondition.QUESTTYPE_CONNECT_TO_FACEBOOK = "connectToFacebook";
  ClientConstQuestCondition.QUESTTYPE_RECRUIT_ATTACK_UNITS = "recruitedAttackUnitsWithMinStrength";
  ClientConstQuestCondition.QUESTTYPE_RECRUIT_DEFENDER_UNITS = "recruitedDefenderUnitsWithMinStrength";
  ClientConstQuestCondition.QUESTTYPE_LOOT_RESOURCES_PVP = "lootResourcesPvP";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS_ON_MAP = "defeatedFactionTowersOnMap";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_FACTION_TOWERS = "defeatedFactionTowers";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_KHAN_CAMPS = "defeatKhanCamps";
  ClientConstQuestCondition.QUESTTYPE_DEFEND_KHAN_ATTACKS = "defendKhanAttacks";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_RAGE = "collectRage";
  ClientConstQuestCondition.QUESTTYPE_SPEND_KHAN_MEDALS = "spendKhanMedals";
  ClientConstQuestCondition.QUESTTYPE_COLLECT_PEARL_RELICS = "collectPearlRelics";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_NOMAD_CAMPS = "defeatNomads";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_SAMURAI_CAMPS = "defeatSamuraiCamps";
  ClientConstQuestCondition.QUESTTYPE_GAIN_LTPE_POINTS = "gainLTPEPoints";
  ClientConstQuestCondition.QUESTTYPE_JOIN_TEMP_SERVER = "joinTempServer";
  ClientConstQuestCondition.QUESTTYPE_VISIT_SHOP = "visitShop";
  ClientConstQuestCondition.QUESTTYPE_BUY_MIN_AMOUNT_OF_RUBIES = "buyMinAmountOfRubies";
  ClientConstQuestCondition.QUESTTYPE_OPEN_SAMURAI_EVENT_DIALOG = "clientOnly_openSamuraiEventDialog";
  ClientConstQuestCondition.QUESTTYPE_OPTIN_NEWSLETTER = "optinNewsletter";
  ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_INN = "visitGeneralsInn";
  ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON = "assignGeneralToBaron";
  ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER = "assignGeneralToCommander";
  ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING = "defendWolfKing";
  ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING = "defeatWolfKing";
  ClientConstQuestCondition.QUESTTYPE_GACHA_DRAW = "performGacha";
  ClientConstQuestCondition.QUESTTYPE_VISIT_GENERALS_OVERVIEW = "visitGeneralsOverview";
  return ClientConstQuestCondition;
}();
exports.ClientConstQuestCondition = n;