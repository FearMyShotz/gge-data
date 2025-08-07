Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PremiumFestivalItemVO(e, t, i, n, o, a, s, r, l) {
    this.minLevel = 0;
    this.maxLevel = 0;
    this.foodCost = 0;
    this.c2Cost = 0;
    this.durationInSeconds = 0;
    this.boost = 0;
    this.sortOrder = 0;
    this.id = 0;
    this.id = e;
    this.minLevel = t;
    this.maxLevel = i;
    this.durationInSeconds = n;
    this.boost = o;
    this.foodCost = a;
    this.c2Cost = s;
    this.type = r;
    this.sortOrder = l;
  }
  Object.defineProperty(PremiumFestivalItemVO.prototype, "cost", {
    get: function () {
      if (this.foodCost > 0) {
        return this.foodCost;
      } else {
        return this.c2Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  PremiumFestivalItemVO.prototype.hasC2Costs = function () {
    return this.c2Cost > 0;
  };
  Object.defineProperty(PremiumFestivalItemVO.prototype, "assetName", {
    get: function () {
      return "Festival_Top_" + this.assetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumFestivalItemVO.prototype, "assetID", {
    get: function () {
      return this.id % 6;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumFestivalItemVO.prototype, "nameTextID", {
    get: function () {
      return "dialog_festival_" + this.type + "Event";
    },
    enumerable: true,
    configurable: true
  });
  return PremiumFestivalItemVO;
}();
exports.PremiumFestivalItemVO = n;