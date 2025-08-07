Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DungeonVO(e, t, i) {
    this._skipCosts = 0;
    this._victoryCount = 0;
    this._kingdomID = 0;
    this._kingdomID = e;
    this._skipCosts = i;
    this._victoryCount = t;
  }
  Object.defineProperty(DungeonVO.prototype, "skipCosts", {
    get: function () {
      return this._skipCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  return DungeonVO;
}();
exports.DungeonVO = n;