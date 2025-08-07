Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function NetworkCookie() {
    return e.call(this, "nc") || this;
  }
  i.__extends(NetworkCookie, e);
  NetworkCookie.prototype.saveLoginData = function (e, t) {
    this.setAttribute(NetworkCookie.ATTRIBUTE_USERNAME, e, false);
    this.setAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, t, false);
    this.writeLocalStorage();
  };
  NetworkCookie.prototype.deleteLoginData = function () {
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_USERNAME, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, false);
    this.writeLocalStorage();
  };
  NetworkCookie.prototype.clear = function () {
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_USERNAME, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_EMAIL, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_COUNTRY, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, false);
    this.deleteAttribute(NetworkCookie.ATTRIBUTE_CLIENT_VERSION, false);
    this.writeLocalStorage();
  };
  Object.defineProperty(NetworkCookie.prototype, "username", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_USERNAME);
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_USERNAME, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "loginToken", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN);
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "email", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_EMAIL);
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_EMAIL, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "country", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_COUNTRY)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_COUNTRY);
      } else {
        return "";
      }
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_COUNTRY, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "playerId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID)) {
        return this.getAttributeAsNumber(NetworkCookie.ATTRIBUTE_PLAYER_ID);
      } else {
        return 0;
      }
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_PLAYER_ID, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "instanceId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID)) {
        return this.getAttributeAsNumber(NetworkCookie.ATTRIBUTE_INSTANCE_ID);
      } else {
        return 0;
      }
    },
    set: function (e) {
      if (e <= -1) {
        e = 0;
      }
      this.setAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "hasInstanceId", {
    get: function () {
      return this.hasAttribute(NetworkCookie.ATTRIBUTE_INSTANCE_ID) && this.getAttributeAsInt(NetworkCookie.ATTRIBUTE_INSTANCE_ID) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "zoneId", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_ZONE_ID);
      } else {
        return "";
      }
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_ZONE_ID, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "facebookUID", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_FACEBOOK_UID);
      } else {
        return "";
      }
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_UID, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "facebookAccessToken", {
    get: function () {
      if (this.hasAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN)) {
        return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN);
      } else {
        return "";
      }
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NetworkCookie.prototype, "clientVersion", {
    get: function () {
      return this.getAttributeAsString(NetworkCookie.ATTRIBUTE_CLIENT_VERSION + (this.hasInstanceId ? this.instanceId : ""));
    },
    set: function (e) {
      this.setAttribute(NetworkCookie.ATTRIBUTE_CLIENT_VERSION + (this.hasInstanceId ? this.instanceId : ""), e);
    },
    enumerable: true,
    configurable: true
  });
  NetworkCookie.prototype.isEmpty = function () {
    return this._localStorage.getAttributes().length == 0;
  };
  NetworkCookie.ATTRIBUTE_USERNAME = "p_username";
  NetworkCookie.ATTRIBUTE_EMAIL = "p_email";
  NetworkCookie.ATTRIBUTE_LOGIN_TOKEN = "p_loginToken";
  NetworkCookie.ATTRIBUTE_COUNTRY = "country";
  NetworkCookie.ATTRIBUTE_PLAYER_ID = "playerID";
  NetworkCookie.ATTRIBUTE_INSTANCE_ID = "instanceId";
  NetworkCookie.ATTRIBUTE_ZONE_ID = "zoneId";
  NetworkCookie.ATTRIBUTE_FACEBOOK_UID = "facebookUID";
  NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN = "facebook_accessToken";
  NetworkCookie.ATTRIBUTE_CLIENT_VERSION = "clientVersion";
  NetworkCookie.ATTRIBUTES = [NetworkCookie.ATTRIBUTE_USERNAME, NetworkCookie.ATTRIBUTE_EMAIL, NetworkCookie.ATTRIBUTE_LOGIN_TOKEN, NetworkCookie.ATTRIBUTE_COUNTRY, NetworkCookie.ATTRIBUTE_PLAYER_ID, NetworkCookie.ATTRIBUTE_INSTANCE_ID, NetworkCookie.ATTRIBUTE_ZONE_ID, NetworkCookie.ATTRIBUTE_FACEBOOK_UID, NetworkCookie.ATTRIBUTE_FACEBOOK_ACCESS_TOKEN, NetworkCookie.ATTRIBUTE_CLIENT_VERSION];
  return NetworkCookie;
}(require("./113.js").AbstractCookie);
exports.NetworkCookie = a;