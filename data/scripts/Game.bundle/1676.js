Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./220.js");
var a = require("./4.js");
var s = function (e) {
  function EventStarterAnnouncementDialogProperties(t, i) {
    var n = e.call(this) || this;
    n.popUpId = 0;
    n.popUpId = t;
    n.eventID = i;
    return n;
  }
  n.__extends(EventStarterAnnouncementDialogProperties, e);
  Object.defineProperty(EventStarterAnnouncementDialogProperties.prototype, "eventVO", {
    get: function () {
      return a.CastleModel.specialEventData.getActiveEventByEventId(this.eventID);
    },
    enumerable: true,
    configurable: true
  });
  EventStarterAnnouncementDialogProperties.prototype.getRemainingTime = function () {
    if (this.eventVO) {
      return this.eventVO.remainingEventTimeInSeconds;
    } else {
      return 0;
    }
  };
  EventStarterAnnouncementDialogProperties.prototype.getTitleTextID = function () {
    return "dialog_event_announcement_header_" + this.eventID;
  };
  EventStarterAnnouncementDialogProperties.prototype.getDescriptionTextID = function () {
    return "dialog_event_announcement_description_" + this.eventID;
  };
  return EventStarterAnnouncementDialogProperties;
}(o.BasicProperties);
exports.EventStarterAnnouncementDialogProperties = s;