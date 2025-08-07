Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = ["ar", "bg", "el", "ja", "ko", "ru", "zh_CN", "zh_TW"];
exports.fontConfigResolver = function () {
  var e = n.GGSCountryController.instance.currentCountry.ggsLanguageCode;
  if (!o.includes(e)) {
    e = "en";
  }
  if (e.includes("_")) {
    e = e.split("_")[0];
  }
  return {
    urls: ["./css/fonts_" + e + ".css"],
    families: ["_BodyFont", "_HeaderFont"]
  };
};