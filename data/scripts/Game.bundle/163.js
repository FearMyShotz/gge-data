Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LayoutMargin(e, t, i, n) {
    this._top = 0;
    this._bottom = 0;
    this._left = 0;
    this._right = 0;
    this._top = e;
    this._bottom = t;
    this._left = i;
    this._right = n;
  }
  Object.defineProperty(LayoutMargin.prototype, "top", {
    get: function () {
      return this._top;
    },
    set: function (e) {
      this._top = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayoutMargin.prototype, "bottom", {
    get: function () {
      return this._bottom;
    },
    set: function (e) {
      this._bottom = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayoutMargin.prototype, "left", {
    get: function () {
      return this._left;
    },
    set: function (e) {
      this._left = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LayoutMargin.prototype, "right", {
    get: function () {
      return this._right;
    },
    set: function (e) {
      this._right = e;
    },
    enumerable: true,
    configurable: true
  });
  return LayoutMargin;
}();
exports.LayoutMargin = n;