Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function CookieLogLOFactory(t) {
    var n = e.call(this) || this;
    n._subErrorId = t;
    return n;
  }
  i.__extends(CookieLogLOFactory, e);
  CookieLogLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_TYPE, a.ExternalLoggingConstants.LOGGING_TYPE_LOG.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, CookieLogLOFactory.COOKIE_ERROR.toString());
    return t;
  };
  CookieLogLOFactory.COOKIE_PENDING_FAILED = 4003;
  CookieLogLOFactory.COOKIE_ERROR = 4;
  return CookieLogLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.CookieLogLOFactory = s;