Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./140.js");
var a = require("./2.js");
var s = require("./61.js");
var r = require("./16.js");
var o = a.getLogger(r.TEXT_FIELDS_LOGGER + ".TextFormat");
var l = function () {
  function TextFormat(e = TextFormat.DEFAULT_SYSTEM_FONT, t = 12, n = "#000000", a = false, s = false, r = false, o = "", l = "", u = i.TextFormatAlign.LEFT, c = 0, _ = 0, d = 0, m = 0, h = null) {
    this.font = e;
    this.size = t;
    this.color = n;
    this.bold = a;
    this.italic = s;
    this.underline = r;
    this.url = o;
    this.target = l;
    this.align = u;
    this.leftMargin = c;
    this.rightMargin = _;
    this.indent = d;
    this.leading = m;
    this.link = h;
    this.blockIndent = 0;
    this.bullet = false;
    this.kerning = false;
    this.letterSpacing = 0;
  }
  Object.defineProperty(TextFormat.prototype, "fontType", {
    get: function () {
      if (!/^_?(Body|Header)Font$/.test(this.font)) {
        o.info("forcing " + this.font + " to be  aliased to the loaded font  as _BodyFont  --> HTML-2168 ");
        this.font = s.currentBrowserInfo.isIE ? "BodyFont" : "_BodyFont";
      }
      var e = "";
      if (this.bold) {
        e += "Bold ";
      }
      if (this.italic) {
        e += "Italic ";
      }
      if (this.size != null) {
        e += this.size.toString() + "px ";
      } else {
        e += "12px ";
      }
      return e += this.font;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TextFormat.prototype, "stringColor", {
    get: function () {
      if (typeof this.color == "number") {
        return "#" + this.color;
      } else {
        return this.color;
      }
    },
    enumerable: true,
    configurable: true
  });
  return TextFormat;
}();
exports.TextFormat = l;