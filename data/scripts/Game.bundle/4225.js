Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./271.js");
var s = require("./1882.js");
var r = function (e) {
  function DonationEventTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DonationEventTrackingCommand, e);
  DonationEventTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.DONATION_EVENT_ID)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.DONATION_EVENT_ID, new s.DonationEventTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.DONATION_EVENT_ID);
    t.playerId = o.BasicModel.userData.playerID;
    t.date = Math.round(new Date().time / 1000);
    t.actionType = e[0];
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.DONATION_EVENT_ID);
  };
  return DonationEventTrackingCommand;
}(o.SimpleCommand);
exports.DonationEventTrackingCommand = r;