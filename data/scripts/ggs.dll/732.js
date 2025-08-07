Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = new Map([["en_AU", "en-GB"], ["en_GB", "en-GB"], ["zh_CN_CN", "zh-Hans"], ["zh_TW_HK", "zh-Hant-HK"], ["zh_TW_TW", "zh-Hant"]]);
var a = function () {
  function LanguageVO(e, t, n = false, a = 100000, s = -1, r = true, o = true) {
    this.ggsCountryCode = e;
    this.ggsLanguageCode = t;
    this.neverUseAbbreviations = n;
    this.abbreviationThreshold = a;
    this.fractionalDigits = s;
    this.leadingZero = r;
    this.trailingZeros = o;
    var l = this.ggsLanguageCode + "_" + this.ggsCountryCode.toUpperCase();
    this._locale = i.has(l) ? i.get(l) : this.ggsLanguageCode.replace(/_\w+/g, "");
  }
  Object.defineProperty(LanguageVO.prototype, "isLanguageWrittenRightToLeft", {
    get: function () {
      return this.ggsLanguageCode === "ar";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LanguageVO.prototype, "locale", {
    get: function () {
      return this._locale;
    },
    enumerable: true,
    configurable: true
  });
  return LanguageVO;
}();
exports.LanguageVO = a;