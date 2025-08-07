Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function KingdomVillagesInfoVO() {
    this._kID = 0;
    this._wallWodId = 0;
    this._gateWodId = 0;
    this._keepWodId = 0;
    this._moatWodId = 0;
    this._unitWallCount = 0;
    this._peasants = 0;
    this._guards = 0;
    this._productivityWoodBoost = 0;
    this._productivityStoneBoost = 0;
    this._productivityFoodBoost = 0;
    this._productivityCoalBoost = 0;
    this._productivityOilBoost = 0;
    this._productivityGlassBoost = 0;
    this._productivityIronBoost = 0;
  }
  KingdomVillagesInfoVO.prototype.fillFromParamXML = function (e) {
    this._kID = parseInt(e.kID || "");
    this._wallWodId = parseInt(e.wallWodId || "");
    this._gateWodId = parseInt(e.gateWodId || "");
    this._keepWodId = parseInt(e.keepWodId || "");
    this._moatWodId = parseInt(e.moatWodId || "");
    this._unitWallCount = parseInt(e.unitWallCount || "");
    this._peasants = parseInt(e.peasants || "");
    this._guards = parseInt(e.guards || "");
    this._productivityWoodBoost = parseInt(e.productivityWoodBoost || "");
    this._productivityStoneBoost = parseInt(e.productivityStoneBoost || "");
    this._productivityFoodBoost = parseInt(e.productivityFoodBoost || "");
    this._productivityCoalBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("productivityCoalBoost", e, "0"));
    this._productivityOilBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("productivityOilBoost", e, "0"));
    this._productivityGlassBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("productivityGlassBoost", e, "0"));
    this._productivityIronBoost = parseInt(n.CastleXMLUtils.getValueOrDefault("productivityIronBoost", e, "0"));
  };
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "gateLevel", {
    get: function () {
      return s.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_BUILDING).get(this._gateWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "wallLevel", {
    get: function () {
      return s.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_BUILDING).get(this._wallWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "keepLevel", {
    get: function () {
      return s.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_BUILDING).get(this._keepWodId).level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "moatLevel", {
    get: function () {
      if (this._moatWodId < 0) {
        return 0;
      } else {
        return s.CastleModel.wodData.voSubList(a.CastleWodData.TYPE_BUILDING).get(this._moatWodId).level;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "kID", {
    get: function () {
      return this._kID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityWoodBoost", {
    get: function () {
      return this._productivityWoodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityStoneBoost", {
    get: function () {
      return this._productivityStoneBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityFoodBoost", {
    get: function () {
      return this._productivityFoodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityCoalBoost", {
    get: function () {
      return this._productivityCoalBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityOilBoost", {
    get: function () {
      return this._productivityOilBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityGlassBoost", {
    get: function () {
      return this._productivityGlassBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(KingdomVillagesInfoVO.prototype, "productivityIronBoost", {
    get: function () {
      return this._productivityIronBoost;
    },
    enumerable: true,
    configurable: true
  });
  return KingdomVillagesInfoVO;
}();
exports.KingdomVillagesInfoVO = o;
var a = require("./56.js");
var s = require("./4.js");