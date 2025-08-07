Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./34.js");
var s = require("./4.js");
var r = require("./60.js");
var o = require("./5.js");
var l = function (e) {
  function ClientFunnelTrackingEvent() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.stage = "";
    t.gamestate_name = "";
    t.playerId = -1;
    t.account_hash = "TestHash";
    t.gamestate_count_session = 1;
    t.session_count = 0;
    t.media_partner_id = -1;
    t.website_id = -1;
    t.session_type_name = "UNKNOWN";
    t.device_language_code = "";
    t.client_version = "";
    t.store_id = 0;
    t.platform_id = 0;
    return t;
  }
  i.__extends(ClientFunnelTrackingEvent, e);
  ClientFunnelTrackingEvent.prototype.getVars = function () {
    var e = {
      eventId: a.ClientFunnel.ID,
      event_mapping_version: 2,
      playerId: s.BasicModel.userData ? s.BasicModel.userData.playerID : -1,
      client_timestamp: r.int(new Date().getTime() / 1000),
      account_hash: this.account_hash,
      device_id: 1,
      platform_id: o.EnvGlobalsHandler.globals.platformId,
      device_language_code: this.device_language_code,
      session_type_name: this.session_type_name,
      session_count: this.session_count,
      gamestate_name: this.gamestate_name,
      gamestate_count_session: this.gamestate_count_session++,
      session_length_ms: o.EnvGlobalsHandler.globals.sessionLength * 1000,
      client_version: this.client_version,
      client_language_code: o.EnvGlobalsHandler.globals.currentCountryLanguageCode ? o.EnvGlobalsHandler.globals.currentCountryLanguageCode : "UNKNOWN",
      referrer_name: this.referrer.substr(0, 99),
      is_html5: 1
    };
    e.user_agent = navigator.userAgent || "Not available";
    if (this.website_id >= 0) {
      e.website_id = this.website_id;
    }
    if (this.media_partner_id > 0) {
      e.media_partner_id = this.media_partner_id;
    }
    return e;
  };
  return ClientFunnelTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ClientFunnelTrackingEvent = l;