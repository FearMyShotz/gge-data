Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./4.js");
var s = require("./77.js");
var r = require("./34.js");
var o = function (e) {
  function ConnectionTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(ConnectionTrackingEvent, e);
  ConnectionTrackingEvent.prototype.getVars = function () {
    var e = {
      accountHash: this.accountId,
      bluebox: this.bluebox,
      clientTimeZone: s.TimezoneUtil.getTrackingTimezone(),
      conTime: a.BasicModel.smartfoxClient.connectionTime,
      delay: this.delay,
      downloadrate: this.downloadRate,
      eventId: r.Connection.ID,
      event_mapping_version: 2,
      playerId: 0,
      roundTime: parseInt(this.roundTrip),
      referrer: this.referrer,
      deviceId: this.deviceId,
      connectionType: this.connectionType
    };
    if (this.cv && this.cv.isValid) {
      e.partner_id = parseInt(this.cv.partnerId);
      e.creative_id = parseInt(this.cv.creative);
      e.placement = this.cv.placement;
      e.keyword = this.cv.keyword;
      e.network = this.cv.network;
      e.landing_page = parseInt(this.cv.lp);
      e.channel_id = this.cv.channelId;
      e.traffic_source_id = this.cv.trafficSource;
      e.advertiser_id = parseInt(this.cv.aid);
      e.campaign_key = parseInt(this.cv.camp);
      e.adgroup_key = parseInt(this.cv.adgr);
      e.match_type = this.cv.matchtype;
    }
    return e;
  };
  return ConnectionTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.ConnectionTrackingEvent = o;