Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function CastleGemLevelInfoVO() {
    this._levelID = 0;
    this._sellValueC1 = 0;
    this._insertCostC1 = 0;
    this._craftSuccessChance = 0;
    this._craftCostC1 = 0;
    this._craftCostC2 = 0;
    this._removalCostC2 = 0;
  }
  CastleGemLevelInfoVO.prototype.parseXML = function (e) {
    this._levelID = parseInt(e.gemLevelID || "");
    this._sellValueC1 = parseInt(e.saleValue || "");
    this._insertCostC1 = parseInt(e.insertCostC1 || "");
    this._craftSuccessChance = parseInt(n.CastleXMLUtils.getValueOrDefault("craftSuccessChance", e, "0"));
    this._craftCostC1 = parseInt(n.CastleXMLUtils.getValueOrDefault("craftCostC1", e, "0"));
    this._craftCostC2 = parseInt(n.CastleXMLUtils.getValueOrDefault("craftCostC2", e, "0"));
    this._removalCostC2 = parseInt(n.CastleXMLUtils.getValueOrDefault("removalCostC2", e, "0"));
  };
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "levelID", {
    get: function () {
      return this._levelID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "sellValueC1", {
    get: function () {
      return this._sellValueC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "insertCostC1", {
    get: function () {
      return this._insertCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftSuccessChance", {
    get: function () {
      return this._craftSuccessChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftCostC1", {
    get: function () {
      return this._craftCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "craftCostC2", {
    get: function () {
      return this._craftCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGemLevelInfoVO.prototype, "removalCostC2", {
    get: function () {
      return this._removalCostC2;
    },
    enumerable: true,
    configurable: true
  });
  CastleGemLevelInfoVO.NO_CRAFT_FAIL_CHANCE = 100;
  return CastleGemLevelInfoVO;
}();
exports.CastleGemLevelInfoVO = o;