Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./157.js");
var a = require("./97.js");
var s = require("./2.js").getLogger("LocalizationJS.Localize");
var r = function () {
  function Localize() {}
  Localize.setService = function (e) {
    if (Localize._service != null) {
      s.warn("LocalizeService was already setup - it is going to be overridden!");
    }
    Localize._service = e;
  };
  Localize.text = function (e, t = null, n = true) {
    Localize.assertModuleIsInstalled();
    return Localize._service.text(e, t, n);
  };
  Localize.hasText = function (e) {
    Localize.assertModuleIsInstalled();
    return Localize._service.hasText(e);
  };
  Localize.number = function (e, t = false, n = -1, i = false, a = true) {
    Localize.assertModuleIsInstalled();
    return Localize._service.number(e, t, n, i, a);
  };
  Localize.integer = function (e) {
    Localize.assertModuleIsInstalled();
    return Localize._service.integer(e);
  };
  Localize.decimal = function (e) {
    Localize.assertModuleIsInstalled();
    return Localize._service.decimal(e);
  };
  Localize.datetime = function (e, t = a.DateTimeStyle.SHORT, n = a.DateTimeStyle.SHORT) {
    Localize.assertModuleIsInstalled();
    return Localize._service.datetime(e, t, n);
  };
  Localize.time = function (e, t = 2, n = true, i = null) {
    Localize.assertModuleIsInstalled();
    return Localize._service.time(e, t, n, i);
  };
  Localize.digitalClock = function (e) {
    return Localize._service.digitalClock(e);
  };
  Localize.numberForArabic = function (e) {
    return Localize._service.numberForArabic(e);
  };
  Localize.timeCustom = function (e, t, n = null) {
    Localize.assertModuleIsInstalled();
    return Localize._service.timeCustom(e, t, n);
  };
  Localize.htmlText = function (e) {
    Localize.assertModuleIsInstalled();
    return Localize._service.htmlText(e);
  };
  Localize.updateCurrencyFormatter = function (e, t) {
    Localize._service.updateCurrencyFormatter(e, t);
  };
  Localize.formatCurrency = function (e, t = false) {
    return Localize._service.formatCurrency(e, t);
  };
  Localize.assertModuleIsInstalled = function () {
    if (Localize._service == null) {
      throw new i.LocalizationModuleError(Localize.MESSAGE_LOCALIZE_SERVICE_NOT_ASSIGNED, Localize.CODE_LOCALIZE_SERVICE_NOT_ASSIGNED);
    }
  };
  Localize.CODE_LOCALIZE_SERVICE_NOT_ASSIGNED = "001";
  Localize.MESSAGE_LOCALIZE_SERVICE_NOT_ASSIGNED = "Localize Service was not assigned to Static Localize Helper (use setService to do so)";
  return Localize;
}();
exports.Localize = r;