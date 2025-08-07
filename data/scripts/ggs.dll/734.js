Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./41.js");
var s = function (e) {
  function LocalizedNumberVO(t = NaN, n = false, i = 0, a = false) {
    var s = e.call(this) || this;
    s._numberValue = NaN;
    s._compact = false;
    s._fractionalDigits = 0;
    s._isRTL = false;
    s._numberValue = t;
    s._compact = n;
    s._fractionalDigits = i;
    s._isRTL = a;
    return s;
  }
  i.__extends(LocalizedNumberVO, e);
  Object.defineProperty(LocalizedNumberVO.prototype, "numberValue", {
    get: function () {
      return this._numberValue;
    },
    set: function (e) {
      this._numberValue = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "compact", {
    get: function () {
      return this._compact;
    },
    set: function (e) {
      this._compact = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "fractionalDigits", {
    get: function () {
      return this._fractionalDigits;
    },
    set: function (e) {
      this._fractionalDigits = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedNumberVO.prototype, "isRTL", {
    get: function () {
      return this._isRTL;
    },
    set: function (e) {
      this._isRTL = e;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedNumberVO.prototype.compose = function () {
    return a.Localize.number(this._numberValue, this._compact, this._fractionalDigits, this._isRTL);
  };
  LocalizedNumberVO.prototype.toString = function () {
    return LocalizedNumberVO.NAME + ", numberValue: " + this._numberValue + ", compact: " + this._compact + ", fractionalDigits: " + this._fractionalDigits + ", isRTL: " + this._isRTL;
  };
  LocalizedNumberVO.NAME = "LocalizedNumberVO";
  return LocalizedNumberVO;
}(require("./50.js").AbstractTextContentVO);
exports.LocalizedNumberVO = s;