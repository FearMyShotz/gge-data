Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CircularItemDistributorProperties(e, t, i, n, o = 1, a = 0) {
    this._amountItems = 0;
    this._targetCircleRadius = 0;
    this._highlightAnimationDurationInSeconds = 0;
    this._animationDelay = 0;
    this._itemClass = e;
    this._amountItems = t;
    this._dispClassName = i;
    this._targetCircleRadius = n;
    this._highlightAnimationDurationInSeconds = o;
    this._animationDelay = a;
  }
  Object.defineProperty(CircularItemDistributorProperties.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "amountItems", {
    get: function () {
      return this._amountItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "targetCircleRadius", {
    get: function () {
      return this._targetCircleRadius;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "highlightAnimationDurationInSeconds", {
    get: function () {
      return this._highlightAnimationDurationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "animationDelay", {
    get: function () {
      return this._animationDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CircularItemDistributorProperties.prototype, "dispClassName", {
    get: function () {
      return this._dispClassName;
    },
    enumerable: true,
    configurable: true
  });
  return CircularItemDistributorProperties;
}();
exports.CircularItemDistributorProperties = n;