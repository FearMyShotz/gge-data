Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function CollectableTransformVO(e = null, t = 1) {
    this._scale = 0;
    this._offset = e || new n(0, 0);
    this._scale = t;
  }
  CollectableTransformVO.prototype.clone = function () {
    return new CollectableTransformVO(new n(this._offset.x, this._offset.y), this._scale);
  };
  Object.defineProperty(CollectableTransformVO.prototype, "offset", {
    get: function () {
      return this._offset;
    },
    set: function (e) {
      this._offset = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableTransformVO.prototype, "scale", {
    get: function () {
      return this._scale;
    },
    set: function (e) {
      this._scale = e;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableTransformVO;
}();
exports.CollectableTransformVO = o;