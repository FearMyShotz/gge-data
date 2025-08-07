Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./342.js");
var a = require("./2.js");
var s = require("./29.js");
a.getLogger(s.TEXT_FIELDS_LOGGER + ".FontConfigVO");
var r = function () {
  function FontConfigVO() {
    this.debugColor = "0x00FFAA";
    this.fontStyle = FontConfigVO.FONT_STYLE_REGULAR;
    this.fontScale = 1;
    this.yOffset = 0;
  }
  FontConfigVO.prototype.initalize = function (e) {
    this.yPosOriginal = e.y;
    this.setTextFormat(e.getTextFormat());
    this.visible = e.visible;
  };
  FontConfigVO.prototype.applyYOffsetToOriginalPosition = function (e = null) {
    this._y = this._yPosOriginal + this.yOffset;
  };
  FontConfigVO.prototype.setTextFormat = function (e) {
    this._textFormat = e;
    this.fontName = this._textFormat.font;
    if (FontConfigVO.DEBUG) {
      this._textFormat.color = this.debugColor;
    }
  };
  Object.defineProperty(FontConfigVO.prototype, "textFormat", {
    get: function () {
      return this._textFormat;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.toString = function () {
    return JSON.stringify(this);
  };
  Object.defineProperty(FontConfigVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    set: function (e) {
      this._y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FontConfigVO.prototype, "yPosOriginal", {
    get: function () {
      return this._yPosOriginal;
    },
    set: function (e) {
      this._yPosOriginal = e;
      this._y = this._yPosOriginal;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.clone = function (e) {
    this._y = e.y;
    this._yPosOriginal = e.yPosOriginal;
    this.setTextFormat(i.TextFormatUtil.cloneTextFormat(e.textFormat));
    if (this.fontStyle == FontConfigVO.FONT_STYLE_BOLD) {
      this._textFormat.bold = true;
    }
  };
  Object.defineProperty(FontConfigVO.prototype, "debug", {
    get: function () {
      return FontConfigVO.DEBUG;
    },
    enumerable: true,
    configurable: true
  });
  FontConfigVO.prototype.dispose = function () {
    this._textFormat = null;
  };
  FontConfigVO.FONT_STYLE_REGULAR = 0;
  FontConfigVO.FONT_STYLE_BOLD = 1;
  return FontConfigVO;
}();
exports.FontConfigVO = r;