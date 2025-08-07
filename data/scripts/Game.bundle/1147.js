Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./116.js");
var a = require("./6.js");
var s = require("./153.js");
var r = require("./4.js");
var l = o.getLogger("createjs.ts Extensions");
var c = function () {
  function PrimeSaleComponent(e, t) {
    this._discount = 0;
    this._wodIDs = e;
    this._discount = t;
    this._buildingVOs = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._buildingVOs.push(r.CastleModel.wodData.createVObyWOD(o, u.CastleWodData.TYPE_BUILDING));
        }
      }
    }
  }
  Object.defineProperty(PrimeSaleComponent.prototype, "finalePriceC2", {
    get: function () {
      var e = (100 - this.discount) / 100;
      if (r.CastleModel.boostData.premiumAccountVO.isActive) {
        e = Math.max(e, 1 - r.CastleModel.boostData.premiumAccountVO.factor_C2);
      }
      return Math.max(1, Math.ceil(this.buildingVOForKingdom.costC2 * e));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "wodID", {
    get: function () {
      return this.wodIDForKingdom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "buildingVO", {
    get: function () {
      return this.buildingVOForKingdom;
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleComponent.prototype.getFinalPriceForShopVO = function (e) {
    return this.finalePriceC2;
  };
  PrimeSaleComponent.prototype.isAvailableInKingdom = function () {
    return this.buildingVOForKingdom != null;
  };
  Object.defineProperty(PrimeSaleComponent.prototype, "wodIDForKingdom", {
    get: function () {
      var e = this.buildingVOForKingdom;
      if (e) {
        return e.wodId;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrimeSaleComponent.prototype, "buildingVOForKingdom", {
    get: function () {
      var e;
      if (this._buildingVOs != null) {
        for (var t = 0, i = this._buildingVOs; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n && n.isAvailableByKingdomId(this.activeKingdom()) && (!e || n.level < e.level)) {
            e = n;
          }
        }
      }
      return e || (this._buildingVOs.length == 1 ? this._buildingVOs[0] : null);
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleComponent.prototype.activeKingdom = function () {
    var e = a.int(r.CastleModel.kingdomData.activeKingdomID);
    if (e < 0) {
      return a.int(n.WorldClassic.KINGDOM_ID);
    } else {
      return e;
    }
  };
  PrimeSaleComponent.prototype.checkForDuplicateEntries = function () {
    var e = [];
    for (var t = a.int(s.KingdomEnum.UNDERWORLD.id); t >= 0;) {
      e.push(0);
      t--;
    }
    if (this._buildingVOs != null) {
      for (var i = 0, n = this._buildingVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          for (var r = 0, c = o.onlyInKingdomIds; r < c.length; r++) {
            var u = c[r];
            if (u !== undefined) {
              if (e[u] == 0) {
                e[u] = 1;
              } else {
                l.debug("ERROR!!! Private Offer PrimeSale-Component has multiple WodID's from the same Kingdom!");
              }
            }
          }
        }
      }
    }
  };
  PrimeSaleComponent.prototype.highestLevelOfBuilding = function () {
    return r.CastleModel.wodData.getHighestUpgradeForBuilding(this.buildingVO.wodId);
  };
  return PrimeSaleComponent;
}();
exports.PrimeSaleComponent = c;
var u = require("./56.js");