Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DynamicTopXVO(e, t, i = []) {
    this._topX = [];
    this._eventId = e;
    this._leagueTypeID = t;
    this._topX = i;
  }
  Object.defineProperty(DynamicTopXVO.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicTopXVO.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicTopXVO.prototype, "topX", {
    get: function () {
      return this._topX;
    },
    enumerable: true,
    configurable: true
  });
  return DynamicTopXVO;
}();
exports.DynamicTopXVO = n;