Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./5583.js");
var r = require("./463.js");
var l = require("./72.js");
var c = require("./4.js");
var u = function (e) {
  function CastleSettingsData() {
    var t = this;
    t._hasCombatAnimationActivated = false;
    t._questReminderActive = true;
    t._worldmapMovementsVisible = true;
    t._showVIPFlagToOthers = false;
    t._miniChatVisible = true;
    t._mapFilter0Active = false;
    t._mapFilter1Active = false;
    t._mapFilter2Active = false;
    t._showEffectValuesActive = false;
    t._isHomeScreenVisible = true;
    t._homeScreenID = 0;
    t._abTestShowSagamap = false;
    t._showPackageIDToolTips = false;
    t._doNotShowDialogues = new Set();
    t._showOfflineForFriends = false;
    t._isLoginReady = false;
    t._isDestroyingGame = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._questReminderActive = c.CastleModel.localData.readQuestReminder();
    t._worldmapMovementsVisible = c.CastleModel.localData.readWorlmapMovementsVisibility();
    t._miniChatVisible = c.CastleModel.localData.readMiniChatVisibility();
    t._homeScreenID = a.int(c.CastleModel.localData.readHomeScreenID());
    t._isHomeScreenVisible = c.CastleModel.localData.readHomeScreenVisibility();
    t._isLoginReady = false;
    t._eventBookmark = c.CastleModel.localData.readEventBookmark();
    return t;
  }
  n.__extends(CastleSettingsData, e);
  CastleSettingsData.prototype.parse_DSD = function (e) {
    if (e && e.A) {
      this._doNotShowDialogues = new Set();
      for (var t = e.A, i = 0; i < t.length; i++) {
        var n = a.int(t[i]);
        this.addDoNotShowDialogue(n);
      }
    }
  };
  CastleSettingsData.prototype.parse_MVF = function (e) {
    if (e) {
      this._mapFilter0Active = e[o.CommKeys.ACTIVE_FILTERS].indexOf(0) >= 0;
      this._mapFilter1Active = e[o.CommKeys.ACTIVE_FILTERS].indexOf(1) >= 0;
      this._mapFilter2Active = e[o.CommKeys.ACTIVE_FILTERS].indexOf(2) >= 0;
    }
  };
  CastleSettingsData.prototype.addDoNotShowDialogue = function (e) {
    if (o.DontShowDialogConst.isValidDialogID(e)) {
      this._doNotShowDialogues.add(e);
    }
  };
  Object.defineProperty(CastleSettingsData.prototype, "questReminderActive", {
    get: function () {
      return this._questReminderActive;
    },
    set: function (e) {
      this._questReminderActive = e;
      c.CastleModel.localData.saveQuestReminder(this._questReminderActive);
      this.dispatchEvent(new r.SettingsEvent(r.SettingsEvent.QUESTREMINDER_STATE_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "worldmapMovementsVisible", {
    get: function () {
      return this._worldmapMovementsVisible;
    },
    set: function (e) {
      this._worldmapMovementsVisible = e;
      c.CastleModel.localData.saveWorlmapMovementsVisibility(this._worldmapMovementsVisible);
      this.dispatchEvent(new r.SettingsEvent(r.SettingsEvent.WORLDMAPMOVEMNTS_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "miniChatVisible", {
    get: function () {
      return this._miniChatVisible;
    },
    set: function (e) {
      this._miniChatVisible = e;
      c.CastleModel.localData.saveMiniChatVisibility(this._miniChatVisible);
      this.dispatchEvent(new r.SettingsEvent(r.SettingsEvent.MINICHAT_VISIBILITY_CHANGED));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "showVIPFlagToOthers", {
    get: function () {
      return this._showVIPFlagToOthers;
    },
    set: function (e) {
      this._showVIPFlagToOthers = e;
      c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SOptionEvent(this._showVIPFlagToOthers, this._showOfflineForFriends, this._confirmC2Threshold));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "showOfflineForFriends", {
    get: function () {
      return this._showOfflineForFriends;
    },
    set: function (e) {
      this._showOfflineForFriends = e;
      c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SOptionEvent(this._showVIPFlagToOthers, this._showOfflineForFriends, this._confirmC2Threshold));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "confirmC2Threshold", {
    get: function () {
      return this._confirmC2Threshold;
    },
    set: function (e) {
      this._confirmC2Threshold = e;
      c.CastleModel.smartfoxClient.sendCommandVO(new s.C2SOptionEvent(this._showVIPFlagToOthers, this._showOfflineForFriends, this._confirmC2Threshold));
    },
    enumerable: true,
    configurable: true
  });
  CastleSettingsData.prototype.parse_OPT = function (e) {
    if (e) {
      this._showVIPFlagToOthers = e.SVF == 1;
      this._showOfflineForFriends = e.OFF == 1;
      this._confirmC2Threshold = e.CC2T;
      if (d.CastleLayoutManager.getInstance().worldmapScreen && d.CastleLayoutManager.getInstance().worldmapScreen.renderer) {
        d.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
        d.CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(true, true);
      }
      this.dispatchEvent(new r.SettingsEvent(r.SettingsEvent.SHOW_VIP_VISUALS_TO_OTHERS_CHANGED));
    }
  };
  CastleSettingsData.prototype.isDialogueVisible = function (e) {
    return !this._doNotShowDialogues.has(e);
  };
  Object.defineProperty(CastleSettingsData.prototype, "showEffectValuesActive", {
    get: function () {
      return this._showEffectValuesActive;
    },
    set: function (e) {},
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isHomeScreenVisible", {
    get: function () {
      return this._isHomeScreenVisible;
    },
    set: function (e) {
      this._isHomeScreenVisible = e;
      c.CastleModel.localData.saveHomeScreenVisibility(this._isHomeScreenVisible);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "homeScreenID", {
    get: function () {
      return this._homeScreenID;
    },
    set: function (e) {
      this._homeScreenID = e;
      c.CastleModel.localData.saveHomeScreenID(this._homeScreenID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "abTestShowSagamap", {
    get: function () {
      return this._abTestShowSagamap;
    },
    set: function (e) {
      this._abTestShowSagamap = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "showPackageIDToolTips", {
    get: function () {
      return this._showPackageIDToolTips;
    },
    set: function (e) {
      this._showPackageIDToolTips = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isLoginReady", {
    get: function () {
      return this._isLoginReady;
    },
    set: function (e) {
      this._isLoginReady = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "isDestroyingGame", {
    get: function () {
      return this._isDestroyingGame;
    },
    set: function (e) {
      this._isDestroyingGame = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleSettingsData.prototype.setEventBookmark = function (e, t) {
    this._eventBookmark = {
      buttonName: e,
      eventEndTimestamp: t
    };
    c.CastleModel.localData.saveEventBookmark(this._eventBookmark);
    p.CastleBasicController.getInstance().dispatchEvent(r.SettingsEvent.EVENT_BOOKMARK_CHANGED);
  };
  CastleSettingsData.prototype.deleteEventBookmark = function () {
    this.setEventBookmark("", 0);
  };
  CastleSettingsData.prototype.getEventBookmark = function () {
    return this._eventBookmark;
  };
  CastleSettingsData.prototype.validateEventBookmark = function () {
    if (h.CachedTimer.getCachedTimer() > this.getEventBookmark().eventEndTimestamp) {
      this.deleteEventBookmark();
    }
  };
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter0Active", {
    get: function () {
      return this._mapFilter0Active;
    },
    set: function (e) {
      this._mapFilter0Active = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter1Active", {
    get: function () {
      return this._mapFilter1Active;
    },
    set: function (e) {
      this._mapFilter1Active = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSettingsData.prototype, "mapFilter2Active", {
    get: function () {
      return this._mapFilter2Active;
    },
    set: function (e) {
      this._mapFilter2Active = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSettingsData;
}(l.CastleEventDispatcher);
exports.CastleSettingsData = u;
var d = require("./17.js");
var p = require("./15.js");
var h = require("./30.js");