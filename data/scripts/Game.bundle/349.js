Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./163.js");
var a = function () {
  function MovieClipLayoutable(e, t = null) {
    this._isLayoutEnabled = true;
    this._customHeight = -1;
    this._disp = e;
    this._margin = t || new o.LayoutMargin(0, 0, 0, 0);
  }
  Object.defineProperty(MovieClipLayoutable.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "isLayoutEnabled", {
    get: function () {
      return this._isLayoutEnabled && this._disp.visible;
    },
    set: function (e) {
      this._isLayoutEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "height", {
    get: function () {
      if (this._customHeight > -1) {
        return this._customHeight;
      } else {
        return this._disp.height;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "width", {
    get: function () {
      return this._disp.width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "margin", {
    get: function () {
      return this._margin;
    },
    set: function (e) {
      this._margin = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MovieClipLayoutable.prototype, "customHeight", {
    get: function () {
      return this._customHeight;
    },
    set: function (e) {
      this._customHeight = e;
    },
    enumerable: true,
    configurable: true
  });
  return MovieClipLayoutable;
}();
exports.MovieClipLayoutable = a;
n.classImplementsInterfaces(a, "ILayoutable");