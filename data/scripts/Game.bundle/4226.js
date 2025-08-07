Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./271.js");
var s = require("./1111.js");
var r = function (e) {
  function SocialButtonTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SocialButtonTrackingCommand, e);
  SocialButtonTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.SOCIAL_BUTTON_TRACKING_ID)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.SOCIAL_BUTTON_TRACKING_ID, new s.SocialButtonTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.SOCIAL_BUTTON_TRACKING_ID);
    t.playerId = o.BasicModel.userData.playerID;
    t.date = Math.round(new Date().time / 1000);
    t.buttonName = e[0];
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.SOCIAL_BUTTON_TRACKING_ID);
  };
  return SocialButtonTrackingCommand;
}(o.SimpleCommand);
exports.SocialButtonTrackingCommand = r;