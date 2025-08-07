Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./11.js");
var s = function (e) {
  function LocaTestEnvironment() {
    return e.call(this, LocaTestEnvironment.LOCA_TEST_ENVIRONMENT_ID) || this;
  }
  i.__extends(LocaTestEnvironment, e);
  LocaTestEnvironment.prototype.initPatterns = function () {
    e.prototype.initPatterns.call(this);
    if (!this._data.globals.urlVariables.forceToShowTestServers) {
      this._networkConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/{gameId}/{networkVersion}/{networkId}.xml";
    }
    this._countryConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/country/{gameId}/{countryVersion}/country.xml";
    this._zoneCapacitiesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config/network/status/{gameId}/zone_capacities.json";
    this._maintenanceConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config/network/status/{gameId}/maint.json";
    this._languageConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/language/{gameId}/{languageVersion}/{languageCode}.{zipSuffix}";
    this._cldrConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/language/{gameId}/cldr";
    this._versionPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/games-config-locatest/version/{gameId}/version.json";
    this._branchesConfigPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-locatest/{gameFileName}/branches.xml";
    this._gameUrlPathPattern = a.BasicConstants.DOMAIN_PROTOCOL + "://files.{domain}/branches-locatest/{gameFileName}/{branchId}/{gameTitle}Game_{branchVersion}.swf";
  };
  LocaTestEnvironment.prototype.isSupported = function () {
    return this._data.globals.isLocaTest;
  };
  LocaTestEnvironment.LOCA_TEST_ENVIRONMENT_ID = "LocaTestEnvironment";
  return LocaTestEnvironment;
}(require("./58.js").LiveEnvironment);
exports.LocaTestEnvironment = s;