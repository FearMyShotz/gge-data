Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./41.js");
var s = require("./50.js");
var r = require("./97.js");
var o = function (e) {
  function LocalizedDateTimeVO(t = null, n = null, i = null) {
    var a = e.call(this) || this;
    a._date = t || new Date();
    a._dateStyle = n || r.DateTimeStyle.SHORT;
    a._timeStyle = i || a._dateStyle;
    return a;
  }
  i.__extends(LocalizedDateTimeVO, e);
  Object.defineProperty(LocalizedDateTimeVO.prototype, "date", {
    get: function () {
      return this._date;
    },
    set: function (e) {
      this._date = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "pattern", {
    get: function () {
      return this._pattern;
    },
    set: function (e) {
      this._pattern = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "dateStyle", {
    get: function () {
      return this._dateStyle;
    },
    set: function (e) {
      this._dateStyle = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedDateTimeVO.prototype, "timeStyle", {
    get: function () {
      return this._timeStyle;
    },
    set: function (e) {
      this._timeStyle = e;
    },
    enumerable: true,
    configurable: true
  });
  LocalizedDateTimeVO.prototype.compose = function () {
    return a.Localize.datetime(this._date, this._dateStyle, this._timeStyle);
  };
  LocalizedDateTimeVO.prototype.toString = function () {
    return LocalizedDateTimeVO.NAME + ", current date: " + this._date + ", date style: " + this._dateStyle + ", date pattern: " + this._pattern;
  };
  LocalizedDateTimeVO.NAME = "LocalizedDateTimeVO";
  return LocalizedDateTimeVO;
}(s.AbstractTextContentVO);
exports.LocalizedDateTimeVO = o;