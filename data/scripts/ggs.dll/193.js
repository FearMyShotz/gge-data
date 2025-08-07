Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Point;
var a = function () {
  function LayerInfo(e, t, n, a, s, r = 0) {
    this._position = new i(e, t);
    this._scale = n;
    this._index = a;
    this._layerName = s;
    this._rotation = r;
  }
  Object.defineProperty(LayerInfo.prototype, "layerName", {
    get: function () {
      return this._layerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "position", {
    get: function () {
      return this._position;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "scale", {
    get: function () {
      return this._scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayerInfo.prototype, "rotation", {
    get: function () {
      return this._rotation;
    },
    enumerable: true,
    configurable: true
  });
  return LayerInfo;
}();
exports.LayerInfo = a;