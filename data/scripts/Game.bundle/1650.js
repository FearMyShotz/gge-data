Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./72.js");
var r = require("./4.js");
var l = require("./3400.js");
var c = require("./3401.js");
var u = createjs.Event;
var d = function (e) {
  function EventAnnouncementData(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).eventsAXML = t.eventannouncements;
    i.parseEventsAnnouncementsFromXML();
    i.parseLeagueTypesXML(t.leaguetypes);
    return i;
  }
  n.__extends(EventAnnouncementData, e);
  EventAnnouncementData.prototype.parseLeagueTypesXML = function (e) {
    var t;
    var i;
    this._leagueTypeList = [];
    for (var n = 0, o = e; n < o.length; n++) {
      t = o[n];
      (i = new c.LeagueTypeVO()).parseXML(t);
      this._leagueTypeList.push(i);
    }
  };
  EventAnnouncementData.prototype.getLeagueTypeId = function (e) {
    var t;
    var i = a.int(r.CastleModel.userData.userLevel);
    for (var n = 0, o = this._leagueTypeList; n < o.length; n++) {
      if ((t = o[n]).eventID == e && i >= t.minLevel && i <= t.maxLevel) {
        return t.leaguetypeID;
      }
    }
    return -1;
  };
  EventAnnouncementData.prototype.parseEventsAnnouncementsFromXML = function () {
    var e;
    var t = 0;
    var i = 0;
    this._announcementsEventsList = new Map();
    for (var n = 0, o = this.eventsAXML; n < o.length; n++) {
      e = o[n];
      t = parseInt(e.eventID || "");
      i = parseInt(e.leaguetypeID || "");
      this._announcementsEventsList.set(this.createKeyForEventAnnouncementVO(t, i), new l.EventAnnouncementVO());
      this._announcementsEventsList.get(this.createKeyForEventAnnouncementVO(t, i)).parseXML(e);
    }
  };
  EventAnnouncementData.prototype.getEventAnnouncementVO = function (e, t) {
    return this._announcementsEventsList.get(this.createKeyForEventAnnouncementVO(e, t));
  };
  EventAnnouncementData.prototype.createKeyForEventAnnouncementVO = function (e, t) {
    return e + "_" + t;
  };
  Object.defineProperty(EventAnnouncementData.prototype, "announcementsEventsList", {
    get: function () {
      return this._announcementsEventsList;
    },
    enumerable: true,
    configurable: true
  });
  EventAnnouncementData.prototype.parseCAR = function (e) {
    r.CastleModel.specialEventData.activeEvents.get(o.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT).isCollected = true;
    this.dispatchEvent(new u(EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED, true, false));
  };
  EventAnnouncementData.prototype.isClaimed = function (e) {
    var t = false;
    var i = r.CastleModel.specialEventData.activeEvents.get(o.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT);
    if (i) {
      t = i.isCollected;
    }
    return t;
  };
  EventAnnouncementData.prototype.isAvailable = function (e) {
    var t = false;
    if (r.CastleModel.specialEventData.activeEvents.get(o.EventConst.EVENTTYPE_EVENT_ANNOUNCEMENT)) {
      t = true;
      if (new Date().getTime() / 1000 > e) {
        t = false;
      }
    }
    return t;
  };
  EventAnnouncementData.__initialize_static_members = function () {
    EventAnnouncementData.SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED = "SHOW_EVENT_ANNOUNCEMENT_REWARD_COLLECTED";
  };
  return EventAnnouncementData;
}(s.CastleEventDispatcher);
exports.EventAnnouncementData = d;
d.__initialize_static_members();