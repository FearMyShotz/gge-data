Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDefencePosition(e = null, t = -1, i = null, n = null) {
    this._rot = -1;
    this._pos = e;
    this._rot = t;
    this._dimension = i;
    this._collisionPos = n;
  }
  IsoDefencePosition.prototype.collidesWith = function (e) {
    var t = this.collisionPos ? this.collisionPos : this.pos;
    var i = e.collisionPos ? e.collisionPos : e.pos;
    return t.x < i.x + e.dimension.x && t.x + this.dimension.x > i.x && t.y < i.y + e.dimension.y && t.y + this.dimension.y > i.y;
  };
  Object.defineProperty(IsoDefencePosition.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (e) {
      this._pos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "dimension", {
    get: function () {
      return this._dimension;
    },
    set: function (e) {
      this._dimension = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "rot", {
    get: function () {
      return this._rot;
    },
    set: function (e) {
      this._rot = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDefencePosition.prototype, "collisionPos", {
    get: function () {
      return this._collisionPos;
    },
    set: function (e) {
      this._collisionPos = e;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDefencePosition;
}();
exports.IsoDefencePosition = n;