Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./41.js");
var s = i.getLogger("LocalizationJS.CurrencyFormatter");
var r = function () {
  function CurrencyFormatter(e) {
    this.requestedLocaleIDName = e;
    CurrencyFormatter.localize ||= a.Localize;
  }
  Object.defineProperty(CurrencyFormatter.prototype, "currencyISOCode", {
    get: function () {
      return this._currencyISOCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CurrencyFormatter.prototype, "currencySymbol", {
    get: function () {
      return this._currencySymbol;
    },
    enumerable: true,
    configurable: true
  });
  CurrencyFormatter.prototype.format = function (e, t = false) {
    return CurrencyFormatter.localize.formatCurrency(e, t);
  };
  CurrencyFormatter.prototype.setCurrency = function (e, t) {
    this._currencyISOCode = e;
    this._currencySymbol = t;
    CurrencyFormatter.localize.updateCurrencyFormatter(e, t);
  };
  CurrencyFormatter.prototype.formattingWithCurrencySymbolIsSafe = function (e) {
    s.warn("formattingWithCurrencySymbolIsSafe is not surpported");
    return false;
  };
  CurrencyFormatter.prototype.getAvailableLocaleIDNames = function () {
    s.warn("getAvailableLocaleIDNames is not surpported");
    return [];
  };
  CurrencyFormatter.prototype.parse = function (e) {
    s.warn("parse is not supported");
    return {
      currencyString: "",
      value: 0
    };
  };
  CurrencyFormatter.localize = null;
  return CurrencyFormatter;
}();
exports.CurrencyFormatter = r;