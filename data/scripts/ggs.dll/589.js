Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Font(e, t, n) {
    this.isLoaded = false;
    this._fontName = e;
    this._fontStyle = t;
    this._fontType = n;
  }
  Font.prototype.hasGlyphs = function (e) {
    return true;
  };
  Object.defineProperty(Font.prototype, "fontType", {
    get: function () {
      return this._fontType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Font.prototype, "fontStyle", {
    get: function () {
      return this._fontStyle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Font.prototype, "fontName", {
    get: function () {
      return this._fontName;
    },
    enumerable: true,
    configurable: true
  });
  return Font;
}();
exports.Font = i;