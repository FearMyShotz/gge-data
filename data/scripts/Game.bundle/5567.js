Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./26.js");
var a = require("./4.js");
var s = function () {
  function CastlePermanentCastleVO() {
    this._areaId = -1;
    this._kingdomId = -1;
    this._horsesVO = new r.CastleHorsesVO();
    this._unitsVO = new l.CastleUnitsVO();
    a.CastleModel.specialEventData.addEventListener(o.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    a.CastleModel.specialEventData.addEventListener(o.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  }
  CastlePermanentCastleVO.prototype.destroy = function () {
    a.CastleModel.specialEventData.removeEventListener(o.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvents));
    a.CastleModel.specialEventData.removeEventListener(o.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  CastlePermanentCastleVO.prototype.parseParamObject = function (e) {
    this._areaId = n.int(e.AID);
    this._kingdomId = n.int(e.KID);
    this._unitsVO.parseParamObject(e.U);
    this._horsesVO.parseParamObject(e.UH);
  };
  CastlePermanentCastleVO.prototype.onRefreshSpecialEvents = function (e) {
    this._unitsVO.onSpecialEventUpdated();
  };
  CastlePermanentCastleVO.prototype.onRemoveSpecialEvent = function (e) {
    this._unitsVO.onSpecialEventUpdated();
  };
  Object.defineProperty(CastlePermanentCastleVO.prototype, "horsesVO", {
    get: function () {
      return this._horsesVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "unitsVO", {
    get: function () {
      return this._unitsVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "areaId", {
    get: function () {
      return this._areaId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePermanentCastleVO.prototype, "kingdomId", {
    get: function () {
      return this._kingdomId;
    },
    enumerable: true,
    configurable: true
  });
  return CastlePermanentCastleVO;
}();
exports.CastlePermanentCastleVO = s;
var r = require("./5568.js");
var l = require("./5569.js");