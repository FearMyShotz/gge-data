Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CapturedProduction(e, t) {
    this._capturedProductionValue = 0;
    this._productionType = e;
    this._capturedProductionValue = t;
  }
  Object.defineProperty(CapturedProduction.prototype, "productionType", {
    get: function () {
      return this._productionType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CapturedProduction.prototype, "capturedProductionValue", {
    get: function () {
      return this._capturedProductionValue;
    },
    enumerable: true,
    configurable: true
  });
  CapturedProduction.__initialize_static_members = function () {
    CapturedProduction.CAPTURED_PRODUCTION = "capturedProduction";
    CapturedProduction.FOOD = "Food";
    CapturedProduction.WOOD = "Wood";
    CapturedProduction.STONE = "Stone";
    CapturedProduction.CAPTURED_PRODUCTION_TYPES = [CapturedProduction.FOOD, CapturedProduction.WOOD, CapturedProduction.STONE];
  };
  return CapturedProduction;
}();
exports.CapturedProduction = n;
n.__initialize_static_members();