Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./51.js");
var r = require("./4.js");
var l = function (e) {
  function EventAnnouncementDialogProperties(t, i, n, o) {
    var a = this;
    a._eventId = 0;
    a._durationTS = 0;
    a._alreadyClaimed = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this)._eventId = t;
    a._durationTS = i;
    a._possibleRewards = n;
    a._claimableRewards = o;
    return a;
  }
  n.__extends(EventAnnouncementDialogProperties, e);
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "durationTS", {
    get: function () {
      return this._durationTS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "alreadyClaimed", {
    get: function () {
      this._alreadyClaimed = r.CastleModel.eventAnnouncementData.isClaimed(this._durationTS);
      return this._alreadyClaimed;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "possibleRewards", {
    get: function () {
      return this._possibleRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "claimableRewards", {
    get: function () {
      return this._claimableRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "dialogTitleTextId", {
    get: function () {
      var e;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
          e = "dialog_eventAnnouncement_alienInvasion_header";
          break;
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          e = "dialog_eventAnnouncement_alienInvasionAlliance_header";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "eventTitleTextId", {
    get: function () {
      return "dialog_eventAnnoucement_startIn";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "durationText", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "possibleEventRewardsDescription", {
    get: function () {
      var e;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          e = "dialog_eventAnnouncement_rewards";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "announcementDescription", {
    get: function () {
      var e;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
          e = "dialog_eventAnnouncement_alienInvasion_description";
          break;
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          e = "dialog_eventAnnouncement_alienInvasionAlliance_description";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "claimButtonLabel", {
    get: function () {
      if (this.alreadyClaimed) {
        return "dialog_eventAnnouncements_collectButton_collected";
      } else {
        return "dialog_eventAnnouncements_collectButton";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "backgroundName", {
    get: function () {
      var e;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          e = "AlienEventTeaserTheme";
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventAnnouncementDialogProperties.prototype, "characterId", {
    get: function () {
      var e = 0;
      switch (this.eventId) {
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION:
        case EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE:
          e = a.int(s.ClientConstCharacter.CHAR_ID_SPY);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  EventAnnouncementDialogProperties.__initialize_static_members = function () {
    EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION = 11;
    EventAnnouncementDialogProperties.EVENT_ID_ALIEN_INVASION_ALLIANCE = 71;
  };
  return EventAnnouncementDialogProperties;
}(o.BasicProperties);
exports.EventAnnouncementDialogProperties = l;
l.__initialize_static_members();