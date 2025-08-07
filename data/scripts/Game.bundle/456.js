Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoMovementWaypointClassesVO(e, t = null, i = null) {
    this._spawnBuildings = [];
    this._targetBuildings = [];
    this._visitBuildings = [];
    this._spawnBuildings = e;
    this._targetBuildings = t || e;
    if (i) {
      this._visitBuildings = i;
    }
  }
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "spawnBuildings", {
    get: function () {
      return this._spawnBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "targetBuildings", {
    get: function () {
      return this._targetBuildings;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementWaypointClassesVO.prototype, "visitBuildings", {
    get: function () {
      return this._visitBuildings;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementWaypointClassesVO;
}();
exports.IsoMovementWaypointClassesVO = n;