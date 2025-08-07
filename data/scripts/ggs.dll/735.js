Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./41.js");
var s = function (e) {
  function LocalizedTextVO(t = null, n = null, i = true) {
    var a = e.call(this) || this;
    a._groupNumber = false;
    a._textId = t;
    a._textReplacements = n;
    a._groupNumber = i;
    return a;
  }
  i.__extends(LocalizedTextVO, e);
  Object.defineProperty(LocalizedTextVO.prototype, "textId", {
    get: function () {
      return this._textId;
    },
    set: function (e) {
      this._textId = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTextVO.prototype, "textReplacements", {
    get: function () {
      return this._textReplacements;
    },
    set: function (e) {
      this._textReplacements = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LocalizedTextVO.prototype, "groupNumber", {
    get: function () {
      return this._groupNumber;
    },
    set: function (e) {
      this._groupNumber = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  LocalizedTextVO.prototype.compose = function () {
    return a.Localize.text(this._textId, this._textReplacements, this._groupNumber);
  };
  LocalizedTextVO.prototype.toString = function () {
    return LocalizedTextVO.NAME + ", textId: " + this._textId + ", textReplacements: " + this._textReplacements + ", groupNumber: " + this._groupNumber;
  };
  LocalizedTextVO.NAME = "LocalizedTextVO";
  return LocalizedTextVO;
}(require("./50.js").AbstractTextContentVO);
exports.LocalizedTextVO = s;