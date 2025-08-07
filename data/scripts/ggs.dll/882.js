Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./14.js");
var s = function (e) {
  function GameVersionErrorFactory(t, n) {
    var i = e.call(this) || this;
    i.GAME_ID = "gameId";
    i.ERROR_MESSAGE = "errorMessage";
    i._gameId = t;
    i._errorMessage = n;
    return i;
  }
  i.__extends(GameVersionErrorFactory, e);
  GameVersionErrorFactory.prototype.create = function () {
    var t = e.prototype.create.call(this);
    t.logData.set(a.ExternalLoggingConstants.PARAM_LOG_EVENT_ID, GameVersionErrorFactory.EVENT_ID.toString());
    t.logData.set(this.GAME_ID, this._gameId.toString());
    t.logData.set(this.ERROR_MESSAGE, this._errorMessage);
    return t;
  };
  GameVersionErrorFactory.BASIC_LOADER_DATA_NOT_SUPPORTED = "Cache Breaker doesn't support basic loader data.";
  GameVersionErrorFactory.CACHE_BREAKER_DATA_NOT_SUPPORTED = "Game doesn't support cache breaker data.";
  GameVersionErrorFactory.EVENT_ID = 60;
  return GameVersionErrorFactory;
}(require("./21.js").BasicLogObjectFactory);
exports.GameVersionErrorFactory = s;