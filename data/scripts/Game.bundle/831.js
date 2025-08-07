Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleSpyArmyInfoVO() {
    this._timeSinceSpying = 0;
    this._getInfoTimestamp = 0;
  }
  CastleSpyArmyInfoVO.prototype.parseArmyInfo = function (e, t, i, n) {
    if (e && e.length != 0) {
      this._itemsLeft = new a.UnitInventoryList();
      this._itemsMiddle = new a.UnitInventoryList();
      this._itemsRight = new a.UnitInventoryList();
      this._itemsKeep = new a.UnitInventoryList();
      this._itemsStronghold = new a.UnitInventoryList();
      this._itemsSupport = new a.UnitInventoryList();
      this._legendSkills = [];
      this._itemsStronghold.isStrongholdInventory = true;
      this._itemsLeft.fillFromWodAmountArray(e.shift());
      this._itemsMiddle.fillFromWodAmountArray(e.shift());
      this._itemsRight.fillFromWodAmountArray(e.shift());
      this._itemsKeep.fillFromWodAmountArray(e.shift());
      this._itemsStronghold.fillFromWodAmountArray(e.shift());
      this._itemsSupport.fillFromWodAmountArray(e.shift());
      this._timeSinceSpying = t;
      this._getInfoTimestamp = l.int(u.CachedTimer.getCachedTimer());
      this._legendSkills = n;
      this._defendingLord = o.LordFactory.createLord(i, true, true);
    } else {
      this._timeSinceSpying = -1;
    }
  };
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "spyInfoAgeInSeconds", {
    get: function () {
      return this._timeSinceSpying + (u.CachedTimer.getCachedTimer() - this._getInfoTimestamp) * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "remainingSpyInfoTime", {
    get: function () {
      if (this._timeSinceSpying == -1) {
        return 0;
      } else {
        return Math.max(0, -this.spyInfoAgeInSeconds + r.SpyConst.SPY_VALIDITY);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsLeft", {
    get: function () {
      return this._itemsLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsMiddle", {
    get: function () {
      return this._itemsMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsRight", {
    get: function () {
      return this._itemsRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsKeep", {
    get: function () {
      return this._itemsKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsStronghold", {
    get: function () {
      return this._itemsStronghold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "itemsSupport", {
    get: function () {
      return this._itemsSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalMilitarySoldierCount", {
    get: function () {
      return this._itemsLeft.getSoldierCount() + this._itemsMiddle.getSoldierCount() + this._itemsRight.getSoldierCount() + this._itemsKeep.getSoldierCount() + this._itemsStronghold.getSoldierCount() - this.getTotalCountByWOD(s.ClientConstCastle.UNIT_MILITIA_WOD) - this.getTotalCountByWOD(s.ClientConstCastle.UNIT_PEASANT_WOD) + this.getTotalCountByWOD(s.ClientConstCastle.UNIT_UNKNOWNSOLDIER_WOD);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalMilitaryDefenceToolCount", {
    get: function () {
      return this._itemsLeft.getUnitCountByUnitType(s.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsMiddle.getUnitCountByUnitType(s.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsRight.getUnitCountByUnitType(s.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsKeep.getUnitCountByUnitType(s.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this._itemsSupport.getUnitCountByUnitType(s.ClientConstCastle.UNIT_TYPE_TOOL_DEFENCE) + this.getTotalCountByWOD(s.ClientConstCastle.UNIT_UNKNOWNTOOLS_WOD);
    },
    enumerable: true,
    configurable: true
  });
  CastleSpyArmyInfoVO.prototype.getTotalCountByWOD = function (e) {
    var t = this._itemsLeft.getUnitCountByWodId(e);
    t += this._itemsMiddle.getUnitCountByWodId(e);
    t += this._itemsRight.getUnitCountByWodId(e);
    t += this._itemsKeep.getUnitCountByWodId(e);
    t += this._itemsStronghold.getUnitCountByWodId(e);
    return t += this._itemsSupport.getUnitCountByWodId(e);
  };
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "defendingLord", {
    get: function () {
      return this._defendingLord;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "defenderSkills", {
    get: function () {
      return this._legendSkills;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpyArmyInfoVO.prototype, "totalWallSoldierCount", {
    get: function () {
      return this._itemsLeft.getSoldierCount() + this._itemsMiddle.getSoldierCount() + this._itemsRight.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  return CastleSpyArmyInfoVO;
}();
exports.CastleSpyArmyInfoVO = n;
var o = require("./731.js");
var a = require("./587.js");
var s = require("./18.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./28.js");
var u = require("./30.js");