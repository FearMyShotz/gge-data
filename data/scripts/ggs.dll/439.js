Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./440.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./96.js");
var o = require("./442.js");
var l = require("./49.js");
var u = require("./184.js");
var c = require("./4.js");
var _ = require("./2.js");
var d = require("./3.js");
var m = _.getLogger("CoreJS.BasicSocialData");
var h = function () {
  function BasicSocialData() {
    this._displayNameExistingPlayer = "";
    this.socialLoginReloginCount = 0;
  }
  BasicSocialData.prototype.inviteFriends = function () {
    if (this.env.hasNetworkBuddies) {
      this.externalInterface(BasicSocialData.INVITE);
    }
  };
  BasicSocialData.prototype.reloadIFrame = function () {
    this.externalInterface(BasicSocialData.RELOAD);
  };
  BasicSocialData.prototype.setSocialData = function (e, t) {
    r.ExternalInterfaceController.instance.executeJavaScriptFunction(new i.JavascriptCallOnSetSessionParametersFactory(e));
  };
  BasicSocialData.prototype.externalInterface = function (e, t = null) {
    switch (e) {
      case BasicSocialData.INVITE:
      case BasicSocialData.RELOAD:
        d.ExternalInterface.call(e);
        break;
      case BasicSocialData.EXTERNAL_TRIGGER_ERROR:
        d.ExternalInterface.call(e, t[0], t[1]);
    }
  };
  Object.defineProperty(BasicSocialData.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.prototype.setDisplayNameExistingPlayer = function (e) {
    this._displayNameExistingPlayer = e || "";
    var t = new u.SocialDataEvent(u.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED);
    t.playerName = c.BasicModel.socialData.displayNameExistingPlayer;
    s.BasicController.getInstance().dispatchEvent(t);
  };
  Object.defineProperty(BasicSocialData.prototype, "displayNameExistingPlayer", {
    get: function () {
      return this._displayNameExistingPlayer;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.prototype.requestLoginKeys = function () {
    m.info("Request new login keys from PHP");
    d.ExternalInterface.addCallback(o.FlashCallbackFunctionName.SET_LOGIN_KEYS, this.onSetLoginKeys);
    d.ExternalInterface.call(l.JavascriptFunctionName.REQUEST_LOGIN_KEYS);
  };
  BasicSocialData.prototype.onSetLoginKeys = function (e, t) {
    m.info("Login keys refreshed, sig: " + e + ", suk: " + t);
    this._signatureKey = e;
    this._supportKey = t;
    this.env.sig = this._signatureKey;
    this.env.suk = this._supportKey;
    var n = new u.SocialDataEvent(u.SocialDataEvent.LOGIN_KEYS_REFRESHED);
    n.signatureKey = this._signatureKey;
    n.supportKey = this._supportKey;
    s.BasicController.getInstance().dispatchEvent(n);
  };
  BasicSocialData.prototype.logoutSupported = function () {
    return c.BasicModel.instanceProxy.instanceMap.length > 1;
  };
  Object.defineProperty(BasicSocialData.prototype, "supportKey", {
    get: function () {
      return this._supportKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSocialData.prototype, "signatureKey", {
    get: function () {
      return this._signatureKey;
    },
    enumerable: true,
    configurable: true
  });
  BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES = 3;
  BasicSocialData.INVITE = "invite";
  BasicSocialData.RELOAD = "reload";
  BasicSocialData.EXTERNAL_TRIGGER_ERROR = "triggerError";
  return BasicSocialData;
}();
exports.BasicSocialData = h;