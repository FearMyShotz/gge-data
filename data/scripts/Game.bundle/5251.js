Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoDataGridTile() {
    this._hasGround = false;
    this._objectId = -1;
    this._isWalkable = true;
    this._isSpawnPoint = false;
  }
  IsoDataGridTile.prototype.reset = function () {
    this._hasGround = false;
    this._objectId = -1;
    this._isWalkable = true;
    this._isSpawnPoint = false;
  };
  Object.defineProperty(IsoDataGridTile.prototype, "hasGround", {
    get: function () {
      return this._hasGround;
    },
    set: function (e) {
      this._hasGround = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (e) {
      this._objectId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "isWalkable", {
    get: function () {
      return this._isWalkable;
    },
    set: function (e) {
      this._isWalkable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridTile.prototype, "isSpawnPoint", {
    get: function () {
      return this._isSpawnPoint;
    },
    set: function (e) {
      this._isSpawnPoint = e;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGridTile;
}();
exports.IsoDataGridTile = n;