Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function SecurityErrorLOFactory(t, n, i) {
    var a = e.call(this) || this;
    a._subErrorId = t;
    a._operationText = n;
    a._url = i;
    return a;
  }
  i.__extends(SecurityErrorLOFactory, e);
  SecurityErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, SecurityErrorLOFactory.SECURITY_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    t.logData.set(a.ExternalLoggingConstants.PARAM_URL, this._url);
    return t;
  };
  SecurityErrorLOFactory.GENERAL_LOADER_SECURITY_ERROR = 1001;
  SecurityErrorLOFactory.GENERAL_TRACKING_SECURITY_ERROR = 1002;
  SecurityErrorLOFactory.SECURITY_ERROR = 1;
  return SecurityErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.SecurityErrorLOFactory = s;