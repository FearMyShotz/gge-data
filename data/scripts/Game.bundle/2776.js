Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./778.js");
var a = require("./780.js");
var s = require("./639.js");
var r = function (e) {
  function IsoViewObjectGroupDefence() {
    var t = this;
    t._towers = [];
    t._walls = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewObjectGroupDefence, e);
  IsoViewObjectGroupDefence.prototype.destroy = function () {
    this._gate = this.destroyObject(this._gate);
    this._moat = this.destroyObject(this._moat);
    this._towers = this.destroyAndCreateNewObjectList(this._towers);
    this._walls = this.destroyAndCreateNewObjectList(this._walls);
    e.prototype.destroy.call(this);
  };
  IsoViewObjectGroupDefence.prototype.initObjects = function () {
    this.initTowers();
    this.initWalls();
    this.initGate();
    this.initMoat();
  };
  IsoViewObjectGroupDefence.prototype.initGate = function () {
    if (this.gate) {
      this._gate = this.destroyObject(this.gate);
    }
    this._gate = this.createObjectAndAddToLayer(this.isoData.objects.defences.gate);
  };
  IsoViewObjectGroupDefence.prototype.initWalls = function () {
    if (this.walls && this.walls.length > 0) {
      this._walls = this.destroyAndCreateNewObjectList(this.walls);
    }
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.walls, this.walls);
  };
  IsoViewObjectGroupDefence.prototype.initTowers = function () {
    if (this.towers && this.towers.length > 0) {
      this._towers = this.destroyAndCreateNewObjectList(this.towers);
    }
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.towers, this.towers);
    this.createObjectsAndAddToLayerAndList(this.isoData.objects.defences.emptyTowers, this.towers);
  };
  IsoViewObjectGroupDefence.prototype.initMoat = function () {
    if (this.moat) {
      this._moat = this.destroyObject(this.moat);
    }
    this._moat = this.createObjectAndAddToLayer(this.isoData.objects.defences.moat);
  };
  IsoViewObjectGroupDefence.prototype.render = function () {
    if (this.gate) {
      this.gate.updateDisp();
    }
    if (this.moat) {
      this.moat.updateDisp();
    }
    this.updateTowers();
    this.updateWalls();
  };
  IsoViewObjectGroupDefence.prototype.addObject = function (e) {
    if (e instanceof o.BasicGateVE) {
      this.initGate();
    } else if (e instanceof a.BasicMoatVE) {
      this.initMoat();
    } else if (e instanceof s.ATowerVE) {
      this.initTowers();
    }
  };
  IsoViewObjectGroupDefence.prototype.updateWalls = function () {
    if (this.walls != null) {
      for (var e = 0, t = this.walls; e < t.length; e++) {
        var i = t[e];
        if (i) {
          i.updateDisp();
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.updateTowers = function () {
    if (this.towers != null) {
      for (var e = 0, t = this.towers; e < t.length; e++) {
        var i = t[e];
        if (i) {
          i.updateDisp();
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.removeObjectByVE = function (e) {
    if (this.gate && this.gate == e) {
      this._gate = this.destroyObject(this._gate);
    } else if (this.moat && this.moat == e) {
      this._moat = this.destroyObject(this._moat);
    } else {
      var t;
      for (var i = 0, n = this.towers; i < n.length; i++) {
        if ((t = n[i]) == e) {
          this.removeObjectFromList(t, this.towers);
          return;
        }
      }
      for (var o = 0, a = this.walls; o < a.length; o++) {
        if ((t = a[o]) == e) {
          this.removeObjectFromList(t, this.walls);
          return;
        }
      }
    }
  };
  IsoViewObjectGroupDefence.prototype.containsObject = function (e) {
    if (!e) {
      return false;
    }
    if (e == this.moat || e == this.gate) {
      return true;
    }
    for (var t = 0, i = this.towers; t < i.length; t++) {
      if (i[t] == e) {
        return true;
      }
    }
    for (var n = 0, o = this.walls; n < o.length; n++) {
      if (o[n] == e) {
        return true;
      }
    }
    return false;
  };
  IsoViewObjectGroupDefence.prototype.fillInCompleteList = function (e) {
    var t;
    if (this.gate) {
      e.push(this.gate);
    }
    if (this.moat) {
      e.push(this.moat);
    }
    for (var i = 0, n = this.walls; i < n.length; i++) {
      t = n[i];
      e.push(t);
    }
    for (var o = 0, a = this.towers; o < a.length; o++) {
      t = a[o];
      e.push(t);
    }
  };
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "moat", {
    get: function () {
      return this._moat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "towers", {
    get: function () {
      return this._towers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewObjectGroupDefence.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewObjectGroupDefence;
}(require("./1008.js").AIsoViewObjectGroup);
exports.IsoViewObjectGroupDefence = r;