Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./3.js");
var a = function () {
  function TextFormatUtil() {}
  TextFormatUtil.cloneTextFormat = function (e) {
    var t = new i.TextFormat();
    t.align = e.align;
    t.blockIndent = e.blockIndent;
    t.bold = e.bold;
    t.bullet = e.bullet;
    t.color = e.color;
    t.font = e.font;
    t.indent = e.indent;
    t.indent = e.indent;
    t.italic = e.italic;
    t.kerning = e.kerning;
    t.leading = e.leading;
    t.leftMargin = e.leftMargin;
    t.letterSpacing = e.letterSpacing;
    t.rightMargin = e.rightMargin;
    t.size = e.size;
    t.tabStops = e.tabStops;
    t.target = e.target;
    t.underline = e.underline;
    t.url = e.url;
    return t;
  };
  return TextFormatUtil;
}();
exports.TextFormatUtil = a;