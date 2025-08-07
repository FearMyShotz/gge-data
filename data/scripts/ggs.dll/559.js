var e = require("./24.js");
var i = require("./47.js");
var a = require("./560.js").formatLocale;
exports.locale2 = function (t) {
  return a(function getLocale(t) {
    return t || (e.chrome && e.chrome.runtime && typeof e.chrome.runtime.getManifest == "function" && (t = e.chrome.runtime.getManifest()) && t.current_locale ? t.current_locale : !(t = e.navigator && (e.navigator.languages && e.navigator.languages[0] || e.navigator.language || e.navigator.userLanguage)) && e.navigator && e.navigator.userAgent && (t = e.navigator.userAgent.match(/;.(\w+-\w+)/i)) ? t[1] : (t ||= (e.clientInformation || Object.create(null)).language, t || (e.Intl && typeof e.Intl.DateTimeFormat == "function" && (t = e.Intl.DateTimeFormat().resolvedOptions && e.Intl.DateTimeFormat().resolvedOptions().locale), t || !["LANG", "LANGUAGE"].some(Object.hasOwnProperty, i.env)) ? t : (i.env.LANG || i.env.LANGUAGE || String()).replace(/[.:].*/, "").replace("_", "-")));
  }(t));
};