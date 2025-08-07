Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1166.js");
var r = require("./4.js");
var l = require("./17.js");
var c = require("./354.js");
var u = function (e) {
  function CastleFacebookGetUserDataCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleFacebookGetUserDataCommand, e);
  CastleFacebookGetUserDataCommand.prototype.execute = function (e) {
    d.CastleFacebookModule.getUserData(function (t) {
      if (t) {
        r.CastleModel.userData.facebookEmail = s.CastleStringHelper.parseToStringOrEmpty(t.email);
        new p();
        if (!e && !l.CastleLayoutManager.getInstance().isDialogVisibleByName(c.OptionsDialog)) {
          return;
        }
        var i = o.TrackingCache.getInstance().getEvent(o.TrackingEventIds.FACEBOOK_USER_DATA);
        i.playerId = r.CastleModel.userData.playerID;
        i.email = r.CastleModel.userData.facebookEmail;
        JSON.stringify(t);
        o.debug("Track FacebookUserData,playerId : " + i.getVars().playerId + ", email: " + i.getVars().email);
        console.warn("Track FacebookUserData,playerId : " + i.getVars().playerId + ", email: " + i.getVars().email + "\nFBData: " + JSON.stringify(t));
        o.TrackingCache.getInstance().sendEvent(o.TrackingEventIds.FACEBOOK_USER_DATA);
      }
    });
  };
  return CastleFacebookGetUserDataCommand;
}(o.SimpleCommand);
exports.CastleFacebookGetUserDataCommand = u;
var d = require("./193.js");
a.classImplementsInterfaces(u, "ISimpleCommand");
var p = function () {
  return function FacebookUserData() {};
}();