Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function InvalidCountryNetworkConfigurationLOFactory(t, n) {
    var i = e.call(this, t) || this;
    i._ggsCountryCode = n;
    return i;
  }
  i.__extends(InvalidCountryNetworkConfigurationLOFactory, e);
  InvalidCountryNetworkConfigurationLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(InvalidCountryNetworkConfigurationLOFactory.PARAM_GGS_COUNTRY_CODE, this._ggsCountryCode);
    return t;
  };
  InvalidCountryNetworkConfigurationLOFactory.PARAM_GGS_COUNTRY_CODE = "ggsCountryCode";
  return InvalidCountryNetworkConfigurationLOFactory;
}(require("./180.js").InstanceErrorLOFactory);
exports.InvalidCountryNetworkConfigurationLOFactory = a;