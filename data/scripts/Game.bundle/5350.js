Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./139.js");
var l = require("./53.js");
var c = require("./30.js");
var u = require("./15.js");
var d = require("./54.js");
var p = require("./17.js");
var h = require("./5351.js");
var g = require("./4.js");
var C = function (e) {
  function CastleArmyData() {
    var t = this;
    t._attacksOnPlayerCount = 0;
    t._attacksOnAlliesCount = 0;
    t._attacksOnAllianceCityCount = 0;
    t._nextAttackingArmyTimestamp = 0;
    t._nextAllyAttackingArmyTimestamp = 0;
    t._nextAllianceCityAttackingArmyTimestamp = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).reset();
    return t;
  }
  n.__extends(CastleArmyData, e);
  CastleArmyData.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._mapMovements = new Map();
    this._attacksOnPlayerCount = 0;
    this._attacksOnAlliesCount = 0;
    this._attacksOnAllianceCityCount = 0;
    this._nextAttackingArmyTimestamp = 0;
    this._nextAllyAttackingArmyTimestamp = 0;
    this._nextAllianceCityAttackingArmyTimestamp = 0;
  };
  CastleArmyData.prototype.resetAndRemove = function () {
    if (this._mapMovements != null) {
      for (var e = 0, t = Array.from(this._mapMovements.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this.removeArmyMovementById(i.objectId);
          u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.MOVEMENTS_CHANGED));
        }
      }
    }
    this.updateABGWorldMap();
    this.reset();
  };
  CastleArmyData.prototype.parseMapMovementArray = function (e) {
    if (e) {
      this._mapMovements ||= new Map();
      for (var t = 0; t < e.length; t++) {
        var i = e[t];
        var n = m.MapmovementFactory.parseMapMovement(i);
        this.removeArmyMovementById(n.objectId);
        this._mapMovements.set(n.objectId, n);
        u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.NEW_MOVEMENT, n));
      }
      u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.MOVEMENTS_CHANGED));
      this.updateABGWorldMap();
    }
  };
  CastleArmyData.prototype.parse_MRM = function (e) {
    this.removeArmyMovementById(e);
    u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.MOVEMENTS_CHANGED));
    u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.MOVEMENTS_REMOVED));
    this.updateABGWorldMap();
  };
  CastleArmyData.prototype.parse_MFC = function (e) {
    var t = this.getMovementByID(e.MID);
    if (t) {
      if (t) {
        t.isForceCancelable = true;
      }
      if (t) {
        t.isForceCancelable = true;
      }
    }
  };
  CastleArmyData.prototype.getMovementByID = function (e) {
    return this._mapMovements.get(e);
  };
  CastleArmyData.prototype.parse_GAM = function (e) {
    this.parseMapMovementArray(e.M);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.parse_ASR = function (e) {
    this.parseMapMovementArray([e.A]);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.parse_ABR = function (e) {
    this.parseMapMovementArray([e.A]);
    this.checkAllAttackMovements();
  };
  CastleArmyData.prototype.getAreaSiegeMovement = function (e) {
    if (this._mapMovements != null) {
      for (var t = 0, i = Array.from(this._mapMovements.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && _.instanceOfClass(n, "SiegeMapmovementVO") && n.targetArea.absAreaPos.equals(e.absAreaPos)) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleArmyData.prototype, "hasCapitalOwnConquerMovement", {
    get: function () {
      if (this._mapMovements && this._mapMovements != null) {
        for (var e = 0, t = Array.from(this._mapMovements.values()); e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && _.instanceOfClass(i, "ArmyAttackMapmovementVO") && i.isConquerCapitalMovement && i.targetArea.areaType == a.WorldConst.AREA_TYPE_CAPITAL && i.isMyMovement) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "hasMetropolOwnConquerMovement", {
    get: function () {
      if (this._mapMovements && this._mapMovements != null) {
        for (var e = 0, t = Array.from(this._mapMovements.values()); e < t.length; e++) {
          var i = t[e];
          if (i !== undefined) {
            if (_.instanceOfClass(i, "ArmyAttackMapmovementVO")) {
              return i.isConquerTradeCentralMovement && i.targetArea.areaType == a.WorldConst.AREA_TYPE_METROPOL && i.isMyMovement;
            }
            if (_.instanceOfClass(i, "SiegeMapmovementVO")) {
              return i.targetArea.areaType == a.WorldConst.AREA_TYPE_METROPOL && i.isMyMovement;
            }
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.checkAllAttackMovements = function () {
    this._attacksOnPlayerCount = 0;
    this._attacksOnAlliesCount = 0;
    this._attacksOnAllianceCityCount = 0;
    this._nextAttackingArmyTimestamp = 0;
    this._nextAllyAttackingArmyTimestamp = 0;
    this._nextAllianceCityAttackingArmyTimestamp = 0;
    var e = 0;
    var t = 0;
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && _.instanceOfClass(o, "ArmyAttackMapmovementVO")) {
          if (o.isAttackingMovement) {
            this._attacksOnPlayerCount++;
            if (e == 0 || e > o.getTimeUntiMovmentReachTargetInMilliSeconds()) {
              e = o.getTimeUntiMovmentReachTargetInMilliSeconds();
              this._nextAttackingArmyTimestamp = c.CachedTimer.getCachedTimer() + e;
            }
          } else if (o.isAllyAttackingMovement && o.showAsAllianceAttackWarning && o.movementOwnerID != g.CastleModel.userData.playerID) {
            this._attacksOnAlliesCount++;
            if (t == 0 || t > o.getTimeUntiMovmentReachTargetInMilliSeconds()) {
              t = o.getTimeUntiMovmentReachTargetInMilliSeconds();
              this._nextAllyAttackingArmyTimestamp = c.CachedTimer.getCachedTimer() + t;
            }
          }
        }
      }
    }
    this.dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED));
  };
  CastleArmyData.prototype.getRemainingAttackTimeInMilliseconds = function () {
    return s.int(Math.max(0, this._nextAttackingArmyTimestamp - c.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.getRemainingAllyAttackTimeInMilliseconds = function () {
    return s.int(Math.max(0, this._nextAllyAttackingArmyTimestamp - c.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.getRemainingAllianceCityAttackTimeInMilliseconds = function () {
    return s.int(Math.max(0, this._nextAllianceCityAttackingArmyTimestamp - c.CachedTimer.getCachedTimer()));
  };
  CastleArmyData.prototype.executeUpdate = function (e) {
    this.updateMapmovements();
  };
  CastleArmyData.prototype.updateMapmovements = function () {
    if (this._mapMovements) {
      var e = false;
      if (this._mapMovements != null) {
        for (var t = 0, i = Array.from(this._mapMovements.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n.currentProgress >= 1) {
            this.removeArmyMovementById(n.objectId);
            e = true;
            u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.MOVEMENTS_CHANGED));
          }
        }
      }
      if (e) {
        this.updateABGWorldMap();
      }
    }
  };
  CastleArmyData.prototype.removeArmyMovementById = function (e) {
    if (this._mapMovements) {
      if (this._mapMovements.get(e)) {
        t = this._mapMovements.get(e);
        this._mapMovements.delete(e);
        u.CastleBasicController.getInstance().dispatchEvent(new r.CastleArmyDataEvent(r.CastleArmyDataEvent.REMOVE_MOVEMENT, t));
      }
      this.checkAllAttackMovements();
      return t;
    } else {
      return null;
    }
    var t;
  };
  CastleArmyData.prototype.removeAllMovementsByKingdomID = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (!o) {
            break;
          }
          if (!o.sourceArea || !o.targetArea || o.sourceArea.kingdomID == e || o.targetArea.kingdomID == e) {
            t.push(o.objectId);
          }
        }
      }
    }
    for (var a = 0; a < t.length; ++a) {
      this.removeArmyMovementById(t[a]);
    }
    this.checkAllAttackMovements();
    this.updateABGWorldMap();
  };
  CastleArmyData.prototype.getTreasureMovementsByMapID = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && _.instanceOfClass(o, "TreasureHuntMovementVO") && o.treasureMapID == e && o.getTimeUnitMovmentReachTargetInSeconds() > 0) {
          t.push(o);
        }
      }
    }
    if (t.length > 0) {
      return t;
    } else {
      return null;
    }
  };
  CastleArmyData.prototype.removeTreasureMovementsByMapID = function (e) {
    var t = [];
    var i = this.getTreasureMovementsByMapID(e);
    if (i) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (!a) {
          break;
        }
        t.push(a.objectId);
      }
    }
    for (var s = 0; s < t.length; ++s) {
      this.removeArmyMovementById(t[s]);
    }
    this.checkAllAttackMovements();
    this.updateABGWorldMap();
  };
  Object.defineProperty(CastleArmyData.prototype, "isAttackWarning", {
    get: function () {
      return this._attacksOnPlayerCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "mapMovements", {
    get: function () {
      return this._mapMovements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "mapMovementsAsVector", {
    get: function () {
      var e = [];
      if (this._mapMovements != null) {
        for (var t = 0, i = Array.from(this._mapMovements.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(n);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "isAllyAttackWarning", {
    get: function () {
      return this._attacksOnAlliesCount > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnAllianceCityCount", {
    get: function () {
      return this._attacksOnAllianceCityCount;
    },
    set: function (e) {
      this._attacksOnAllianceCityCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnAlliesCount", {
    get: function () {
      return this._attacksOnAlliesCount;
    },
    set: function (e) {
      this._attacksOnAlliesCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "attacksOnPlayerCount", {
    get: function () {
      return this._attacksOnPlayerCount;
    },
    set: function (e) {
      this._attacksOnPlayerCount = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.getAllMyMovementsByTargetType = function (e, t = -1) {
    var i = [];
    if (this._mapMovements != null) {
      for (var n = 0, o = Array.from(this._mapMovements.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (a.kingdomID == t || t == -1) {
            if (a.isMyMovement && a.targetArea.areaType == e) {
              i.push(a);
            }
          }
        }
      }
    }
    return i;
  };
  Object.defineProperty(CastleArmyData.prototype, "nextAttackingArmyTimestamp", {
    set: function (e) {
      this._nextAttackingArmyTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "nextAllyAttackingArmyTimestamp", {
    set: function (e) {
      this._nextAllyAttackingArmyTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleArmyData.prototype, "nextAllianceCityAttackingArmyTimestamp", {
    set: function (e) {
      this._nextAllianceCityAttackingArmyTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleArmyData.prototype.getMyMovementsFromArea = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && h.instanceOf_IArmyMapmovementVO(o) && o.isMyMovement && (o.sourceArea.equalsOtherWMO(e.objectId, e.kingdomID) || o.targetArea.equalsOtherWMO(e.objectId, e.kingdomID) && o.isReturnHome)) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleArmyData.prototype.getMyMovementsToAreaPos = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && h.instanceOf_IArmyMapmovementVO(o) && o.isMyMovement && o.targetArea.absAreaPosX == e.absAreaPosX && o.targetArea.absAreaPosY == e.absAreaPosY && o.targetArea.kingdomID == e.kingdomID) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleArmyData.prototype.getMovementsToAreaPos = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && h.instanceOf_IArmyMapmovementVO(o) && o.targetArea.absAreaPosX == e.absAreaPosX && o.targetArea.absAreaPosY == e.absAreaPosY && o.targetArea.kingdomID == e.kingdomID) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleArmyData.prototype.getMovementsFromAreaPos = function (e) {
    var t = [];
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && h.instanceOf_IArmyMapmovementVO(o) && o.sourceArea.absAreaPosX == e.absAreaPosX && o.sourceArea.absAreaPosY == e.absAreaPosY && o.sourceArea.kingdomID == e.kingdomID) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleArmyData.prototype.getUnitSupportUnitCountToArea = function (e) {
    var t = 0;
    if (this._mapMovements != null) {
      for (var i = 0, n = Array.from(this._mapMovements.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && _.instanceOfClass(o, "SupportDefenceMapmovementVO") && o.targetArea.absAreaPosX == e.absAreaPosX && o.targetArea.absAreaPosY == e.absAreaPosY && o.targetArea.kingdomID == e.kingdomID) {
          t += s.int(o.armySize);
        }
      }
    }
    return t;
  };
  CastleArmyData.prototype.getSupportUnitsAtArea = function (e) {
    var t = new f.UnitInventoryDictionary();
    if (this._mapMovements != null) {
      Array.from(this._mapMovements.values()).forEach(function (i) {
        if (_.instanceOfClass(i, "SupportDefenceMapmovementVO") && i.targetArea.absAreaPosX == e.absAreaPosX && i.targetArea.absAreaPosY == e.absAreaPosY && i.targetArea.kingdomID == e.kingdomID) {
          t.addAll(i.inventory.getUnits(null));
        }
      });
    }
    return t;
  };
  CastleArmyData.prototype.updateABGWorldMap = function () {
    if (l.ABGHelper.isOnABGAndTower && p.CastleLayoutManager.getInstance().currentState == p.CastleLayoutManager.STATE_WORLDMAP) {
      var e = p.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.getAreaViewportRectangle();
      g.CastleModel.worldmapData.updateAreaRange(e.x, e.y, e.x + e.width, e.y + e.height);
    }
  };
  CastleArmyData.prototype.getAdvisorMovements = function (e = -1) {
    var t = [];
    if (this.mapMovements) {
      t = Array.from(this.mapMovements.values()).filter(function (t) {
        return t.isMyMovement && t.advisorType == e;
      });
    }
    return t;
  };
  return CastleArmyData;
}(d.CastleBasicData);
exports.CastleArmyData = C;
o.classImplementsInterfaces(C, "IUpdatable", "ICastleBasicData");
var _ = require("./1.js");
var m = require("./5352.js");
var f = require("./156.js");