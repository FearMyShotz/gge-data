Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleHardCurrencyHelper() {}
  CastleHardCurrencyHelper.initCurrencyTextIDs = function () {
    var e = new Map();
    var t = new l.CastleCurrencyVO("currency_euro", 1);
    e.set(a.ClientConstLanguage.COUNTRY_GERMANY, t);
    e.set(a.ClientConstLanguage.COUNTRY_FRANCE, t);
    e.set(a.ClientConstLanguage.COUNTRY_PORTUGAL, t);
    e.set(a.ClientConstLanguage.COUNTRY_ITALY, t);
    e.set(a.ClientConstLanguage.COUNTRY_GREECE, t);
    e.set(a.ClientConstLanguage.COUNTRY_FINNLAND, t);
    e.set(a.ClientConstLanguage.COUNTRY_NETHERLANDS, t);
    e.set(a.ClientConstLanguage.COUNTRY_SLOVAKIA, t);
    e.set(a.ClientConstLanguage.COUNTRY_ENGLAND, new l.CastleCurrencyVO("currency_britishPound", 1));
    e.set(a.ClientConstLanguage.COUNTRY_USA, new l.CastleCurrencyVO("currency_dollar", 1));
    e.set(a.ClientConstLanguage.COUNTRY_CZECHIA, new l.CastleCurrencyVO("currency_czechKoruna", 25));
    e.set(a.ClientConstLanguage.COUNTRY_POLAND, new l.CastleCurrencyVO("currency_zloty", 4));
    e.set(a.ClientConstLanguage.COUNTRY_BRASIL, new l.CastleCurrencyVO("currency_brazilianReal", 1));
    e.set(a.ClientConstLanguage.COUNTRY_HUNGARY, new l.CastleCurrencyVO("currency_hungarianForint", 300));
    e.set(a.ClientConstLanguage.COUNTRY_ROMANIA, new l.CastleCurrencyVO("currency_romanianLeu", 5));
    e.set(a.ClientConstLanguage.COUNTRY_DENMARK, new l.CastleCurrencyVO("currency_danishKrone", 7.5));
    e.set(a.ClientConstLanguage.COUNTRY_TURKEY, new l.CastleCurrencyVO("currency_turkishLira", 3));
    e.set(a.ClientConstLanguage.COUNTRY_RUSSIA, new l.CastleCurrencyVO("currency_ruble", 50));
    e.set(a.ClientConstLanguage.COUNTRY_JAPAN, new l.CastleCurrencyVO("currency_japaneseYen", 150));
    e.set("default", new l.CastleCurrencyVO(r.ClientConstTextIds.C2, CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR));
    return e;
  };
  Object.defineProperty(CastleHardCurrencyHelper, "currencyFactor", {
    get: function () {
      var e = o.GGSCountryController.instance.currentCountry.ggsCountryCode.toLowerCase();
      return CastleHardCurrencyHelper.getCurrencyVOOrDefault(e).currencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHardCurrencyHelper, "currencyTextID", {
    get: function () {
      var e = o.GGSCountryController.instance.currentCountry.ggsCountryCode.toLowerCase();
      return CastleHardCurrencyHelper.getCurrencyVOOrDefault(e).textID;
    },
    enumerable: true,
    configurable: true
  });
  CastleHardCurrencyHelper.getCurrencyVOOrDefault = function (e) {
    var t = CastleHardCurrencyHelper.CURRENCY_TEXT_IDS.get(e.toLowerCase());
    if (t == null) {
      t = CastleHardCurrencyHelper.CURRENCY_TEXT_IDS.get("default");
    }
    return t;
  };
  CastleHardCurrencyHelper.shownCurrencyValueForPO = function (e) {
    var t;
    var i = e.getDescriptionByName(s.ClientConstOffer.VISUAL_COMPONENT_CONTAINER);
    if (i) {
      t = i.visuals.get(s.ClientConstOffer.OFFER_VISUAL_EURO_AMOUNT);
    }
    if (t) {
      var n = t.euroAmount;
      if (n) {
        return n * CastleHardCurrencyHelper.currencyFactor;
      }
    }
    return CastleHardCurrencyHelper.NO_CLUE_WHY_MAGIC_VALUE;
  };
  CastleHardCurrencyHelper.__initialize_static_members = function () {
    CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR = 1500;
    CastleHardCurrencyHelper.CURRENCY_TEXT_IDS = CastleHardCurrencyHelper.initCurrencyTextIDs();
    CastleHardCurrencyHelper.NO_CLUE_WHY_MAGIC_VALUE = 13;
  };
  return CastleHardCurrencyHelper;
}();
exports.CastleHardCurrencyHelper = n;
var o = require("./2.js");
var a = require("./1165.js");
var s = require("./60.js");
var r = require("./39.js");
var l = require("./3604.js");
n.__initialize_static_members();