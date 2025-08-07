Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DecoStorageUniqueDecoVO() {
    this._wodId = -1;
    this._uniqueId = -1;
    this._fusionXP = 0;
    this._isNew = false;
  }
  DecoStorageUniqueDecoVO.prototype.parseData = function (e) {
    var t = e;
    if (t) {
      this._wodId = o.int(t[0]);
      this._uniqueId = o.int(t[1]);
      this._fusionXP = o.int(t[2]);
      this._isNew = t[3] == 1;
    }
  };
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "uniqueId", {
    get: function () {
      return this._uniqueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "fusionXP", {
    get: function () {
      return this._fusionXP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageUniqueDecoVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (e) {
      this._isNew = e;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageUniqueDecoVO;
}();
exports.DecoStorageUniqueDecoVO = n;
var o = require("./6.js");