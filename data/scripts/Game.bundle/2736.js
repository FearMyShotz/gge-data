Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDefencePositionsMoat() {}
  IsoDefencePositionsMoat.prototype.reset = function () {
    this._walls = this.createNewList();
    this._outerCorners = this.createNewList();
    this._innerCorners = this.createNewList();
    this._gate = new o.IsoDefencePosition();
  };
  IsoDefencePositionsMoat.prototype.createNewList = function () {
    return [];
  };
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "gate", {
    get: function () {
      return this._gate;
    },
    set: function (e) {
      this._gate = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "innerCorners", {
    get: function () {
      return this._innerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "outerCorners", {
    get: function () {
      return this._outerCorners;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePositionsMoat.prototype, "walls", {
    get: function () {
      return this._walls;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDefencePositionsMoat;
}();
exports.IsoDefencePositionsMoat = n;
var o = require("./451.js");