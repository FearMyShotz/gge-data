Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./33.js");
var o = function () {
  function IsoGeneratorDefence(e) {
    this._subGenerators = new Map();
    this._numberOfOwningTowers = 0;
    this._isoData = e;
    this._subGenerators = new Map();
    for (var t = 0, i = s.CastleEnum.getEnumListByClass(a.IsoGeneratorDefenceEnum); t < i.length; t++) {
      var n = i[t];
      if (r.instanceOfClass(n, "IsoGeneratorDefenceEnum")) {
        var o = n;
        var l = new o.clazz();
        l.init(this);
        this.subGenerators.set(o.clazz, l);
      }
    }
  }
  IsoGeneratorDefence.prototype.generate = function () {
    this._result = new c.IsoDefencePositions();
    this._grounds = this.isoData.objects.groundObjects.list;
    this._grid = this.isoData.grid;
    this._numberOfOwningTowers = l.int(this.isoData.objects.defences.towers.length);
    if (this.grounds && this.grounds.length > 0) {
      this._grounds = this.grounds.sort(this.bindFunction(this.sortGroundFunc));
      for (var e = 0, t = s.CastleEnum.getEnumListByClass(a.IsoGeneratorDefenceEnum); e < t.length; e++) {
        var i = t[e];
        if (r.instanceOfClass(i, "IsoGeneratorDefenceEnum")) {
          var n = i;
          this.subGenerators.get(n.clazz).execute();
        }
      }
    }
    this.cleanup();
    return this.result;
  };
  IsoGeneratorDefence.prototype.cleanup = function () {
    for (var e = 0, t = s.CastleEnum.getEnumListByClass(a.IsoGeneratorDefenceEnum); e < t.length; e++) {
      var i = t[e];
      if (r.instanceOfClass(i, "IsoGeneratorDefenceEnum")) {
        var n = i;
        this.subGenerators.get(n.clazz).cleanup();
      }
    }
    this._grid = null;
    this._grounds = null;
    this._numberOfOwningTowers = 0;
  };
  IsoGeneratorDefence.prototype.sortGroundFunc = function (e, t) {
    if (e.x2 > t.x2) {
      return 1;
    } else if (e.x2 < t.x2) {
      return -1;
    } else if (e.y2 > t.y2) {
      return 1;
    } else if (e.y2 < t.y2) {
      return -1;
    } else {
      return 0;
    }
  };
  Object.defineProperty(IsoGeneratorDefence.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "grounds", {
    get: function () {
      return this._grounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "result", {
    get: function () {
      return this._result;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "numberOfOwningTowers", {
    get: function () {
      return this._numberOfOwningTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "subGenerators", {
    get: function () {
      return this._subGenerators;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoGeneratorDefence.prototype, "isoData", {
    get: function () {
      return n.Iso.data;
    },
    enumerable: true,
    configurable: true
  });
  return IsoGeneratorDefence;
}();
exports.IsoGeneratorDefence = o;
var a = require("./2738.js");
var s = require("./84.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./1477.js");