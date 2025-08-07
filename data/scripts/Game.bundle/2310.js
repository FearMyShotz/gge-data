Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleKingdomVillageInfoVO() {}
  CastleKingdomVillageInfoVO.prototype.parseParamObject = function (e) {
    if (e[0][0] == r.WorldConst.AREA_TYPE_ISLE_RESOURCE) {
      this._villageVO = new o.ResourceIsleMapobjectVO();
    } else {
      this._villageVO = new a.VillageMapobjectVO();
    }
    this._villageVO.parseAreaInfo(e[0]);
    this._unitInventory = new s.UnitInventoryDictionary();
    this._unitInventory.fillFromWodAmountArray(e[1]);
  };
  Object.defineProperty(CastleKingdomVillageInfoVO.prototype, "villageMapObjectVO", {
    get: function () {
      return this._villageVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleKingdomVillageInfoVO.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  return CastleKingdomVillageInfoVO;
}();
exports.CastleKingdomVillageInfoVO = n;
var o = require("./912.js");
var a = require("./597.js");
var s = require("./156.js");
var r = require("./5.js");