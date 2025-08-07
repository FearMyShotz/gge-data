Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = function (e) {
  function ConstructionExpertScrollItem(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_title = ConstructionExpertScrollItem.textFieldManager.registerTextField(i._disp.txt_title, new r.LocalizedTextVO(""));
    i.itxt_level = ConstructionExpertScrollItem.textFieldManager.registerTextField(i._disp.txt_level, new r.LocalizedTextVO(""));
    i.itxt_value = ConstructionExpertScrollItem.textFieldManager.registerTextField(i._disp.mc_info.txt_value, new l.TextVO(""));
    return i;
  }
  n.__extends(ConstructionExpertScrollItem, e);
  ConstructionExpertScrollItem.prototype.customFillItem = function () {
    var e = this.scrollItemVO;
    this.itxt_title.textContentVO.textId = e.titleID;
    this.itxt_level.textContentVO.textId = "building_level";
    this.itxt_level.textContentVO.textReplacements = [e.buildingVO.level];
    var t = e.items[0];
    this._disp.mc_info.toolTipText = t.tooltipText;
    this._disp.mc_info.mc_icon.gotoAndStop(ConstructionExpertScrollItem.iconClassToTimelineFrame(t.iconClass));
    this.itxt_value.textContentVO = t.textVO;
    u.WodPicHelper.addWodPic(e.buildingVO, this._disp.mc_buildingIcon, 50, 50);
  };
  ConstructionExpertScrollItem.iconClassToTimelineFrame = function (e) {
    switch (new e().constructor) {
      case Library.CastleInterfaceElements_Icons.Icon_FoodConsumption:
        return ConstructionExpertScrollItem.FOOD_REDUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_Wood:
        return ConstructionExpertScrollItem.WOOD;
      case Library.CastleInterfaceElements_Icons.Icon_Food:
        return ConstructionExpertScrollItem.FOOD;
      case Library.CastleInterfaceElements_Icons.Icon_Stone:
        return ConstructionExpertScrollItem.STONE;
      case Library.CastleInterfaceElements_Icons.Icon_Coal:
        return ConstructionExpertScrollItem.COAL;
      case Library.CastleInterfaceElements_Icons.Icon_Glass:
        return ConstructionExpertScrollItem.GLASS;
      case Library.CastleInterfaceElements_Icons.Icon_Oliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL;
      case Library.CastleInterfaceElements_Icons.Icon_Iron:
        return ConstructionExpertScrollItem.IRON;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Wood:
        return ConstructionExpertScrollItem.WOOD_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Food:
        return ConstructionExpertScrollItem.FOOD_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Stone:
        return ConstructionExpertScrollItem.STONE_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Coal:
        return ConstructionExpertScrollItem.COAL_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Glass:
        return ConstructionExpertScrollItem.GLASS_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Oliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_Boost_Iron:
        return ConstructionExpertScrollItem.IRON_PLUS;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood:
        return ConstructionExpertScrollItem.WOOD_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood:
        return ConstructionExpertScrollItem.FOOD_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourStone:
        return ConstructionExpertScrollItem.STONE_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal:
        return ConstructionExpertScrollItem.COAL_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourGlass:
        return ConstructionExpertScrollItem.GLASS_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil:
        return ConstructionExpertScrollItem.OLIVEOIL_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_BoostPerHourIron:
        return ConstructionExpertScrollItem.IRON_PRODUCTION;
      case Library.CastleInterfaceElements_Icons.Icon_Storage:
        return ConstructionExpertScrollItem.STORAGE;
      case Library.CastleInterfaceElements_Icons.Icon_SaveStorage:
        return ConstructionExpertScrollItem.SAFE_STORAGE;
      case Library.CastleInterfaceElements.Icon_Population:
        return ConstructionExpertScrollItem.POPULATION;
      case Library.CastleInterfaceElements.Icon_Morality:
        return ConstructionExpertScrollItem.MORALITY;
      case Library.CastleInterfaceElements_Icons.Icon_DefendingTroops:
      case Library.CastleInterfaceElements.Icon_UnitsNoshadow:
      case Library.CastleInterfaceElements_Icons.Icon_Units:
        return ConstructionExpertScrollItem.UNIT_CAPACITY;
      case Library.CastleInterfaceElements.Icon_Research:
        return ConstructionExpertScrollItem.RESEARCH_BOOST;
      case Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big:
        return ConstructionExpertScrollItem.DECOPOINTS;
      case Library.CastleInterfaceElements_Icons.Icon_MarketCarrige:
        return ConstructionExpertScrollItem.MARKET_CARRIAGES;
      case Library.CastleInterfaceElements_Icons.Icon_Knights:
        return ConstructionExpertScrollItem.GENERAL;
      case Library.CastleInterfaceElements_Icons.Icon_Baron:
        return ConstructionExpertScrollItem.BARON;
      case Library.CastleInterfaceElements.Icon_Spy:
        return ConstructionExpertScrollItem.SPY;
      case Library.CastleInterfaceElements_Icons.Icon_Guards:
        return ConstructionExpertScrollItem.GUARD;
      case Library.CastleInterfaceElements_Icons.Icon_google:
        return ConstructionExpertScrollItem.SIGHT;
      case Library.CastleInterfaceElements.Icon_Productivity:
        return ConstructionExpertScrollItem.PRODUCTIVITY;
      case Library.CastleInterfaceElements_Icons.Icon_RecruitmentBoost:
        return ConstructionExpertScrollItem.UNIT_PRODUCTIVITY;
      case Library.CastleInterfaceElements_Icons.Icon_Defence:
        return ConstructionExpertScrollItem.WALL;
      case Library.CastleInterfaceElements_Icons.Icon_Btn_Moat:
        return ConstructionExpertScrollItem.MOAT;
      case Library.CastleInterfaceElements_Icons.Icon_UnitPercent:
        return ConstructionExpertScrollItem.GATE;
      case Library.CastleInterfaceElements_Icons.Icon_BuildNoShadow:
        return ConstructionExpertScrollItem.BUILD_DURATION;
      case Library.CastleInterfaceElements.Icon_Horse_Boost:
        return ConstructionExpertScrollItem.HORSE;
      case Library.CastleInterfaceElements_Icons.Icon_FireProtection:
        return ConstructionExpertScrollItem.BARREL_O_WATER;
      case Library.CastleInterfaceElements_Icons.Icon_Coins_Cluster:
        return ConstructionExpertScrollItem.COINS;
      case Library.CastleInterfaceElements.Icon_C2_Cluster:
        return ConstructionExpertScrollItem.RUBIES;
      case Library.CastleInterfaceElements_Icons.Icon_BuildingCostReduction:
        return ConstructionExpertScrollItem.ARCHITECT;
      case Library.CastleInterfaceElements_Icons.Icon_SurviveBoost:
        return ConstructionExpertScrollItem.HOSPITAL;
      case Library.CastleInterfaceElements_Icons.Icon_Crane:
        return ConstructionExpertScrollItem.CRANE;
      case Library.CastleInterfaceElements.Icon_islandAlliancePoints:
        return ConstructionExpertScrollItem.AQUAMARINE;
      default:
        return ConstructionExpertScrollItem.MORALITY;
    }
  };
  Object.defineProperty(ConstructionExpertScrollItem, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionExpertScrollItem.__initialize_static_members = function () {
    ConstructionExpertScrollItem.MOAT = 1;
    ConstructionExpertScrollItem.WALL = 2;
    ConstructionExpertScrollItem.GATE = 3;
    ConstructionExpertScrollItem.BUILD_DURATION = 4;
    ConstructionExpertScrollItem.SAFE_STORAGE = 5;
    ConstructionExpertScrollItem.POPULATION = 6;
    ConstructionExpertScrollItem.DECOPOINTS = 7;
    ConstructionExpertScrollItem.MARKET_CARRIAGES = 8;
    ConstructionExpertScrollItem.STORAGE = 9;
    ConstructionExpertScrollItem.SPY = 10;
    ConstructionExpertScrollItem.BARON = 11;
    ConstructionExpertScrollItem.GENERAL = 12;
    ConstructionExpertScrollItem.GUARD = 13;
    ConstructionExpertScrollItem.WOOD = 14;
    ConstructionExpertScrollItem.WOOD_PRODUCTION = 15;
    ConstructionExpertScrollItem.WOOD_PLUS = 16;
    ConstructionExpertScrollItem.STONE = 17;
    ConstructionExpertScrollItem.STONE_PRODUCTION = 18;
    ConstructionExpertScrollItem.STONE_PLUS = 19;
    ConstructionExpertScrollItem.FOOD = 20;
    ConstructionExpertScrollItem.FOOD_PRODUCTION = 21;
    ConstructionExpertScrollItem.FOOD_PLUS = 22;
    ConstructionExpertScrollItem.FOOD_REDUCTION = 23;
    ConstructionExpertScrollItem.PRODUCTIVITY = 24;
    ConstructionExpertScrollItem.HORSE = 25;
    ConstructionExpertScrollItem.SIGHT = 26;
    ConstructionExpertScrollItem.UNIT_CAPACITY = 27;
    ConstructionExpertScrollItem.UNIT_PRODUCTIVITY = 28;
    ConstructionExpertScrollItem.RESEARCH_BOOST = 29;
    ConstructionExpertScrollItem.MORALITY = 30;
    ConstructionExpertScrollItem.BARREL_O_WATER = 31;
    ConstructionExpertScrollItem.COAL = 32;
    ConstructionExpertScrollItem.COAL_PRODUCTION = 33;
    ConstructionExpertScrollItem.COAL_PLUS = 34;
    ConstructionExpertScrollItem.OLIVEOIL = 35;
    ConstructionExpertScrollItem.OLIVEOIL_PRODUCTION = 36;
    ConstructionExpertScrollItem.OLIVEOIL_PLUS = 37;
    ConstructionExpertScrollItem.GLASS = 38;
    ConstructionExpertScrollItem.GLASS_PRODUCTION = 39;
    ConstructionExpertScrollItem.GLASS_PLUS = 40;
    ConstructionExpertScrollItem.IRON = 41;
    ConstructionExpertScrollItem.IRON_PRODUCTION = 42;
    ConstructionExpertScrollItem.IRON_PLUS = 43;
    ConstructionExpertScrollItem.ARCHITECT = 44;
    ConstructionExpertScrollItem.CRANE = 45;
    ConstructionExpertScrollItem.HOSPITAL = 46;
    ConstructionExpertScrollItem.RUBIES = 47;
    ConstructionExpertScrollItem.COINS = 48;
    ConstructionExpertScrollItem.AQUAMARINE = 49;
  };
  return ConstructionExpertScrollItem;
}(a.ScrollItem);
exports.ConstructionExpertScrollItem = c;
var u = require("./63.js");
s.classImplementsInterfaces(c, "MovieClip");
c.__initialize_static_members();