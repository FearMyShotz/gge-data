Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function RawWorldmapDecoVO(e, t, i, n) {
    this._decoId = -1;
    this._width = 0;
    this._height = 0;
    this._decoId = e;
    this._type = t;
    this._width = i;
    this._height = n;
  }
  Object.defineProperty(RawWorldmapDecoVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RawWorldmapDecoVO.prototype, "decoId", {
    get: function () {
      return this._decoId;
    },
    enumerable: true,
    configurable: true
  });
  return RawWorldmapDecoVO;
}();
exports.RawWorldmapDecoVO = n;