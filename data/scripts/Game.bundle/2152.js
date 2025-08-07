Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function GlobalOfferVOAdditionalParams(e = 0, t = 0, i = 0) {
    this._cashDiscount = 0;
    this._goldDiscount = 0;
    this._typeID = 0;
    this._cashDiscount = e;
    this._goldDiscount = t;
    this._typeID = i;
  }
  Object.defineProperty(GlobalOfferVOAdditionalParams.prototype, "cashDiscount", {
    get: function () {
      return this._cashDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVOAdditionalParams.prototype, "goldDiscount", {
    get: function () {
      return this._goldDiscount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalOfferVOAdditionalParams.prototype, "typeID", {
    get: function () {
      return this._typeID;
    },
    enumerable: true,
    configurable: true
  });
  return GlobalOfferVOAdditionalParams;
}();
exports.GlobalOfferVOAdditionalParams = n;