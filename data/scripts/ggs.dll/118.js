Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./11.js");
var a = require("./165.js");
var s = require("./3.js");
exports.paramToString = function (e = null, t = "") {
  return e || t;
};
exports.paramToBool = function (e = null, t = false) {
  if (e) {
    if (isNaN(Number(e))) {
      return e.toLowerCase() === "true";
    } else {
      return e !== "0";
    }
  } else {
    return t;
  }
};
exports.paramToNum = function (e = null, t = 0) {
  if (!e) {
    return t;
  }
  var n = Number(e);
  if (isNaN(n)) {
    return t;
  } else {
    return n;
  }
};
var r = require("./2.js").getLogger("CoreJS.BasicURLVariables");
var o = "not-set";
var l = function () {
  function BasicURLVariables() {
    this._initialized = false;
    this._instance = 0;
    this._emulateLaggyClient = false;
    this._forceManualLogin = false;
    this._websiteId = o;
    this._lpWebsiteId = o;
    this._loginSource = o;
    this._laggyClientMinDelay = 50;
    this._laggyClientMaxDelay = 250;
    this._testNetConf = false;
    this._forceToShowLogger = false;
    this._friendInviteCode = "";
    this._friendInviteZoneId = 0;
    this._friendInviteInviterPlayerId = 0;
    this._friendInviteInviterCountryCode = "";
    this._disableFacebookLogin = false;
    this._disableFriendInvite = false;
    this._nativeStore = "";
  }
  BasicURLVariables.prototype.initParams = function (e) {
    if (!this._initialized) {
      this._initialized = true;
      var t = (e = (e || "").replace("?", "")).length > 0 ? [window.location.search, e].join("&") : window.location.search;
      this._params = new URLSearchParams(t);
      this.parseParameters();
    }
  };
  BasicURLVariables.prototype.parseParameters = function () {
    this._testNetConf = exports.paramToBool(this._params.get(i.BasicConstants.NETCONF_TEST_PARAMETER));
    if (this._params.has(i.BasicConstants.FRIEND_INVITE_CODE)) {
      this._friendInviteCode = exports.paramToString(this._params.get(i.BasicConstants.FRIEND_INVITE_CODE));
      var e = this._friendInviteCode.split("-");
      if (e.length > 0) {
        var n = e[0];
        this._friendInviteZoneId = parseInt(n, 36);
        this._friendInviteZoneId = isNaN(this._friendInviteZoneId) ? 0 : this._friendInviteZoneId;
        this._friendInviteInviterPlayerId = parseInt(e[1], 36);
        this._friendInviteInviterPlayerId = isNaN(this._friendInviteInviterPlayerId) ? 0 : this._friendInviteInviterPlayerId;
      } else {
        this._friendInviteZoneId = 0;
      }
      var a = undefined;
      a = e.length === 3 ? e[2] : e.length === 4 ? e[3] : "";
      a = /[a-zA-Z]+/.test(a) ? a : "";
      this._friendInviteInviterCountryCode = a;
    }
    this._forceToShowLogger = exports.paramToBool(this._params.get(i.BasicConstants.FORCE_TO_SHOW_LOGGER));
    this._laggyClientMinDelay = exports.paramToNum(this._params.get(i.BasicConstants.LAGGY_CLIENT_MIN_DELAY), 50);
    r.debug("laggy client min delay has been set to " + this._laggyClientMinDelay + " ms");
    this._laggyClientMaxDelay = exports.paramToNum(this._params.get(i.BasicConstants.LAGGY_CLIENT_MAX_DELAY), 250);
    r.debug("laggy client max delay has been set to " + this._laggyClientMaxDelay + " ms");
    window.useMinAssets = exports.paramToBool(this._params.get(i.BasicConstants.USE_MIN_ASSETS), true);
    this._disableFacebookLogin = exports.paramToBool(this._params.get(i.BasicConstants.DISABLE_FACEBOOK_LOGIN), false);
    this._disableFriendInvite = exports.paramToBool(this._params.get(i.BasicConstants.DISABLE_FACEBOOK_LOGIN), false);
    this._nativeStore = exports.paramToString(this._params.get(i.BasicConstants.NATIVE_STORE), "");
  };
  BasicURLVariables.prototype.readQueryParametersFromLandingPage = function () {
    var e = this;
    if (s.ExternalInterface.available) {
      if (this._initialized) {
        return Promise.resolve("already initialized");
      } else {
        return new Promise(function (t, n) {
          s.ExternalInterface.asyncCall("ggsGetQueryParameters").then(function (n) {
            e.initParams(n);
            t();
          }).catch(function (n) {
            e.initParams();
            t();
          });
        });
      }
    } else {
      this.initParams();
      return Promise.resolve();
    }
  };
  Object.defineProperty(BasicURLVariables.prototype, "urlParams", {
    get: function () {
      return this._params;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "presetInstanceId", {
    get: function () {
      this._instance ||= exports.paramToNum(this._params.get("instance"));
      return this._instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "country", {
    get: function () {
      this._country ||= exports.paramToString(this._params.get(i.BasicConstants.COUNTRY_PARAMETER));
      return this._country;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceToShowTestServers", {
    get: function () {
      this._forceToShowTestServers ||= exports.paramToBool(this._params.get(i.BasicConstants.FORCE_TO_SHOW_TEST_SERVERS));
      return this._forceToShowTestServers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "emulateLaggyClient", {
    get: function () {
      this._emulateLaggyClient ||= exports.paramToBool(this._params.get(i.BasicConstants.COMMAND_EMULATE_LAGGY_CLIENT));
      return this._emulateLaggyClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceManualLogin", {
    get: function () {
      this._forceManualLogin ||= exports.paramToBool(this._params.get(i.BasicConstants.FORCE_MANUAL_LOGIN));
      return this._forceManualLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forcedMaintenance", {
    get: function () {
      if (!this._forcedMaintenance) {
        if (this._params.has(i.BasicConstants.MAINTENANCE_PARAMETER)) {
          var e = this._params.get(i.BasicConstants.MAINTENANCE_PARAMETER);
          if (e === "on") {
            this._forcedMaintenance = a.ForcedMaintenanceEnum.ON;
          } else if (e === "off") {
            this._forcedMaintenance = a.ForcedMaintenanceEnum.OFF;
          } else {
            r.warn(e + " is not an accepted param for {maintenance} - please use on/off");
            this._forcedMaintenance = a.ForcedMaintenanceEnum.NOT_SET;
          }
        } else {
          this._forcedMaintenance = a.ForcedMaintenanceEnum.NOT_SET;
        }
        return this._forcedMaintenance;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "websiteId", {
    get: function () {
      if (this._websiteId == o) {
        this._websiteId = exports.paramToString(this._params.get(i.BasicConstants.PARTNER_WEBSITE), "0");
      }
      return this._websiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "lpWebsiteId", {
    get: function () {
      if (this._lpWebsiteId == o) {
        this._lpWebsiteId = exports.paramToString(this._params.get(i.BasicConstants.LP_PARTNER_WEBSITE), "0");
      }
      return this._lpWebsiteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "extendedWebsiteID", {
    get: function () {
      if (this.websiteId !== "0") {
        return this.websiteId;
      } else if (this.lpWebsiteId !== "0") {
        return this.lpWebsiteId;
      } else {
        return "0";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "loginSource", {
    get: function () {
      if (this._loginSource == o) {
        this._loginSource = exports.paramToString(this._params.get(i.BasicConstants.LOGIN_SOURCE), "0");
      }
      return this._loginSource;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "laggyClientMinDelay", {
    get: function () {
      return this._laggyClientMinDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "laggyClientMaxDelay", {
    get: function () {
      return this._laggyClientMaxDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "testNetConf", {
    get: function () {
      return this._testNetConf;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "forceToShowLogger", {
    get: function () {
      return this._forceToShowLogger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteCode", {
    get: function () {
      return this._friendInviteCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteZoneId", {
    get: function () {
      return this._friendInviteZoneId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteInviterPlayerId", {
    get: function () {
      return this._friendInviteInviterPlayerId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "friendInviteInviterCountryCode", {
    get: function () {
      return this._friendInviteInviterCountryCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "isFacebookLoginDisabled", {
    get: function () {
      return this._disableFacebookLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "isFriendInviteDisabled", {
    get: function () {
      return this._disableFriendInvite;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicURLVariables.prototype, "nativeStore", {
    get: function () {
      return this._nativeStore;
    },
    enumerable: true,
    configurable: true
  });
  return BasicURLVariables;
}();
exports.BasicURLVariables = l;