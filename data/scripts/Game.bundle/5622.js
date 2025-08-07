Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function DecoStorageCustomDecoVO() {
    this._wodId = -1;
    this._customId = -1;
    this._decoValue = 0;
    this._isNew = false;
  }
  DecoStorageCustomDecoVO.prototype.parseData = function (e) {
    var t = e;
    if (t) {
      this._wodId = n.int(t[0]);
      this._customId = n.int(t[1]);
      this._decoValue = n.int(t[2]);
      this._isNew = t[3] == 1;
    }
  };
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "customId", {
    get: function () {
      return this._customId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "decoValue", {
    get: function () {
      return this._decoValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageCustomDecoVO.prototype, "isNew", {
    get: function () {
      return this._isNew;
    },
    set: function (e) {
      this._isNew = e;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageCustomDecoVO;
}();
exports.DecoStorageCustomDecoVO = o;