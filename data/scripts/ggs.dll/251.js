Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("WorldAssignment.NetworkInstance");
var a = function () {
  function NetworkInstance() {
    this.instanceCountID = 0;
    this.instanceLocaId = "";
    this.remainingRegistrationCapacity = 100;
    this.serverNameWithCountry = "";
    this.countries = [];
  }
  NetworkInstance.isTestInstance = function (e) {
    if (isNaN(e)) {
      i.warn("instanceId not set!");
      return false;
    } else {
      return e >= 250 && e <= 300;
    }
  };
  NetworkInstance.prototype.toString = function () {
    return "ip: " + this.ip + ", port: " + this.port + ", zone: " + this.zone + ", zoneId: " + this.zoneId + ", instanceId: " + this.instanceId + ", instanceCountID: " + this.instanceCountID + ", type: " + this._type + ", isInternational: " + this.isInternational + ", defaultcountry: " + this.defaultcountry + ", isFavorite: " + this.isFavorite + ", instanceLocaId: " + this.instanceLocaId + ", countries: " + this.countries;
  };
  Object.defineProperty(NetworkInstance.prototype, "serverName", {
    get: function () {
      throw new Error("Please use Localize.text(<networkInstance>.instanceLocaId) instead of <networkInstance>.serverName");
    },
    enumerable: true,
    configurable: true
  });
  return NetworkInstance;
}();
exports.NetworkInstance = a;