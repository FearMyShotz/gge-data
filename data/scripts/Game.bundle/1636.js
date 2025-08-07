Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function TimeLimitedCampaignUpdateEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(TimeLimitedCampaignUpdateEvent, e);
  TimeLimitedCampaignUpdateEvent.__initialize_static_members = function () {
    TimeLimitedCampaignUpdateEvent.CAMPAIGN_UPDATED = "CAMPAIGN_UPDATED";
  };
  return TimeLimitedCampaignUpdateEvent;
}(createjs.Event);
exports.TimeLimitedCampaignUpdateEvent = o;
o.__initialize_static_members();