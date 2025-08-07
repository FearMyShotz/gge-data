Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./52.js");
var s = require("./4.js");
var r = require("./35.js");
var o = require("./17.js");
var l = require("./15.js");
var u = function (e) {
  function BasicFacebookUserEmailTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicFacebookUserEmailTrackingCommand, e);
  BasicFacebookUserEmailTrackingCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = o.TrackingCache.getInstance().getEvent(l.TrackingEventIds.FACBOOK_USER_EMAIL);
      var n = e;
      t.playerId = s.BasicModel.userData.playerID;
      t.date = Math.round(new Date().time / 1000);
      t.email = n.email;
      o.TrackingCache.getInstance().sendEvent(l.TrackingEventIds.FACBOOK_USER_EMAIL);
    } else {
      r.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookUserEmailTrackingCommand;
}(a.BasicTrackingCommand);
exports.BasicFacebookUserEmailTrackingCommand = u;