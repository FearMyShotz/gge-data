Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./55.js");
var d = require("./4.js");
var p = require("./33.js");
var h = require("./87.js");
var g = require("./65.js");
var C = require("./71.js");
var _ = function (e) {
  function AreaDataCommonInfo() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._metropolBoost = 0;
    t._resourceDeltaFoodConsumption = 0;
    t._resourceDeltaMeadConsumption = 0;
    t._resourceDeltaBeefConsumption = 0;
    t._foodConsumptionReduction = 0;
    t._meadConsumptionReduction = 0;
    t._beefConsumptionReduction = 0;
    t._population = 0;
    t._populationPenalty = 0;
    t._maxPopulation = 0;
    t._buildSpeedBoost = 0;
    t._decoPoints = 0;
    t._sickness = 0;
    t._riot = 0;
    t._protection = 0;
    t._guardAmount = 0;
    t._builderDiscount = 0;
    t._isCastleBurning = false;
    t._royalCapitalBuffActive = false;
    t._maxUnitStorage = -1;
    t._maxAuxiliariesStorage = -1;
    return t;
  }
  n.__extends(AreaDataCommonInfo, e);
  AreaDataCommonInfo.prototype.parseGAB = function (e) {
    this._builderDiscount = e.B;
  };
  AreaDataCommonInfo.prototype.parseGPA = function (e) {
    this._resourceDeltaFoodConsumption = e.DFC / 10;
    this._resourceDeltaMeadConsumption = e.DMEADC / 10;
    this._resourceDeltaBeefConsumption = e.DBEEFC / 10;
    this._foodConsumptionReduction = c.int(e.FCR);
    this._meadConsumptionReduction = c.int(e.MEADCR);
    this._beefConsumptionReduction = c.int(e.BEEFCR);
    this._population = c.int(e.P);
    this._decoPoints = c.int(e.NDP);
    this._sickness = c.int(e.S);
    this._riot = c.int(e.R);
    this._metropolBoost = e.MP ? e.MP : 0;
    this._buildSpeedBoost = c.int(e.BDB);
    this._guardAmount = c.int(e.GRD);
    this._royalCapitalBuffActive = !!e.RCP && e.RCP != 0;
    this._maxUnitStorage = c.int(e.US);
    this._maxAuxiliariesStorage = c.int(e.AUS);
    this.updateInfos();
    f.CastleComponent.controller.dispatchEvent(new C.AreaDataEvent(C.AreaDataEvent.ON_INFO_VALUES_CHANGED));
  };
  AreaDataCommonInfo.prototype.updateInfos = function () {
    this._maxPopulation = 0;
    this._protection = 0;
    this._populationPenalty = 0;
    this._isCastleBurning = false;
    this._buildingDistrictInfo = new Map();
    if (this.areaData.isoData) {
      for (var e = 0, t = this.areaData.isoData.objects.getCompleteObjectsList(); e < t.length; e++) {
        var i = t[e];
        var n = o.castAs(i, "AEffectBuildingVO");
        if (n && n.areValuesActive) {
          if (u.ClientConstUtils.isObjectClassOf(n, [b.DwellingBuildingVO, I.PdwellingBuildingVO])) {
            this._populationPenalty += n.decoPoints;
          }
          if (u.ClientConstUtils.isObjectClassOf(n, [y.ADefenceBuildingVO, D.KeepBuildingVO])) {
            this._protection += n.decoPoints;
          }
          this._maxPopulation += n.population;
        }
        var a = o.castAs(i, "ABasicBuildingVO");
        var r = a && a.hitPoints < 100 && a.buildingState == h.IsoBuildingStateEnum.BUILD_COMPLETED && a.level > 0;
        if (!this._isCastleBurning && a && r) {
          this._isCastleBurning = true;
        }
        if (a && a.isInBuildingDistrict || s.instanceOfClass(a, "ADistrictBuildingVO")) {
          if (!this._buildingDistrictInfo.get(a.districtTypeID)) {
            this._buildingDistrictInfo.set(a.districtTypeID, new m());
          }
          var l = this._buildingDistrictInfo.get(a.districtTypeID);
          if (a.isInBuildingDistrict) {
            l.buildingsInDistrict++;
            l.districtMightPoints += a.mightValue;
            if (a instanceof g.AEffectBuildingVO) {
              l.districtDecoPoints += a.decoPoints;
            }
            if (r) {
              l.districtBurning = true;
            }
          } else if (s.instanceOfClass(a, "ADistrictBuildingVO")) {
            l.districtSize = c.int(a.districtSlots);
            l.districtObjectId = c.int(a.objectId);
          }
        }
      }
      f.CastleComponent.controller.dispatchEvent(new C.AreaDataEvent(C.AreaDataEvent.ON_BURNING_CASTLE_UPDATED));
    }
  };
  AreaDataCommonInfo.prototype.getDecoPointsWithBoni = function () {
    var e = d.CastleModel.researchData.getResearchEffectValue(p.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.areaData.areaInfo.areaType, this.areaData.spaceId).strength;
    var t = this.getPublicOrderSubscriptionBonus();
    var i = this.getPublicOrderBaronBonus();
    return c.int(this.decoPoints + e + t + i);
  };
  AreaDataCommonInfo.prototype.getLawAndOrderFactor = function () {
    if (this.areaData.isSeasonCamp) {
      return 1;
    }
    var e = O.CastleTitleSystemHelper.getSummedEffectValueFromTitles(d.CastleModel.titleData.getAllAssignedUserTitles(), p.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST);
    return l.LawAndOrderConst.calculateLawAndOrderFactorWithEffect(this.getDecoPointsWithBoni(), this.sickness, this.riot, r.EffectConst.boostToModifier(e));
  };
  AreaDataCommonInfo.prototype.getLawAndOrderValue = function () {
    var e = O.CastleTitleSystemHelper.getSummedEffectValueFromTitles(d.CastleModel.titleData.getAllAssignedUserTitles(), p.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BOOST);
    return c.int(l.LawAndOrderConst.calculateLawAndOrderWithTitle(this.getDecoPointsWithBoni(), this.sickness, this.riot, e));
  };
  AreaDataCommonInfo.prototype.getDecoPoints = function () {
    return this._decoPoints - this._protection;
  };
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodIsEmptyTimeInSeconds", {
    get: function () {
      if (this.foodProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(E.CollectableEnum.FOOD).amount / this.foodProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "honeyIsEmptyTimeInSeconds", {
    get: function () {
      if (this.honeyProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(E.CollectableEnum.HONEY).amount / this.honeyProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadIsEmptyTimeInSeconds", {
    get: function () {
      if (this.meadProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(E.CollectableEnum.MEAD).amount / this.meadProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefIsEmptyTimeInSeconds", {
    get: function () {
      if (this.beefProduction >= 0) {
        return -1;
      } else {
        return -this.areaData.storage.getItem(E.CollectableEnum.BEEF).amount / this.beefProduction * 60 * 60;
      }
    },
    enumerable: true,
    configurable: true
  });
  AreaDataCommonInfo.prototype.getPublicOrderSubscriptionBonus = function () {
    return d.CastleModel.subscriptionData.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS);
  };
  AreaDataCommonInfo.prototype.getPublicOrderBaronBonus = function () {
    var e = d.CastleModel.lordData.getBaronByCastleMapObjectVO(this.areaData.areaInfo);
    if (e) {
      return e.getEffectValue(p.EffectTypeEnum.EFFECT_TYPE_PUBLIC_ORDER_BONUS, this.areaData.areaInfo.areaType, this.areaData.spaceId);
    } else {
      return 0;
    }
  };
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.FOOD).productionPerSec - this.foodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.MEAD).productionPerSec - this.meadConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.BEEF).productionPerSec - this.beefConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "honeyProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.HONEY).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.FOOD).productionPerSec - this._metropolBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.MEAD).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefBaseProduction", {
    get: function () {
      return this.areaData.storage.getItem(E.CollectableEnum.BEEF).productionPerSec;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption * this._foodConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadConsumption", {
    get: function () {
      return this._resourceDeltaMeadConsumption * this._meadConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefConsumption", {
    get: function () {
      return this._resourceDeltaBeefConsumption * this._beefConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "buildDurationBoostFactor", {
    get: function () {
      return 100 / this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "resourceDeltaFoodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "foodConsumptionReduction", {
    get: function () {
      return this._foodConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "meadConsumptionReduction", {
    get: function () {
      return this._meadConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "beefConsumptionReduction", {
    get: function () {
      return this._beefConsumptionReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "population", {
    get: function () {
      return this._population;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "populationPenalty", {
    get: function () {
      return this._populationPenalty;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxPopulation", {
    get: function () {
      return this._maxPopulation;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "metropolBoost", {
    get: function () {
      return this._metropolBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "buildSpeedBoost", {
    get: function () {
      return this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "decoPoints", {
    get: function () {
      return this._decoPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "sickness", {
    get: function () {
      return this._sickness;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "riot", {
    get: function () {
      return this._riot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "protection", {
    get: function () {
      return this._protection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "guardAmount", {
    get: function () {
      return this._guardAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "builderDiscount", {
    get: function () {
      return this._builderDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "isCastleBurning", {
    get: function () {
      return this._isCastleBurning;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxUnitStorage", {
    get: function () {
      return this._maxUnitStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "royalCapitalBuffActive", {
    get: function () {
      return this._royalCapitalBuffActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaDataCommonInfo.prototype, "maxAuxiliariesStorage", {
    get: function () {
      return this._maxAuxiliariesStorage;
    },
    enumerable: true,
    configurable: true
  });
  AreaDataCommonInfo.prototype.isDistrictEmpty = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    return !!t && t.buildingsInDistrict == 0;
  };
  AreaDataCommonInfo.prototype.isDistrictFull = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    return !!t && t.buildingsInDistrict >= t.districtSize;
  };
  AreaDataCommonInfo.prototype.hasDistrictOfType = function (e) {
    return !!this._buildingDistrictInfo && !!this._buildingDistrictInfo.get(e);
  };
  AreaDataCommonInfo.prototype.getDistrictObjectId = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    return c.int(t ? t.districtObjectId : 0);
  };
  AreaDataCommonInfo.prototype.isDistrictBuring = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    return !!t && t.districtBurning;
  };
  AreaDataCommonInfo.prototype.getDistrictDecoPoints = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    if (t) {
      return t.districtDecoPoints;
    } else {
      return 0;
    }
  };
  AreaDataCommonInfo.prototype.getDistrictMightPoints = function (e) {
    var t = this._buildingDistrictInfo.get(e);
    if (t) {
      return t.districtMightPoints;
    } else {
      return 0;
    }
  };
  return AreaDataCommonInfo;
}(require("./562.js").AAreaDataComponent);
exports.AreaDataCommonInfo = _;
a.classImplementsInterfaces(_, "ICollectableRendererList", "IAreaDataComponent");
var m = function () {
  return function BuildingDistrictInfoVO() {
    this.buildingsInDistrict = 0;
    this.districtSize = 0;
    this.districtObjectId = 0;
    this.districtBurning = false;
    this.districtMightPoints = 0;
    this.districtDecoPoints = 0;
  };
}();
var f = require("./14.js");
var O = require("./117.js");
var E = require("./12.js");
var y = require("./633.js");
var b = require("./786.js");
var D = require("./399.js");
var I = require("./1019.js");
a.classImplementsInterfaces(_, "ICollectableRendererList", "IAreaDataComponent");