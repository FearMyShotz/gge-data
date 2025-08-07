Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./41.js");
var s = function (e) {
  function LocalizedTimeVO(t = 0, n = 2, i = true, a = null) {
    var s = e.call(this) || this;
    s._seconds = NaN;
    s._leadingZero = false;
    s._trim = 0;
    s._seconds = t;
    s._trim = n;
    s._leadingZero = i;
    s._templatesSet = a;
    return s;
  }
  i.__extends(LocalizedTimeVO, e);
  Object.defineProperty(LocalizedTimeVO.prototype, "seconds", {
    get: function () {
      return this._seconds;
    },
    set: function (e) {
      this._seconds = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTimeVO.prototype, "leadingZero", {
    get: function () {
      return this._leadingZero;
    },
    set: function (e) {
      this._leadingZero = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTimeVO.prototype, "trim", {
    get: function () {
      return this._trim;
    },
    set: function (e) {
      this._trim = e;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTimeVO.prototype.compose = function () {
    return a.Localize.time(this._seconds, this._trim, this._leadingZero, this._templatesSet);
  };
  LocalizedTimeVO.prototype.toString = function () {
    return LocalizedTimeVO.NAME + ", seconds: " + this._seconds + ", trim: " + this._trim + ", leadingZero: " + this._leadingZero;
  };
  Object.defineProperty(LocalizedTimeVO.prototype, "templatesSet", {
    get: function () {
      return this._templatesSet;
    },
    set: function (e) {
      this._templatesSet = e;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTimeVO.NAME = "LocalizedTimeVO";
  return LocalizedTimeVO;
}(require("./50.js").AbstractTextContentVO);
exports.LocalizedTimeVO = s;