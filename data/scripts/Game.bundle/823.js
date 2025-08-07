Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericAllianceHighscoreDialogProperties(t, i = -1, n = -1, o = -1, a = -1) {
    var s = this;
    s.preselectedLeagueId = 0;
    s.preselectedOwnRank = 0;
    s.highscoreType = 0;
    s.numberOfLeagues = 0;
    s._eventID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).numberOfLeagues = i;
    s.highscoreType = t;
    s.preselectedLeagueId = n;
    s.preselectedOwnRank = o;
    s._eventID = a;
    return s;
  }
  n.__extends(CastleGenericAllianceHighscoreDialogProperties, e);
  Object.defineProperty(CastleGenericAllianceHighscoreDialogProperties.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericAllianceHighscoreDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleGenericAllianceHighscoreDialogProperties = o;