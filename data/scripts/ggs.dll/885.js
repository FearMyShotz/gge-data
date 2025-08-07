Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function UncaughtExceptionErrorLOFactory(t, n, i) {
    var a = e.call(this) || this;
    a._subErrorId = t;
    a._stackLines = i;
    a._event = n;
    return a;
  }
  i.__extends(UncaughtExceptionErrorLOFactory, e);
  UncaughtExceptionErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, UncaughtExceptionErrorLOFactory.UNCAUGHT_EXCEPTION.toString());
    t.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TYPE, this._event.error);
    t.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_ID, this._event.errorID);
    t.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TARGET, this._event.target);
    t.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TEXT, this._event.text);
    t.logData.set(UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE, this._stackLines[0] + " " + this._stackLines[1]);
    return t;
  };
  UncaughtExceptionErrorLOFactory.UNDEFINED_ERROR = 2001;
  UncaughtExceptionErrorLOFactory.UNCAUGHT_EXCEPTION = 2;
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TYPE = "eventErrorType";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_ID = "eventErrorId";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TARGET = "eventErrorTarget";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_TEXT = "eventErrorText";
  UncaughtExceptionErrorLOFactory.PARAM_EVENT_ERROR_STACKTRACE = "eventErrorStackTrace";
  return UncaughtExceptionErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.UncaughtExceptionErrorLOFactory = s;