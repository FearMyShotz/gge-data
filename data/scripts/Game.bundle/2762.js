Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoMovementWaypointVO(e, t, i) {
    this._spawnBuildings = [];
    this._targetBuildings = [];
    this._visitBuildings = [];
    this._spawnBuildings = e;
    this._targetBuildings = t;
    this._visitBuildings = i;
  }
  Object.defineProperty(IsoMovementWaypointVO.prototype, "spawnBuildings", {
    get: function () {
      return this._spawnBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointVO.prototype, "targetBuildings", {
    get: function () {
      return this._targetBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointVO.prototype, "visitBuildings", {
    get: function () {
      return this._visitBuildings;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWaypointVO;
}();
exports.IsoMovementWaypointVO = n;