Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function MinWorldMapCastleInfoVO() {
    this._kingdomId = -1;
    this._objectId = -1;
    this._absAreaPos = new n(-1, -1);
    this._areaType = -1;
    this._useSpecialConnectionLineColor = false;
    this._specialConnectionLineColor = 0;
  }
  MinWorldMapCastleInfoVO.prototype.fillFromParamObject = function (e) {
    this._kingdomId = a.int(e[0]);
    this._objectId = a.int(e[1]);
    this._absAreaPos.x = e[2];
    this._absAreaPos.y = e[3];
    this._areaType = e[4];
  };
  MinWorldMapCastleInfoVO.prototype.copyFromWorldmapObjectVO = function (e) {
    this._kingdomId = e.kingdomID;
    this._objectId = e.objectId;
    this._absAreaPos = e.absAreaPos;
    this._areaType = e.areaType;
  };
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    set: function (e) {
      this._kingdomId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "objectId", {
    get: function () {
      return this._objectId;
    },
    set: function (e) {
      this._objectId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "areaType", {
    get: function () {
      return this._areaType;
    },
    set: function (e) {
      this._areaType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "absAreaPos", {
    get: function () {
      return this._absAreaPos;
    },
    set: function (e) {
      this._absAreaPos = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "useSpecialConnectionLineColor", {
    get: function () {
      return this._useSpecialConnectionLineColor;
    },
    set: function (e) {
      this._useSpecialConnectionLineColor = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MinWorldMapCastleInfoVO.prototype, "specialConnectionLineColor", {
    get: function () {
      return this._specialConnectionLineColor;
    },
    set: function (e) {
      this._specialConnectionLineColor = e;
    },
    enumerable: true,
    configurable: true
  });
  return MinWorldMapCastleInfoVO;
}();
exports.MinWorldMapCastleInfoVO = o;
var a = require("./6.js");