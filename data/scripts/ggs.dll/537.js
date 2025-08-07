Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./223.js");
var a = function () {
  function StringBuffer(e = "") {
    this._string = e ? [e] : [];
  }
  StringBuffer.prototype.append = function (e) {
    this._string.push(e);
    return this;
  };
  StringBuffer.prototype.removeEnd = function (e) {
    this._string = [i.StringUtils.removeEnd(this.toString(), "" + e)];
    return this;
  };
  StringBuffer.prototype.toString = function () {
    return this._string.join("");
  };
  return StringBuffer;
}();
exports.StringBuffer = a;