Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DetailedCastleVO() {
    this.kingdomID = 0;
    this.areaID = 0;
    this.resources = new Map();
    this.storage = new Map();
    this.production = new Map();
    this.maxStorage = 0;
    this.minStorage = 0;
    this.lawAndOrder = 0;
    this.population = 0;
    this.defence = 0;
    this.neutralDeco = 0;
    this.sickness = 0;
    this.riot = 0;
    this._numGuards = 0;
    this.numTotalMarketCarriages = 0;
    this.hasBarracks = false;
    this.hasSiegeWorkshop = false;
    this.hasDefenseWorkshop = false;
    this.hasHospital = false;
    this._resourceDeltaFoodConsumption = 0;
    this._foodConsumptionReduction = 0;
    this._resourceDeltaMeadConsumption = 0;
    this._resourceDeltaBeefConsumption = 0;
    this._meadConsumptionReduction = 0;
    this._beefConsumptionReduction = 0;
  }
  DetailedCastleVO.prototype.parseData = function (e) {
    this.unitInventory = new c.UnitInventoryDictionary();
    this.unitInventory.fillFromWodAmountArray(e.AC);
    this.strongholdUnitInventory = new l.StrongholdUnitInventory();
    this.strongholdUnitInventory.fillFromWodAmountArray(e.SHI);
    this.areaID = p.int(e.AID);
    this.defence = p.int(e.D);
    this.hasBarracks = Boolean(e.B);
    this.hasSiegeWorkshop = Boolean(e.WS);
    this.hasDefenseWorkshop = Boolean(e.DW);
    this.hasHospital = Boolean(e.H);
    for (var t = 0, i = o.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        this.resources.set(n, e[n.serverKey]);
      }
    }
    if (e.gpa) {
      this.parseGpaData(e.gpa);
    } else {
      this.storage = new Map();
      this.production = new Map();
      this.lawAndOrder = this.population = this._numGuards = -1;
    }
    this.numTotalMarketCarriages = p.int(e.MC);
  };
  DetailedCastleVO.prototype.parseGpaData = function (e) {
    this.maxStorage = 0;
    this.minStorage = 0;
    for (var t = 0, i = o.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var s = "D" + n.serverKey;
        var r = "MR" + n.serverKey;
        this.production.set(n, e.hasOwnProperty(s) ? e[s] / 10 : 0);
        this.storage.set(n, e.hasOwnProperty(r) ? e[r] : 0);
        if (n != a.CollectableEnum.AQUAMARINE) {
          this.maxStorage = p.int(Math.max(this.maxStorage, this.storage.get(n)));
        }
        if (this.minStorage <= 0) {
          this.minStorage = this.maxStorage;
        }
        if (this.storage.get(n) > 0) {
          this.minStorage = p.int(Math.min(this.minStorage, this.storage.get(n)));
        }
      }
    }
    this.lawAndOrder = p.int(d.LawAndOrderConst.calculateLawAndOrder(e.NDP, e.S, e.R));
    this.neutralDeco = p.int(e.NDP);
    this.sickness = p.int(e.S);
    this.riot = p.int(e.R);
    this.population = p.int(e.P);
    this._numGuards = p.int(e.GRD);
    this._resourceDeltaFoodConsumption = e.DFC / 10;
    this._foodConsumptionReduction = p.int(e.FCR);
    this._resourceDeltaMeadConsumption = e.DMEADC / 10;
    this._resourceDeltaBeefConsumption = e.DBEEFC / 10;
    this._meadConsumptionReduction = p.int(e.MEADCR);
    this._beefConsumptionReduction = p.int(e.BEEFCR);
  };
  DetailedCastleVO.prototype.getIsMyMainCastle = function (e) {
    return u.CastleModel.userData.castleList.getMainCastleByKingdomID(e).objectId == this.areaID;
  };
  Object.defineProperty(DetailedCastleVO.prototype, "maxResourceStorageAmount", {
    get: function () {
      return this.maxStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "minResourceStorageAmount", {
    get: function () {
      return this.minStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "numGuards", {
    get: function () {
      var e = u.CastleModel.researchData.getResearchEffectValue(h.EffectTypeEnum.EFFECT_TYPE_AMOUNT_GUARDS_BOOST).strength;
      return Math.round(this._numGuards * (1 + e / 100));
    },
    enumerable: true,
    configurable: true
  });
  DetailedCastleVO.prototype.getResourcesAsCollectableList = function () {
    var e = new r.CollectableList();
    for (var t = 0, i = o.ClientConstCollectable.GROUP_LIST_RESOURCES; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        e.addItem(s.CollectableHelper.createVO(n, this.resources.get(n)));
      }
    }
    return e;
  };
  DetailedCastleVO.prototype.getMaxStorageSpace = function (e) {
    return p.int(this.storage.get(e));
  };
  DetailedCastleVO.prototype.getResource = function (e) {
    return p.int(this.resources.get(e));
  };
  DetailedCastleVO.prototype.setResource = function (e, t) {
    this.resources.set(e, t);
  };
  DetailedCastleVO.prototype.getResourceProduction = function (e) {
    return this.production.get(e);
  };
  DetailedCastleVO.prototype.createStorageList = function () {
    var e = new r.CollectableList();
    if (this.storage != null) {
      for (var t = 0, i = Array.from(this.storage.keys()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          e.addItem(s.CollectableHelper.createVO(n, this.storage.get(n)));
        }
      }
    }
    return e;
  };
  DetailedCastleVO.prototype.getEffectiveResourceProduction = function (e) {
    if (e == a.CollectableEnum.FOOD) {
      return this.getResourceProduction(a.CollectableEnum.FOOD) - this.foodConsumption;
    } else if (e == a.CollectableEnum.MEAD) {
      return this.getResourceProduction(a.CollectableEnum.MEAD) - this.meadConsumption;
    } else if (e == a.CollectableEnum.BEEF) {
      return this.getResourceProduction(a.CollectableEnum.BEEF) - this.beefConsumption;
    } else {
      return this.getResourceProduction(e);
    }
  };
  Object.defineProperty(DetailedCastleVO.prototype, "foodConsumption", {
    get: function () {
      return this._resourceDeltaFoodConsumption * this._foodConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "meadConsumption", {
    get: function () {
      return this._resourceDeltaMeadConsumption * this._meadConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DetailedCastleVO.prototype, "beefConsumption", {
    get: function () {
      return this._resourceDeltaBeefConsumption * this._beefConsumptionReduction / 100;
    },
    enumerable: true,
    configurable: true
  });
  return DetailedCastleVO;
}();
exports.DetailedCastleVO = n;
var o = require("./86.js");
var a = require("./12.js");
var s = require("./45.js");
var r = require("./48.js");
var l = require("./553.js");
var c = require("./156.js");
var u = require("./4.js");
var d = require("./5.js");
var p = require("./6.js");
var h = require("./33.js");