Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./30.js");
var c = require("./4.js");
var u = function (e) {
  function CastleSharedObject() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSharedObject, e);
  Object.defineProperty(CastleSharedObject.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.BasicSharedObject.prototype, "env").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleSharedObject.prototype.readQuality = function () {
    if (this.networkCookie.hasAttribute("qualitySetting")) {
      return r.int(this.networkCookie.getAttributeAsInt("qualitySetting"));
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.saveQuality = function (e) {
    this.networkCookie.setAttribute("qualitySetting", e);
  };
  CastleSharedObject.prototype.isAnimationSet = function () {
    return this.networkCookie.hasAttribute("animation");
  };
  CastleSharedObject.prototype.readAnimation = function () {
    return !this.isAnimationSet() || this.networkCookie.getAttributeAsInt("animation") == 1;
  };
  CastleSharedObject.prototype.saveAnimation = function (e) {
    this.networkCookie.setAttribute("animation", e ? 1 : 2);
  };
  CastleSharedObject.prototype.readQuestReminder = function () {
    return !this.networkCookie.hasAttribute("questReminder") || this.networkCookie.getAttributeAsInt("questReminder") == 1;
  };
  CastleSharedObject.prototype.readWorlmapMovementsVisibility = function () {
    return !this.networkCookie.hasAttribute("worlmapMovementsVisibility") || this.networkCookie.getAttributeAsInt("worlmapMovementsVisibility") == 1;
  };
  CastleSharedObject.prototype.readMiniChatVisibility = function () {
    return !this.networkCookie.hasAttribute("miniChatVisibility") || this.networkCookie.getAttributeAsInt("miniChatVisibility") == 1;
  };
  CastleSharedObject.prototype.saveQuestReminder = function (e) {
    this.networkCookie.setAttribute("questReminder", e ? 1 : 2);
  };
  CastleSharedObject.prototype.saveWorlmapMovementsVisibility = function (e) {
    this.networkCookie.setAttribute("worlmapMovementsVisibility", e ? 1 : 2);
  };
  CastleSharedObject.prototype.saveMiniChatVisibility = function (e) {
    this.networkCookie.setAttribute("miniChatVisibility", e ? 1 : 2);
  };
  CastleSharedObject.prototype.saveTreasuremapPlayerPosition = function (e, t, i) {
    this.networkCookie.setAttribute(i + "treasuremapPosition" + t, e);
  };
  CastleSharedObject.prototype.saveMoveArrowProgress = function (e, t, i) {
    this.networkCookie.setAttribute(i + "treasuremapArrowProgress" + t, e);
  };
  CastleSharedObject.prototype.readMoveArrowProgress = function (e, t) {
    if (this.networkCookie.hasAttribute(t + "treasuremapArrowProgress" + e)) {
      return r.int(this.networkCookie.getAttributeAsInt(t + "treasuremapArrowProgress" + e));
    } else {
      return -1;
    }
  };
  CastleSharedObject.prototype.saveAddPipesOnEndOfText = function (e) {
    this.networkCookie.setAttribute("addPipesOnEndOfText", e);
    s.Localization.usePipe = e;
  };
  CastleSharedObject.prototype.readAddPipesOnEndOfText = function () {
    return !!this.networkCookie.hasAttribute("addPipesOnEndOfText") && this.networkCookie.getAttributeAsInt("addPipesOnEndOfText") > 0;
  };
  CastleSharedObject.prototype.saveAddQuestIDs = function (e) {
    this.networkCookie.setAttribute("showQuestIDs", e ? 1 : 0);
  };
  CastleSharedObject.prototype.readAddQuestIDs = function () {
    return !!this.networkCookie.hasAttribute("showQuestIDs") && this.networkCookie.getAttributeAsInt("showQuestIDs") > 0;
  };
  CastleSharedObject.prototype.saveOpenRewardHubAtStart = function (e) {
    this.networkCookie.setAttribute("openRewardHubAtStart", e ? 1 : 0);
  };
  CastleSharedObject.prototype.readOpenRewardHubAtStart = function () {
    return !!this.networkCookie.hasAttribute("openRewardHubAtStart") && this.networkCookie.getAttributeAsInt("openRewardHubAtStart") > 0;
  };
  CastleSharedObject.prototype.saveAlertFrameVisibility = function (e) {
    this.networkCookie.setAttribute("alertFrameVisibility", e ? 1 : 2);
  };
  CastleSharedObject.prototype.readAlertFrameVisibility = function () {
    return !this.networkCookie.hasAttribute("alertFrameVisibility") || this.networkCookie.getAttributeAsInt("alertFrameVisibility") == 1;
  };
  CastleSharedObject.prototype.saveHomeScreenVisibility = function (e) {
    this.networkCookie.setAttribute("homeScreenVisibility", e ? 1 : 2);
  };
  CastleSharedObject.prototype.readHomeScreenVisibility = function () {
    return !this.networkCookie.hasAttribute("homeScreenVisibility") || this.networkCookie.getAttributeAsInt("homeScreenVisibility") == 1;
  };
  CastleSharedObject.prototype.saveHomeScreenID = function (e) {
    this.networkCookie.setAttribute("homeScreenID", e);
  };
  CastleSharedObject.prototype.readHomeScreenID = function () {
    if (this.networkCookie.hasAttribute("homeScreenID")) {
      return r.int(this.networkCookie.getAttributeAsInt("homeScreenID"));
    } else {
      return -1;
    }
  };
  CastleSharedObject.prototype.readShowSamuraiInvasionGamblingInstructions = function () {
    return !this.networkCookie.hasAttribute("showSamuraiInvasionGamblingInstructions") || this.networkCookie.getAttributeAsInt("showSamuraiInvasionGamblingInstructions") > 0;
  };
  CastleSharedObject.prototype.saveShowSamuraiInvasionGamblingInstructions = function (e) {
    this.networkCookie.setAttribute("showSamuraiInvasionGamblingInstructions", e ? 1 : 0);
  };
  CastleSharedObject.prototype.saveFacebookID = function (e) {
    this.networkCookie.setAttribute(o.NetworkCookie.ATTRIBUTE_FACEBOOK_UID, e);
  };
  CastleSharedObject.prototype.getFacebookID = function () {
    if (this.networkCookie.hasAttribute(o.NetworkCookie.ATTRIBUTE_FACEBOOK_UID)) {
      return this.networkCookie.getAttributeAsString(o.NetworkCookie.ATTRIBUTE_FACEBOOK_UID);
    } else {
      return null;
    }
  };
  CastleSharedObject.prototype.saveAttackDialogSelections = function (e) {
    this.networkCookie.setAttribute("attackDialogSelections", e);
  };
  CastleSharedObject.prototype.getAttackDialogSelections = function () {
    return this.networkCookie.getAttribute("attackDialogSelections");
  };
  CastleSharedObject.prototype.saveIsRedirectedWithFacebook = function (e) {
    this.networkCookie.setAttribute("IsRedirectedWithFacebook", e ? 1 : 0);
  };
  CastleSharedObject.prototype.getIsRedirectedWithFacebook = function () {
    return !!this.networkCookie.hasAttribute("IsRedirectedWithFacebook") && !!this.networkCookie.getAttributeAsBoolean("IsRedirectedWithFacebook");
  };
  CastleSharedObject.prototype.saveUsername = function (e) {
    this.networkCookie.username = e;
  };
  CastleSharedObject.prototype.deleteLoginData = function () {
    this.saveFacebookID("");
    this.networkCookie.deleteLoginData();
  };
  CastleSharedObject.prototype.saveEventBookmark = function (e) {
    this.networkCookie.setAttribute("eventBookmark", e);
  };
  CastleSharedObject.prototype.readEventBookmark = function () {
    if (this.networkCookie.hasAttribute("eventBookmark")) {
      return this.networkCookie.getAttribute("eventBookmark");
    } else {
      return {
        buttonName: "",
        eventEndTimestamp: 0
      };
    }
  };
  CastleSharedObject.prototype.saveEventDifficultyForEvent = function (e, t, i) {
    this.networkCookie.setAttribute(i + "difficulty" + e, t);
  };
  CastleSharedObject.prototype.readEventDifficultyForEvent = function (e, t) {
    if (this.networkCookie.hasAttribute(t + "difficulty" + e)) {
      return this.networkCookie.getAttribute(t + "difficulty" + e);
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.savePlayerValue = function (e, t) {
    var i = {
      playerID: c.CastleModel.userData.playerID,
      value: t
    };
    this.networkCookie.setAttribute(e, i);
  };
  CastleSharedObject.prototype.readPlayerValue = function (e) {
    var t;
    if (this.networkCookie.hasAttribute(e)) {
      t = this.networkCookie.getAttribute(e);
    }
    if (t && t.playerID == c.CastleModel.userData.playerID) {
      return t.value;
    } else {
      return 0;
    }
  };
  CastleSharedObject.prototype.saveShoppingCartWarning = function (e, t) {
    this.networkCookie.setAttribute("showShoppingCartWarning", e ? 1 : 0);
    this.networkCookie.setAttribute("showShoppingCartWarningEndTimeStamp", t);
  };
  CastleSharedObject.prototype.readShoppingCartWarning = function () {
    var e = 0;
    if (this.networkCookie.hasAttribute("showShoppingCartWarningEndTimeStamp")) {
      e = this.networkCookie.getAttributeAsInt("showShoppingCartWarningEndTimeStamp");
    }
    var t = e <= 0 || e < l.CachedTimer.getCachedTimer();
    return !this.networkCookie.hasAttribute("showShoppingCartWarning") || t || this.networkCookie.getAttributeAsInt("showShoppingCartWarning") > 0;
  };
  return CastleSharedObject;
}(o.BasicSharedObject);
exports.CastleSharedObject = u;