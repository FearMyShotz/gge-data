Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LiveEnvironment(t) {
    return e.call(this, t !== undefined ? t : LiveEnvironment.LIVE_ENVIRONMENT_ID) || this;
  }
  i.__extends(LiveEnvironment, e);
  LiveEnvironment.prototype.initPatterns = function () {
    if (this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-netconf-test/{gameId}/{networkId}.xml";
    } else {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-netconf/{gameId}/{networkId}.xml";
    }
    this._countryConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/country/{gameId}/{countryVersion}/country.xml";
    this._zoneCapacitiesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/network/status/{gameId}/zone_capacities.json";
    this._maintenanceConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/network/status/{gameId}/maint.json";
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/language/{gameId}/cldr";
    this._dataCookiePathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://data.{domain}/CookieSaver.swf";
    this._accountCookiePathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://account.{domain}/CookieSaver.swf";
    this._networkCookiePathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://ncookie.{gameFileName}.{domain}/CookieSaver.swf";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/games-config/version/{gameId}/version.json";
    this._itemsVersionPathPattern = "{baseURL}/ItemsVersion.properties";
    this._itemSWFURLPattern = "{baseURL}/{gameTitle}ItemLib{itemIndex}_{itemVersion}.swf";
    this._itemXMLURLPattern = "{baseURL}/config/items_v{itemsXMLVersion}.{zipSuffix}";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/branches/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
    this._languagePropertiesPathPattern = "{baseURL}/{gameTitle}LangVersion.properties";
    this._fontsSWFURLPattern = "{baseURL}/fonts/{gameTitle}Fonts_{languageCode}.swf";
    this._fontsSWFURLPatternVersioned = "{baseURL}/fonts/{gameTitle}Fonts_{languageCode}_v{fontVersion}.swf";
    this._refCountURLPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/loader/refcount.php";
    this._assetsFolderPathPattern = "{baseAssetsURL}/";
    this._audiosFolderPathPattern = "{baseAssetsURL}/sound/";
    this._abTestConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://{cdnSubDomain}.{domain}/abFlash/config/abTests_{gameId}.xml";
    this._abTestTrackPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://splitrun.goodgamestudios.com/request/track";
    this._abTestDisplayPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://splitrun.goodgamestudios.com/request/display";
    this._shopPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://itemshop.goodgamestudios.com/{languageCode}/";
  };
  LiveEnvironment.prototype.isSupported = function () {
    return true;
  };
  LiveEnvironment.LIVE_ENVIRONMENT_ID = "LiveEnvironment";
  return LiveEnvironment;
}(require("./456.js").ConcreteEnvironment);
exports.LiveEnvironment = s;