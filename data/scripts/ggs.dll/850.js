Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./5.js");
var a = require("./2.js");
var s = require("./29.js");
var r = a.getLogger(s.TEXT_FIELDS_LOGGER + ".BasicFontData");
var o = function () {
  function BasicFontData() {
    this.initialize();
  }
  BasicFontData.prototype.initialize = function () {
    this.initializeRuntimeLoadedFontConfigurations();
  };
  Object.defineProperty(BasicFontData.prototype, "runtimeLoadedFontsConfigurations", {
    get: function () {
      return this._runtimeLoadedFontsConfigurations;
    },
    enumerable: true,
    configurable: true
  });
  BasicFontData.prototype.getFontNameByGGSLanguageCode = function (e = "") {
    return this.env.gameTitle + "Fonts";
  };
  BasicFontData.prototype.currentLanguageRequiresRuntimeLoadedFont = function (e = "") {
    r.debug("currentLanguageRequiresRuntimeLoadedFont for ", e);
    return this.isRuntimeLoadedFont(this.getFontNameByGGSLanguageCode(e));
  };
  BasicFontData.prototype.isRuntimeLoadedFont = function (e = "") {
    if (e === "") {
      r.warn("isRuntimeLoadedFont::  Why is fontname EMPTY?? ");
      return false;
    }
    for (var t = 0, n = this._runtimeLoadedFontsConfigurations; t < n.length; t++) {
      if (e == n[t].fontName) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(BasicFontData.prototype, "env", {
    get: function () {
      return i.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicFontData;
}();
exports.BasicFontData = o;