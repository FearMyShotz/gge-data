Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleTextFieldHelper() {}
  CastleTextFieldHelper.safeSetText = function (e, t, i = null) {
    if (!o.instanceOfClass(e.textContentVO, "LocalizedTextVO")) {
      e.textContentVO = new s.LocalizedTextVO("");
    }
    e.textContentVO.textId = t;
    if (i != null) {
      e.textContentVO.textReplacements = i;
    }
  };
  CastleTextFieldHelper.safeSetNumber = function (e, t, i = false, n = 0, s = false) {
    if (o.instanceOfClass(e.textContentVO, "LocalizedNumberVO")) {
      e.textContentVO.numberValue = t;
    } else {
      e.textContentVO = new a.LocalizedNumberVO(t, i, n, s);
    }
  };
  CastleTextFieldHelper.restoreWidth = function (e) {
    if (e.width < e.textWidth) {
      var t = e.width;
      e.width = e.textWidth;
      var i = e.textWidth - t;
      e.x -= i / 2;
    }
  };
  CastleTextFieldHelper.removeInputFocus = function () {
    document.activeElement.blur();
  };
  return CastleTextFieldHelper;
}();
exports.CastleTextFieldHelper = n;
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");