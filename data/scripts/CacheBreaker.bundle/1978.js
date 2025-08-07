Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./0.js");
var r = require("./2.js");
var s = require("./2.js");
var i = require("./1.js");
var a = function (e) {
  function RelativePathEnvironment() {
    CONSTRUCTOR_HACK;
    return e.call(this, "RelativePathsEnvironment") || this;
  }
  o.__extends(RelativePathEnvironment, e);
  RelativePathEnvironment.prototype.initPatterns = function () {
    this._zoneCapacitiesConfigPathPattern = "https://files-ak.goodgamestudios.com/games-config/network/status/12/zone_capacities.json";
    this._maintenanceConfigPathPattern = "https://files-ak.goodgamestudios.com/games-config/network/status/12/maint.json";
    this._assetsFolderPathPattern = "assets/";
    this._audiosFolderPathPattern = "assets/sound/";
    this._networkConfigPathPattern = "../config/network/{networkId}.xml";
    this._versionPathPattern = "../config/languages/version.json";
    this._countryConfigPathPattern = "config/country/{countryVersion}/country.xml";
    this._languageConfigPathPattern = "../config/languages/{languageVersion}/{languageCode}.json";
    this._cldrConfigPathPattern = "cldr";
    this._branchesConfigPathPattern = "config/branches/latest/branches.xml";
    this._itemXMLURLPattern = "items/items_v{itemsXMLVersion}.json";
    this._itemsVersionPathPattern = "items/ItemsVersion.properties";
    this._fontsSWFURLPattern = "config/fonts";
    this._fontsSWFURLPatternVersioned = "config/fonts/{languageCode}";
    this._shopPathPattern = r.BasicConstants.DOMAIN_PROTOCOL + "{shopBaseUrl}.goodgamestudios.com/{languageCode}/";
  };
  RelativePathEnvironment.prototype.isSupported = function () {
    return true;
  };
  return RelativePathEnvironment;
}(s.LiveEnvironment);
exports.RelativePathEnvironment = a;
i.classImplementsInterfaces(a, "IBaseEnvironmentPatterns", "IEnvironment", "IBaseEnvironment", "IDetectableEnvironment");