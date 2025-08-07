Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDefencePositions() {
    this._moat = new a.IsoDefencePositionsMoat();
    this.reset();
  }
  IsoDefencePositions.prototype.reset = function () {
    this._outerCorners = this.createNewList();
    this._innerCorners = this.createNewList();
    this._sides = this.createNewList();
    this._groundCornerSides = this.createNewList();
    this._necessaryTowers = this.createNewList();
    this._emptyTowers = this.createNewList();
    this._walls = this.createNewList();
    this._gate = new o.IsoDefencePosition();
    this._moat.reset();
  };
  IsoDefencePositions.prototype.createNewList = function () {
    return [];
  };
  Object.defineProperty(IsoDefencePositions.prototype, "outerCorners", {
    get: function () {
      return this._outerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "innerCorners", {
    get: function () {
      return this._innerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "sides", {
    get: function () {
      return this._sides;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "necessaryTowers", {
    get: function () {
      return this._necessaryTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "emptyTowers", {
    get: function () {
      return this._emptyTowers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    set: function (e) {
      this._gate = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "moat", {
    get: function () {
      return this._moat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositions.prototype, "groundCornerSides", {
    get: function () {
      return this._groundCornerSides;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDefencePositions;
}();
exports.IsoDefencePositions = n;
var o = require("./451.js");
var a = require("./2736.js");