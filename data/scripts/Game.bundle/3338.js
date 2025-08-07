Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./116.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./804.js");
var c = require("./728.js");
var u = require("./600.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./1635.js");
var g = a.getLogger("CastleMapFacebookAccountCommand");
var C = function (e) {
  function CastleMapFacebookAccountCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleMapFacebookAccountCommand, e);
  CastleMapFacebookAccountCommand.prototype.execute = function (e) {
    this.removeListeners();
    if (e) {
      this.controller.addEventListener(u.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
      this.controller.addEventListener(u.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
      this.controller.addEventListener(u.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
      m.CastleFacebookModule.login();
    } else {
      this.unmap();
    }
  };
  CastleMapFacebookAccountCommand.prototype.onFbCancel = function (e) {
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.dispatchEvent(new c.CastleFacebookEvent(c.CastleFacebookEvent.FACEBOOK_ACTION_CANCELED));
  };
  CastleMapFacebookAccountCommand.prototype.onFBLoggedIn = function (e) {
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.map();
  };
  CastleMapFacebookAccountCommand.prototype.map = function () {
    this.addMappingListeners();
    this.controller.addEventListener(l.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    p.CastleModel.userData.isConnectedToFacebook = true;
    p.CastleModel.localData.saveFacebookID(m.CastleFacebookModule.userID);
    p.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMapFacebookVO(true, m.CastleFacebookModule.userID, m.CastleFacebookModule.accessToken, m.CastleFacebookModule.appID));
  };
  CastleMapFacebookAccountCommand.prototype.onLogout = function (e) {
    this.removeMappingListeners();
    this.controller.removeEventListener(l.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  };
  CastleMapFacebookAccountCommand.prototype.unmap = function () {
    this.addMappingListeners();
    m.CastleFacebookModule.revokeLogin();
    p.CastleModel.smartfoxClient.sendCommandVO(new h.C2SMapFacebookVO(false, m.CastleFacebookModule.userID, m.CastleFacebookModule.accessToken, m.CastleFacebookModule.appID));
    p.CastleModel.userData.resetFacebookData();
  };
  CastleMapFacebookAccountCommand.prototype.addMappingListeners = function () {
    this.controller.addEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.addEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  };
  CastleMapFacebookAccountCommand.prototype.removeMappingListeners = function () {
    this.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_ERROR, this.bindFunction(this.removeMappingListeners));
  };
  CastleMapFacebookAccountCommand.prototype.onMappingUpdated = function (e) {
    this.removeMappingListeners();
    if (p.CastleModel.userData.isConnectedToFacebook) {
      g.debug("Facebook_User <--> Player mapped successfully");
      p.CastleModel.localData.saveFacebookID(m.CastleFacebookModule.userID);
      s.CommandController.instance.executeCommand(_.IngameClientCommands.GET_FACEBOOK_USER_DATA, false);
    } else {
      g.debug("Facebook_User <--> Player UNmapped successfully");
    }
  };
  CastleMapFacebookAccountCommand.prototype.removeListeners = function () {
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onFBLoggedIn));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(u.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancel));
    this.controller.removeEventListener(c.CastleFacebookEvent.FACEBOOK_MAPPING_UPDATED, this.bindFunction(this.onMappingUpdated));
    this.controller.removeEventListener(l.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
  };
  Object.defineProperty(CastleMapFacebookAccountCommand.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleMapFacebookAccountCommand;
}(r.SimpleCommand);
exports.CastleMapFacebookAccountCommand = C;
var _ = require("./29.js");
var m = require("./193.js");
o.classImplementsInterfaces(C, "ISimpleCommand");