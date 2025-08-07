Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./1894.js");
var r = require("./4.js");
var l = require("./79.js");
var c = function (e) {
  function TournamentEventVO() {
    var t = this;
    t._famePerDay = 0;
    t._ownRank = 0;
    t._ownEarnedFamePoints = 0;
    t._minimumFamepointsForBoobyprice = 0;
    t._ownLeague = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._ranking = new Map();
    return t;
  }
  n.__extends(TournamentEventVO, e);
  TournamentEventVO.prototype.parseEventXmlNode = function (e) {
    this._famePerDay = parseInt(e.famePerDay || "");
  };
  TournamentEventVO.prototype.parseParamObject = function (e) {
    this._winnerRewardList = r.CastleModel.rewardData.getListById(parseInt(e.WR));
    this._topXRewardList = r.CastleModel.rewardData.getListById(parseInt(e.TR));
    this._boobyRewardList = r.CastleModel.rewardData.getListById(parseInt(e.BR));
    if (e.R) {
      for (var t = 0, i = e.R; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._ranking.set(n[0], {
            O: r.CastleModel.otherPlayerData.parseOwnerInfo(n[2]),
            EFP: a.int(n[1])
          });
        }
      }
    }
    this._ownRank = a.int(e.OR);
    this._ownEarnedFamePoints = a.int(e.OEP);
    this._minimumFamepointsForBoobyprice = a.int(e.MFB);
  };
  Object.defineProperty(TournamentEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return TournamentEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Tournement";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "famePerDay", {
    get: function () {
      return this._famePerDay;
    },
    enumerable: true,
    configurable: true
  });
  TournamentEventVO.prototype.getRankObject = function (e) {
    return this._ranking.get(e);
  };
  Object.defineProperty(TournamentEventVO.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "ownEarnedFamePoints", {
    get: function () {
      return this._ownEarnedFamePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "minimumFamepointsForBoobyprice", {
    get: function () {
      return this._minimumFamepointsForBoobyprice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "winnerRewardList", {
    get: function () {
      return this._winnerRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "topXRewardList", {
    get: function () {
      return this._topXRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "boobyRewardList", {
    get: function () {
      return this._boobyRewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TournamentEventVO.prototype, "ownLeague", {
    get: function () {
      return this._ownLeague;
    },
    enumerable: true,
    configurable: true
  });
  TournamentEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, u.CastleTournamentEventDialog, new s.ACastleTournamentEventDialogProperties(this));
  };
  TournamentEventVO.__initialize_static_members = function () {
    TournamentEventVO.EVENT_BUILDING_WOD = 217;
  };
  return TournamentEventVO;
}(l.ASpecialEventVO);
exports.TournamentEventVO = c;
var u = require("./4552.js");
o.classImplementsInterfaces(c, "IEventOverviewable");
c.__initialize_static_members();