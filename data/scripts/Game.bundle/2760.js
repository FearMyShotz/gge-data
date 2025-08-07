Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./2761.js");
var s = require("./2762.js");
var r = function (e) {
  function IsoDataObjectGroupMovement() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoDataObjectGroupMovement, e);
  IsoDataObjectGroupMovement.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._workPlaces = new p.IsoMovementWorkPlaces(t);
  };
  IsoDataObjectGroupMovement.prototype.destroy = function () {
    this._waypoints = null;
    this._spawnProbability = null;
    this.workPlaces.destroy();
    e.prototype.destroy.call(this);
  };
  IsoDataObjectGroupMovement.prototype.initObjects = function () {
    this.resetList();
    this.updateInfos();
  };
  IsoDataObjectGroupMovement.prototype.updateInfos = function () {
    this.initWaypoints();
    this.initSpawnProbability();
    this.workPlaces.reinit();
  };
  IsoDataObjectGroupMovement.prototype.initWaypoints = function () {
    var e;
    this._waypoints = new Map();
    for (var t = c.IsoObjectEnum.getGroupObjects(u.IsoObjectGroupEnum.MOVEMENTS), i = 0; i < t.length; i++) {
      e = t[i];
      var n = d.IsoHelper.data.getMovementWaypointClasses(e);
      var o = this.isoData.objects.provider;
      this._waypoints.set(e, new s.IsoMovementWaypointVO(o.getObjectsByClasses(n.spawnBuildings), o.getObjectsByClasses(n.targetBuildings), o.getObjectsByClasses(n.visitBuildings)));
    }
  };
  IsoDataObjectGroupMovement.prototype.initSpawnProbability = function () {
    this._spawnProbability = new Map();
    if (this.waypoints != null) {
      for (var e = 0, t = Array.from(this.waypoints.values()); e < t.length; e++) {
        var i = t[e];
        o.int(i.spawnBuildings.length);
      }
    }
    for (var n = c.IsoObjectEnum.getGroupObjects(u.IsoObjectGroupEnum.MOVEMENTS), s = 0; s < n.length; ++s) {
      this.spawnProbability.set(n[s], new a.IsoMovementSpawnProbability(1 / n.length * (s + 0), 1 / n.length * (s + 1)));
    }
  };
  IsoDataObjectGroupMovement.prototype.getWaypointsByType = function (e) {
    return this.waypoints.get(e);
  };
  IsoDataObjectGroupMovement.prototype.getPossibleMaxMovementAmount = function () {
    return o.int(Math.min(l.IsoConst.MOVEMENTS_MAX_AMOUNT / l.IsoConst.MOVEMENTS_MAX_AMOUNT_ON_BUILDING_COUNT * this.isoData.objects.innerBuildings.list.length, l.IsoConst.MOVEMENTS_MAX_AMOUNT));
  };
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "waypoints", {
    get: function () {
      return this._waypoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "spawnProbability", {
    get: function () {
      return this._spawnProbability;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupMovement.prototype, "workPlaces", {
    get: function () {
      return this._workPlaces;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupMovement;
}(require("./358.js").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupMovement = r;
var l = require("./144.js");
var c = require("./80.js");
var u = require("./143.js");
var d = require("./46.js");
var p = require("./2763.js");