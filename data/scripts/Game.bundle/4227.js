Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./271.js");
var s = require("./1114.js");
var r = function (e) {
  function SsoUserMoveTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SsoUserMoveTrackingCommand, e);
  SsoUserMoveTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID, new s.SsoUserMoveTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
    t.playerId = o.BasicModel.userData.playerID;
    t.date = Math.round(new Date().time / 1000);
    t.actionType = e[0];
    t.login_method = o.EnvGlobalsHandler.globals.loginIsKeyBased ? s.SsoUserMoveTrackingEvent.LOGIN_WITH_SSO : s.SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD;
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.SSO_USER_MOVE_TRACKING_ID);
  };
  return SsoUserMoveTrackingCommand;
}(o.SimpleCommand);
exports.SsoUserMoveTrackingCommand = r;