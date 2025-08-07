Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./3.js");
var s = function () {
  function ClientConstRealCurrency() {}
  ClientConstRealCurrency.formatShopValue = function (e, t, i) {
    return ClientConstRealCurrency.formatValue(ClientConstRealCurrency.convertShopValueToFractionalValue(e, t), t, i);
  };
  ClientConstRealCurrency.formatValue = function (e, t, i) {
    var s = new o.CurrencyFormatter(n.EnvGlobalsHandler.globals.currentCountryLanguageCode + "-" + i);
    var r = "generic_realCurrency_" + t;
    s.trailingZeros = ClientConstRealCurrency.HIDE_TRAILING_ZEROS.indexOf(t) < 0;
    s.setCurrency(t, a.Localize.hasText(r) ? a.Localize.text(r) : t);
    return s.format(e, true);
  };
  ClientConstRealCurrency.convertShopValueToFractionalValue = function (e, t) {
    var i;
    if (ClientConstRealCurrency.SPECIAL_FRACTION_DIVIDE != null) {
      for (var n = 0, o = ClientConstRealCurrency.SPECIAL_FRACTION_DIVIDE; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a[0] == t) {
          i = a;
          break;
        }
      }
    }
    return e / (i ? i[1] : 100);
  };
  ClientConstRealCurrency.SPECIAL_FRACTION_DIVIDE = [["BHD", 1000], ["IQD", 1000], ["KWD", 1000], ["LYD", 1000], ["OMR", 1000], ["TND", 1000], ["VND", 10], ["MGA", 5], ["TND", 5]];
  ClientConstRealCurrency.HIDE_TRAILING_ZEROS = ["RON", "CZK", "JPY", "KRW"];
  ClientConstRealCurrency.SUPPORTED_CURRENCIES = ["AED", "ARS", "AUD", "BGN", "BRL", "CAD", "CHF", "CLP", "COP", "CZK", "DKK", "DZD", "EGP", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "JPY", "KRW", "KZT", "LTL", "MAD", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VEF", "BAM", "BHD", "BOB", "CNY", "CRC", "DOP", "GTQ", "HRK", "JOD", "KOC", "KWD", "LBP", "LVL", "NKC", "PAB", "PEN", "PKR", "QAR", "RSD", "UYU", "VND", "ZAR", "NKC", "KOC", "JOD", "HRK", "RSD", "ZAR", "KWD", "BOB", "CNY", "CRC", "LBP", "PEN", "PKR", "QAR", "VND"];
  return ClientConstRealCurrency;
}();
exports.ClientConstRealCurrency = s;