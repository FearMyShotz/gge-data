Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./74.js");
var a = require("./73.js");
var s = require("./192.js");
var r = require("./415.js");
var o = require("./185.js");
var l = require("./118.js");
var u = require("./475.js");
var c = require("./171.js");
var _ = require("./55.js");
var d = require("./11.js");
var m = require("./5.js");
var h = require("./2.js");
var p = require("./192.js");
exports.AccountCookie = p.AccountCookie;
var g = require("./73.js");
exports.DictionaryUtil = g.DictionaryUtil;
var E = require("./111.js");
exports.CampaignVarsVO = E.CampaignVarsVO;
var C = require("./74.js");
exports.GoodgamePartners = C.GoodgamePartners;
var f = h.getLogger("BasicEnvironmentGlobals");
var T = function () {
  function BasicEnvironmentGlobals() {
    this._forceInstanceConnect = false;
    this._defaultInstance = 0;
    this._isTest = false;
    this._isLiveTest = false;
    this._isDevTest = false;
    this._isUsabilityTest = false;
    this._isPreClient = false;
    this._isLocaTest = false;
    this._isLocal = false;
    this._isLocalHost = false;
    this._isLiveBranchingEnvironment = false;
    this._isFeatureBranchEnvironment = false;
    this._hasNetworkBuddies = false;
    this._enableFeedMessages = false;
    this._enablelonelyCow = false;
    this._requestPayByJS = false;
    this._networkNewsByJS = false;
    this._earnCredits = 0;
    this._allowedfullscreen = false;
    this._loginIsKeyBased = false;
    this._useexternallinks = false;
    this._invitefriends = false;
    this._minUsernameLength = 0;
    this._maxUsernameLength = 0;
    this._usePayment = false;
    this._isFirstVisitOfGGS = false;
    this._isFirstVisit = false;
    this._showVersion = false;
    this._isLoggingActive = true;
    this._showLoadingText = false;
    this._useZipXMLs = true;
    this._useABTest = false;
    this._cdnSubDomain = "content";
    this._gameFileSize = "content";
    this._frameOneSizeInKB = 0;
    this._isPrivateTestServer = false;
    this._registered = false;
    this._sessionStartTime = NaN;
    this._maintenanceMode = false;
    this._currentCountryLanguageCode = "";
    this._currentCountryLanguageVersion = 0;
    this._useVersionedFontSWF = true;
    this._gameSwfLoadingTime = 0;
    this._defaultCDN = _.CDN.Akamai;
    this._customCDN = _.CDN.None;
    this._useFallbackCDN = false;
    this._isIdentityManagementActive = false;
    this._underAgeConnectionLost = false;
    this._identiyManagementID = "";
    this._userTunnelActive = true;
  }
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networkId", {
    get: function () {
      this._networkId ||= l.paramToNum(this.urlVariables.urlParams.get("network"), i.GoodgamePartners.NETWORK_GENERAL);
      return this._networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLandingPageClient", {
    get: function () {
      this._isLandingPageClient ||= l.paramToBool(this.urlVariables.urlParams.get("clp"));
      return this._isLandingPageClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "pln", {
    get: function () {
      this._pln ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.PLN_PARAMETER));
      return this._pln;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sig", {
    get: function () {
      this._sig ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.SIG_PARAMETER));
      return this._sig;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "suk", {
    get: function () {
      this._suk ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.SUK_PARAMETER));
      return this._suk;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "branchId", {
    get: function () {
      return this._branchId;
    },
    set: function (e) {
      this._branchId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "branchVersion", {
    get: function () {
      return this._branchVersion;
    },
    set: function (e) {
      this._branchVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "featureBranchId", {
    get: function () {
      return this._featureBranchId;
    },
    set: function (e) {
      this._featureBranchId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "featureBranchEnvironment", {
    get: function () {
      return this._featureBranchEnvironment;
    },
    set: function (e) {
      this._featureBranchEnvironment = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlAGB", {
    get: function () {
      return d.BasicConstants.uniqueAgbLink(this._currentCountryLanguageCode);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlPolicy", {
    get: function () {
      return d.BasicConstants.uniquePolicyLink(this._currentCountryLanguageCode);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameId", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameTitle", {
    get: function () {
      return "Basic";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "publicGameTitleForPaths", {
    get: function () {
      if (this.gameId == 15) {
        return "bigfarm";
      } else {
        return "empire";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentGameTitle", {
    get: function () {
      return "Current Title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameDir", {
    get: function () {
      return this.gameTitle.toLowerCase();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "availableLanguages", {
    get: function () {
      var e = [];
      if (this.langVersionDict === undefined || this.langVersionDict === null) {
        return [];
      }
      for (var t = 0, n = a.DictionaryUtil.getKeys(this.langVersionDict); t < n.length; t++) {
        var i = n[t];
        e.push(i);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "domain", {
    get: function () {
      return "goodgamestudios.com";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "itemLibName", {
    get: function () {
      return this.gameTitle + "ItemLib";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "buildNumberGame", {
    get: function () {
      return this.versionInformation.buildNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gamePackageVersion", {
    get: function () {
      return this.versionInformation.versionNumberGame;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionText", {
    get: function () {
      return this.versionInformation.versionText;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "itemXmlVersion", {
    get: function () {
      return this.versionInformation.itemXmlVersion;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberItemsXML", {
    get: function () {
      return this.versionInformation.basicVersionNumberItemsXML;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberAchievementXML", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionNumberLevelXpXML", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionDateGame", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "numOfItemLibs", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cookieName", {
    get: function () {
      return "Goodgame" + this.gameTitle + "_" + this.networkId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "analyticsTrackingPath", {
    get: function () {
      return "/goodgameBasic";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "zipSuffix", {
    get: function () {
      if (this._useZipXMLs) {
        return "ggs";
      } else {
        return "xml";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "blueboxPort", {
    get: function () {
      return 80;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "blueboxPollSpeed", {
    get: function () {
      return 500;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAutoLogin", {
    get: function () {
      return !this._urlVariables.forceManualLogin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useZipXMLs", {
    get: function () {
      return this._useZipXMLs;
    },
    set: function (e) {
      this._useZipXMLs = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "showVersion", {
    get: function () {
      return this._showVersion;
    },
    set: function (e) {
      this._showVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "buildNumberServer", {
    get: function () {
      return this.versionInformation.buildNumberServer;
    },
    set: function (e) {
      this.versionInformation.buildNumberServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "minUsernameLength", {
    get: function () {
      return this._minUsernameLength;
    },
    set: function (e) {
      this._minUsernameLength = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "maxUsernameLength", {
    get: function () {
      return this._maxUsernameLength;
    },
    set: function (e) {
      this._maxUsernameLength = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useexternallinks", {
    get: function () {
      if (this.urlVariables.urlParams.has("useexternallinks")) {
        return l.paramToBool(this.urlVariables.urlParams.get("useexternallinks")) || this.urlVariables.urlParams.get("useexternallinks") == "true";
      } else {
        return this._useexternallinks;
      }
    },
    set: function (e) {
      this._useexternallinks = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "invitefriends", {
    get: function () {
      return this._invitefriends;
    },
    set: function (e) {
      this._invitefriends = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "loginIsKeyBased", {
    get: function () {
      if (this.urlVariables.urlParams.has("usekeybaselogin")) {
        return l.paramToBool(this.urlVariables.urlParams.get("usekeybaselogin")) || this.urlVariables.urlParams.get("usekeybaselogin") == "true";
      } else {
        return this._loginIsKeyBased;
      }
    },
    set: function (e) {
      this._loginIsKeyBased = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFirstVisitOfGGS", {
    get: function () {
      return this._isFirstVisitOfGGS;
    },
    set: function (e) {
      this._isFirstVisitOfGGS = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFirstVisit", {
    get: function () {
      return this._isFirstVisit;
    },
    set: function (e) {
      this._isFirstVisit = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "enableFeedMessages", {
    get: function () {
      return this._enableFeedMessages;
    },
    set: function (e) {
      this._enableFeedMessages = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "enableLonelyCow", {
    get: function () {
      return this._enablelonelyCow;
    },
    set: function (e) {
      this._enablelonelyCow = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "requestPayByJS", {
    get: function () {
      if (this.urlVariables.urlParams.has("requestpaybyjs")) {
        return l.paramToBool(this.urlVariables.urlParams.get("requestpaybyjs")) || this.urlVariables.urlParams.get("requestpaybyjs") == "true";
      } else {
        return this._requestPayByJS;
      }
    },
    set: function (e) {
      this._requestPayByJS = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networkNewsByJS", {
    get: function () {
      return this._networkNewsByJS;
    },
    set: function (e) {
      this._networkNewsByJS = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "earnCredits", {
    get: function () {
      return this._earnCredits;
    },
    set: function (e) {
      this._earnCredits = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "forceInstanceConnect", {
    get: function () {
      return this._forceInstanceConnect;
    },
    set: function (e) {
      this._forceInstanceConnect = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "defaultInstanceId", {
    get: function () {
      return this._defaultInstance;
    },
    set: function (e) {
      this._defaultInstance = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "networknameString", {
    get: function () {
      return this._networknameString;
    },
    set: function (e) {
      this._networknameString = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "hasNetworkBuddies", {
    get: function () {
      return this._hasNetworkBuddies;
    },
    set: function (e) {
      this._hasNetworkBuddies = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "allowedfullscreen", {
    get: function () {
      return this._allowedfullscreen;
    },
    set: function (e) {
      this._allowedfullscreen = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "href", {
    get: function () {
      return this._href || window.document.location.href || document.location.href;
    },
    set: function (e) {
      this._href = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "referrer", {
    get: function () {
      return this._referrer || window.document.referrer || document.location.href;
    },
    set: function (e) {
      this._referrer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cleanReferrer", {
    get: function () {
      var e = this.referrer || "";
      if (e.includes("?")) {
        e = e.split("?")[0];
      }
      if (e.charAt(e.length - 1) === "/") {
        e = e.substring(0, e.length - 1);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "localizeReplacements", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "neverUseAbbreviations", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "abbreviationThreshold", {
    get: function () {
      return 100000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "fractionalDigits", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "leadingZero", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "trailingZeros", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "invitedBy", {
    get: function () {
      return this._invitedBy;
    },
    set: function (e) {
      this._invitedBy = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accountId", {
    get: function () {
      if (this._accountCookie && this._accountCookie.accountId) {
        return this.accountCookie.accountId;
      } else {
        return "-1";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "campainVars", {
    get: function () {
      return this._campainVars;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.initCampaignVars = function (e) {
    this._campainVars ||= new o.CampaignVars();
    this._campainVars.initialize(e);
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "urlVariables", {
    get: function () {
      this._urlVariables ||= new l.BasicURLVariables();
      return this._urlVariables;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "jsVariables", {
    get: function () {
      this._jsVariables ||= new u.BasicJSVariables();
      return this._jsVariables;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isTest", {
    get: function () {
      return this._isTest;
    },
    set: function (e) {
      this._isTest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isDevTest", {
    get: function () {
      return this._isDevTest;
    },
    set: function (e) {
      this._isDevTest = e;
      if (this._isDevTest == 1) {
        this._isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLiveTest", {
    get: function () {
      return this._isLiveTest;
    },
    set: function (e) {
      this._isLiveTest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isPreClient", {
    get: function () {
      return this._isPreClient;
    },
    set: function (e) {
      this._isPreClient = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocaTest", {
    get: function () {
      return this._isLocaTest;
    },
    set: function (e) {
      this._isLocaTest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isPrivateTestServer", {
    get: function () {
      return this._isPrivateTestServer;
    },
    set: function (e) {
      this._isPrivateTestServer = e;
      if (this._isPrivateTestServer == 1) {
        this._isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocal", {
    get: function () {
      return this._isLocal;
    },
    set: function (e) {
      this._isLocal = e;
      if (this._isLocal) {
        this.isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLocalHost", {
    get: function () {
      return this._isLocalHost;
    },
    set: function (e) {
      this._isLocalHost = e;
      if (this._isLocalHost) {
        this.isTest = true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLiveBranchingEnvironment", {
    get: function () {
      return this._isLiveBranchingEnvironment;
    },
    set: function (e) {
      this._isLiveBranchingEnvironment = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFeatureBranchEnvironment", {
    get: function () {
      return this._isFeatureBranchEnvironment;
    },
    set: function (e) {
      this._isFeatureBranchEnvironment = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "distributorId", {
    get: function () {
      this._distributorId ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.DISTRIBUTOR_ID_PARAMETER), "0");
      return this._distributorId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accessKey", {
    get: function () {
      this._accessKey ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.KEY_PARAMETER), "");
      return this._accessKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gender", {
    get: function () {
      this._gender ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.GENDER_PARAMETER), "");
      return this._gender;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "displayName", {
    get: function () {
      this._displayName ||= l.paramToString(this.urlVariables.urlParams.get(d.BasicConstants.DISPLAY_NAME_PARAMETER), "");
      return this._displayName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "baseURL", {
    get: function () {
      if (!this._baseURL) {
        var e = window.location.href;
        var t = e.indexOf("[[IMPORT]]");
        this._baseURL = t != -1 ? d.BasicConstants.DOMAIN_PROTOCOL + "://" + e.slice(t + "[[IMPORT]]".length, e.lastIndexOf("/")) : e.slice(0, e.lastIndexOf("/"));
        if (this._baseURL.indexOf("http") == 0 && this._baseURL.indexOf("https") < 0) {
          this._baseURL = d.BasicConstants.DOMAIN_PROTOCOL + this._baseURL.substring(4);
        }
      }
      return this._baseURL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "langVersionDict", {
    get: function () {
      return this._langVersionDict;
    },
    set: function (e) {
      this._langVersionDict = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "usePayment", {
    get: function () {
      return this._usePayment;
    },
    set: function (e) {
      this._usePayment = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isLoggingActive", {
    get: function () {
      return this._isLoggingActive;
    },
    set: function (e) {
      this._isLoggingActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "showLoadingText", {
    get: function () {
      return this._showLoadingText;
    },
    set: function (e) {
      this._showLoadingText = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useABTest", {
    get: function () {
      return this._useABTest;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cdnSubDomain", {
    get: function () {
      if (this._useFallbackCDN) {
        return "media";
      } else {
        return "files-" + _.CDN.abbreviation(this.activeCDN);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cachebreakerSubDomain", {
    get: function () {
      return "cachebreaker";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "internalServerDomain", {
    get: function () {
      return d.BasicConstants.DOMAIN_INTERNAL_DNS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameFileSize", {
    get: function () {
      return this._gameFileSize;
    },
    set: function (e) {
      this._gameFileSize = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isUsabilityTest", {
    get: function () {
      return this._isUsabilityTest;
    },
    set: function (e) {
      this._isUsabilityTest = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isRegistered", {
    get: function () {
      return this._registered;
    },
    set: function (e) {
      this._registered = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionStartTime", {
    get: function () {
      return this._sessionStartTime;
    },
    set: function (e) {
      this._sessionStartTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionLength", {
    get: function () {
      return (Date.now() - this._sessionStartTime) / 1000;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useItemXML", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "maintenanceMode", {
    get: function () {
      return this._maintenanceMode;
    },
    set: function (e) {
      this._maintenanceMode = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isBeta", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentCountryLanguageCode", {
    get: function () {
      return this._currentCountryLanguageCode;
    },
    set: function (e) {
      this._currentCountryLanguageCode = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "currentCountryLanguageVersion", {
    get: function () {
      return this._currentCountryLanguageVersion;
    },
    set: function (e) {
      this._currentCountryLanguageVersion = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAwsTestTracking", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isCooleSpiele", {
    get: function () {
      this._isCooleSpiele ||= this.href.includes(BasicEnvironmentGlobals.REF_COOLE_SPIELE);
      return this._isCooleSpiele;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "doUserTunnelTracking", {
    get: function () {
      return !!this.isFirstVisitOfGGS || !!this.userFromLandingPage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isFacebook", {
    get: function () {
      return this._networkId == i.GoodgamePartners.NETWORK_FACEBOOK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "userFromLandingPage", {
    get: function () {
      return this.campainVars.isInitialized && this.campainVars.isValid();
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.deactivateUserTunnelTracking = function () {
    this._userTunnelActive = false;
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useVersionedFontSWF", {
    get: function () {
      return this._useVersionedFontSWF;
    },
    set: function (e) {
      this._useVersionedFontSWF = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "accountCookie", {
    get: function () {
      this._accountCookie ||= new s.AccountCookie(m.EnvGlobalsHandler.globals.jsVariables.journeyHash);
      return this._accountCookie;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sessionId", {
    get: function () {
      this._sessionId ||= (Math.random() * Number.MAX_VALUE).toFixed();
      return this._sessionId;
    },
    set: function (e) {
      this._sessionId ||= e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "cacheBreakerInfo", {
    get: function () {
      if (this._cacheBreakerInfo == null) {
        this._cacheBreakerInfo = new r.CachebreakerInfoObject();
      }
      return this._cacheBreakerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLegacyFontManagement", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useShortPaymentHashValidity", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "activeCDN", {
    get: function () {
      if (this._customCDN != _.CDN.None) {
        return this._customCDN;
      } else {
        return this._defaultCDN;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "customCDN", {
    set: function (e) {
      this._customCDN = e;
      this.updateBaseURLWithCDN();
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.updateBaseURLWithCDN = function () {
    var e = BasicEnvironmentGlobals.URL_PROTOCOL + "files-";
    if (!this.isTest && !this.isLocal && this.baseURL.indexOf(e) === 0) {
      var t = BasicEnvironmentGlobals.URL_PROTOCOL + this.cdnSubDomain + this.baseURL.slice(BasicEnvironmentGlobals.URL_PROTOCOL.length + this.cdnSubDomain.length);
      f.warn("NOT IMPLEMENTED YET Implement CDN beaviour when we have deployment to S3: why should baseUrl be overridden from  " + this.baseURL + "  to " + t + " ??? ");
    }
  };
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "fallBackCDN", {
    set: function (e) {
      this._useFallbackCDN = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "frameOneSizeInKB", {
    get: function () {
      return this._frameOneSizeInKB;
    },
    set: function (e) {
      this._frameOneSizeInKB = e;
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.prototype.setVersionInformation = function (e) {};
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "versionInformation", {
    get: function () {
      return c.VersionInformation.versionInstance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLaggyClientEmulation", {
    get: function () {
      return !!this._urlVariables.emulateLaggyClient;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "laggyClientMinDelay", {
    get: function () {
      return this._urlVariables.laggyClientMinDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "laggyClientMaxDelay", {
    get: function () {
      return this._urlVariables.laggyClientMaxDelay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isIdentityManagementActive", {
    get: function () {
      return this._isIdentityManagementActive;
    },
    set: function (e) {
      this._isIdentityManagementActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "identityManagementId", {
    get: function () {
      return this._identiyManagementID;
    },
    set: function (e) {
      this._identiyManagementID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "identityManagmentLicenseVO", {
    get: function () {
      throw new Error("BasicEnvironmentGlobals, get identityManagmentLicenseVO: No VO provided!");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "underAgeConnectionLost", {
    get: function () {
      return this._underAgeConnectionLost;
    },
    set: function (e) {
      this._underAgeConnectionLost = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useLegacySocialRegistration", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isSSO", {
    get: function () {
      return this.pln !== "" && this.sig !== "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "trackingVerifierIsActive", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "useAnimatedGGSPreloader", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "gameSwfLoadingTime", {
    get: function () {
      return this._gameSwfLoadingTime;
    },
    set: function (e) {
      this._gameSwfLoadingTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "ageGateFeatureIsActive", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "previousFirstInstanceGamestate", {
    get: function () {
      return this._previousFirstInstanceGamestate;
    },
    set: function (e) {
      this._previousFirstInstanceGamestate = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "isGGSEnvironment", {
    get: function () {
      return this.href.indexOf(d.BasicConstants.GGS_DOMAIN) !== -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "baseAssetsURL", {
    get: function () {
      return this._baseAssetsURL;
    },
    set: function (e) {
      this._baseAssetsURL = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "platformId", {
    get: function () {
      if (this.urlVariables.nativeStore == d.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return d.BasicConstants.PLATFORM_ID_MS;
      } else {
        return d.BasicConstants.PLATFORM_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicEnvironmentGlobals.prototype, "storeId", {
    get: function () {
      if (this.urlVariables.nativeStore == d.BasicConstants.NATIVE_STORE_MICROSOFT) {
        return d.BasicConstants.STORE_ID_MS;
      } else {
        return d.BasicConstants.STORE_ID_WEB;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicEnvironmentGlobals.URL_PROTOCOL = d.BasicConstants.DOMAIN_PROTOCOL + "://";
  BasicEnvironmentGlobals.REF_COOLE_SPIELE = "coolespiele.com";
  return BasicEnvironmentGlobals;
}();
exports.BasicEnvironmentGlobals = T;