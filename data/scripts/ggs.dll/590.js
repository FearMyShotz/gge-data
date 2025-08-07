Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = i.getLogger(a.CREATEJS_UTILITIES_LOGGER);
var r = function () {
  function TextSnapshot() {
    this.charCount = 0;
  }
  TextSnapshot.prototype.findText = function (e, t, n) {
    s.warn("TextSnapshot.findText is not implemented");
    return 0;
  };
  TextSnapshot.prototype.getSelected = function (e, t) {
    s.warn("TextSnapshot.getSelected is not implemented");
    return false;
  };
  TextSnapshot.prototype.getSelectedText = function (e = false) {
    s.warn("TextSnapshot.getSelectedTExt is not implemented");
    return "";
  };
  TextSnapshot.prototype.getText = function (e, t, n = false) {
    s.warn("TextSnapshot.getText is not implemented");
    return "";
  };
  TextSnapshot.prototype.getTextRunInfo = function (e, t) {
    s.warn("TextSnapshot.getTextRunInfo is not implemented");
    return [];
  };
  TextSnapshot.prototype.hitTestTextNearPos = function (e, t, n = 0) {
    s.warn("TextSnapshot.hitTestTextNearPos is not implemented");
    return 0;
  };
  TextSnapshot.prototype.setSelectColor = function (e = 1) {
    s.warn("TextSnapshot.setSelectColor is not implemented");
  };
  TextSnapshot.prototype.setSelected = function (e, t, n) {
    s.warn("TextSnapshot.setSelected is not implemented");
  };
  return TextSnapshot;
}();
exports.TextSnapshot = r;