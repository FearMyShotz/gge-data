Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./111.js");
var s = require("./38.js");
var r = require("./56.js");
var o = require("./17.js");
var l = require("./77.js");
var u = require("./11.js");
var c = require("./163.js");
var _ = require("./43.js");
var d = require("./4.js");
var m = require("./770.js");
var h = require("./337.js");
var p = require("./118.js");
var g = require("./5.js");
var E = require("./23.js");
var C = require("./771.js");
var f = require("./338.js");
var T = require("./3.js");
var S = require("./2.js");
var y = require("./55.js");
var I = require("./339.js");
var v = S.getLogger("CoreJS.BasicCacheBreakerSwf");
var A = function () {
  function BasicCacheBreakerSwf() {
    this._accountCookieInizialized = false;
    this._networkCookieInitialized = false;
    this.initialize();
  }
  BasicCacheBreakerSwf.prototype.initialize = function () {
    var e = this;
    this.env.sessionStartTime = Date.now();
    this.loadURLVariables().then(function () {
      e.initializeEnvironment();
      e.initializeLogger();
      e.initializeStats();
      e.initializeCookies().then(function (t) {
        e.initializeCampaignData();
        e.initializeEnvironmentProvider();
        e.initTracking();
        e.startWorldAssignment();
        e.checkFirstVisit();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.checkFirstVisit = function () {
    if (!this.env.isLocal) {
      this.env.isFirstVisit = d.BasicModel.networkCookie.isEmpty();
    }
  };
  BasicCacheBreakerSwf.prototype.loadURLVariables = function () {
    return i.__awaiter(this, undefined, undefined, function () {
      return i.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.env.urlVariables.readQueryParametersFromLandingPage()];
          case 1:
            e.sent();
            return [2];
        }
      });
    });
  };
  BasicCacheBreakerSwf.prototype.initializeEnvironment = function () {
    var e = window.location.href;
    var t = this.env.urlVariables.urlParams;
    this.env.isLocalHost = u.BasicConstants.isLocalHost(e);
    var n = this.env.isLocalHost || window.location.hostname.search("test") !== -1 && (window.location.pathname.search("/qa/") !== -1 || window.location.pathname.search("/development/") !== -1);
    var i = p.paramToBool(t.get("forceProductionEnv"));
    this.env.isTest = this.env.isLocal = !i && n;
    this.env.isPrivateTestServer = e.indexOf(u.BasicConstants.PRIVATE_TEST_SERVER_URL) !== -1;
    this.env.isUsabilityTest = e.indexOf(u.BasicConstants.USABILITYTEST_FOLDER) !== -1;
    this.env.isPreClient = e.indexOf(u.BasicConstants.PRECLIENT_FOLDER) !== -1;
    this.env.isDevTest = e.indexOf(u.BasicConstants.DEV_TEST_FOLDER) !== -1;
    this.env.isLocaTest = e.indexOf(u.BasicConstants.LOCA_TEST_FOLDER) !== -1;
    if (e.indexOf(u.BasicConstants.LIVE_TEST_FOLDER) !== -1) {
      this.env.isLiveTest = true;
    }
    this.env.isLiveBranchingEnvironment = e.indexOf(u.BasicConstants.LIVE_BRANCHING_ENVIRONMENT) !== -1;
    var a = h.detectFeatureBranchEnvironment(e);
    var s = a.isFeatureBranch;
    var r = a.id;
    var o = a.environment;
    this.env.isFeatureBranchEnvironment = s;
    this.env.featureBranchId = r;
    this.env.featureBranchEnvironment = o;
  };
  BasicCacheBreakerSwf.prototype.initializeLogger = function () {
    S.CoreLoggerConfigurator.setLevel(this.env.isTest ? S.LoggingLevel.DEBUG : S.LoggingLevel.WARN);
  };
  BasicCacheBreakerSwf.prototype.initializeStats = function () {
    if (this.env.isTest) {
      var e = new I();
      document.body.appendChild(e.dom);
      createjs.Ticker.addEventListener("tick", function () {
        e.update();
      });
    }
  };
  BasicCacheBreakerSwf.prototype.initializeCookies = function () {
    return i.__awaiter(this, undefined, undefined, function () {
      return i.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4, this.env.jsVariables.readVariablesFromJavaScript()];
          case 1:
            e.sent();
            return [4, this.loadHref()];
          case 2:
            e.sent();
            return [4, this.loadReferrer()];
          case 3:
            e.sent();
            return [4, this.loadAccountCookie()];
          case 4:
            e.sent();
            return [4, this.loadNetworkCookie()];
          case 5:
            e.sent();
            return [4, this.loadDataFromIntegrationPage()];
          case 6:
            e.sent();
            return [2];
        }
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadHref = function () {
    var e = this;
    v.info("loadHref");
    if (T.ExternalInterface.available) {
      return new Promise(function (t, n) {
        T.ExternalInterface.asyncCall("ggsGetHref").then(function (n) {
          v.info(n);
          e.env.href = n;
          t();
        }).catch(function (e) {
          v.info(e);
          t();
        });
      });
    } else {
      v.info("ExternalInterface not available...");
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadReferrer = function () {
    var e = this;
    v.info("loadReferrer");
    if (T.ExternalInterface.available) {
      return new Promise(function (t, n) {
        T.ExternalInterface.asyncCall("ggsGetReferrer").then(function (n) {
          v.info(n);
          var i = new URL(n);
          e.env.referrer = i.origin;
          t();
        }).catch(function (e) {
          v.info(e);
          t();
        });
      });
    } else {
      v.info("ExternalInterface not available...");
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadAccountCookie = function () {
    var e = this;
    return new Promise(function (t) {
      v.info("loadAccountCookie");
      e.env.accountCookie.initialize().then(function (n) {
        v.info("AccountCookie loaded");
        e.env.accountCookie.newSession();
        e._accountCookieInizialized = true;
        if (e._networkCookieInitialized) {
          e.env.accountCookie.updateSessionWithNewData(e.env.buildNumberGame, d.BasicModel.networkCookie.clientVersion);
        }
        e.env.isFirstVisitOfGGS = e.env.accountCookie.isNewAccount;
        if (e.env.accountCookie.cdn !== y.CDN.None) {
          e.env.customCDN = e.env.accountCookie.cdn;
        }
        t();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadNetworkCookie = function () {
    var e = this;
    return new Promise(function (t) {
      v.info("loadNetworkCookie");
      d.BasicModel.networkCookie.initialize().then(function (n) {
        v.info("NetworkCookie loaded");
        e._networkCookieInitialized = true;
        if (e._accountCookieInizialized) {
          e.env.accountCookie.updateSessionWithNewData(e.env.buildNumberGame, d.BasicModel.networkCookie.clientVersion);
        }
        t();
      });
    });
  };
  BasicCacheBreakerSwf.prototype.loadDataFromIntegrationPage = function () {
    var e = this;
    if (T.ExternalInterface.available) {
      return new Promise(function (t) {
        e.loadPageIntegrationCookies().then(function (e) {
          v.info("got data from integration page", e);
          t();
        }).catch(function (e) {
          v.warn("got an error reading from IntegrationPage -  we will go on with normal initialization", e);
          t();
        });
      });
    } else {
      return Promise.resolve();
    }
  };
  BasicCacheBreakerSwf.prototype.loadPageIntegrationCookies = function () {
    return new Promise(function (e, t) {
      T.ExternalInterface.asyncCall("ggsGetAutologinData").then(function (t) {
        var n;
        T.ExternalInterface.call("ggsRemoveAutologinData");
        if ((n = t) && n.instanceId != null && n.playerId != null && n.country != null && n.gameId != null && (n.username != null && n.loginToken != null || n.facebookUID != null)) {
          d.BasicModel.networkCookie.instanceId = t.instanceId;
          d.BasicModel.networkCookie.playerId = t.playerId;
          d.BasicModel.networkCookie.country = t.country;
          if (t.username != null && t.loginToken != null) {
            if (t.email != null) {
              d.BasicModel.networkCookie.email = t.email;
            }
            d.BasicModel.networkCookie.saveLoginData(t.username, t.loginToken);
          } else {
            d.BasicModel.networkCookie.facebookUID = t.facebookUID;
            d.BasicModel.networkCookie.facebookAccessToken = t.facebookAccessToken || "";
          }
          e("found cookies on integration page");
        } else {
          e("no valid cookie found on integration page");
        }
      }).catch(function (e) {
        v.warn(e);
        t(e);
      });
    });
  };
  BasicCacheBreakerSwf.prototype.initializeCampaignData = function () {
    this.env.initCampaignVars(new a.CampaignVarsVO(this.env.urlVariables.urlParams, T.getQualifiedClassName(this), a.CampaignVarsVO.SOURCE_URL_PARAMETER));
  };
  BasicCacheBreakerSwf.prototype.initializeEnvironmentProvider = function () {
    c.EnvironmentProvider.instance.clear();
    c.EnvironmentProvider.instance.globals = this.env;
    this.addGameSpecificEnvironments();
    if (this.customEnvironments) {
      for (var e = 0; e < this.customEnvironments.length; e++) {
        c.EnvironmentProvider.instance.add(this.customEnvironments[e]);
      }
    }
    c.EnvironmentProvider.instance.detect();
  };
  BasicCacheBreakerSwf.prototype.initTracking = function () {
    o.TrackingCache.getInstance().init(this.env.gameId, this.env.networkId, this.env.referrer, this.env.accountId, T.Capabilities.language);
    o.TrackingCache.getInstance().useTestValidationServer(p.paramToBool(this.env.urlVariables.urlParams.get("validateTrackingEvents")));
  };
  BasicCacheBreakerSwf.prototype.startWorldAssignment = function () {
    var e = this;
    v.info("start World Assignment");
    var t = this.createWorldAssignmentConfig();
    this._worldAssignment = new y.WorldAssignment();
    this._worldAssignment.initialize(t);
    this._worldAssignment.start(r.ClientFunnelTrackingController.getInstance().trackState).then(function (t) {
      return e.onWorldAssignmentComplete(t);
    }).catch(function (t) {
      return e.onWorldAssignmentFail(t);
    });
    window.ggs.worldAssignment = this._worldAssignment;
  };
  BasicCacheBreakerSwf.prototype.createWorldAssignmentConfig = function () {
    v.debug("env.isTest " + this.env.isTest);
    var e = new y.WorldAssignmentGlobals();
    e.isTestEnvironment = this.env.isTest;
    e.forceToShowTestServers = this.env.urlVariables.forceToShowTestServers;
    e.useDynamicWorldAssignment = this._useDynamicWorldAssignment;
    e.geoIPUrl = this.geoIPUrl;
    e.countriesConfigUrl = _.PathProvider.instance.countryConfigURL;
    e.networkConfigUrl = _.PathProvider.instance.networkConfigURL;
    e.branchesConfigUrl = _.PathProvider.instance.branchesConfigURL;
    e.versionUrl = _.PathProvider.instance.versionURL;
    e.zoneCapacityUrl = _.PathProvider.instance.zoneCapacitiesConfigURL;
    e.browserLanguage = T.Capabilities.language;
    e.timezoneOffset = l.TimezoneUtil.getUTCTimezoneWithoutDST();
    e.countryCodeFromNetworkCookie = d.BasicModel.networkCookie.country;
    e.countryCodeFromQueryString = this.env.urlVariables.country;
    e.isHydraLogin = !!this.env.suk;
    e.fakeGeoIpResponse = null;
    e.alsoDetectUnavailableCountries = false;
    e.presetInstanceId = this.env.urlVariables.presetInstanceId;
    e.instanceIdFromNetworkCookie = d.BasicModel.networkCookie.instanceId;
    e.zoneIdFromNetworkCookie = parseFloat(d.BasicModel.networkCookie.zoneId);
    e.zoneIdFromFriendInviteCode = this.env.urlVariables.friendInviteZoneId;
    e.countryCodeFromFriendInviteCode = this.env.urlVariables.friendInviteInviterCountryCode;
    return e;
  };
  BasicCacheBreakerSwf.prototype.onWorldAssignmentComplete = function (e) {
    v.info("world assignment complete");
    d.BasicModel.networkCookie.instanceId = e.instanceId;
    d.BasicModel.networkCookie.zoneId = e.zoneId.toString();
    this.env.allowedfullscreen = this._worldAssignment.facade.networkSettings.allowedFullScreen;
    this.env.defaultInstanceId = this._worldAssignment.facade.networkSettings.defaultInstanceId;
    this.env.earnCredits = this._worldAssignment.facade.networkSettings.earnCredits;
    this.env.enableFeedMessages = this._worldAssignment.facade.networkSettings.enableFeedMessages;
    this.env.enableLonelyCow = this._worldAssignment.facade.networkSettings.enableLonelyCow;
    this.env.invitefriends = this._worldAssignment.facade.networkSettings.inviteFriends;
    this.env.maxUsernameLength = this._worldAssignment.facade.networkSettings.maxUsernameLength;
    this.env.hasNetworkBuddies = this._worldAssignment.facade.networkSettings.networkBuddies;
    this.env.networknameString = this._worldAssignment.facade.networkSettings.networkName;
    this.env.requestPayByJS = this._worldAssignment.facade.networkSettings.requestPayByJS;
    this.env.showVersion = this._worldAssignment.facade.networkSettings.showVersion;
    this.env.useexternallinks = this._worldAssignment.facade.networkSettings.useExternalLinks;
    this.env.loginIsKeyBased = this._worldAssignment.facade.networkSettings.useKeyBasedLogin;
    this.env.usePayment = this._worldAssignment.facade.networkSettings.usePayment;
    d.BasicModel.networkCookie.clientVersion = this.env.buildNumberGame;
    v.debug("build number  " + this.env.buildNumberGame + " /  " + this.env.versionInformation.buildNumberGame);
    v.debug("semver  " + this.env.gamePackageVersion + " / " + this.env.versionInformation.versionNumberGame);
    this.loadGame();
  };
  BasicCacheBreakerSwf.prototype.onWorldAssignmentFail = function (e) {
    var t = e.id || y.WorldAssignmentErrorCodes.UNKNOWN_ERROR;
    var n = e.message;
    v.error("WorldAssignment failed: " + n + " (error id " + t + ")");
    E.ExternalLog.logger.log(new C.WorldAssingmentErrorFactory(t, n));
  };
  BasicCacheBreakerSwf.prototype.loadGame = function () {
    v.info("LOAD Game.bundle.js");
    m.executeImpressionTrackingEvent(this.env);
    var e = document.createElement("script");
    var t = document.getElementById("Game");
    if (t) {
      e.src = t.getAttribute("href");
      e.onload = this.gameLoaded.bind(this);
      document.body.appendChild(e);
    } else {
      v.error("Unable to find the HTML link element with id 'Game'.");
      E.ExternalLog.logger.log(new f.PageIntegrationErrorFactory(f.PageIntegrationErrorFactory.GAME_ELEMENT_MISSING, "Unable to find the HTML link element with id 'Game'."));
    }
  };
  BasicCacheBreakerSwf.prototype.gameLoaded = function () {
    v.info("Game.bundle.js WAS LOADED");
    r.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.CLIENT_START);
  };
  BasicCacheBreakerSwf.prototype.addGameSpecificEnvironments = function () {};
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "env", {
    get: function () {
      return g.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "geoIPUrl", {
    get: function () {
      return u.BasicConstants.DOMAIN_PROTOCOL + "://i2c.goodgamestudios.com";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "customEnvironments", {
    get: function () {
      return [];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicCacheBreakerSwf.prototype, "useDynamicWorldAssignment", {
    set: function (e) {
      this._useDynamicWorldAssignment = e;
      this._zoneCapacityLoaded = !e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicCacheBreakerSwf;
}();
exports.BasicCacheBreakerSwf = A;