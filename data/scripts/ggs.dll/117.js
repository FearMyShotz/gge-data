Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function SmartfoxEvent(t, n = "", i = null, a = false, s = false) {
    var r = e.call(this, t, a, s) || this;
    r.cmdId = n;
    r.params = i;
    return r;
  }
  i.__extends(SmartfoxEvent, e);
  SmartfoxEvent.CONNECT_START = "connectStart";
  SmartfoxEvent.CONNECT_FAILED = "connectFailed";
  SmartfoxEvent.CONNECT_TIMEOUT = "connectTimeout";
  SmartfoxEvent.CONNECT_SUCCESS = "connectSuccess";
  SmartfoxEvent.CONNECTION_LOST = "connectionLost";
  SmartfoxEvent.JOINED_ROOM = "joinedRoom";
  SmartfoxEvent.GUEST_LOGIN_FAILED = "guestLoginFailed";
  SmartfoxEvent.GUEST_LOGIN_SUCCESS = "guestLoginSuccess";
  SmartfoxEvent.EXTENSION_RESPONSE = "extensionResponse";
  SmartfoxEvent.SOCKET_EMPTIED = "onSocketEmptied";
  return SmartfoxEvent;
}(createjs.Event);
exports.SmartfoxEvent = a;