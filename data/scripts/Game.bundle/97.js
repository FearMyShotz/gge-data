Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = function () {
  function CastleEffectEnum(e, t = n.GenericTextIds.VALUE_NOMINAL_ADD, i = false) {
    this._isGlobal = false;
    this._name = e;
    this._valueTextID = t;
    this._isGlobal = i;
    this.store();
  }
  CastleEffectEnum.prototype.store = function () {
    CastleEffectEnum.allValues ||= {};
    CastleEffectEnum.allValues[this.name] = this;
  };
  Object.defineProperty(CastleEffectEnum.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectEnum.prototype, "valueTextID", {
    get: function () {
      return this._valueTextID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEffectEnum.prototype, "isGlobal", {
    get: function () {
      return this._isGlobal;
    },
    enumerable: true,
    configurable: true
  });
  CastleEffectEnum.__initialize_static_members = function () {
    CastleEffectEnum.WOODPRODUCTION = new CastleEffectEnum("Woodproduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.STONEPRODUCTION = new CastleEffectEnum("Stoneproduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.FOODPRODUCTION = new CastleEffectEnum("Foodproduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.COALPRODUCTION = new CastleEffectEnum("Coalproduction");
    CastleEffectEnum.OILPRODUCTION = new CastleEffectEnum("Oilproduction");
    CastleEffectEnum.GLASSPRODUCTION = new CastleEffectEnum("Glassproduction");
    CastleEffectEnum.IRONPRODUCTION = new CastleEffectEnum("Ironproduction");
    CastleEffectEnum.WOODBOOST = new CastleEffectEnum("Woodboost");
    CastleEffectEnum.STONEBOOST = new CastleEffectEnum("Stoneboost");
    CastleEffectEnum.FOODBOOST = new CastleEffectEnum("Foodboost");
    CastleEffectEnum.ALLIFOODPRODUCTIONBOOST = new CastleEffectEnum("alliFoodProductionBonus");
    CastleEffectEnum.COALBOOST = new CastleEffectEnum("Coalboost");
    CastleEffectEnum.OILBOOST = new CastleEffectEnum("Oilboost");
    CastleEffectEnum.GLASSBOOST = new CastleEffectEnum("Glassboost");
    CastleEffectEnum.IRONBOOST = new CastleEffectEnum("Ironboost");
    CastleEffectEnum.FOODREDUCTION = new CastleEffectEnum("Foodreduction");
    CastleEffectEnum.HIDEOUT = new CastleEffectEnum("Hideout");
    CastleEffectEnum.DECOPOINTS = new CastleEffectEnum("decoPoints", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.POPULATION = new CastleEffectEnum("Population");
    CastleEffectEnum.WOODSTORAGE = new CastleEffectEnum("woodStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.STONESTORAGE = new CastleEffectEnum("stoneStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.FOODSTORAGE = new CastleEffectEnum("foodStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.COALSTORAGE = new CastleEffectEnum("coalStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.OILSTORAGE = new CastleEffectEnum("oilStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.GLASSSTORAGE = new CastleEffectEnum("glassStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.IRONSTORAGE = new CastleEffectEnum("ironStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HONEYSTORAGE = new CastleEffectEnum("honeyStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.MEADSTORAGE = new CastleEffectEnum("meadStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.BEEFSTORAGE = new CastleEffectEnum("beefStorage", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.MARKETCARRIAGES = new CastleEffectEnum("marketCarriages", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.SIGHTRADIUSBONUS = new CastleEffectEnum("sightRadiusBonus");
    CastleEffectEnum.COMMANDERSIZE = new CastleEffectEnum("commanderSize");
    CastleEffectEnum.GUARDSIZE = new CastleEffectEnum("guardSize");
    CastleEffectEnum.SPYSIZE = new CastleEffectEnum("spySize");
    CastleEffectEnum.BUILDINGCOSTREDUCTION = new CastleEffectEnum("buildingCostReduction");
    CastleEffectEnum.SHOWNTRAVELBOOST = new CastleEffectEnum("shownTravelBonus");
    CastleEffectEnum.ISLANDALLIANCEPOINTS = new CastleEffectEnum("islandAlliancePoints");
    CastleEffectEnum.BUILDSPEEDBOOST = new CastleEffectEnum("buildSpeedBoost");
    CastleEffectEnum.SURVIVEBOOST = new CastleEffectEnum("surviveBoost", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.HOSPITALCAPACITY = new CastleEffectEnum("hospitalCapacity", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HOSPITALSLOTS = new CastleEffectEnum("hospitalSlots");
    CastleEffectEnum.RECRUITCOSTREDUCTION = new CastleEffectEnum("recruitCostReduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.STACKSIZE = new CastleEffectEnum("stackSize", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.HEALSPEED = new CastleEffectEnum("healSpeed", n.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.RECRUITSPEEDBOOST = new CastleEffectEnum("recruitSpeedBoost", n.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.UNITWALLCOUNT = new CastleEffectEnum("unitWallCount", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDFOODPRODUCTION = new CastleEffectEnum("unboostedFoodProduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDWOODPRODUCTION = new CastleEffectEnum("unboostedWoodProduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.UNBOOSTEDSTONEPRODUCTION = new CastleEffectEnum("unboostedStoneProduction", n.GenericTextIds.VALUE_NOMINAL_ADD);
    CastleEffectEnum.ESPIONAGESPEEDBOOST = new CastleEffectEnum("espionageTravelBoost", n.GenericTextIds.VALUE_PERCENTAGE_ADD, true);
    CastleEffectEnum.REDUCEDEFENSIVETOOLSCOSTS = new CastleEffectEnum("defensiveToolsCostsReduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEDEFENSIVETOOLSTIME = new CastleEffectEnum("defensiveToolsSpeedBoost", n.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.REDUCEFEASTCOSTS = new CastleEffectEnum("feastCostsReduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEOFFENSIVETOOLSCOSTS = new CastleEffectEnum("offensiveToolsCostsReduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.REDUCEOFFENSIVETOOLSTIME = new CastleEffectEnum("offensiveToolsSpeedBoost", n.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.REDUCERESEARCHRESOURCECOSTS = new CastleEffectEnum("ReduceResearchResourceCosts", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, true);
    CastleEffectEnum.XPBOOSTBUILDBUILDINGS = new CastleEffectEnum("XPBoostBuildBuildings", n.GenericTextIds.VALUE_PERCENTAGE_ADD);
    CastleEffectEnum.DISTRICTSLOTS = new CastleEffectEnum("districtSlots");
    CastleEffectEnum.MEADREDUCTION = new CastleEffectEnum("Meadreduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
    CastleEffectEnum.BEEFREDUCTION = new CastleEffectEnum("Beefreduction", n.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT);
  };
  return CastleEffectEnum;
}();
exports.CastleEffectEnum = o;
o.__initialize_static_members();