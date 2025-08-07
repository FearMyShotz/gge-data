Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./57.js");
var o = require("./3793.js");
var a = require("./3794.js");
var s = require("./3795.js");
var r = require("./832.js");
var l = require("./30.js");
var c = require("./15.js");
var u = require("./4.js");
var d = function () {
  function LeaderBoardDataProvider(e, t, i = -1) {
    this._listType = 0;
    this._leagueTypeID = -1;
    this._maxResultsPerPage = 0;
    this._currentScoreResults = [];
    this._currentSearchResults = [];
    this._currentRank = 1;
    this._requestedRank = -1;
    this._currentSearchIndex = 0;
    this._requestedSearchIndex = 0;
    this._totalNumberOfScores = 0;
    this._listType = e;
    this._maxResultsPerPage = t;
    this._leagueTypeID = i;
    this._onResultsUpdatedSignal = new n.Signal();
    this._onErrorSignal = new n.Signal();
    this._onWaitingSignal = new n.Signal();
  }
  LeaderBoardDataProvider.prototype.addEventListeners = function () {
    this.getController().addEventListener(r.LeaderBoardEvent.LEADERBOARD_SCORE_DATA, this.bindFunction(this.onScoreDataReceived));
    this.getController().addEventListener(r.LeaderBoardEvent.LEADERBOARD_SEARCH_DATA, this.bindFunction(this.onSearchDataReceived));
    this.getController().addEventListener(r.LeaderBoardEvent.LEADERBOARD_DATA_ERROR, this.bindFunction(this.onErrorReceived));
  };
  LeaderBoardDataProvider.prototype.removeEventListeners = function () {
    this.clearSearchResults();
    this.getController().removeEventListener(r.LeaderBoardEvent.LEADERBOARD_SCORE_DATA, this.bindFunction(this.onScoreDataReceived));
    this.getController().removeEventListener(r.LeaderBoardEvent.LEADERBOARD_SEARCH_DATA, this.bindFunction(this.onSearchDataReceived));
    this.getController().removeEventListener(r.LeaderBoardEvent.LEADERBOARD_DATA_ERROR, this.bindFunction(this.onErrorReceived));
    this._onErrorSignal.removeAll();
    this._onResultsUpdatedSignal.removeAll();
    this._onWaitingSignal.removeAll();
    this._isWaitingForServer = false;
  };
  LeaderBoardDataProvider.prototype.getTopPage = function () {
    this._requestedRank = 1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new o.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getPreviousPage = function () {
    this._requestedRank = Math.max((this._requestedRank > -1 ? this._requestedRank : this._currentRank) - this._maxResultsPerPage, 1);
    this._requestedSearchIndex = -1;
    this.sendCommand(new o.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getPageByRank = function (e) {
    this._requestedRank = e;
    this._requestedSearchIndex = -1;
    this.sendCommand(new o.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getNextPage = function () {
    this._requestedSearchIndex = -1;
    this._requestedRank = Math.min((this._requestedRank > -1 ? this._requestedRank : this._currentRank) + this._maxResultsPerPage, this._totalNumberOfScores);
    this.sendCommand(new o.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getBottomPage = function () {
    this._requestedRank = this._totalNumberOfScores - this._maxResultsPerPage + 1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new o.C2SListLeaderboardScoresPageVO(this._listType, this._leagueTypeID, this._maxResultsPerPage, this._requestedRank));
  };
  LeaderBoardDataProvider.prototype.getCurrentPlayerPage = function () {
    this._requestedRank = -1;
    this._requestedSearchIndex = -1;
    this.sendCommand(new a.C2SListLeaderboardScoresWindowVO(this._listType, this._leagueTypeID, this._maxResultsPerPage));
  };
  LeaderBoardDataProvider.prototype.searchLeaderBoard = function (e) {
    if (e != "" && e != null) {
      this.sendCommand(new s.C2SSearchLeaderboardScoresEventVO(this._listType, e));
    }
  };
  LeaderBoardDataProvider.prototype.getCurrentSearchPage = function () {
    this._requestedRank = -1;
    this._requestedSearchIndex = this._currentSearchIndex;
    this.sendCommand(new a.C2SListLeaderboardScoresWindowVO(this._listType, this._currentSearchResults[this._requestedSearchIndex].leagueTypeId, this._maxResultsPerPage, this._currentSearchResults[this._requestedSearchIndex].scoreId));
  };
  LeaderBoardDataProvider.prototype.getPreviousSearchPage = function () {
    this._requestedSearchIndex = this._currentSearchIndex = this._currentSearchIndex == 0 ? this._currentSearchResults.length - 1 : this._currentSearchIndex - 1;
    this.getCurrentSearchPage();
  };
  LeaderBoardDataProvider.prototype.getNextSearchPage = function () {
    this._requestedSearchIndex = this._currentSearchIndex = this._currentSearchIndex == this._currentSearchResults.length - 1 ? 0 : this._currentSearchIndex + 1;
    this.getCurrentSearchPage();
  };
  LeaderBoardDataProvider.prototype.clearSearchResults = function () {
    this._requestedSearchIndex = -1;
    this._currentSearchIndex = -1;
    this._currentSearchResults = [];
  };
  LeaderBoardDataProvider.prototype.canScrollUp = function () {
    return this._currentRank > 1;
  };
  LeaderBoardDataProvider.prototype.canScrollDown = function () {
    return this._currentRank + this._maxResultsPerPage < this._totalNumberOfScores;
  };
  LeaderBoardDataProvider.prototype.sendCommand = function (e) {
    if (!this.isWaitingForServer) {
      this._onWaitingSignal.dispatch();
      this._isWaitingForServer = true;
      this._lastRequestTimestamp = l.CachedTimer.getCachedTimer();
      u.CastleModel.smartfoxClient.sendCommandVO(e);
    }
  };
  LeaderBoardDataProvider.prototype.onSearchDataReceived = function (e) {
    var t = this;
    if (this.listType == e.params.LT || this.leagueTypeID != (e.params.LID || -1)) {
      this._isWaitingForServer = false;
      this._currentSearchResults = [];
      e.params.L.forEach(function (e) {
        e.L.forEach(function (i) {
          t._currentSearchResults.push({
            leagueTypeId: e.LID,
            scoreId: i
          });
        });
      });
      this._requestedSearchIndex = this._currentSearchIndex = 0;
      if (this._currentSearchResults.length > 0) {
        this.getCurrentSearchPage();
      } else {
        this.getCurrentPlayerPage();
      }
    }
  };
  LeaderBoardDataProvider.prototype.onScoreDataReceived = function (e) {
    if (this.listType == e.params.LT || this.leagueTypeID != (e.params.LID || -1)) {
      this._isWaitingForServer = false;
      this._currentScoreResults = e.params.L || [];
      this._leagueTypeID = e.params.LID || this._leagueTypeID;
      this._totalNumberOfScores = e.params.T;
      if (this._currentScoreResults.length > 0) {
        this._currentRank = this._currentScoreResults[0].R;
      }
      this.handlePendingRequest();
      this._onResultsUpdatedSignal.dispatch(this._currentScoreResults);
    }
  };
  LeaderBoardDataProvider.prototype.onErrorReceived = function (e) {
    this._isWaitingForServer = false;
    this._requestedSearchIndex = -1;
    this._requestedRank = -1;
    this._onErrorSignal.dispatch(e.params);
  };
  LeaderBoardDataProvider.prototype.handlePendingRequest = function () {
    var e = this;
    if (!this._isWaitingForServer) {
      if (this._requestedRank > -1 && this._requestedRank != this._currentRank) {
        this.getPageByRank(this._requestedRank);
      } else if (this._requestedSearchIndex > -1) {
        if (!this._currentScoreResults.some(function (t) {
          return t.SI.toString() == e._currentSearchResults[e._requestedSearchIndex].scoreId;
        })) {
          this.getCurrentSearchPage();
        }
      }
    }
  };
  Object.defineProperty(LeaderBoardDataProvider.prototype, "isWaitingForServer", {
    get: function () {
      if (l.CachedTimer.getCachedTimer() - this._lastRequestTimestamp > LeaderBoardDataProvider.MAX_WAITTIME) {
        this._isWaitingForServer = false;
      }
      return this._isWaitingForServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "listType", {
    get: function () {
      return this._listType;
    },
    set: function (e) {
      this._listType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "leagueTypeID", {
    get: function () {
      return this._leagueTypeID;
    },
    set: function (e) {
      this._leagueTypeID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentScoreResults", {
    get: function () {
      return this._currentScoreResults;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentSearchResults", {
    get: function () {
      return this._currentSearchResults;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentRank", {
    get: function () {
      return this._currentRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "requestedRank", {
    get: function () {
      return this._requestedRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "currentSearchIndex", {
    get: function () {
      return this._currentSearchIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "totalNumberOfScores", {
    get: function () {
      return this._totalNumberOfScores;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "maxResultsPerPage", {
    get: function () {
      return this._maxResultsPerPage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onResultsUpdatedSignal", {
    get: function () {
      return this._onResultsUpdatedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onErrorSignal", {
    get: function () {
      return this._onErrorSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeaderBoardDataProvider.prototype, "onWaitingSignal", {
    get: function () {
      return this._onWaitingSignal;
    },
    enumerable: true,
    configurable: true
  });
  LeaderBoardDataProvider.prototype.getController = function () {
    return c.CastleBasicController.getInstance();
  };
  LeaderBoardDataProvider.MAX_WAITTIME = 1000;
  return LeaderBoardDataProvider;
}();
exports.LeaderBoardDataProvider = d;