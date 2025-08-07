Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./4368.js");
var r = require("./4.js");
var l = require("./460.js");
var c = function (e) {
  function AlliTournamentEventVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._scoreEventVO = new d.ALeagueTypeScoreEventVO();
    return t;
  }
  n.__extends(AlliTournamentEventVO, e);
  AlliTournamentEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this._scoreEventVO.eventId = a.EventConst.EVENTTYPE_ALLIANCE_TOURNAMENT;
    this._scoreEventVO.parseData(t, i, n.A);
  };
  Object.defineProperty(AlliTournamentEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AlliTournamentEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlliTournamentEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_AllianceTournement";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlliTournamentEventVO.prototype, "isVisible", {
    get: function () {
      return r.CastleModel.userData.isInAlliance;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AScoreEventVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AlliTournamentEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, u.CastleAllianceTournamentEventDialog, new s.CastleAllianceTournamentEventDialogProperties(this));
  };
  AlliTournamentEventVO.prototype.setRankAndPoints = function (e, t, i) {
    this._scoreEventVO.setRankAndPoints(e, t, null);
  };
  Object.defineProperty(AlliTournamentEventVO.prototype, "scoreEventVO", {
    get: function () {
      return this._scoreEventVO;
    },
    enumerable: true,
    configurable: true
  });
  AlliTournamentEventVO.__initialize_static_members = function () {
    AlliTournamentEventVO.EVENT_BUILDING_WOD = 287;
  };
  return AlliTournamentEventVO;
}(l.AScoreEventVO);
exports.AlliTournamentEventVO = c;
var u = require("./4369.js");
var d = require("./327.js");
o.classImplementsInterfaces(c, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
c.__initialize_static_members();