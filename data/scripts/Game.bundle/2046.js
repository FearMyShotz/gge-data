Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoColorVO(e, t, i) {
    this._backgroundColor = 0;
    this._shadowColor = 0;
    this._buildingGroundColor = 0;
    this._backgroundColor = e;
    this._shadowColor = t;
    this._buildingGroundColor = i;
  }
  Object.defineProperty(IsoColorVO.prototype, "backgroundColor", {
    get: function () {
      return this._backgroundColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoColorVO.prototype, "shadowColor", {
    get: function () {
      return this._shadowColor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoColorVO.prototype, "buildingGroundColor", {
    get: function () {
      return this._buildingGroundColor;
    },
    enumerable: true,
    configurable: true
  });
  return IsoColorVO;
}();
exports.IsoColorVO = n;