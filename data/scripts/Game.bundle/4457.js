Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./22.js");
var l = require("./468.js");
var c = require("./327.js");
var u = require("./1909.js");
var d = function (e) {
  function LongTermPointEventEventVO() {
    var t = this;
    t.scoreConditions = new Map();
    t._upcomingEvents = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(LongTermPointEventEventVO, e);
  LongTermPointEventEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    if (t.UE) {
      this._upcomingEvents = t.UE;
    }
    if (t.SID) {
      this.setSkinBySkinID(t.SID);
    }
  };
  LongTermPointEventEventVO.prototype.setSkinBySkinID = function (e) {
    this._skin = l.LongTermPointEventSkin.getTypeById(e);
  };
  LongTermPointEventEventVO.prototype.parseAdditionalXmlFromRoot = function (t) {
    e.prototype.parseAdditionalXmlFromRoot.call(this, t);
    var i = t.longtermpointeventquests;
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          if (parseInt(a.leaguetypeID || "") == this._leagueID) {
            this.parseLongTermPointEventQuest(a);
          }
        }
      }
    }
    if (this._upcomingEvents != null) {
      for (var s = 0, r = this._upcomingEvents; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && !this.scoreConditions.has(l)) {
          throw new Error("Did not find matching longtermpointeventquest XML node for event ID " + this._eventId + ", league ID " + this._leagueID + " and subtype " + this.subTypeID + ".");
        }
      }
    }
  };
  LongTermPointEventEventVO.prototype.parseLongTermPointEventQuest = function (e) {
    var t = parseInt(e.subEventID || "");
    var i = r.CastleXMLUtils.getIntArrayFromString(e.pointsPerTier || "", ",");
    for (var n = (e.conditions || "").split("#"), o = [], a = 0; a < n.length; a++) {
      o[a] = n[a].toString().split("+");
    }
    if (i.length != o.length) {
      throw new Error("The length of pointsPerTier and conditions in longtermpointeventquest XML node with id " + (e.pointEventQuestID || "") + ":  must be the same!");
    }
    this.scoreConditions.set(t, []);
    for (var s = 0; s < o.length; ++s) {
      this.scoreConditions.get(t).push(new u.ScoreConditionVO(i[s], o[s]));
    }
  };
  Object.defineProperty(LongTermPointEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_longPointEvent" + this._skin.textSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ALeagueTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return this._skin.buildingWod;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ALeagueTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LongTermPointEventEventVO.prototype.openDialog = function (e = true) {
    o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_LONGTERM_POINT_EVENT_DIALOG);
  };
  LongTermPointEventEventVO.prototype.getCondition = function (e, t) {
    return this.scoreConditions.get(e)[t];
  };
  LongTermPointEventEventVO.prototype.getConditionCount = function (e) {
    return s.int(this.scoreConditions.get(e).length);
  };
  Object.defineProperty(LongTermPointEventEventVO.prototype, "upcomingEvents", {
    get: function () {
      return this._upcomingEvents;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    set: function (e) {
      this._skin = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongTermPointEventEventVO.prototype, "skinId", {
    get: function () {
      return this._skin.id;
    },
    enumerable: true,
    configurable: true
  });
  return LongTermPointEventEventVO;
}(c.ALeagueTypeScoreEventVO);
exports.LongTermPointEventEventVO = d;
var p = require("./29.js");
a.classImplementsInterfaces(d, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable", "ISkinnable");