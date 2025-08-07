Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1477.js");
var s = function (e) {
  function IsoDataObjectGroupDefence() {
    var t = this;
    t._walls = [];
    t._towers = [];
    t._emptyTowers = [];
    t._defencePositions = new a.IsoDefencePositions();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoDataObjectGroupDefence, e);
  IsoDataObjectGroupDefence.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._wallInfo = this.destroyObject(this._wallInfo);
    this._moat = this.destroyObject(this._moat);
    this._gate = this.destroyObject(this._gate);
    this._walls = l.IsoHelper.data.destroyAndCreateNewVOList(this._walls);
    this._towers = l.IsoHelper.data.destroyAndCreateNewVOList(this._towers);
    this._emptyTowers = l.IsoHelper.data.destroyAndCreateNewVOList(this._emptyTowers);
  };
  IsoDataObjectGroupDefence.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this._defenceGenerator = new c.IsoGeneratorDefence(t);
  };
  IsoDataObjectGroupDefence.prototype.initObjects = function () {
    this._emptyTowers.length = 0;
    this._defencePositions = this.defenceGenerator.generate();
    this.initTowers();
    this.initGate();
    this.initWalls();
    this.initMoat();
  };
  IsoDataObjectGroupDefence.prototype.initTowers = function () {
    var e;
    var t;
    var i = 0;
    for (var n = 0, o = this.defencePositions.necessaryTowers; n < o.length; n++) {
      e = o[n];
      t = this.towers[i];
      this.updateVoByDefencePosition(t, e);
      i++;
    }
    var a = this.getEmptyTowerClass();
    for (var s = 0, r = this.defencePositions.emptyTowers; s < r.length; s++) {
      e = r[s];
      t = new a();
      this.emptyTowers.push(t);
      this.updateVoByDefencePosition(t, e);
    }
  };
  IsoDataObjectGroupDefence.prototype.initGate = function () {
    this.updateVoByDefencePosition(this.gate, this.defencePositions.gate);
  };
  IsoDataObjectGroupDefence.prototype.initWalls = function () {
    this._walls.length = 0;
    var e;
    var t = this.getWallClass();
    for (var i = 0, n = this.defencePositions.walls; i < n.length; i++) {
      var o = n[i];
      if (o !== undefined) {
        (e = new t()).wodId = this.wallInfo.wodId;
        e.objectId = this.wallInfo.objectId;
        this.walls.push(e);
        this.updateVoByDefencePosition(e, o);
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.initMoat = function () {
    if (this.moat) {
      this.moat.init(this.isoData);
      this.moat.positions = this.defencePositions.moat;
    }
  };
  IsoDataObjectGroupDefence.prototype.updateVoByDefencePosition = function (e, t) {
    e.init(this.isoData);
    e.x = t.pos.x;
    e.y = t.pos.y;
    e.rotation = t.rot;
    e.updateData();
  };
  IsoDataObjectGroupDefence.prototype.addObject = function (e) {
    if (o.instanceOfClass(e, "BasicMoatVO")) {
      this._moat = e;
      this.initMoat();
    } else if (o.instanceOfClass(e, "BasicGateVO")) {
      this._gate = e;
      this.initGate();
    } else if (o.instanceOfClass(e, "ATowerVO")) {
      this._towers.push(e);
    }
  };
  IsoDataObjectGroupDefence.prototype.updateObjectByServer = function (e, t) {
    if (this.wallInfo && this.wallInfo.objectId == e) {
      l.IsoHelper.data.updateIsoObjectByServer(this.wallInfo, t);
      this.initWalls();
      return this.wallInfo;
    }
    if (this.moat && this.moat.objectId == e) {
      this.isoData.objects.completeTempObjectList.splice(this.isoData.objects.completeTempObjectList.indexOf(this._moat), 1);
      this._moat = l.IsoHelper.data.createIsoObjectVOByServer(t);
      this.isoData.objects.completeTempObjectList.push(this._moat);
      this.initMoat();
      return this.moat;
    }
    if (this.gate && this.gate.objectId == e) {
      l.IsoHelper.data.updateIsoObjectByServer(this.gate, t);
      this.initGate();
      return this.gate;
    }
    for (var i = 0; i < this.towers.length; ++i) {
      var n = this.towers[i];
      if (n.objectId == e) {
        l.IsoHelper.data.updateIsoObjectByServer(n, t);
        this.updateVoByDefencePosition(n, this.defencePositions.necessaryTowers[i]);
        return n;
      }
    }
    return null;
  };
  IsoDataObjectGroupDefence.prototype.parseGCA = function (e) {
    this.parseBulwarks(e.D);
    this.parseGate(e.G);
    this.parseTowers(e.T);
  };
  IsoDataObjectGroupDefence.prototype.parseBulwarks = function (e) {
    var t;
    var i = e;
    if (i && (this._wallInfo = null, this._moat = null, i != null)) {
      for (var n = 0, a = i; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          t = l.IsoHelper.data.createIsoObjectVOByServer(s, this.isoData);
          if (o.instanceOfClass(t, "CastlewallDefenceVO")) {
            this._wallInfo = t;
          } else if (o.instanceOfClass(t, "BasicMoatVO")) {
            this._moat = t;
          }
        }
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.parseGate = function (e) {
    var t = e;
    if (t && (this._gate = null, t != null)) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._gate = l.IsoHelper.data.createIsoObjectVOByServer(o, this.isoData);
        }
      }
    }
  };
  IsoDataObjectGroupDefence.prototype.parseTowers = function (e) {
    var t = e;
    if (t) {
      var i;
      this._towers.length = 0;
      if (t != null) {
        for (var n = 0, o = t; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            i = l.IsoHelper.data.createIsoObjectVOByServer(a, this.isoData);
            this.towers.push(i);
          }
        }
      }
      this.towers.sort(r.ClientConstSort.sortByObjectId);
    }
  };
  IsoDataObjectGroupDefence.prototype.containsObjectById = function (e) {
    if (this.wallInfo && this.wallInfo.objectId == e || this.gate && this.gate.objectId == e || this.moat && this.moat.objectId == e) {
      return true;
    }
    if (this.towers != null) {
      for (var t = 0, i = this.towers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.objectId == e) {
          return true;
        }
      }
    }
    return false;
  };
  IsoDataObjectGroupDefence.prototype.containsObject = function (e) {
    if (!e) {
      return false;
    }
    if (this.wallInfo == e || this.gate == e || this.moat == e) {
      return true;
    }
    if (this.towers != null) {
      for (var t = 0, i = this.towers; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n == e) {
          return true;
        }
      }
    }
    return false;
  };
  IsoDataObjectGroupDefence.prototype.fillInCompleteList = function (e) {
    var t;
    if (this.gate) {
      e.push(this.gate);
    }
    if (this.moat) {
      e.push(this.moat);
    }
    if (this.wallInfo) {
      e.push(this.wallInfo);
    }
    for (var i = 0, n = this.towers; i < n.length; i++) {
      t = n[i];
      e.push(t);
    }
    for (var o = 0, a = this.emptyTowers; o < a.length; o++) {
      t = a[o];
      e.push(t);
    }
  };
  IsoDataObjectGroupDefence.prototype.getEmptyTowerClass = function () {
    if (this.isoData.areaData.isFactionCamp) {
      return g.FactionEmptyTowerVO;
    } else if (this.isoData.areaData.isSeasonCamp) {
      return C.LookoutTowerVO;
    } else {
      return h.EmptyTowerVO;
    }
  };
  IsoDataObjectGroupDefence.prototype.getWallClass = function () {
    if (this.isoData.areaData.isFactionCamp) {
      return d.FactionPalisadeDefenceVO;
    } else if (this.isoData.areaData.isSeasonCamp) {
      return p.PalisadeDefenceVO;
    } else {
      return u.CastlewallDefenceVO;
    }
  };
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "currentWallLevel", {
    get: function () {
      if (this.wallInfo) {
        return this.wallInfo.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "wallInfo", {
    get: function () {
      return this._wallInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "moat", {
    get: function () {
      return this._moat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "towers", {
    get: function () {
      return this._towers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "emptyTowers", {
    get: function () {
      return this._emptyTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "defencePositions", {
    get: function () {
      return this._defencePositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataObjectGroupDefence.prototype, "defenceGenerator", {
    get: function () {
      return this._defenceGenerator;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataObjectGroupDefence;
}(require("./862.js").AIsoDataObjectGroup);
exports.IsoDataObjectGroupDefence = s;
var r = require("./75.js");
var l = require("./46.js");
var c = require("./2737.js");
var u = require("./770.js");
var d = require("./1478.js");
var p = require("./1479.js");
var h = require("./1480.js");
var g = require("./1481.js");
var C = require("./1482.js");