Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./50.js");
var s = require("./41.js");
var r = function (e) {
  function NumberVO(t) {
    var n = e.call(this) || this;
    n._numberValue = "";
    n._numberValue = t;
    return n;
  }
  i.__extends(NumberVO, e);
  Object.defineProperty(NumberVO.prototype, "numberValue", {
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
  NumberVO.prototype.compose = function () {
    if (typeof this._numberValue == "number") {
      return s.Localize.numberForArabic(this._numberValue);
    } else {
      return this._numberValue;
    }
  };
  NumberVO.prototype.toString = function () {
    return NumberVO.NAME + ", numberValue: " + this._numberValue;
  };
  NumberVO.NAME = "NumberVO";
  return NumberVO;
}(a.AbstractTextContentVO);
exports.NumberVO = r;