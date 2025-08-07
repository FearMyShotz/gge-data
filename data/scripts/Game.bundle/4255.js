Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LevelUpPriceVO() {
    this._fromLevel = 0;
    this._toLevel = 0;
    this._c2Cost = 0;
  }
  LevelUpPriceVO.prototype.parseXML = function (e) {
    this._fromLevel = parseInt(e.fromLevel || "");
    this._toLevel = parseInt(e.toLevel || "");
    this._c2Cost = parseInt(e.c2Cost || "");
  };
  Object.defineProperty(LevelUpPriceVO.prototype, "fromLevel", {
    get: function () {
      return this._fromLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LevelUpPriceVO.prototype, "toLevel", {
    get: function () {
      return this._toLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LevelUpPriceVO.prototype, "c2Cost", {
    get: function () {
      return this._c2Cost;
    },
    enumerable: true,
    configurable: true
  });
  return LevelUpPriceVO;
}();
exports.LevelUpPriceVO = n;