Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./95.js");
var s = require("./293.js");
var r = require("./77.js");
var o = require("./13.js");
var l = require("./3.js");
var u = require("./34.js");
var c = function (e) {
  function WorldAssignmentTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.deviceId = a.DeviceId.DESKTOP;
    n.websiteId = "0";
    n.storeId = s.StoreId.WEB;
    n.geoIpRequestTime = 0;
    n.countryDetectionFactor = 0;
    return n;
  }
  i.__extends(WorldAssignmentTrackingEvent, e);
  WorldAssignmentTrackingEvent.prototype.getVars = function () {
    var e = {
      eventId: u.WorldAssignment.ID,
      event_mapping_version: 2,
      accountHash: this.accountId,
      clientTimeZone: r.TimezoneUtil.getTrackingTimezoneInUTC(),
      deviceId: this.deviceId,
      websiteId: this.websiteId,
      storeId: this.storeId,
      clientCountryCode: this.country.ggsCountryCode,
      browserLang: l.Capabilities.language
    };
    e.lang = this.country.ggsLanguageCode;
    if (this.campaignVars && this.campaignVars.isValid()) {
      e.partnerId = parseInt(this.campaignVars.partnerId);
      e.creative = parseInt(this.campaignVars.creative);
      e.placement = this.campaignVars.placement;
      e.keyword = this.campaignVars.keyword;
      e.googleNetwork = this.campaignVars.network;
      e.lp = parseInt(this.campaignVars.lp);
      e.cid = this.campaignVars.channelId;
      e.tid = this.campaignVars.trafficSource;
      e.aid = parseInt(this.campaignVars.aid);
      e.camp = parseInt(this.campaignVars.camp);
      e.adgr = parseInt(this.campaignVars.adgr);
      e.matchtype = this.campaignVars.matchtype;
    }
    e.referrer = this.referrer;
    e.geoIpRequestTime = this.geoIpRequestTime;
    e.countryDetectionFactor = this.countryDetectionFactor;
    return e;
  };
  return WorldAssignmentTrackingEvent;
}(o.BasicTrackingEvent);
exports.WorldAssignmentTrackingEvent = c;