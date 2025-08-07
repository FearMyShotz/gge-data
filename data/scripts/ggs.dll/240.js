Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./144.js");
function getFontFamily(e, t) {
  var n = e && e.font || i.FALLBACK_TEXT_FONT;
  if (t) {
    if (t.fontOverwrites.has(n)) {
      n = t.fontOverwrites.get(n);
    }
    if (!t.allowedFonts.has(n)) {
      n = t.fallbackFont;
    }
  }
  return n;
}
exports.applyFormat = function applyFormat(e, t, n) {
  try {
    var a = typeof t.color == "string" ? t.color : i.FALLBACK_TEXT_COLOR;
    e.fillStyle = a;
    var s = function getFontString(e, t) {
      var n = e && e.size || i.FALLBACK_TEXT_SIZE;
      var a = getFontFamily(e, t);
      return (e && e.italic ? "italic " : "") + (e && e.bold ? "bold " : "") + n + "px " + a;
    }(t, n);
    e.font = s;
  } catch (e) {
    console.warn("Was unable to apply the format of this textfield", e);
  }
};
exports.getFontFamily = getFontFamily;