Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./142.js");
var a = require("./2.js");
var s = require("./16.js");
var r = a.getLogger(s.CREATEJS_UTILITIES_LOGGER + ".StyleSheet");
var o = function () {
  function StyleSheet() {
    this._styleNames = [];
  }
  Object.defineProperty(StyleSheet.prototype, "styleNames", {
    get: function () {
      return this._styleNames;
    },
    enumerable: true,
    configurable: true
  });
  StyleSheet.prototype.clear = function () {
    this._styleNames = [];
  };
  StyleSheet.prototype.getStyle = function (e) {
    for (var t = 0, n = Array.from(this._styleNames.keys()); t < n.length; t++) {
      var i = n[t];
      if (i.toString() == e) {
        return this._styles[i];
      }
    }
    return null;
  };
  StyleSheet.prototype.parseCSS = function (e) {
    r.debug("parseCSS  it's just mock-up function, if html text should be formatted in the textfield, this function has to be implemented");
  };
  StyleSheet.prototype.setStyle = function (e, t) {
    this._styleNames.push(e);
    this._styles.set(e, t);
  };
  StyleSheet.prototype.transform = function (e) {
    r.debug("for now it's just mock-up function, if html text should be formatted in the textfield, this function has to be implemented");
    return new i.TextFormat();
  };
  return StyleSheet;
}();
exports.StyleSheet = o;