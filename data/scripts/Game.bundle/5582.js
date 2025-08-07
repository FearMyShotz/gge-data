Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./6.js");
var p = require("./275.js");
var h = require("./852.js");
var g = require("./119.js");
var C = require("./26.js");
var _ = require("./15.js");
var m = require("./54.js");
var f = require("./4.js");
var O = require("./1965.js");
var E = require("./35.js");
var y = function (e) {
  function CastleSpecialEventData(t) {
    var i = this;
    i._xmlEventsDic = new Map();
    i._activeEvents = new Map();
    i._activeFakeEvents = new Map();
    i._privateEvents = new Map();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._configXml = t;
    i.storeXmlEvents(t);
    return i;
  }
  n.__extends(CastleSpecialEventData, e);
  CastleSpecialEventData.prototype.reset = function () {
    this._activeEvents = new Map();
    this._activeFakeEvents = new Map();
    this._privateEvents = new Map();
  };
  CastleSpecialEventData.prototype.storeXmlEvents = function (e) {
    var t = e.events;
    this._xmlEventsDic = new Map();
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this._xmlEventsDic.set(parseInt(o.eventID || ""), o);
        }
      }
    }
  };
  CastleSpecialEventData.prototype.parse_CHE = function (e) {
    var t = r.castAs(this.getActiveEventByAnyEventId(p.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (t) {
      var i = t.getConversionRateForEvent();
      t.ownPoints = i * e.OP;
      var n = 0;
      var o = 0;
      for (var a = 0, s = e.HS; a < s.length; a++) {
        var l = s[a];
        if (l !== undefined) {
          t.updateRank(n++, l.CR, l.PN, l.CP * i, l.PID);
          if (o < l.CR) {
            o = d.int(l.CR);
          }
        }
      }
      t.hasHighestRank = e.LR == o;
      t.lowestRankOnServer = d.int(e.LR);
      this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, t));
    }
  };
  CastleSpecialEventData.prototype.parse_SDE = function (e) {
    if (e) {
      var t;
      this._activeFakeEvents = new Map();
      for (var i = 0, n = e.SD; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t = new S.FakeEventVO(o);
          if (this._xmlEventsDic.get(o)) {
            t.parseData(this._xmlEventsDic.get(o), this._configXml, null);
          }
          this._activeFakeEvents.set(t.eventId, t);
        }
      }
      this.updateEvents();
      f.CastleModel.lordData.unlockLords();
      _.CastleBasicController.getInstance().dispatchEvent(new g.CastleEquipmentEvent(g.CastleEquipmentEvent.LORDS_UPDATED));
    }
  };
  CastleSpecialEventData.prototype.parse_SEI = function (e) {
    var t = e ? e.E : null;
    var i = [];
    if (t && t.length > 0) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = d.int(a.EID);
          if (this.parseServerEventData(s, a)) {
            i.push(this.getActiveEventByEventId(s));
          }
        }
      }
    }
    this.onEventDataParsed(i);
    this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.SERVER_DATA_PARSED));
  };
  CastleSpecialEventData.prototype.createEventVOByEventID = function (e) {
    if (!this._xmlEventsDic.has(e)) {
      return null;
    }
    var t = String(this._xmlEventsDic.get(e).eventType);
    return O.CastleSpecialEventFactory.createByEventType(t);
  };
  CastleSpecialEventData.prototype.parseServerEventData = function (e, t) {
    try {
      if (this._activeEvents.get(e)) {
        this._activeEvents.get(e).parseData(this._xmlEventsDic.get(e), this._configXml, t);
        this._activeEvents.get(e).checkOpenDialog();
      } else {
        var i = this.createEventVOByEventID(e);
        if (!i) {
          a.debug("CastleSpecialEventData.parse_SEI(): Server told client about an unknown event (eventId = " + e + ").");
          return false;
        }
        i.parseData(this._xmlEventsDic.get(e), this._configXml, t);
        if (i.canBeAddedToActiveEvents()) {
          this._activeEvents.set(e, i);
          i.loadAdditionalEventLib();
          this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.ADD_SPECIALEVENT, i));
          return true;
        }
      }
    } catch (e) {
      h.DebugError.handle(e);
    }
    return false;
  };
  CastleSpecialEventData.prototype.onEventDataParsed = function (e) {
    for (var t = 0; t < e.length; ++t) {
      if (e[t].openWithLogin) {
        o.CommandController.instance.executeCommand(T.IngameClientCommands.OPEN_EVENT_DIALOG_COMMAND, [e[t], false]);
      }
    }
    if (this._activeEvents != null) {
      for (var i = 0, n = Array.from(this._activeEvents.values()); i < n.length; i++) {
        var a = n[i];
        if (a !== undefined && a) {
          this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, a));
        }
      }
    }
    this.updateEvents();
    this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.SERVER_DATA_PARSED));
  };
  CastleSpecialEventData.prototype.parse_SEE = function (e) {
    if (e) {
      this.removeEventById(e.EID, this._activeEvents, C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    }
  };
  CastleSpecialEventData.prototype.parse_FN = function (e) {
    if (e) {
      var t = r.castAs(this.getActiveEventByEventId(u.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      if (t) {
        t.loadFactionDataFromParamObject(e);
      }
    }
  };
  CastleSpecialEventData.prototype.parse_SAF = function (e) {
    this.handleArtifactPartFound(e, true);
  };
  CastleSpecialEventData.prototype.parse_SAP = function (e) {
    this.handleArtifactPartFound(e, false);
  };
  CastleSpecialEventData.prototype.executeUpdate = function (e) {
    this.executeUpdateForEvents(this._activeEvents, C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    this.executeUpdateForEvents(this._privateEvents, C.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT);
  };
  CastleSpecialEventData.prototype.executeUpdateForEvents = function (e, t) {
    if (e != null) {
      for (var i = 0, n = Array.from(e.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (o.remainingEventTimeInSeconds <= 0) {
            this.removeEventById(o.eventId, e, t);
          }
          if (o.isActive) {
            o.update();
          }
        }
      }
    }
  };
  CastleSpecialEventData.prototype.removeEventById = function (e, t, i) {
    s.info("--------------------> REMOVE EVENT: " + e);
    var n = t.get(e);
    if (n) {
      n.onDestroy();
      t.set(e, null);
      t.delete(e);
      this.dispatchEvent(new C.CastleSpecialEventEvent(i, n));
      this.updateEvents();
      f.CastleModel.settingsData.validateEventBookmark();
    }
  };
  CastleSpecialEventData.prototype.updateEvents = function () {
    if (I.Iso && I.Iso.data && I.Iso.controller && I.Iso.controller.dataUpdater && I.Iso.controller.processor) {
      I.Iso.controller.dataUpdater.updateEventBuildings();
      I.Iso.controller.processor.executePackage(new b.IsoCommandPackageObjectsInit(I.Iso.data, D.IsoObjectGroupEnum.TREASURE_CHESTS));
    }
  };
  CastleSpecialEventData.prototype.clearActiveEvents = function () {
    this._activeEvents = new Map();
  };
  CastleSpecialEventData.prototype.handleArtifactPartFound = function (e, t = true) {
    if (e) {
      var i = d.int(e.EID);
      var n = r.castAs(this.getActiveEventByEventId(i), "ArtifactEventVO");
      if (n) {
        n.artifactPartsFound = d.int(e.PF);
        this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, n));
        if (t || n.hasAllParts) {
          o.CommandController.instance.executeCommand(T.IngameClientCommands.OPEN_SPECIALEVENT_PROGRESS_COMMAND, [n]);
        }
        if (n.hasAllParts) {
          this.updateEvents();
        }
      } else {
        (n = this.createEventVOByEventID(i)).parseData(this._xmlEventsDic.get(i), this._configXml, e);
        if (n.hasAllParts) {
          o.CommandController.instance.executeCommand(T.IngameClientCommands.OPEN_SPECIALEVENT_PROGRESS_COMMAND, [n]);
        }
      }
    }
  };
  CastleSpecialEventData.prototype.getSkipCosts = function (e, t = 0) {
    return d.int(this.getSkipCostsForTimeLeft(e.buildingVO.getTimeLeftForBuilding(), t));
  };
  CastleSpecialEventData.prototype.getSkipCostsForTimeLeft = function (e, t) {
    var i = d.int(f.CastleModel.costsData.getFinalCostsC2(c.ConstructionConst.getFastCompleteCostC2(e, this.getSkipCostPerMinute())));
    return this.calculateSkipCosts(i, e);
  };
  CastleSpecialEventData.prototype.calculateSkipCosts = function (e, t) {
    var i = d.int(c.ConstructionConst.FREE_SKIP_TIME);
    if (f.CastleModel.subscriptionData.isEffectTypeActive(E.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS)) {
      i += d.int(f.CastleModel.subscriptionData.getEffectValue(E.EffectTypeEnum.EFFECT_TYPE_FREE_SKIP_BONUS));
    }
    if (t <= i) {
      return 0;
    } else {
      return e;
    }
  };
  CastleSpecialEventData.prototype.getSkipCostPerMinute = function () {
    var e = f.CastleModel.specialEventData.isEventActive(u.EventConst.EVENTTYPE_ADJUST_SKIP_BUILDING);
    var t = f.CastleModel.specialEventData.getActiveEventByEventId(u.EventConst.EVENTTYPE_ADJUST_SKIP_BUILDING);
    var i = c.ConstructionConst.getInstantCostC2PerMinuteFor(f.CastleModel.userData.userLevel);
    if (e) {
      return t.getSkipCostLevelRange(f.CastleModel.userData.userLevel);
    } else {
      return i;
    }
  };
  CastleSpecialEventData.prototype.hasSkipForFree = function (e) {
    return this.getSkipCosts(e) == 0;
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "activeEvents", {
    get: function () {
      return this._activeEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activeFakeEvents", {
    get: function () {
      return this._activeFakeEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activePrivateEvents", {
    get: function () {
      return this._privateEvents;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.getActiveEventByEventId = function (e) {
    return this._activeEvents.get(e);
  };
  CastleSpecialEventData.prototype.getActivePrivateEventByEventId = function (e) {
    return this._privateEvents.get(e);
  };
  CastleSpecialEventData.prototype.getActiveEventByAnyEventId = function (e) {
    if (!e) {
      return null;
    }
    var t;
    for (var i = 0; i < e.length; ++i) {
      if (t = this._activeEvents.get(e[i])) {
        return t;
      }
    }
    return null;
  };
  CastleSpecialEventData.prototype.getActiveEventsByIds = function (e) {
    var t;
    var i = [];
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && (t = this.getActiveEventByEventId(a))) {
          i.push(t);
        }
      }
    }
    return i;
  };
  CastleSpecialEventData.prototype.getActiveEventBySoldPackage = function (e) {
    if (this._activeEvents != null) {
      for (var t = 0, i = Array.from(this._activeEvents.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.eventPackagesVO && n.eventPackagesVO.containsEventPackage(e)) {
          return n;
        }
      }
    }
    return null;
  };
  CastleSpecialEventData.prototype.getEventByClass = function (e) {
    var t;
    if (this._activeEvents != null) {
      for (var i = 0, n = Array.from(this._activeEvents.values()); i < n.length; i++) {
        if ((t = n[i]) !== undefined && t instanceof e) {
          return t;
        }
      }
    }
    if (this._privateEvents != null) {
      for (var o = 0, a = Array.from(this._privateEvents.values()); o < a.length; o++) {
        if ((t = a[o]) !== undefined && t instanceof e) {
          return t;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "isSeasonEventActive", {
    get: function () {
      var e = this.activeSeasonVO;
      return !!e && !e.finished && e.remainingEventTimeInSeconds > 0 && e.isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpecialEventData.prototype, "activeSeasonVO", {
    get: function () {
      var e = this.getEventByClass(v.ASeasonEventVO);
      return e || null;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.isEventActive = function (e) {
    var t = this.getActiveEventByEventId(e);
    return t != null && t.isActive;
  };
  CastleSpecialEventData.prototype.isPrivateEventActive = function (e) {
    var t = this.getActivePrivateEventByEventId(e);
    return t != null && t.isActive;
  };
  CastleSpecialEventData.prototype.addPrivateEventByType = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (!this._privateEvents.get(e.privateEventID)) {
      var n = new e.privateEventClass();
      n.parseByPrivateEventData(e, t);
      this._privateEvents.set(n.eventId, n);
      this.updateEvents();
      this.dispatchEvent(new C.CastleSpecialEventEvent(C.CastleSpecialEventEvent.ADD_PRIVATEEVENT, n));
    }
  };
  CastleSpecialEventData.prototype.removePrivateEventByType = function (e) {
    this.removeEventById(e.privateEventID, this._privateEvents, C.CastleSpecialEventEvent.REMOVE_PRIVATEEVENT);
  };
  Object.defineProperty(CastleSpecialEventData.prototype, "configXml", {
    get: function () {
      return this._configXml;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpecialEventData.prototype.parseTEI = function (e) {
    var t = e ? e.TE : null;
    if (t && t.length != 0) {
      var i = [];
      if (t != null) {
        for (var n = 0, o = t; n < o.length; n++) {
          var a = o[n];
          if (a !== undefined) {
            var s = d.int(a.TRID);
            if (this.parseServerEventData(s, a)) {
              i.push(this.getActiveEventByEventId(s));
            }
          }
        }
      }
      this.onEventDataParsed(i);
    }
  };
  CastleSpecialEventData.prototype.parseTEE = function (e) {
    var t = d.int(e && e.TRID ? e.TRID : -1);
    if (t >= 0) {
      this.removeEventById(t, this._activeEvents, C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT);
    }
  };
  return CastleSpecialEventData;
}(m.CastleBasicData);
exports.CastleSpecialEventData = y;
var b = require("./1946.js");
var D = require("./143.js");
var I = require("./33.js");
var T = require("./29.js");
var v = require("./848.js");
var S = require("./5583.js");
l.classImplementsInterfaces(y, "IUpdatable");