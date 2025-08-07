Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FactionTowerInfoVO() {
    var t = this;
    t._specialCampID = 0;
    t._villageCount = 0;
    t._laneID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FactionTowerInfoVO, e);
  FactionTowerInfoVO.prototype.parseXML = function (e) {
    var t = parseInt(e.CampPosX || "");
    var i = parseInt(e.CampPosY || "");
    this._sectorPosition = [t, i];
    this._specialCampID = parseInt(e.specialcampID || "");
    this._villageCount = parseInt(e.villageCount || "");
    this._laneID = parseInt(e.laneID || "");
    return this;
  };
  Object.defineProperty(FactionTowerInfoVO.prototype, "sectorPosition", {
    get: function () {
      return this._sectorPosition;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "specialCampID", {
    get: function () {
      return this._specialCampID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "villageCount", {
    get: function () {
      return this._villageCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerInfoVO.prototype, "laneID", {
    get: function () {
      return this._laneID;
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerInfoVO.prototype.initVillagePositions = function () {
    this._villagePositions = [];
  };
  Object.defineProperty(FactionTowerInfoVO.prototype, "villagePositions", {
    get: function () {
      return this._villagePositions;
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerInfoVO.prototype.addVillage = function (e) {
    this._villagePositions.push(e);
  };
  return FactionTowerInfoVO;
}(require("./498.js").MinWorldMapCastleInfoVO);
exports.FactionTowerInfoVO = o;