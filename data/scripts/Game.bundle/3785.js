Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./831.js");
var c = require("./3786.js");
var u = function (e) {
  function LongTermPointEventProperties(t) {
    var i = this;
    i._currentEventID = 0;
    i._selectedEvent = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._eventAssets = new Map();
    i._eventVO = t;
    i.updateEventIDs();
    return i;
  }
  n.__extends(LongTermPointEventProperties, e);
  LongTermPointEventProperties.prototype.addEventAsset = function (e, t, i, n, o, s, r) {
    if (this._eventAssets.get(e)) {
      a.debug("LongTermPeProperties: tried adding an event twice: " + e);
    } else {
      this._eventAssets.set(e, new c.LongTermPointEventEventInfoVO(e, t, i, n, o, s, r));
    }
  };
  LongTermPointEventProperties.prototype.isActiveEvent = function (e = -1) {
    return (e = e != -1 ? e : this._selectedEvent) != l.LongTermPointEventClientConst.GENERAL_TAB_ID && r.CastleModel.specialEventData.getActiveEventByEventId(e) != null;
  };
  LongTermPointEventProperties.prototype.hasNextAssetVO = function () {
    return this._currentEventID < this._eventIDs.length;
  };
  LongTermPointEventProperties.prototype.resetNextEvent = function () {
    this._currentEventID = 0;
  };
  LongTermPointEventProperties.prototype.getNextAssetVO = function () {
    var e = s.int(this._eventIDs[this._currentEventID]);
    this._currentEventID++;
    return this.getEventAssetByEventID(e);
  };
  LongTermPointEventProperties.prototype.getEventAssetAtPosition = function (e) {
    return this.getEventAssetByEventID(this._eventIDs[e]);
  };
  LongTermPointEventProperties.prototype.getEventAssetByEventID = function (e) {
    return this._eventAssets.get(e);
  };
  Object.defineProperty(LongTermPointEventProperties.prototype, "eventVO", {
    get: function () {
      return this._eventVO;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventProperties.prototype.updateEventVO = function (e) {
    this._eventVO = e;
  };
  Object.defineProperty(LongTermPointEventProperties.prototype, "selectedEvent", {
    get: function () {
      return this._selectedEvent;
    },
    set: function (e) {
      this._selectedEvent = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventProperties.prototype, "remainingSecondsForSelectedEvent", {
    get: function () {
      var e = r.CastleModel.specialEventData.getActiveEventByEventId(this._selectedEvent);
      if (e) {
        return e.remainingEventTimeInSeconds;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventProperties.prototype, "eventIDs", {
    get: function () {
      return this._eventIDs;
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventProperties.prototype.updateEventIDs = function () {
    this._eventIDs = [l.LongTermPointEventClientConst.GENERAL_TAB_ID];
    var e = r.CastleModel.specialEventData.getActiveEventsByIds(l.LongTermPointEventClientConst.pointEventIDs);
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._eventIDs.push(n.eventId);
        }
      }
    }
    if (this._eventVO) {
      for (var o = 0, a = this._eventVO.upcomingEvents; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && this._eventIDs.indexOf(s) == -1) {
          this._eventIDs.push(s);
        }
      }
    }
  };
  return LongTermPointEventProperties;
}(o.BasicProperties);
exports.LongTermPointEventProperties = u;