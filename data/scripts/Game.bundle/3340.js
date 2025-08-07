Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./116.js");
var l = require("./728.js");
var c = require("./15.js");
var u = require("./4.js");
var d = r.getLogger("CastleFacebookSendReferralLinkCommand");
var p = function (e) {
  function CastleFacebookSendReferralLinkCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleFacebookSendReferralLinkCommand, e);
  CastleFacebookSendReferralLinkCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
    if (C.CastleFacebookModule.hasAuthResponse && u.CastleModel.userData.isConnectedToFacebook) {
      d.debug(u.CastleModel.userData.facebookEmail, "  ", C.CastleFacebookModule.userID, "  ", C.CastleFacebookModule.accessToken);
      C.CastleFacebookModule.sendReferralLink(g.getFacebookReferralLink());
    } else {
      c.CastleBasicController.getInstance().addEventListener(l.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookMappingUpdated));
      c.CastleBasicController.getInstance().addEventListener(l.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
      o.CommandController.instance.executeCommand(h.IngameClientCommands.MAP_USER_TO_FACEBOOK, true);
    }
  };
  CastleFacebookSendReferralLinkCommand.prototype.removeMappingListeners = function () {
    c.CastleBasicController.getInstance().removeEventListener(l.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onFacebookMappingUpdated));
    c.CastleBasicController.getInstance().removeEventListener(l.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  };
  CastleFacebookSendReferralLinkCommand.prototype.onFacebookMappingUpdated = function (e) {
    this.removeMappingListeners();
    if (u.CastleModel.userData.isConnectedToFacebook) {
      C.CastleFacebookModule.sendReferralLink(g.getFacebookReferralLink);
    } else {
      d.warn("onLogout:  we tried to Map a user to Facebook and  we got a FACEBOOK_MAPPING_UPDATED but userData is still not connectedToFacebook.");
    }
  };
  return CastleFacebookSendReferralLinkCommand;
}(a.SimpleCommand);
exports.CastleFacebookSendReferralLinkCommand = p;
var h = require("./29.js");
var g = require("./434.js");
var C = require("./193.js");
s.classImplementsInterfaces(p, "ISimpleCommand");