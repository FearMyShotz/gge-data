Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function InstanceErrorLOFactory(t) {
    var n = e.call(this) || this;
    n._subErrorId = t;
    return n;
  }
  i.__extends(InstanceErrorLOFactory, e);
  InstanceErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, InstanceErrorLOFactory.INSTANCE_ERROR.toString());
    return t;
  };
  InstanceErrorLOFactory.NO_INSTANCES_FOR_CURRENT_COUNTRY_FOUND = 12001;
  InstanceErrorLOFactory.CONNECT_TO_INSTANCE_NULL = 12002;
  InstanceErrorLOFactory.INVALID_COUNTRY_NETWORK_CONFIGURATION = 12003;
  InstanceErrorLOFactory.INSTANCE_COUNTRYCODE_EMPTY_LIST = 12004;
  InstanceErrorLOFactory.INSTANCE_ERROR = 12;
  return InstanceErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.InstanceErrorLOFactory = s;