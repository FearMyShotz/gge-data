Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./177.js");
var s = require("./17.js");
var r = require("./15.js");
var o = function (e) {
  function BasicWorldAssignmentTrackingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicWorldAssignmentTrackingCommand, e);
  BasicWorldAssignmentTrackingCommand.prototype.execute = function (e = null) {
    if (this.commandIsAllowed) {
      var t = window.ggs.worldAssignment.facade;
      var n = s.TrackingCache.getInstance().getEvent(r.TrackingEventIds.WORLD_ASSIGNMENT);
      n.accountId = this.env.accountId;
      n.countryDetectionFactor = t.detectionFactor;
      n.country = t.currentCountry;
      n.campaignVars = this.env.campainVars;
      n.websiteId = this.env.urlVariables.websiteId;
      n.storeId = this.env.storeId;
      s.TrackingCache.getInstance().sendEvent(r.TrackingEventIds.WORLD_ASSIGNMENT);
    }
  };
  return BasicWorldAssignmentTrackingCommand;
}(a.BasicFirstSessionTrackingCommand);
exports.BasicWorldAssignmentTrackingCommand = o;