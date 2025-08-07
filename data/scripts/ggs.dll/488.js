Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function SocketErrorLOFactory(t, n, i, a, s, r) {
    var o = e.call(this) || this;
    o._subErrorId = t;
    o._ip = n;
    o._port = i;
    o._zone = a;
    o._operationText = s;
    o._bluebox = r;
    return o;
  }
  i.__extends(SocketErrorLOFactory, e);
  SocketErrorLOFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, SocketErrorLOFactory.SOCKET_ERROR.toString());
    t.logData.set(a.ExternalLoggingConstants.PARAM_ERROR_EVENT_OPERATION_TEXT, this._operationText);
    t.logData.set(a.ExternalLoggingConstants.PARAM_ZONE, this._zone);
    t.logData.set(SocketErrorLOFactory.PARAM_IP, this._ip);
    t.logData.set(SocketErrorLOFactory.PARAM_PORT, this._port.toString());
    t.logData.set(SocketErrorLOFactory.PARAM_BLUEBOX, this._bluebox.toString());
    return t;
  };
  SocketErrorLOFactory.PING_TEST_IO_ERROR = 15001;
  SocketErrorLOFactory.PING_TEST_SECURITY_ERROR = 15002;
  SocketErrorLOFactory.POLICY_PING_TEST_IO_ERROR = 15003;
  SocketErrorLOFactory.POLICY_PING_TEST_SECURITY_ERROR = 15004;
  SocketErrorLOFactory.SOCKET_ERROR = 15;
  SocketErrorLOFactory.PARAM_IP = "ip";
  SocketErrorLOFactory.PARAM_PORT = "port";
  SocketErrorLOFactory.PARAM_BLUEBOX = "bluebox";
  return SocketErrorLOFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.SocketErrorLOFactory = s;