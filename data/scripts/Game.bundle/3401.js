Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function LeagueTypeVO() {
    this._leaguetypeID = 0;
    this._eventID = 0;
    this._minLevel = 0;
    this._maxLevel = 0;
  }
  LeagueTypeVO.prototype.parseXML = function (e) {
    this._leaguetypeID = parseInt(e.leaguetypeID || "");
    this._eventID = parseInt(e.eventID || "");
    this._minLevel = parseInt(e.minLevel || "");
    this._maxLevel = parseInt(e.maxLevel || "");
  };
  Object.defineProperty(LeagueTypeVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "minLevel", {
    get: function () {
      return this._minLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LeagueTypeVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  return LeagueTypeVO;
}();
exports.LeagueTypeVO = n;