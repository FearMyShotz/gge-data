Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./58.js");
var h = require("./148.js");
var g = require("./4.js");
var C = require("./119.js");
var _ = require("./519.js");
var m = function (e) {
  function ArmyAttackMapmovementVO() {
    var t = this;
    t._guessedSize = 0;
    t._attackType = 0;
    t._isShadowMovement = false;
    t._isForceCancelable = false;
    t._armyState = 0;
    t._autoSkipCooldownType = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = ArmyAttackMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(ArmyAttackMapmovementVO, e);
  ArmyAttackMapmovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    o.debug("__________________________________________");
    o.debug("FA: " + t.FA);
    o.debug("GA: " + t.GA);
    o.debug("GS: " + t.GS);
    if (t.FA) {
      this.parseArmy(t.FA);
      this._armyState = ArmyAttackMapmovementVO.ARMY_FULL;
    } else if (t.GA) {
      this.parseArmy(t.GA);
      this._armyState = ArmyAttackMapmovementVO.ARMY_FULL;
    } else if (t.GS) {
      this._guessedSize = u.int(u.int(t.GS));
      this._armyState = ArmyAttackMapmovementVO.ARMY_SHORT;
    } else {
      o.debug("no state found?");
    }
    this._attackType = parseInt(t.ATT);
    this._isShadowMovement = Boolean(t.SM);
    this._isForceCancelable = !!t.FC && Boolean(t.FC);
    if (this._attackArmyVO && t.AST) {
      this._attackArmyVO.parseSupportTools(t.AST);
    }
    if (t.ASCT) {
      this._autoSkipCooldownType = t.ASCT;
    }
  };
  ArmyAttackMapmovementVO.prototype.parseArmy = function (e) {
    this._attackArmyVO = new f.CastleCompactArmyVO();
    this._attackArmyVO.parseSimpleArmy(e);
    if (this._attackArmyVO && e.RW) {
      this._attackArmyVO.parseYardWave(e.RW);
    }
  };
  ArmyAttackMapmovementVO.prototype.getArmySizeLevel = function () {
    var e = 0;
    if (this._guessedSize > 0) {
      e = this._guessedSize;
    }
    if (this.attackArmyVO) {
      e = u.int(this.attackArmyVO.itemsLeft.getSoldierCount() + this.attackArmyVO.itemsRight.getSoldierCount() + this.attackArmyVO.itemsMiddle.getSoldierCount());
    }
    if (e < d.ClientConstCastle.SMALL_ARMY_LIMIT) {
      return 1;
    } else if (e > d.ClientConstCastle.SMALL_ARMY_LIMIT && e < d.ClientConstCastle.BIG_ARMY_LIMIT) {
      return 2;
    } else if (e >= d.ClientConstCastle.BIG_ARMY_LIMIT) {
      return 3;
    } else {
      return 1;
    }
  };
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return this._armyState == ArmyAttackMapmovementVO.ARMY_FULL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "armyState", {
    get: function () {
      return this._armyState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "armySize", {
    get: function () {
      if (this.attackArmyVO) {
        return this.attackArmyVO.itemsLeft.getUnitCount(null) + this.attackArmyVO.itemsRight.getUnitCount(null) + this.attackArmyVO.itemsMiddle.getUnitCount(null);
      } else {
        return this._guessedSize;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return !!g.CastleModel.userData.hasLevelFor(p.ClientConstLevelRestrictions.MIN_LEVEL_RETREAT_MOVEMENTS) && this.isMyMovement && !this.isReturnHome;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return !this.isForceCancelable && !this.isUselessNomadAttack() && !this.isFactionTowerAttack && this.getPassedTimeInSeconds() > l.TravelConst.MAX_FALLBACK_TIME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isFactionTowerAttack", {
    get: function () {
      return this.targetArea.areaType == c.WorldConst.AREA_TYPE_FACTION_TOWER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isFactionVillageAttack", {
    get: function () {
      return this.targetArea.areaType == c.WorldConst.AREA_TYPE_FACTION_VILLAGE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return this.targetOwnerID == g.CastleModel.userData.playerID || this.targetOwnerID == s.DungeonConst.BASIC_DAIMYO_TOWNSHIP_PLAYER_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "isAttackingMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isAllyAttackingMovement", {
    get: function () {
      if (g.CastleModel.userData.isInAlliance && g.CastleModel.allianceData.myAllianceVO) {
        for (var e = 0; e < g.CastleModel.allianceData.myAllianceVO.memberList.length; e++) {
          var t = u.int(g.CastleModel.allianceData.myAllianceVO.memberList[e].playerID);
          if (this.targetOwnerID == t && this.targetOwnerID != g.CastleModel.userData.playerID) {
            return true;
          }
        }
      }
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "isAllyAttackingMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "needGeneral").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "attackArmyVO", {
    get: function () {
      return this._attackArmyVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerMovement", {
    get: function () {
      return this._attackType == s.CombatConst.ATTACK_TYPE_CONQUER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerOutpostMovement", {
    get: function () {
      return this.isConquerMovement && (this._targetArea.areaType == c.WorldConst.AREA_TYPE_OUTPOST || this._targetArea.areaType == c.WorldConst.AREA_TYPE_FACTION_CAMP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerCapitalMovement", {
    get: function () {
      return this.isConquerMovement && this._targetArea.areaType == c.WorldConst.AREA_TYPE_CAPITAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isConquerTradeCentralMovement", {
    get: function () {
      return this.isConquerMovement && this.targetArea.areaType == c.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  ArmyAttackMapmovementVO.prototype.isUselessNomadAttack = function () {
    return C.PlayerHelper.isNomadPlayer(this.targetOwnerID) && !g.CastleModel.specialEventData.isEventActive(r.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
  };
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isShadowMovement", {
    get: function () {
      return this._isShadowMovement;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "isForceCancelable", {
    get: function () {
      return this._isForceCancelable;
    },
    set: function (e) {
      this._isForceCancelable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "attackType", {
    get: function () {
      return this._attackType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return this._movementOwnerInfo.playerID == h.ClientConstNPCs.NPC_ID_ALLIANCE_NOMAD_CAMP || Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "showAsAllianceAttackWarning").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapmovementVO.prototype, "showAsAllianceAttackWarning").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "foodSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.foodSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "meadSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.meadSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "beefSupply", {
    get: function () {
      if (this._attackArmyVO) {
        return this._attackArmyVO.beefSupply;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyAttackMapmovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return this._autoSkipCooldownType;
    },
    enumerable: true,
    configurable: true
  });
  ArmyAttackMapmovementVO.__initialize_static_members = function () {
    ArmyAttackMapmovementVO.ARMY_FULL = 0;
    ArmyAttackMapmovementVO.ARMY_SHORT = 2;
    ArmyAttackMapmovementVO.NAME = "Armyattack";
  };
  return ArmyAttackMapmovementVO;
}(_.BasicMapmovementVO);
exports.ArmyAttackMapmovementVO = m;
var f = require("./2355.js");
a.classImplementsInterfaces(m, "IMapMovementVO", "IArmyMapmovementVO");
m.__initialize_static_members();