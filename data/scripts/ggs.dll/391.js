Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./52.js");
var s = require("./4.js");
var r = require("./30.js");
var o = require("./35.js");
var l = require("./17.js");
var u = require("./15.js");
var c = function (e) {
  function BasicFacebookUserDataTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicFacebookUserDataTrackingCommand, e);
  BasicFacebookUserDataTrackingCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = l.TrackingCache.getInstance().getEvent(u.TrackingEventIds.FACEBOOK_USER_DATA);
      var n = e;
      t.playerId = s.BasicModel.userData.playerID;
      t.timestamp = new Date().getTime() / 1000;
      t.facebookId = n.facebookId;
      t.isAccountVerified = n.isAccountVerified;
      t.fullName = n.fullName;
      t.firstName = n.firstName;
      t.lastName = n.lastName;
      t.profileLink = n.profileLink;
      t.gender = n.gender;
      t.locale = n.locale;
      t.ageRange = n.ageRange;
      t.utcOffset = n.utcOffset;
      t.birthday = n.birthday;
      t.email = n.email;
      t.facebookBusinessToken = n.facebookBusinessToken;
      r.debug("Track FacebookUserData, name: " + n.fullName + ", facebookId: " + n.facebookId + ", isAccountVerified: " + n.isAccountVerified);
      l.TrackingCache.getInstance().sendEvent(u.TrackingEventIds.FACEBOOK_USER_DATA);
    } else {
      o.warn("Object with the invitation information missing!");
    }
  };
  return BasicFacebookUserDataTrackingCommand;
}(a.BasicTrackingCommand);
exports.BasicFacebookUserDataTrackingCommand = c;