Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./451.js");
var a = require("./632.js");
var s = createjs.Point;
var r = function (e) {
  function IsoGeneratorDefenceTower() {
    var t = this;
    t._collisionList = [];
    t._numberOfAddedTowers = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoGeneratorDefenceTower, e);
  IsoGeneratorDefenceTower.prototype.execute = function () {
    var e;
    this._collisionList.length = 0;
    this._collisionList.push(this.parentGenerator.result.gate);
    this._numberOfAddedTowers = 0;
    for (var t = 0, i = this.parentGenerator.result.outerCorners; t < i.length; t++) {
      e = i[t];
      if (this.numberOfAddedTowers < this.parentGenerator.numberOfOwningTowers) {
        this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getOuterTowerPosition), e);
      } else {
        this.addTowerPosition(this.parentGenerator.result.emptyTowers, this.bindFunction(this.getOuterTowerPosition), e);
      }
    }
    for (var n = 0, o = this.parentGenerator.result.innerCorners; n < o.length; n++) {
      e = o[n];
      if (this.numberOfAddedTowers < this.parentGenerator.numberOfOwningTowers) {
        this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getInnerTowerPosition), e);
      } else {
        this.addTowerPosition(this.parentGenerator.result.emptyTowers, this.bindFunction(this.getInnerTowerPosition), e);
      }
    }
    for (var a = 0, s = this.parentGenerator.result.groundCornerSides; a < s.length && (e = s[a], !(this.numberOfAddedTowers >= this.parentGenerator.numberOfOwningTowers)); a++) {
      this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getSideTowerPosition), e);
    }
    for (var r = 0, l = this.parentGenerator.result.sides; r < l.length && (e = l[r], !(this.numberOfAddedTowers >= this.parentGenerator.numberOfOwningTowers)); r++) {
      this.addTowerPosition(this.parentGenerator.result.necessaryTowers, this.bindFunction(this.getSideTowerPosition), e);
    }
  };
  IsoGeneratorDefenceTower.prototype.cleanup = function () {
    this._collisionList.length = 0;
    this._numberOfAddedTowers = 0;
  };
  IsoGeneratorDefenceTower.prototype.addTowerPosition = function (e, t, i) {
    var n = t(i);
    return !this.isCollidingWithAnyOtherPosition(this._collisionList, n) && (this._collisionList.push(n), e.push(n), this._numberOfAddedTowers++, true);
  };
  IsoGeneratorDefenceTower.prototype.getOuterTowerPosition = function (e) {
    var t;
    switch (e.rot) {
      case 0:
        t = new s(e.pos.x + 1, e.pos.y + 1);
        break;
      case 1:
        t = new s(e.pos.x - 2, e.pos.y + 1);
        break;
      case 2:
        t = new s(e.pos.x + 1, e.pos.y - 2);
        break;
      case 3:
        t = new s(e.pos.x - 2, e.pos.y - 2);
    }
    return new o.IsoDefencePosition(t, e.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  IsoGeneratorDefenceTower.prototype.getInnerTowerPosition = function (e) {
    var t;
    switch (e.rot) {
      case 0:
        t = new s(e.pos.x + 1, e.pos.y + 1);
        break;
      case 1:
        t = new s(e.pos.x - 2, e.pos.y + 1);
        break;
      case 2:
        t = new s(e.pos.x + 1, e.pos.y - 2);
        break;
      case 3:
        t = new s(e.pos.x - 2, e.pos.y - 2);
    }
    return new o.IsoDefencePosition(t, e.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  IsoGeneratorDefenceTower.prototype.getSideTowerPosition = function (e) {
    var t;
    switch (e.rot) {
      case 0:
        t = new s(e.pos.x + 1, e.pos.y);
        break;
      case 1:
        t = new s(e.pos.x, e.pos.y + 1);
        break;
      case 2:
        t = new s(e.pos.x - 2, e.pos.y);
        break;
      case 3:
        t = new s(e.pos.x, e.pos.y - 2);
    }
    return new o.IsoDefencePosition(t, e.rot, IsoGeneratorDefenceTower.TOWER_DIMENSION);
  };
  Object.defineProperty(IsoGeneratorDefenceTower.prototype, "numberOfAddedTowers", {
    get: function () {
      return this._numberOfAddedTowers;
    },
    enumerable: true,
    configurable: true
  });
  IsoGeneratorDefenceTower.__initialize_static_members = function () {
    IsoGeneratorDefenceTower.TOWER_DIMENSION = new s(2, 2);
  };
  return IsoGeneratorDefenceTower;
}(a.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceTower = r;
r.__initialize_static_members();