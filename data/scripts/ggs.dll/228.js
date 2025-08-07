Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./138.js");
var a = require("./2.js");
var s = require("./16.js");
var r = require("./61.js");
var o = a.getLogger(s.CREATEJS_UTILITIES_LOGGER + ".Clipboard");
var l = function () {
  function Clipboard() {
    this._textElement = document.createElement("textarea");
    this._textElement.id = Clipboard.SURROGATE;
    this._textElement.style.fontSize = "12pt";
    this._textElement.style.border = "0";
    this._textElement.style.padding = "0";
    this._textElement.style.margin = "0";
    this._textElement.style.position = "absolute";
    this._textElement.style.right = "-9999px";
    this._textElement.style.display = "none";
    var e = window.pageYOffset || document.documentElement.scrollTop;
    this._textElement.style.top = e + "px";
    this._textElementInitStyle = r.currentBrowserInfo.isIE ? "inline" : "initial";
    this._textElement.setAttribute("readonly", "");
    document.body.appendChild(this._textElement);
  }
  Object.defineProperty(Clipboard, "generalClipboard", {
    get: function () {
      this._clipboard ||= new Clipboard();
      return this._clipboard;
    },
    set: function (e) {
      throw new TypeError("generalClipboard is readonly");
    },
    enumerable: true,
    configurable: true
  });
  Clipboard.prototype.setData = function (e, t, n = true) {
    this._textElement.style.display = this._textElementInitStyle;
    this._data = t;
    this._textElement.value = t;
    this._textElement.select();
    var i = this.execCopy();
    this._textElement.style.display = "none";
    return i;
  };
  Clipboard.prototype.getData = function (e) {
    return this._data;
  };
  Clipboard.prototype.clear = function () {
    this.setData(i.ClipboardFormats.TEXT_FORMAT, "");
  };
  Clipboard.prototype.execCopy = function () {
    try {
      return document.execCommand("copy");
    } catch (e) {
      o.error("execCommand copy failed", e.message);
      return false;
    }
  };
  Clipboard.SURROGATE = "clipboardSurrogateTextArea";
  return Clipboard;
}();
exports.Clipboard = l;