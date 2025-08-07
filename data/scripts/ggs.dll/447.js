Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function VersionErrorLOFactory(t, n) {
    var i = e.call(this) || this;
    i._subErrorId = t;
    i._serverVersion = n;
    return i;
  }
  i.__extends(VersionErrorLOFactory, e);
  VersionErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, VersionErrorLOFactory.VERSION_ERROR.toString());
    t.logData.set(VersionErrorLOFactory.PARAM_SERVER_VERSION, this._serverVersion);
    return t;
  };
  VersionErrorLOFactory.OLD_CLIENT_VERSION_ERROR = 10001;
  VersionErrorLOFactory.VERSION_TOO_HIGH_ERROR = 10002;
  VersionErrorLOFactory.VERSION_ERROR = 10;
  VersionErrorLOFactory.PARAM_SERVER_VERSION = "serverVersion";
  return VersionErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.VersionErrorLOFactory = s;