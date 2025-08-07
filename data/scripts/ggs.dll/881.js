Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function CookieErrorLOFactory(t) {
    var n = e.call(this) || this;
    n._subErrorId = t;
    return n;
  }
  i.__extends(CookieErrorLOFactory, e);
  CookieErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, CookieErrorLOFactory.COOKIE_ERROR.toString());
    return t;
  };
  CookieErrorLOFactory.GENERAL_ACCOUNT_COOKIE_ERROR = 4001;
  CookieErrorLOFactory.GENERAL_NETWORK_COOKIE_ERROR = 4002;
  CookieErrorLOFactory.COOKIE_ERROR = 4;
  return CookieErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.CookieErrorLOFactory = s;