Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./3.js");
var a = require("./2.js");
var s = require("./60.js");
var r = require("./257.js");
var o = require("./5.js");
var l = require("./162.js");
var u = require("./15.js");
var c = require("./17.js");
var _ = require("./38.js");
var d = require("./335.js");
var m = a.getLogger("Tracking.ClientFunnelTrackingController");
var h = function () {
  function ClientFunnelTrackingController(e) {
    this.env = e;
    var t;
    var n = new r.ClientFunnelTrackingEvent(this.env.referrer);
    n.client_version = this.env.buildNumberGame;
    n.device_language_code = i.Capabilities.language;
    n.account_hash = this.env.accountId;
    n.session_count = s.int(this.env.accountCookie.sessionCount);
    n.website_id = parseInt(this.env.urlVariables.extendedWebsiteID);
    n.media_partner_id = parseInt(this.env.campainVars.extendedPartnerID);
    n.platform_id = o.EnvGlobalsHandler.globals.platformId;
    switch (this.env.accountCookie.sessionType) {
      case l.SessionTypes.FIRST_SESSION:
        t = "FIRST_SESSION";
        break;
      case l.SessionTypes.FIRST_SESSION_AFTER_UPDATE:
        t = "FIRST_SESSION_AFTER_UPDATE";
        break;
      case l.SessionTypes.REGULAR_SESSION:
      default:
        t = "REGULAR_SESSION";
    }
    n.session_type_name = t;
    c.TrackingCache.getInstance().cacheEvent(u.TrackingEventIds.CLIENT_FUNNEL, n);
  }
  ClientFunnelTrackingController.getInstance = function () {
    ClientFunnelTrackingController.instance ||= new ClientFunnelTrackingController(o.EnvGlobalsHandler.globals);
    return ClientFunnelTrackingController.instance;
  };
  Object.defineProperty(ClientFunnelTrackingController.prototype, "stage", {
    set: function (e) {
      this._playTimeController ||= new d.ClientFunnelPlayTimeController(e, this.trackState);
    },
    enumerable: true,
    configurable: true
  });
  ClientFunnelTrackingController.prototype.dispose = function () {
    if (this._playTimeController) {
      this._playTimeController.dispose();
    }
  };
  ClientFunnelTrackingController.prototype.trackState = function (e) {
    try {
      var t = i.castAs(c.TrackingCache.getInstance().getEvent(u.TrackingEventIds.CLIENT_FUNNEL), "ClientFunnelTrackingEvent");
      if (!t) {
        m.warn("ClientFunnelTrackingevent couldn't be found (TODO HTML5)");
        return;
      }
      if (_.ClientFunnelGameStates.FIRST_SESSION_ONLY.indexOf(e) > -1 && t.session_count === 1) {
        return;
      }
      t.gamestate_name = e;
      c.TrackingCache.getInstance().sendEvent(u.TrackingEventIds.CLIENT_FUNNEL);
      m.debug("CLIENT FUNNEL TRACKING STEP: " + e);
      if (e === _.ClientFunnelGameStates.GAME_PLAYABLE) {
        this._playTimeController.start();
      }
    } catch (t) {
      m.error("ClientFunnelTrackingController.trackState: Error tracking event \"" + e + "\"");
    }
  };
  return ClientFunnelTrackingController;
}();
exports.ClientFunnelTrackingController = h;