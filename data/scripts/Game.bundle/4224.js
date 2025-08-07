Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./271.js");
var s = require("./1296.js");
var r = function (e) {
  function AccountDeletionTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AccountDeletionTrackingCommand, e);
  AccountDeletionTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID, new s.AccountDeletionTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID);
    t.playerId = o.BasicModel.userData.playerID;
    t.date = Math.round(new Date().time / 1000);
    t.actionType = e[0];
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.ACCOUNT_DELETION_TRACKING_ID);
  };
  return AccountDeletionTrackingCommand;
}(o.SimpleCommand);
exports.AccountDeletionTrackingCommand = r;