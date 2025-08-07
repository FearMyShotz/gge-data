Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FactionCapitalInfoVO() {
    var t = this;
    t._specialCampID = 0;
    t._laneID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FactionCapitalInfoVO, e);
  FactionCapitalInfoVO.prototype.parseXML = function (e) {
    var t = parseInt(e.CampPosX || "");
    var i = parseInt(e.CampPosY || "");
    this._sectorPosition = [t, i];
    this._specialCampID = parseInt(e.specialcampID || "");
    this._laneID = parseInt(e.laneID || "");
    this._unlockIDs = (e.unlockIDs || "").toString().split(",");
    for (var n = 0; n < this._unlockIDs.length; n++) {
      this._unlockIDs[n] = parseInt(this._unlockIDs[n]);
    }
    return this;
  };
  Object.defineProperty(FactionCapitalInfoVO.prototype, "sectorPosition", {
    get: function () {
      return this._sectorPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "laneID", {
    get: function () {
      return this._laneID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalInfoVO.prototype, "towerLanes", {
    get: function () {
      if (this.laneID == FactionCapitalInfoVO.RED_CAPITAL) {
        return [FactionCapitalInfoVO.RED_TOP, FactionCapitalInfoVO.RED_MIDDLE, FactionCapitalInfoVO.RED_BOTTOM];
      } else if (this.laneID == FactionCapitalInfoVO.BLUE_CAPITAL) {
        return [FactionCapitalInfoVO.BLUE_TOP, FactionCapitalInfoVO.BLUE_MIDDLE, FactionCapitalInfoVO.BLUE_BOTTOM];
      } else {
        return [];
      }
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalInfoVO.prototype.belongsToLane = function (e) {
    if (FactionCapitalInfoVO.RED_LANE.indexOf(e) > -1) {
      return this._laneID == FactionCapitalInfoVO.RED_CAPITAL;
    } else {
      return FactionCapitalInfoVO.BLUE_LANE.indexOf(e) > -1 && this._laneID == FactionCapitalInfoVO.BLUE_CAPITAL;
    }
  };
  Object.defineProperty(FactionCapitalInfoVO.prototype, "unlockIDs", {
    get: function () {
      return this._unlockIDs;
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalInfoVO.__initialize_static_members = function () {
    FactionCapitalInfoVO.RED_TOP = 1;
    FactionCapitalInfoVO.RED_MIDDLE = 2;
    FactionCapitalInfoVO.RED_BOTTOM = 3;
    FactionCapitalInfoVO.RED_CAPITAL = 4;
    FactionCapitalInfoVO.BLUE_TOP = 5;
    FactionCapitalInfoVO.BLUE_MIDDLE = 6;
    FactionCapitalInfoVO.BLUE_BOTTOM = 7;
    FactionCapitalInfoVO.BLUE_CAPITAL = 8;
    FactionCapitalInfoVO.RED_LANE = [FactionCapitalInfoVO.RED_TOP, FactionCapitalInfoVO.RED_MIDDLE, FactionCapitalInfoVO.RED_BOTTOM, FactionCapitalInfoVO.RED_CAPITAL];
    FactionCapitalInfoVO.BLUE_LANE = [FactionCapitalInfoVO.BLUE_TOP, FactionCapitalInfoVO.BLUE_MIDDLE, FactionCapitalInfoVO.BLUE_BOTTOM, FactionCapitalInfoVO.BLUE_CAPITAL];
  };
  return FactionCapitalInfoVO;
}(require("./498.js").MinWorldMapCastleInfoVO);
exports.FactionCapitalInfoVO = o;
o.__initialize_static_members();