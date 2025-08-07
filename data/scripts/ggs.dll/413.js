Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function ServerErrorLOFactory(t, n, i) {
    var a = e.call(this) || this;
    a._subErrorId = t;
    a._zone = n;
    a._bluebox = i;
    return a;
  }
  i.__extends(ServerErrorLOFactory, e);
  ServerErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, ServerErrorLOFactory.SERVER_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_ZONE, this._zone);
    t.logData.set(ServerErrorLOFactory.PARAM_BLUEBOX, this._bluebox.toString());
    return t;
  };
  ServerErrorLOFactory.CONNECT_FAILED = 13001;
  ServerErrorLOFactory.ROOMLIST_FAILED = 13002;
  ServerErrorLOFactory.JOINROOM_FAILED = 13003;
  ServerErrorLOFactory.LOGIN_RESPONCE_FAILED = 13004;
  ServerErrorLOFactory.CONNECTION_LOST = 13005;
  ServerErrorLOFactory.CONNECTION_KILLED = 13006;
  ServerErrorLOFactory.SERVER_ERROR = 13;
  ServerErrorLOFactory.PARAM_BLUEBOX = "bluebox";
  return ServerErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.ServerErrorLOFactory = s;