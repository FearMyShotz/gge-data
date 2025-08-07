Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./270.js");
var s = require("./4244.js");
var r = function (e) {
  function AttackScreenWaveTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackScreenWaveTrackingCommand, e);
  AttackScreenWaveTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID, new s.AttackScreenWaveTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID);
    t.playerId = o.BasicModel.userData.playerID;
    t.date = Math.round(new Date().time / 1000);
    t.numberWaves = e[0];
    t.actionType = e[1];
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.ATTACK_SCREEN_TRACKING_ID);
  };
  return AttackScreenWaveTrackingCommand;
}(o.SimpleCommand);
exports.AttackScreenWaveTrackingCommand = r;