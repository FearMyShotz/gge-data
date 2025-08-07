Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./116.js");
var u = require("./600.js");
var d = require("./44.js");
var p = require("./15.js");
var h = c.getLogger("CastleFacebookModule");
var g = ["public_profile", "email"].join(",");
var C = ["id", "name", "first_name", "last_name", "link", "gender", "locale", "verified", "email", "age_range", "timezone", "birthday", "token_for_business"];
var _ = function () {
  function FacebookLoginStatus() {}
  FacebookLoginStatus.UNKNOWN = "unknown";
  FacebookLoginStatus.NOT_AUTHORIZED = "not_authorized";
  FacebookLoginStatus.CONNECTED = "connected";
  FacebookLoginStatus.AUTH_EXPIRED = "authorization_expired";
  return FacebookLoginStatus;
}();
exports.FacebookLoginStatus = _;
var m = require("./434.js");
var f = false;
var O = function () {
  function FacebookModule() {
    this._available = false;
    this._userID = "";
    this._accessToken = "";
    this.credentialsFromLandingPage = false;
  }
  FacebookModule.prototype.reset = function () {
    this._userID = "";
    this._accessToken = "";
  };
  FacebookModule.prototype.initialize = function () {
    var e = this;
    if (f) {
      h.debug("setup:: module was already initialized");
    } else {
      f = true;
      if (this.isSupportedByCurrentPage()) {
        if (window.FB) {
          FB.init({
            appId: this.appID,
            status: true,
            xfbml: true,
            version: "v2.12"
          });
          var t = o.BasicModel.networkCookie;
          if (t.facebookUID && t.facebookAccessToken) {
            this._userID = t.facebookUID;
            this._accessToken = t.facebookAccessToken;
            this.credentialsFromLandingPage = true;
          }
          this._available = true;
          FB.Event.subscribe("auth.authResponseChange", function (t) {
            h.warn("fb.auth.authResponseChanged", t);
            e.credentialsFromLandingPage = false;
            e.onAuthChangedResponse(t);
          });
          E(function (t) {
            return n.__awaiter(e, undefined, undefined, function () {
              var e = this;
              return n.__generator(this, function (i) {
                if (!t) {
                  this.checkLoginStatus(true).then(function (t) {
                    e.onAuthChangedResponse(t);
                  }).catch(function (t) {
                    e.onAuthChangedResponse({
                      status: _.UNKNOWN,
                      authResponse: null
                    });
                  });
                }
                return [2];
              });
            });
          });
        } else if (window.fbSdkLoaded) {
          window.bugsnagClient.notify(new Error("Facebook SDK was loaded but was unable to create global window.FB object."));
        }
      } else {
        h.debug("setup:: module not supported");
      }
    }
  };
  Object.defineProperty(FacebookModule.prototype, "available", {
    get: function () {
      return this._available && !this.isFacebookLoginDisabled();
    },
    enumerable: true,
    configurable: true
  });
  FacebookModule.prototype.isFacebookLoginDisabled = function () {
    return s.EnvGlobalsHandler.globals && s.EnvGlobalsHandler.globals.urlVariables && s.EnvGlobalsHandler.globals.urlVariables.isFacebookLoginDisabled;
  };
  FacebookModule.prototype.sendReferralLink = function (e) {
    var t = this;
    function i() {
      h.debug("FB.ui.send(" + e + ")");
      FB.ui({
        app_id: t.appID,
        method: "send",
        link: e
      }, function () {
        return h.debug("FB.ui.send.callback");
      });
      t.trackFacebookOption();
    }
    if (FB.getAuthResponse()) {
      i();
    } else {
      this.asyncLogin().then(y).then(function (e) {
        i();
      }).catch(function (e) {
        return h.warn("something went wrong", e);
      });
    }
  };
  FacebookModule.prototype.revokeLogin = function () {
    var e = this;
    function t() {
      FB.api("/me/permissions/", "delete", {}, function (t) {
        if (t) {
          h.debug("App was de-authorized: ", t);
        } else {
          h.error("Something went wrong while revoking permissions: ", t);
        }
        e.checkLoginStatus(true).then(function (t) {
          e.onAuthChangedResponse(t);
        }).catch(function (t) {
          e.onAuthChangedResponse({
            status: _.UNKNOWN,
            authResponse: null
          });
        });
      });
    }
    if (FB.getAuthResponse()) {
      t();
    } else {
      h.warn("we need to login again");
      this.asyncLogin().then(y).then(function (e) {
        t();
      }).catch(function (e) {
        return h.warn("something went wrong", e);
      });
    }
  };
  FacebookModule.prototype.checkLoginStatus = function (e = false) {
    return n.__awaiter(this, undefined, undefined, function () {
      return n.__generator(this, function (t) {
        return [2, new Promise(function (t, i) {
          h.warn("checking FB login status");
          FB.getLoginStatus(function (e) {
            h.warn("got async FB loginStatus: ", e);
            t(e);
          }, e);
        })];
      });
    });
  };
  FacebookModule.prototype.asyncLogin = function () {
    return n.__awaiter(this, undefined, undefined, function () {
      return n.__generator(this, function (e) {
        return [2, new Promise(function (e, t) {
          FB.login(function (t) {
            e(t);
          }, {
            scope: g
          });
        })];
      });
    });
  };
  FacebookModule.prototype.login = function () {
    var e = this;
    var t = FB.getAuthResponse();
    if (t && t.status != "") {
      console.warn("login. use cached authResponse");
      this.onAuthChangedResponse({
        status: _.CONNECTED,
        authResponse: t
      });
    } else {
      this.asyncLogin().then(y).then(function (t) {
        e.onAuthChangedResponse(t);
      }).catch(function (t) {
        e.onAuthChangedResponse({
          status: _.UNKNOWN,
          authResponse: null
        });
      });
    }
  };
  FacebookModule.prototype.getUserData = function (e) {
    FB.api("/me?fields=" + C.join(","), function (t) {
      e(t);
    });
  };
  Object.defineProperty(FacebookModule.prototype, "appID", {
    get: function () {
      if (s.EnvGlobalsHandler.globals.isTest) {
        return "450594258735416";
      } else {
        return "1602833606600702";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "userID", {
    get: function () {
      return this._userID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "accessToken", {
    get: function () {
      return this._accessToken;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookModule.prototype, "hasAuthResponse", {
    get: function () {
      return this._userID !== "" && this._accessToken !== "";
    },
    enumerable: true,
    configurable: true
  });
  FacebookModule.prototype.isSupportedByCurrentPage = function () {
    var e = s.EnvGlobalsHandler.globals;
    return !e.loginIsKeyBased && !e.isClosedBeta && !d.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
  };
  FacebookModule.prototype.trackFacebookOption = function () {
    var e = new l.InvitationTrackingCommandVO();
    e.action = r.InvitationConst.EXTERNAL_DIALOG;
    e.referMethod = m.CastleInviteFriendsData.REFERRAL_CODE_TYPE_FACEBOOK;
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_TRACK_INVITATION, e);
  };
  FacebookModule.prototype.onAuthChangedResponse = function (e) {
    var t;
    if (e === undefined) {
      e = null;
    }
    h.warn("onAuthChangedResponse:current FB loginStatus ", e);
    switch (e.status) {
      case _.CONNECTED:
        this._userID = e.authResponse.userID;
        this._accessToken = e.authResponse.accessToken;
        t = new u.CastleFacebookSDKEvent(u.CastleFacebookSDKEvent.CONNECTED, e.authResponse);
        break;
      case _.NOT_AUTHORIZED:
        this._userID = "";
        this._accessToken = "";
        t = new u.CastleFacebookSDKEvent(u.CastleFacebookSDKEvent.NOT_AUTHORIZED);
        break;
      case _.AUTH_EXPIRED:
        h.warn("authorization_expired! :   this case was not handled by previous version of Module..  will fallback to NOT_CONNECTED");
      case _.UNKNOWN:
      default:
        this._userID = "";
        this._accessToken = "";
        t = new u.CastleFacebookSDKEvent(u.CastleFacebookSDKEvent.NOT_CONNECTED);
    }
    p.CastleBasicController.getInstance().dispatchEvent(t);
  };
  return FacebookModule;
}();
exports.FacebookModule = O;
function E(e) {
  var t;
  var i;
  if (document.hidden !== undefined) {
    t = "hidden";
    i = "visibilitychange";
  } else if (document.msHidden !== undefined) {
    t = "msHidden";
    i = "msvisibilitychange";
  } else if (document.webkitHidden !== undefined) {
    t = "webkitHidden";
    i = "webkitvisibilitychange";
  }
  document.addEventListener(i, function () {
    return e(document[t]);
  }, false);
}
exports.facebookAuthResponse = function () {
  return FB.getAuthResponse();
};
function y(e) {
  if (e.authResponse && e.status == _.CONNECTED) {
    return Promise.resolve(e);
  } else {
    return Promise.reject(e);
  }
}
exports.CastleFacebookModule = new O();