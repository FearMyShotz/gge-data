Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./1165.js");
var s = function () {
  function TextHelper() {}
  TextHelper.toUpperCaseLocaSafe = function (e) {
    var t = n.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    if (t == a.ClientConstLanguage.COUNTRY_GREECE || t == a.ClientConstLanguage.COUNTRY_GREECE2 || t == a.ClientConstLanguage.COUNTRY_TURKEY) {
      return e;
    } else {
      return (e = (e = (e = (e = (e = (e = e.replace(/&quot;/g, "\"")).replace(/&amp;/g, "&")).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&apos;/g, "'")).replace(/&nbsp;/g, "\xA0")).toUpperCase();
    }
  };
  TextHelper.toUpperCaseLocaSafeTextId = function (e, t = null) {
    return TextHelper.toUpperCaseLocaSafe(o.Localize.text(e, t));
  };
  TextHelper.getExistingTextID = function (e, t) {
    if (o.Localize.text(e) != e) {
      return e;
    } else {
      return t;
    }
  };
  return TextHelper;
}();
exports.TextHelper = s;