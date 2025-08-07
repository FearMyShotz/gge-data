Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./15.js");
var s = require("./17.js");
var r = require("./52.js");
var o = require("./4.js");
var l = require("./30.js");
var u = require("./35.js");
var c = function (e) {
  function BasicFacebookConnectionTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicFacebookConnectionTrackingCommand, e);
  BasicFacebookConnectionTrackingCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = s.TrackingCache.getInstance().getEvent(a.TrackingEventIds.FACEBOOK_CONNECTION);
      var n = e;
      t.playerId = o.BasicModel.userData.playerID;
      t.zoneId = o.BasicModel.instanceProxy.selectedInstanceVO.zoneId;
      t.timestamp = new Date().getTime() / 1000;
      t.facebookExternalState = n.facebookConnectionState;
      t.facebookId = n.facebookId;
      t.gameLevel = n.gameLevel;
      l.debug("Track FacebookConnection, facebookConnectionState: " + n.facebookConnectionState + ", facebookId: " + n.facebookId + ", gameLevel: " + n.gameLevel);
      s.TrackingCache.getInstance().sendEvent(a.TrackingEventIds.FACEBOOK_CONNECTION);
    } else {
      u.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookConnectionTrackingCommand;
}(r.BasicTrackingCommand);
exports.BasicFacebookConnectionTrackingCommand = c;