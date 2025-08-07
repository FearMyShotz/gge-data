Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = function (e) {
  function TopEyeCatcherPPDDExternal(t, i) {
    return e.call(this, t, TopEyeCatcherPPDDExternal.getAssetName(i)) || this;
  }
  n.__extends(TopEyeCatcherPPDDExternal, e);
  Object.defineProperty(TopEyeCatcherPPDDExternal, "languageCode", {
    get: function () {
      return a.GGSCountryController.instance.currentCountry.ggsLanguageCode;
    },
    enumerable: true,
    configurable: true
  });
  TopEyeCatcherPPDDExternal.getAssetName = function (e) {
    var t = "en";
    var i = "PivatePrimeDayDynamicDialog_TopEyeCatcher_" + e + "_";
    if (o.BasicModel.basicLoaderData.isItemAssetVersioned(i + TopEyeCatcherPPDDExternal.languageCode)) {
      t = TopEyeCatcherPPDDExternal.languageCode;
    }
    return "PivatePrimeDayDynamicDialog_TopEyeCatcher_" + e + "_" + t;
  };
  return TopEyeCatcherPPDDExternal;
}(require("./551.js").PPDDExternalPart);
exports.TopEyeCatcherPPDDExternal = s;