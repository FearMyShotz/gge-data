Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1330.js");
var s = require("./72.js");
var r = require("./4.js");
var l = function (e) {
  function CastleTreasureHuntData() {
    var t = this;
    t._currentMapID = CastleTreasureHuntData.NO_MORE_MAPS;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleTreasureHuntData, e);
  CastleTreasureHuntData.prototype.parse_THI = function (e) {
    if (e) {
      this._currentMapID = o.int(e.MID);
      this.dispatchEvent(new a.CastleTreasureHuntEvent(a.CastleTreasureHuntEvent.TREASURE_HUNT_INFO_UPDATED));
    }
  };
  Object.defineProperty(CastleTreasureHuntData.prototype, "treasureHuntMapVO", {
    get: function () {
      if (this.hasMapsAvailable) {
        return r.CastleModel.treasureMapData.getTreasureMapByID(this._currentMapID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntData.prototype, "hasMapsAvailable", {
    get: function () {
      return this._currentMapID != CastleTreasureHuntData.NO_MORE_MAPS;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTreasureHuntData.prototype, "currentMapID", {
    get: function () {
      return this._currentMapID;
    },
    enumerable: true,
    configurable: true
  });
  CastleTreasureHuntData.NO_MORE_MAPS = -1;
  return CastleTreasureHuntData;
}(s.CastleEventDispatcher);
exports.CastleTreasureHuntData = l;