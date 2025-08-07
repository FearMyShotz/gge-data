Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./15.js");
var a = require("./17.js");
exports.executeImpressionTrackingEvent = function (e) {
  if (!e.isLocal) {
    var t = a.TrackingCache.getInstance().getEvent(i.TrackingEventIds.IMPRESSION);
    t.accountId = e.accountId;
    t.creative = e.campainVars.creative;
    t.keyword = e.campainVars.keyword;
    t.lp = e.campainVars.lp;
    t.network = e.campainVars.network;
    t.partnerId = e.campainVars.partnerId;
    t.placement = e.campainVars.placement;
    t.channelId = e.campainVars.channelId;
    t.trafficSourceId = e.campainVars.trafficSource;
    t.aid = e.campainVars.aid;
    t.camp = e.campainVars.camp;
    t.adgr = e.campainVars.adgr;
    t.matchtype = e.campainVars.matchtype;
    t.journeyHash = e.jsVariables.journeyHash;
    a.TrackingCache.getInstance().sendEvent(i.TrackingEventIds.IMPRESSION);
  }
};