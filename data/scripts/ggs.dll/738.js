Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function TextVO(t) {
    var n = e.call(this) || this;
    n._stringValue = t;
    return n;
  }
  i.__extends(TextVO, e);
  Object.defineProperty(TextVO.prototype, "stringValue", {
    get: function () {
      return this._stringValue;
    },
    set: function (e) {
      this._stringValue = e;
      this.propertyChangedSignal.dispatch();
    },
    enumerable: true,
    configurable: true
  });
  TextVO.prototype.compose = function () {
    return this._stringValue;
  };
  TextVO.prototype.toString = function () {
    return TextVO.NAME + ", stringValue: " + this._stringValue;
  };
  TextVO.NAME = "TextVO";
  return TextVO;
}(require("./50.js").AbstractTextContentVO);
exports.TextVO = a;