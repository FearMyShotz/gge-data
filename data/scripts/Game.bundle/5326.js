Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = function (e) {
  function PrimeSaleUpgradeComponent(t, i) {
    var n = this;
    n._upgradeChain = [];
    n._preUpgradeChain = [];
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i) || this).checkForDuplicateEntries();
    n.fillUpgradeChain();
    return n;
  }
  n.__extends(PrimeSaleUpgradeComponent, e);
  PrimeSaleUpgradeComponent.prototype.fillUpgradeChain = function () {
    if (this._buildingVOs != null) {
      for (var e = 0, t = this._buildingVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this._preUpgradeChain.push(a.CastleModel.wodData.getHighestUpgradeForBuilding(i.wodId));
        }
      }
    }
    if (this._preUpgradeChain != null) {
      for (var n = 0, o = this._preUpgradeChain; n < o.length; n++) {
        var s = o[n];
        if (s !== undefined) {
          this._upgradeChain.push(s);
          for (var r = s.getDowngradeVO(); r;) {
            this._upgradeChain.push(r);
            if (r.costC2 > 0) {
              this.replaceBuildingFromActiveKingdom(r);
              r = r.getDowngradeVO();
            } else {
              r = null;
            }
          }
        }
      }
    }
    if (this._preUpgradeChain != null) {
      for (var l = 0, c = this._preUpgradeChain; l < c.length; l++) {
        var u = c[l];
        if (u !== undefined) {
          this._upgradeChain.push(u);
          for (var d = u.getUpgradeVO(); d;) {
            this._upgradeChain.push(d);
            if (d.costC2 > 0) {
              this.replaceBuildingFromActiveKingdom(d);
              d = d.getUpgradeVO();
            } else {
              d = null;
            }
          }
        }
      }
    }
  };
  PrimeSaleUpgradeComponent.prototype.getFinalPriceC2ForNextUpgrade = function (e) {
    var t = (100 - this.discount) / 100;
    if (a.CastleModel.boostData.premiumAccountVO.isActive) {
      t = Math.max(t, 1 - a.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    return Math.max(1, Math.ceil(e.basicCostC2 * t));
  };
  Object.defineProperty(PrimeSaleUpgradeComponent.prototype, "upgradeChain", {
    get: function () {
      return this._upgradeChain;
    },
    enumerable: true,
    configurable: true
  });
  PrimeSaleUpgradeComponent.prototype.upgradeChainContainsWodID = function (e) {
    if (this._upgradeChain != null) {
      for (var t = 0, i = this._upgradeChain; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.wodId == e) {
          return true;
        }
      }
    }
    return false;
  };
  PrimeSaleUpgradeComponent.prototype.getFinalPriceForShopVO = function (e) {
    var t = (100 - this.discount) / 100;
    if (a.CastleModel.boostData.premiumAccountVO.isActive) {
      t = Math.max(t, 1 - a.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    return Math.max(1, Math.ceil(e.basicCostC2 * t));
  };
  PrimeSaleUpgradeComponent.prototype.replaceBuildingFromActiveKingdom = function (e) {
    for (var t = 0; t < this._upgradeChain.length;) {
      if (this._upgradeChain[t].isAvailableByKingdomId(this.activeKingdom()) && o.getQualifiedClassName(this._upgradeChain[t]) == o.getQualifiedClassName(e)) {
        this._upgradeChain[t] = e;
        return true;
      }
      t++;
    }
    return false;
  };
  return PrimeSaleUpgradeComponent;
}(require("./1147.js").PrimeSaleComponent);
exports.PrimeSaleUpgradeComponent = s;