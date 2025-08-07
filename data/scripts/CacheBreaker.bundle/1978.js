Object.defineProperty(exports, "__esModule", {
  value: true
});
var o = require("./0.js");
var r = require("./2.js");
var s = require("./2.js");
var i = require("./2.js");
var a = require("./2.js");
var l = require("./1.js");
var c = require("./306.js");
var p = function (e) {
  function CastleEnvironmentGlobals() {
    var t = e.call(this) || this;
    t._isOnTemporaryServer = false;
    t._isOnAllianceBattleGroundServer = false;
    t._isTemporaryServerTestRun = false;
    t._isCrossplay = false;
    t._isSpecialServerConnectStarted = false;
    return t;
  }
  o.__extends(CastleEnvironmentGlobals, e);
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "gameId", {
    get: function () {
      if (this.isClosedBeta) {
        return 39;
      } else {
        return 12;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "gameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "gameTitle", {
    get: function () {
      return "Castle";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "gameTitle").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "currentGameTitle", {
    get: function () {
      return "Goodgame Empire";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "currentGameTitle").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "versionDateGame", {
    get: function () {
      return c.CastleVersionInformation.versionInstance.buildNumberGame;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "versionDateGame").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "numOfItemLibs", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "numOfItemLibs").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "analyticsTrackingPath", {
    get: function () {
      return "/goodgameCastle";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "analyticsTrackingPath").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useAutoLogin", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useAutoLogin").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isLoggingActive", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "isLoggingActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useABTest", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useABTest").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "showLoadingText", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "showLoadingText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useVersionedFontSWF", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useVersionedFontSWF").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useLegacyFontManagement", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useLegacyFontManagement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useShortPaymentHashValidity", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useShortPaymentHashValidity").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "versionInformation", {
    get: function () {
      return c.CastleVersionInformation.versionInstance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "versionInformation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "fractionalDigits", {
    get: function () {
      return 2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "fractionalDigits").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "trailingZeros", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "trailingZeros").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "identityManagmentLicenseVO", {
    get: function () {
      var e = new a.IdentitiyManagementLicenseTableRegistrationVO();
      e.gameTitle = "굿게임엠파이어(Goodgame Empire)";
      e.license_cc_np = "CC-NP-131015-013";
      e.ageRating = r.AgeCheck.OverTwelve;
      e.gameRatingBoardConcessionDate = new Date(2013, 10, 15);
      e.gameRatingBoardConcessionId = -9999;
      e.productionDate = new Date(2013, 6, 1);
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "identityManagmentLicenseVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "sendUserActivityStatusToTheServer").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "useLegacySocialRegistration", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "useLegacySocialRegistration").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "ageGateFeatureIsActive", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "ageGateFeatureIsActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "inviterCode", {
    get: function () {
      return this._inviterCode;
    },
    set: function (e) {
      this._inviterCode = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "invite_refer_method", {
    get: function () {
      return this._invite_refer_method;
    },
    set: function (e) {
      this._invite_refer_method = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "localizeReplacements", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "localizeReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isClosedBeta", {
    get: function () {
      return !!CastleEnvironmentGlobals._firstLoaderURL && !!(CastleEnvironmentGlobals._firstLoaderURL.length > 0) && (CastleEnvironmentGlobals._firstLoaderURL.indexOf("test-sns.goodgamestudios.com/rendered/www/39/") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("-closedbeta") != -1 || CastleEnvironmentGlobals._firstLoaderURL.indexOf("empireclosedbeta.goodgamestudios.com/") != -1) || !!this.referrer && !!(this.referrer.length > 0) && (this.referrer.indexOf("-closedbeta") != -1 || this.referrer.indexOf("empireclosedbeta") != -1) || !!this.baseURL && !!(this.baseURL.length > 0) && this.baseURL.indexOf("-closedbeta") != -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "cacheBreakerUrl", {
    get: function () {
      if (this.isClosedBeta) {
        return s.BasicConstants.DOMAIN_PROTOCOL + "://" + this.cachebreakerSubDomain + "." + this.domain + "/loader-closedbeta/" + this.gameDir + "/" + this.gameTitle + "CacheBreakerSwf.swf";
      }
      return Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "cacheBreakerUrl").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "cacheBreakerUrl").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "firstLoaderURL", {
    get: function () {
      return Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "firstLoaderURL").get.call(this);
    },
    set: function (e) {
      CastleEnvironmentGlobals._firstLoaderURL = e;
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "firstLoaderURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "blueboxPort", {
    get: function () {
      return 443;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(i.BasicEnvironmentGlobals.prototype, "blueboxPort").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnTemporaryServer", {
    get: function () {
      return this._isOnTemporaryServer;
    },
    set: function (e) {
      this._isOnTemporaryServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "specialServer", {
    get: function () {
      return this._specialServer;
    },
    set: function (e) {
      this._specialServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastShownDialog", {
    get: function () {
      return this._lastShownDialog;
    },
    set: function (e) {
      this._lastShownDialog = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastUsedCommandName", {
    get: function () {
      return this._lastUsedCommandName;
    },
    set: function (e) {
      this._lastUsedCommandName = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "lastExternalClip", {
    get: function () {
      return this._lastExternalClip;
    },
    set: function (e) {
      this._lastExternalClip = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isTemporaryServerTestRun", {
    get: function () {
      return this._isTemporaryServerTestRun;
    },
    set: function (e) {
      this._isTemporaryServerTestRun = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "originalInstanceVOBeforeSpecialServer", {
    get: function () {
      return this._originalInstanceVOBeforeSpecialServer;
    },
    set: function (e) {
      this._originalInstanceVOBeforeSpecialServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnAllianceBattleGroundServer", {
    get: function () {
      return this._isOnAllianceBattleGroundServer;
    },
    set: function (e) {
      this._isOnAllianceBattleGroundServer = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isSpecialServerConnectStarted", {
    get: function () {
      return this._isSpecialServerConnectStarted;
    },
    set: function (e) {
      this._isSpecialServerConnectStarted = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isOnSpecialServer", {
    get: function () {
      return this.isOnTemporaryServer || this.isOnAllianceBattleGroundServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEnvironmentGlobals.prototype, "isCrossplay", {
    get: function () {
      return this._isCrossplay;
    },
    set: function (e) {
      this._isCrossplay = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEnvironmentGlobals;
}(i.BasicEnvironmentGlobals);
exports.CastleEnvironmentGlobals = p;
l.classImplementsInterfaces(p, "IEnvironmentGlobals");