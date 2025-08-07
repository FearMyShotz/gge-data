Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./271.js");
var s = require("./4242.js");
var r = function (e) {
  function AttackScreenGeneralsTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AttackScreenGeneralsTrackingCommand, e);
  AttackScreenGeneralsTrackingCommand.prototype.execute = function (e) {
    if (!o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.GENERALS_ATTACK_SCREEN)) {
      o.TrackingCache.getInstance().cacheEvent(a.ClientConstTracking.GENERALS_ATTACK_SCREEN, new s.AttackScreenGeneralsTrackingEvent(o.EnvGlobalsHandler.globals.referrer));
    }
    var t = o.TrackingCache.getInstance().getEvent(a.ClientConstTracking.GENERALS_ATTACK_SCREEN);
    t.playerId = o.BasicModel.userData.playerID;
    t.sessionEnd = Math.round(new Date().time / 1000);
    t.sessionStart = e[0];
    t.details = e[1];
    t.attackLaunched = e[2];
    o.TrackingCache.getInstance().sendEvent(a.ClientConstTracking.GENERALS_ATTACK_SCREEN);
  };
  return AttackScreenGeneralsTrackingCommand;
}(o.SimpleCommand);
exports.AttackScreenGeneralsTrackingCommand = r;