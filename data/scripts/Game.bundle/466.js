Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericHighscoreDialogProperties(t, i = -1, n = -1, o = -1, a = -1, s = -1) {
    var r = this;
    r._preselectedLeagueId = 0;
    r._preselectedOwnRank = 0;
    r._highscoreType = 0;
    r._numberOfLeagues = 0;
    r._ownLeagueID = 0;
    r._eventID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this)._numberOfLeagues = i;
    r._highscoreType = t;
    r._preselectedLeagueId = n;
    r._preselectedOwnRank = o;
    r._eventID = s;
    r._ownLeagueID = a > -1 ? a : n;
    return r;
  }
  n.__extends(CastleGenericHighscoreDialogProperties, e);
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "preselectedLeagueId", {
    get: function () {
      return this._preselectedLeagueId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "preselectedOwnRank", {
    get: function () {
      return this._preselectedOwnRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "highscoreType", {
    get: function () {
      return this._highscoreType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "numberOfLeagues", {
    get: function () {
      return this._numberOfLeagues;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "ownLeagueID", {
    get: function () {
      return this._ownLeagueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericHighscoreDialogProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericHighscoreDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleGenericHighscoreDialogProperties = o;