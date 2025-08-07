Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFacebookSDKEvent(t, i = null, n = false, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.authResponse = i;
    return a;
  }
  n.__extends(CastleFacebookSDKEvent, e);
  CastleFacebookSDKEvent.CONNECTED = "connected";
  CastleFacebookSDKEvent.NOT_AUTHORIZED = "notAuthorized";
  CastleFacebookSDKEvent.NOT_CONNECTED = "notConnected";
  CastleFacebookSDKEvent.LOGGED_OUT = "loggedOut";
  return CastleFacebookSDKEvent;
}(createjs.Event);
exports.CastleFacebookSDKEvent = o;