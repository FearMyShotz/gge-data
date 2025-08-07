Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./1899.js");
var l = require("./327.js");
var c = function (e) {
  function BeggingKnightsEventVO() {
    var t = this;
    t._totalHours = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._eventId = s.EventConst.EVENTTYPE_BEGGING_KNIGHTS;
    return t;
  }
  n.__extends(BeggingKnightsEventVO, e);
  BeggingKnightsEventVO.prototype.parseBasicsFromParamObject = function (t) {
    e.prototype.parseBasicsFromParamObject.call(this, t);
    this._totalHours = t.TH;
  };
  BeggingKnightsEventVO.prototype.parseLeagueTypeEventElement = function (t) {
    e.prototype.parseLeagueTypeEventElement.call(this, t);
    this._factorList = [];
    this._factorList = (t.ressourceFactors || "").toString().split("#");
    for (var i = 0; i < this._rewardLists.length; ++i) {
      for (var n = this._rewardLists[i].getFilteredListByType(u.CollectableEnum.UNITS), o = 0; o < n.length; ++o) {
        var s = n.getItemByIndex(o);
        s.amount = a.BeggingKnightsConst.calculateRewardAmount(this._totalHours, s.amount);
      }
    }
  };
  Object.defineProperty(BeggingKnightsEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return BeggingKnightsEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ALeagueTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_BeggingKnights";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ALeagueTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "totalHours", {
    get: function () {
      return this._totalHours;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "factorList", {
    get: function () {
      return this._factorList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BeggingKnightsEventVO.prototype, "totalAmounts", {
    get: function () {
      var e = [];
      if (this._factorList != null) {
        for (var t = 0, i = this._factorList; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(a.BeggingKnightsConst.calculateRequirement(this._totalHours, n));
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  BeggingKnightsEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, d.CastleBeggingKnightsDialog, new r.CastleBeggingKnightsDialogProperties(this));
  };
  BeggingKnightsEventVO.__initialize_static_members = function () {
    BeggingKnightsEventVO.EVENT_BUILDING_WOD = 284;
  };
  return BeggingKnightsEventVO;
}(l.ALeagueTypeScoreEventVO);
exports.BeggingKnightsEventVO = c;
var u = require("./12.js");
var d = require("./4387.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
c.__initialize_static_members();