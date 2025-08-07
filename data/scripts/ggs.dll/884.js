Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function JSReadURLParameterLogLOFactory(t, n) {
    var i = e.call(this) || this;
    i._subErrorId = t;
    i._userInfoData = n;
    return i;
  }
  i.__extends(JSReadURLParameterLogLOFactory, e);
  JSReadURLParameterLogLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, JSReadURLParameterLogLOFactory.EXTERNAL_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_TYPE, a.ExternalLoggingConstants.LOGGING_TYPE_LOG.toString());
    t.logData.set(JSReadURLParameterLogLOFactory.PARAM_USER_INFO_DATA, this._userInfoData.toString());
    return t;
  };
  JSReadURLParameterLogLOFactory.JAVASCRIPT_READ_URL_PARAMETERS_FAILED_LOG = 30001;
  JSReadURLParameterLogLOFactory.EXTERNAL_ERROR = 30;
  JSReadURLParameterLogLOFactory.PARAM_USER_INFO_DATA = "userInfoData";
  return JSReadURLParameterLogLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.JSReadURLParameterLogLOFactory = s;