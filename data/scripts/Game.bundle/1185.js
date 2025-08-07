Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function IsoGeneratorMovements(e) {
    this._isoData = e;
  }
  IsoGeneratorMovements.prototype.createOuterMovementVO = function (e) {
    this._movementType = e;
    var t = e == s.IsoObjectEnum.MOVEMENT_STONE_CUTTER || e == s.IsoObjectEnum.MOVEMENT_FARMER;
    var i = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (i.length <= 0) {
      return null;
    }
    var n;
    var o = this.getRandomPosFromList(i);
    var a = this.isoData.objects.defences.gate;
    var r = a.innerSpawnPoint;
    var g = a.outerSpawnPoint;
    r = this.addPosOfVOToPos(r, a);
    g = this.addPosOfVOToPos(g, a);
    var C;
    var _;
    var m = h.int(this.isoData.objects.movements.workPlaces.getIndexOfFreeSlot(e));
    if (e == s.IsoObjectEnum.MOVEMENT_WOOD_CUTTER) {
      _ = C = (n = this.isoData.objects.surroundings.getWoodField()).spawnPoints[m];
    } else if (e == s.IsoObjectEnum.MOVEMENT_STONE_CUTTER || e == s.IsoObjectEnum.MOVEMENT_FARMER) {
      var f = h.int(m / 2);
      C = (n = e == s.IsoObjectEnum.MOVEMENT_STONE_CUTTER ? this.isoData.objects.surroundings.getStoneField() : this.isoData.objects.surroundings.getFoodField()).getWorkPointsByIndex(f)[h.int(m % 2)];
      _ = n.spawnPoints[f];
    }
    C = this.addPosOfVOToPos(C, n);
    _ = this.addPosOfVOToPos(_, n);
    var O = l.IsoHelper.data.createIsoObjectVOByType(e, this.isoData);
    var E = p.ClientConstUtils.getRandomInt(7, 15) * 1000;
    var y = [];
    y.push(new u.IsoMovementActionWalk(o, r, true, true));
    y.push(new u.IsoMovementActionWalk(g, _, true, false));
    if (t) {
      y.push(new c.IsoMovementActionStand(_, 1000, e == s.IsoObjectEnum.MOVEMENT_FARMER ? 1 : 0, false, true));
    }
    y.push(new d.IsoMovementActionWork(C, E, t, t));
    y.push(new u.IsoMovementActionWalk(_, g, t, true));
    y.push(new u.IsoMovementActionWalk(r, o, true, true));
    this.isoData.objects.movements.workPlaces.markWorkPlace(e, m, true);
    O.startWithNewActionList(y, m);
    return O;
  };
  IsoGeneratorMovements.prototype.createInnerMovementVO = function (e) {
    this._movementType = e;
    if (!this.destWaypoints || !(this.destWaypoints.spawnBuildings.length > 0) || !(this.destWaypoints.targetBuildings.length > 0)) {
      return null;
    }
    var t = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (t.length <= 0) {
      return null;
    }
    var i = this.getRandomPosFromList(t);
    var n = this.getPossibleSpawnPoints(this.destWaypoints.targetBuildings);
    this.removePosFromList(n, i);
    if (n.length <= 0) {
      return null;
    }
    var o = this.getRandomPosFromList(n);
    var s = [];
    if (p.ClientConstUtils.getRandomInt(1, 100) <= a.IsoConst.MOVEMENTS_VISIT_PROBABILITY) {
      var r = this.getPossibleVisitPoints(this.destWaypoints.visitBuildings);
      var d = h.int(Math.min(p.ClientConstUtils.getRandomInt(1, 2), r.length));
      this.removePosFromList(r, i);
      this.removePosFromList(r, o);
      for (var g = 0; g < d; ++g) {
        var C = r[h.int(p.ClientConstUtils.getRandomInt(0, r.length - 1))];
        s.push(C);
        this.removePosFromList(r, C);
      }
    }
    var _ = [];
    if (s.length > 0) {
      var m = i;
      for (g = 0; g < s.length; ++g) {
        var f = s[g];
        _.push(new u.IsoMovementActionWalk(m, f, g == 0, false));
        var O = p.ClientConstUtils.getRandomInt(0, 1) == 1;
        _.push(new c.IsoMovementActionStand(f, p.ClientConstUtils.getRandomInt(750, 3000), O ? 2 : 3));
        _.push(new c.IsoMovementActionStand(f, p.ClientConstUtils.getRandomInt(750, 3000), O ? 3 : 2));
        m = f;
      }
      _.push(new u.IsoMovementActionWalk(m, o, false, true));
    } else {
      _.push(new u.IsoMovementActionWalk(i, o, true, true));
    }
    var E = l.IsoHelper.data.createIsoObjectVOByType(e, this.isoData);
    E.startWithNewActionList(_);
    return E;
  };
  IsoGeneratorMovements.prototype.createEggMovement = function () {
    var e = s.IsoObjectEnum.getGroupObjects(r.IsoObjectGroupEnum.MOVEMENTS);
    this._movementType = e[p.ClientConstUtils.getRandomInt(0, e.length - 2)];
    var t = this.getPossibleSpawnPoints(this.destWaypoints.spawnBuildings);
    if (t.length <= 0) {
      return null;
    }
    var i = this.getRandomPosFromList(t);
    var o = this.isoData.objects.defences.gate;
    var a = o.innerSpawnPoint;
    var l = o.outerSpawnPoint;
    a = this.addPosOfVOToPos(a, o);
    l = this.addPosOfVOToPos(l, o);
    var c = this.isoData.grid.origins.getOriginPos(C.IsoGridOriginEnum.TOP_CORNER);
    var d = new n(c.x, c.y).add(new n(-17, -34));
    var h = new this.movementType.dataClass();
    h.init(this.isoData);
    var g = [];
    g.push(new u.IsoMovementActionWalk(i, a, true, true));
    g.push(new u.IsoMovementActionWalk(l, d, true, true));
    h.startWithNewActionList(g);
    return h;
  };
  IsoGeneratorMovements.prototype.createShowUpMovement = function (e, t) {
    this._movementType = s.IsoObjectEnum.MOVEMENT_FARHAT;
    var i = l.IsoHelper.data.createIsoObjectVOByType(this.movementType, this.isoData);
    var n = [];
    n.push(new c.IsoMovementActionStand(e, 10000, t, true, true));
    i.startWithNewActionList(n);
    return i;
  };
  IsoGeneratorMovements.prototype.addResourceItemToMovement = function (e) {
    if (this.isoData.areaData.isMyArea && !this.isoData.areaData.isUnderConquerProcess && !g.CastleModel.resourcePoolData.ownerMovementVO) {
      var t = g.CastleModel.resourcePoolData.resourceItem;
      if (t && g.CastleModel.resourcePoolData.canMovementTypeCarryResourceType(this.movementType, t.itemType)) {
        g.CastleModel.resourcePoolData.registerNewMovementAsOwner(e);
      }
    }
  };
  IsoGeneratorMovements.prototype.removePosFromList = function (e, t) {
    var i = -1;
    for (var n = 0; n < e.length; ++n) {
      var o = e[n];
      if (o.x == t.x && o.y == t.y) {
        i = n;
        break;
      }
    }
    if (i >= 0) {
      e.splice(i, 1);
    }
  };
  IsoGeneratorMovements.prototype.getPossibleSpawnPoints = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, o = e; i < o.length; i++) {
        var a = o[i];
        if (a !== undefined) {
          for (var s = 0, r = a.spawnPoints; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined) {
              t.push(new n(a.x + l.x, a.y + l.y));
            }
          }
        }
      }
    }
    return t;
  };
  IsoGeneratorMovements.prototype.getPossibleVisitPoints = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, o = e; i < o.length; i++) {
        var a = o[i];
        if (a !== undefined && a.spawnPoints.length <= 0) {
          t.push(new n(a.x2, a.y2));
        }
      }
    }
    return t;
  };
  IsoGeneratorMovements.prototype.getRandomPosFromList = function (e) {
    return e[p.ClientConstUtils.getRandomInt(0, e.length - 1)];
  };
  IsoGeneratorMovements.prototype.addPosOfVOToPos = function (e, t) {
    return new n(e.x + t.x, e.y + t.y);
  };
  Object.defineProperty(IsoGeneratorMovements.prototype, "destWaypoints", {
    get: function () {
      return this.isoData.objects.movements.getWaypointsByType(this.movementType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorMovements.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorMovements.prototype, "movementType", {
    get: function () {
      return this._movementType;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGeneratorMovements;
}();
exports.IsoGeneratorMovements = o;
var a = require("./144.js");
var s = require("./80.js");
var r = require("./143.js");
var l = require("./46.js");
var c = require("./2047.js");
var u = require("./2048.js");
var d = require("./2051.js");
var p = require("./55.js");
var h = require("./6.js");
var g = require("./4.js");
var C = require("./105.js");