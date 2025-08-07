Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./13.js");
var s = require("./34.js");
var r = function (e) {
  function ImpressionTrackingEvent(t) {
    var n = e.call(this, t) || this;
    n.journeyHash = "";
    return n;
  }
  i.__extends(ImpressionTrackingEvent, e);
  ImpressionTrackingEvent.prototype.getVars = function () {
    return {
      eventId: s.Impression.ID,
      accountHash: this.accountId,
      adgr: parseInt(this.adgr),
      aid: parseInt(this.aid),
      camp: parseInt(this.camp),
      cid: this.channelId,
      creative: parseInt(this.creative),
      event_mapping_version: 2,
      journeyHash: parseInt(this.journeyHash),
      keyword: this.keyword,
      lp: parseInt(this.lp),
      matchtype: this.matchtype,
      network: this.network,
      partnerId: parseInt(this.partnerId),
      placement: this.placement,
      tid: this.trafficSourceId
    };
  };
  return ImpressionTrackingEvent;
}(a.BasicTrackingEvent);
exports.ImpressionTrackingEvent = r;