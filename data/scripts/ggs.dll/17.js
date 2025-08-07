Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./15.js");
var a = require("./269.js");
var s = require("./285.js");
var r = require("./289.js");
var o = require("./290.js");
var l = require("./291.js");
var u = require("./292.js");
var c = require("./294.js");
var _ = require("./295.js");
var d = require("./296.js");
var m = require("./297.js");
var h = require("./298.js");
var p = require("./299.js");
var g = require("./300.js");
var E = require("./301.js");
var C = require("./302.js");
var f = require("./303.js");
var T = require("./304.js");
var S = require("./305.js");
var y = require("./3.js");
var I = require("./2.js");
var v = require("./4.js");
var A = require("./34.js");
var O = require("./134.js");
var L = require("./95.js");
var D = require("./727.js");
var b = require("./293.js");
var N = require("./306.js");
var R = require("./728.js");
var P = I.getLogger("Tracking.TrackingCache");
var B = function () {
  function TrackingCache(e = new a.TrackingVerifier(), t = new Map()) {
    this._trackingVerifier = e;
    this._currentCache = t;
    this._gameId = 0;
    this._referrer = "";
    this._accountId = "";
    this._networkId = 0;
    this._distributorId = 0;
    this._language = "";
    this._isInitialized = false;
    this.validateTests = false;
  }
  TrackingCache.getInstance = function () {
    TrackingCache.trackingCache ||= new TrackingCache();
    return TrackingCache.trackingCache;
  };
  TrackingCache.prototype.init = function (e, t, n, a, s) {
    this._gameId = e;
    this._networkId = t;
    this._referrer = n;
    this._language = s;
    this._accountId = a;
    this._currentCache.set(i.TrackingEventIds.IMPRESSION, new r.ImpressionTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.CONNECTION, new o.ConnectionTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.AB_TEST_TIMEOUT_TRACKING, new l.ABTestTimeoutTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.WORLD_ASSIGNMENT, new u.WorldAssignmentTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.PROFILING, new c.ProfilingTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.GAME_PAYMENT_SHOP_CLICK, new _.GamePaymentShopClickEvent(n));
    this._currentCache.set(i.TrackingEventIds.DESKTOP_DEVICE_INFORMATION, new d.DesktopDeviceInformationTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.BROWSER_STATE, new N.BrowserStateFullscreenTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.SHOP_CHECKOUT, new m.ShopCheckoutTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.IN_GAME_PERFORMANCE, new h.InGamePerformanceEvent(n));
    this._currentCache.set(i.TrackingEventIds.INVITATION, new p.InvitationTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.FACEBOOK_CONNECTION, new g.FacebookConnectionTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.FACEBOOK_USER_DATA, new E.FacebookUserDataTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.FACBOOK_USER_EMAIL, new R.FacebookUserEmailTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.SHOP_LOADED, new C.ShopLoadedTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.SHOP_BACK_BUTTON, new f.ShopBackButtonTrackingEvent(n));
    this._currentCache.set(i.TrackingEventIds.ASSETS_LOADING_SPEED, new T.AssetLoadingSpeedTrackingEvent(n));
    this._isInitialized = true;
  };
  TrackingCache.prototype.cacheEvent = function (e, t) {
    this._currentCache.set(e, t);
  };
  TrackingCache.prototype.getEvent = function (e) {
    return this._currentCache.get(e);
  };
  TrackingCache.prototype.getAllEvents = function () {
    return Array.from(this._currentCache.keys());
  };
  TrackingCache.prototype.sendEvent = function (e) {
    if (!this.isInitialized) {
      P.warn("tracking cache is not initalized");
      return false;
    }
    var t = this.prepareEvent(e);
    var n = JSON.stringify(t);
    if (this.validateTests) {
      var i = A.validateTrackingEvent(t);
      var a = i.success ? this.testServer + "events" : this.testServer + "events/invalid?reason=" + encodeURIComponent(i.message);
      new s.TrackingLoader(new y.URLRequest(a, n, "POST"));
    }
    new s.TrackingLoader(new y.URLRequest(S.TrackingConstants.JSON_TRACKING_URL, n, "POST"));
    this._trackingVerifier.keepEvent(e);
    return true;
  };
  Object.defineProperty(TrackingCache.prototype, "currentInstance", {
    get: function () {
      return v.BasicModel.instanceProxy.selectedInstanceVO;
    },
    enumerable: true,
    configurable: true
  });
  TrackingCache.prototype.prepareEvent = function (e) {
    var t = this._currentCache.get(e).getVars();
    if (t.eventId) {
      if (e !== t.eventId) {
        P.warn("Expected event with with eventId " + e + ", but found " + t.eventId);
      }
    } else {
      t.eventId = e;
      P.warn("assigning ID to tracking event ", e);
    }
    t.gameId = this._gameId;
    t.networkId = this._networkId;
    t.accountId = this._accountId;
    if (t.hasOwnProperty("playerId") && O.isNullOrUndefined(t.playerId) || t.playerId == 0) {
      P.warn("we are sending an event without playerID", t);
    }
    if (this.currentInstance) {
      t.instanceId = this.currentInstance.instanceId;
      t.zoneId = this.currentInstance.zoneId;
    } else {
      P.warn("sending tracking " + e + " but currentInstance is null will try to use networkCookie");
      t.zoneId = v.BasicModel.networkCookie.zoneId || 0;
      t.instanceId = v.BasicModel.networkCookie.instanceId || -1;
    }
    t.lang = this._language;
    this.fixMissingValues(t);
    t.html5 = 1;
    return t;
  };
  TrackingCache.prototype.fixMissingValues = function (e) {
    function t(t, n) {
      if (e.hasOwnProperty(t) && O.isNullOrUndefined(e[t]) || e[t] == 0) {
        P.warn("event " + e.eventId + ": autofilling property " + t + " with default value " + n);
        e[t] = n;
      }
    }
    t("storeId", b.StoreId.WEB);
    t("deviceId", L.DeviceId.DESKTOP);
    t("connectionType", D.ConnectionType.LAN);
  };
  Object.defineProperty(TrackingCache.prototype, "isInitialized", {
    get: function () {
      return this._isInitialized;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingCache.prototype, "trackingVerifier", {
    get: function () {
      return this._trackingVerifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TrackingCache.prototype, "networkId", {
    set: function (e) {
      this._networkId = e;
    },
    enumerable: true,
    configurable: true
  });
  TrackingCache.prototype.useTestValidationServer = function (e, t = S.TrackingConstants.TEST_TRACKING_SERVER) {
    this.validateTests = e;
    this.testServer = t;
  };
  TrackingCache.VERSION = "$Id$";
  return TrackingCache;
}();
exports.TrackingCache = B;