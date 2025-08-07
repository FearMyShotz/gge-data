Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = function () {
  function DecoStorageRegularDecoVO() {
    this._wodId = -1;
    this._amount = 0;
    this._newAmount = 0;
    this._localStorageAmount = 0;
  }
  DecoStorageRegularDecoVO.prototype.parseData = function (e) {
    var t = e;
    if (t) {
      this._wodId = n.int(t[0]);
      this._amount = n.int(t[1]);
      this._newAmount = n.int(t[2]);
    }
  };
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    set: function (e) {
      this._amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "newAmount", {
    get: function () {
      return this._newAmount;
    },
    set: function (e) {
      this._newAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecoStorageRegularDecoVO.prototype, "localStorageAmount", {
    get: function () {
      return this._localStorageAmount;
    },
    set: function (e) {
      this._localStorageAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  return DecoStorageRegularDecoVO;
}();
exports.DecoStorageRegularDecoVO = o;