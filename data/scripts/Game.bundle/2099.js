Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SpecialEventSeasonLeagueComponent() {
    this._isModeEnabled = false;
    this._participatedOnEvent = false;
  }
  SpecialEventSeasonLeagueComponent.prototype.parseServerData = function (e) {
    this._isModeEnabled = !!e && !!e.KL;
  };
  Object.defineProperty(SpecialEventSeasonLeagueComponent.prototype, "isModeEnabled", {
    get: function () {
      return this._isModeEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpecialEventSeasonLeagueComponent.prototype, "participatedOnEvent", {
    get: function () {
      return this._participatedOnEvent;
    },
    set: function (e) {
      this._participatedOnEvent = e;
    },
    enumerable: true,
    configurable: true
  });
  return SpecialEventSeasonLeagueComponent;
}();
exports.SpecialEventSeasonLeagueComponent = n;